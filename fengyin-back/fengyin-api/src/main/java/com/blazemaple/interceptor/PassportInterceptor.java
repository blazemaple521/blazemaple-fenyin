package com.blazemaple.interceptor;

import com.blazemaple.common.BaseInfoProperties;
import com.blazemaple.enums.ResponseStatusEnum;
import com.blazemaple.exception.CommonException;
import com.blazemaple.utils.IPUtils;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/5/27 16:44
 */
public class PassportInterceptor extends BaseInfoProperties implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
        throws Exception {
        String userIp = IPUtils.getRequestIp(request);
        boolean keyIsExist = redisOperator.keyIsExist(MOBILE_SMSCODE + ":" + userIp);
        if (keyIsExist) {
            CommonException.display(ResponseStatusEnum.SMS_NEED_WAIT_ERROR);
            return false;
        }
        return true;
    }

}
