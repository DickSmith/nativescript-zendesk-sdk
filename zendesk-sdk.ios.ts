import * as uiFrame from 'ui/frame';
import ZendeskConfig = com.zendesk.sdk.network.impl.ZendeskConfig;
import Identity = com.zendesk.sdk.model.access.Identity;
import AnonymousIdentity = com.zendesk.sdk.model.access.AnonymousIdentity;
import JwtIdentity = com.zendesk.sdk.model.access.JwtIdentity;
import SupportActivity = com.zendesk.sdk.support.SupportActivity;

export class ZendeskSdk {

    private constructor() {
    }

    public static initialize(
            zendeskUrl: string,
            applicationId: string,
            oauthClientId: string): ZendeskSdk {
        ZDKConfig.instance()
                 .initializeWithAppIdZendeskUrlClientId(applicationId, zendeskUrl, oauthClientId);
        return ZendeskSdk;
    }

    public static setCoppaEnabled(enable: boolean): ZendeskSdk {
        ZDKConfig.instance().coppaEnabled = enable;
        return ZendeskSdk;
    }

    public static setAnonymousIdentity(
            name: string,
            email: string): ZendeskSdk {
        let identity: ZDKAnonymousIdentity = ZDKAnonymousIdentity.new();
        identity.name                      = name;
        identity.email                     = email;
        ZDKConfig.instance().userIdentity  = identity;
        return ZendeskSdk;
    }

    public static setJwtIdentity(jwtUserIdentifier: string): ZendeskSdk {
        ZDKConfig.instance().userIdentity = ZDKJwtIdentity.alloc()
                                                          .initWithJwtUserIdentifier(jwtUserIdentifier);
        return ZendeskSdk;
    }

    private static initHelpCenter(
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = true,
            showConversationsMenuButtonForAndroid: boolean = true,
            withoutRequestsForIos: boolean = false,
            showAsModalForIos: boolean = false,)/*: SupportActivity.Builder*/ {
        //TODO
    }

    public static showHelpCenter(
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = true,
            showConversationsMenuButtonForAndroid: boolean = true,
            withoutRequestsForIos: boolean = false,
            showAsModalForIos: boolean = false,): void {
        let helpCenterContentModel: ZDKHelpCenterOverviewContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        if ( withoutRequestsForIos ) {
            ZDKHelpCenter.setNavBarConversationsUIType(ZDKNavBarConversationsUIType.None);
        }
        if ( showAsModalForIos ) {
            uiFrame.topmost().ios.controller.modalPresentationStyle = UIModalPresentationStyle.FormSheet;
        } else {
            ZDKHelpCenter.pushHelpCenterOverviewWithContentModel(
                    uiFrame.topmost().ios.controller,
                    helpCenterContentModel
            );
        }
    }

    public static showHelpCenterForCategoryIds(
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = true,
            showConversationsMenuButtonForAndroid: boolean = true,
            withoutRequestsForIos: boolean = false,
            showAsModalForIos: boolean = false,
            ...categoryIds: number[]): void {
        //TODO
    }

    public static showHelpCenterForLabelNames(
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = true,
            showConversationsMenuButtonForAndroid: boolean = true,
            withoutRequestsForIos: boolean = false,
            showAsModalForIos: boolean = false,
            ...labelNames: string[]): void {
        //TODO
    }

    public static showHelpCenterForSectionIds(
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = true,
            showConversationsMenuButtonForAndroid: boolean = true,
            withoutRequestsForIos: boolean = false,
            showAsModalForIos: boolean = false,
            ...sectionIds: number[]): void {
        //TODO
    }

    public static showArticle(articleId: number) {
                //TODO
    }
}
