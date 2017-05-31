
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

declare const enum ZDKAPIErrorCode {

	Unreachable = 0,

	Connection = 1,

	Auth = 2,

	Request = 3,

	Subdomain = 4,

	ClientId = 5,

	UserId = 6,

	DelegateConfig = 7
}

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

declare class ZDKAccount extends NSObject {

	static alloc(): ZDKAccount; // inherited from NSObject

	static new(): ZDKAccount; // inherited from NSObject

	applicationId: string;

	oAuthClientId: string;

	oauthToken: string;

	state: ZDKAccountState;

	zendeskUrl: string;

	constructor(o: { url: string; applicationId: string; clientId: string; });

	initWithUrlApplicationIdClientId(zendeskUrl: string, applicationId: string, clientId: string): this;
}

declare class ZDKAccountSettings extends ZDKCoding {

	static alloc(): ZDKAccountSettings; // inherited from NSObject

	static new(): ZDKAccountSettings; // inherited from NSObject

	readonly attachmentSettings: ZDKAttachmentSettings;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare const enum ZDKAccountState {

	Unloaded = 0,

	Valid = 1,

	Invalidated = 2
}

declare class ZDKAnonymousIdentity extends ZDKCoding implements ZDKIdentity {

	static alloc(): ZDKAnonymousIdentity; // inherited from NSObject

	static new(): ZDKAnonymousIdentity; // inherited from NSObject

	email: string;

	externalId: string;

	name: string;

	toJson(): NSDictionary<any, any>;
}

declare class ZDKAppSettings extends ZDKCoding {

	static alloc(): ZDKAppSettings; // inherited from NSObject

	static new(): ZDKAppSettings; // inherited from NSObject

	readonly authentication: string;

	readonly contactUsSettings: ZDKContactUsSettings;

	readonly conversationsSettings: ZDKConversationsSettings;

	readonly helpCenterSettings: ZDKHelpCenterSettings;

	readonly rateMyAappSettings: ZDKRateMyAppSettings;

	readonly ticketFormsSettings: ZDKTicketFormsSettings;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class ZDKAttachment extends NSObject {

	static alloc(): ZDKAttachment; // inherited from NSObject

	static new(): ZDKAttachment; // inherited from NSObject

	attachmentId: number;

	contentType: string;

	contentURLString: string;

	filename: string;

	size: number;

	thumbnails: NSArray<any>;

	constructor(o: { dict: NSDictionary<any, any>; });

	initWithDict(dict: NSDictionary<any, any>): this;
}

declare class ZDKAttachmentCache extends NSObject {

	static alloc(): ZDKAttachmentCache; // inherited from NSObject

	static cacheImageWithFilename(image: UIImage, filename: string): void;

	static clearCache(): void;

	static imageWithFilename(filename: string): UIImage;

	static new(): ZDKAttachmentCache; // inherited from NSObject
}

declare class ZDKAttachmentSettings extends ZDKCoding {

	static alloc(): ZDKAttachmentSettings; // inherited from NSObject

	static new(): ZDKAttachmentSettings; // inherited from NSObject

	readonly enabled: boolean;

	readonly maxAttachmentSize: number;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class ZDKAuthenticationSpace extends NSObject {

	static alloc(): ZDKAuthenticationSpace; // inherited from NSObject

	static defaultSpace(): ZDKAuthenticationSpace;

	static new(): ZDKAuthenticationSpace; // inherited from NSObject

	readonly account: ZDKAccount;

	identityStorage: ZDKIdentityStorage;

	readonly userIdentity: ZDKIdentity;

	constructor(o: { account: ZDKAccount; userIdentity: ZDKIdentity; });

	UUID(): string;

	initWithAccountUserIdentity(account: ZDKAccount, userIdentity: ZDKIdentity): this;
}

declare const enum ZDKAuthenticationType {

	Unknown = 0,

	JWT = 1,

	Anonymous = 2
}

declare class ZDKAuthenticationURLProtocol extends NSURLProtocol {

	static alloc(): ZDKAuthenticationURLProtocol; // inherited from NSObject

	static new(): ZDKAuthenticationURLProtocol; // inherited from NSObject
}

declare class ZDKAvatarProvider extends ZDKProvider {

	static alloc(): ZDKAvatarProvider; // inherited from NSObject

	static new(): ZDKAvatarProvider; // inherited from NSObject

	getAvatarForUrlWithCallback(avatarUrl: string, callback: (p1: UIImage, p2: NSError) => void): void;
}

declare class ZDKBundleUtils extends NSObject {

	static alloc(): ZDKBundleUtils; // inherited from NSObject

