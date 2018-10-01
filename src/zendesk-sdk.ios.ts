import { Color } from 'tns-core-modules/color/color';
import { device } from 'tns-core-modules/platform';
import {
  AnonUserIdentity,
  HelpCenterOptions,
  InitConfig,
  IosThemeSimple,
  RequestConfig,
  ZendeskSdk as ZendeskSdkBase,
} from './zendesk-sdk';

export * from './zendesk-sdk.common';

export class ZendeskSdk implements ZendeskSdkBase {

  public static initialize(
    config: InitConfig
  ): ZendeskSdk {

    ZDKZendesk.initializeWithAppIdClientIdZendeskUrl(
      config.applicationId, config.clientId, config.zendeskUrl,
    );

    if (config.identity == null) {
      ZendeskSdk.setAnonymousIdentity();
    } else if (typeof config.identity === 'object') {
      ZendeskSdk.setAnonymousIdentity(config.identity);
    } else if (typeof config.identity === 'string') {
      ZendeskSdk.setJwtIdentity(config.identity);
    }

    ZDKSupport.initializeWithZendesk(ZDKZendesk.instance);

    if (config.userLocale) {
      ZendeskSdk.setUserLocale(config.userLocale);
    }

    return ZendeskSdk;
  }

  public static setUserLocale(
    locale: string
  ): ZendeskSdk {

    if (ZDKSupport.instance) {
      ZDKSupport.instance.helpCenterLocaleOverride = locale;
    }

    return ZendeskSdk;
  }

  public static setAnonymousIdentity(
    anonUserIdentity: AnonUserIdentity = {}
  ): ZendeskSdk {

    ZDKZendesk.instance.setIdentity(
      ZDKObjCAnonymous.alloc().initWithNameEmail(anonUserIdentity.name, anonUserIdentity.email)
    );

    return ZendeskSdk;
  }

  public static setJwtIdentity(jwtUserIdentifier: string): ZendeskSdk {

    ZDKZendesk.instance.setIdentity(
      ZDKObjCJwt.alloc().initWithToken(jwtUserIdentifier)
    );

    return ZendeskSdk;
  }

  public static configureRequests(
    config: RequestConfig
  ): ZendeskSdk {

    const temp = ZDKRequestUiConfiguration.new();

    if (config.requestSubject) {
      temp.subject = config.requestSubject;
    }

    const tags: Array<string> = [];

    if (config.addDeviceInfo) {
      for (const p in device) {
        const value: any = (<any>device)[p];
        if (typeof value === 'string' && value.length) {
          const tag: string = value.replace(/(\s|,)/g, '');
          tags.push(`${p}:${tag}`);
        }
      }
    }

    if (config.tags && config.tags.length) {
      for (const value of config.tags) {
        if (typeof value === 'string' && value.length) {
          const tag: string = value.replace(/(\s|,)/g, '');
          tags.push(tag);
        }
      }
    }

    if (tags.length) {
      const tagsNSArray: NSMutableArray<any> = NSMutableArray.alloc().initWithCapacity(tags.length);
      for (const tag of tags) {
        tagsNSArray.addObject(tag);
      }
      temp.tags = tagsNSArray;
    }

    ZendeskSdk._requestUiConfig = temp;

    return ZendeskSdk;
  }

  public static showHelpCenter(
    options: HelpCenterOptions = {}
  ): void {
    const vc = ZDKHelpCenterUi.buildHelpCenterOverviewWithConfigs(
      NSArray.arrayWithObject(ZendeskSdk._requestUiConfig)
    );
    ZendeskSdk._initHelpCenter(options, vc);
  }

