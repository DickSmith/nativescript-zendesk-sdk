declare class DispatcherAdapter extends NSObject {
  static alloc(): DispatcherAdapter; // inherited from NSObject

  static clearSettingsAndSession(): void;

  static convertErrorWithResponseOriginalError(
    response: NSURLResponse,
    error: NSError
  ): NSError;

  static new(): DispatcherAdapter; // inherited from NSObject

  static performRequestWithZendeskUrlRequestRequiresAuthCompletionHandler(
    zendesk: ZDKZendesk,
    urlRequest: NSURLRequest,
    requiresAuth: boolean,
    completionHandler: (p1: NSURLResponse, p2: NSData, p3: NSError) => void
  ): void;
}

declare class HTMLSanitizer extends NSObject {
  static alloc(): HTMLSanitizer; // inherited from NSObject

  static cleanWithHtml(html: string): string;

  static new(): HTMLSanitizer; // inherited from NSObject
}

declare var ZDCharacterLimitForUserAgentHeader: number;

declare var ZDD_Accept: string;

declare var ZDD_AcceptLanguage: string;

declare var ZDD_ClientIdentifier: string;

declare var ZDD_ContentLength: string;

declare var ZDD_ContentType: string;

declare var ZDD_ERROR_Domain: string;

declare var ZDD_ERROR_Key: string;

declare var ZDD_HTTPDelete: string;

declare var ZDD_HTTPGet: string;

declare var ZDD_HTTPPost: string;

declare var ZDD_HTTPPut: string;

declare var ZDD_MIMETypeGIF: string;

declare var ZDD_MIMETypeJPEG: string;

declare var ZDD_MIMETypePNG: string;

declare var ZDD_MIMETypeTIFF: string;

declare var ZDD_TypeJSON: string;

declare var ZDD_UserAgent: string;

declare var ZDD_Validator_Error_Key: string;

declare const enum ZDKAPILoginState {
  NotLoggedIn = 0,

  LoggingIn = 1,

  LoggedIn = 2
}

declare var ZDKAPI_AddUserTagsFailure: string;

declare var ZDKAPI_AddUserTagsStarting: string;

declare var ZDKAPI_AddUserTagsSuccess: string;

declare var ZDKAPI_CommentListError: string;

declare var ZDKAPI_CommentListStarting: string;

declare var ZDKAPI_CommentListSuccess: string;

declare var ZDKAPI_CommentSubmissionError: string;

declare var ZDKAPI_CommentSubmissionStarting: string;

declare var ZDKAPI_CommentSubmissionSuccess: string;

declare var ZDKAPI_ConfigUpdateFailed: string;

declare var ZDKAPI_ConfigUpdated: string;

declare var ZDKAPI_DeleteUploadError: string;

declare var ZDKAPI_DeleteUploadStarting: string;

declare var ZDKAPI_DeleteUploadSuccess: string;

declare var ZDKAPI_DeleteUserTagsFailure: string;

declare var ZDKAPI_DeleteUserTagsStarting: string;

declare var ZDKAPI_DeleteUserTagsSuccess: string;

declare var ZDKAPI_GetUserFailure: string;

declare var ZDKAPI_GetUserFieldsFailure: string;

declare var ZDKAPI_GetUserFieldsStarting: string;

declare var ZDKAPI_GetUserFieldsSuccess: string;

declare var ZDKAPI_GetUserStarting: string;

declare var ZDKAPI_GetUserSuccess: string;

declare var ZDKAPI_ReachabilityChangedNotification: string;

declare var ZDKAPI_RequestByIdError: string;

declare var ZDKAPI_RequestByIdStarting: string;

declare var ZDKAPI_RequestByIdSuccess: string;

declare var ZDKAPI_RequestSubmissionError: string;

declare var ZDKAPI_RequestSubmissionStarting: string;

declare var ZDKAPI_RequestSubmissionSuccess: string;

declare var ZDKAPI_RequestsError: string;

declare var ZDKAPI_RequestsStarting: string;

declare var ZDKAPI_RequestsSuccess: string;

declare var ZDKAPI_RequestsUpdated: string;

declare var ZDKAPI_SetUserFieldsFailure: string;

declare var ZDKAPI_SetUserFieldsStarting: string;

declare var ZDKAPI_SetUserFieldsSuccess: string;

declare var ZDKAPI_UploadAttachmentError: string;

declare var ZDKAPI_UploadAttachmentStarting: string;

declare var ZDKAPI_UploadAttachmentSuccess: string;

declare var ZDKAPI_UsersUpdated: string;

declare class ZDKAttachment extends NSObject {
  static alloc(): ZDKAttachment; // inherited from NSObject

  static new(): ZDKAttachment; // inherited from NSObject

  attachmentId: number;

  contentType: string;

  contentURLString: string;

  filename: string;

  imageDimension: CGSize;

  size: number;

  thumbnails: NSArray<ZDKAttachment>;

  constructor(o: { dict: NSDictionary<any, any> });

  initWithDict(dict: NSDictionary<any, any>): this;
}

declare class ZDKAttachmentCache extends NSObject {
  static alloc(): ZDKAttachmentCache; // inherited from NSObject

  static cacheImageWithFilename(image: UIImage, filename: string): void;

  static clearCache(): void;

  static imageWithFilename(filename: string): UIImage;

  static new(): ZDKAttachmentCache; // inherited from NSObject
}

declare class ZDKAttachmentProvider extends ZDKProvider {
  static alloc(): ZDKAttachmentProvider; // inherited from NSObject

  static new(): ZDKAttachmentProvider; // inherited from NSObject

  getAttachmentForUrlWithCallback(
    attachmentUrl: string,
    callback: (p1: NSData, p2: NSError) => void
  ): void;

  getAvatarForUrlWithCallback(
    avatarUrl: string,
    callback: (p1: UIImage, p2: NSError) => void
  ): void;
}

