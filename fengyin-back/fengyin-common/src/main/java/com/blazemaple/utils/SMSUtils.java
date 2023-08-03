package com.blazemaple.utils;

import com.tencentcloudapi.common.Credential;
import com.tencentcloudapi.common.exception.TencentCloudSDKException;
import com.tencentcloudapi.common.profile.ClientProfile;
import com.tencentcloudapi.common.profile.HttpProfile;
import com.tencentcloudapi.sms.v20210111.SmsClient;
import com.tencentcloudapi.sms.v20210111.models.SendSmsRequest;
import com.tencentcloudapi.sms.v20210111.models.SendSmsResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

/**
 * @author BlazeMaple
 * @description
 * @date 2023/5/24 19:51
 */
@Component
@RequiredArgsConstructor
public class SMSUtils {

    private final TencentCloudProperties tencentCloudProperties;

    public void sendSMS(String phone, String code) throws Exception {
        try {
            Credential cred = new Credential(tencentCloudProperties.getSecretId(),
                tencentCloudProperties.getSecretKey());
            HttpProfile httpProfile = new HttpProfile();
            httpProfile.setEndpoint("sms.tencentcloudapi.com");
            ClientProfile clientProfile = new ClientProfile();
            clientProfile.setHttpProfile(httpProfile);
            SmsClient client = new SmsClient(cred, "ap-nanjing", clientProfile);
            SendSmsRequest req = new SendSmsRequest();
            String[] phoneNumberSet1 = {"+86" + phone};//电话号码
            req.setPhoneNumberSet(phoneNumberSet1);
            req.setSmsSdkAppId("1400711514"); // 短信应用ID: 短信SdkAppId在 [短信控制台] 添加应用后生成的实际SdkAppId
            req.setSignName("BlazeMaple"); // 签名
            req.setTemplateId("1809231"); // 模板id：必须填写已审核通过的模板 ID。模板ID可登录 [短信控制台] 查看
            /* 模板参数（自定义占位变量）: 若无模板参数，则设置为空 */
            String[] templateParamSet1 = {code};
            req.setTemplateParamSet(templateParamSet1);
            SendSmsResponse resp = client.SendSms(req);
            System.out.println(SendSmsResponse.toJsonString(resp));
        } catch (TencentCloudSDKException e) {
            System.out.println(e.toString());
        }
    }

}
