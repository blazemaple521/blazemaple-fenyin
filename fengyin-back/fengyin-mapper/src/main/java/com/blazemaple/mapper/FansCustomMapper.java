package com.blazemaple.mapper;

import com.blazemaple.vo.FansVO;
import com.blazemaple.vo.VlogerVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface FansCustomMapper {

    public List<VlogerVO> queryMyFollows(@Param("paramMap") Map<String, Object> paramMap);

    public List<FansVO> queryMyFans(@Param("paramMap") Map<String, Object> paramMap);
}