declare class ZDKAttachmentSettings extends NSObject {
  static alloc(): ZDKAttachmentSettings; // inherited from NSObject

  static new(): ZDKAttachmentSettings; // inherited from NSObject

  readonly enabled: boolean;

  readonly maxAttachmentSize: number;
}

declare class ZDKAttachmentSettingsProvider extends NSObject {
  static alloc(): ZDKAttachmentSettingsProvider; // inherited from NSObject

  static getAttachmentSettingsWithCallback(
    callback: (p1: ZDKAttachmentSettings) => void
  ): void;

  static new(): ZDKAttachmentSettingsProvider; // inherited from NSObject
}

declare const enum ZDKAuthenticationType {
  Unknown = 0,

  JWT = 1,

  Anonymous = 2
}

declare class ZDKBundleUtils extends NSObject {
  static alloc(): ZDKBundleUtils; // inherited from NSObject

  static frameworkResourceBundle(): NSBundle;

  static frameworkStringsBundle(): NSBundle;

  static helpCenterCss(): string;

  static imageNamedOfType(name: string, extension: string): UIImage;

  static new(): ZDKBundleUtils; // inherited from NSObject

  static pathForFrameworkResourceOfType(
    name: string,
    extension: string
  ): string;

  static stringsTableName(): string;

  static userDefinedHelpCenterCss(): string;
}

declare class ZDKCoding extends NSObject implements NSCoding {
  static alloc(): ZDKCoding; // inherited from NSObject

  static new(): ZDKCoding; // inherited from NSObject

  constructor(o: { coder: NSCoder }); // inherited from NSCoding

  encodeWithCoder(aCoder: NSCoder): void;

  initWithCoder(aDecoder: NSCoder): this;
}

declare class ZDKComment extends NSObject {
  static alloc(): ZDKComment; // inherited from NSObject

  static new(): ZDKComment; // inherited from NSObject

  attachments: NSArray<ZDKAttachment>;

  authorId: number;

  body: string;

  readonly commentId: number;

  createdAt: Date;

  htmlBody: string;

  requestId: string;

  constructor(o: { dictionary: NSDictionary<any, any> });

  initWithDictionary(dictionary: NSDictionary<any, any>): this;

  toJson(): NSDictionary<any, any>;
}

declare class ZDKCommentWithUser extends NSObject {
  static alloc(): ZDKCommentWithUser; // inherited from NSObject

  static buildCommentWithUserWithUsers(
    comment: ZDKComment,
    users: NSArray<any> | any[]
  ): ZDKCommentWithUser;

  static new(): ZDKCommentWithUser; // inherited from NSObject

  readonly comment: ZDKComment;

  readonly user: ZDKSupportUser;
}

declare class ZDKCommentsResponse extends NSObject {
  static alloc(): ZDKCommentsResponse; // inherited from NSObject

  static new(): ZDKCommentsResponse; // inherited from NSObject

  static parseData(dictionary: NSDictionary<any, any>): NSArray<any>;

  readonly commmentsWithUsers: NSArray<any>;
}

declare class ZDKContactUsSettings extends NSObject {
  static alloc(): ZDKContactUsSettings; // inherited from NSObject

  static new(): ZDKContactUsSettings; // inherited from NSObject

  readonly tags: NSArray<string>;

  constructor();

  initWith(tags: NSArray<string> | string[]): this;
}

declare class ZDKContactUsSettingsProvider extends NSObject {
  static alloc(): ZDKContactUsSettingsProvider; // inherited from NSObject

  static getContactUsSettingsWithCallback(
    callback: (p1: ZDKContactUsSettings) => void
  ): void;

  static new(): ZDKContactUsSettingsProvider; // inherited from NSObject
}

declare class ZDKConversationsSettings extends NSObject {
  static alloc(): ZDKConversationsSettings; // inherited from NSObject

  static new(): ZDKConversationsSettings; // inherited from NSObject

  readonly enabled: boolean;
}

declare class ZDKConversationsSettingsProvider extends NSObject {
  static alloc(): ZDKConversationsSettingsProvider; // inherited from NSObject

  static getConversationsSettingsWithCallback(
    callback: (p1: ZDKConversationsSettings) => void
  ): void;

  static new(): ZDKConversationsSettingsProvider; // inherited from NSObject
}

declare class ZDKCreateRequest extends NSObject {
  static alloc(): ZDKCreateRequest; // inherited from NSObject

  static new(): ZDKCreateRequest; // inherited from NSObject

  attachments: NSArray<any>;

  customTicketFields: NSArray<ZDKCustomField>;

  requestDescription: string;

  subject: string;

  tags: NSArray<any>;

  ticketFormId: number;

  constructor(o: { dict: NSDictionary<any, any> });

  initWithDict(dict: NSDictionary<any, any>): this;
}

declare class ZDKCustomField extends NSObject {
  static alloc(): ZDKCustomField; // inherited from NSObject

  static new(): ZDKCustomField; // inherited from NSObject

  readonly fieldId: number;

  readonly value: string;

  constructor(o: { fieldId: number; andValue: string });

  dictionaryValue(): NSDictionary<any, any>;

  initWithFieldIdAndValue(aFieldId: number, aValue: string): this;
}

declare class ZDKDateUtil extends NSObject {
  static alloc(): ZDKDateUtil; // inherited from NSObject

  static dateAsNumber(date: Date): number;

  static dateForJsonString(string: string): Date;

  static dateFromNumber(date: number): Date;

  static dateFromStringUsingFormat(string: string, format: string): Date;

  static formatterForFormat(format: string): NSDateFormatter;

  static new(): ZDKDateUtil; // inherited from NSObject

  static stringFromDate(date: Date): string;

  static stringFromDateUsingFormat(date: Date, format: string): string;
}

