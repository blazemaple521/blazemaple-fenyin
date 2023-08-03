package com.blazemaple.service.impl;

import com.blazemaple.bo.CommentBO;
import com.blazemaple.common.BaseInfoProperties;
import com.blazemaple.common.RabbitMQConfig;
import com.blazemaple.enums.MessageEnum;
import com.blazemaple.enums.YesOrNo;
import com.blazemaple.mapper.CommentCustomMapper;
import com.blazemaple.mapper.CommentMapper;
import com.blazemaple.mo.MessageMO;
import com.blazemaple.pojo.Comment;
import com.blazemaple.pojo.Vlog;
import com.blazemaple.service.CommentService;
import com.blazemaple.service.MessageService;
import com.blazemaple.service.VlogService;
import com.blazemaple.utils.JsonUtils;
import com.blazemaple.utils.PagedGridResult;
import com.blazemaple.vo.CommentVO;
import com.blazemaple.vo.IndexVlogVO;
import com.github.pagehelper.PageHelper;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.checkerframework.checker.units.qual.C;
import org.n3r.idworker.Sid;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/6/4 19:23
 */
@Service
@RequiredArgsConstructor
public class CommentServiceImpl extends BaseInfoProperties implements CommentService {

    private final CommentMapper commentMapper;

    private final CommentCustomMapper commentCustomMapper;

    private final RabbitTemplate rabbitTemplate;

    private final VlogService vlogService;

    @Override
    public CommentVO createComment(CommentBO commentBO) {
        String commentId = Sid.nextShort();
        Comment comment = new Comment();
        comment.setId(commentId);
        comment.setLikeCounts(0);
        comment.setCreateTime(new Date());
        BeanUtils.copyProperties(commentBO, comment);
        commentMapper.insert(comment);
        redisOperator.increment(REDIS_VLOG_COMMENT_COUNTS + ":" + commentBO.getVlogId(), 1);
        CommentVO commentVO = new CommentVO();
        BeanUtils.copyProperties(comment, commentVO);

        Integer msgType = MessageEnum.COMMENT_VLOG.type;
        String toUserId = commentBO.getVlogerId();
        String msgTypeStr = MessageEnum.COMMENT_VLOG.enValue;
        if (commentBO.getFatherCommentId() != null && !commentBO.getFatherCommentId().equalsIgnoreCase("0")) {
            msgType = MessageEnum.REPLY_YOU.type;
            msgTypeStr = MessageEnum.REPLY_YOU.enValue;
            Comment fatherComment = this.getComment(commentBO.getFatherCommentId());
            toUserId = fatherComment.getCommentUserId();
        }
        Map<String, Object> msgContent = new HashMap<>();
        Vlog vlog = vlogService.getVlog(commentBO.getVlogId());
        msgContent.put("commentId", commentId);
        msgContent.put("commentContent", commentBO.getContent());
        msgContent.put("vlogId", commentBO.getVlogId());
        msgContent.put("vlogCover", vlog.getCover());
        MessageMO messageMO = new MessageMO();
        messageMO.setFromUserId(commentBO.getCommentUserId());
        messageMO.setToUserId(toUserId);
        messageMO.setMsgContent(msgContent);
        messageMO.setMsgType(msgType);
        rabbitTemplate.convertAndSend(RabbitMQConfig.EXCHANGE_MSG,
            "sys.msg." + msgTypeStr,
            JsonUtils.objectToJson(messageMO));
        return commentVO;
    }

    @Override
    public Comment getComment(String commentId) {
        return commentMapper.selectByPrimaryKey(commentId);
    }

    @Override
    public void deleteComment(String userId, String commentId, String vlogId) {
        Comment comment = new Comment();
        comment.setId(commentId);
        comment.setCommentUserId(userId);
        commentMapper.delete(comment);
        redisOperator.decrement(REDIS_VLOG_COMMENT_COUNTS + ":" + vlogId, 1);
    }

    @Override
    public PagedGridResult queryVlogComments(String vlogId, String userId, Integer page, Integer pageSize) {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("vlogId", vlogId);
        PageHelper.startPage(page, pageSize);
        List<CommentVO> commentList = commentCustomMapper.getCommentList(paramMap);
        List<CommentVO> collect = commentList.stream().map(commentVO -> {
            return setCommentVOIsLikeAndLikedCounts(userId, commentVO);
        }).collect(Collectors.toList());
        return setterPagedGrid(collect, page);
    }


    private CommentVO setCommentVOIsLikeAndLikedCounts(String userId, CommentVO commentVO) {
        String commentId = commentVO.getCommentId();
        String commentLikedCountsStr = redisOperator.get(REDIS_VLOG_COMMENT_LIKED_COUNTS + ":" + commentId);
        Integer counts = 0;
        if (StringUtils.isNotBlank(commentLikedCountsStr)) {
            counts = Integer.valueOf(commentLikedCountsStr);
        }
        commentVO.setLikeCounts(counts);
        String doUserLikeComment = redisOperator.get(REDIS_USER_LIKE_COMMENT + ":" + userId + ":" + commentId);
        if (StringUtils.isNotBlank(doUserLikeComment) && doUserLikeComment.equalsIgnoreCase("1")) {
            commentVO.setIsLike(YesOrNo.YES.type);
        }
        return commentVO;
    }
}
