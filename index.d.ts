export declare class ZendeskSdk {
    private constructor();
    static initialize(zendeskUrl: string, applicationId: string, oauthClientId: string): ZendeskSdk;
    static setCoppaEnabled(enable: boolean): ZendeskSdk;
    static setAnonymousIdentity(name: string, email: string): ZendeskSdk;
    static setJwtIdentity(jwtUserIdentifier: string): ZendeskSdk;
    private static initHelpCenter(withCategoriesCollapsedForAndroid?, showContactUsButtonForAndroid?, showConversationsMenuButtonForAndroid?, withoutRequestsForIos?, showAsModalForIos?);
    static showHelpCenter(withCategoriesCollapsedForAndroid?: boolean, showContactUsButtonForAndroid?: boolean, showConversationsMenuButtonForAndroid?: boolean, withoutRequestsForIos?: boolean, showAsModalForIos?: boolean): void;
    static showHelpCenterForCategoryIds(withCategoriesCollapsedForAndroid?: boolean, showContactUsButtonForAndroid?: boolean, showConversationsMenuButtonForAndroid?: boolean, withoutRequestsForIos?: boolean, showAsModalForIos?: boolean, ...categoryIds: number[]): void;
    static showHelpCenterForLabelNames(withCategoriesCollapsedForAndroid?: boolean, showContactUsButtonForAndroid?: boolean, showConversationsMenuButtonForAndroid?: boolean, withoutRequestsForIos?: boolean, showAsModalForIos?: boolean, ...labelNames: string[]): void;
    static showHelpCenterForSectionIds(withCategoriesCollapsedForAndroid?: boolean, showContactUsButtonForAndroid?: boolean, showConversationsMenuButtonForAndroid?: boolean, withoutRequestsForIos?: boolean, showAsModalForIos?: boolean, ...sectionIds: number[]): void;
    static showArticle(articleId: number): void;
}