declare class ZDKDeviceInfo extends NSObject {
  static alloc(): ZDKDeviceInfo; // inherited from NSObject

  static batteryLevel(): number;

  static deviceInfoDictionary(): NSDictionary<any, any>;

  static deviceType(): string;

  static freeDiskspace(): number;

  static language(): string;

  static new(): ZDKDeviceInfo; // inherited from NSObject

  static region(): string;

  static totalDeviceMemory(): number;

  static totalDiskspace(): number;
}

interface ZDKDictionaryCreatable extends NSObjectProtocol {
  initWithDictionary?(
    dictionary: NSDictionary<any, any>
  ): ZDKDictionaryCreatable;
}
declare var ZDKDictionaryCreatable: {
  prototype: ZDKDictionaryCreatable;

  alloc(): ZDKDictionaryCreatable;
};

declare class ZDKDispatcherResponse extends NSObject {
  static alloc(): ZDKDispatcherResponse; // inherited from NSObject

  static new(): ZDKDispatcherResponse; // inherited from NSObject

  data: NSData;

  response: NSHTTPURLResponse;

  constructor(o: { response: NSHTTPURLResponse; andData: NSData });

  initWithResponseAndData(response: NSHTTPURLResponse, data: NSData): this;
}

declare class ZDKETag extends NSObject {
  static addEtagToRequest(request: NSMutableURLRequest): void;

  static alloc(): ZDKETag; // inherited from NSObject

  static eTagForURL(url: NSURL): string;

  static new(): ZDKETag; // inherited from NSObject

  static unmodified(response: ZDKDispatcherResponse): boolean;
}

declare class ZDKHelpCenterArticle extends NSObject {
  static alloc(): ZDKHelpCenterArticle; // inherited from NSObject

  static new(): ZDKHelpCenterArticle; // inherited from NSObject

  static parseArticle(
    articleJson: NSDictionary<any, any>
  ): ZDKHelpCenterArticle;

  articleParents: string;

  article_details: string;

  author_id: number;

  author_name: string;

  body: string;

  created_at: Date;

  htmlUrl: string;

  identifier: number;

  labelNames: NSArray<any>;

  locale: string;

  outdated: boolean;

  position: number;

  section_id: number;

  title: string;

  voteCount: number;

  voteSum: number;

  getDownvoteCount(): number;

  getUpvoteCount(): number;
}

declare class ZDKHelpCenterArticleViewModel extends NSObject {
  static alloc(): ZDKHelpCenterArticleViewModel; // inherited from NSObject

  static convertWithArticles(
    articles: NSArray<ZDKHelpCenterArticle> | ZDKHelpCenterArticle[]
  ): NSArray<ZDKHelpCenterArticleViewModel>;

  static new(): ZDKHelpCenterArticleViewModel; // inherited from NSObject

  readonly id: string;

  readonly name: string;

  readonly section_id: string;
}

declare class ZDKHelpCenterArticleVote extends NSObject {
  static alloc(): ZDKHelpCenterArticleVote; // inherited from NSObject

  static new(): ZDKHelpCenterArticleVote; // inherited from NSObject

  static parseArticleVote(
    articleVoteJson: NSDictionary<any, any>
  ): ZDKHelpCenterArticleVote;

  static parseArticleVotes(json: NSDictionary<any, any>): NSArray<any>;

  createdAt: Date;

  identifier: number;

  itemId: number;

  itemType: string;

  updatedAt: Date;

  url: string;

  userId: number;

  value: string;
}

declare class ZDKHelpCenterAttachment extends NSObject {
  static alloc(): ZDKHelpCenterAttachment; // inherited from NSObject

  static new(): ZDKHelpCenterAttachment; // inherited from NSObject

  static parseAttachment(
    attachmentJson: NSDictionary<any, any>
  ): ZDKHelpCenterAttachment;

  static parseAttachments(json: NSDictionary<any, any>): NSArray<any>;

  article_id: number;

  content_type: string;

  content_url: string;

  file_name: string;

  identifier: number;

  isInline: boolean;

  size: number;

  url: string;

  humanReadableFileSize(): string;
}

declare class ZDKHelpCenterBlips extends NSObject {
  static alloc(): ZDKHelpCenterBlips; // inherited from NSObject

  static new(): ZDKHelpCenterBlips; // inherited from NSObject
}

declare class ZDKHelpCenterCategory extends NSObject {
  static alloc(): ZDKHelpCenterCategory; // inherited from NSObject

  static new(): ZDKHelpCenterCategory; // inherited from NSObject

  static parseCategories(json: NSDictionary<any, any>): NSArray<any>;

  static parseCategory(
    categoryJson: NSDictionary<any, any>
  ): ZDKHelpCenterCategory;

  categoryDescription: string;

  createdAt: string;

  html_url: string;

  identifier: number;

  locale: string;

  name: string;

  outdated: boolean;

  position: number;

  sourceLocale: string;

  updatedAt: string;

  url: string;
}

declare class ZDKHelpCenterCategoryViewModel extends NSObject {
  static alloc(): ZDKHelpCenterCategoryViewModel; // inherited from NSObject

  static new(): ZDKHelpCenterCategoryViewModel; // inherited from NSObject

  readonly name: string;

  sections: NSArray<ZDKHelpCenterSectionViewModel>;

  updateWithSection(
    newSection: ZDKHelpCenterSectionViewModel
  ): ZDKHelpCenterCategoryViewModel;
}

declare class ZDKHelpCenterCategoryViewModelContainer extends NSObject {
  static alloc(): ZDKHelpCenterCategoryViewModelContainer; // inherited from NSObject

  static new(): ZDKHelpCenterCategoryViewModelContainer; // inherited from NSObject

  static parseWithDataError(
    data: NSData
  ): NSArray<ZDKHelpCenterCategoryViewModel>;
}

declare class ZDKHelpCenterDeflection extends NSObject {
  static alloc(): ZDKHelpCenterDeflection; // inherited from NSObject

