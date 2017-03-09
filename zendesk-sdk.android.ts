import * as uiFrame from 'ui/frame';
import ZendeskConfig = com.zendesk.sdk.network.impl.ZendeskConfig;
import Identity = com.zendesk.sdk.model.access.Identity;
import AnonymousIdentity = com.zendesk.sdk.model.access.AnonymousIdentity;
import JwtIdentity = com.zendesk.sdk.model.access.JwtIdentity;
import SupportActivity = com.zendesk.sdk.support.SupportActivity;
import ViewArticleActivity = com.zendesk.sdk.support.ViewArticleActivity;
import SimpleArticle = com.zendesk.sdk.model.helpcenter.SimpleArticle;
import ContactZendeskActivity = com.zendesk.sdk.feedback.ui.ContactZendeskActivity;
import BaseZendeskFeedbackConfiguration = com.zendesk.sdk.feedback.BaseZendeskFeedbackConfiguration;
import ZendeskFeedbackConfiguration = com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration;
import { device } from 'platform';

export class ZendeskSdk {

    private constructor() {
    }

    public static initialize(
            zendeskUrl: string,
            applicationId: string,
            oauthClientId: string): typeof ZendeskSdk {
        ZendeskConfig.INSTANCE.init(
                uiFrame.topmost().android.activity, zendeskUrl, applicationId, oauthClientId
        );
        return ZendeskSdk;
    }

    public static setUserLocale(locale: string): typeof ZendeskSdk {
        ZendeskConfig.INSTANCE.setDeviceLocale(new java.util.Locale(locale));
        return ZendeskSdk;
    }

    public static setCoppaEnabled(enable: boolean): typeof ZendeskSdk {
        ZendeskConfig.INSTANCE.setCoppaEnabled(enable);
        return ZendeskSdk;
    }

    public static setAnonymousIdentity(
            name: string,
            email: string): typeof ZendeskSdk {
        ZendeskConfig.INSTANCE.setIdentity(
                new AnonymousIdentity.Builder()
                        .withNameIdentifier(name)
                        .withEmailIdentifier(email)
                        .build()
        );
        return ZendeskSdk;
    }

    public static setJwtIdentity(jwtUserIdentifier: string): typeof ZendeskSdk {
        ZendeskConfig.INSTANCE.setIdentity(
                new JwtIdentity(jwtUserIdentifier)
        );
        return ZendeskSdk;
    }

    private static initHelpCenterAndroid(
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = true,
            showConversationsMenuButtonForAndroid: boolean = true,): SupportActivity.Builder {
        return new SupportActivity.Builder().withCategoriesCollapsed(withCategoriesCollapsedForAndroid)
                                            .showContactUsButton(showContactUsButtonForAndroid)
                                            .showConversationsMenuButton(showConversationsMenuButtonForAndroid);
    }

    private static initHelpCenterIos(
            helpCenterContentModel: ZDKHelpCenterOverviewContentModel,
            withoutRequestsForIos: boolean = false,
            showAsModalForIos: boolean = false,): void {
    }

    public static showHelpCenter(
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = true,
            showConversationsMenuButtonForAndroid: boolean = true,
            withoutRequestsForIos: boolean = false,
            showAsModalForIos: boolean = false,): void {
        ZendeskSdk.initHelpCenterAndroid(
                withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid
                  )
                  .show(uiFrame.topmost().android.activity);
    }

    public static showHelpCenterForCategoryIds(
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = true,
            showConversationsMenuButtonForAndroid: boolean = true,
            withoutRequestsForIos: boolean = false,
            showAsModalForIos: boolean = false,
            ...categoryIds: number[]): void {
        ZendeskSdk.initHelpCenterAndroid(
                withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid
                  )
                  .withArticlesForCategoryIds(categoryIds)
                  .show(uiFrame.topmost().android.activity);
    }

    public static showHelpCenterForLabelNames(
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = true,
            showConversationsMenuButtonForAndroid: boolean = true,
            withoutRequestsForIos: boolean = false,
            showAsModalForIos: boolean = false,
            ...labelNames: string[]): void {
        ZendeskSdk.initHelpCenterAndroid(
                withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid
                  )
                  .withLabelNames(labelNames)
                  .show(uiFrame.topmost().android.activity);
    }

    public static showHelpCenterForSectionIds(
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = true,
            showConversationsMenuButtonForAndroid: boolean = true,
            withoutRequestsForIos: boolean = false,
            showAsModalForIos: boolean = false,
            ...sectionIds: number[]): void {
        ZendeskSdk.initHelpCenterAndroid(
                withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid
                  )
                  .withArticlesForSectionIds(sectionIds)
                  .show(uiFrame.topmost().android.activity);
    }

    public static showArticle(
            articleId: string,
            locale: string): void {
        ViewArticleActivity.startActivity(
                uiFrame.topmost().android.activity, new SimpleArticle(long(long(articleId)), "")
        )
    }

    public static createRequest(
            requestSubject?: string,
            additionalInfo?: string,
            addDeviceInfo: boolean = true,
            ...tags: string[]) {

        ContactZendeskActivity.startActivity(
                uiFrame.topmost().android.activity, new ZendeskFeedbackConfiguration(
                        {
                            getRequestSubject(): string {
                                return !!requestSubject ? requestSubject : null;
                            },
                            getAdditionalInfo(): string{
                                let temp: string = addDeviceInfo
                                        ? "\n\n"
                                          + device.language
                                          + "-"
                                          + device.region
                                          + "\n"
                                          + device.manufacturer
                                          + device.model
                                          + "\n"
                                          + device.os
                                          + device.osVersion
                                          + "("
                                          + device.sdkVersion
                                          + ")"
                                          + "\n"
                                          + device.uuid
                                        : "";
                                return !!additionalInfo ? "\n\n" + additionalInfo + temp : temp;
                            },
                            getTags(): any{
                                return !!tags ? tags : null;
                            },
                        }
                )
        );
    }
}
