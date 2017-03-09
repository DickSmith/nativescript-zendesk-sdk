export declare class ZendeskSdk {
    private constructor();

    static initialize(
            zendeskUrl: string,
            applicationId: string,
            oauthClientId: string): typeof ZendeskSdk;

    static setUserLocale(locale: string): typeof ZendeskSdk;

    static setCoppaEnabled(enable: boolean): typeof ZendeskSdk;

    static setAnonymousIdentity(
            name: string,
            email: string): typeof ZendeskSdk;

    static setJwtIdentity(jwtUserIdentifier: string): typeof ZendeskSdk;

    private static initHelpCenterAndroid(
            withCategoriesCollapsedForAndroid?,
            showContactUsButtonForAndroid?,
            showConversationsMenuButtonForAndroid?);

    private static initHelpCenterIos(
            helpCenterContentModel,
            withoutRequestsForIos?,
            showAsModalForIos?);

    static showHelpCenter(
            withCategoriesCollapsedForAndroid?: boolean,
            showContactUsButtonForAndroid?: boolean,
            showConversationsMenuButtonForAndroid?: boolean,
            withoutRequestsForIos?: boolean,
            showAsModalForIos?: boolean): void;

    static showHelpCenterForCategoryIds(
            withCategoriesCollapsedForAndroid?: boolean,
            showContactUsButtonForAndroid?: boolean,
            showConversationsMenuButtonForAndroid?: boolean,
            withoutRequestsForIos?: boolean,
            showAsModalForIos?: boolean,
            ...categoryIds: number[]): void;

    static showHelpCenterForLabelNames(
            withCategoriesCollapsedForAndroid?: boolean,
            showContactUsButtonForAndroid?: boolean,
            showConversationsMenuButtonForAndroid?: boolean,
            withoutRequestsForIos?: boolean,
            showAsModalForIos?: boolean,
            ...labelNames: string[]): void;

    static showHelpCenterForSectionIds(
            withCategoriesCollapsedForAndroid?: boolean,
            showContactUsButtonForAndroid?: boolean,
            showConversationsMenuButtonForAndroid?: boolean,
            withoutRequestsForIos?: boolean,
            showAsModalForIos?: boolean,
            ...sectionIds: number[]): void;

    static showArticle(articleId: number): void;

    static createRequest(
            requestSubject?: string,
            additionalInfo?: string,
            ...tags: string[]): void;
}