  static new(): ZDKHelpCenterDeflection; // inherited from NSObject

  categoryId: number;

  labelNames: NSMutableArray<any>;

  locale: string;

  page: number;

  query: string;

  resultsPerPage: number;

  sectionId: number;

  sideLoads: NSMutableArray<any>;
}

declare class ZDKHelpCenterFlatArticle extends NSObject {
  static alloc(): ZDKHelpCenterFlatArticle; // inherited from NSObject

  static new(): ZDKHelpCenterFlatArticle; // inherited from NSObject

  article: ZDKHelpCenterArticle;

  category: ZDKHelpCenterCategory;

  section: ZDKHelpCenterSection;

  getArticleBreadcrumb(): string;
}

declare class ZDKHelpCenterLastSearch extends NSObject {
  static alloc(): ZDKHelpCenterLastSearch; // inherited from NSObject

  static new(): ZDKHelpCenterLastSearch; // inherited from NSObject

  readonly query: string;

  readonly results_count: number;

  constructor(o: { query: string; resultsCount: number });

  initWithQueryResultsCount(query: string, count: number): this;

  toJson(): NSDictionary<any, any>;
}

declare class ZDKHelpCenterOverviewContentModel extends NSObject {
  static alloc(): ZDKHelpCenterOverviewContentModel; // inherited from NSObject

  static defaultContent(): ZDKHelpCenterOverviewContentModel;

  static new(): ZDKHelpCenterOverviewContentModel; // inherited from NSObject

  groupIds: NSArray<number>;

  groupType: ZDKHelpCenterOverviewGroupType;

  hideContactSupport: boolean;

  labels: NSArray<any>;

  navBarConversationsUIType: ZDKNavBarConversationsUIType;
}

declare const enum ZDKHelpCenterOverviewGroupType {
  Default = 0,

  Section = 1,

  Category = 2
}

declare class ZDKHelpCenterParser extends NSObject {
  static alloc(): ZDKHelpCenterParser; // inherited from NSObject

  static createAuthorLookup(
    users: NSArray<any> | any[]
  ): NSDictionary<any, any>;

  static createCategoryLookup(
    categories: NSArray<any> | any[]
  ): NSDictionary<any, any>;

  static createSectionLookup(
    sections: NSArray<any> | any[]
  ): NSDictionary<any, any>;

  static new(): ZDKHelpCenterParser; // inherited from NSObject

  constructor(o: { dictionary: NSDictionary<any, any> });

  initWithDictionary(dict: NSDictionary<any, any>): this;

  parseArticleSearchResults(json: NSDictionary<any, any>): NSArray<any>;

  parseArticles(json: NSDictionary<any, any>): NSArray<any>;

  parseArticlesWithRootKeyWithRootKey(
    json: NSDictionary<any, any>,
    root: string
  ): NSArray<any>;

  parseFlatArticles(json: NSDictionary<any, any>): NSArray<any>;
}

declare class ZDKHelpCenterProvider extends ZDKProvider {
  static alloc(): ZDKHelpCenterProvider; // inherited from NSObject

  static new(): ZDKHelpCenterProvider; // inherited from NSObject

  downVoteArticleWithIdWithCallback(
    articleId: string,
    callback: (p1: NSArray<any>, p2: NSError) => void
  ): void;

  getArticleWithIdWithCallback(
    articleId: string,
    callback: (p1: NSArray<any>, p2: NSError) => void
  ): void;

  getArticlesByLabelsWithCallback(
    labels: NSArray<string> | string[],
    callback: (p1: NSArray<any>, p2: NSError) => void
  ): void;

  getArticlesWithSectionIdLabelsWithCallback(
    sectionId: string,
    labels: NSArray<any> | any[],
    callback: (p1: NSArray<any>, p2: NSError) => void
  ): void;

  getArticlesWithSectionIdWithCallback(
    sectionId: string,
    callback: (p1: NSArray<any>, p2: NSError) => void
  ): void;

  getAttachmentWithArticleIdWithCallback(
    articleId: string,
    callback: (p1: NSArray<any>, p2: NSError) => void
  ): void;

  getCategoriesWithCallback(
    callback: (p1: NSArray<any>, p2: NSError) => void
  ): void;

  getCategoryWithIdWithCallback(
    categoryId: string,
    callback: (p1: NSArray<any>, p2: NSError) => void
  ): void;

  getFlatArticlesWithCallback(
    callback: (p1: NSArray<any>, p2: NSError) => void
  ): void;

  getHelpCenterOverviewWithHelpCenterOverviewModelCallback(
    helpCenterModel: ZDKHelpCenterOverviewContentModel,
    callback: (p1: NSArray<ZDKHelpCenterCategoryViewModel>, p2: NSError) => void
  ): void;

  getSectionWithIdWithCallback(
    sectionId: string,
    callback: (p1: NSArray<any>, p2: NSError) => void
  ): void;

  getSectionsWithCategoryIdWithCallback(
    categoryId: string,
    callback: (p1: NSArray<any>, p2: NSError) => void
  ): void;

  getSuggestedArticlesWithCallback(
    search: ZDKHelpCenterDeflection,
    callback: (p1: NSArray<any>, p2: NSError) => void
  ): void;

  removeVoteWithIdWithCallback(
    voteId: string,
    callback: (p1: any, p2: NSError) => void
  ): void;

  searchArticlesWithCallback(
    search: ZDKHelpCenterSearch,
    callback: (p1: NSArray<any>, p2: NSError) => void
  ): void;

  searchForArticlesUsingQueryAndLabelsWithCallback(
    query: string,
    labels: NSArray<string> | string[],
    callback: (p1: NSArray<any>, p2: NSError) => void
  ): void;

  searchForArticlesUsingQueryWithCallback(
    query: string,
    callback: (p1: NSArray<any>, p2: NSError) => void
  ): void;

