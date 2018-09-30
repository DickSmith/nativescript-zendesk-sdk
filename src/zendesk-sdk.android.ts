import { device } from 'tns-core-modules/platform';
import { topmost } from 'tns-core-modules/ui/frame';
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

    zendesk.core.Zendesk.INSTANCE.init(
      topmost().android.activity, config.zendeskUrl, config.applicationId, config.clientId,
    );

    if (config.userLocale) {
      ZendeskSdk.setUserLocale(config.userLocale);
    }

    if (config.identity == null) {
      ZendeskSdk.setAnonymousIdentity();
    } else if (typeof config.identity === 'object') {
      ZendeskSdk.setAnonymousIdentity(config.identity);
    } else if (typeof config.identity === 'string') {
      ZendeskSdk.setJwtIdentity(config.identity);
    }
    zendesk.support.Support.INSTANCE.init(zendesk.core.Zendesk.INSTANCE);

    return ZendeskSdk;
  }

  public static setUserLocale(
    locale: string
  ): ZendeskSdk {

    zendesk.support.Support.INSTANCE.setHelpCenterLocaleOverride(new java.util.Locale(locale));

    return ZendeskSdk;
  }

  public static setAnonymousIdentity(
    anonUserIdentity: AnonUserIdentity = {}
  ): ZendeskSdk {

    const anonymousIdentityBuilder: zendesk.core.AnonymousIdentity.Builder
      = new zendesk.core.AnonymousIdentity.Builder();

    if (anonUserIdentity.name) {
      anonymousIdentityBuilder.withNameIdentifier(anonUserIdentity.name);
    }

    if (anonUserIdentity.email) {
      anonymousIdentityBuilder.withEmailIdentifier(anonUserIdentity.email);
    }

    zendesk.core.Zendesk.INSTANCE.setIdentity(anonymousIdentityBuilder.build());

    return ZendeskSdk;
  }

  public static setJwtIdentity(
    jwtUserIdentifier: string
  ): ZendeskSdk {

    zendesk.core.Zendesk.INSTANCE.setIdentity(
      new zendesk.core.JwtIdentity(jwtUserIdentifier),
    );

    return ZendeskSdk;
  }

  public static configureRequests(
    config: RequestConfig = {}
  ): ZendeskSdk {

    const temp = zendesk.support.request.RequestActivity.builder();

    if (config.requestSubject) {
      temp.withRequestSubject(config.requestSubject);
    }

    const tags = [];

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
      temp.withTags(tags);
    }

    ZendeskSdk._requestUiConfig = temp.config();

    return ZendeskSdk;
  }

  public static showHelpCenter(options: HelpCenterOptions = {}): void {

    ZendeskSdk._initHelpCenter(options)
      .show(topmost().android.activity, [ZendeskSdk._requestUiConfig]);
  }

  public static showHelpCenterForCategoryIds(categoryIds: Array<number>, options: HelpCenterOptions = {}): void {

    ZendeskSdk._initHelpCenter(options).withArticlesForCategoryIds(<any>categoryIds)
      .show(topmost().android.activity, [ZendeskSdk._requestUiConfig]);
  }

  public static showHelpCenterForLabelNames(labelNames: Array<string>, options: HelpCenterOptions = {}): void {

    ZendeskSdk._initHelpCenter(options).withLabelNames(labelNames)
      .show(topmost().android.activity, [ZendeskSdk._requestUiConfig]);
  }

  public static showHelpCenterForSectionIds(
    sectionIds: Array<number>,
    options: HelpCenterOptions = {}
  ): void {

    ZendeskSdk._initHelpCenter(options).withArticlesForSectionIds(<any>sectionIds)
      .show(topmost().android.activity, [ZendeskSdk._requestUiConfig]);
  }

  public static showArticle(
    articleId: string
  ): void {

    zendesk.support.guide.ViewArticleActivity.builder(parseInt(articleId))
      .show(topmost().android.activity, [ZendeskSdk._requestUiConfig]);
  }

  public static createRequest() {

    zendesk.support.request.RequestActivity.builder()
      .show(topmost().android.activity, [ZendeskSdk._requestUiConfig]);
  }

  public static setIosTheme(theme: IosThemeSimple): ZendeskSdk {
    return ZendeskSdk;
  }

  private static _requestUiConfig: zendesk.support.UiConfig = null;

  private static _initHelpCenter(options: HelpCenterOptions): zendesk.support.guide.HelpCenterUiConfig.Builder {

    return zendesk.support.guide.HelpCenterActivity.builder()
      .withContactUsButtonVisible(false)
      .withCategoriesCollapsed(
        options.categoriesCollapsedAndroid != null
          ? options.categoriesCollapsedAndroid
          : false)
      .withShowConversationsMenuButton(
        options.conversationsMenu != null
          ? options.conversationsMenu
          : true);
  }

  private constructor() {
  }
}
