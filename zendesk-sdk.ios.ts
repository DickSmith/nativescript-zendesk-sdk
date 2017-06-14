import { device } from 'tns-core-modules/platform';
import { topmost } from 'tns-core-modules/ui/frame';
import { HelpCenterOptions, ZendeskIosThemeSimple } from './zendesk-sdk.common';
import { Color } from 'tns-core-modules/color/color';

export class ZendeskSdk {

    private constructor() {
    }

    public static initialize(zendeskUrl: string,
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

    public static setAnonymousIdentity(name: string,
                                       email: string): typeof ZendeskSdk {
        let identity: ZDKAnonymousIdentity = ZDKAnonymousIdentity.new();
        identity.name = name;
        identity.email = email;
        ZDKConfig.instance().userIdentity = identity;

        return ZendeskSdk;
    }

    public static setJwtIdentity(jwtUserIdentifier: string): typeof ZendeskSdk {
        ZDKConfig.instance().userIdentity = ZDKJwtIdentity.alloc()
            .initWithJwtUserIdentifier(jwtUserIdentifier);

        return ZendeskSdk;
    }

    private static initHelpCenter(options: HelpCenterOptions,
                                  helpCenterContentModel: ZDKHelpCenterOverviewContentModel): void {
        if ( !options.showConversationsMenuButtonForIos ) {
            ZDKHelpCenter.setNavBarConversationsUIType(ZDKNavBarConversationsUIType.None);
        }
        if ( options.showAsModalForIos ) {
            topmost().ios.controller.modalPresentationStyle = UIModalPresentationStyle.FormSheet;
            ZDKHelpCenter.presentHelpCenterOverviewWithContentModel(topmost().ios.controller, helpCenterContentModel);
        } else {
            ZDKHelpCenter.pushHelpCenterOverviewWithContentModel(topmost().ios.controller, helpCenterContentModel);
        }
    }

    public static showHelpCenter(options: HelpCenterOptions = new HelpCenterOptions()): void {
        const helpCenterContentModel: ZDKHelpCenterOverviewContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        ZendeskSdk.initHelpCenter(options, helpCenterContentModel);
    }

    public static showHelpCenterForCategoryIds(categoryIds: number[],
                                               options: HelpCenterOptions = new HelpCenterOptions()): void {
        const helpCenterContentModel: ZDKHelpCenterOverviewContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        helpCenterContentModel.groupType = ZDKHelpCenterOverviewGroupType.Category;
        ZendeskSdk.initHelpCenter(options, helpCenterContentModel);
    }

    public static showHelpCenterForLabelNames(labelNames: string[],
                                              options: HelpCenterOptions = new HelpCenterOptions()): void {
        const helpCenterContentModel: ZDKHelpCenterOverviewContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        const tempNSArray = NSMutableArray.alloc().initWithCapacity(labelNames.length);
        labelNames.forEach((value: string) => {
            tempNSArray.addObject(value);
        });
        helpCenterContentModel.labels = tempNSArray;
        ZendeskSdk.initHelpCenter(options, helpCenterContentModel);
    }

    public static showHelpCenterForSectionIds(sectionIds: number[],
                                              options: HelpCenterOptions = new HelpCenterOptions()): void {
        const helpCenterContentModel: ZDKHelpCenterOverviewContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        helpCenterContentModel.groupType = ZDKHelpCenterOverviewGroupType.Section;
        ZendeskSdk.initHelpCenter(options, helpCenterContentModel);
    }

    public static showArticle(articleId: string,
                              locale: string): void {
        const provider: ZDKHelpCenterProvider = ZDKHelpCenterProvider.alloc()
            .initWithLocale(locale);
        provider.getArticleByIdWithCallback(
            articleId, (items: NSArray<any>,
                        error: NSError) => {
                if ( items.count > 0 ) {
                    let vc: ZDKArticleViewController = ZDKArticleViewController.alloc()
                        .initWithArticle(items.firstObject);
                    topmost()
                        .ios
                        .controller
                        .pushViewControllerAnimated(vc, true);
                }
            },
        );
    }

    public static createRequest(requestSubject?: string,
                                additionalInfo?: string,
                                addDeviceInfo: boolean = true,
                                ...tags: string[]): void {
        const deviceInfo: string = addDeviceInfo
            ? '\n\n' + device.language + '-' + device.region + '\n'
              + device.manufacturer + ' ' + device.model + '\n' + device.os + ' '
              + device.osVersion + '(' + device.sdkVersion + ')'
            : '';
        ZDKRequests.configure(
            (account: ZDKAccount,
             requestCreationConfig: ZDKRequestCreationConfig) => {
                requestCreationConfig.subject = requestSubject;
                requestCreationConfig.additionalRequestInfo = !!additionalInfo || addDeviceInfo
                    ? '\n\n------------------------------' // added to make the output the same as Android SDK
                      + (!!additionalInfo
                        ? '\n\n' + additionalInfo
                        : '')
                      + deviceInfo
                    : '';
                const tempNSArray = NSMutableArray.alloc().initWithCapacity(tags.length);
                tags.forEach((value: string) => {
                    tempNSArray.addObject(value);
                });
                requestCreationConfig.tags = tempNSArray;
            },
        );
        ZDKRequests.presentRequestCreationWithViewController(topmost().ios.controller);
    }

    public static setIosTheme(theme: ZendeskIosThemeSimple): void {
        let themeTemp: ZDKTheme = ZDKTheme.baseTheme();

        if ( theme.primaryTextColor ) {
            themeTemp.primaryTextColor = new Color(theme.primaryTextColor).ios;
        }
        if ( theme.secondaryTextColor ) {
            themeTemp.secondaryTextColor = new Color(theme.secondaryTextColor).ios;
        }
        if ( theme.primaryBackgroundColor ) {
            themeTemp.primaryBackgroundColor = new Color(theme.primaryBackgroundColor).ios;
        }
        if ( theme.secondaryBackgroundColor ) {
            themeTemp.secondaryBackgroundColor = new Color(theme.secondaryBackgroundColor).ios;
        }
        if ( theme.emptyBackgroundColor ) {
            themeTemp.emptyBackgroundColor = new Color(theme.emptyBackgroundColor).ios;
        }
        if ( theme.metaTextColor ) {
            themeTemp.metaTextColor = new Color(theme.metaTextColor).ios;
        }
        if ( theme.separatorColor ) {
            themeTemp.separatorColor = new Color(theme.separatorColor).ios;
        }
        if ( theme.inputFieldTextColor ) {
            themeTemp.inputFieldTextColor = new Color(theme.inputFieldTextColor).ios;
        }
        if ( theme.inputFieldBackgroundColor ) {
            themeTemp.inputFieldBackgroundColor = new Color(theme.inputFieldBackgroundColor).ios;
        }
        if ( theme.fontName ) { themeTemp.fontName = theme.fontName; }
        if ( theme.boldFontName ) { themeTemp.boldFontName = theme.boldFontName; }

        themeTemp.apply();
    }
}
