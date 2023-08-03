package com.blazemaple.controller;

import com.blazemaple.common.BlazeMapleJSONResult;
import com.blazemaple.common.RabbitMQConfig;
import com.blazemaple.utils.SMSUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/5/23 16:59
 */
@RestController
@RequiredArgsConstructor
public class TestController {

    private final SMSUtils smsUtils;

    private final RabbitTemplate rabbitTemplate;

    @GetMapping("/hello")
    public String sayHello() {
        return "hello";
    }


    @GetMapping("/send")
    public Object sendCode() throws Exception {
        String code = "123456";

        smsUtils.sendSMS("18120353389", code);

        return BlazeMapleJSONResult.ok();
    }

//    @PostMapping("/sendMsg")
//    public void sendMsg(){
//        rabbitTemplate.convertAndSend(RabbitMQConfig.EXCHANGE_MSG,"sys.msg.delete","删除了一个消息");
//    }


}
