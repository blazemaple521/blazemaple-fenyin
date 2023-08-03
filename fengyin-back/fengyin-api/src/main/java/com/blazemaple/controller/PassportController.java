package com.blazemaple.controller;

import com.blazemaple.bo.RegisterLoginBO;
import com.blazemaple.common.BaseInfoProperties;
import com.blazemaple.common.BlazeMapleJSONResult;
import com.blazemaple.enums.ResponseStatusEnum;
import com.blazemaple.pojo.Users;
import com.blazemaple.service.UserService;
import com.blazemaple.utils.IPUtils;
import com.blazemaple.utils.SMSUtils;
import com.blazemaple.vo.UserVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.UUID;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/5/24 20:02
 */
@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/passport")
public class PassportController extends BaseInfoProperties {

    private final SMSUtils smsUtils;

    private final UserService userService;

    @PostMapping("/getSMSCode")
    public BlazeMapleJSONResult getSMSCode(@RequestParam String mobile, HttpServletRequest request) throws Exception {
        if (StringUtils.isBlank(mobile)) {
            return BlazeMapleJSONResult.ok();
        }

        //获取用户IP
        String userIp = IPUtils.getRequestIp(request);
        //根据用户ip,限制用户60秒之内只能获取一次验证码
        redisOperator.setnx60s(MOBILE_SMSCODE + ":" + userIp, userIp);
        String code = (int) ((Math.random() * 9 + 1) * 100000) + "";
        smsUtils.sendSMS(mobile, code);
        log.info(code);
        //验证码放入redis中
        redisOperator.set(MOBILE_SMSCODE + ":" + mobile, code, 30 * 60);
        return BlazeMapleJSONResult.ok();
    }

    @PostMapping("/login")
    public BlazeMapleJSONResult login(@Valid @RequestBody RegisterLoginBO registerLoginBO) {
        String mobile = registerLoginBO.getMobile();
        String verifyCode = registerLoginBO.getSmsCode();

        String redisCode = redisOperator.get(MOBILE_SMSCODE + ":" + mobile);
        if (StringUtils.isBlank(redisCode) || !redisCode.equalsIgnoreCase(verifyCode)) {
            return BlazeMapleJSONResult.errorCustom(ResponseStatusEnum.SMS_CODE_ERROR);
        }
        Users user = userService.queryMobileIsExist(mobile);
        if (user == null) {
            user = userService.createUser(mobile);
        }
        String uToken = UUID.randomUUID().toString();
        redisOperator.set(REDIS_USER_TOKEN + ":" + user.getId(), uToken);
        redisOperator.del(MOBILE_SMSCODE + ":" + mobile);
        UserVO userVo = new UserVO();
        BeanUtils.copyProperties(user, userVo);
        userVo.setUserToken(uToken);
        return BlazeMapleJSONResult.ok(userVo);
    }

    @PostMapping("/logout")
    public BlazeMapleJSONResult logout(@RequestParam String userId) {
        redisOperator.del(REDIS_USER_TOKEN + ":" + userId);
        return BlazeMapleJSONResult.ok();
    }
}