	static attachmentImage(): UIImage;

	static conversationsImage(): UIImage;

	static createRequestImage(): UIImage;

	static deviceModelIdentifier(): NSDictionary<any, any>;

	static frameworkResourceBundle(): NSBundle;

	static frameworkStringsBundle(): NSBundle;

	static helpCenterCss(): string;

	static imageNamedOfType(name: string, extension: string): UIImage;

	static new(): ZDKBundleUtils; // inherited from NSObject

	static pathForFrameworkResourceOfType(name: string, extension: string): string;

	static stringsTableName(): string;

	static userDefinedHelpCenterCss(): string;
}

declare class ZDKCoding extends NSObject implements NSCoding {

	static alloc(): ZDKCoding; // inherited from NSObject

	static new(): ZDKCoding; // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class ZDKComment extends NSObject {

	static alloc(): ZDKComment; // inherited from NSObject

	static new(): ZDKComment; // inherited from NSObject

	attachments: NSArray<any>;

	authorId: number;

	body: string;

	readonly commentId: number;

	createdAt: Date;

	requestId: string;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class ZDKCommentWithUser extends NSObject {

	static alloc(): ZDKCommentWithUser; // inherited from NSObject

	static buildCommentWithUserWithUsers(comment: ZDKComment, users: NSArray<any>): ZDKCommentWithUser;

	static new(): ZDKCommentWithUser; // inherited from NSObject

	readonly comment: ZDKComment;

	readonly user: ZDKUser;
}

declare class ZDKCommentsResponse extends NSObject {

	static alloc(): ZDKCommentsResponse; // inherited from NSObject

	static new(): ZDKCommentsResponse; // inherited from NSObject

	static parseData(dictionary: NSDictionary<any, any>): NSArray<any>;

	readonly commmentsWithUsers: NSArray<any>;
}

declare class ZDKConfig extends NSObject {

	static alloc(): ZDKConfig; // inherited from NSObject

	static instance(): ZDKConfig;

	static new(): ZDKConfig; // inherited from NSObject

	readonly account: ZDKAccount;

	readonly authenticationType: ZDKAuthenticationType;

	coppaEnabled: boolean;

	customTicketFields: NSArray<any>;

	reloadInterval: number;

	ticketFormId: number;

	userIdentity: ZDKIdentity;

	userLocale: string;

	disablePushCallback(identifier: string, callback: (p1: number, p2: NSError) => void): void;

	enablePushWithDeviceIDCallback(identifier: string, callback: (p1: ZDKPushRegistrationResponse, p2: NSError) => void): void;

	enablePushWithUAChannelIDCallback(identifier: string, callback: (p1: ZDKPushRegistrationResponse, p2: NSError) => void): void;

	initializeWithAppIdZendeskUrlClientId(applicationId: string, zendeskUrl: string, oAuthClientId: string): void;

	reload(): void;
}

declare class ZDKContactUsSettings extends ZDKCoding {

	static alloc(): ZDKContactUsSettings; // inherited from NSObject

	static new(): ZDKContactUsSettings; // inherited from NSObject

