import { topmost } from "tns-core-modules/ui/frame";
import {
  AnonUserIdentity,
  HelpCenterOptions,
  InitConfig,
  IosThemeSimple,
  ZendeskSdk as ZendeskSdkBase
} from "./zendesk-sdk";
import {
  ArticleOptions,
  RequestOptions,
  CustomField
} from "./zendesk-sdk.common";

export * from "./zendesk-sdk.common";
declare const zendesk;

export class ZendeskSdk implements ZendeskSdkBase {
  public static initialize(config: InitConfig): ZendeskSdk {
    zendesk.core.Zendesk.INSTANCE.init(
      topmost().android.activity,
      config.zendeskUrl,
      config.applicationId,
      config.clientId
    );

    if (!config.identity) {
      ZendeskSdk.setAnonymousIdentity();
    } else if (typeof config.identity === "object") {
      ZendeskSdk.setAnonymousIdentity(config.identity);
    } else if (typeof config.identity === "string") {
      ZendeskSdk.setJwtIdentity(config.identity);
    }

    zendesk.support.Support.INSTANCE.init(zendesk.core.Zendesk.INSTANCE);

    if (config.userLocale) {
      ZendeskSdk.setUserLocale(config.userLocale);
    }

    return ZendeskSdk;
  }

  public static setUserLocale(locale: string): ZendeskSdk {
    if (zendesk.support.Support.INSTANCE) {
      zendesk.support.Support.INSTANCE.setHelpCenterLocaleOverride(
        new java.util.Locale(locale)
      );
    }

    return ZendeskSdk;
  }

  public static setAnonymousIdentity(
    anonUserIdentity: AnonUserIdentity = {}
  ): ZendeskSdk {
    const anonymousIdentityBuilder = new zendesk.core.AnonymousIdentity.Builder();

    if (anonUserIdentity.name) {
      anonymousIdentityBuilder.withNameIdentifier(anonUserIdentity.name);
    }

    if (anonUserIdentity.email) {
      anonymousIdentityBuilder.withEmailIdentifier(anonUserIdentity.email);
    }

    zendesk.core.Zendesk.INSTANCE.setIdentity(anonymousIdentityBuilder.build());

    return ZendeskSdk;
  }

  public static setJwtIdentity(jwtUserIdentifier: string): ZendeskSdk {
    zendesk.core.Zendesk.INSTANCE.setIdentity(
      new zendesk.core.JwtIdentity(jwtUserIdentifier)
    );

    return ZendeskSdk;
  }

  private static getHelpCenterUiConfigs(
    options: HelpCenterOptions = {},
    uiConfig: any[] = []
  ) {
    if (options.articleOptions) {
      uiConfig.push(this._initArticle(options.articleOptions).config());
    }

    return this.getRequestUiConfigAsArray(uiConfig);
  }

  public static showHelpCenter(
    options: HelpCenterOptions = {},
    uiConfig: any[] = []
  ): void {
    this._initHelpCenter(options).show(
      topmost().android.activity,
      this.getHelpCenterUiConfigs(options, uiConfig)
    );
  }

  public static showHelpCenterForCategoryIds(
    categoryIds: number[],
    options: HelpCenterOptions = {},
    uiConfig: any[] = []
  ): void {
    this._initHelpCenter(options)
      .withArticlesForCategoryIds(<any>categoryIds)
      .show(
        topmost().android.activity,
        this.getHelpCenterUiConfigs(options, uiConfig)
      );
  }

  public static showHelpCenterForSectionIds(
    sectionIds: number[],
    options: HelpCenterOptions = {},
    uiConfig: any[] = []
  ): void {
    this._initHelpCenter(options)
      .withArticlesForSectionIds(<any>sectionIds)
      .show(
        topmost().android.activity,
        this.getHelpCenterUiConfigs(options, uiConfig)
      );
  }

  public static showHelpCenterForLabelNames(
    labelNames: string[],
    options: HelpCenterOptions = {},
    uiConfig: any[] = []
  ): void {
    this._initHelpCenter(options)
      .withLabelNames(<any>labelNames)
      .show(
        topmost().android.activity,
        this.getHelpCenterUiConfigs(options, uiConfig)
      );
  }

