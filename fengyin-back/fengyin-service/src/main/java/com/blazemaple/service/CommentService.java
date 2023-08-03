package com.blazemaple.service;

import com.blazemaple.bo.CommentBO;
import com.blazemaple.pojo.Comment;
import com.blazemaple.utils.PagedGridResult;
import com.blazemaple.vo.CommentVO;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/6/4 17:12
 */
public interface CommentService {

    /**
     * 发表评论
     * @param commentBO
     */
    public CommentVO createComment(CommentBO commentBO);

    /**
     * 删除自己的评论
     * @param userId
     * @param commentId
     * @param vlogId
     */
    public void deleteComment(String userId,String commentId,String vlogId);

    /**
     * 查询视频评论列表
     * @param vlogId
     * @param page
     * @param pageSize
     * @return
     */

    public PagedGridResult queryVlogComments(String vlogId,String userId,Integer page,Integer pageSize);

    /**
     * 根据主键获取评论
     * @param commentId
     * @return
     */
    public Comment getComment(String commentId);


}
