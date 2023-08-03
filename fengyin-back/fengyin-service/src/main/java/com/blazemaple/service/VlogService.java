package com.blazemaple.service;

import com.blazemaple.bo.VlogBO;
import com.blazemaple.pojo.Vlog;
import com.blazemaple.utils.PagedGridResult;
import com.blazemaple.vo.IndexVlogVO;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/6/1 15:52
 */
public interface VlogService {

    /**
     * 新增视频
     *
     * @param vlogBO
     */
    public void createVlog(VlogBO vlogBO);

    /**
     * 查询首页/搜素的Vlog列表
     *
     * @param search
     * @param page
     * @param pageSize
     * @return
     */
    public PagedGridResult getIndexVlogList(String userId, String search, Integer page, Integer pageSize);

    /**
     * 根据视频主键查询vlog详情
     *
     * @param userId
     * @param vlogId
     * @return
     */
    public IndexVlogVO getVlogDetailById(String userId, String vlogId);

    /**
     * 将视频转为私密/公开
     *
     * @param vlogId
     * @param userId
     * @param flag
     */

    public void changeToPrivateOrPublic(String vlogId, String userId, Integer flag);

    /**
     * 查询我的作品
     *
     * @param userId
     * @param page
     * @param pageSize
     * @param flag
     * @return
     */

    public PagedGridResult queryMyVlogList(String userId, Integer page, Integer pageSize, Integer flag);

    /**
     * 用户点赞视频
     *
     * @param userId
     * @param vlogId
     */
    public void userDoLikeVlog(String userId, String vlogId);

    /**
     * 用户取消点赞视频
     *
     * @param userId
     * @param vlogId
     */
    public void userUnLikeVlog(String userId, String vlogId);

    /**
     * 获取视频最新点赞数
     *
     * @param vlogId
     * @return
     */
    public Integer getVlogLikeCounts(String vlogId);


    /**
     * 查询用户点赞过的视频
     *
     * @param userId
     * @param page
     * @param pageSize
     * @return
     */
    public PagedGridResult getMyLikedVlogList(String userId, Integer page, Integer pageSize);

    /**
     * 查询用户关注的博主发布的视频
     *
     * @param userId
     * @param page
     * @param pageSize
     * @return
     */
    public PagedGridResult getMyFollowVlogList(String userId, Integer page, Integer pageSize);

    /**
     * 查询朋友发布的短视频
     *
     * @param userId
     * @param page
     * @param pageSize
     * @return
     */
    public PagedGridResult getMyFriendVlogList(String userId, Integer page, Integer pageSize);

    /**
     * 根据主键获取视频
     * @param vlogId
     * @return
     */

    public Vlog getVlog(String vlogId);


    /**
     * 将redis中的点赞数等数值刷到数据库中
     * @param vlogId
     * @param likeCounts
     * @param commentCounts
     */

    public void flushCounts(String vlogId,Integer likeCounts,Integer commentCounts);


}
