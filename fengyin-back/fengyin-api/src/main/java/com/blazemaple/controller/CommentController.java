package com.blazemaple.controller;

import com.blazemaple.bo.CommentBO;
import com.blazemaple.common.BaseInfoProperties;
import com.blazemaple.common.BlazeMapleJSONResult;
import com.blazemaple.common.RabbitMQConfig;
import com.blazemaple.enums.MessageEnum;
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
import io.swagger.models.auth.In;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/6/1 16:01
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/comment")
public class CommentController extends BaseInfoProperties {

    private final CommentService commentService;

    private final RabbitTemplate rabbitTemplate;

    private final VlogService vlogService;

    @PostMapping("/create")
    public BlazeMapleJSONResult createComment(@Valid @RequestBody CommentBO commentBO) {
        CommentVO commentVO = commentService.createComment(commentBO);
        return BlazeMapleJSONResult.ok(commentVO);
    }

    @GetMapping("/counts")
    public BlazeMapleJSONResult getVlogCommentCounts(@RequestParam String vlogId) {
        String counts = redisOperator.get(REDIS_VLOG_COMMENT_COUNTS + ":" + vlogId);
        if (StringUtils.isBlank(counts)) {
            counts = "0";
        }
        return BlazeMapleJSONResult.ok(Integer.valueOf(counts));
    }

    @GetMapping("/list")
    public BlazeMapleJSONResult getVlogComments(@RequestParam(defaultValue = "") String userId,@RequestParam String vlogId,
        @RequestParam Integer page,@RequestParam Integer pageSize){
        if (page == null) {
            page = COMMON_START_PAGE;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }
        PagedGridResult vlogComments = commentService.queryVlogComments(vlogId,userId, page, pageSize);
        return BlazeMapleJSONResult.ok(vlogComments);
    }

    @DeleteMapping("/delete")
    public BlazeMapleJSONResult deleteComment(@RequestParam String commentUserId,
        @RequestParam String commentId, @RequestParam String vlogId) {
        commentService.deleteComment(commentUserId, commentId, vlogId);
        return BlazeMapleJSONResult.ok();
    }

    @PostMapping("/like")
    public BlazeMapleJSONResult likeComment(@RequestParam String commentId, @RequestParam String userId) {
        redisOperator.increment(REDIS_VLOG_COMMENT_LIKED_COUNTS+":"+commentId,1);
        redisOperator.set(REDIS_USER_LIKE_COMMENT+":"+userId+":"+commentId,"1");
        Comment comment = commentService.getComment(commentId);
        Map<String,Object> msgContent=new HashMap<>();
        Vlog vlog = vlogService.getVlog(comment.getVlogId());
        msgContent.put("commentId",commentId);
        msgContent.put("vlogId",vlog.getId());
        msgContent.put("vlogCover",vlog.getCover());
        MessageMO messageMO=new MessageMO();
        messageMO.setFromUserId(userId);
        messageMO.setToUserId(comment.getCommentUserId());
        messageMO.setMsgContent(msgContent);
        messageMO.setMsgType(MessageEnum.LIKE_COMMENT.type);
        rabbitTemplate.convertAndSend(RabbitMQConfig.EXCHANGE_MSG,
            "sys.msg."+MessageEnum.LIKE_COMMENT.enValue,
            JsonUtils.objectToJson(messageMO));
        return BlazeMapleJSONResult.ok();
    }

    @PostMapping("/unlike")
    public BlazeMapleJSONResult unlikeComment(@RequestParam String commentId, @RequestParam String userId) {
        redisOperator.decrement(REDIS_VLOG_COMMENT_LIKED_COUNTS+":"+commentId,1);
        redisOperator.del(REDIS_USER_LIKE_COMMENT+":"+userId+":"+commentId);
        return BlazeMapleJSONResult.ok();
    }

}
