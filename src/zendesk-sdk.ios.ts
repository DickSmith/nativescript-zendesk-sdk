import { Color } from "tns-core-modules/color/color";
import { device } from "tns-core-modules/platform";
import { topmost } from "tns-core-modules/ui/frame";
import {
  AnonUserIdentity,
  InitConfig,
  RequestOptions,
  HelpCenterOptions,
  IosThemeSimple,
  ZendeskSdk as ZendeskSdkBase
} from "./zendesk-sdk";

export * from "./zendesk-sdk.common";

export class ZendeskSdk implements ZendeskSdkBase {
  public static initialize(config: InitConfig): ZendeskSdk {
    ZDKZendesk.initializeWithAppIdClientIdZendeskUrl(
      config.applicationId,
      config.clientId,
      config.zendeskUrl
    );

    if (config.identity == null) {
      ZendeskSdk.setAnonymousIdentity();
    } else if (typeof config.identity === "object") {
      ZendeskSdk.setAnonymousIdentity(config.identity);
    } else if (typeof config.identity === "string") {
      ZendeskSdk.setJwtIdentity(config.identity);
    }

    ZDKSupportUI.initializeWithZendesk(ZDKZendesk.instance);

    if (config.userLocale) {
      ZendeskSdk.setUserLocale(config.userLocale);
    }

    return ZendeskSdk;
  }

  public static setUserLocale(locale: string): ZendeskSdk {
    if (ZDKSupport.instance) {
      ZDKSupport.instance.helpCenterLocaleOverride = locale;
    }

    return ZendeskSdk;
  }

  public static setAnonymousIdentity(
    anonUserIdentity: AnonUserIdentity = {}
  ): ZendeskSdk {
    ZDKZendesk.instance.setIdentity(
      ZDKObjCAnonymous.alloc().initWithNameEmail(
        anonUserIdentity.name,
        anonUserIdentity.email
      )
    );

    return ZendeskSdk;
  }

  public static setJwtIdentity(jwtUserIdentifier: string): ZendeskSdk {
    ZDKZendesk.instance.setIdentity(
      ZDKObjCJwt.alloc().initWithToken(jwtUserIdentifier)
    );

    return ZendeskSdk;
  }

  public static showHelpCenter(options: HelpCenterOptions = {}): void {
    const vc = ZDKHelpCenterUi.buildHelpCenterOverviewWithConfigs(
      NSArray.arrayWithObject(ZendeskSdk._initHelpCenterConfiguration(options))
    );
    ZendeskSdk._showView(vc);
  }

  public static showHelpCenterForCategoryIds(
    categoryIds: Array<number>,
    options: HelpCenterOptions = {}
  ): void {
    const hcUiConfig = ZendeskSdk._initHelpCenterConfiguration(options);
    hcUiConfig.groupType = ZDKHelpCenterOverviewGroupType.Category;
    const nsArray: NSMutableArray<number> = NSMutableArray.array();
    for (const e of categoryIds) {
      nsArray.addObject(e);
    }
    hcUiConfig.groupIds = nsArray;
    const vc = ZDKHelpCenterUi.buildHelpCenterOverviewWithConfigs(
      NSArray.arrayWithObject(hcUiConfig)
    );
    ZendeskSdk._showView(vc);
  }

  public static showHelpCenterForLabelNames(
    labelNames: Array<string>,
    options: HelpCenterOptions = {}
  ): void {
    const hcUiConfig = ZendeskSdk._initHelpCenterConfiguration(options);
    const nsArray: NSMutableArray<string> = NSMutableArray.array();
    for (const e of labelNames) {
      nsArray.addObject(e);
    }
    hcUiConfig.labels = nsArray;
    const vc = ZDKHelpCenterUi.buildHelpCenterOverviewWithConfigs(
      NSArray.arrayWithObject(hcUiConfig)
    );
    ZendeskSdk._showView(vc);
  }

  public static showHelpCenterForSectionIds(
    sectionIds: Array<number>,
    options: HelpCenterOptions = {}
  ): void {
    const hcUiConfig = ZendeskSdk._initHelpCenterConfiguration(options);
    hcUiConfig.groupType = ZDKHelpCenterOverviewGroupType.Section;
    const nsArray: NSMutableArray<number> = NSMutableArray.array();
    for (const e of sectionIds) {
      nsArray.addObject(e);
    }
    hcUiConfig.groupIds = nsArray;
    const vc = ZDKHelpCenterUi.buildHelpCenterOverviewWithConfigs(
      NSArray.arrayWithObject(hcUiConfig)
    );
    ZendeskSdk._showView(vc);
  }

  public static showArticle(articleId: string): void {
    const vc = ZDKHelpCenterUi.buildHelpCenterArticleWithArticleIdAndConfigs(
      articleId,
      NSArray.arrayWithObject(ZDKArticleUiConfiguration.new())
    );
    topmost().ios.controller.pushViewControllerAnimated(vc, true);
  }

  public static createRequest(requestOptions: RequestOptions): void {
    const requestUiConfig = ZDKRequestUiConfiguration.new();

    if (!!requestOptions.requestSubject) {
      requestUiConfig.subject = requestOptions.requestSubject;
    }

    if (!!requestOptions.tags && requestOptions.tags.length > 0) {
      const nsArray: NSMutableArray<string> = NSMutableArray.array();
      for (const tag of requestOptions.tags) {
        nsArray.addObject(tag);
      }
      requestUiConfig.tags = nsArray;
    }

    if (
      !!requestOptions.customFields &&
      requestOptions.customFields.length > 0
    ) {
      const nsArray: NSMutableArray<ZDKCustomField> = NSMutableArray.array();
      for (const field of requestOptions.customFields) {
        const nativeCustomField = ZDKCustomField.new().initWithFieldIdAndValue(parseInt(field.id), field.value);
        nsArray.addObject(nativeCustomField);
      }
    }

    const requestUiConfigArray: NSMutableArray<
      ZDKRequestUiConfiguration
    > = NSMutableArray.array();
    requestUiConfigArray.addObject(requestUiConfig);

    const requestViewController = !!requestOptions.requestId
      ? ZDKRequestUi.buildRequestUiWithRequestIdConfigurations(
          requestOptions.requestId,
          requestUiConfigArray
        )
      : ZDKRequestUi.buildRequestUiWith(requestUiConfigArray);

    topmost().ios.controller.pushViewControllerAnimated(
      requestViewController,
      true
    );
  }

  public static showRequestList() {
    topmost().ios.controller.pushViewControllerAnimated(
      ZDKRequestUi.buildRequestList(),
      true
    );
  }

  public static setIosTheme(theme: IosThemeSimple): ZendeskSdk {
    if (theme.primaryColor) {
      ZDKTheme.currentTheme.primaryColor = new Color(theme.primaryColor).ios;
    }

    return ZendeskSdk;
  }

  private static _requestUiConfig: any = null;

  private static _initHelpCenterConfiguration(
    options: HelpCenterOptions
  ): ZDKHelpCenterUiConfiguration {
    const helpCenterConfig = ZDKHelpCenterUiConfiguration.new();

    helpCenterConfig.hideContactSupport = !!options.contactUsButtonVisible
      ? !options.contactUsButtonVisible
      : true;

    return helpCenterConfig;
  }

  private static _showView(viewController: UIViewController) {
    topmost().ios.controller.pushViewControllerAnimated(viewController);
  }

  private constructor() {}
}
