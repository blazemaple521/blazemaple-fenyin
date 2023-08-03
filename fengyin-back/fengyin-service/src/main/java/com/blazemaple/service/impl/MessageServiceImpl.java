package com.blazemaple.service.impl;

import com.blazemaple.mo.MessageMO;
import com.blazemaple.pojo.Users;
import com.blazemaple.repository.MessageRepository;
import com.blazemaple.service.MessageService;
import com.blazemaple.service.UserService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Map;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/6/8 16:24
 */
@Service
@RequiredArgsConstructor
public class MessageServiceImpl implements MessageService {

    private final MessageRepository messageRepository;

    private final UserService userService;

    @Override
    public void createMsg(MessageMO messageMO) {


        Users fromUser = userService.getUserInfo(messageMO.getFromUserId());
        messageMO.setFromNickname(fromUser.getNickname());
        messageMO.setFromFace(fromUser.getFace());
        messageMO.setCreateTime(new Date());
        messageRepository.save(messageMO);
    }
}
