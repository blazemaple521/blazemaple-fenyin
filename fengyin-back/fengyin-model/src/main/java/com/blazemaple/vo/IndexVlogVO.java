package com.blazemaple.vo;

import lombok.Data;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/6/1 16:33
 */
@Data
public class IndexVlogVO {

    private String vlogId;
    private String vlogerId;
    private String vlogerFace;
    private String vlogerName;
    private String content;
    private String url;
    private String cover;
    private Integer width;
    private Integer height;
    private Integer likeCounts;
    private Integer commentsCounts;
    private Integer isPrivate;
    private boolean isPlay = false;
    private boolean doIFollowVloger = false;
    private boolean doILikeThisVlog = false;
}
