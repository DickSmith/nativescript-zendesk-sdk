declare class HelpCenterArticleVotingHandler extends NSObject
  implements ZDKHelpCenterArticleRatingHandlerProtocol {
  static alloc(): HelpCenterArticleVotingHandler; // inherited from NSObject

  static new(): HelpCenterArticleVotingHandler; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { articleId: string; andLocale: string });

  articleRatingVoteSelectedAtIndex(
    ratingState: ZDKHelpCenterArticleRatingStateProtocol,
    index: number
  ): void;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  currentArticleVote(): number;

  initWithArticleIdAndLocale(articleId: string, locale: string): this;

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

declare class RequestCoordinator extends NSObject {
  static alloc(): RequestCoordinator; // inherited from NSObject

  static new(): RequestCoordinator; // inherited from NSObject
}

declare class ZDKArticleUiConfiguration extends NSObject {
  static alloc(): ZDKArticleUiConfiguration; // inherited from NSObject

  static new(): ZDKArticleUiConfiguration; // inherited from NSObject

  deflectionEnabled: boolean;

  hideContactSupport: boolean;

  showContactOptions: boolean;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(); // inherited from any

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  init(): this;

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

declare class ZDKConstants extends NSObject {
  static alloc(): ZDKConstants; // inherited from NSObject

  static colorForToast(): UIColor;

  static new(): ZDKConstants; // inherited from NSObject
}

declare const enum ZDKContactUsVisibility {
  ArticleListAndArticle = 0,

  ArticleListOnly = 1,

  Off = 2
}

interface ZDKCreateRequestUIDelegate extends NSObjectProtocol {
  createRequestBarButtonImage(): UIImage;

  createRequestBarButtonLocalizedLabel(): string;

  navBarCreateRequestUIType(): ZDKNavBarCreateRequestUIType;
}
declare var ZDKCreateRequestUIDelegate: {
  prototype: ZDKCreateRequestUIDelegate;
};

declare const enum ZDKFileType {
  Png = 0,

  Jpg = 1,

  Pdf = 2,

  Plain = 3,

  Word = 4,

  Excel = 5,

  Powerpoint = 6,

  PowerpointX = 7,

  Keynote = 8,

  Pages = 9,

  Numbers = 10,

  Binary = 11,

  Heic = 12
}

interface ZDKHelpCenterArticleRatingHandlerProtocol extends NSObjectProtocol {
  articleRatingVoteSelectedAtIndex(
    ratingState: ZDKHelpCenterArticleRatingStateProtocol,
    index: number
  ): void;

  currentArticleVote(): number;
}
declare var ZDKHelpCenterArticleRatingHandlerProtocol: {
  prototype: ZDKHelpCenterArticleRatingHandlerProtocol;
};

interface ZDKHelpCenterArticleRatingStateProtocol extends NSObjectProtocol {
  updateButtonStatesForButtonAtIndexSelected(index: number): void;
}
declare var ZDKHelpCenterArticleRatingStateProtocol: {
  prototype: ZDKHelpCenterArticleRatingStateProtocol;
};

declare class ZDKHelpCenterAttachmentsDataSource extends ZDKHelpCenterDataSource {
  static alloc(): ZDKHelpCenterAttachmentsDataSource; // inherited from NSObject

  static new(): ZDKHelpCenterAttachmentsDataSource; // inherited from NSObject

  constructor(o: { articleId: number });

  initWithArticleId(articleId: number): this;
}

declare class ZDKHelpCenterContactUsRouter extends NSObject {
  static alloc(): ZDKHelpCenterContactUsRouter; // inherited from NSObject

  static new(): ZDKHelpCenterContactUsRouter; // inherited from NSObject

  constructor(o: {
    presentingViewController: UIViewController;
    uiConfigs: NSArray<any> | any[];
    zendesk: ZDKZendesk;
    isDeflectionEnabled: boolean;
  });

  decideButtonActionForEmptySearch(): void;

  decideButtonActionForNavBar(): void;

  initWithPresentingViewControllerUiConfigsZendeskIsDeflectionEnabled(
    presentingViewController: UIViewController,
    uiConfigs: NSArray<any> | any[],
    zendesk: ZDKZendesk,
    isDeflectionEnabled: boolean
  ): this;
}

interface ZDKHelpCenterConversationsUIDelegate extends NSObjectProtocol {
  active(): ZDKContactUsVisibility;

