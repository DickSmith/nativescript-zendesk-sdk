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
            showConversationsMenuButtonForAndroid?: boolean,
            showConversationsMenuButtonForIos?: boolean,
            withCategoriesCollapsedForAndroid?: boolean,
            showContactUsButtonForAndroid?: boolean,
            showAsModalForIos?: boolean): void;

    static showHelpCenterForCategoryIds(
            categoryIds: number[],
            showConversationsMenuButtonForAndroid?: boolean,
            showConversationsMenuButtonForIos?: boolean,
            withCategoriesCollapsedForAndroid?: boolean,
            showContactUsButtonForAndroid?: boolean,
            showAsModalForIos?: boolean): void;

    static showHelpCenterForLabelNames(
            labelNames: string[],
            showConversationsMenuButtonForAndroid?: boolean,
            showConversationsMenuButtonForIos?: boolean,
            withCategoriesCollapsedForAndroid?: boolean,
            showContactUsButtonForAndroid?: boolean,
            showAsModalForIos?: boolean): void;

    static showHelpCenterForSectionIds(
            sectionIds: number[],
            showConversationsMenuButtonForAndroid?: boolean,
            showConversationsMenuButtonForIos?: boolean,
            withCategoriesCollapsedForAndroid?: boolean,
            showContactUsButtonForAndroid?: boolean,
            showAsModalForIos?: boolean): void;

    static showArticle(
            articleId: string,
            locale: string): void;

    static createRequest(
            requestSubject?: string,
            additionalInfo?: string,
            addDeviceInfo?: boolean,
            ...tags: string[]): void;
}
