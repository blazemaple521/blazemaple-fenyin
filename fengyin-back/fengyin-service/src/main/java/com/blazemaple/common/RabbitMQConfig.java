package com.blazemaple.common;

import org.springframework.amqp.core.*;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/5/27 16:54
 * <p>
 * 定义交换机 定义队列 创建交换机 创建队列 队列和交换机进行绑定
 */
@Configuration
public class RabbitMQConfig {

    public static final String EXCHANGE_MSG = "exchange_msg";

    public static final String  QUEUE_SYS_MSG = "queue_sys_msg";

    @Bean(EXCHANGE_MSG)
    public Exchange exchange() {
        return ExchangeBuilder
            .topicExchange(EXCHANGE_MSG)      //类型
            .durable(true)         //持久化
            .build();
    }

    @Bean(QUEUE_SYS_MSG)
    public Queue queue() {
        return new Queue(QUEUE_SYS_MSG);
    }

    @Bean
    public Binding binding(@Qualifier(EXCHANGE_MSG) Exchange exchange,
                           @Qualifier(QUEUE_SYS_MSG) Queue queue) {
        return BindingBuilder.bind(queue).to(exchange).with("sys.msg.*").noargs();

    }

}
