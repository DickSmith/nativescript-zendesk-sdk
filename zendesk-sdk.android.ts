import * as uiFrame from 'ui/frame';
import ZendeskConfig = com.zendesk.sdk.network.impl.ZendeskConfig;
import Identity = com.zendesk.sdk.model.access.Identity;
import AnonymousIdentity = com.zendesk.sdk.model.access.AnonymousIdentity;
import JwtIdentity = com.zendesk.sdk.model.access.JwtIdentity;
import SupportActivity = com.zendesk.sdk.support.SupportActivity;
import ViewArticleActivity = com.zendesk.sdk.support.ViewArticleActivity;
import SimpleArticle = com.zendesk.sdk.model.helpcenter.SimpleArticle;

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

    private static initHelpCenter(
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = true,
            showConversationsMenuButtonForAndroid: boolean = true,
            withoutRequestsForIos: boolean = false,
            showAsModalForIos: boolean = false,): SupportActivity.Builder {
        return new SupportActivity.Builder().withCategoriesCollapsed(withCategoriesCollapsedForAndroid)
                                            .showContactUsButton(showContactUsButtonForAndroid)
                                            .showConversationsMenuButton(showConversationsMenuButtonForAndroid);
    }

    public static showHelpCenter(
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = true,
            showConversationsMenuButtonForAndroid: boolean = true,
            withoutRequestsForIos: boolean = false,
            showAsModalForIos: boolean = false,): void {
        ZendeskSdk.initHelpCenter(
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
        ZendeskSdk.initHelpCenter(
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
        ZendeskSdk.initHelpCenter(
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
        ZendeskSdk.initHelpCenter(
                withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid
                  )
                  .withArticlesForSectionIds(sectionIds)
                  .show(uiFrame.topmost().android.activity);
    }

    public static showArticle(articleId: number) {
                ViewArticleActivity.startActivity(uiFrame.topmost().android.activity, new SimpleArticle(long(articleId), ""))
    }
}
