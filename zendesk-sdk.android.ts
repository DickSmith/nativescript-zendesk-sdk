import { device } from 'platform';
import { topmost } from 'ui/frame';
import Locale = java.util.Locale;
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

export class ZendeskSdk {

    private constructor() {
    }

    public static initialize(
            zendeskUrl: string,
            applicationId: string,
            clientId: string): typeof ZendeskSdk {
        ZendeskConfig.INSTANCE.init(
                topmost().android.activity, zendeskUrl, applicationId, clientId
        );
        return ZendeskSdk;
    }

    public static setUserLocale(locale: string): typeof ZendeskSdk {
        ZendeskConfig.INSTANCE.setDeviceLocale(new Locale(locale));
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
            showContactUsButtonForAndroid: boolean = false,
            showConversationsMenuButtonForAndroid: boolean = true,): SupportActivity.Builder {
        return new SupportActivity.Builder().withCategoriesCollapsed(withCategoriesCollapsedForAndroid)
                                            .showContactUsButton(showContactUsButtonForAndroid)
                                            .showConversationsMenuButton(showConversationsMenuButtonForAndroid);
    }

    private static initHelpCenterIos(
            helpCenterContentModel: ZDKHelpCenterOverviewContentModel,
            showConversationsMenuButtonForIos: boolean = true,
            showAsModalForIos: boolean = false,): void {
    }

    public static showHelpCenter(
            showConversationsMenuButtonForAndroid: boolean = true,
            showConversationsMenuButtonForIos: boolean = true,
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = false,
            showAsModalForIos: boolean = false,): void {
        ZendeskSdk.initHelpCenterAndroid(
                withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid
                  )
                  .show(topmost().android.activity);
    }

    public static showHelpCenterForCategoryIds(
            categoryIds: number[],
            showConversationsMenuButtonForAndroid: boolean = true,
            showConversationsMenuButtonForIos: boolean = true,
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = false,
            showAsModalForIos: boolean = false,): void {
        ZendeskSdk.initHelpCenterAndroid(
                withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid
                  )
                  .withArticlesForCategoryIds(categoryIds)
                  .show(topmost().android.activity);
    }

    public static showHelpCenterForLabelNames(
            labelNames: string[],
            showConversationsMenuButtonForAndroid: boolean = true,
            showConversationsMenuButtonForIos: boolean = true,
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = false,
            showAsModalForIos: boolean = false,): void {
        ZendeskSdk.initHelpCenterAndroid(
                withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid
                  )
                  .withLabelNames(labelNames)
                  .show(topmost().android.activity);
    }

    public static showHelpCenterForSectionIds(
            sectionIds: number[],
            showConversationsMenuButtonForAndroid: boolean = true,
            showConversationsMenuButtonForIos: boolean = true,
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = false,
            showAsModalForIos: boolean = false,): void {
        ZendeskSdk.initHelpCenterAndroid(
                withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid
                  )
                  .withArticlesForSectionIds(sectionIds)
                  .show(topmost().android.activity);
    }

    public static showArticle(
            articleId: string,
            locale: string): void {
        ViewArticleActivity.startActivity(
                topmost().android.activity, new SimpleArticle(global.long(global.long(articleId)), "")
        )
    }

    public static createRequest(
            requestSubject?: string,
            additionalInfo?: string,
            addDeviceInfo: boolean = true,
            ...tags: string[]) {

        ContactZendeskActivity.startActivity(
                topmost().android.activity, new ZendeskFeedbackConfiguration(
                        {
                            getRequestSubject(): string {
                                return !!requestSubject ? requestSubject : null;
                            },
                            getAdditionalInfo(): string {
                                let deviceInfo: string = addDeviceInfo ? "\n\n" + device.language + "-" + device.region
                                                                       + "\n" + device.manufacturer + " " + device.model
                                                                       + "\n" + device.os + " " + device.osVersion + "("
                                                                       + device.sdkVersion + ")" : "";
                                return !!additionalInfo || addDeviceInfo ? +(!!additionalInfo
                                                                                 ? "\n\n" + additionalInfo
                                                                                 : "") + deviceInfo : "";
                            },
                            getTags(): any {
                                return !!tags ? tags : null;
                            },
                        }
                )
        );
    }
}
