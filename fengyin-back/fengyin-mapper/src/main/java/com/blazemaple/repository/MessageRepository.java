package com.blazemaple.repository;

import com.blazemaple.mo.MessageMO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/6/8 16:26
 */
@Repository
public interface MessageRepository extends MongoRepository<MessageMO,String> {

}
