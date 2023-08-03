package com.blazemaple.mapper;

import com.blazemaple.vo.IndexVlogVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface VlogCustomMapper {

    public List<IndexVlogVO> getIndexVlogList(@Param("paramMap") Map<String, Object> paramMap);

    public List<IndexVlogVO> getVlogDetailById(@Param("paramMap") Map<String, Object> paramMap);

    public List<IndexVlogVO> getMyLikedVlogList(@Param("paramMap") Map<String, Object> paramMap);

    public List<IndexVlogVO> getMyFollowVlogList(@Param("paramMap") Map<String, Object> paramMap);

    public List<IndexVlogVO> getMyFriendVlogList(@Param("paramMap") Map<String, Object> paramMap);

}