  submitRecordArticleViewWithCallback(
    article: ZDKHelpCenterArticle,
    callback: (p1: any, p2: NSError) => void
  ): void;

  upVoteArticleWithIdWithCallback(
    articleId: string,
    callback: (p1: NSArray<any>, p2: NSError) => void
  ): void;
}

declare class ZDKHelpCenterSearch extends NSObject {
  static alloc(): ZDKHelpCenterSearch; // inherited from NSObject

  static new(): ZDKHelpCenterSearch; // inherited from NSObject

  categoryIds: NSArray<number>;

  labelNames: NSMutableArray<any>;

  locale: string;

  page: number;

  query: string;

  resultsPerPage: number;

  sectionIds: NSArray<number>;

  sideLoads: NSMutableArray<any>;
}

declare class ZDKHelpCenterSection extends NSObject {
  static alloc(): ZDKHelpCenterSection; // inherited from NSObject

  static new(): ZDKHelpCenterSection; // inherited from NSObject

  static parseSection(
    sectionJson: NSDictionary<any, any>
  ): ZDKHelpCenterSection;

  static parseSections(json: NSDictionary<any, any>): NSArray<any>;

  category_id: number;

  createdAt: string;

  html_url: string;

  identifier: number;

  locale: string;

  name: string;

  outdated: boolean;

  position: number;

  sectionDescription: string;

  sorting: string;

  sourceLocale: string;

  updatedAt: string;

  url: string;
}

declare class ZDKHelpCenterSectionViewModel extends NSObject {
  static alloc(): ZDKHelpCenterSectionViewModel; // inherited from NSObject

  static new(): ZDKHelpCenterSectionViewModel; // inherited from NSObject

  readonly article_count: number;

  readonly articles: NSArray<ZDKHelpCenterArticleViewModel>;

  readonly category_id: string;

  readonly detailTitle: string;

  readonly id: string;

  readonly name: string;

  sectionByReplacingWithArticles(
    articles:
      | NSArray<ZDKHelpCenterArticleViewModel>
      | ZDKHelpCenterArticleViewModel[]
  ): ZDKHelpCenterSectionViewModel;
}

declare class ZDKHelpCenterSessionCache extends NSObject {
  static alloc(): ZDKHelpCenterSessionCache; // inherited from NSObject

  static cacheLastSearch(lastSearch: ZDKHelpCenterLastSearch): void;

  static getLastSearch(): ZDKHelpCenterLastSearch;

  static new(): ZDKHelpCenterSessionCache; // inherited from NSObject

  static recordArticleViewRequestJson(): NSDictionary<any, any>;

  static unsetUniqueSearchResultClick(): void;
}

declare class ZDKHelpCenterSettings extends NSObject {
  static alloc(): ZDKHelpCenterSettings; // inherited from NSObject

  static new(): ZDKHelpCenterSettings; // inherited from NSObject

  readonly enabled: boolean;

  readonly helpCenterArticleVotingEnabled: boolean;

  readonly locale: string;
}

declare class ZDKHelpCenterSettingsProvider extends NSObject {
  static alloc(): ZDKHelpCenterSettingsProvider; // inherited from NSObject

  static getHelpCenterSettingsWithCallback(
    callback: (p1: ZDKHelpCenterSettings) => void
  ): void;

  static new(): ZDKHelpCenterSettingsProvider; // inherited from NSObject
}

declare class ZDKHelpCenterSimpleArticle extends NSObject {
  static alloc(): ZDKHelpCenterSimpleArticle; // inherited from NSObject

  static new(): ZDKHelpCenterSimpleArticle; // inherited from NSObject

  static parseDeflectionSearchResults(
    json: NSDictionary<any, any>
  ): NSArray<any>;

  static parseSimpleArticle(
    simpleArticleJSON: NSDictionary<any, any>
  ): ZDKHelpCenterSimpleArticle;

  id: string;

  title: string;
}

interface ZDKHelpCenterViewModel extends NSObjectProtocol {
  detailTitle?: string;

  name: string;
}
declare var ZDKHelpCenterViewModel: {
  prototype: ZDKHelpCenterViewModel;
};

declare class ZDKJsonUtil extends NSObject {
  static alloc(): ZDKJsonUtil; // inherited from NSObject

  static arrayWithPropertiesOfObject(
    aClass: typeof NSObject
  ): NSMutableArray<any>;

  static cleanJSONArrayValKey(json: NSDictionary<any, any>, key: string): any;

  static cleanJSONVal(val: any): any;

  static cleanJSONValKey(json: NSDictionary<any, any>, key: string): any;

  static convertArrayOfJsonObjectsToArrayOfType(
    jsonArray: NSArray<any> | any[],
    classToMap: typeof NSObject
  ): NSMutableArray<any>;

  static convertJsonObjectToObjectOfType(
    json: NSDictionary<any, any>,
    classToMap: typeof NSObject
  ): any;

  static convertObjectToDictionaryForClass(
    objectToConvert: any,
    aClass: typeof NSObject
  ): NSDictionary<any, any>;

  static new(): ZDKJsonUtil; // inherited from NSObject
}

declare class ZDKLegacyRequestStorageMigrator extends NSObject {
  static alloc(): ZDKLegacyRequestStorageMigrator; // inherited from NSObject

  static new(): ZDKLegacyRequestStorageMigrator; // inherited from NSObject

  constructor(o: { requestStorage: ZDKRequestStorage });

  initWithRequestStorage(requestStorage: ZDKRequestStorage): this;
}

declare class ZDKLocalization extends NSObject {
  static alloc(): ZDKLocalization; // inherited from NSObject

  static localizedStringWithKey(key: string): string;

  static new(): ZDKLocalization; // inherited from NSObject

  static printAllKeys(): void;

  static registerTableName(tableName: string): void;
}

