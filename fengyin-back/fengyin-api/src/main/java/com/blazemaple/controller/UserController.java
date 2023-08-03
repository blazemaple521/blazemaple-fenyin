package com.blazemaple.controller;

import com.blazemaple.bo.UpdatedUserBO;
import com.blazemaple.common.BaseInfoProperties;
import com.blazemaple.common.BlazeMapleJSONResult;
import com.blazemaple.config.MinIOConfig;
import com.blazemaple.enums.FileTypeEnum;
import com.blazemaple.enums.ResponseStatusEnum;
import com.blazemaple.enums.UserInfoModifyType;
import com.blazemaple.pojo.Users;
import com.blazemaple.service.UserService;
import com.blazemaple.utils.MinIOUtils;
import com.blazemaple.vo.UserVO;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/5/30 10:23
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/userInfo")
public class UserController extends BaseInfoProperties {

    private final UserService userService;


    private final MinIOConfig minIOConfig;

    @GetMapping("/query")
    public BlazeMapleJSONResult getUserInfo(@RequestParam String userId) {
        Users userInfo = userService.getUserInfo(userId);
        UserVO userVo = new UserVO();
        BeanUtils.copyProperties(userInfo, userVo);
        String myFollowsCountsStr = redisOperator.get(REDIS_MY_FOLLOWS_COUNTS + ":" + userId);
        String myFansCountsStr = redisOperator.get(REDIS_MY_FANS_COUNTS + ":" + userId);
        String likedVlogerCountsStr = redisOperator.get(REDIS_VLOGER_BE_LIKED_COUNTS + ":" + userId);

        Integer myFollowCounts = 0;
        Integer myFansCounts = 0;
        Integer likedVlogerCounts = 0;
        Integer totalLikeMeCounts = 0;

        if (StringUtils.isNotBlank(myFollowsCountsStr)) {
            myFollowCounts = Integer.valueOf(myFollowsCountsStr);
        }
        if (StringUtils.isNotBlank(myFansCountsStr)) {
            myFansCounts = Integer.valueOf(myFansCountsStr);
        }
        if (StringUtils.isNotBlank(likedVlogerCountsStr)) {
            likedVlogerCounts = Integer.valueOf(likedVlogerCountsStr);
        }
        totalLikeMeCounts = likedVlogerCounts;
        userVo.setMyFansCounts(myFansCounts);
        userVo.setMyFollowsCounts(myFollowCounts);
        userVo.setTotalLikeMeCounts(totalLikeMeCounts);
        return BlazeMapleJSONResult.ok(userVo);
    }

    @PostMapping("/modifyUserInfo")
    public BlazeMapleJSONResult updateUserInfo(@RequestBody UpdatedUserBO updatedUserBO, @RequestParam Integer type) {
        UserInfoModifyType.checkUserInfoTypeIsRight(type);
        Users newUserInfo = userService.updateUserInfo(updatedUserBO, type);
        return BlazeMapleJSONResult.ok(newUserInfo);
    }


    @PostMapping("/modifyImage")
    public BlazeMapleJSONResult upload(@RequestPart @RequestParam("file") MultipartFile file,
        @RequestParam String userId,
        @RequestParam Integer type) throws Exception {
        if (type != FileTypeEnum.BGIMG.type && type != FileTypeEnum.FACE.type) {
            return BlazeMapleJSONResult.errorCustom(ResponseStatusEnum.FILE_UPLOAD_FAILD);
        }
        String fileName = file.getOriginalFilename();

        MinIOUtils.uploadFile(minIOConfig.getBucketName(),
            fileName,
            file.getInputStream());

        String imgUrl = minIOConfig.getFileHost()
            + "/"
            + minIOConfig.getBucketName()
            + "/"
            + fileName;

        UpdatedUserBO updatedUserBO = new UpdatedUserBO();
        updatedUserBO.setId(userId);
        if (type == FileTypeEnum.BGIMG.type) {
            updatedUserBO.setBgImg(imgUrl);
        } else {
            updatedUserBO.setFace(imgUrl);
        }
        Users users = userService.updateUserInfo(updatedUserBO);
        return BlazeMapleJSONResult.ok(users);
    }


}
