export * from './zendesk-sdk.common';

export declare class ZendeskSdk {
    public static initialize(config: InitConfig): typeof ZendeskSdk;

    public static setUserLocale(locale: string): typeof ZendeskSdk;

    public static setAnonymousIdentity(anonUserIdentity?: AnonUserIdentity): typeof ZendeskSdk;

    public static setJwtIdentity(jwtUserIdentifier: string): typeof ZendeskSdk;

    public static configureRequests(config: RequestConfig): typeof ZendeskSdk;

    public static showHelpCenter(options?: HelpCenterOptions): void;

    public static showHelpCenterForCategoryIds(categoryIds: Array<number>,
                                               options?: HelpCenterOptions): void;

    public static showHelpCenterForLabelNames(labelNames: Array<string>,
                                              options?: HelpCenterOptions): void;

    public static showHelpCenterForSectionIds(sectionIds: Array<number>,
                                              options?: HelpCenterOptions): void;

    public static showArticle(articleId: string): void;

    public static createRequest(): void;

    public static setIosTheme(theme: IosThemeSimple): void;

    private constructor();
}
