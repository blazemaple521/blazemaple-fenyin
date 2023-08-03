package com.blazemaple.exception;

import com.blazemaple.enums.ResponseStatusEnum;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/5/28 19:20
 */
public class CommonException {

    public static void display(ResponseStatusEnum responseStatusEnum) {
        throw new BusinessException(responseStatusEnum);
    }
}
