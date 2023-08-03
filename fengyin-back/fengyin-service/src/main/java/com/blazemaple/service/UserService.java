package com.blazemaple.service;

import com.blazemaple.bo.UpdatedUserBO;
import com.blazemaple.pojo.Users;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/5/28 21:00
 */
public interface UserService {


    /**
     * 判断用户是否存在,并且返回用户信息
     *
     * @param mobile
     * @return
     */
    public Users queryMobileIsExist(String mobile);

    /**
     * 创建用户，并且返回用户信息
     *
     * @param mobile
     * @return
     */
    public Users createUser(String mobile);


    /**
     * 根据用户主键查询用户信息
     *
     * @param userId
     * @return
     */
    public Users getUserInfo(String userId);

    /**
     * 修改用户信息
     *
     * @param updatedUserBO
     * @return
     */
    public Users updateUserInfo(UpdatedUserBO updatedUserBO);

    /**
     * 修改用户信息
     *
     * @param updatedUserBO
     * @return
     */
    public Users updateUserInfo(UpdatedUserBO updatedUserBO, Integer type);


}