  public static showArticle(
    articleId: string,
    options: ArticleOptions = {},
    uiConfig: any[] = []
  ): void {
    this._initArticle(options, articleId).show(
      topmost().android.activity,
      this.getRequestUiConfigAsArray(uiConfig)
    );
  }

  public static createRequest(
    options: RequestOptions = {},
    uiConfig: any[] = []
  ) {
    this._initRequest(options).show(
      topmost().android.activity,
      this.getRequestUiConfigAsArray(uiConfig)
    );
  }

  public static showRequestList() {
    zendesk.support.requestlist.RequestListActivity.builder().show(
      topmost().android.activity,
      this.getRequestUiConfigAsArray()
    );
  }

  public static setIosTheme(_theme: IosThemeSimple): ZendeskSdk {
    return ZendeskSdk;
  }

  private static _requestUiConfig: any = null;

  private static getRequestUiConfigAsArray(
    uiConfig: any[] = []
  ): java.util.ArrayList<any> {
    const requestUiConfig: any[] =
      uiConfig.length > 0 ? uiConfig : [ZendeskSdk._requestUiConfig];
    return new java.util.ArrayList(java.util.Arrays.asList(requestUiConfig));
  }

  private static _initHelpCenter(
    options: HelpCenterOptions
  ): any {
    return zendesk.support.guide.HelpCenterActivity.builder()
      .withContactUsButtonVisible(
        !!options.contactUsButtonVisible
          ? options.contactUsButtonVisible
          : false
      )
      .withCategoriesCollapsed(
        !!options.categoriesCollapsed ? options.categoriesCollapsed : false
      )
      .withShowConversationsMenuButton(
        !!options.conversationsMenu ? options.conversationsMenu : false
      );
  }

  private static _initArticle(
    options: ArticleOptions,
    articleId?: string
  ): any {
    const articleBuilder = articleId
      ? zendesk.support.guide.ViewArticleActivity.builder(parseInt(articleId))
      : zendesk.support.guide.ViewArticleActivity.builder();
    return articleBuilder.withContactUsButtonVisible(
      !!options.contactUsButtonVisible ? options.contactUsButtonVisible : false
    );
  }

  private static _initRequest(
    options: RequestOptions
  ): any {
    let requestBuilder = zendesk.support.request.RequestActivity.builder();

    if (!!options.requestId) {
      requestBuilder = requestBuilder.withRequestId(options.requestId);
    }

    if (!!options.requestSubject) {
      requestBuilder = requestBuilder.withRequestSubject(
        options.requestSubject
      );
    }

    if (!!options.tags && options.tags.length > 0) {
      requestBuilder = requestBuilder.withTags(
        new java.util.ArrayList(java.util.Arrays.asList(options.tags))
      );
    }

    if (!!options.customFields && options.customFields.length > 0) {
      requestBuilder = requestBuilder.withCustomFields(
        this.createNativeCustomFields(options.customFields)
      );
    }

    if (!!options.files && options.files.length > 0) {
      requestBuilder = requestBuilder.withFiles(
        new java.util.ArrayList(java.util.Arrays.asList(options.files))
      );
    }

    if (
      options.ticketForm &&
      options.ticketForm.ticketFormId &&
      options.ticketForm.customFields &&
      options.ticketForm.customFields.length > 0
    ) {
      requestBuilder = requestBuilder.withTicketForm(
        new java.lang.Long(options.ticketForm.ticketFormId),
        this.createNativeCustomFields(options.ticketForm.customFields)
      );
    }

    return requestBuilder;
  }

  public static createNativeCustomFields(customFields: CustomField[]) {
    return new java.util.ArrayList(
      java.util.Arrays.asList(
        customFields.map(
          customField =>
            new zendesk.support.CustomField(
              new java.lang.Long(customField.id),
              customField.value
            )
        )
      )
    );
  }
}
