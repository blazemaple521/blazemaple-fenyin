package com.blazemaple.mo;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
import java.util.Map;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/6/8 15:19
 */
@Data
@Document("message")
public class MessageMO {

    @Id
    private String id;

    @Field("fromUserId")
    private String fromUserId;

    @Field("fromNickname")
    private String fromNickname;

    @Field("fromFace")
    private String fromFace;

    @Field("toUserId")
    private String toUserId;

    @Field("msgType")
    private Integer msgType;

    @Field("msgContent")
    private Map<String,Object> msgContent;

    @Field("createTime")
    private Date createTime;
}
