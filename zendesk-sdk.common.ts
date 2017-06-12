export class HelpCenterOptions {
    showConversationsMenuButtonForAndroid: boolean = true;
    showConversationsMenuButtonForIos: boolean = true;
    withCategoriesCollapsedForAndroid: boolean = false;
    showContactUsButtonForAndroid: boolean = false;
    showAsModalForIos: boolean = false;
}

export interface ZendeskIosThemeSimple {
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
