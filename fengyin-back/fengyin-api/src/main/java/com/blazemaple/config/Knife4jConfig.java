package com.blazemaple.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/5/23 16:49
 */
@Configuration
@EnableSwagger2
@Profile("dev")
public class Knife4jConfig {

    @Bean
    public Docket defaultApi2() {
        return new Docket(DocumentationType.SWAGGER_2)
            .apiInfo(new ApiInfoBuilder()
                .title("枫音")
                .description("枫音后端项目接口文档")
                .version("1.0")
                .build())
            .select()
            // 指定 Controller 扫描包路径
            .apis(RequestHandlerSelectors.basePackage("com.blazemaple.controller"))
            .paths(PathSelectors.any())
            .build();
    }
}