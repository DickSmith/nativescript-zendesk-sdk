export interface AnonUserIdentity {
  name?: string;
  email?: string;
}

export interface HelpCenterOptions {
  /** default: false */
  categoriesCollapsedAndroid?: boolean;
  /** default: true */
  conversationsMenu?: boolean;
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
  primaryColor: any;
}

export interface RequestConfig {
  requestSubject?: string;
  addDeviceInfo?: boolean;
  tags?: Array<string>;
}
