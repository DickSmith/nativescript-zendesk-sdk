export declare class ZendeskSdk {
    private constructor();

    static initialize(
            zendeskUrl: string,
            applicationId: string,
            clientId: string): typeof ZendeskSdk;

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
            showConversationsMenuButtonForIos?,
            showAsModalForIos?);

    static showHelpCenter(
            withCategoriesCollapsedForAndroid?: boolean,
            showContactUsButtonForAndroid?: boolean,
            showConversationsMenuButtonForAndroid?: boolean,
            showConversationsMenuButtonForIos?: boolean,
            showAsModalForIos?: boolean): void;

    static showHelpCenterForCategoryIds(
            withCategoriesCollapsedForAndroid?: boolean,
            showContactUsButtonForAndroid?: boolean,
            showConversationsMenuButtonForAndroid?: boolean,
            showConversationsMenuButtonForIos?: boolean,
            showAsModalForIos?: boolean,
            ...categoryIds: number[]): void;

    static showHelpCenterForLabelNames(
            withCategoriesCollapsedForAndroid?: boolean,
            showContactUsButtonForAndroid?: boolean,
            showConversationsMenuButtonForAndroid?: boolean,
            showConversationsMenuButtonForIos?: boolean,
            showAsModalForIos?: boolean,
            ...labelNames: string[]): void;

    static showHelpCenterForSectionIds(
            withCategoriesCollapsedForAndroid?: boolean,
            showContactUsButtonForAndroid?: boolean,
            showConversationsMenuButtonForAndroid?: boolean,
            showConversationsMenuButtonForIos?: boolean,
            showAsModalForIos?: boolean,
            ...sectionIds: number[]): void;

    static showArticle(
            articleId: string,
            locale: string): void;

    static createRequest(
            requestSubject?: string,
            additionalInfo?: string,
            addDeviceInfo?: boolean,
            ...tags: string[]): void;
}
