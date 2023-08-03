package com.blazemaple.service.impl;

import com.blazemaple.bo.VlogBO;
import com.blazemaple.common.BaseInfoProperties;
import com.blazemaple.common.RabbitMQConfig;
import com.blazemaple.enums.MessageEnum;
import com.blazemaple.enums.YesOrNo;
import com.blazemaple.mapper.MyLikedVlogMapper;
import com.blazemaple.mapper.VlogCustomMapper;
import com.blazemaple.mapper.VlogMapper;
import com.blazemaple.mo.MessageMO;
import com.blazemaple.pojo.MyLikedVlog;
import com.blazemaple.pojo.Vlog;
import com.blazemaple.service.MessageService;
import com.blazemaple.service.VlogService;
import com.blazemaple.utils.JsonUtils;
import com.blazemaple.utils.PagedGridResult;
import com.blazemaple.vo.IndexVlogVO;
import com.github.pagehelper.PageHelper;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.n3r.idworker.Sid;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/6/1 15:52
 */
@Service
@RequiredArgsConstructor
public class VlogServiceImpl extends BaseInfoProperties implements VlogService {

    private final VlogMapper vlogMapper;

    private final VlogCustomMapper vlogCustomMapper;

    private final MyLikedVlogMapper myLikedVlogMapper;

    private final RabbitTemplate rabbitTemplate;

    @Override
    @Transactional
    public void createVlog(VlogBO vlogBO) {
        String vid = Sid.nextShort();
        Vlog vlog = new Vlog();
        BeanUtils.copyProperties(vlogBO, vlog);
        vlog.setId(vid);
        vlog.setLikeCounts(0);
        vlog.setCommentsCounts(0);
        vlog.setIsPrivate(YesOrNo.NO.type);
        vlog.setCreatedTime(new Date());
        vlog.setUpdatedTime(new Date());
        vlogMapper.insert(vlog);
    }

    @Override
    public PagedGridResult getIndexVlogList(String userId, String search, Integer page, Integer pageSize) {
        PageHelper.startPage(page, pageSize);
        Map<String, Object> paramMap = new HashMap<>();
        if (StringUtils.isNotBlank(search)) {
            paramMap.put("search", search);
        }
        List<IndexVlogVO> indexVlogList = vlogCustomMapper.getIndexVlogList(paramMap);
        List<IndexVlogVO> collect = indexVlogList.stream().map(vlogVO -> {
            return setIndexVoIsLikeAndIsFollow(userId, vlogVO);
        }).collect(Collectors.toList());

        return setterPagedGrid(collect, page);
    }

    private boolean doILikeVlog(String userId, String vlogId) {
        String doILike = redisOperator.get(REDIS_USER_LIKE_VLOG + ":" + userId + ":" + vlogId);
        if (StringUtils.isNotBlank(doILike) && doILike.equalsIgnoreCase("1")) {
            return true;
        }
        return false;
    }

    private boolean doIFollowVloger(String userId, String vlogerId) {
        String doIFollow = redisOperator.get(REDIS_FANS_AND_VLOGER_RELATIONSHIP + ":" + userId + ":" + vlogerId);
        if (StringUtils.isNotBlank(doIFollow) && doIFollow.equalsIgnoreCase("1")) {
            return true;
        }
        return false;
    }

    @Override
    public Integer getVlogLikeCounts(String vlogId) {
        String conuntStr = redisOperator.get(REDIS_VLOG_BE_LIKED_COUNTS + ":" + vlogId);
        if (StringUtils.isBlank(conuntStr)) {
            conuntStr = "0";
        }
        return Integer.valueOf(conuntStr);
    }

    @Override
    public PagedGridResult getMyLikedVlogList(String userId, Integer page, Integer pageSize) {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("userId", userId);
        PageHelper.startPage(page, pageSize);
        List<IndexVlogVO> myLikedVlogList = vlogCustomMapper.getMyLikedVlogList(paramMap);
        return setterPagedGrid(myLikedVlogList, page);

    }

    @Override
    public PagedGridResult getMyFollowVlogList(String userId, Integer page, Integer pageSize) {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("userId", userId);
        PageHelper.startPage(page, pageSize);
        List<IndexVlogVO> myFollowVlogList = vlogCustomMapper.getMyFollowVlogList(paramMap);
        List<IndexVlogVO> collect = myFollowVlogList.stream().map(vlogVO -> {
            return setIndexVoIsLikeAndIsFollow(userId, vlogVO);
        }).collect(Collectors.toList());
        return setterPagedGrid(collect, page);
    }

