package com.blazemaple;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import tk.mybatis.spring.annotation.MapperScan;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/5/22 20:10
 */
@SpringBootApplication
@MapperScan(basePackages = "com.blazemaple.mapper")
@EnableMongoRepositories
public class FengYinApplication {

    public static void main(String[] args) {
        SpringApplication.run(FengYinApplication.class, args);
    }
}
