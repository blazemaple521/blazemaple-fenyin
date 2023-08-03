package com.blazemaple.service.impl;

import com.blazemaple.common.BaseInfoProperties;
import com.blazemaple.common.RabbitMQConfig;
import com.blazemaple.enums.MessageEnum;
import com.blazemaple.enums.YesOrNo;
import com.blazemaple.mapper.FansCustomMapper;
import com.blazemaple.mapper.FansMapper;
import com.blazemaple.mo.MessageMO;
import com.blazemaple.pojo.Fans;
import com.blazemaple.service.FanService;
import com.blazemaple.utils.JsonUtils;
import com.blazemaple.utils.PagedGridResult;
import com.blazemaple.vo.FansVO;
import com.blazemaple.vo.VlogerVO;
import com.github.pagehelper.PageHelper;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.n3r.idworker.Sid;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/6/2 15:58
 */
@Service
@RequiredArgsConstructor
public class FanServiceImpl extends BaseInfoProperties implements FanService {

    private final FansMapper fansMapper;

    private final FansCustomMapper fansCustomMapper;

    private final RabbitTemplate rabbitTemplate;

    @Override
    public void doFollow(String userId, String vlogerId) {
        String sid = Sid.nextShort();
        Fans fans = new Fans();
        fans.setId(sid);
        fans.setFanId(userId);
        fans.setVlogerId(vlogerId);
        Fans vloger = queryFansRelationship(vlogerId, userId);
        if (vloger != null) {
            fans.setIsFanFriendOfMine(YesOrNo.YES.type);
            vloger.setIsFanFriendOfMine(YesOrNo.YES.type);
            fansMapper.updateByPrimaryKeySelective(vloger);
        } else {
            fans.setIsFanFriendOfMine(YesOrNo.NO.type);
        }
        fansMapper.insert(fans);
        MessageMO messageMO=new MessageMO();
        messageMO.setFromUserId(userId);
        messageMO.setToUserId(vlogerId);
        messageMO.setMsgType(MessageEnum.FOLLOW_YOU.type);
        rabbitTemplate.convertAndSend(RabbitMQConfig.EXCHANGE_MSG,
            "sys.msg."+MessageEnum.FOLLOW_YOU.enValue,
            JsonUtils.objectToJson(messageMO));
    }

    @Override
    public void doCancel(String userId, String vlogerId) {
        Fans fan = queryFansRelationship(userId, vlogerId);
        Fans vloger = queryFansRelationship(vlogerId, userId);
        if (vloger != null && vloger.getIsFanFriendOfMine() == YesOrNo.YES.type) {
            vloger.setIsFanFriendOfMine(YesOrNo.NO.type);
            fansMapper.updateByPrimaryKeySelective(vloger);
        }
        fansMapper.delete(fan);
    }

    @Override
    public boolean doFollowVloger(String userId, String vlogerId) {
        Fans fans = queryFansRelationship(userId, vlogerId);
        return fans != null;
    }

    @Override
    public PagedGridResult queryMyFollows(String userId, Integer page, Integer pageSize) {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("userId", userId);
        PageHelper.startPage(page, pageSize);
        List<VlogerVO> myFollows = fansCustomMapper.queryMyFollows(paramMap);
        return setterPagedGrid(myFollows, page);
    }

    @Override
    public PagedGridResult queryMyFans(String userId, Integer page, Integer pageSize) {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("userId", userId);
        PageHelper.startPage(page, pageSize);
        List<FansVO> myFans = fansCustomMapper.queryMyFans(paramMap);
        List<FansVO> collect = myFans.stream().map(fansVO -> {
            String relationship = redisOperator.get(
                REDIS_FANS_AND_VLOGER_RELATIONSHIP + ":" + userId + ":" + fansVO.getFanId());
            if (StringUtils.isNotBlank(relationship) && relationship.equalsIgnoreCase("1")) {
                fansVO.setFriend(true);
            }
            return fansVO;
        }).collect(Collectors.toList());
        return setterPagedGrid(collect, page);
    }


    public Fans queryFansRelationship(String fanId, String vlogerId) {
        Example example = new Example(Fans.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("fanId", fanId);
        criteria.andEqualTo("vlogerId", vlogerId);
        List<Fans> fans = fansMapper.selectByExample(example);
        Fans fan = null;
        if (fans != null && fans.size() > 0 && !fans.isEmpty()) {
            fan = fans.get(0);
        }
        return fan;
    }
}
