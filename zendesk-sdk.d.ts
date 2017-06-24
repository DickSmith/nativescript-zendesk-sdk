export interface AnonUserIdentity {
    name?: string;
    email?: string;
}

export interface HelpCenterOptions {
    /** default: false */
    categoriesCollapsedAndroid?: boolean;
    /** default: false */
    contactUsButtonAndroid?: boolean;
    /** default: true */
    conversationsMenuAndroid?: boolean;
    /** default: true */
    conversationsMenuIos?: boolean;
    /** default: false */
    showAsModalForIos?: boolean;
}

export interface InitConfig {
    zendeskUrl: string;
    applicationId: string;
    clientId: string;
    userLocale?: string;
    coppaEnabled?: boolean;
    /** AnonUserIdentity object or JWT Token string */
    identity?: AnonUserIdentity | string;
}

export interface IosThemeSimple {
    primaryTextColor?: any;
    secondaryTextColor?: any;
    primaryBackgroundColor?: any;
    secondaryBackgroundColor?: any;
    emptyBackgroundColor?: any;
    metaTextColor?: any;
    separatorColor?: any;
    inputFieldTextColor?: any;
    inputFieldBackgroundColor?: any;
    fontName?: string;
    boldFontName?: string;
}

export interface RequestConfig {
    requestSubject?: string;
    additionalInfo?: string;
    /** default: true */
    addDeviceInfo?: boolean;
    tags?: Array<string>;
}

export declare class ZendeskSdk {
    public static initialize(config: InitConfig): typeof ZendeskSdk;

    public static setUserLocale(locale: string): typeof ZendeskSdk;

    public static setCoppaEnabled(enable?: boolean): typeof ZendeskSdk;

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
