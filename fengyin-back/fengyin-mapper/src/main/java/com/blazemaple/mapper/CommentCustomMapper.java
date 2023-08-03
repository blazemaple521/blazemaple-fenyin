package com.blazemaple.mapper;


import com.blazemaple.my.mapper.MyMapper;
import com.blazemaple.pojo.Comment;
import com.blazemaple.vo.CommentVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@Mapper
public interface CommentCustomMapper{

    public List<CommentVO> getCommentList(@Param("paramMap") Map<String, Object> paramMap);

}