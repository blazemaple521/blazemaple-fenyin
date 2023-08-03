package com.blazemaple.mapper;


import com.blazemaple.my.mapper.MyMapper;
import com.blazemaple.pojo.Comment;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CommentMapper extends MyMapper<Comment> {

}