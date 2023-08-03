package com.blazemaple.controller;

import com.blazemaple.bo.VlogBO;
import com.blazemaple.common.BaseInfoProperties;
import com.blazemaple.common.BlazeMapleJSONResult;
import com.blazemaple.enums.YesOrNo;
import com.blazemaple.service.VlogService;
import com.blazemaple.utils.PagedGridResult;
import com.blazemaple.vo.IndexVlogVO;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/6/1 16:01
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/vlog")
public class VlogController extends BaseInfoProperties {

    private final VlogService vlogService;

    @PostMapping("/publish")
    public BlazeMapleJSONResult publish(@Valid @RequestBody VlogBO vlogBO) {
        vlogService.createVlog(vlogBO);
        return BlazeMapleJSONResult.ok();
    }

    @GetMapping("/indexList")
    public BlazeMapleJSONResult getIndexVlogList(@RequestParam(defaultValue = "") String userId,
        @RequestParam(defaultValue = "") String search,
        @RequestParam Integer page,
        @RequestParam Integer pageSize) {
        if (page == null) {
            page = COMMON_START_PAGE;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }
        PagedGridResult indexVlogList = vlogService.getIndexVlogList(userId, search, page, pageSize);
        return BlazeMapleJSONResult.ok(indexVlogList);
    }


    @GetMapping("/detail")
    public BlazeMapleJSONResult getVlogDetail(@RequestParam(defaultValue = "") String userId,
        @RequestParam String vlogId) {
        IndexVlogVO vlogDetail = vlogService.getVlogDetailById(userId, vlogId);
        return BlazeMapleJSONResult.ok(vlogDetail);
    }

    @PostMapping("/changeToPrivate")
    public BlazeMapleJSONResult changeToPrivate(@RequestParam String userId,
        @RequestParam String vlogId) {
        vlogService.changeToPrivateOrPublic(vlogId, userId, YesOrNo.YES.type);
        return BlazeMapleJSONResult.ok();
    }

    @PostMapping("/changeToPublic")
    public BlazeMapleJSONResult changeToPublic(@RequestParam String userId,
        @RequestParam String vlogId) {
        vlogService.changeToPrivateOrPublic(vlogId, userId, YesOrNo.NO.type);
        return BlazeMapleJSONResult.ok();
    }


    @GetMapping("/myPublicList")
    public BlazeMapleJSONResult myPublicList(@RequestParam String userId,
        @RequestParam Integer page,
        @RequestParam Integer pageSize) {
        if (page == null) {
            page = COMMON_START_PAGE;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }
        PagedGridResult pagedGridResult = vlogService.queryMyVlogList(userId, page, pageSize, YesOrNo.NO.type);

        return BlazeMapleJSONResult.ok(pagedGridResult);
    }

    @GetMapping("/myPrivateList")
    public BlazeMapleJSONResult myPrivateList(@RequestParam String userId,
        @RequestParam Integer page,
        @RequestParam Integer pageSize) {
        if (page == null) {
            page = COMMON_START_PAGE;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }
        PagedGridResult pagedGridResult = vlogService.queryMyVlogList(userId, page, pageSize, YesOrNo.YES.type);

        return BlazeMapleJSONResult.ok(pagedGridResult);
    }

    @GetMapping("/myLikedList")
    public BlazeMapleJSONResult myLikedList(@RequestParam String userId,
        @RequestParam Integer page,
        @RequestParam Integer pageSize) {
        if (page == null) {
            page = COMMON_START_PAGE;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }
        PagedGridResult pagedGridResult = vlogService.getMyLikedVlogList(userId, page, pageSize);

        return BlazeMapleJSONResult.ok(pagedGridResult);
    }


    @PostMapping("/like")
    private BlazeMapleJSONResult like(@RequestParam String userId, @RequestParam String vlogerId,
        @RequestParam String vlogId) {
        vlogService.userDoLikeVlog(userId, vlogId);
        redisOperator.increment(REDIS_VLOGER_BE_LIKED_COUNTS + ":" + vlogerId, 1);
        redisOperator.increment(REDIS_VLOG_BE_LIKED_COUNTS + ":" + vlogId, 1);
        redisOperator.set(REDIS_USER_LIKE_VLOG + ":" + userId + ":" + vlogId, "1");
        //todo 从nacos中拿出counts比较来刷入数据库
//        String likeCountsStr = redisOperator.get(REDIS_VLOG_BE_LIKED_COUNTS + ":" + vlogId);
//        Integer likeCounts=0;
//        if (StringUtils.isNotBlank(likeCountsStr)){
//            likeCounts=Integer.valueOf(likeCountsStr);
//        }
        return BlazeMapleJSONResult.ok();
    }

    @PostMapping("/unlike")
    private BlazeMapleJSONResult unlike(@RequestParam String userId, @RequestParam String vlogerId,
        @RequestParam String vlogId) {
        vlogService.userUnLikeVlog(userId, vlogId);
        redisOperator.decrement(REDIS_VLOGER_BE_LIKED_COUNTS + ":" + vlogerId, 1);
        redisOperator.decrement(REDIS_VLOG_BE_LIKED_COUNTS + ":" + vlogId, 1);
        redisOperator.del(REDIS_USER_LIKE_VLOG + ":" + userId + ":" + vlogId);
        return BlazeMapleJSONResult.ok();
    }


    @PostMapping("/totalLikedCounts")
    public BlazeMapleJSONResult totalLikedCounts(@RequestParam String vlogId) {
        Integer vlogLikeCounts = vlogService.getVlogLikeCounts(vlogId);
        return BlazeMapleJSONResult.ok(vlogLikeCounts);
    }

    @GetMapping("/followList")
    public BlazeMapleJSONResult myFollowVlogList(@RequestParam("myId") String userId,
        @RequestParam Integer page,
        @RequestParam Integer pageSize) {
        if (page == null) {
            page = COMMON_START_PAGE;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }
        PagedGridResult pagedGridResult = vlogService.getMyFollowVlogList(userId, page, pageSize);

        return BlazeMapleJSONResult.ok(pagedGridResult);
    }

    @GetMapping("/friendList")
    public BlazeMapleJSONResult myFriendVlogList(@RequestParam("myId") String userId,
        @RequestParam Integer page,
        @RequestParam Integer pageSize) {
        if (page == null) {
            page = COMMON_START_PAGE;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }
        PagedGridResult pagedGridResult = vlogService.getMyFriendVlogList(userId, page, pageSize);

        return BlazeMapleJSONResult.ok(pagedGridResult);
    }

}