  public static showHelpCenterForCategoryIds(
    categoryIds: Array<number>,
    options: HelpCenterOptions = {}
  ): void {
    const hcUiConfig = ZDKHelpCenterUiConfiguration.new();
    hcUiConfig.groupType = ZDKHelpCenterOverviewGroupType.Category;
    const nsArray: NSMutableArray<number> = NSMutableArray.array();
    for (const e of categoryIds) {
      nsArray.addObject(e);
    }
    hcUiConfig.groupIds = nsArray;
    const vc = ZDKHelpCenterUi.buildHelpCenterOverviewWithConfigs(
      NSArray.arrayWithObject(ZendeskSdk._requestUiConfig).arrayByAddingObject(hcUiConfig)
    );
    ZendeskSdk._initHelpCenter(options, vc);
  }

  public static showHelpCenterForLabelNames(
    labelNames: Array<string>,
    options: HelpCenterOptions = {}
  ): void {
    const hcUiConfig = ZDKHelpCenterUiConfiguration.new();
    const nsArray: NSMutableArray<string> = NSMutableArray.array();
    for (const e of labelNames) {
      nsArray.addObject(e);
    }
    hcUiConfig.labels = nsArray;
    const vc = ZDKHelpCenterUi.buildHelpCenterOverviewWithConfigs(
      NSArray.arrayWithObject(ZendeskSdk._requestUiConfig).arrayByAddingObject(hcUiConfig)
    );
    ZendeskSdk._initHelpCenter(options, vc);
  }

  public static showHelpCenterForSectionIds(
    sectionIds: Array<number>,
    options: HelpCenterOptions = {}
  ): void {
    const hcUiConfig = ZDKHelpCenterUiConfiguration.new();
    hcUiConfig.groupType = ZDKHelpCenterOverviewGroupType.Section;
    const nsArray: NSMutableArray<number> = NSMutableArray.array();
    for (const e of sectionIds) {
      nsArray.addObject(e);
    }
    hcUiConfig.groupIds = nsArray;
    const vc = ZDKHelpCenterUi.buildHelpCenterOverviewWithConfigs(
      NSArray.arrayWithObject(ZendeskSdk._requestUiConfig).arrayByAddingObject(hcUiConfig)
    );
    ZendeskSdk._initHelpCenter(options, vc);
  }

  public static showArticle(
    articleId: string
  ): void {
    const vc = ZDKHelpCenterUi.buildHelpCenterArticleWithArticleIdAndConfigs(
      articleId, NSArray.arrayWithObject(ZendeskSdk._requestUiConfig)
    );
    UIApplication.sharedApplication.keyWindow.rootViewController
      .presentViewControllerAnimatedCompletion(vc, true, null);
  }

  public static createRequest(): void {
    UIApplication.sharedApplication.keyWindow.rootViewController
      .presentViewControllerAnimatedCompletion(ZDKRequestUi.buildRequestUi(), true, null);
  }

  public static setIosTheme(
    theme: IosThemeSimple
  ): ZendeskSdk {

    if (theme.primaryColor) {
      ZDKTheme.currentTheme.primaryColor = new Color(theme.primaryColor).ios;
    }

    return ZendeskSdk;
  }

  private static _requestUiConfig: ZDKUiConfiguration = null;

  private static _initHelpCenter(
    options: HelpCenterOptions,
    vc: UIViewController
  ): void {
    if (options.conversationsMenu != null ? !options.conversationsMenu : false) {
      (<ZDKHelpCenterDelegate>(<any>vc)).uiDelegate = new ZDKHelpCenterConversationsUIDelegateImpl();
    }
    UIApplication.sharedApplication.keyWindow.rootViewController
      .presentViewControllerAnimatedCompletion(vc, true, null);
  }

  private constructor() {
  }
}

class ZDKHelpCenterConversationsUIDelegateImpl extends NSObject implements ZDKHelpCenterConversationsUIDelegate {
  public static ObjCProtocols = [ZDKHelpCenterConversationsUIDelegate];

  public active(): ZDKContactUsVisibility {
    return ZDKContactUsVisibility.Off;
  }

  public navBarConversationsUIType(): ZDKNavBarConversationsUIType {
    return ZDKNavBarConversationsUIType.None;
  }
}