    @Override
    public PagedGridResult getMyFriendVlogList(String userId, Integer page, Integer pageSize) {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("userId", userId);
        PageHelper.startPage(page, pageSize);
        List<IndexVlogVO> myFriendVlogList = vlogCustomMapper.getMyFriendVlogList(paramMap);
        List<IndexVlogVO> collect = myFriendVlogList.stream().map(vlogVO -> {
            return setIndexVoIsLikeAndIsFollow(userId, vlogVO);
        }).collect(Collectors.toList());
        return setterPagedGrid(collect, page);
    }

    private IndexVlogVO setIndexVoIsLikeAndIsFollow(String userId, IndexVlogVO vlogVO) {
        String vlogId = vlogVO.getVlogId();
        String vlogerId = vlogVO.getVlogerId();
        if (StringUtils.isNotBlank(userId)) {
            vlogVO.setDoILikeThisVlog(doILikeVlog(userId, vlogId));
            vlogVO.setDoIFollowVloger(doIFollowVloger(userId, vlogerId));
        }
        vlogVO.setLikeCounts(getVlogLikeCounts(vlogId));
        return vlogVO;
    }

    @Override
    public IndexVlogVO getVlogDetailById(String userId, String vlogId) {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("vlogId", vlogId);
        List<IndexVlogVO> list = vlogCustomMapper.getVlogDetailById(paramMap);
        if (list != null && list.size() > 0 && !list.isEmpty()) {
            IndexVlogVO indexVlogVO = list.get(0);
            return setIndexVoIsLikeAndIsFollow(userId, indexVlogVO);
        }
        return null;
    }

    @Override
    @Transactional
    public void changeToPrivateOrPublic(String vlogId, String userId, Integer flag) {
        Example example = new Example(Vlog.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("vlogerId", userId);
        criteria.andEqualTo("id", vlogId);
        Vlog vlog = new Vlog();
        vlog.setIsPrivate(flag);
        vlogMapper.updateByExampleSelective(vlog, example);
    }

    @Override
    public PagedGridResult queryMyVlogList(String userId, Integer page, Integer pageSize, Integer flag) {
        Example example = new Example(Vlog.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("vlogerId", userId);
        criteria.andEqualTo("isPrivate", flag);
        PageHelper.startPage(page, pageSize);
        List<Vlog> vlogs = vlogMapper.selectByExample(example);
        return setterPagedGrid(vlogs, page);
    }

    @Override
    @Transactional
    public void userDoLikeVlog(String userId, String vlogId) {
        String id = Sid.nextShort();
        MyLikedVlog myLikedVlog = new MyLikedVlog();
        myLikedVlog.setId(id);
        myLikedVlog.setVlogId(vlogId);
        myLikedVlog.setUserId(userId);
        myLikedVlogMapper.insert(myLikedVlog);
        Vlog vlog = this.getVlog(vlogId);
        Map<String,Object> msgContent=new HashMap<>();
        msgContent.put("vlogId",vlogId);
        msgContent.put("vlogCover",vlog.getCover());
        MessageMO messageMO=new MessageMO();
        messageMO.setFromUserId(userId);
        messageMO.setToUserId(vlog.getVlogerId());
        messageMO.setMsgContent(msgContent);
        messageMO.setMsgType(MessageEnum.LIKE_VLOG.type);
        rabbitTemplate.convertAndSend(RabbitMQConfig.EXCHANGE_MSG,
            "sys.msg."+MessageEnum.LIKE_VLOG.enValue,
            JsonUtils.objectToJson(messageMO));
    }

    @Override
    public Vlog getVlog(String vlogId){
        return vlogMapper.selectByPrimaryKey(vlogId);
    }

    @Override
    @Transactional
    public void flushCounts(String vlogId, Integer likeCounts,Integer commentCounts) {
        Vlog vlog=new Vlog();
        vlog.setId(vlogId);
        vlog.setLikeCounts(likeCounts);
        vlog.setCommentsCounts(commentCounts);
        vlogMapper.updateByPrimaryKeySelective(vlog);
    }


    @Override
    @Transactional
    public void userUnLikeVlog(String userId, String vlogId) {
        MyLikedVlog myLikedVlog = new MyLikedVlog();
        myLikedVlog.setUserId(userId);
        myLikedVlog.setVlogId(vlogId);
        myLikedVlogMapper.delete(myLikedVlog);
    }
}
