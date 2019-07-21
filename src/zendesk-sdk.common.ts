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
    customFields: CustomField[]
  };
}

export interface CustomField {
  id: string;
  value: string;
}


export interface ArticleOptions {
  /** default: false */
  contactUsButtonVisible?: boolean;
}

export interface HelpCenterOptions {
  /** default: { contactUsButtonVisible: false } */
  articleOptions?: ArticleOptions;
  /** default: false */
  contactUsButtonVisible?: boolean;
  /** default: false */
  categoriesCollapsed?: boolean;
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