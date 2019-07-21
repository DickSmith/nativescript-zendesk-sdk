export interface AnonUserIdentity {
  name?: string;
  email?: string;
}
export interface RequestOptions {
  requestId?: string;
  requestSubject?: string;
  addDeviceInfo?: boolean;
  tags?: string[];
  files?: File[];
  customFields?: CustomField[];
  ticketForm?: {
      ticketFormId: string;
      customFields: CustomField[];
  };
}
export interface CustomField {
  id: string;
  value: string;
}
export interface ArticleOptions {
  contactUsButtonVisible?: boolean;
}
export interface HelpCenterOptions {
  articleOptions?: ArticleOptions;
  contactUsButtonVisible?: boolean;
  categoriesCollapsed?: boolean;
  conversationsMenu?: boolean;
}
export interface InitConfig {
  zendeskUrl: string;
  applicationId: string;
  clientId: string;
  userLocale?: string;
  identity?: AnonUserIdentity | string;
}
export interface IosThemeSimple {
  primaryColor: any;
}

export declare class ZendeskSdk {
  static initialize(config: InitConfig): ZendeskSdk;
  static setUserLocale(locale: string): ZendeskSdk;
  static setAnonymousIdentity(anonUserIdentity?: AnonUserIdentity): ZendeskSdk;
  static setJwtIdentity(jwtUserIdentifier: string): ZendeskSdk;
  private static getHelpCenterUiConfigs;
  static showHelpCenter(
    options?: HelpCenterOptions,
    uiConfig?: any[]
  ): void;
  static showHelpCenterForCategoryIds(
    categoryIds: number[],
    options?: HelpCenterOptions,
    uiConfig?: any[]
  ): void;
  static showHelpCenterForSectionIds(
    sectionIds: number[],
    options?: HelpCenterOptions,
    uiConfig?: any[]
  ): void;
  static showHelpCenterForLabelNames(
    labelNames: string[],
    options?: HelpCenterOptions,
    uiConfig?: any[]
  ): void;
  static showArticle(
    articleId: string,
    options?: ArticleOptions,
    uiConfig?: any[]
  ): void;
  static createRequest(
    options?: RequestOptions,
    uiConfig?: any[]
  ): void;
  static showRequestList(): void;
  static setIosTheme(_theme: IosThemeSimple): ZendeskSdk;
  static createNativeCustomFields(
    customFields: CustomField[]
  ): any;
}