declare class ZDKMobileProvisionAnalyzer extends NSObject {
  static alloc(): ZDKMobileProvisionAnalyzer; // inherited from NSObject

  static getEnvironment(): string;

  static new(): ZDKMobileProvisionAnalyzer; // inherited from NSObject
}

declare class ZDKNSCodingUtil extends NSObject {
  static alloc(): ZDKNSCodingUtil; // inherited from NSObject

  static decodeWithCoderForInstance(
    aDecoder: NSCoder,
    instance: NSObject
  ): void;

  static encodeWithCoderForInstance(aCoder: NSCoder, instance: NSObject): void;

  static new(): ZDKNSCodingUtil; // inherited from NSObject
}

declare const enum ZDKNavBarConversationsUIType {
  LocalizedLabel = 0,

  Image = 1,

  None = 2
}

declare const enum ZDKNetworkStatus {
  NotReachable = 0,

  ReachableViaWiFi = 1,

  ReachableViaWWAN = 2
}

declare var ZDKParameterValidationErrorDomain: string;

declare class ZDKProvider extends NSObject {
  static alloc(): ZDKProvider; // inherited from NSObject

  static new(): ZDKProvider; // inherited from NSObject
}

declare class ZDKReachability extends NSObject {
  static alloc(): ZDKReachability; // inherited from NSObject

  static new(): ZDKReachability; // inherited from NSObject

  static reachabilityForInternetConnection(): ZDKReachability;

  static reachabilityForLocalWiFi(): ZDKReachability;

  static reachabilityWithAddress(
    hostAddress: interop.Pointer | interop.Reference<sockaddr_in>
  ): ZDKReachability;

  static reachabilityWithHostName(hostName: string): ZDKReachability;

  connectionRequired(): boolean;

  currentReachabilityStatus(): ZDKNetworkStatus;

  startNotifier(): boolean;

  stopNotifier(): void;
}

declare class ZDKRequest extends NSObject {
  static alloc(): ZDKRequest; // inherited from NSObject

  static new(): ZDKRequest; // inherited from NSObject

  collaboratingIds: NSArray<number>;

  commentCount: number;

  commentingAgentsIds: NSArray<number>;

  createdAt: Date;

  firstComment: ZDKComment;

  lastComment: ZDKComment;

  publicUpdatedAt: Date;

  requestDescription: string;

  requestId: string;

  requesterId: number;

  status: string;

  subject: string;

  type: string;

  updateAt: Date;

  constructor(o: { dict: NSDictionary<any, any> });

  initWithDict(dict: NSDictionary<any, any>): this;

  toJson(): NSDictionary<any, any>;
}

declare class ZDKRequestBlips extends NSObject {
  static alloc(): ZDKRequestBlips; // inherited from NSObject

  static new(): ZDKRequestBlips; // inherited from NSObject
}

declare class ZDKRequestForStorage extends NSObject {
  static alloc(): ZDKRequestForStorage; // inherited from NSObject

  static new(): ZDKRequestForStorage; // inherited from NSObject
}

declare class ZDKRequestProvider extends ZDKProvider {
  static alloc(): ZDKRequestProvider; // inherited from NSObject

  static new(): ZDKRequestProvider; // inherited from NSObject

  addCommentForRequestIdAttachmentsWithCallback(
    comment: string,
    requestId: string,
    attachments: NSArray<any> | any[],
    callback: (p1: ZDKComment, p2: NSError) => void
  ): void;

  addCommentForRequestIdWithCallback(
    comment: string,
    requestId: string,
    callback: (p1: ZDKComment, p2: NSError) => void
  ): void;

  createRequestWithCallback(
    request: ZDKCreateRequest,
    callback: (p1: any, p2: NSError) => void
  ): void;

  getAllRequestsWithCallback(
    callback: (p1: ZDKRequestsWithCommentingAgents, p2: NSError) => void
  ): void;

  getCommentsWithRequestIdSinceDateOnlyAgentWithCallback(
    requestId: string,
    sinceDate: Date,
    onlyAgent: boolean,
    callback: (p1: NSArray<ZDKCommentWithUser>, p2: NSError) => void
  ): void;

  getCommentsWithRequestIdWithCallback(
    requestId: string,
    callback: (p1: NSArray<ZDKCommentWithUser>, p2: NSError) => void
  ): void;

  getRequestByIdWithCallback(
    requestId: string,
    callback: (p1: ZDKRequest, p2: NSError) => void
  ): void;

  getRequestsByStatusWithCallback(
    status: string,
    callback: (p1: ZDKRequestsWithCommentingAgents, p2: NSError) => void
  ): void;

  getTicketFormWithIdsCallback(
    ticketFormIds: NSArray<number> | number[],
    callback: (p1: NSArray<ZDKTicketForm>, p2: NSError) => void
  ): void;

  getUpdatesForDeviceWithCallback(
    callback: (p1: ZDKRequestUpdates) => void
  ): void;

  markRequestAsReadWithCommentCount(
    requestId: string,
    commentCount: number
  ): void;

  markRequestAsUnread(requestId: string): void;

  updateRequestStorageWithRequests(
    requests: NSArray<ZDKRequest> | ZDKRequest[]
  ): void;
}

declare class ZDKRequestStorage extends NSObject {
  static alloc(): ZDKRequestStorage; // inherited from NSObject

  static new(): ZDKRequestStorage; // inherited from NSObject

  constructor(o: { zendesk: ZDKZendesk });

  getRequestForId(requestId: string): ZDKRequestForStorage;

  initWithZendesk(zendesk: ZDKZendesk): this;
}

declare class ZDKRequestUpdates extends NSObject {
  static alloc(): ZDKRequestUpdates; // inherited from NSObject

  static new(): ZDKRequestUpdates; // inherited from NSObject

  readonly requestUpdates: NSDictionary<string, number>;

  readonly totalUpdates: number;

