package com.blazemaple.controller;

import com.blazemaple.common.BaseInfoProperties;
import com.blazemaple.common.BlazeMapleJSONResult;
import com.blazemaple.enums.ResponseStatusEnum;
import com.blazemaple.pojo.Users;
import com.blazemaple.service.FanService;
import com.blazemaple.service.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.*;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/6/2 15:58
 */
@RestController
@RequestMapping("/fans")
@RequiredArgsConstructor
public class FanController extends BaseInfoProperties {

    private final FanService fanService;

    private final UserService userService;

    @PostMapping("/follow")
    public BlazeMapleJSONResult follow(@RequestParam("myId") String userId, @RequestParam String vlogerId) {
        if (StringUtils.isBlank(userId) || StringUtils.isBlank(vlogerId)) {
            return BlazeMapleJSONResult.errorCustom(ResponseStatusEnum.SYSTEM_ERROR);
        }
        if (userId.equalsIgnoreCase(vlogerId)) {
            return BlazeMapleJSONResult.errorCustom(ResponseStatusEnum.SYSTEM_RESPONSE_NO_INFO);
        }
        Users user = userService.getUserInfo(userId);
        Users vloger = userService.getUserInfo(vlogerId);
        if (user == null || vloger == null) {
            return BlazeMapleJSONResult.errorCustom(ResponseStatusEnum.SYSTEM_RESPONSE_NO_INFO);
        }
        fanService.doFollow(userId, vlogerId);
        redisOperator.increment(REDIS_MY_FOLLOWS_COUNTS + ":" + userId, 1);
        redisOperator.increment(REDIS_MY_FANS_COUNTS + ":" + vlogerId, 1);
        redisOperator.set(REDIS_FANS_AND_VLOGER_RELATIONSHIP + ":" + userId + ":" + vlogerId, "1");
        return BlazeMapleJSONResult.ok();
    }

    @PostMapping("/cancel")
    public BlazeMapleJSONResult cancel(@RequestParam("myId") String userId, @RequestParam String vlogerId) {
        if (StringUtils.isBlank(userId) || StringUtils.isBlank(vlogerId)) {
            return BlazeMapleJSONResult.errorCustom(ResponseStatusEnum.SYSTEM_ERROR);
        }

        fanService.doCancel(userId, vlogerId);
        redisOperator.decrement(REDIS_MY_FOLLOWS_COUNTS + ":" + userId, 1);
        redisOperator.decrement(REDIS_MY_FANS_COUNTS + ":" + vlogerId, 1);
        redisOperator.del(REDIS_FANS_AND_VLOGER_RELATIONSHIP + ":" + userId + ":" + vlogerId);
        return BlazeMapleJSONResult.ok();
    }

    @GetMapping("/queryDoIFollowVloger")
    public BlazeMapleJSONResult doFollowVloger(@RequestParam("myId") String userId, @RequestParam String vlogerId) {
        return BlazeMapleJSONResult.ok(fanService.doFollowVloger(userId, vlogerId));
    }

    @GetMapping("/queryMyFollows")
    public BlazeMapleJSONResult queryMyFollows(@RequestParam("myId") String userId, @RequestParam Integer page,
        @RequestParam Integer pageSize) {
        if (page == null) {
            page = COMMON_START_PAGE;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }
        return BlazeMapleJSONResult.ok(fanService.queryMyFollows(userId, page, pageSize));
    }

    @GetMapping("/queryMyFans")
    public BlazeMapleJSONResult queryMyFans(@RequestParam("myId") String userId, @RequestParam Integer page,
        @RequestParam Integer pageSize) {
        if (page == null) {
            page = COMMON_START_PAGE;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }
        return BlazeMapleJSONResult.ok(fanService.queryMyFans(userId, page, pageSize));
    }


}