  conversationsBarButtonImage?(): UIImage;

  conversationsBarButtonLocalizedLabel?(): string;

  navBarConversationsUIType(): ZDKNavBarConversationsUIType;
}
declare var ZDKHelpCenterConversationsUIDelegate: {
  prototype: ZDKHelpCenterConversationsUIDelegate;
};

declare class ZDKHelpCenterDataSource extends NSObject
  implements UITableViewDataSource {
  static alloc(): ZDKHelpCenterDataSource; // inherited from NSObject

  static cellIdentifierForDataSource(): string;

  static new(): ZDKHelpCenterDataSource; // inherited from NSObject

  readonly hasItems: boolean;

  readonly items: NSArray<any>;

  readonly provider: ZDKHelpCenterProvider;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  itemAtIndexPath(indexPath: NSIndexPath): any;

  numberOfSectionsInTableView(tableView: UITableView): number;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(
    aSelector: string,
    object1: any,
    object2: any
  ): any;

  reloadData(): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

  self(): this;

  tableViewCanEditRowAtIndexPath(
    tableView: UITableView,
    indexPath: NSIndexPath
  ): boolean;

  tableViewCanMoveRowAtIndexPath(
    tableView: UITableView,
    indexPath: NSIndexPath
  ): boolean;

  tableViewCellForRowAtIndexPath(
    tableView: UITableView,
    indexPath: NSIndexPath
  ): UITableViewCell;

  tableViewCommitEditingStyleForRowAtIndexPath(
    tableView: UITableView,
    editingStyle: UITableViewCellEditingStyle,
    indexPath: NSIndexPath
  ): void;

  tableViewMoveRowAtIndexPathToIndexPath(
    tableView: UITableView,
    sourceIndexPath: NSIndexPath,
    destinationIndexPath: NSIndexPath
  ): void;

  tableViewNumberOfRowsInSection(
    tableView: UITableView,
    section: number
  ): number;

  tableViewSectionForSectionIndexTitleAtIndex(
    tableView: UITableView,
    title: string,
    index: number
  ): number;

  tableViewTitleForFooterInSection(
    tableView: UITableView,
    section: number
  ): string;

  tableViewTitleForHeaderInSection(
    tableView: UITableView,
    section: number
  ): string;
}

interface ZDKHelpCenterDelegate extends NSObjectProtocol {
  uiDelegate: ZDKHelpCenterConversationsUIDelegate;
}
declare var ZDKHelpCenterDelegate: {
  prototype: ZDKHelpCenterDelegate;
};

declare var ZDKHelpCenterEmptyHelpCenterDescription: string;

declare const enum ZDKHelpCenterError {
  InvalidCategoryIds = 100,

  InvalidSectionIds = 101,

  NoArticlesForLabels = 102,

  EmptyHelpCenter = 103
}

declare var ZDKHelpCenterErrorDomain: string;

declare var ZDKHelpCenterNoArticlesForLabelsDescription: string;

declare var ZDKHelpCenterNoCategoriesLocalisedDescription: string;

declare var ZDKHelpCenterNoSectionsLocalisedDescription: string;

declare class ZDKHelpCenterUi extends NSObject {
  static alloc(): ZDKHelpCenterUi; // inherited from NSObject

  static buildHelpCenterArticle(
    article: ZDKHelpCenterArticle
  ): UIViewController;

  static buildHelpCenterArticleAndConfigs(
    article: ZDKHelpCenterArticle,
    configs: NSArray<any> | any[]
  ): UIViewController;

  static buildHelpCenterArticleUi(
    article: ZDKHelpCenterArticle
  ): UIViewController;

  static buildHelpCenterArticleUiAndConfigs(
    article: ZDKHelpCenterArticle,
    configs: NSArray<any> | any[]
  ): UIViewController;

  static buildHelpCenterArticleUiWithArticleId(
    articleId: string
  ): UIViewController;

  static buildHelpCenterArticleUiWithArticleIdAndConfigs(
    articleId: string,
    configs: NSArray<any> | any[]
  ): UIViewController;

  static buildHelpCenterArticleWithArticleId(
    articleId: string
  ): UIViewController;

