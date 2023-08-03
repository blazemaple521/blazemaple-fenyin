package com.blazemaple.bo;

import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/6/4 17:13
 */
@Data
public class CommentBO {

    @NotBlank(message = "留言信息不完整")
    private String vlogerId;

    @NotBlank(message = "留言信息不完整")
    private String fatherCommentId;

    @NotBlank(message = "留言信息不完整")
    private String vlogId;

    @NotBlank(message = "当前用户信息不正确，请重新登录")
    private String commentUserId;

    @NotBlank(message = "评论内容不能为空")
    @Length(max = 50, message = "评论内容长度不能超过50")
    private String content;
}
