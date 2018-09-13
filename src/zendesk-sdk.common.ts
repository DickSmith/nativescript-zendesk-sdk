export interface AnonUserIdentity {
    name?: string;
    email?: string;
}

export interface HelpCenterOptions {
    /** default: false */
    categoriesCollapsedAndroid?: boolean;
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
