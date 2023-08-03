package com.blazemaple.config;

import com.blazemaple.common.RabbitMQConfig;
import com.blazemaple.mo.MessageMO;
import com.blazemaple.service.MessageService;
import com.blazemaple.utils.JsonUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/6/10 16:19
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class RabbitMQConsumer {

    private final MessageService messageService;

    @RabbitListener(queues = {RabbitMQConfig.QUEUE_SYS_MSG})
    public void watchQueue(String payload, Message message) {

        String routingKey = message.getMessageProperties().getReceivedRoutingKey();
        log.info(payload);
        log.info(routingKey);
        MessageMO messageMO = JsonUtils.jsonToPojo(payload, MessageMO.class);
        messageService.createMsg(messageMO);
    }

}