  hasUpdatedRequests(): boolean;

  isRequestUnread(requestId: string): boolean;
}

declare class ZDKRequestWithAttachmentsUtil extends NSObject {
  static MIMETypeForData(data: NSData): string;

  static alloc(): ZDKRequestWithAttachmentsUtil; // inherited from NSObject

  static new(): ZDKRequestWithAttachmentsUtil; // inherited from NSObject

  addCommentForRequestIdWithCallback(
    comment: ZDKComment,
    requestId: string,
    callback: (p1: ZDKComment, p2: NSError) => void
  ): void;

  createRequestWithTagsAndCallback(
    request: ZDKRequest,
    tags: NSArray<any> | any[],
    callback: (p1: any, p2: NSError) => void
  ): void;

  deleteFilename(filename: string): void;

  uploadAttachmentWithFilenameAndContentTypeCallback(
    data: NSData,
    filename: string,
    contentType: string,
    callback: (p1: ZDKUploadResponse, p2: NSError) => void
  ): void;

  uploadAttachmentWithFilenameCallback(
    data: NSData,
    filename: string,
    callback: (p1: ZDKUploadResponse, p2: NSError) => void
  ): void;
}

declare class ZDKRequestsResponse extends NSObject {
  static alloc(): ZDKRequestsResponse; // inherited from NSObject

  static new(): ZDKRequestsResponse; // inherited from NSObject

  static parseRequestListAgentsWithDictionary(
    dictionary: NSDictionary<any, any>
  ): NSArray<ZDKSupportUser>;

  static parseRequestListWithDictionary(
    dictionary: NSDictionary<any, any>
  ): NSArray<ZDKRequest>;
}

declare class ZDKRequestsWithCommentingAgents extends NSObject {
  static alloc(): ZDKRequestsWithCommentingAgents; // inherited from NSObject

  static new(): ZDKRequestsWithCommentingAgents; // inherited from NSObject

  commentingAgents: NSArray<ZDKSupportUser>;

  requests: NSArray<ZDKRequest>;

  constructor(o: {
    requests: NSArray<ZDKRequest> | ZDKRequest[];
    andCommentingAgents: NSArray<ZDKSupportUser> | ZDKSupportUser[];
  });

  initWithRequestsAndCommentingAgents(
    requests: NSArray<ZDKRequest> | ZDKRequest[],
    commentingAgents: NSArray<ZDKSupportUser> | ZDKSupportUser[]
  ): this;
}

declare class ZDKStringUtil extends NSObject {
  static alloc(): ZDKStringUtil; // inherited from NSObject

  static csvStringFromArray(array: NSArray<any> | any[]): string;

  static new(): ZDKStringUtil; // inherited from NSObject
}

declare class ZDKSupport extends NSObject {
  static alloc(): ZDKSupport; // inherited from NSObject

  static initializeWithZendesk(zendesk: ZDKZendesk): void;

  static new(): ZDKSupport; // inherited from NSObject

  helpCenterLocaleOverride: string;

  static readonly instance: ZDKSupport;

  refreshRequestWithRequestId(requestId: string): boolean;
}

declare class ZDKSupportSettings extends NSObject {
  static alloc(): ZDKSupportSettings; // inherited from NSObject

  static new(): ZDKSupportSettings; // inherited from NSObject

  readonly attachmentSettings: ZDKAttachmentSettings;

  readonly contactUsSettings: ZDKContactUsSettings;

  readonly conversationSettings: ZDKConversationsSettings;

  readonly neverRequestEmail: boolean;

  readonly referrerUrl: string;

  readonly showClosedRequests: boolean;

  readonly showReferrerLogo: boolean;

  readonly systemMessage: string;

  readonly ticketFormsSettings: ZDKTicketFormsSettings;
}

declare class ZDKSupportSettingsProvider extends NSObject {
  static alloc(): ZDKSupportSettingsProvider; // inherited from NSObject

  static getSupportSettingsWithCallback(
    callback: (p1: ZDKSupportSettings) => void
  ): void;

  static new(): ZDKSupportSettingsProvider; // inherited from NSObject
}

declare class ZDKSupportUser extends NSObject {
  static alloc(): ZDKSupportUser; // inherited from NSObject

  static new(): ZDKSupportUser; // inherited from NSObject

  avatarURL: string;

  isAgent: boolean;

  name: string;

  tags: NSArray<any>;

  userFields: NSDictionary<any, any>;

  userId: number;

  constructor(o: { dictionary: NSDictionary<any, any> });

  initWithDictionary(dictionary: NSDictionary<any, any>): this;

  toJson(): NSDictionary<any, any>;
}

