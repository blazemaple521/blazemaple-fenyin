package com.blazemaple.service;

import com.blazemaple.utils.PagedGridResult;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/6/2 15:58
 */
public interface FanService {

    /**
     * 关注博主
     *
     * @param userId
     * @param vlogerId
     */
    public void doFollow(String userId, String vlogerId);


    /**
     * 取关博主
     *
     * @param userId
     * @param vlogerId
     */
    public void doCancel(String userId, String vlogerId);

    /**
     * 判断是否关注该博主
     *
     * @param userId
     * @param vlogerId
     */
    public boolean doFollowVloger(String userId, String vlogerId);


    /**
     * 查询我的关注列表
     *
     * @param userId
     * @param page
     * @param pageSize
     * @return
     */
    public PagedGridResult queryMyFollows(String userId, Integer page, Integer pageSize);


    /**
     * 查询我的粉丝列表
     *
     * @param userId
     * @param page
     * @param pageSize
     * @return
     */
    public PagedGridResult queryMyFans(String userId, Integer page, Integer pageSize);

}
