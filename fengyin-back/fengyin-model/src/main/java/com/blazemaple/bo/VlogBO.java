package com.blazemaple.bo;

import lombok.Data;

@Data
public class VlogBO {

    private String id;
    private String vlogerId;
    private String url;
    private String cover;
    private String title;
    private Integer width;
    private Integer height;
    private Integer likeCounts;
    private Integer commentsCounts;
}