	readonly tags: NSArray<any>;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class ZDKConversationsSettings extends ZDKCoding {

	static alloc(): ZDKConversationsSettings; // inherited from NSObject

	static new(): ZDKConversationsSettings; // inherited from NSObject

	readonly enabled: boolean;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class ZDKCreateRequest extends NSObject {

	static alloc(): ZDKCreateRequest; // inherited from NSObject

	static new(): ZDKCreateRequest; // inherited from NSObject

	attachments: NSArray<any>;

	customTicketFields: NSArray<any>;

	requestDescription: string;

	subject: string;

	tags: NSArray<any>;

	ticketFormId: number;

	constructor(o: { dict: NSDictionary<any, any>; });

	initWithDict(dict: NSDictionary<any, any>): this;
}

declare class ZDKCustomField extends NSObject {

	static alloc(): ZDKCustomField; // inherited from NSObject

	static new(): ZDKCustomField; // inherited from NSObject

	readonly fieldId: number;

	readonly value: string;

	constructor(o: { fieldId: number; andValue: string; });

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

	initWithDictionary?(dictionary: NSDictionary<any, any>): ZDKDictionaryCreatable;
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

	constructor(o: { response: NSHTTPURLResponse; andData: NSData; });

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

	static parseArticle(articleJson: NSDictionary<any, any>): ZDKHelpCenterArticle;

	articleParents: string;

	article_details: string;

	author_id: string;

	author_name: string;

	body: string;

	created_at: Date;

	labelNames: NSArray<any>;

	locale: string;

	outdated: boolean;

	position: number;

	section_id: string;

	sid: string;

	title: string;

	voteCount: number;

	voteSum: number;

	getDownvoteCount(): number;

	getUpvoteCount(): number;
}

declare class ZDKHelpCenterArticleViewModel extends NSObject implements ZDKHelpCenterViewModel {

	static alloc(): ZDKHelpCenterArticleViewModel; // inherited from NSObject

	static new(): ZDKHelpCenterArticleViewModel; // inherited from NSObject

	static parseArticle(json: NSDictionary<any, any>): ZDKHelpCenterArticleViewModel;

	static parseArticles(json: NSDictionary<any, any>): NSArray<ZDKHelpCenterArticleViewModel>;

	articleId: string;

	sectionId: string;

	title: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly detailTitle: string; // inherited from ZDKHelpCenterViewModel

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ZDKHelpCenterArticleVote extends NSObject {

	static alloc(): ZDKHelpCenterArticleVote; // inherited from NSObject

	static new(): ZDKHelpCenterArticleVote; // inherited from NSObject

	static parseArticleVote(articleVoteJson: NSDictionary<any, any>): ZDKHelpCenterArticleVote;

	static parseArticleVotes(json: NSDictionary<any, any>): NSArray<any>;

	createdAt: Date;

	identifier: string;

	itemId: string;

	itemType: string;

	updatedAt: Date;

	url: string;

	userId: string;

	value: string;
}

declare class ZDKHelpCenterAttachment extends NSObject {

	static alloc(): ZDKHelpCenterAttachment; // inherited from NSObject

	static new(): ZDKHelpCenterAttachment; // inherited from NSObject

	static parseAttachment(attachmentJson: NSDictionary<any, any>): ZDKHelpCenterAttachment;

	static parseAttachments(json: NSDictionary<any, any>): NSArray<any>;

	article_id: string;

	content_type: string;

	content_url: string;

	file_name: string;

	isInline: boolean;

	sid: string;

	size: number;

	url: string;

	humanReadableFileSize(): string;
}

declare class ZDKHelpCenterCategory extends NSObject {

	static alloc(): ZDKHelpCenterCategory; // inherited from NSObject

	static new(): ZDKHelpCenterCategory; // inherited from NSObject

	static parseCategories(json: NSDictionary<any, any>): NSArray<any>;

	static parseCategory(categoryJson: NSDictionary<any, any>): ZDKHelpCenterCategory;

	categoryDescription: string;

	createdAt: string;

	html_url: string;

	locale: string;

	name: string;

	outdated: boolean;

	position: number;

	sid: string;

	sourceLocale: string;

	updatedAt: string;

	url: string;
}

declare class ZDKHelpCenterCategoryViewModel extends NSObject implements ZDKHelpCenterViewModel {

	static alloc(): ZDKHelpCenterCategoryViewModel; // inherited from NSObject

	static new(): ZDKHelpCenterCategoryViewModel; // inherited from NSObject

	static parseCategories(json: NSDictionary<any, any>): NSArray<ZDKHelpCenterCategoryViewModel>;

	static parseCategory(json: NSDictionary<any, any>): ZDKHelpCenterCategoryViewModel;

	categoryId: string;

	name: string;

	sections: NSArray<ZDKHelpCenterSectionViewModel>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly detailTitle: string; // inherited from ZDKHelpCenterViewModel

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from ZDKHelpCenterViewModel

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateWithSection(section: ZDKHelpCenterSectionViewModel): void;
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

	constructor(o: { query: string; resultsCount: number; });

	initWithQueryResultsCount(query: string, count: number): this;

	toJson(): NSDictionary<any, any>;
}

declare class ZDKHelpCenterParser extends NSObject {

	static alloc(): ZDKHelpCenterParser; // inherited from NSObject

	static createAuthorLookup(users: NSArray<any>): NSDictionary<any, any>;

	static createCategoryLookup(categories: NSArray<any>): NSDictionary<any, any>;

	static createSectionLookup(sections: NSArray<any>): NSDictionary<any, any>;

	static new(): ZDKHelpCenterParser; // inherited from NSObject

	static parseArticlesIntoSection(json: NSDictionary<any, any>): NSArray<any>;

	static parseHelpCenterOverview(json: NSDictionary<any, any>): NSArray<ZDKHelpCenterCategoryViewModel>;

	readonly categoryLookup: NSDictionary<any, any>;

	readonly sectionLookup: NSDictionary<any, any>;

	readonly userLookup: NSDictionary<any, any>;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dict: NSDictionary<any, any>): this;

	parseArticleSearchResults(json: NSDictionary<any, any>): NSArray<any>;

	parseArticles(json: NSDictionary<any, any>): NSArray<any>;

	parseArticlesWithRootKeyWithRootKey(json: NSDictionary<any, any>, root: string): NSArray<any>;

	parseFlatArticles(json: NSDictionary<any, any>): NSArray<any>;
}

declare class ZDKHelpCenterProvider extends ZDKProvider {

	static alloc(): ZDKHelpCenterProvider; // inherited from NSObject

	static new(): ZDKHelpCenterProvider; // inherited from NSObject

	readonly locale: string;

	constructor(o: { locale: string; });

	deleteVoteWithIdWithCallback(voteId: string, callback: (p1: any, p2: NSError) => void): void;

	downvoteArticleWithIdWithCallback(articleId: string, callback: (p1: NSArray<any>, p2: NSError) => void): void;

	getArticleByIdWithCallback(articleId: string, callback: (p1: NSArray<any>, p2: NSError) => void): void;

	getArticlesByLabelsWithCallback(labels: NSArray<string>, callback: (p1: NSArray<any>, p2: NSError) => void): void;

	getArticlesForSectionIdWithCallback(sectionId: string, callback: (p1: NSArray<any>, p2: NSError) => void): void;

	getAttachmentForArticleIdWithCallback(articleId: string, callback: (p1: NSArray<any>, p2: NSError) => void): void;

	getCategoriesWithCallback(callback: (p1: NSArray<any>, p2: NSError) => void): void;

	getCategoryByIdWithCallback(categoryId: string, callback: (p1: NSArray<any>, p2: NSError) => void): void;

	getFlatArticlesWithCallback(callback: (p1: NSArray<any>, p2: NSError) => void): void;

	getHelpCenterOverviewWithHelpCenterOverviewModelCallback(helpCenterModel: ZDKHelpCenterOverviewContentModel, callback: (p1: NSArray<ZDKHelpCenterCategoryViewModel>, p2: NSError) => void): void;

	getSectionByIdWithCallback(sectionId: string, callback: (p1: NSArray<any>, p2: NSError) => void): void;

	getSectionWithArticlesForSectionIdLabelsCallback(sectionId: string, labels: NSArray<string>, callback: (p1: NSArray<any>, p2: NSError) => void): void;

	getSectionsForCategoryIdWithCallback(categoryId: string, callback: (p1: NSArray<any>, p2: NSError) => void): void;

	getSuggestedArticlesWithCallback(search: ZDKHelpCenterDeflection, callback: (p1: NSArray<any>, p2: NSError) => void): void;

	initWithLocale(locale: string): this;

	searchArticlesWithCallback(search: ZDKHelpCenterSearch, callback: (p1: NSArray<any>, p2: NSError) => void): void;

	searchForArticlesUsingQueryAndLabelsWithCallback(query: string, labels: NSArray<string>, callback: (p1: NSArray<any>, p2: NSError) => void): void;

	searchForArticlesUsingQueryWithCallback(query: string, callback: (p1: NSArray<any>, p2: NSError) => void): void;

	submitRecordArticleViewWithCallback(articleId: string, callback: (p1: any, p2: NSError) => void): void;

	upvoteArticleWithIdWithCallback(articleId: string, callback: (p1: NSArray<any>, p2: NSError) => void): void;
}

declare class ZDKHelpCenterSearch extends NSObject {

	static alloc(): ZDKHelpCenterSearch; // inherited from NSObject

	static new(): ZDKHelpCenterSearch; // inherited from NSObject

	categoryIds: NSArray<string>;

	labelNames: NSMutableArray<any>;

	locale: string;

	page: number;

	query: string;

	resultsPerPage: number;

	sectionIds: NSArray<string>;

	sideLoads: NSMutableArray<any>;
}

declare class ZDKHelpCenterSection extends NSObject {

	static alloc(): ZDKHelpCenterSection; // inherited from NSObject

	static new(): ZDKHelpCenterSection; // inherited from NSObject

	static parseSection(sectionJson: NSDictionary<any, any>): ZDKHelpCenterSection;

	static parseSections(json: NSDictionary<any, any>): NSArray<any>;

	category_id: string;

	createdAt: string;

	html_url: string;

	locale: string;

	name: string;

	outdated: boolean;

	position: number;

	sectionDescription: string;

	sid: string;

	sorting: string;

	sourceLocale: string;

	updatedAt: string;

	url: string;
}

declare class ZDKHelpCenterSectionViewModel extends NSObject implements ZDKHelpCenterViewModel {

	static alloc(): ZDKHelpCenterSectionViewModel; // inherited from NSObject

	static new(): ZDKHelpCenterSectionViewModel; // inherited from NSObject

	static parseSection(json: NSDictionary<any, any>): ZDKHelpCenterSectionViewModel;

	static parseSections(json: NSDictionary<any, any>): NSArray<ZDKHelpCenterSectionViewModel>;

	articles: NSArray<ZDKHelpCenterArticleViewModel>;

	categoryId: string;

	name: string;

	sectionId: string;

	totalNumberOfArticles: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly detailTitle: string; // inherited from ZDKHelpCenterViewModel

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from ZDKHelpCenterViewModel

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateWithArticles(articles: NSArray<ZDKHelpCenterArticleViewModel>): void;
}

declare class ZDKHelpCenterSessionCache extends NSObject {

	static alloc(): ZDKHelpCenterSessionCache; // inherited from NSObject

	static cacheLastSearch(lastSearch: ZDKHelpCenterLastSearch): void;

	static getLastSearch(): ZDKHelpCenterLastSearch;

	static new(): ZDKHelpCenterSessionCache; // inherited from NSObject

	static recordArticleViewRequestJson(): NSDictionary<any, any>;

	static unsetUniqueSearchResultClick(): void;
}

declare class ZDKHelpCenterSettings extends ZDKCoding {

	static alloc(): ZDKHelpCenterSettings; // inherited from NSObject

	static new(): ZDKHelpCenterSettings; // inherited from NSObject

	readonly enabled: boolean;

	readonly locale: string;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class ZDKHelpCenterSimpleArticle extends NSObject {

	static alloc(): ZDKHelpCenterSimpleArticle; // inherited from NSObject

	static new(): ZDKHelpCenterSimpleArticle; // inherited from NSObject

	static parseDeflectionSearchResults(json: NSDictionary<any, any>): NSArray<any>;

	static parseSimpleArticle(simpleArticleJSON: NSDictionary<any, any>): ZDKHelpCenterSimpleArticle;

	id: string;

	title: string;
}

interface ZDKHelpCenterViewModel extends NSObjectProtocol {

	detailTitle?: string;

	title: string;
}
declare var ZDKHelpCenterViewModel: {

	prototype: ZDKHelpCenterViewModel;
};

interface ZDKIdentity {

	toJson(): NSDictionary<any, any>;
}
declare var ZDKIdentity: {

	prototype: ZDKIdentity;
};

declare class ZDKIdentityStorage extends NSObject {

	static alloc(): ZDKIdentityStorage; // inherited from NSObject

	static new(): ZDKIdentityStorage; // inherited from NSObject

	deleteStoredData(): void;

	getUUID(): string;

	storeIdentity(identity: ZDKIdentity): void;

	storeOAuthToken(oAuthToken: string): void;

	storedIdentity(): ZDKIdentity;

	storedOAuthToken(): string;
}

declare class ZDKJsonUtil extends NSObject {

	static alloc(): ZDKJsonUtil; // inherited from NSObject

	static arrayWithPropertiesOfObject(aClass: typeof NSObject): NSMutableArray<any>;

	static cleanJSONVal(val: any): any;

	static cleanJSONValKey(json: NSDictionary<any, any>, key: string): any;

	static convertArrayOfJsonObjectsToArrayOfType(jsonArray: NSArray<any>, classToMap: typeof NSObject): NSMutableArray<any>;

	static convertJsonObjectToObjectOfType(json: NSDictionary<any, any>, classToMap: typeof NSObject): any;

	static convertObjectToDictionaryForClass(objectToConvert: any, aClass: typeof NSObject): NSDictionary<any, any>;

	static new(): ZDKJsonUtil; // inherited from NSObject
}

declare class ZDKJwtIdentity extends ZDKCoding implements ZDKIdentity {

	static alloc(): ZDKJwtIdentity; // inherited from NSObject

	static new(): ZDKJwtIdentity; // inherited from NSObject

	constructor(o: { jwtUserIdentifier: string; });

	hasIdentifer(): boolean;

	initWithJwtUserIdentifier(jwtUserIdentifier: string): this;

	toJson(): NSDictionary<any, any>;
}

declare class ZDKKeychainWrapper extends NSObject {

	static alloc(): ZDKKeychainWrapper; // inherited from NSObject

	static new(): ZDKKeychainWrapper; // inherited from NSObject

	genericPasswordQuery: NSMutableDictionary<any, any>;

	keychainItemData: NSMutableDictionary<any, any>;

	constructor(o: { identifier: string; accessGroup: string; });

	initWithIdentifierAccessGroup(identifier: string, accessGroup: string): this;

	objectForKey(key: any): any;

	resetKeychainItem(): void;

	setObjectForKey(inObject: any, key: any): void;
}

declare class ZDKLocalization extends NSObject {

	static alloc(): ZDKLocalization; // inherited from NSObject

	static localizedStringWithKey(key: string): string;

	static new(): ZDKLocalization; // inherited from NSObject

	static printAllKeys(): void;

	static registerTableName(tableName: string): void;
}

declare const enum ZDKLogLevel {

	Error = 0,

	Warn = 1,

	Info = 2,

	Debug = 3,

	Verbose = 4
}

declare class ZDKLogger extends NSObject {

	static alloc(): ZDKLogger; // inherited from NSObject

	static debug(logMessage: string): void;

	static enable(enabled: boolean): void;

	static error(logMessage: string): void;

	static info(logMessage: string): void;

	static logLevel(): ZDKLogLevel;

	static new(): ZDKLogger; // inherited from NSObject

	static setLogLevel(level: ZDKLogLevel): void;

	static verbose(logMessage: string): void;

	static warn(logMessage: string): void;
}

declare class ZDKMobileProvisionAnalyzer extends NSObject {

	static alloc(): ZDKMobileProvisionAnalyzer; // inherited from NSObject

	static getEnvironment(): string;

	static new(): ZDKMobileProvisionAnalyzer; // inherited from NSObject
}

declare class ZDKNSCodingUtil extends NSObject {

	static alloc(): ZDKNSCodingUtil; // inherited from NSObject

	static decodeWithCoderForInstance(aDecoder: NSCoder, instance: NSObject): void;

	static encodeWithCoderForInstance(aCoder: NSCoder, instance: NSObject): void;

	static new(): ZDKNSCodingUtil; // inherited from NSObject
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

	readonly authenticationSpace: ZDKAuthenticationSpace;

	constructor(o: { authenticationSpace: ZDKAuthenticationSpace; });

	initWithAuthenticationSpace(authenticationSpace: ZDKAuthenticationSpace): this;
}

declare class ZDKPushRegistrationProvider extends ZDKProvider {

	static alloc(): ZDKPushRegistrationProvider; // inherited from NSObject

	static new(): ZDKPushRegistrationProvider; // inherited from NSObject

	registerForPushWithDeviceIDLocaleCallback(identifier: string, locale: string, callback: (p1: ZDKPushRegistrationResponse, p2: NSError) => void): void;

	registerForPushWithUAChannelIDLocalCallback(identifier: string, locale: string, callback: (p1: ZDKPushRegistrationResponse, p2: NSError) => void): void;

	unregisterDeviceCallback(identifier: string, callback: (p1: number, p2: NSError) => void): void;
}

declare class ZDKPushRegistrationRequest extends NSObject {

	static alloc(): ZDKPushRegistrationRequest; // inherited from NSObject

	static new(): ZDKPushRegistrationRequest; // inherited from NSObject

	readonly device_type: string;

	identifier: string;

	locale: string;

	token_type: string;

	toJson(): NSMutableDictionary<any, any>;
}

declare class ZDKPushRegistrationResponse extends NSObject {

	static alloc(): ZDKPushRegistrationResponse; // inherited from NSObject

	static new(): ZDKPushRegistrationResponse; // inherited from NSObject

	identifier: string;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare var ZDKRMAAccessibilityID: string;

declare var ZDKRMAAppVersion: string;

declare var ZDKRMAChosenAction: string;

declare var ZDKRMADateOfActionChosen: string;

declare var ZDKRMAInitialCheckDate: string;

declare var ZDKRMANotificationBack: string;

declare var ZDKRMANotificationDontAsk: string;

declare var ZDKRMANotificationFeedbackError: string;

declare var ZDKRMANotificationFeedbackSuccess: string;

declare var ZDKRMANotificationNo: string;

declare var ZDKRMANotificationSend: string;

declare var ZDKRMANotificationShouldStore: string;

declare var ZDKRMANotificationTriggered: string;

declare var ZDKRMANotificationWillHideDialog: string;

declare var ZDKRMANotificationYes: string;

declare var ZDKRMARequestBuildVariantTag: string;

declare var ZDKRMARequestFeedbackTag: string;

declare var ZDKRMARequestIOSTag: string;

declare var ZDKRMARequestText: string;

declare var ZDKRMAVisitCount: string;

declare class ZDKRateMyAppSettings extends ZDKCoding {

	static alloc(): ZDKRateMyAppSettings; // inherited from NSObject

	static new(): ZDKRateMyAppSettings; // inherited from NSObject

	readonly appStoreUrl: string;

	readonly delay: number;

	readonly duration: number;

	readonly enabled: boolean;

	readonly tags: NSArray<any>;

	readonly visits: number;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class ZDKReachability extends NSObject {

	static alloc(): ZDKReachability; // inherited from NSObject

	static new(): ZDKReachability; // inherited from NSObject

	static reachabilityForInternetConnection(): ZDKReachability;

	static reachabilityForLocalWiFi(): ZDKReachability;

	static reachabilityWithAddress(hostAddress: interop.Pointer | interop.Reference<sockaddr_in>): ZDKReachability;

	static reachabilityWithHostName(hostName: string): ZDKReachability;

	connectionRequired(): boolean;

	currentReachabilityStatus(): ZDKNetworkStatus;

	startNotifier(): boolean;

	stopNotifier(): void;
}

declare class ZDKRequest extends NSObject {

	static alloc(): ZDKRequest; // inherited from NSObject

	static new(): ZDKRequest; // inherited from NSObject

	commentCount: number;

	createdAt: Date;

	publicUpdatedAt: Date;

	requestDescription: string;

	requestId: string;

	requesterId: number;

	status: string;

	subject: string;

	type: string;

	updateAt: Date;

	constructor(o: { dict: NSDictionary<any, any>; });

	initWithDict(dict: NSDictionary<any, any>): this;
}

declare class ZDKRequestProvider extends ZDKProvider {

	static alloc(): ZDKRequestProvider; // inherited from NSObject

	static new(): ZDKRequestProvider; // inherited from NSObject

	addCommentForRequestIdAttachmentsWithCallback(comment: string, requestId: string, attachments: NSArray<any>, callback: (p1: ZDKComment, p2: NSError) => void): void;

	addCommentForRequestIdWithCallback(comment: string, requestId: string, callback: (p1: ZDKComment, p2: NSError) => void): void;

	createRequestWithCallback(request: ZDKCreateRequest, callback: (p1: any, p2: NSError) => void): void;

	getAllRequestsWithCallback(callback: (p1: NSArray<any>, p2: NSError) => void): void;

	getCommentsWithRequestIdWithCallback(requestId: string, callback: (p1: NSArray<any>, p2: NSError) => void): void;

	getRequestByIdWithCallback(requestId: string, callback: (p1: ZDKRequest, p2: NSError) => void): void;

	getRequestsByStatusWithCallback(status: string, callback: (p1: NSArray<any>, p2: NSError) => void): void;

	getTicketFormWithIdsCallback(ticketFormIds: NSArray<number>, callback: (p1: NSArray<ZDKTicketForm>, p2: NSError) => void): void;
}

declare class ZDKRequestStorage extends NSObject {

	static alloc(): ZDKRequestStorage; // inherited from NSObject

	static new(): ZDKRequestStorage; // inherited from NSObject

	clientCommentCountForRequest(requestId: string): number;

	deleteStoredData(): void;

	getRequestIdentifiers(): NSArray<any>;

	requestIdentifiers(): NSArray<any>;

	setClientCommentCountForRequestCount(requestId: string, count: number): void;

	storeRequestIdentifier(requestIdentifier: string): void;
}

declare class ZDKRequestWithAttachmentsUtil extends NSObject {

	static MIMETypeForData(data: NSData): string;

	static alloc(): ZDKRequestWithAttachmentsUtil; // inherited from NSObject

	static new(): ZDKRequestWithAttachmentsUtil; // inherited from NSObject

	addCommentForRequestIdWithCallback(comment: ZDKComment, requestId: string, callback: (p1: ZDKComment, p2: NSError) => void): void;

	createRequestWithTagsAndCallback(request: ZDKRequest, tags: NSArray<any>, callback: (p1: any, p2: NSError) => void): void;

	deleteFilename(filename: string): void;

	uploadAttachmentWithFilenameAndContentTypeCallback(data: NSData, filename: string, contentType: string, callback: (p1: ZDKUploadResponse, p2: NSError) => void): void;

	uploadAttachmentWithFilenameCallback(data: NSData, filename: string, callback: (p1: ZDKUploadResponse, p2: NSError) => void): void;
}

declare class ZDKRequestsResponse extends NSObject {

	static alloc(): ZDKRequestsResponse; // inherited from NSObject

	static new(): ZDKRequestsResponse; // inherited from NSObject

	static parseRequestListWithDictionary(dictionary: NSDictionary<any, any>): NSArray<any>;
}

declare class ZDKSdkStorage extends NSObject {

	static alloc(): ZDKSdkStorage; // inherited from NSObject

	static instance(): ZDKSdkStorage;

	static new(): ZDKSdkStorage; // inherited from NSObject

	readonly identityStorage: ZDKIdentityStorage;

	readonly requestStorage: ZDKRequestStorage;

	clearUserData(): void;
}

declare class ZDKSettings extends ZDKCoding {

	static alloc(): ZDKSettings; // inherited from NSObject

	static new(): ZDKSettings; // inherited from NSObject

	readonly accountSettings: ZDKAccountSettings;

	readonly appSettings: ZDKAppSettings;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class ZDKSettingsProvider extends ZDKProvider {

	static alloc(): ZDKSettingsProvider; // inherited from NSObject

	static new(): ZDKSettingsProvider; // inherited from NSObject

	getSdkSettingsWithCallback(callback: (p1: ZDKSettings, p2: NSError) => void): void;

	getSdkSettingsWithLocaleAndCallback(locale: string, callback: (p1: ZDKSettings, p2: NSError) => void): void;
}

declare class ZDKStringUtil extends NSObject {

	static alloc(): ZDKStringUtil; // inherited from NSObject

	static csvStringFromArray(array: NSArray<any>): string;

	static new(): ZDKStringUtil; // inherited from NSObject
}

declare class ZDKTicketField extends NSObject implements ZDKDictionaryCreatable {

	static alloc(): ZDKTicketField; // inherited from NSObject

	static new(): ZDKTicketField; // inherited from NSObject

	fieldDescription: string;

	fieldId: number;

	options: NSArray<ZDKTicketFieldOption>;

	required: boolean;

	title: string;

	titleInPortal: string;

	type: ZDKTicketFieldType;

	validationRegex: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from ZDKDictionaryCreatable

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDictionary(dictionary: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

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

	constructor(o: { dictionary: NSDictionary<any, any>; });

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

	Unknown = 18446744073709551615
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

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from ZDKDictionaryCreatable

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDictionary(dictionary: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ZDKTicketFormsSettings extends ZDKCoding {

	static alloc(): ZDKTicketFormsSettings; // inherited from NSObject

	static new(): ZDKTicketFormsSettings; // inherited from NSObject

	readonly enabled: boolean;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class ZDKUploadProvider extends ZDKProvider {

	static alloc(): ZDKUploadProvider; // inherited from NSObject

	static new(): ZDKUploadProvider; // inherited from NSObject

	deleteUploadAndCallback(uploadToken: string, callback: (p1: string, p2: NSError) => void): void;

	uploadAttachmentWithFilenameAndContentTypeCallback(attachment: NSData, filename: string, contentType: string, callback: (p1: ZDKUploadResponse, p2: NSError) => void): void;
}

declare class ZDKUploadResponse extends NSObject implements NSCopying {

	static alloc(): ZDKUploadResponse; // inherited from NSObject

	static new(): ZDKUploadResponse; // inherited from NSObject

	attachment: ZDKAttachment;

	uploadToken: string;

	constructor(o: { dict: NSDictionary<any, any>; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithDict(dict: NSDictionary<any, any>): this;
}

declare class ZDKUser extends NSObject {

	static alloc(): ZDKUser; // inherited from NSObject

	static new(): ZDKUser; // inherited from NSObject

	avatarURL: string;

	isAgent: boolean;

	name: string;

	tags: NSArray<any>;

	userFields: NSDictionary<any, any>;

	userId: number;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class ZDKUserField extends NSObject {

	static alloc(): ZDKUserField; // inherited from NSObject

	static new(): ZDKUserField; // inherited from NSObject

	static parseUserFields(array: NSArray<any>): NSArray<any>;

	customFieldOptions: NSArray<any>;

	fieldDescription: string;

	title: string;

	typeOfField: string;

	userFieldId: number;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class ZDKUserProvider extends ZDKProvider {

	static alloc(): ZDKUserProvider; // inherited from NSObject

	static new(): ZDKUserProvider; // inherited from NSObject

	addTagsCallback(tags: NSArray<any>, callback: (p1: NSArray<any>, p2: NSError) => void): void;

	deleteTagsCallback(tags: NSArray<any>, callback: (p1: NSArray<any>, p2: NSError) => void): void;

	getUser(callback: (p1: ZDKUser, p2: NSError) => void): void;

	getUserFields(callback: (p1: NSArray<any>, p2: NSError) => void): void;

	setUserFieldsCallback(userFields: NSDictionary<any, any>, callback: (p1: NSDictionary<any, any>, p2: NSError) => void): void;
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

declare var ZendeskSDKVersionNumber: number;

declare var ZendeskSDKVersionString: string;

declare var iOS7AppStoreURLFormat: string;

declare var iOSAppStoreURLFormat: string;