  static buildHelpCenterArticleWithArticleIdAndConfigs(
    articleId: string,
    configs: NSArray<any> | any[]
  ): UIViewController;

  static buildHelpCenterOverview(): UIViewController;

  static buildHelpCenterOverviewUi(): UIViewController;

  static buildHelpCenterOverviewUiWithConfigs(
    configs: NSArray<any> | any[]
  ): UIViewController;

  static buildHelpCenterOverviewWithConfigs(
    configs: NSArray<any> | any[]
  ): UIViewController;

  static new(): ZDKHelpCenterUi; // inherited from NSObject
}

declare class ZDKHelpCenterUiConfiguration extends NSObject {
  static alloc(): ZDKHelpCenterUiConfiguration; // inherited from NSObject

  static new(): ZDKHelpCenterUiConfiguration; // inherited from NSObject

  deflectionEnabled: boolean;

  groupIds: NSArray<number>;

  groupType: ZDKHelpCenterOverviewGroupType;

  hideContactSupport: boolean;

  labels: NSArray<string>;

  readonly overviewContentModel: ZDKHelpCenterOverviewContentModel;

  showContactOptions: boolean;

  showContactOptionsOnEmptySearch: boolean;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(); // inherited from any

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  init(): this;

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

declare class ZDKLayoutGuideApplicator extends NSObject {
  static alloc(): ZDKLayoutGuideApplicator; // inherited from NSObject

  static new(): ZDKLayoutGuideApplicator; // inherited from NSObject

  constructor(o: {
    viewController: UIViewController;
    topLevelView: UIView;
    layoutPosition: ZDKLayoutGuideApplicatorPosition;
  });

  initWithViewControllerTopLevelViewLayoutPosition(
    viewController: UIViewController,
    topLevelView: UIView,
    position: ZDKLayoutGuideApplicatorPosition
  ): this;
}

declare const enum ZDKLayoutGuideApplicatorPosition {
  Top = 0,

  Bottom = 1
}

declare const enum ZDKNavBarCreateRequestUIType {
  LocalizedLabel = 0,

  Image = 1
}

declare class ZDKRequestAttachment extends NSObject {
  static alloc(): ZDKRequestAttachment; // inherited from NSObject

  static new(): ZDKRequestAttachment; // inherited from NSObject

  readonly data: NSData;

  readonly fileType: ZDKFileType;

  readonly filename: string;

  constructor(o: { filename: string; data: NSData; fileType: ZDKFileType });

  initWithFilenameDataFileType(
    filename: string,
    data: NSData,
    fileType: ZDKFileType
  ): this;
}

declare class ZDKRequestUi extends NSObject {
  static alloc(): ZDKRequestUi; // inherited from NSObject

  static buildRequestList(): UIViewController;

  static buildRequestListWith(
    configurations: NSArray<any> | any[]
  ): UIViewController;

  static buildRequestUi(): UIViewController;

  static buildRequestUiWith(
    configurations: NSArray<any> | any[]
  ): UIViewController;

  static buildRequestUiWithRequestId(requestId: string): UIViewController;

  static buildRequestUiWithRequestIdConfigurations(
    requestId: string,
    configurations: NSArray<any> | any[]
  ): UIViewController;

  static new(): ZDKRequestUi; // inherited from NSObject
}

declare class ZDKRequestUiConfiguration extends NSObject {
  static alloc(): ZDKRequestUiConfiguration; // inherited from NSObject

  static new(): ZDKRequestUiConfiguration; // inherited from NSObject

  fields: NSArray<ZDKCustomField>;

  fileAttachments: NSArray<ZDKRequestAttachment>;

  subject: string;

  tags: NSArray<string>;

  ticketFormID: number;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(); // inherited from any

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  init(): this;

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

interface ZDKSpinnerDelegate extends NSObjectProtocol {
  center: CGPoint;

  frame: CGRect;

  hidden: boolean;

  startAnimating(): void;

  stopAnimating(): void;
}
declare var ZDKSpinnerDelegate: {
  prototype: ZDKSpinnerDelegate;
};

declare class ZDKSuasDebugLogger extends NSObject {
  static alloc(): ZDKSuasDebugLogger; // inherited from NSObject

  static new(): ZDKSuasDebugLogger; // inherited from NSObject

  static setEnabled(newValue: boolean): void;

