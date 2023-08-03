package com.blazemaple.bo;

import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/5/28 19:45
 */
@Data
public class RegisterLoginBO {

    @NotBlank(message = "手机号不能为空")
    @Length(min = 11, max = 11, message = "手机号长度不正确")
    private String mobile;

    @NotBlank(message = "验证码不能为空")
    private String smsCode;
}
