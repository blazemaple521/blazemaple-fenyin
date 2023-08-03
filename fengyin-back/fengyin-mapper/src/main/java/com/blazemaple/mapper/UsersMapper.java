package com.blazemaple.mapper;

import com.blazemaple.my.mapper.MyMapper;
import com.blazemaple.pojo.Users;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UsersMapper extends MyMapper<Users> {

}