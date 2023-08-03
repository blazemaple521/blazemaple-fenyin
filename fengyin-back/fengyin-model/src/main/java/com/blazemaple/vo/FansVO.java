package com.blazemaple.vo;

import lombok.Data;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/6/3 11:19
 */
@Data
public class FansVO {

    private String fanId;
    private String nickname;
    private String face;
    private boolean isFriend = false;
}
