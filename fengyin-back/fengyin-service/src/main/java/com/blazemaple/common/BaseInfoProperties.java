package com.blazemaple.common;

import com.blazemaple.utils.PagedGridResult;
import com.blazemaple.utils.RedisOperator;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/5/27 16:50
 */
public class BaseInfoProperties {

    @Autowired
    public RedisOperator redisOperator;

    public static final String MOBILE_SMSCODE = "mobile:smscode";

    public static final String REDIS_USER_TOKEN = "redis_user_token";

    public static final String REDIS_USER_INFO = "redis_user_info";

    public static final String REDIS_USER_LIKE_VLOG = "redis_user_like_vlog";

    public static final String REDIS_MY_FOLLOWS_COUNTS = "redis_my_follows_counts";

    public static final String REDIS_MY_FANS_COUNTS = "redis_my_fans_counts";

    public static final String REDIS_VLOG_BE_LIKED_COUNTS = "redis_vlog_be_liked_counts";

    public static final String REDIS_VLOGER_BE_LIKED_COUNTS = "redis_vloger_be_liked_counts";

    public static final String REDIS_FANS_AND_VLOGER_RELATIONSHIP = "redis_fans_and_vloger_relationship";

    public static final String REDIS_VLOG_COMMENT_COUNTS="redis_vlog_comment_counts";

    public static final String REDIS_VLOG_COMMENT_LIKED_COUNTS="redis_vlog_comment_liked_counts";

    public static final String REDIS_USER_LIKE_COMMENT="redis_user_like_comment";

    public static final Integer COMMON_START_PAGE = 1;

    public static final Integer COMMON_PAGE_SIZE = 10;


    public PagedGridResult setterPagedGrid(List<?> list,
        Integer page) {
        PageInfo<?> pageList = new PageInfo<>(list);
        PagedGridResult gridResult = new PagedGridResult();
        gridResult.setRows(list);
        gridResult.setPage(page);
        gridResult.setRecords(pageList.getTotal());
        gridResult.setTotal(pageList.getPages());
        return gridResult;
    }
}