  static enabled: boolean;
}

declare class ZDKSupportAttachmentCell extends UITableViewCell
  implements UIAppearanceContainer {
  static alloc(): ZDKSupportAttachmentCell; // inherited from NSObject

  static appearance(): ZDKSupportAttachmentCell; // inherited from UIAppearance

  static appearanceForTraitCollection(
    trait: UITraitCollection
  ): ZDKSupportAttachmentCell; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(
    trait: UITraitCollection,
    ContainerClass: typeof NSObject
  ): ZDKSupportAttachmentCell; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(
    trait: UITraitCollection,
    containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
  ): ZDKSupportAttachmentCell; // inherited from UIAppearance

  static appearanceWhenContainedIn(
    ContainerClass: typeof NSObject
  ): ZDKSupportAttachmentCell; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(
    containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
  ): ZDKSupportAttachmentCell; // inherited from UIAppearance

  static cellIdentifier(): string;

  static new(): ZDKSupportAttachmentCell; // inherited from NSObject

  readonly fileSize: UILabel;

  readonly title: UILabel;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class ZDKSupportUI extends NSObject {
  static alloc(): ZDKSupportUI; // inherited from NSObject

  static initializeWithZendesk(zendesk: ZDKZendesk): void;

  static new(): ZDKSupportUI; // inherited from NSObject

  helpCenterLocaleOverride: string;

  static readonly instance: ZDKSupportUI;

  refreshRequestWithRequestId(requestId: string): boolean;
}

declare class ZDKTheme extends NSObject {
  static alloc(): ZDKTheme; // inherited from NSObject

  static new(): ZDKTheme; // inherited from NSObject

  primaryColor: UIColor;

  static readonly currentTheme: ZDKTheme;
}

declare class ZDKToastViewWrapper extends UIView {
  static alloc(): ZDKToastViewWrapper; // inherited from NSObject

  static appearance(): ZDKToastViewWrapper; // inherited from UIAppearance

  static appearanceForTraitCollection(
    trait: UITraitCollection
  ): ZDKToastViewWrapper; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(
    trait: UITraitCollection,
    ContainerClass: typeof NSObject
  ): ZDKToastViewWrapper; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(
    trait: UITraitCollection,
    containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
  ): ZDKToastViewWrapper; // inherited from UIAppearance

  static appearanceWhenContainedIn(
    ContainerClass: typeof NSObject
  ): ZDKToastViewWrapper; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(
    containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
  ): ZDKToastViewWrapper; // inherited from UIAppearance

  static new(): ZDKToastViewWrapper; // inherited from NSObject

  readonly isVisible: boolean;

  dismiss(): void;

  hideToastView(hide: boolean): void;

  showErrorInViewControllerWithMessage(
    viewController: UIViewController,
    message: string
  ): void;

  showErrorInViewControllerWithMessageButtonTitleAction(
    viewController: UIViewController,
    message: string,
    buttonTitle: string,
    action: () => void
  ): void;

  showErrorInViewControllerWithMessageDuration(
    viewController: UIViewController,
    message: string,
    duration: number
  ): void;
}

declare class ZDKUIUtil extends NSObject {
  static alloc(): ZDKUIUtil; // inherited from NSObject

  static appearanceValueForClassSelector(
    viewClass: typeof NSObject,
    selector: string
  ): any;

  static appearanceValueForClassWhenContainedInSelector(
    viewClass: typeof NSObject,
    containerClass: typeof NSObject,
    selector: string
  ): any;

  static appearanceValueForViewSelector(view: UIView, selector: string): any;

  static buildButtonWithFrameAndTitle(frame: CGRect, title: string): UIButton;

  static currentInterfaceOrientation(): UIInterfaceOrientation;

  static fixOrientationOfImage(image: UIImage): UIImage;

  static isLandscape(): boolean;

  static isNewerVersion(majorVersionNumber: string): boolean;

  static isOlderVersion(majorVersionNumber: string): boolean;

  static isPad(): boolean;

  static isSameVersion(majorVersionNumber: number): boolean;

  static new(): ZDKUIUtil; // inherited from NSObject

  static scaledHeightForSizeConstrainedByWidth(
    size: CGSize,
    width: number
  ): number;

  static separatorHeightForScreenScale(): number;

  static shouldEnableAttachments(viewController: UIViewController): boolean;
}