declare class ZDKTicketField extends NSObject
  implements ZDKDictionaryCreatable {
  static alloc(): ZDKTicketField; // inherited from NSObject

  static new(): ZDKTicketField; // inherited from NSObject

  fieldDescription: string;

  fieldId: number;

  options: NSArray<ZDKTicketFieldOption>;

  required: boolean;

  systemOptions: NSArray<ZDKTicketFieldSystemOption>;

  title: string;

  titleInPortal: string;

  type: ZDKTicketFieldType;

  validationRegex: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { dictionary: NSDictionary<any, any> }); // inherited from ZDKDictionaryCreatable

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithDictionary(dictionary: NSDictionary<any, any>): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(
    aSelector: string,
    object1: any,
    object2: any
  ): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare class ZDKTicketFieldOption extends NSObject {
  static alloc(): ZDKTicketFieldOption; // inherited from NSObject

  static new(): ZDKTicketFieldOption; // inherited from NSObject

  fieldOptionId: number;

  isDefaultValue: boolean;

  name: string;

  value: string;

  constructor(o: { dictionary: NSDictionary<any, any> });

  initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class ZDKTicketFieldSystemOption extends NSObject {
  static alloc(): ZDKTicketFieldSystemOption; // inherited from NSObject

  static new(): ZDKTicketFieldSystemOption; // inherited from NSObject

  name: string;

  value: string;

  constructor(o: { dictionary: NSDictionary<any, any> });

  initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare const enum ZDKTicketFieldType {
  Subject = 0,

  Description = 1,

  Regex = 2,

  TextArea = 3,

  Text = 4,

  Checkbox = 5,

  ComboBox = 6,

  Integer = 7,

  Decimal = 8,

  Date = 9,

  CreditCard = 10,

  Priority = 11,

  Status = 12,

  TicketType = 13,

  MultiSelect = 14,

  Unknown = -1
}

declare class ZDKTicketForm extends NSObject implements ZDKDictionaryCreatable {
  static alloc(): ZDKTicketForm; // inherited from NSObject

  static new(): ZDKTicketForm; // inherited from NSObject

  displayName: string;

  formId: number;

  name: string;

  ticketFields: NSArray<ZDKTicketField>;

  ticketFieldsIds: NSArray<number>;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { dictionary: NSDictionary<any, any> }); // inherited from ZDKDictionaryCreatable

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithDictionary(dictionary: NSDictionary<any, any>): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(
    aSelector: string,
    object1: any,
    object2: any
  ): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare class ZDKTicketFormsSettings extends NSObject {
  static alloc(): ZDKTicketFormsSettings; // inherited from NSObject

  static new(): ZDKTicketFormsSettings; // inherited from NSObject

  readonly available: boolean;
}

declare class ZDKTicketFormsSettingsProvider extends NSObject {
  static alloc(): ZDKTicketFormsSettingsProvider; // inherited from NSObject

  static getTicketFormsSettingsWithCallback(
    callback: (p1: ZDKTicketFormsSettings) => void
  ): void;

  static new(): ZDKTicketFormsSettingsProvider; // inherited from NSObject
}

declare class ZDKUploadProvider extends ZDKProvider {
  static alloc(): ZDKUploadProvider; // inherited from NSObject

  static new(): ZDKUploadProvider; // inherited from NSObject

  deleteUploadAndCallback(
    uploadToken: string,
    callback: (p1: string, p2: NSError) => void
  ): void;

  uploadAttachmentWithFilenameAndContentTypeCallback(
    attachment: NSData,
    filename: string,
    contentType: string,
    callback: (p1: ZDKUploadResponse, p2: NSError) => void
  ): void;
}

declare class ZDKUploadResponse extends NSObject implements NSCopying {
  static alloc(): ZDKUploadResponse; // inherited from NSObject

  static new(): ZDKUploadResponse; // inherited from NSObject

  attachment: ZDKAttachment;

  uploadToken: string;

  constructor(o: { dict: NSDictionary<any, any> });

  copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

  initWithDict(dict: NSDictionary<any, any>): this;
}

declare const enum ZDKValidation {
  NilError = 0,

  EmptyStringError = 1
}

declare class ZDKValidator extends NSObject {
  static alloc(): ZDKValidator; // inherited from NSObject

  static new(): ZDKValidator; // inherited from NSObject

  static validateValues(parameterDictionarys: NSDictionary<any, any>): NSError;
}

declare var ZDK_AUTHENTICATION_ANONYMOUS: string;

declare var ZDK_AUTHENTICATION_JWT: string;

declare var ZDK_Article_Down_Vote_Button_Index: number;

declare var ZDK_Article_Down_Vote_Number: number;

declare var ZDK_Article_Even_Vote_Number: number;

declare var ZDK_Article_Up_Vote_Button_Index: number;

declare var ZDK_Article_Up_Vote_Number: number;

declare var ZDK_Header_Suffix_Format: string;

declare var ZDSDKUserDefaultsKey: string;

declare var ZD_DefaultAnimationTime: number;

declare var ZD_HC_ArticleByIdStarting: string;

declare var ZD_HC_ArticleByIdSuccess: string;

declare var ZD_HC_ArticlesStarting: string;

declare var ZD_HC_ArticlesUpdated: string;

declare var ZD_HC_AttachmentsErrored: string;

declare var ZD_HC_AttachmentsStarting: string;

declare var ZD_HC_AttachmentsUpdated: string;

declare var ZD_HC_CategoriesStarting: string;

declare var ZD_HC_CategoriesUpdated: string;

declare var ZD_HC_CategoryByIdStarting: string;

declare var ZD_HC_CategoryByIdSuccess: string;

declare var ZD_HC_CategorySelected: string;

declare var ZD_HC_DeflectionSearchError: string;

declare var ZD_HC_DeflectionSearchStarting: string;

declare var ZD_HC_DeflectionSearchSuccess: string;

declare var ZD_HC_DownvoteError: string;

declare var ZD_HC_DownvoteStarting: string;

declare var ZD_HC_DownvoteSuccess: string;

declare var ZD_HC_RequestError: string;

declare var ZD_HC_SearchStarting: string;

declare var ZD_HC_SearchSuccess: string;

declare var ZD_HC_SectionArticle: string;

declare var ZD_HC_SectionByIdStarting: string;

declare var ZD_HC_SectionByIdSuccess: string;

declare var ZD_HC_SectionSelected: string;

declare var ZD_HC_SectionsStarting: string;

declare var ZD_HC_SectionsUpdated: string;

declare var ZD_HC_UpvoteError: string;

declare var ZD_HC_UpvoteStarting: string;

declare var ZD_HC_UpvoteSuccess: string;

declare var ZD_HC_VoteDeleteError: string;

declare var ZD_HC_VoteDeleteStarting: string;

declare var ZD_HC_VoteDeleteSuccess: string;

declare var ZD_ResignFirstResponder: string;

declare var ZendeskSDKVersionString: string;

declare var iOS7AppStoreURLFormat: string;

declare var iOSAppStoreURLFormat: string;
