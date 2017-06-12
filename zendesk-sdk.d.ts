import { HelpCenterOptions, ZendeskIosThemeSimple } from './zendesk-sdk.common';

export declare class ZendeskSdk {
    private constructor();

    static initialize(zendeskUrl: string,
                      applicationId: string,
                      clientId: string): ZendeskSdk;

    static setUserLocale(locale: string): ZendeskSdk;

    static setCoppaEnabled(enable: boolean): ZendeskSdk;

    static setAnonymousIdentity(name: string,
                                email: string): ZendeskSdk;

    static setJwtIdentity(jwtUserIdentifier: string): ZendeskSdk;

    static showHelpCenter(options?: HelpCenterOptions): void;

    static showHelpCenterForCategoryIds(categoryIds: number[],
                                        options?: HelpCenterOptions): void;

    static showHelpCenterForLabelNames(labelNames: string[],
                                       options?: HelpCenterOptions): void;

    static showHelpCenterForSectionIds(sectionIds: number[],
                                       options?: HelpCenterOptions): void;

    static showArticle(articleId: string,
                       locale: string): void;

    static createRequest(requestSubject?: string,
                         additionalInfo?: string,
                         addDeviceInfo?: boolean,
                         ...tags: string[]): void;

    static setIosTheme(theme: ZendeskIosThemeSimple): void;
}
