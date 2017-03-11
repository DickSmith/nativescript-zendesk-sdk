import * as uiFrame from 'ui/frame';
import SupportActivity = com.zendesk.sdk.support.SupportActivity;
import { device } from 'platform';

export class ZendeskSdk {

    private constructor() {
    }

    public static initialize(
            zendeskUrl: string,
            applicationId: string,
            clientId: string): typeof ZendeskSdk {
        ZDKConfig.instance()
                 .initializeWithAppIdZendeskUrlClientId(applicationId, zendeskUrl, clientId);
        return ZendeskSdk;
    }

    public static setUserLocale(locale: string): typeof ZendeskSdk {
        ZDKConfig.instance().userLocale = locale;
        return ZendeskSdk;
    }

    public static setCoppaEnabled(enable: boolean): typeof ZendeskSdk {
        ZDKConfig.instance().coppaEnabled = enable;
        return ZendeskSdk;
    }

    public static setAnonymousIdentity(
            name: string,
            email: string): typeof ZendeskSdk {
        let identity: ZDKAnonymousIdentity = ZDKAnonymousIdentity.new();
        identity.name                      = name;
        identity.email                     = email;
        ZDKConfig.instance().userIdentity  = identity;
        return ZendeskSdk;
    }

    public static setJwtIdentity(jwtUserIdentifier: string): typeof ZendeskSdk {
        ZDKConfig.instance().userIdentity = ZDKJwtIdentity.alloc()
                                                          .initWithJwtUserIdentifier(jwtUserIdentifier);
        return ZendeskSdk;
    }

    private static initHelpCenterAndroid(
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = false,
            showConversationsMenuButtonForAndroid: boolean = true,): SupportActivity.Builder {
        return null;
    }

    private static initHelpCenterIos(
            helpCenterContentModel: ZDKHelpCenterOverviewContentModel,
            showConversationsMenuButtonForIos: boolean = true,
            showAsModalForIos: boolean = false,): void {
        if ( !showConversationsMenuButtonForIos ) {
            ZDKHelpCenter.setNavBarConversationsUIType(ZDKNavBarConversationsUIType.None);
        }
        if ( showAsModalForIos ) {
            uiFrame.topmost().ios.controller.modalPresentationStyle = UIModalPresentationStyle.FormSheet;
        } else {
            ZDKHelpCenter.pushHelpCenterOverviewWithContentModel(
                    uiFrame.topmost().ios.controller, helpCenterContentModel
            );
        }
    }

    public static showHelpCenter(
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = false,
            showConversationsMenuButtonForAndroid: boolean = true,
            showConversationsMenuButtonForIos: boolean = true,
            showAsModalForIos: boolean = false,): void {
        let helpCenterContentModel: ZDKHelpCenterOverviewContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        ZendeskSdk.initHelpCenterIos(helpCenterContentModel, showConversationsMenuButtonForIos, showAsModalForIos);
    }

    public static showHelpCenterForCategoryIds(
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = false,
            showConversationsMenuButtonForAndroid: boolean = true,
            showConversationsMenuButtonForIos: boolean = true,
            showAsModalForIos: boolean = false,
            ...categoryIds: number[]): void {
        let helpCenterContentModel: ZDKHelpCenterOverviewContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        helpCenterContentModel.groupType                              = ZDKHelpCenterOverviewGroupType.Category;
        ZendeskSdk.initHelpCenterIos(helpCenterContentModel, showConversationsMenuButtonForIos, showAsModalForIos);
    }

    public static showHelpCenterForLabelNames(
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = false,
            showConversationsMenuButtonForAndroid: boolean = true,
            showConversationsMenuButtonForIos: boolean = true,
            showAsModalForIos: boolean = false,
            ...labelNames: string[]): void {
        let helpCenterContentModel: ZDKHelpCenterOverviewContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        helpCenterContentModel.labels                                 = labelNames;
        ZendeskSdk.initHelpCenterIos(helpCenterContentModel, showConversationsMenuButtonForIos, showAsModalForIos);
    }

    public static showHelpCenterForSectionIds(
            withCategoriesCollapsedForAndroid: boolean = false,
            showContactUsButtonForAndroid: boolean = false,
            showConversationsMenuButtonForAndroid: boolean = true,
            showConversationsMenuButtonForIos: boolean = true,
            showAsModalForIos: boolean = false,
            ...sectionIds: number[]): void {
        let helpCenterContentModel: ZDKHelpCenterOverviewContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        helpCenterContentModel.groupType                              = ZDKHelpCenterOverviewGroupType.Section;
        ZendeskSdk.initHelpCenterIos(helpCenterContentModel, showConversationsMenuButtonForIos, showAsModalForIos);
    }

    public static showArticle(
            articleId: string,
            locale: string): void {
        let provider: ZDKHelpCenterProvider = ZDKHelpCenterProvider.alloc()
                                                                   .initWithLocale(locale);
        provider.getArticleByIdWithCallback(
                articleId, (
                        items: NSArray<any>,
                        error: NSError) => {
                    if ( items.count > 0 ) {
                        let vc: ZDKArticleViewController = ZDKArticleViewController.alloc()
                                                                                   .initWithArticle(items.firstObject);
                        uiFrame.topmost()
                               .ios
                               .controller
                               .pushViewControllerAnimated(vc, true);
                    }
                }
        );
    }

    public static createRequest(
            requestSubject?: string,
            additionalInfo?: string,
            addDeviceInfo: boolean = true,
            ...tags: string[]): void {
        let deviceInfo: string = addDeviceInfo ? "\n\n" + device.language + "-" + device.region + "\n"
                                               + device.manufacturer + " " + device.model + "\n" + device.os + " "
                                               + device.osVersion + "(" + device.sdkVersion + ")" : "";
        ZDKRequests.configure(
                (
                        account: ZDKAccount,
                        requestCreationConfig: ZDKRequestCreationConfig) => {
                    requestCreationConfig.subject               = requestSubject;
                    requestCreationConfig.additionalRequestInfo = !!additionalInfo || addDeviceInfo
                            ? "\n\n------------------------------" // added to make the output the same as Android SDK
                                                                  + (!!additionalInfo ? "\n\n" + additionalInfo : "")
                                                                  + deviceInfo
                            : "";
                    requestCreationConfig.tags                  = tags;
                }
        );
        ZDKRequests.presentRequestCreationWithViewController(uiFrame.topmost().ios.controller);
    }
}
