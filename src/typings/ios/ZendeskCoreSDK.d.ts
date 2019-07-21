declare class ZDKAuthenticationURLProtocol extends NSURLProtocol {
  static alloc(): ZDKAuthenticationURLProtocol; // inherited from NSObject

  static new(): ZDKAuthenticationURLProtocol; // inherited from NSObject
}

declare class ZDKCoreLogger extends NSObject {
  static alloc(): ZDKCoreLogger; // inherited from NSObject

  static debug(message: string): void;

  static error(message: string): void;

  static info(message: string): void;

  static new(): ZDKCoreLogger; // inherited from NSObject

  static setEnabled(value: boolean): void;

  static setLogLevel(value: ZDKLogLevel): void;

  static verbose(message: string): void;

  static warn(message: string): void;

  static enabled: boolean;

  static logLevel: ZDKLogLevel;
}

declare class ZDKHelpCenterUtil extends NSObject {
  static alloc(): ZDKHelpCenterUtil; // inherited from NSObject

  static canonicalRequestFor(request: NSURLRequest): NSURLRequest;

  static new(): ZDKHelpCenterUtil; // inherited from NSObject

  static readonly hasAuth: boolean;

  static readonly zendeskURL: string;
}

declare class ZDKIdentityMigrator extends NSObject {
  static alloc(): ZDKIdentityMigrator; // inherited from NSObject

  static new(): ZDKIdentityMigrator; // inherited from NSObject
}

declare const enum ZDKLogLevel {
  Error = 0,

  Warn = 1,

  Info = 2,

  Debug = 3,

  Verbose = 4
}

declare class ZDKObjCAnonymous extends NSObject implements ZDKObjCIdentity {
  static alloc(): ZDKObjCAnonymous; // inherited from NSObject

  static new(): ZDKObjCAnonymous; // inherited from NSObject

  readonly email: string;

  readonly guid: string;

  readonly name: string;

  constructor(o: { name: string; email: string });

  initWithNameEmail(name: string, email: string): this;
}

interface ZDKObjCIdentity {}
declare var ZDKObjCIdentity: {
  prototype: ZDKObjCIdentity;
};

declare class ZDKObjCJwt extends NSObject implements ZDKObjCIdentity {
  static alloc(): ZDKObjCJwt; // inherited from NSObject

  static new(): ZDKObjCJwt; // inherited from NSObject

  readonly token: string;

  constructor(o: { token: string });

  initWithToken(token: string): this;
}

declare class ZDKPushProvider extends NSObject {
  static alloc(): ZDKPushProvider; // inherited from NSObject

  static new(): ZDKPushProvider; // inherited from NSObject

  constructor(o: { zendesk: ZDKZendesk });

  initWithZendesk(zendesk: ZDKZendesk): this;

  registerWithDeviceIdentifierLocaleCompletion(
    deviceIdentifier: string,
    locale: string,
    completion: (p1: string, p2: NSError) => void
  ): void;

  registerWithUAIdentifierLocaleCompletion(
    UAIdentifier: string,
    locale: string,
    completion: (p1: string, p2: NSError) => void
  ): void;

  unregisterForPush(): void;
}

declare class ZDKUser extends NSObject {
  static alloc(): ZDKUser; // inherited from NSObject

  static new(): ZDKUser; // inherited from NSObject

  readonly agent: boolean;

  readonly content_url: string;

  readonly id: string;

  readonly name: string;

  readonly tags: NSArray<string>;

  readonly user_fields: NSDictionary<string, string>;
}

declare class ZDKUserField extends NSObject {
  static alloc(): ZDKUserField; // inherited from NSObject

  static new(): ZDKUserField; // inherited from NSObject

  readonly active: boolean;

  readonly created_at: Date;

  readonly custom_field_options: NSArray<ZDKUserFieldOption>;

  readonly fieldDescription: string;

  readonly fieldType: string;

  readonly id: string;

  readonly key: string;

  readonly position: number;

  readonly raw_description: string;

  readonly raw_title: string;

  readonly regexp_for_validation: string;

  readonly system: boolean;

  readonly title: string;

  readonly updated_at: Date;

  readonly url: string;
}

declare class ZDKUserFieldOption extends NSObject {
  static alloc(): ZDKUserFieldOption; // inherited from NSObject

  static new(): ZDKUserFieldOption; // inherited from NSObject

  readonly id: string;

  readonly name: string;

  readonly position: number;

  readonly raw_name: string;

  readonly url: string;

  readonly value: string;
}

declare class ZDKUserProvider extends NSObject {
  static alloc(): ZDKUserProvider; // inherited from NSObject

  static new(): ZDKUserProvider; // inherited from NSObject

  constructor(o: { zendesk: ZDKZendesk });

  addTags(
    tags: NSArray<string> | string[],
    completion: (p1: NSArray<string>, p2: NSError) => void
  ): void;

  deleteTagsCompletion(
    tags: NSArray<string> | string[],
    completion: (p1: NSArray<string>, p2: NSError) => void
  ): void;

  getUserFieldsWithCompletion(
    completion: (p1: NSArray<ZDKUserField>, p2: NSError) => void
  ): void;

  getUserWithCompletion(completion: (p1: ZDKUser, p2: NSError) => void): void;

  initWithZendesk(zendesk: ZDKZendesk): this;

  setUserFieldsCompletion(
    userFields: NSDictionary<string, any>,
    completion: (p1: ZDKUser, p2: NSError) => void
  ): void;
}

declare class ZDKZendesk extends NSObject {
  static alloc(): ZDKZendesk; // inherited from NSObject

  static initializeWithAppIdClientIdZendeskUrl(
    appId: string,
    clientId: string,
    zendeskUrl: string
  ): void;

  static new(): ZDKZendesk; // inherited from NSObject

  static readonly instance: ZDKZendesk;

  objCIdentity(): ZDKObjCIdentity;

  setIdentity(newIdentity: ZDKObjCIdentity): void;
}
