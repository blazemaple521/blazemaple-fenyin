package com.blazemaple.service.impl;

import com.blazemaple.bo.UpdatedUserBO;
import com.blazemaple.enums.ResponseStatusEnum;
import com.blazemaple.enums.Sex;
import com.blazemaple.enums.UserInfoModifyType;
import com.blazemaple.enums.YesOrNo;
import com.blazemaple.exception.CommonException;
import com.blazemaple.mapper.UsersMapper;
import com.blazemaple.pojo.Users;
import com.blazemaple.service.UserService;
import com.blazemaple.utils.DateUtil;
import com.blazemaple.utils.DesensitizationUtil;
import lombok.RequiredArgsConstructor;
import org.n3r.idworker.Sid;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.util.Date;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/5/28 21:00
 */
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UsersMapper usersMapper;

    public static final String USER_NORMAL_FACE = "https://img0.baidu.com/it/u=740315419,1904112680&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400";

    @Override
    public Users queryMobileIsExist(String mobile) {
        Example userExample = new Example(Users.class);
        Example.Criteria criteria = userExample.createCriteria();
        criteria.andEqualTo("mobile", mobile);
        Users users = usersMapper.selectOneByExample(userExample);
        return users;
    }

    @Transactional
    @Override
    public Users createUser(String mobile) {
        String userId = Sid.nextShort();
        Users users = new Users();
        users.setId(userId);
        users.setMobile(mobile);
        users.setNickname("用户" + DesensitizationUtil.commonDisplay(mobile));
        users.setImoocNum("用户" + DesensitizationUtil.commonDisplay(mobile));
        users.setFace(USER_NORMAL_FACE);
        users.setBirthday(DateUtil.stringToDate("1900-01-01"));
        users.setSex(Sex.secret.type);
        users.setCountry("中国");
        users.setProvince("");
        users.setCity("");
        users.setDistrict("");
        users.setDescription("这家伙很懒，什么都没有留下");
        users.setCanImoocNumBeUpdated(YesOrNo.YES.type);
        users.setCreatedTime(new Date());
        users.setUpdatedTime(new Date());
        usersMapper.insert(users);
        return users;
    }

    @Override
    public Users getUserInfo(String userId) {
        return usersMapper.selectByPrimaryKey(userId);
    }

    @Override
    @Transactional
    public Users updateUserInfo(UpdatedUserBO updatedUserBO) {
        Users users = new Users();
        BeanUtils.copyProperties(updatedUserBO, users);
        int result = usersMapper.updateByPrimaryKeySelective(users);
        if (result < 0) {
            CommonException.display(ResponseStatusEnum.USER_UPDATE_ERROR);
        }
        return getUserInfo(users.getId());
    }

    @Override
    @Transactional
    public Users updateUserInfo(UpdatedUserBO updatedUserBO, Integer type) {
        Example example = new Example(Users.class);
        Example.Criteria criteria = example.createCriteria();
        if (type == UserInfoModifyType.NICKNAME.type) {
            criteria.andEqualTo("nickname", updatedUserBO.getNickname());
            Users oneByExample = usersMapper.selectOneByExample(example);
            if (oneByExample != null) {
                CommonException.display(ResponseStatusEnum.USER_INFO_UPDATED_NICKNAME_EXIST_ERROR);
            }
        }
        if (type == UserInfoModifyType.IMOOCNUM.type) {
            criteria.andEqualTo("imoocNum", updatedUserBO.getImoocNum());
            Users oneByExample = usersMapper.selectOneByExample(example);
            if (oneByExample != null) {
                CommonException.display(ResponseStatusEnum.USER_INFO_UPDATED_NUM_EXIST_ERROR);
            }
            Users userInfo = getUserInfo(updatedUserBO.getId());
            if (userInfo.getCanImoocNumBeUpdated() == YesOrNo.NO.type) {
                CommonException.display(ResponseStatusEnum.USER_INFO_CANT_UPDATED_NUM_ERROR);
            }
            updatedUserBO.setCanImoocNumBeUpdated(YesOrNo.NO.type);
        }
        return updateUserInfo(updatedUserBO);
    }
}
