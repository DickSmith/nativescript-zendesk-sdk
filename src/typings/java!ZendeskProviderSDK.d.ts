/// <reference path="./com.zendesk.sdk.model.access.AccessToken.d.ts" />
/// <reference path="./com.zendesk.sdk.model.settings.SafeMobileSettings.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export class SdkConfiguration {
					public getBearerAuthorizationHeader(): string;
					public constructor(param0: com.zendesk.sdk.model.access.AccessToken, param1: com.zendesk.sdk.model.settings.SafeMobileSettings);
					public getMobileSettings(): com.zendesk.sdk.model.settings.SafeMobileSettings;
					public getAccessToken(): com.zendesk.sdk.model.access.AccessToken;
				}
			}
		}
	}
}

import javalangObject = java.lang.Object;
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module access {
					export class AccessToken {
						public getUserId(): string;
						public constructor();
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public getAccessToken(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.access.Identity.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module access {
					export class AnonymousIdentity {
						public reloadGuid(): void;
						public getSdkGuid(): string;
						public constructor();
						public equals(param0: javalangObject): boolean;
						public getEmail(): string;
						public hashCode(): number;
						public getName(): string;
					}
					export module AnonymousIdentity {
						export class Builder {
							public constructor();
							public build(): com.zendesk.sdk.model.access.Identity;
							public withNameIdentifier(param0: string): com.zendesk.sdk.model.access.AnonymousIdentity.Builder;
							public withEmailIdentifier(param0: string): com.zendesk.sdk.model.access.AnonymousIdentity.Builder;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.access.Identity.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module access {
					export class AuthenticationRequestWrapper {
						public constructor();
						public setUser(param0: com.zendesk.sdk.model.access.Identity): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.access.AccessToken.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module access {
					export class AuthenticationResponse {
						public getAuthentication(): com.zendesk.sdk.model.access.AccessToken;
						public constructor();
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module access {
					export class AuthenticationType {
						public static JWT: com.zendesk.sdk.model.access.AuthenticationType;
						public static ANONYMOUS: com.zendesk.sdk.model.access.AuthenticationType;
						public getAuthenticationType(): string;
						public static getAuthType(param0: string): com.zendesk.sdk.model.access.AuthenticationType;
						public static values(): native.Array<com.zendesk.sdk.model.access.AuthenticationType>;
						public static valueOf(param0: string): com.zendesk.sdk.model.access.AuthenticationType;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module access {
					export class Identity {
						/**
						 * Constructs a new instance of the com.zendesk.sdk.model.access.Identity interface with the provided implementation.
						 */
						public constructor(implementation: {
						});
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module access {
					export class JwtIdentity {
						public equals(param0: javalangObject): boolean;
						public getJwtUserIdentifier(): string;
						public hashCode(): number;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

import javalangLong = java.lang.Long;
import javautilList = java.util.List;
import javautilDate = java.util.Date;
/// <reference path="./com.zendesk.sdk.model.helpcenter.User.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class Article {
						public static UNKNOWN_VOTE_COUNT: number;
						public getId(): javalangLong;
						public getDownvoteCount(): number;
						public constructor();
						public getLabelNames(): javautilList;
						public getLocale(): string;
						public getCreatedAt(): javautilDate;
						public setAuthor(param0: com.zendesk.sdk.model.helpcenter.User): void;
						public getSectionId(): javalangLong;
						public getSourceLocale(): string;
						public getUrl(): string;
						public getTitle(): string;
						public getBody(): string;
						public isOutdated(): boolean;
						public getAuthorId(): javalangLong;
						public isDraft(): boolean;
						public getUpvoteCount(): number;
						public isCommentsDisabled(): boolean;
						public getVoteSum(): number;
						public getUpdatedAt(): javautilDate;
						public getVoteCount(): number;
						public getHtmlUrl(): string;
						public getAuthor(): com.zendesk.sdk.model.helpcenter.User;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.Article.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class ArticleResponse {
						public getUsers(): javautilList;
						public constructor();
						public getArticle(): com.zendesk.sdk.model.helpcenter.Article;
					}
				}
			}
		}
	}
}

import javalangInteger = java.lang.Integer;
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class ArticleVote {
						public getId(): javalangLong;
						public getItemId(): javalangLong;
						public constructor();
						public getUserId(): javalangLong;
						public getValue(): javalangInteger;
						public equals(param0: javalangObject): boolean;
						public getCreatedAt(): javautilDate;
						public hashCode(): number;
						public getUrl(): string;
						public getUpdatedAt(): javautilDate;
						public getItemType(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.ArticleVote.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class ArticleVoteResponse {
						public constructor();
						public getVote(): com.zendesk.sdk.model.helpcenter.ArticleVote;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class ArticlesListResponse {
						public getUsers(): javautilList;
						public constructor();
						public getSections(): javautilList;
						public getNextPage(): string;
						public getCategories(): javautilList;
						public getPreviousPage(): string;
						public getArticles(): javautilList;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class ArticlesResponse {
						/**
						 * Constructs a new instance of the com.zendesk.sdk.model.helpcenter.ArticlesResponse interface with the provided implementation.
						 */
						public constructor(implementation: {
							getArticles(): javautilList;
							getCategories(): javautilList;
							getSections(): javautilList;
							getUsers(): javautilList;
						});
						public getUsers(): javautilList;
						public getSections(): javautilList;
						public getCategories(): javautilList;
						public getArticles(): javautilList;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class ArticlesSearchResponse {
						public getUsers(): javautilList;
						public constructor();
						public getSections(): javautilList;
						public getNextPage(): string;
						public getCategories(): javautilList;
						public getPreviousPage(): string;
						public getArticles(): javautilList;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class Attachment {
						public getId(): javalangLong;
						public getArticleId(): javalangLong;
						public constructor();
						public getSize(): javalangLong;
						public getCreatedAt(): javautilDate;
						public getContentType(): string;
						public getFileName(): string;
						public getUrl(): string;
						public getContentUrl(): string;
						public getUpdatedAt(): javautilDate;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class AttachmentResponse {
						public constructor();
						public getArticleAttachments(): javautilList;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class AttachmentType {
						public static INLINE: com.zendesk.sdk.model.helpcenter.AttachmentType;
						public static BLOCK: com.zendesk.sdk.model.helpcenter.AttachmentType;
						public static values(): native.Array<com.zendesk.sdk.model.helpcenter.AttachmentType>;
						public static valueOf(param0: string): com.zendesk.sdk.model.helpcenter.AttachmentType;
						public getAttachmentType(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class CategoriesResponse {
						public constructor();
						public getCategories(): javautilList;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class Category {
						public getId(): javalangLong;
						public constructor();
						public isOutdated(): boolean;
						public getLocale(): string;
						public getCreatedAt(): javautilDate;
						public getPosition(): number;
						public getSourceLocale(): string;
						public getUrl(): string;
						public getUpdatedAt(): javautilDate;
						public getDescription(): string;
						public getName(): string;
						public getHtmlUrl(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.Category.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class CategoryResponse {
						public constructor();
						public getCategory(): com.zendesk.sdk.model.helpcenter.Category;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.Article.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.Category.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.Section.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class FlatArticle {
						public getArticle(): com.zendesk.sdk.model.helpcenter.Article;
						public constructor(param0: com.zendesk.sdk.model.helpcenter.Category, param1: com.zendesk.sdk.model.helpcenter.Section, param2: com.zendesk.sdk.model.helpcenter.Article);
						public compareTo(param0: com.zendesk.sdk.model.helpcenter.FlatArticle): number;
						public getSection(): com.zendesk.sdk.model.helpcenter.Section;
						public getCategory(): com.zendesk.sdk.model.helpcenter.Category;
						public toString(): string;
					}
				}
			}
		}
	}
}

import javautilLocale = java.util.Locale;
/// <reference path="./com.zendesk.sdk.model.helpcenter.HelpCenterSearch.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class HelpCenterSearch {
						public getCategoryIds(): string;
						public getInclude(): string;
						public withQuery(param0: string): com.zendesk.sdk.model.helpcenter.HelpCenterSearch;
						public getSectionIds(): string;
						public getLabelNames(): string;
						public getQuery(): string;
						public getPage(): javalangInteger;
						public getLocale(): javautilLocale;
						public getPerPage(): javalangInteger;
					}
					export module HelpCenterSearch {
						export class Builder {
							public constructor();
							public withLabelNames(param0: native.Array<string>): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
							public withSectionId(param0: javalangLong): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
							public forLocale(param0: javautilLocale): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
							public withCategoryId(param0: javalangLong): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
							public withSectionIds(param0: javautilList): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
							public perPage(param0: javalangInteger): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
							public withQuery(param0: string): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
							public build(): com.zendesk.sdk.model.helpcenter.HelpCenterSearch;
							public withIncludes(param0: native.Array<string>): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
							public withCategoryIds(param0: javautilList): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
							public page(param0: javalangInteger): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class LastSearch {
						public constructor(param0: string, param1: number);
						public getQuery(): string;
						public getResultsCount(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.SortBy.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.SortOrder.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class ListArticleQuery {
						public getSortOrder(): com.zendesk.sdk.model.helpcenter.SortOrder;
						public setInclude(param0: string): void;
						public setSortOrder(param0: com.zendesk.sdk.model.helpcenter.SortOrder): void;
						public constructor();
						public getInclude(): string;
						public getLabelNames(): string;
						public setResultsPerPage(param0: javalangInteger): void;
						public setLocale(param0: javautilLocale): void;
						public setSortBy(param0: com.zendesk.sdk.model.helpcenter.SortBy): void;
						public getSortBy(): com.zendesk.sdk.model.helpcenter.SortBy;
						public getResultsPerPage(): javalangInteger;
						public getPage(): javalangInteger;
						public setPage(param0: javalangInteger): void;
						public getLocale(): javautilLocale;
						public setLabelNames(param0: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.LastSearch.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class RecordArticleViewRequest {
						public constructor(param0: com.zendesk.sdk.model.helpcenter.LastSearch, param1: boolean);
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.Article.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.Category.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.Section.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class SearchArticle {
						public constructor(param0: com.zendesk.sdk.model.helpcenter.Article, param1: com.zendesk.sdk.model.helpcenter.Section, param2: com.zendesk.sdk.model.helpcenter.Category);
						public getArticle(): com.zendesk.sdk.model.helpcenter.Article;
						public getSection(): com.zendesk.sdk.model.helpcenter.Section;
						public getCategory(): com.zendesk.sdk.model.helpcenter.Category;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class Section {
						public getId(): javalangLong;
						public constructor();
						public getLocale(): string;
						public getCreatedAt(): javautilDate;
						public getPosition(): number;
						public getSorting(): string;
						public getCategoryId(): javalangLong;
						public getSourceLocale(): string;
						public getUrl(): string;
						public getName(): string;
						public isOutdated(): boolean;
						public getUpdatedAt(): javautilDate;
						public getDescription(): string;
						public getArticlesCount(): number;
						public getHtmlUrl(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.Section.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class SectionResponse {
						public constructor();
						public getSection(): com.zendesk.sdk.model.helpcenter.Section;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class SectionsResponse {
						public sections: javautilList;
						public constructor();
						public getSections(): javautilList;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class SimpleArticle {
						public getId(): javalangLong;
						public constructor(param0: javalangLong, param1: string);
						public getTitle(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class SortBy {
						public static POSITION: com.zendesk.sdk.model.helpcenter.SortBy;
						public static TITLE: com.zendesk.sdk.model.helpcenter.SortBy;
						public static CREATED_AT: com.zendesk.sdk.model.helpcenter.SortBy;
						public static UPDATED_AT: com.zendesk.sdk.model.helpcenter.SortBy;
						public getApiValue(): string;
						public static values(): native.Array<com.zendesk.sdk.model.helpcenter.SortBy>;
						public static valueOf(param0: string): com.zendesk.sdk.model.helpcenter.SortBy;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class SortOrder {
						public static ASCENDING: com.zendesk.sdk.model.helpcenter.SortOrder;
						public static DESCENDING: com.zendesk.sdk.model.helpcenter.SortOrder;
						public getApiValue(): string;
						public static values(): native.Array<com.zendesk.sdk.model.helpcenter.SortOrder>;
						public static valueOf(param0: string): com.zendesk.sdk.model.helpcenter.SortOrder;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class SuggestedArticleResponse {
						public constructor();
						public getResults(): javautilList;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class SuggestedArticleSearch {
						public getLabelNames(): string;
						public getQuery(): string;
						public getCategoryId(): javalangLong;
						public getSectionId(): javalangLong;
						public getLocale(): javautilLocale;
					}
					export module SuggestedArticleSearch {
						export class Builder {
							public constructor();
							public forLocale(param0: javautilLocale): com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch.Builder;
							public withCategoryId(param0: javalangLong): com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch.Builder;
							public withSectionId(param0: javalangLong): com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch.Builder;
							public withLabelNames(param0: native.Array<string>): com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch.Builder;
							public withQuery(param0: string): com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch.Builder;
							public build(): com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export class User {
						public getId(): javalangLong;
						public constructor();
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public getName(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export module help {
						export class ArticleItem {
							public constructor();
							public getViewType(): number;
							public getId(): javalangLong;
							public hashCode(): number;
							public getName(): string;
							public getChildren(): javautilList;
							public equals(param0: javalangObject): boolean;
							public getParentId(): javalangLong;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export module help {
						export class CategoryItem {
							public constructor();
							public getViewType(): number;
							public getId(): javalangLong;
							public hashCode(): number;
							public getName(): string;
							public getChildren(): javautilList;
							public isExpanded(): boolean;
							public setExpanded(param0: boolean): boolean;
							public setSections(param0: javautilList): void;
							public equals(param0: javalangObject): boolean;
							public getParentId(): javalangLong;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export module help {
						export class HelpItem {
							/**
							 * Constructs a new instance of the com.zendesk.sdk.model.helpcenter.help.HelpItem interface with the provided implementation.
							 */
							public constructor(implementation: {
								getViewType(): number;
								getName(): string;
								getId(): javalangLong;
								getParentId(): javalangLong;
								getChildren(): javautilList;
							});
							public static TYPE_LOADING: number;
							public static TYPE_SEE_ALL: number;
							public static TYPE_SECTION: number;
							public static TYPE_NO_RESULTS: number;
							public static TYPE_PADDING: number;
							public static TYPE_CATEGORY: number;
							public static TYPE_ARTICLE: number;
							public getViewType(): number;
							public getId(): javalangLong;
							public getName(): string;
							public getChildren(): javautilList;
							public getParentId(): javalangLong;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.help.HelpRequest.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export module help {
						export class HelpRequest {
							public getCategoryIds(): string;
							public getIncludes(): string;
							public getLabelNames(): native.Array<string>;
							public getSectionIds(): string;
							public getArticlesPerPageLimit(): number;
						}
						export module HelpRequest {
							export class Builder {
								public withArticlesPerSectionLimit(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpRequest.Builder;
								public includeCategories(): com.zendesk.sdk.model.helpcenter.help.HelpRequest.Builder;
								public withSectionIds(param0: javautilList): com.zendesk.sdk.model.helpcenter.help.HelpRequest.Builder;
								public withLabelNames(param0: native.Array<string>): com.zendesk.sdk.model.helpcenter.help.HelpRequest.Builder;
								public withCategoryIds(param0: javautilList): com.zendesk.sdk.model.helpcenter.help.HelpRequest.Builder;
								public constructor();
								public build(): com.zendesk.sdk.model.helpcenter.help.HelpRequest;
								public includeSections(): com.zendesk.sdk.model.helpcenter.help.HelpRequest.Builder;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export module help {
						export class HelpResponse {
							public constructor();
							public getCategories(): javautilList;
							public getArticles(): javautilList;
							public getSections(): javautilList;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.help.HelpItem.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export module help {
						export class SectionItem {
							public constructor();
							public getViewType(): number;
							public getId(): javalangLong;
							public getTotalArticlesCount(): number;
							public hashCode(): number;
							public getName(): string;
							public removeChild(param0: com.zendesk.sdk.model.helpcenter.help.HelpItem): void;
							public getChildren(): javautilList;
							public addChildren(param0: javautilList): void;
							public addChild(param0: com.zendesk.sdk.model.helpcenter.help.HelpItem): void;
							public equals(param0: javalangObject): boolean;
							public getParentId(): javalangLong;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.help.SectionItem.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module helpcenter {
					export module help {
						export class SeeAllArticlesItem {
							public getViewType(): number;
							public getSection(): com.zendesk.sdk.model.helpcenter.help.SectionItem;
							public constructor(param0: com.zendesk.sdk.model.helpcenter.help.SectionItem);
							public getId(): javalangLong;
							public setLoading(param0: boolean): void;
							public hashCode(): number;
							public getName(): string;
							public getChildren(): javautilList;
							public isLoading(): boolean;
							public equals(param0: javalangObject): boolean;
							public getParentId(): javalangLong;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Integer.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module network {
					export abstract class ResponseWrapper {
						public constructor();
						public getCount(): javalangInteger;
						public getNextPage(): string;
						public getPreviousPage(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module push {
					export class AnonymousPushRegistrationRequest extends com.zendesk.sdk.model.push.PushRegistrationRequest {
						public getSdkGuid(): string;
						public constructor();
						public setSdkGuid(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module push {
					export class JwtPushRegistrationRequest extends com.zendesk.sdk.model.push.PushRegistrationRequest {
						public constructor();
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module push {
					export abstract class PushRegistrationRequest {
						public setIdentifier(param0: string): void;
						public constructor();
						public getLocale(): string;
						public getTokenType(): string;
						public setTokenType(param0: string): void;
						public getIdentifier(): string;
						public setLocale(param0: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.push.PushRegistrationRequest.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module push {
					export class PushRegistrationRequestWrapper {
						public constructor();
						public setPushRegistrationRequest(param0: com.zendesk.sdk.model.push.PushRegistrationRequest): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module push {
					export class PushRegistrationResponse {
						public constructor();
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public getIdentifier(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.push.PushRegistrationResponse.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module push {
					export class PushRegistrationResponseWrapper {
						public constructor();
						public getRegistrationResponse(): com.zendesk.sdk.model.push.PushRegistrationResponse;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class Attachment {
						public getId(): javalangLong;
						public constructor();
						public getSize(): javalangLong;
						public getContentType(): string;
						public getFileName(): string;
						public getUrl(): string;
						public getContentUrl(): string;
						public getThumbnails(): javautilList;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class Comment {
						public getId(): javalangLong;
						public isPublic(): boolean;
						public setCreatedAt(param0: javautilDate): void;
						public constructor();
						public getHtmlBody(): string;
						public getCreatedAt(): javautilDate;
						public getUrl(): string;
						public getAttachments(): javautilList;
						public setBody(param0: string): void;
						public getBody(): string;
						public setAuthorId(param0: javalangLong): void;
						public getRequestId(): string;
						public setAttachments(param0: javautilList): void;
						public getAuthorId(): javalangLong;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class CommentResponse {
						public getId(): javalangLong;
						public isPublic(): boolean;
						public setCreatedAt(param0: javautilDate): void;
						public constructor();
						public getHtmlBody(): string;
						public getCreatedAt(): javautilDate;
						public getUrl(): string;
						public getAttachments(): javautilList;
						public setBody(param0: string): void;
						public setId(param0: javalangLong): void;
						public getBody(): string;
						public setAuthorId(param0: javalangLong): void;
						public getRequestId(): string;
						public setAttachments(param0: javautilList): void;
						public getAuthorId(): javalangLong;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class CommentsResponse extends com.zendesk.sdk.model.network.ResponseWrapper {
						public getUsers(): javautilList;
						public constructor();
						public getComments(): javautilList;
						public getOrganizations(): javautilList;
					}
				}
			}
		}
	}
}

import javautilMap = java.util.Map;
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class CreateRequest {
						public constructor();
						public setCustomFields(param0: javautilList): void;
						public getEmail(): string;
						public setId(param0: string): void;
						public getSubject(): string;
						public setMetadata(param0: javautilMap): void;
						public getTags(): javautilList;
						public setDescription(param0: string): void;
						public setSubject(param0: string): void;
						public setEmail(param0: string): void;
						public setAttachments(param0: javautilList): void;
						public setTicketFormId(param0: javalangLong): void;
						public getId(): string;
						public setTags(param0: javautilList): void;
						public getDescription(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.CreateRequest.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class CreateRequestWrapper {
						public setRequest(param0: com.zendesk.sdk.model.request.CreateRequest): void;
						public constructor();
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class CustomField {
						public constructor(param0: javalangLong, param1: string);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class EndUserComment {
						public constructor();
						public setValue(param0: string): void;
						public setAttachments(param0: javautilList): void;
						public getAttachments(): javautilList;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Long.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class Organization {
						public getId(): javalangLong;
						public constructor();
						public getName(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.EndUserComment.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class Request {
						public constructor();
						public getCreatedAt(): javautilDate;
						public getType(): string;
						public getSubject(): string;
						public getUrl(): string;
						public getCollaboratorIds(): javautilList;
						public getStatus(): string;
						public getPublicUpdatedAt(): javautilDate;
						public getDueAt(): javautilDate;
						public getPriority(): string;
						public getCommentCount(): javalangInteger;
						public setComment(param0: com.zendesk.sdk.model.request.EndUserComment): void;
						public getId(): string;
						public getOrganizationId(): javalangLong;
						public getUpdatedAt(): javautilDate;
						public getDescription(): string;
						public getRequesterId(): javalangLong;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.Request.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class RequestResponse {
						public constructor();
						public getRequest(): com.zendesk.sdk.model.request.Request;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class RequestUpdates {
						public getRequestsWithUpdates(): javautilMap;
						public getUpdateCount(): number;
						public equals(param0: javalangObject): boolean;
						public hasUpdates(): boolean;
						public hashCode(): number;
						public constructor(param0: javautilMap);
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class RequestsResponse extends com.zendesk.sdk.model.network.ResponseWrapper {
						public constructor();
						public getRequests(): javautilList;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.Request.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class UpdateRequestWrapper {
						public constructor();
						public setRequest(param0: com.zendesk.sdk.model.request.Request): void;
						public getRequest(): com.zendesk.sdk.model.request.Request;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.Attachment.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class UploadResponse {
						public constructor();
						public getAttachment(): com.zendesk.sdk.model.request.Attachment;
						public getToken(): string;
						public getExpiresAt(): javautilDate;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.UploadResponse.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class UploadResponseWrapper {
						public constructor();
						public getUpload(): com.zendesk.sdk.model.request.UploadResponse;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.Attachment.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class User {
						public getId(): javalangLong;
						public getPhoto(): com.zendesk.sdk.model.request.Attachment;
						public constructor();
						public isAgent(): boolean;
						public getOrganizationId(): javalangLong;
						public getTags(): javautilList;
						public getUserFields(): javautilMap;
						public getName(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class UserField {
						public getId(): javalangLong;
						public constructor();
						public getRawTitle(): string;
						public getPosition(): javalangLong;
						public getCreatedAt(): javautilDate;
						public getUrl(): string;
						public getUserFieldOptions(): javautilList;
						public getKey(): string;
						public getTitle(): string;
						public getRawDescription(): string;
						public getRegexpForValidation(): string;
						public getUserFieldType(): com.zendesk.sdk.model.request.UserField.UserFieldType;
						public isSystem(): boolean;
						public getUpdatedAt(): javautilDate;
						public getDescription(): string;
						public isActive(): boolean;
					}
					export module UserField {
						export class UserFieldType {
							public static Integer: com.zendesk.sdk.model.request.UserField.UserFieldType;
							public static Decimal: com.zendesk.sdk.model.request.UserField.UserFieldType;
							public static Checkbox: com.zendesk.sdk.model.request.UserField.UserFieldType;
							public static Date: com.zendesk.sdk.model.request.UserField.UserFieldType;
							public static Text: com.zendesk.sdk.model.request.UserField.UserFieldType;
							public static Textarea: com.zendesk.sdk.model.request.UserField.UserFieldType;
							public static Dropdown: com.zendesk.sdk.model.request.UserField.UserFieldType;
							public static Regexp: com.zendesk.sdk.model.request.UserField.UserFieldType;
							public static values(): native.Array<com.zendesk.sdk.model.request.UserField.UserFieldType>;
							public static valueOf(param0: string): com.zendesk.sdk.model.request.UserField.UserFieldType;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Long.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class UserFieldOption {
						public getId(): javalangLong;
						public getRawName(): string;
						public constructor();
						public getValue(): string;
						public getName(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class UserFieldRequest {
						public constructor(param0: javautilMap);
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class UserFieldResponse {
						public constructor();
						public getUserFields(): javautilList;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.User.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class UserResponse {
						public constructor();
						public getUser(): com.zendesk.sdk.model.request.User;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export class UserTagRequest {
						public constructor();
						public setTags(param0: javautilList): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.fields.TicketFieldType.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export module fields {
						export class RawTicketField {
							public constructor();
							public getTitleInPortal(): string;
							public getSystemFieldOptions(): javautilList;
							public getId(): number;
							public getTitle(): string;
							public getRegexpForValidation(): string;
							public getCustomFieldOptions(): javautilList;
							public getDescription(): string;
							public getType(): com.zendesk.sdk.model.request.fields.TicketFieldType;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export module fields {
						export class RawTicketFieldOption {
							public constructor();
							public isDefault(): boolean;
							public getName(): string;
							public getId(): number;
							public getValue(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export module fields {
						export class RawTicketFieldSystemOption {
							public constructor();
							public getName(): string;
							public getValue(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export module fields {
						export class RawTicketForm {
							public constructor();
							public getName(): string;
							public getId(): number;
							public getTicketFieldIds(): javautilList;
							public getDisplayName(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export module fields {
						export class RawTicketFormResponse {
							public constructor();
							public getTicketFields(): javautilList;
							public getTicketForms(): javautilList;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.fields.RawTicketField.d.ts" />
/// <reference path="./com.zendesk.sdk.model.request.fields.TicketFieldType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export module fields {
						export class TicketField {
							public constructor(param0: number, param1: com.zendesk.sdk.model.request.fields.TicketFieldType, param2: string, param3: string, param4: string, param5: string, param6: javautilList, param7: javautilList);
							public getTicketFieldOptions(): javautilList;
							public getTitleInPortal(): string;
							public getTicketFieldSystemOptions(): javautilList;
							public static create(param0: com.zendesk.sdk.model.request.fields.RawTicketField): com.zendesk.sdk.model.request.fields.TicketField;
							public getId(): number;
							public getTitle(): string;
							public getRegexpForValidation(): string;
							public getDescription(): string;
							public getType(): com.zendesk.sdk.model.request.fields.TicketFieldType;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.fields.RawTicketFieldOption.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export module fields {
						export class TicketFieldOption {
							public isDefault(): boolean;
							public getName(): string;
							public getId(): number;
							public getValue(): string;
							public static create(param0: com.zendesk.sdk.model.request.fields.RawTicketFieldOption): com.zendesk.sdk.model.request.fields.TicketFieldOption;
							public constructor(param0: number, param1: string, param2: string, param3: boolean);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.fields.RawTicketFieldSystemOption.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export module fields {
						export class TicketFieldSystemOption {
							public static create(param0: com.zendesk.sdk.model.request.fields.RawTicketFieldSystemOption): com.zendesk.sdk.model.request.fields.TicketFieldSystemOption;
							public constructor(param0: string, param1: string);
							public getName(): string;
							public getValue(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export module fields {
						export class TicketFieldType {
							public static Checkbox: com.zendesk.sdk.model.request.fields.TicketFieldType;
							public static Date: com.zendesk.sdk.model.request.fields.TicketFieldType;
							public static Decimal: com.zendesk.sdk.model.request.fields.TicketFieldType;
							public static Description: com.zendesk.sdk.model.request.fields.TicketFieldType;
							public static Integer: com.zendesk.sdk.model.request.fields.TicketFieldType;
							public static PartialCreditCard: com.zendesk.sdk.model.request.fields.TicketFieldType;
							public static Priority: com.zendesk.sdk.model.request.fields.TicketFieldType;
							public static Status: com.zendesk.sdk.model.request.fields.TicketFieldType;
							public static TicketType: com.zendesk.sdk.model.request.fields.TicketFieldType;
							public static Regexp: com.zendesk.sdk.model.request.fields.TicketFieldType;
							public static Subject: com.zendesk.sdk.model.request.fields.TicketFieldType;
							public static Tagger: com.zendesk.sdk.model.request.fields.TicketFieldType;
							public static Text: com.zendesk.sdk.model.request.fields.TicketFieldType;
							public static TextArea: com.zendesk.sdk.model.request.fields.TicketFieldType;
							public static MultiSelect: com.zendesk.sdk.model.request.fields.TicketFieldType;
							public static Unknown: com.zendesk.sdk.model.request.fields.TicketFieldType;
							public static values(): native.Array<com.zendesk.sdk.model.request.fields.TicketFieldType>;
							public static valueOf(param0: string): com.zendesk.sdk.model.request.fields.TicketFieldType;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.fields.RawTicketForm.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module request {
					export module fields {
						export class TicketForm {
							public constructor(param0: number, param1: string, param2: string, param3: javautilList);
							public getTicketFields(): javautilList;
							public static create(param0: com.zendesk.sdk.model.request.fields.RawTicketForm, param1: javautilList): com.zendesk.sdk.model.request.fields.TicketForm;
							public getName(): string;
							public getId(): number;
							public getDisplayName(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.settings.AttachmentSettings.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module settings {
					export class AccountSettings {
						public constructor();
						public getAttachmentSettings(): com.zendesk.sdk.model.settings.AttachmentSettings;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module settings {
					export class AttachmentSettings {
						public constructor();
						public isEnabled(): boolean;
						public getMaxAttachmentSize(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module settings {
					export class BlipsPermissions {
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module settings {
					export class BlipsSettings {
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module settings {
					export class ContactUsSettings {
						public constructor();
						public getTags(): javautilList;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module settings {
					export class ConversationsSettings {
						public constructor();
						public isEnabled(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module settings {
					export class HelpCenterSettings {
						public constructor();
						public getLocale(): string;
						public isEnabled(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.settings.AccountSettings.d.ts" />
/// <reference path="./com.zendesk.sdk.model.settings.SdkSettings.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module settings {
					export class MobileSettings {
						public constructor();
						public getSdkSettings(): com.zendesk.sdk.model.settings.SdkSettings;
						public getAccountSettings(): com.zendesk.sdk.model.settings.AccountSettings;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module settings {
					export class RateMyAppSettings {
						public getDelay(): number;
						public constructor();
						public getDuration(): number;
						public getVisits(): number;
						public getTags(): javautilList;
						public isEnabled(): boolean;
						public getAndroidStoreUrl(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.access.AuthenticationType.d.ts" />
/// <reference path="./com.zendesk.sdk.model.settings.HelpCenterSettings.d.ts" />
/// <reference path="./com.zendesk.sdk.model.settings.MobileSettings.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module settings {
					export class SafeMobileSettings {
						public getRateMyAppTags(): javautilList;
						public isAttachmentsEnabled(): boolean;
						public isRateMyAppEnabled(): boolean;
						public isPathfinderEnabled(): boolean;
						public isTicketFormSupportAvailable(): boolean;
						public getHelpCenterLocale(): string;
						public getContactZendeskTags(): javautilList;
						public getRateMyAppStoreUrl(): string;
						public isHelpCenterEnabled(): boolean;
						public getRateMyAppDuration(): number;
						public getMaxAttachmentSize(): number;
						public getRateMyAppVisits(): number;
						public isConversationsEnabled(): boolean;
						public constructor(param0: com.zendesk.sdk.model.settings.MobileSettings);
						public getMobileSettings(): com.zendesk.sdk.model.settings.MobileSettings;
						public hasHelpCenterSettings(): boolean;
						public getRateMyAppDelay(): number;
						public getAuthenticationType(): com.zendesk.sdk.model.access.AuthenticationType;
						public getHelpCenterSettings(): com.zendesk.sdk.model.settings.HelpCenterSettings;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.access.AuthenticationType.d.ts" />
/// <reference path="./com.zendesk.sdk.model.settings.BlipsSettings.d.ts" />
/// <reference path="./com.zendesk.sdk.model.settings.ContactUsSettings.d.ts" />
/// <reference path="./com.zendesk.sdk.model.settings.ConversationsSettings.d.ts" />
/// <reference path="./com.zendesk.sdk.model.settings.HelpCenterSettings.d.ts" />
/// <reference path="./com.zendesk.sdk.model.settings.RateMyAppSettings.d.ts" />
/// <reference path="./com.zendesk.sdk.model.settings.TicketFormSettings.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module settings {
					export class SdkSettings {
						public constructor();
						public getAuthentication(): com.zendesk.sdk.model.access.AuthenticationType;
						public getBlipsSettings(): com.zendesk.sdk.model.settings.BlipsSettings;
						public getHelpCenterSettings(): com.zendesk.sdk.model.settings.HelpCenterSettings;
						public getUpdatedAt(): javautilDate;
						public getConversationsSettings(): com.zendesk.sdk.model.settings.ConversationsSettings;
						public getRateMyAppSettings(): com.zendesk.sdk.model.settings.RateMyAppSettings;
						public getContactUsSettings(): com.zendesk.sdk.model.settings.ContactUsSettings;
						public getTicketFormSettings(): com.zendesk.sdk.model.settings.TicketFormSettings;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export module settings {
					export class TicketFormSettings {
						public constructor();
						public isAvailable(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.access.AnonymousIdentity.d.ts" />
/// <reference path="./com.zendesk.sdk.model.access.JwtIdentity.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class AccessProvider {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.AccessProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						getAndStoreAuthTokenViaJwt(param0: com.zendesk.sdk.model.access.JwtIdentity, param1: com.zendesk.service.ZendeskCallback): void;
						getAndStoreAuthTokenViaAnonymous(param0: com.zendesk.sdk.model.access.AnonymousIdentity, param1: com.zendesk.service.ZendeskCallback): void;
					});
					public getAndStoreAuthTokenViaAnonymous(param0: com.zendesk.sdk.model.access.AnonymousIdentity, param1: com.zendesk.service.ZendeskCallback): void;
					public getAndStoreAuthTokenViaJwt(param0: com.zendesk.sdk.model.access.JwtIdentity, param1: com.zendesk.service.ZendeskCallback): void;
				}
			}
		}
	}
}

import retrofit2Call = retrofit2.Call;
/// <reference path="./com.zendesk.sdk.model.access.AuthenticationRequestWrapper.d.ts" />
/// <reference path="./retrofit2.Call.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class AccessService {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.AccessService interface with the provided implementation.
					 */
					public constructor(implementation: {
						getAuthToken(param0: com.zendesk.sdk.model.access.AuthenticationRequestWrapper): retrofit2Call;
						getAuthTokenForAnonymous(param0: com.zendesk.sdk.model.access.AuthenticationRequestWrapper): retrofit2Call;
					});
					public getAuthTokenForAnonymous(param0: com.zendesk.sdk.model.access.AuthenticationRequestWrapper): retrofit2Call;
					public getAuthToken(param0: com.zendesk.sdk.model.access.AuthenticationRequestWrapper): retrofit2Call;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.settings.SafeMobileSettings.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class BaseProvider {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.BaseProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						configureSdk(param0: com.zendesk.service.ZendeskCallback): void;
						getSdkSettings(param0: com.zendesk.service.ZendeskCallback): void;
						getAccessToken(param0: com.zendesk.sdk.model.settings.SafeMobileSettings, param1: com.zendesk.service.ZendeskCallback): void;
					});
					public configureSdk(param0: com.zendesk.service.ZendeskCallback): void;
					public getAccessToken(param0: com.zendesk.sdk.model.settings.SafeMobileSettings, param1: com.zendesk.service.ZendeskCallback): void;
					public getSdkSettings(param0: com.zendesk.service.ZendeskCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class Constants {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.Constants interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
					public static APPLICATION_JSON: string;
					public static HEADER_SUFFIX_FORMAT: string;
					public static ENVIRONMENT_DEBUG: string;
					public static ENVIRONMENT_PRODUCTION: string;
					public static HOURS_MINUTES_FORMAT: string;
					public static USER_AGENT_HEADER: string;
					public static ZENDESK_SDK_FOR_ANDROID: string;
					public static HEADER_SUFFIX_MAX_LENGTH: number;
					public static ACCEPT_HEADER: string;
					public static AUTHORIZATION_HEADER: string;
					public static CLIENT_IDENTIFIER_HEADER: string;
					public static SDK_GUID_HEADER: string;
					public static ACCEPT_LANGUAGE_HEADER: string;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.Article.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.AttachmentType.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.HelpCenterSearch.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.ListArticleQuery.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.help.HelpRequest.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class HelpCenterProvider {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.HelpCenterProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						getHelp(param0: com.zendesk.sdk.model.helpcenter.help.HelpRequest, param1: com.zendesk.service.ZendeskCallback): void;
						getCategories(param0: com.zendesk.service.ZendeskCallback): void;
						getSections(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
						getArticles(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
						listArticles(param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback): void;
						listArticlesFlat(param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback): void;
						searchArticles(param0: com.zendesk.sdk.model.helpcenter.HelpCenterSearch, param1: com.zendesk.service.ZendeskCallback): void;
						getArticle(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
						getSection(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
						getCategory(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
						getAttachments(param0: javalangLong, param1: com.zendesk.sdk.model.helpcenter.AttachmentType, param2: com.zendesk.service.ZendeskCallback): void;
						upvoteArticle(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
						downvoteArticle(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
						deleteVote(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
						getSuggestedArticles(param0: com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch, param1: com.zendesk.service.ZendeskCallback): void;
						submitRecordArticleView(param0: com.zendesk.sdk.model.helpcenter.Article, param1: javautilLocale, param2: com.zendesk.service.ZendeskCallback): void;
					});
					public getSection(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
					public getCategory(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
					public submitRecordArticleView(param0: com.zendesk.sdk.model.helpcenter.Article, param1: javautilLocale, param2: com.zendesk.service.ZendeskCallback): void;
					public upvoteArticle(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
					public getArticles(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
					public getSections(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
					public getSuggestedArticles(param0: com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch, param1: com.zendesk.service.ZendeskCallback): void;
					public getArticle(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
					public getCategories(param0: com.zendesk.service.ZendeskCallback): void;
					public deleteVote(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
					public getAttachments(param0: javalangLong, param1: com.zendesk.sdk.model.helpcenter.AttachmentType, param2: com.zendesk.service.ZendeskCallback): void;
					public listArticlesFlat(param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback): void;
					public searchArticles(param0: com.zendesk.sdk.model.helpcenter.HelpCenterSearch, param1: com.zendesk.service.ZendeskCallback): void;
					public getHelp(param0: com.zendesk.sdk.model.helpcenter.help.HelpRequest, param1: com.zendesk.service.ZendeskCallback): void;
					public listArticles(param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback): void;
					public downvoteArticle(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.RecordArticleViewRequest.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./retrofit2.Call.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class HelpCenterService {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.HelpCenterService interface with the provided implementation.
					 */
					public constructor(implementation: {
						getHelp(param0: string, param1: string, param2: string, param3: string, param4: string, param5: number, param6: string, param7: number, param8: string, param9: string): retrofit2Call;
						getCategories(param0: string, param1: string): retrofit2Call;
						getSections(param0: string, param1: string, param2: javalangLong, param3: number): retrofit2Call;
						getArticles(param0: string, param1: string, param2: javalangLong, param3: string, param4: number): retrofit2Call;
						listArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: javalangInteger, param7: javalangInteger): retrofit2Call;
						searchArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: javalangInteger, param8: javalangInteger): retrofit2Call;
						getArticle(param0: string, param1: string, param2: javalangLong, param3: string): retrofit2Call;
						getSectionById(param0: string, param1: string, param2: javalangLong): retrofit2Call;
						getCategoryById(param0: string, param1: string, param2: javalangLong): retrofit2Call;
						getAttachments(param0: string, param1: string, param2: javalangLong, param3: string): retrofit2Call;
						upvoteArticle(param0: string, param1: javalangLong, param2: string): retrofit2Call;
						downvoteArticle(param0: string, param1: javalangLong, param2: string): retrofit2Call;
						deleteVote(param0: string, param1: javalangLong): retrofit2Call;
						getSuggestedArticles(param0: string, param1: string, param2: string, param3: string, param4: javalangLong, param5: javalangLong): retrofit2Call;
						submitRecordArticleView(param0: string, param1: javalangLong, param2: string, param3: com.zendesk.sdk.model.helpcenter.RecordArticleViewRequest): retrofit2Call;
					});
					public getArticle(param0: string, param1: string, param2: javalangLong, param3: string): retrofit2Call;
					public downvoteArticle(param0: string, param1: javalangLong, param2: string): retrofit2Call;
					public getHelp(param0: string, param1: string, param2: string, param3: string, param4: string, param5: number, param6: string, param7: number, param8: string, param9: string): retrofit2Call;
					public listArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: javalangInteger, param7: javalangInteger): retrofit2Call;
					public getAttachments(param0: string, param1: string, param2: javalangLong, param3: string): retrofit2Call;
					public upvoteArticle(param0: string, param1: javalangLong, param2: string): retrofit2Call;
					public getSuggestedArticles(param0: string, param1: string, param2: string, param3: string, param4: javalangLong, param5: javalangLong): retrofit2Call;
					public deleteVote(param0: string, param1: javalangLong): retrofit2Call;
					public searchArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: javalangInteger, param8: javalangInteger): retrofit2Call;
					public getArticles(param0: string, param1: string, param2: javalangLong, param3: string, param4: number): retrofit2Call;
					public submitRecordArticleView(param0: string, param1: javalangLong, param2: string, param3: com.zendesk.sdk.model.helpcenter.RecordArticleViewRequest): retrofit2Call;
					public getCategoryById(param0: string, param1: string, param2: javalangLong): retrofit2Call;
					public getSections(param0: string, param1: string, param2: javalangLong, param3: number): retrofit2Call;
					public getSectionById(param0: string, param1: string, param2: javalangLong): retrofit2Call;
					public getCategories(param0: string, param1: string): retrofit2Call;
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class NetworkAware {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.NetworkAware interface with the provided implementation.
					 */
					public constructor(implementation: {
						onNetworkAvailable(): void;
						onNetworkUnavailable(): void;
					});
					public onNetworkAvailable(): void;
					public onNetworkUnavailable(): void;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.NetworkAware.d.ts" />
/// <reference path="./com.zendesk.sdk.network.RetryAction.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class NetworkInfoProvider {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.NetworkInfoProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						register(): void;
						unregister(): void;
						isNetworkAvailable(): boolean;
						addNetworkAwareListener(param0: javalangInteger, param1: com.zendesk.sdk.network.NetworkAware): void;
						removeNetworkAwareListener(param0: javalangInteger): void;
						clearNetworkAwareListeners(): void;
						addRetryAction(param0: javalangInteger, param1: com.zendesk.sdk.network.RetryAction): void;
						removeRetryAction(param0: javalangInteger): void;
						clearRetryActions(): void;
					});
					public register(): void;
					public isNetworkAvailable(): boolean;
					public removeNetworkAwareListener(param0: javalangInteger): void;
					public removeRetryAction(param0: javalangInteger): void;
					public clearRetryActions(): void;
					public unregister(): void;
					public addRetryAction(param0: javalangInteger, param1: com.zendesk.sdk.network.RetryAction): void;
					public addNetworkAwareListener(param0: javalangInteger, param1: com.zendesk.sdk.network.NetworkAware): void;
					public clearNetworkAwareListeners(): void;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class PushRegistrationProvider {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.PushRegistrationProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						registerDeviceWithIdentifier(param0: string, param1: javautilLocale, param2: com.zendesk.service.ZendeskCallback): void;
						registerDeviceWithUAChannelId(param0: string, param1: javautilLocale, param2: com.zendesk.service.ZendeskCallback): void;
						unregisterDevice(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
					});
					public unregisterDevice(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
					public registerDeviceWithIdentifier(param0: string, param1: javautilLocale, param2: com.zendesk.service.ZendeskCallback): void;
					public registerDeviceWithUAChannelId(param0: string, param1: javautilLocale, param2: com.zendesk.service.ZendeskCallback): void;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.push.PushRegistrationRequestWrapper.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./retrofit2.Call.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class PushRegistrationService {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.PushRegistrationService interface with the provided implementation.
					 */
					public constructor(implementation: {
						registerDevice(param0: string, param1: com.zendesk.sdk.model.push.PushRegistrationRequestWrapper): retrofit2Call;
						unregisterDevice(param0: string, param1: string): retrofit2Call;
					});
					public registerDevice(param0: string, param1: com.zendesk.sdk.model.push.PushRegistrationRequestWrapper): retrofit2Call;
					public unregisterDevice(param0: string, param1: string): retrofit2Call;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.CreateRequest.d.ts" />
/// <reference path="./com.zendesk.sdk.model.request.EndUserComment.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class RequestProvider {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.RequestProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						createRequest(param0: com.zendesk.sdk.model.request.CreateRequest, param1: com.zendesk.service.ZendeskCallback): void;
						getAllRequests(param0: com.zendesk.service.ZendeskCallback): void;
						getRequests(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
						getComments(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
						addComment(param0: string, param1: com.zendesk.sdk.model.request.EndUserComment, param2: com.zendesk.service.ZendeskCallback): void;
						getRequest(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
						getTicketFormsById(param0: javautilList, param1: com.zendesk.service.ZendeskCallback): void;
						getUpdatesForDevice(param0: com.zendesk.service.ZendeskCallback): void;
					});
					public createRequest(param0: com.zendesk.sdk.model.request.CreateRequest, param1: com.zendesk.service.ZendeskCallback): void;
					public getTicketFormsById(param0: javautilList, param1: com.zendesk.service.ZendeskCallback): void;
					public getUpdatesForDevice(param0: com.zendesk.service.ZendeskCallback): void;
					public getAllRequests(param0: com.zendesk.service.ZendeskCallback): void;
					public getComments(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
					public addComment(param0: string, param1: com.zendesk.sdk.model.request.EndUserComment, param2: com.zendesk.service.ZendeskCallback): void;
					public getRequests(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
					public getRequest(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.CreateRequestWrapper.d.ts" />
/// <reference path="./com.zendesk.sdk.model.request.UpdateRequestWrapper.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./retrofit2.Call.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class RequestService {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.RequestService interface with the provided implementation.
					 */
					public constructor(implementation: {
						createRequest(param0: string, param1: string, param2: com.zendesk.sdk.model.request.CreateRequestWrapper): retrofit2Call;
						getAllRequests(param0: string, param1: string, param2: string): retrofit2Call;
						getManyRequests(param0: string, param1: string, param2: string, param3: string): retrofit2Call;
						getComments(param0: string, param1: string): retrofit2Call;
						addComment(param0: string, param1: string, param2: com.zendesk.sdk.model.request.UpdateRequestWrapper): retrofit2Call;
						getRequest(param0: string, param1: string): retrofit2Call;
						getTicketFormsById(param0: string, param1: string, param2: string, param3: string): retrofit2Call;
					});
					public getManyRequests(param0: string, param1: string, param2: string, param3: string): retrofit2Call;
					public addComment(param0: string, param1: string, param2: com.zendesk.sdk.model.request.UpdateRequestWrapper): retrofit2Call;
					public getRequest(param0: string, param1: string): retrofit2Call;
					public getTicketFormsById(param0: string, param1: string, param2: string, param3: string): retrofit2Call;
					public getAllRequests(param0: string, param1: string, param2: string): retrofit2Call;
					public createRequest(param0: string, param1: string, param2: com.zendesk.sdk.model.request.CreateRequestWrapper): retrofit2Call;
					public getComments(param0: string, param1: string): retrofit2Call;
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class RetryAction {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.RetryAction interface with the provided implementation.
					 */
					public constructor(implementation: {
						onRetry(): void;
					});
					public onRetry(): void;
				}
			}
		}
	}
}

import androidviewViewOnClickListener = android.view.View.OnClickListener;
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class Retryable {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.Retryable interface with the provided implementation.
					 */
					public constructor(implementation: {
						onRetryAvailable(param0: string, param1: androidviewViewOnClickListener): void;
						onRetryUnavailable(): void;
					});
					public onRetryAvailable(param0: string, param1: androidviewViewOnClickListener): void;
					public onRetryUnavailable(): void;
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class SdkOptions {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.SdkOptions interface with the provided implementation.
					 */
					public constructor(implementation: {
						overrideResourceLoadingInWebview(): boolean;
						getServiceOptions(): com.zendesk.sdk.network.SdkOptions.ServiceOptions;
					});
					public overrideResourceLoadingInWebview(): boolean;
					public getServiceOptions(): com.zendesk.sdk.network.SdkOptions.ServiceOptions;
				}
				export module SdkOptions {
					export class ServiceOptions {
						/**
						 * Constructs a new instance of the com.zendesk.sdk.network.SdkOptions$ServiceOptions interface with the provided implementation.
						 */
						public constructor(implementation: {
							getConnectionSpecs(): javautilList;
						});
						public getConnectionSpecs(): javautilList;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class SdkSettingsProvider {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.SdkSettingsProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						getSettings(param0: com.zendesk.service.ZendeskCallback): void;
					});
					public getSettings(param0: com.zendesk.service.ZendeskCallback): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./retrofit2.Call.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class SdkSettingsService {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.SdkSettingsService interface with the provided implementation.
					 */
					public constructor(implementation: {
						getSettings(param0: string): retrofit2Call;
					});
					public getSettings(param0: string): retrofit2Call;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class SettingsHelper {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.SettingsHelper interface with the provided implementation.
					 */
					public constructor(implementation: {
						loadSetting(param0: com.zendesk.service.ZendeskCallback): void;
					});
					public loadSetting(param0: com.zendesk.service.ZendeskCallback): void;
				}
			}
		}
	}
}

import javaioFile = java.io.File;
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class UploadProvider {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.UploadProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						uploadAttachment(param0: string, param1: javaioFile, param2: string, param3: com.zendesk.service.ZendeskCallback): void;
						deleteAttachment(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
					});
					public deleteAttachment(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
					public uploadAttachment(param0: string, param1: javaioFile, param2: string, param3: com.zendesk.service.ZendeskCallback): void;
				}
			}
		}
	}
}

import okhttp3RequestBody = okhttp3.RequestBody;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./okhttp3.RequestBody.d.ts" />
/// <reference path="./retrofit2.Call.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class UploadService {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.UploadService interface with the provided implementation.
					 */
					public constructor(implementation: {
						uploadAttachment(param0: string, param1: string, param2: okhttp3RequestBody): retrofit2Call;
						deleteAttachment(param0: string, param1: string): retrofit2Call;
					});
					public deleteAttachment(param0: string, param1: string): retrofit2Call;
					public uploadAttachment(param0: string, param1: string, param2: okhttp3RequestBody): retrofit2Call;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class UserProvider {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.UserProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						addTags(param0: javautilList, param1: com.zendesk.service.ZendeskCallback): void;
						deleteTags(param0: javautilList, param1: com.zendesk.service.ZendeskCallback): void;
						getUserFields(param0: com.zendesk.service.ZendeskCallback): void;
						setUserFields(param0: javautilMap, param1: com.zendesk.service.ZendeskCallback): void;
						getUser(param0: com.zendesk.service.ZendeskCallback): void;
					});
					public addTags(param0: javautilList, param1: com.zendesk.service.ZendeskCallback): void;
					public setUserFields(param0: javautilMap, param1: com.zendesk.service.ZendeskCallback): void;
					public getUser(param0: com.zendesk.service.ZendeskCallback): void;
					public deleteTags(param0: javautilList, param1: com.zendesk.service.ZendeskCallback): void;
					public getUserFields(param0: com.zendesk.service.ZendeskCallback): void;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.UserFieldRequest.d.ts" />
/// <reference path="./com.zendesk.sdk.model.request.UserTagRequest.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./retrofit2.Call.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class UserService {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.UserService interface with the provided implementation.
					 */
					public constructor(implementation: {
						addTags(param0: string, param1: com.zendesk.sdk.model.request.UserTagRequest): retrofit2Call;
						deleteTags(param0: string, param1: string): retrofit2Call;
						getUserFields(param0: string): retrofit2Call;
						setUserFields(param0: string, param1: com.zendesk.sdk.model.request.UserFieldRequest): retrofit2Call;
						getUser(param0: string): retrofit2Call;
					});
					public deleteTags(param0: string, param1: string): retrofit2Call;
					public addTags(param0: string, param1: com.zendesk.sdk.model.request.UserTagRequest): retrofit2Call;
					public getUserFields(param0: string): retrofit2Call;
					public getUser(param0: string): retrofit2Call;
					public setUserFields(param0: string, param1: com.zendesk.sdk.model.request.UserFieldRequest): retrofit2Call;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class ZendeskTracker {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.ZendeskTracker interface with the provided implementation.
					 */
					public constructor(implementation: {
						helpCenterLoaded(): void;
						helpCenterSearched(param0: string): void;
						helpCenterArticleViewed(): void;
						requestCreated(): void;
						requestUpdated(): void;
						rateMyAppRated(): void;
						rateMyAppFeedbackSent(): void;
					});
					public requestUpdated(): void;
					public rateMyAppFeedbackSent(): void;
					public helpCenterLoaded(): void;
					public helpCenterSearched(param0: string): void;
					public helpCenterArticleViewed(): void;
					public requestCreated(): void;
					public rateMyAppRated(): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class AnswersTracker {
						public rateMyAppFeedbackSent(): void;
						public helpCenterArticleViewed(): void;
						public helpCenterLoaded(): void;
						public helpCenterSearched(param0: string): void;
						public requestUpdated(): void;
						public rateMyAppRated(): void;
						public requestCreated(): void;
					}
				}
			}
		}
	}
}

import androidcontentContext = android.content.Context;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SdkOptions.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ApplicationScope {
						public getApplicationContext(): androidcontentContext;
						public newBuilder(): com.zendesk.sdk.network.impl.ApplicationScope.Builder;
						public getOAuthToken(): string;
						public getCustomFields(): javautilList;
						public isCoppaEnabled(): boolean;
						public getSdkOptions(): com.zendesk.sdk.network.SdkOptions;
						public getUrl(): string;
						public getAppId(): string;
						public getUserAgentHeader(): string;
						public getLocale(): javautilLocale;
						public isDevelopmentMode(): boolean;
						public getTicketFormId(): javalangLong;
					}
					export module ApplicationScope {
						export class Builder {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class AuthenticationLoggerHelper {
						public getLogMessage(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BaseModule {
					}
				}
			}
		}
	}
}

import daggerinternalFactory = dagger.internal.Factory;
/// <reference path="./com.zendesk.sdk.network.impl.BaseModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BaseModule_ProvideAppIdFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
						public get(): string;
						public static create(param0: com.zendesk.sdk.network.impl.BaseModule): daggerinternalFactory;
						public static proxyProvideAppId(param0: com.zendesk.sdk.network.impl.BaseModule): string;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.BaseModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BaseModule_ProvideApplicationContextFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
						public get(): androidcontentContext;
						public static create(param0: com.zendesk.sdk.network.impl.BaseModule): daggerinternalFactory;
						public static proxyProvideApplicationContext(param0: com.zendesk.sdk.network.impl.BaseModule): androidcontentContext;
					}
				}
			}
		}
	}
}

import javaxinjectProvider = javax.inject.Provider;
/// <reference path="./com.zendesk.sdk.network.impl.BaseModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.Serializer.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BaseModule_ProvideBase64SerializerFactory {
						public static create(param0: com.zendesk.sdk.network.impl.BaseModule, param1: javaxinjectProvider): daggerinternalFactory;
						public constructor(param0: com.zendesk.sdk.network.impl.BaseModule, param1: javaxinjectProvider);
						public static proxyProvideBase64Serializer(param0: com.zendesk.sdk.network.impl.BaseModule, param1: javalangObject): com.zendesk.sdk.network.impl.Serializer;
						public get(): com.zendesk.sdk.network.impl.Serializer;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.BaseModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BaseModule_ProvideConnectionSpecFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
						public static create(param0: com.zendesk.sdk.network.impl.BaseModule): daggerinternalFactory;
						public get(): javautilList;
						public static proxyProvideConnectionSpec(param0: com.zendesk.sdk.network.impl.BaseModule): javautilList;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.BaseModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.DeviceInfo.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BaseModule_ProvideDeviceInfoFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
						public get(): com.zendesk.sdk.network.impl.DeviceInfo;
						public static proxyProvideDeviceInfo(param0: com.zendesk.sdk.network.impl.BaseModule): com.zendesk.sdk.network.impl.DeviceInfo;
						public static create(param0: com.zendesk.sdk.network.impl.BaseModule): daggerinternalFactory;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.BaseModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BaseModule_ProvideLocaleFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
						public static proxyProvideLocale(param0: com.zendesk.sdk.network.impl.BaseModule): javautilLocale;
						public get(): javautilLocale;
						public static create(param0: com.zendesk.sdk.network.impl.BaseModule): daggerinternalFactory;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.BaseModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BaseModule_ProvideOAuthtokenFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
						public get(): string;
						public static create(param0: com.zendesk.sdk.network.impl.BaseModule): daggerinternalFactory;
						public static proxyProvideOAuthtoken(param0: com.zendesk.sdk.network.impl.BaseModule): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.BaseModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.Serializer.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BaseModule_ProvideSerializerFactory {
						public static create(param0: com.zendesk.sdk.network.impl.BaseModule, param1: javaxinjectProvider): daggerinternalFactory;
						public static proxyProvideSerializer(param0: com.zendesk.sdk.network.impl.BaseModule, param1: com.google.gson.Gson): com.zendesk.sdk.network.impl.Serializer;
						public constructor(param0: com.zendesk.sdk.network.impl.BaseModule, param1: javaxinjectProvider);
						public get(): com.zendesk.sdk.network.impl.Serializer;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.BaseModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BaseModule_ProvideUrlFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
						public static proxyProvideUrl(param0: com.zendesk.sdk.network.impl.BaseModule): string;
						public get(): string;
						public static create(param0: com.zendesk.sdk.network.impl.BaseModule): daggerinternalFactory;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.BaseModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BaseModule_ProvideUserAgentHeaderFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
						public get(): string;
						public static create(param0: com.zendesk.sdk.network.impl.BaseModule): daggerinternalFactory;
						public static proxyProvideUserAgentHeader(param0: com.zendesk.sdk.network.impl.BaseModule): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.BaseModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskLocaleConverter.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BaseModule_ProvideZendeskLocaleConverterFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
						public get(): com.zendesk.sdk.network.impl.ZendeskLocaleConverter;
						public static proxyProvideZendeskLocaleConverter(param0: com.zendesk.sdk.network.impl.BaseModule): com.zendesk.sdk.network.impl.ZendeskLocaleConverter;
						public static create(param0: com.zendesk.sdk.network.impl.BaseModule): daggerinternalFactory;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.BaseModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BaseModule_ProvideZendeskLocaleTagFactory {
						public static create(param0: com.zendesk.sdk.network.impl.BaseModule, param1: javaxinjectProvider, param2: javaxinjectProvider): daggerinternalFactory;
						public constructor(param0: com.zendesk.sdk.network.impl.BaseModule, param1: javaxinjectProvider, param2: javaxinjectProvider);
						public get(): string;
						public static proxyProvideZendeskLocaleTag(param0: com.zendesk.sdk.network.impl.BaseModule, param1: javalangObject, param2: javautilLocale): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BlipsFormatHelper {
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.BlipsPageView.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BlipsPageView {
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
					}
					export module BlipsPageView {
						export class Builder {
							public from(param0: com.zendesk.sdk.network.impl.BlipsPageView): com.zendesk.sdk.network.impl.BlipsPageView.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BlipsPageViewRequest extends com.zendesk.sdk.network.impl.BlipsRequest {
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BlipsProvider {
						/**
						 * Constructs a new instance of the com.zendesk.sdk.network.impl.BlipsProvider interface with the provided implementation.
						 */
						public constructor(implementation: {
							sendHelpCenterSearchBlip(param0: string): void;
							sendPageViewBlip(param0: string, param1: string): void;
						});
						public sendHelpCenterSearchBlip(param0: string): void;
						public sendPageViewBlip(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Long.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export abstract class BlipsRequest {
						public version: string;
						public timestamp: string;
						public channel: string;
						public schemaVersion: string;
						public userId: javalangLong;
						public appId: string;
						public getAppId(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./retrofit2.Call.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BlipsService {
						/**
						 * Constructs a new instance of the com.zendesk.sdk.network.impl.BlipsService interface with the provided implementation.
						 */
						public constructor(implementation: {
							send(param0: string): retrofit2Call;
						});
						public send(param0: string): retrofit2Call;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.BlipsUserAction.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BlipsUserAction {
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public toString(): string;
					}
					export module BlipsUserAction {
						export class Builder {
							public constructor();
							public withCategory(param0: string): com.zendesk.sdk.network.impl.BlipsUserAction.Builder;
							public build(): com.zendesk.sdk.network.impl.BlipsUserAction;
							public withAction(param0: string): com.zendesk.sdk.network.impl.BlipsUserAction.Builder;
							public withValue(param0: javautilMap): com.zendesk.sdk.network.impl.BlipsUserAction.Builder;
							public from(param0: com.zendesk.sdk.network.impl.BlipsUserAction): com.zendesk.sdk.network.impl.BlipsUserAction.Builder;
							public withLabel(param0: string): com.zendesk.sdk.network.impl.BlipsUserAction.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class BlipsUserActionRequest extends com.zendesk.sdk.network.impl.BlipsRequest {
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ConfigurationRuntimeException {
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.StubComponent.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.StubModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskConfig.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class DaggerStubComponent {
						public static builder(): com.zendesk.sdk.network.impl.DaggerStubComponent.Builder;
						public static create(): com.zendesk.sdk.network.impl.StubComponent;
						public inject(param0: com.zendesk.sdk.network.impl.ZendeskConfig): com.zendesk.sdk.network.impl.ZendeskConfig;
					}
					export module DaggerStubComponent {
						export class Builder {
							public build(): com.zendesk.sdk.network.impl.StubComponent;
							public stubModule(param0: com.zendesk.sdk.network.impl.StubModule): com.zendesk.sdk.network.impl.DaggerStubComponent.Builder;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.BaseModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ProviderModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.RestModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ServiceModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.SupportSdkProvidersComponent.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskConfig.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskConfigModule.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StorageModule.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class DaggerSupportSdkProvidersComponent {
						public static builder(): com.zendesk.sdk.network.impl.DaggerSupportSdkProvidersComponent.Builder;
						public inject(param0: com.zendesk.sdk.network.impl.ZendeskConfig): com.zendesk.sdk.network.impl.ZendeskConfig;
					}
					export module DaggerSupportSdkProvidersComponent {
						export class Builder {
							public baseModule(param0: com.zendesk.sdk.network.impl.BaseModule): com.zendesk.sdk.network.impl.DaggerSupportSdkProvidersComponent.Builder;
							public restModule(param0: com.zendesk.sdk.network.impl.RestModule): com.zendesk.sdk.network.impl.DaggerSupportSdkProvidersComponent.Builder;
							public providerModule(param0: com.zendesk.sdk.network.impl.ProviderModule): com.zendesk.sdk.network.impl.DaggerSupportSdkProvidersComponent.Builder;
							public storageModule(param0: com.zendesk.sdk.storage.StorageModule): com.zendesk.sdk.network.impl.DaggerSupportSdkProvidersComponent.Builder;
							public build(): com.zendesk.sdk.network.impl.SupportSdkProvidersComponent;
							public serviceModule(param0: com.zendesk.sdk.network.impl.ServiceModule): com.zendesk.sdk.network.impl.DaggerSupportSdkProvidersComponent.Builder;
							public zendeskConfigModule(param0: com.zendesk.sdk.network.impl.ZendeskConfigModule): com.zendesk.sdk.network.impl.DaggerSupportSdkProvidersComponent.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class DefaultSdkOptions {
						public constructor();
						public getServiceOptions(): com.zendesk.sdk.network.SdkOptions.ServiceOptions;
						public overrideResourceLoadingInWebview(): boolean;
					}
				}
			}
		}
	}
}

import okhttp3Cache = okhttp3.Cache;
import okhttp3InterceptorChain = okhttp3.Interceptor.Chain;
import okhttp3Response = okhttp3.Response;
/// <reference path="./com.zendesk.sdk.storage.SdkStorage.d.ts" />
/// <reference path="./okhttp3.Cache.d.ts" />
/// <reference path="./okhttp3.Response.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class DefaultZendeskUnauthorizedInterceptor {
						public constructor(param0: com.zendesk.sdk.storage.SdkStorage, param1: okhttp3Cache);
						public intercept(param0: okhttp3InterceptorChain): okhttp3Response;
						public onHttpUnauthorized(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class DeviceInfo {
						public getDeviceInfoAsMapForMetaData(): javautilMap;
						public isLowMemory(): boolean;
						public constructor(param0: androidcontentContext);
					}
				}
			}
		}
	}
}

import javalangClass = java.lang.Class;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class GsonSerializer {
						public deserialize(param0: javalangObject, param1: javalangClass): javalangObject;
						public serialize(param0: javalangObject): string;
					}
				}
			}
		}
	}
}

/// <reference path="./okhttp3.Response.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class HelpCenterCachingInterceptor {
						public intercept(param0: okhttp3InterceptorChain): okhttp3Response;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.help.HelpResponse.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class HelpResponseConverter {
						public constructor(param0: com.zendesk.sdk.model.helpcenter.help.HelpResponse);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class NoOpTracker {
						public rateMyAppFeedbackSent(): void;
						public helpCenterArticleViewed(): void;
						public helpCenterLoaded(): void;
						public helpCenterSearched(param0: string): void;
						public requestUpdated(): void;
						public rateMyAppRated(): void;
						public requestCreated(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.service.ErrorResponse.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export abstract class PassThroughErrorZendeskCallback {
						public onError(param0: com.zendesk.service.ErrorResponse): void;
						public onSuccess(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ProviderModule {
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.zendesk.sdk.network.NetworkInfoProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ProviderModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ProviderModule_InjectNetworkInfoProviderFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider);
						public static proxyInjectNetworkInfoProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: androidcontentContext): com.zendesk.sdk.network.NetworkInfoProvider;
						public get(): com.zendesk.sdk.network.NetworkInfoProvider;
						public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider): daggerinternalFactory;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.BaseProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.UserProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ProviderModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ProviderModule_InjectUserProviderFactory {
						public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider): daggerinternalFactory;
						public static proxyInjectUserProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.BaseProvider, param2: javalangObject): com.zendesk.sdk.network.UserProvider;
						public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider);
						public get(): com.zendesk.sdk.network.UserProvider;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.BaseProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SettingsHelper.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ProviderModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ProviderModule_InjectZendeskSettingsHelperFactory {
						public get(): com.zendesk.sdk.network.SettingsHelper;
						public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider);
						public static proxyInjectZendeskSettingsHelper(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.BaseProvider): com.zendesk.sdk.network.SettingsHelper;
						public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider): daggerinternalFactory;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.AccessProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ProviderModule.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ProviderModule_ProvideAccessProviderFactory {
						public static proxyProvideAccessProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.storage.IdentityStorage, param2: javalangObject): com.zendesk.sdk.network.AccessProvider;
						public get(): com.zendesk.sdk.network.AccessProvider;
						public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider): daggerinternalFactory;
						public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider);
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.BaseProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.HelpCenterProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ProviderModule.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.HelpCenterSessionCache.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ProviderModule_ProvideHelpCenterProviderFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider): daggerinternalFactory;
						public static proxyProvideHelpCenterProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.BaseProvider, param2: javalangObject, param3: com.zendesk.sdk.storage.HelpCenterSessionCache, param4: javalangObject): com.zendesk.sdk.network.HelpCenterProvider;
						public get(): com.zendesk.sdk.network.HelpCenterProvider;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.HelpCenterProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.NetworkInfoProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.PushRegistrationProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.RequestProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SdkSettingsProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SettingsHelper.d.ts" />
/// <reference path="./com.zendesk.sdk.network.UploadProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.UserProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ProviderModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ProviderStore.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ProviderModule_ProvideProviderStoreFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider, param5: javaxinjectProvider, param6: javaxinjectProvider, param7: javaxinjectProvider, param8: javaxinjectProvider);
						public static proxyProvideProviderStore(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.UserProvider, param2: com.zendesk.sdk.network.HelpCenterProvider, param3: com.zendesk.sdk.network.PushRegistrationProvider, param4: com.zendesk.sdk.network.RequestProvider, param5: com.zendesk.sdk.network.UploadProvider, param6: com.zendesk.sdk.network.SdkSettingsProvider, param7: com.zendesk.sdk.network.NetworkInfoProvider, param8: com.zendesk.sdk.network.SettingsHelper): com.zendesk.sdk.network.impl.ProviderStore;
						public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider, param5: javaxinjectProvider, param6: javaxinjectProvider, param7: javaxinjectProvider, param8: javaxinjectProvider): daggerinternalFactory;
						public get(): com.zendesk.sdk.network.impl.ProviderStore;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.BaseProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.PushRegistrationProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ProviderModule.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.PushRegistrationResponseStorage.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ProviderModule_ProvidePushRegistrationProviderFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider): daggerinternalFactory;
						public get(): com.zendesk.sdk.network.PushRegistrationProvider;
						public static proxyProvidePushRegistrationProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.BaseProvider, param2: javalangObject, param3: com.zendesk.sdk.storage.IdentityStorage, param4: com.zendesk.sdk.storage.PushRegistrationResponseStorage): com.zendesk.sdk.network.PushRegistrationProvider;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.BaseProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.RequestProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ProviderModule.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.PushRegistrationResponseStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.RequestSessionCache.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.RequestStorage.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ProviderModule_ProvideRequestProviderFactory {
						public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider, param5: javaxinjectProvider, param6: javaxinjectProvider, param7: javaxinjectProvider): daggerinternalFactory;
						public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider, param5: javaxinjectProvider, param6: javaxinjectProvider, param7: javaxinjectProvider);
						public get(): com.zendesk.sdk.network.RequestProvider;
						public static proxyProvideRequestProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.BaseProvider, param2: com.zendesk.sdk.storage.IdentityStorage, param3: javalangObject, param4: com.zendesk.sdk.storage.RequestStorage, param5: com.zendesk.sdk.storage.RequestSessionCache, param6: com.zendesk.sdk.storage.PushRegistrationResponseStorage, param7: javautilLocale): com.zendesk.sdk.network.RequestProvider;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.SdkSettingsProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ProviderModule.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkSettingsStorage.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ProviderModule_ProvideSdkSettingsProviderFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider): daggerinternalFactory;
						public static proxyProvideSdkSettingsProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javalangObject, param2: string, param3: com.zendesk.sdk.storage.SdkSettingsStorage, param4: string): com.zendesk.sdk.network.SdkSettingsProvider;
						public get(): com.zendesk.sdk.network.SdkSettingsProvider;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.BaseProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.UploadProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ProviderModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ProviderModule_ProvideUploadProviderFactory {
						public static proxyProvideUploadProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.BaseProvider, param2: javalangObject): com.zendesk.sdk.network.UploadProvider;
						public get(): com.zendesk.sdk.network.UploadProvider;
						public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider): daggerinternalFactory;
						public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider);
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.AccessProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.BaseProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SdkSettingsProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ProviderModule.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkSettingsStorage.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ProviderModule_ProvideZendeskBaseProviderFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider): daggerinternalFactory;
						public static proxyProvideZendeskBaseProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.AccessProvider, param2: com.zendesk.sdk.storage.SdkSettingsStorage, param3: com.zendesk.sdk.storage.IdentityStorage, param4: com.zendesk.sdk.network.SdkSettingsProvider): com.zendesk.sdk.network.BaseProvider;
						public get(): com.zendesk.sdk.network.BaseProvider;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.BaseProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.BlipsProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.DeviceInfo.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ProviderModule.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ProviderModule_ProvideZendeskBlipsProviderFactory {
						public get(): com.zendesk.sdk.network.impl.BlipsProvider;
						public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider, param5: javaxinjectProvider, param6: javaxinjectProvider, param7: javaxinjectProvider): daggerinternalFactory;
						public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider, param5: javaxinjectProvider, param6: javaxinjectProvider, param7: javaxinjectProvider);
						public static proxyProvideZendeskBlipsProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.BaseProvider, param2: javalangObject, param3: javautilLocale, param4: com.zendesk.sdk.storage.IdentityStorage, param5: javalangObject, param6: com.zendesk.sdk.network.impl.DeviceInfo, param7: string): com.zendesk.sdk.network.impl.BlipsProvider;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.HelpCenterProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.NetworkInfoProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.PushRegistrationProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.RequestProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SdkSettingsProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SettingsHelper.d.ts" />
/// <reference path="./com.zendesk.sdk.network.UploadProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.UserProvider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ProviderStore {
						/**
						 * Constructs a new instance of the com.zendesk.sdk.network.impl.ProviderStore interface with the provided implementation.
						 */
						public constructor(implementation: {
							userProvider(): com.zendesk.sdk.network.UserProvider;
							helpCenterProvider(): com.zendesk.sdk.network.HelpCenterProvider;
							pushRegistrationProvider(): com.zendesk.sdk.network.PushRegistrationProvider;
							requestProvider(): com.zendesk.sdk.network.RequestProvider;
							uploadProvider(): com.zendesk.sdk.network.UploadProvider;
							sdkSettingsProvider(): com.zendesk.sdk.network.SdkSettingsProvider;
							networkInfoProvider(): com.zendesk.sdk.network.NetworkInfoProvider;
							uiSettingsHelper(): com.zendesk.sdk.network.SettingsHelper;
						});
						public networkInfoProvider(): com.zendesk.sdk.network.NetworkInfoProvider;
						public helpCenterProvider(): com.zendesk.sdk.network.HelpCenterProvider;
						public requestProvider(): com.zendesk.sdk.network.RequestProvider;
						public sdkSettingsProvider(): com.zendesk.sdk.network.SdkSettingsProvider;
						public pushRegistrationProvider(): com.zendesk.sdk.network.PushRegistrationProvider;
						public uploadProvider(): com.zendesk.sdk.network.UploadProvider;
						public uiSettingsHelper(): com.zendesk.sdk.network.SettingsHelper;
						public userProvider(): com.zendesk.sdk.network.UserProvider;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class RestModule {
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.RestModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
/// <reference path="./okhttp3.Cache.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class RestModule_ProvideCacheFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.RestModule, param1: javaxinjectProvider);
						public get(): okhttp3Cache;
						public static create(param0: com.zendesk.sdk.network.impl.RestModule, param1: javaxinjectProvider): daggerinternalFactory;
						public static proxyProvideCache(param0: com.zendesk.sdk.network.impl.RestModule, param1: androidcontentContext): okhttp3Cache;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.TypeAdapter.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.RestModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class RestModule_ProvideDateTypeAdapterFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.RestModule);
						public static proxyProvideDateTypeAdapter(param0: com.zendesk.sdk.network.impl.RestModule): com.google.gson.TypeAdapter;
						public static create(param0: com.zendesk.sdk.network.impl.RestModule): daggerinternalFactory;
						public get(): com.google.gson.TypeAdapter;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.DefaultZendeskUnauthorizedInterceptor.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.RestModule.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkStorage.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
/// <reference path="./okhttp3.Cache.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class RestModule_ProvideDefaultZendeskUnauthorizedInterceptorFactory {
						public static create(param0: com.zendesk.sdk.network.impl.RestModule, param1: javaxinjectProvider, param2: javaxinjectProvider): daggerinternalFactory;
						public get(): com.zendesk.sdk.network.impl.DefaultZendeskUnauthorizedInterceptor;
						public constructor(param0: com.zendesk.sdk.network.impl.RestModule, param1: javaxinjectProvider, param2: javaxinjectProvider);
						public static proxyProvideDefaultZendeskUnauthorizedInterceptor(param0: com.zendesk.sdk.network.impl.RestModule, param1: com.zendesk.sdk.storage.SdkStorage, param2: okhttp3Cache): com.zendesk.sdk.network.impl.DefaultZendeskUnauthorizedInterceptor;
					}
				}
			}
		}
	}
}

import retrofit2convertergsonGsonConverterFactory = retrofit2.converter.gson.GsonConverterFactory;
/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.RestModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
/// <reference path="./retrofit2.converter.gson.GsonConverterFactory.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class RestModule_ProvideGsonConverterFactoryFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.RestModule, param1: javaxinjectProvider);
						public get(): retrofit2convertergsonGsonConverterFactory;
						public static create(param0: com.zendesk.sdk.network.impl.RestModule, param1: javaxinjectProvider): daggerinternalFactory;
						public static proxyProvideGsonConverterFactory(param0: com.zendesk.sdk.network.impl.RestModule, param1: com.google.gson.Gson): retrofit2convertergsonGsonConverterFactory;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.google.gson.TypeAdapter.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.RestModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class RestModule_ProvideGsonFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.RestModule, param1: javaxinjectProvider);
						public get(): com.google.gson.Gson;
						public static proxyProvideGson(param0: com.zendesk.sdk.network.impl.RestModule, param1: com.google.gson.TypeAdapter): com.google.gson.Gson;
						public static create(param0: com.zendesk.sdk.network.impl.RestModule, param1: javaxinjectProvider): daggerinternalFactory;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.HelpCenterCachingInterceptor.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.RestModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class RestModule_ProvideHelpCenterCachingInterceptorFactory {
						public static proxyProvideHelpCenterCachingInterceptor(param0: com.zendesk.sdk.network.impl.RestModule): com.zendesk.sdk.network.impl.HelpCenterCachingInterceptor;
						public constructor(param0: com.zendesk.sdk.network.impl.RestModule);
						public get(): com.zendesk.sdk.network.impl.HelpCenterCachingInterceptor;
						public static create(param0: com.zendesk.sdk.network.impl.RestModule): daggerinternalFactory;
					}
				}
			}
		}
	}
}

import okhttp3loggingHttpLoggingInterceptor = okhttp3.logging.HttpLoggingInterceptor;
/// <reference path="./com.zendesk.sdk.network.impl.RestModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./okhttp3.logging.HttpLoggingInterceptor.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class RestModule_ProvideHttpLoggingInterceptorFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.RestModule);
						public get(): okhttp3loggingHttpLoggingInterceptor;
						public static proxyProvideHttpLoggingInterceptor(param0: com.zendesk.sdk.network.impl.RestModule): okhttp3loggingHttpLoggingInterceptor;
						public static create(param0: com.zendesk.sdk.network.impl.RestModule): daggerinternalFactory;
					}
				}
			}
		}
	}
}

import okhttp3OkHttpClient = okhttp3.OkHttpClient;
/// <reference path="./com.zendesk.sdk.network.impl.DefaultZendeskUnauthorizedInterceptor.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.RestModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskRequestInterceptor.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
/// <reference path="./okhttp3.Cache.d.ts" />
/// <reference path="./okhttp3.OkHttpClient.d.ts" />
/// <reference path="./okhttp3.logging.HttpLoggingInterceptor.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class RestModule_ProvideOkHttpClientFactory {
						public get(): okhttp3OkHttpClient;
						public constructor(param0: com.zendesk.sdk.network.impl.RestModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider, param5: javaxinjectProvider, param6: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.RestModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider, param5: javaxinjectProvider, param6: javaxinjectProvider): daggerinternalFactory;
						public static proxyProvideOkHttpClient(param0: com.zendesk.sdk.network.impl.RestModule, param1: com.zendesk.sdk.network.impl.DefaultZendeskUnauthorizedInterceptor, param2: com.zendesk.sdk.network.impl.ZendeskRequestInterceptor, param3: okhttp3loggingHttpLoggingInterceptor, param4: javalangObject, param5: javautilList, param6: okhttp3Cache): okhttp3OkHttpClient;
					}
				}
			}
		}
	}
}

import retrofit2Retrofit = retrofit2.Retrofit;
/// <reference path="./com.zendesk.sdk.network.impl.RestModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
/// <reference path="./okhttp3.OkHttpClient.d.ts" />
/// <reference path="./retrofit2.Retrofit.d.ts" />
/// <reference path="./retrofit2.converter.gson.GsonConverterFactory.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class RestModule_ProvideRestAdapterFactory {
						public get(): retrofit2Retrofit;
						public static proxyProvideRestAdapter(param0: com.zendesk.sdk.network.impl.RestModule, param1: string, param2: retrofit2convertergsonGsonConverterFactory, param3: okhttp3OkHttpClient): retrofit2Retrofit;
						public constructor(param0: com.zendesk.sdk.network.impl.RestModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.RestModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider): daggerinternalFactory;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.RestModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskRequestInterceptor.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class RestModule_ProvideZendeskRequestInterceptorFactory {
						public get(): com.zendesk.sdk.network.impl.ZendeskRequestInterceptor;
						public static proxyProvideZendeskRequestInterceptor(param0: com.zendesk.sdk.network.impl.RestModule, param1: string, param2: string, param3: string): com.zendesk.sdk.network.impl.ZendeskRequestInterceptor;
						public constructor(param0: com.zendesk.sdk.network.impl.RestModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.RestModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider): daggerinternalFactory;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class Serializer {
						/**
						 * Constructs a new instance of the com.zendesk.sdk.network.impl.Serializer interface with the provided implementation.
						 */
						public constructor(implementation: {
							deserialize(param0: javalangObject, param1: javalangClass): javalangObject;
							serialize(param0: javalangObject): string;
						});
						public deserialize(param0: javalangObject, param1: javalangClass): javalangObject;
						public serialize(param0: javalangObject): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ServiceModule {
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.AccessService.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ServiceModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
/// <reference path="./retrofit2.Retrofit.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ServiceModule_ProvideAccessServiceFactory {
						public get(): com.zendesk.sdk.network.AccessService;
						public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider): daggerinternalFactory;
						public static proxyProvideAccessService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: retrofit2Retrofit): com.zendesk.sdk.network.AccessService;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.BlipsService.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ServiceModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
/// <reference path="./retrofit2.Retrofit.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ServiceModule_ProvideBlipsServiceFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider): daggerinternalFactory;
						public get(): com.zendesk.sdk.network.impl.BlipsService;
						public static proxyProvideBlipsService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: retrofit2Retrofit): com.zendesk.sdk.network.impl.BlipsService;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.HelpCenterService.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ServiceModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
/// <reference path="./retrofit2.Retrofit.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ServiceModule_ProvideHelpCenterServiceFactory {
						public get(): com.zendesk.sdk.network.HelpCenterService;
						public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider): daggerinternalFactory;
						public static proxyProvideHelpCenterService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: retrofit2Retrofit): com.zendesk.sdk.network.HelpCenterService;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.PushRegistrationService.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ServiceModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
/// <reference path="./retrofit2.Retrofit.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ServiceModule_ProvidePushRegistrationServiceFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider);
						public static proxyProvidePushRegistrationService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: retrofit2Retrofit): com.zendesk.sdk.network.PushRegistrationService;
						public get(): com.zendesk.sdk.network.PushRegistrationService;
						public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider): daggerinternalFactory;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.RequestService.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ServiceModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
/// <reference path="./retrofit2.Retrofit.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ServiceModule_ProvideRequestServiceFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider): daggerinternalFactory;
						public get(): com.zendesk.sdk.network.RequestService;
						public static proxyProvideRequestService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: retrofit2Retrofit): com.zendesk.sdk.network.RequestService;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.SdkSettingsService.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ServiceModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
/// <reference path="./retrofit2.Retrofit.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ServiceModule_ProvideSdkSettingsServiceFactory {
						public get(): com.zendesk.sdk.network.SdkSettingsService;
						public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider): daggerinternalFactory;
						public static proxyProvideSdkSettingsService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: retrofit2Retrofit): com.zendesk.sdk.network.SdkSettingsService;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.UploadService.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ServiceModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
/// <reference path="./retrofit2.Retrofit.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ServiceModule_ProvideUploadServiceFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider): daggerinternalFactory;
						public static proxyProvideUploadService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: retrofit2Retrofit): com.zendesk.sdk.network.UploadService;
						public get(): com.zendesk.sdk.network.UploadService;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.UserService.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ServiceModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
/// <reference path="./retrofit2.Retrofit.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ServiceModule_ProvideUserServiceFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider);
						public static proxyProvideUserService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: retrofit2Retrofit): com.zendesk.sdk.network.UserService;
						public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider): daggerinternalFactory;
						public get(): com.zendesk.sdk.network.UserService;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.AccessService.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ServiceModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskAccessService.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ServiceModule_ProvideZendeskAccessServiceFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider): daggerinternalFactory;
						public static proxyProvideZendeskAccessService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: com.zendesk.sdk.network.AccessService): com.zendesk.sdk.network.impl.ZendeskAccessService;
						public get(): com.zendesk.sdk.network.impl.ZendeskAccessService;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.HelpCenterService.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ServiceModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskHelpCenterService.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ServiceModule_ProvideZendeskHelpCenterServiceFactory {
						public static proxyProvideZendeskHelpCenterService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: com.zendesk.sdk.network.HelpCenterService): com.zendesk.sdk.network.impl.ZendeskHelpCenterService;
						public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider): daggerinternalFactory;
						public get(): com.zendesk.sdk.network.impl.ZendeskHelpCenterService;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.PushRegistrationService.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ServiceModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskPushRegistrationService.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ServiceModule_ProvideZendeskPushRegistrationServiceFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider): daggerinternalFactory;
						public get(): com.zendesk.sdk.network.impl.ZendeskPushRegistrationService;
						public static proxyProvideZendeskPushRegistrationService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: com.zendesk.sdk.network.PushRegistrationService): com.zendesk.sdk.network.impl.ZendeskPushRegistrationService;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.RequestService.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ServiceModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskRequestService.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ServiceModule_ProvideZendeskRequestServiceFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider): daggerinternalFactory;
						public get(): com.zendesk.sdk.network.impl.ZendeskRequestService;
						public static proxyProvideZendeskRequestService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: com.zendesk.sdk.network.RequestService): com.zendesk.sdk.network.impl.ZendeskRequestService;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.SdkSettingsService.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ServiceModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskSdkSettingsService.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ServiceModule_ProvideZendeskSdkSettingsServiceFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider): daggerinternalFactory;
						public get(): com.zendesk.sdk.network.impl.ZendeskSdkSettingsService;
						public static proxyProvideZendeskSdkSettingsService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: com.zendesk.sdk.network.SdkSettingsService): com.zendesk.sdk.network.impl.ZendeskSdkSettingsService;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.UploadService.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ServiceModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskUploadService.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ServiceModule_ProvideZendeskUploadServiceFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider);
						public static proxyProvideZendeskUploadService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: com.zendesk.sdk.network.UploadService): com.zendesk.sdk.network.impl.ZendeskUploadService;
						public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider): daggerinternalFactory;
						public get(): com.zendesk.sdk.network.impl.ZendeskUploadService;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.UserService.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ServiceModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskUserService.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ServiceModule_ProvideZendeskUserServiceFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider);
						public get(): com.zendesk.sdk.network.impl.ZendeskUserService;
						public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javaxinjectProvider): daggerinternalFactory;
						public static proxyProvideZendeskUserService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: com.zendesk.sdk.network.UserService): com.zendesk.sdk.network.impl.ZendeskUserService;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.ArticleVote.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class StubArticleVoteStorage {
						public constructor();
						public storeArticleVote(param0: javalangLong, param1: com.zendesk.sdk.model.helpcenter.ArticleVote): void;
						public getStoredArticleVote(param0: javalangLong): com.zendesk.sdk.model.helpcenter.ArticleVote;
						public removeStoredArticleVote(param0: javalangLong): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.ZendeskConfig.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class StubComponent {
						/**
						 * Constructs a new instance of the com.zendesk.sdk.network.impl.StubComponent interface with the provided implementation.
						 */
						public constructor(implementation: {
							inject(param0: com.zendesk.sdk.network.impl.ZendeskConfig): com.zendesk.sdk.network.impl.ZendeskConfig;
						});
						public inject(param0: com.zendesk.sdk.network.impl.ZendeskConfig): com.zendesk.sdk.network.impl.ZendeskConfig;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.LastSearch.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class StubHelpCenterSessionCache {
						public getLastSearch(): com.zendesk.sdk.model.helpcenter.LastSearch;
						public unsetUniqueSearchResultClick(): void;
						public setLastSearch(param0: string, param1: number): void;
						public isUniqueSearchResultClick(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class StubIdentity {
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.access.AccessToken.d.ts" />
/// <reference path="./com.zendesk.sdk.model.access.Identity.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class StubIdentityStorage {
						public getUserId(): javalangLong;
						public getUUID(): string;
						public storeUserId(param0: javalangLong): void;
						public anonymiseIdentity(): com.zendesk.sdk.model.access.Identity;
						public getIdentity(): com.zendesk.sdk.model.access.Identity;
						public clearUserData(): void;
						public getCacheKey(): string;
						public storeAccessToken(param0: com.zendesk.sdk.model.access.AccessToken): void;
						public storeIdentity(param0: com.zendesk.sdk.model.access.Identity): void;
						public getStoredAccessToken(): com.zendesk.sdk.model.access.AccessToken;
						public getStoredAccessTokenAsBearerToken(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class StubModule {
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.ProviderStore.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.StubModule.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskConfigHelper.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StorageStore.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class StubModule_InjectStubZendeskConfigHelperFactory {
						public static proxyInjectStubZendeskConfigHelper(param0: com.zendesk.sdk.network.impl.StubModule, param1: com.zendesk.sdk.network.impl.ProviderStore, param2: com.zendesk.sdk.storage.StorageStore): com.zendesk.sdk.network.impl.ZendeskConfigHelper;
						public static create(param0: com.zendesk.sdk.network.impl.StubModule, param1: javaxinjectProvider, param2: javaxinjectProvider): daggerinternalFactory;
						public get(): com.zendesk.sdk.network.impl.ZendeskConfigHelper;
						public constructor(param0: com.zendesk.sdk.network.impl.StubModule, param1: javaxinjectProvider, param2: javaxinjectProvider);
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.ProviderStore.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.StubModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class StubModule_ProvideStubProviderStoreFactory {
						public static create(param0: com.zendesk.sdk.network.impl.StubModule): daggerinternalFactory;
						public static proxyProvideStubProviderStore(param0: com.zendesk.sdk.network.impl.StubModule): com.zendesk.sdk.network.impl.ProviderStore;
						public get(): com.zendesk.sdk.network.impl.ProviderStore;
						public constructor(param0: com.zendesk.sdk.network.impl.StubModule);
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.StubModule.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StorageStore.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class StubModule_ProvideStubStorageStoreFactory {
						public static create(param0: com.zendesk.sdk.network.impl.StubModule): daggerinternalFactory;
						public static proxyProvideStubStorageStore(param0: com.zendesk.sdk.network.impl.StubModule): com.zendesk.sdk.storage.StorageStore;
						public get(): com.zendesk.sdk.storage.StorageStore;
						public constructor(param0: com.zendesk.sdk.network.impl.StubModule);
					}
				}
			}
		}
	}
}

import javalangreflectMethod = java.lang.reflect.Method;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Method.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class StubProviderFactory {
					}
					export module StubProviderFactory {
						export class ZendeskCallbackInvocationHandler {
							public invoke(param0: javalangObject, param1: javalangreflectMethod, param2: native.Array<javalangObject>): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.HelpCenterProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.NetworkInfoProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.PushRegistrationProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.RequestProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SdkSettingsProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SettingsHelper.d.ts" />
/// <reference path="./com.zendesk.sdk.network.UploadProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.UserProvider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class StubProviderStore {
						public networkInfoProvider(): com.zendesk.sdk.network.NetworkInfoProvider;
						public helpCenterProvider(): com.zendesk.sdk.network.HelpCenterProvider;
						public requestProvider(): com.zendesk.sdk.network.RequestProvider;
						public sdkSettingsProvider(): com.zendesk.sdk.network.SdkSettingsProvider;
						public pushRegistrationProvider(): com.zendesk.sdk.network.PushRegistrationProvider;
						public uploadProvider(): com.zendesk.sdk.network.UploadProvider;
						public uiSettingsHelper(): com.zendesk.sdk.network.SettingsHelper;
						public userProvider(): com.zendesk.sdk.network.UserProvider;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.push.PushRegistrationResponse.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class StubPushRegistrationResponseStorage {
						public constructor();
						public getPushRegistrationResponse(): com.zendesk.sdk.model.push.PushRegistrationResponse;
						public clearUserData(): void;
						public getCacheKey(): string;
						public hasStoredPushRegistrationResponse(): boolean;
						public storePushRegistrationResponse(param0: com.zendesk.sdk.model.push.PushRegistrationResponse): void;
						public removePushRegistrationResponse(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.RequestUpdates.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class StubRequestStorage {
						public getStoredRequestIds(): javautilList;
						public hasStoredRequestUpdates(): boolean;
						public getRequestUpdates(): com.zendesk.sdk.model.request.RequestUpdates;
						public clearUserData(): void;
						public getCacheKey(): string;
						public storeRequestId(param0: string): void;
						public setCommentCount(param0: string, param1: number): void;
						public getCommentCount(param0: string): javalangInteger;
						public markRequestAsRead(param0: string): void;
						public getRequestUpdatesTimestamp(): number;
						public setRequestUpdates(param0: com.zendesk.sdk.model.request.RequestUpdates): void;
					}
				}
			}
		}
	}
}

import javautilconcurrentTimeUnit = java.util.concurrent.TimeUnit;
/// <reference path="./com.zendesk.sdk.model.settings.SafeMobileSettings.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class StubSdkSettingsStorage {
						public hasStoredSdkSettings(): boolean;
						public areSettingsUpToDate(param0: number, param1: javautilconcurrentTimeUnit): boolean;
						public getStoredSettings(): com.zendesk.sdk.model.settings.SafeMobileSettings;
						public deleteStoredSettings(): void;
						public setStoredSettings(param0: com.zendesk.sdk.model.settings.SafeMobileSettings): void;
					}
				}
			}
		}
	}
}

import javautilSet = java.util.Set;
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class StubSdkStorage {
						public registerUserStorage(param0: com.zendesk.sdk.storage.SdkStorage.UserStorage): void;
						public clearUserData(): void;
						public getUserStorage(): javautilSet;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.storage.ArticleVoteStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.HelpCenterSessionCache.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.PushRegistrationResponseStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.RequestStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkSettingsStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkStorage.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class StubStorageStore {
						public sdkSettingsStorage(): com.zendesk.sdk.storage.SdkSettingsStorage;
						public identityStorage(): com.zendesk.sdk.storage.IdentityStorage;
						public requestStorage(): com.zendesk.sdk.storage.RequestStorage;
						public helpCenterSessionCache(): com.zendesk.sdk.storage.HelpCenterSessionCache;
						public sdkStorage(): com.zendesk.sdk.storage.SdkStorage;
						public pushStorage(): com.zendesk.sdk.storage.PushRegistrationResponseStorage;
						public voteStorage(): com.zendesk.sdk.storage.ArticleVoteStorage;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.ZendeskConfig.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class SupportSdkProvidersComponent {
						/**
						 * Constructs a new instance of the com.zendesk.sdk.network.impl.SupportSdkProvidersComponent interface with the provided implementation.
						 */
						public constructor(implementation: {
							inject(param0: com.zendesk.sdk.network.impl.ZendeskConfig): com.zendesk.sdk.network.impl.ZendeskConfig;
						});
						public inject(param0: com.zendesk.sdk.network.impl.ZendeskConfig): com.zendesk.sdk.network.impl.ZendeskConfig;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.access.AnonymousIdentity.d.ts" />
/// <reference path="./com.zendesk.sdk.model.access.JwtIdentity.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskAccessService.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskAccessProvider {
						public constructor(param0: com.zendesk.sdk.storage.IdentityStorage, param1: com.zendesk.sdk.network.impl.ZendeskAccessService);
						public getAndStoreAuthTokenViaJwt(param0: com.zendesk.sdk.model.access.JwtIdentity, param1: com.zendesk.service.ZendeskCallback): void;
						public getAndStoreAuthTokenViaAnonymous(param0: com.zendesk.sdk.model.access.AnonymousIdentity, param1: com.zendesk.service.ZendeskCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.AccessService.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskAccessService {
						public constructor(param0: com.zendesk.sdk.network.AccessService);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskBase64Serializer {
						public deserialize(param0: javalangObject, param1: javalangClass): javalangObject;
						public serialize(param0: javalangObject): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.settings.SafeMobileSettings.d.ts" />
/// <reference path="./com.zendesk.sdk.network.AccessProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SdkSettingsProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkSettingsStorage.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskBaseProvider {
						public getSdkSettings(param0: com.zendesk.service.ZendeskCallback): void;
						public getAccessToken(param0: com.zendesk.sdk.model.settings.SafeMobileSettings, param1: com.zendesk.service.ZendeskCallback): void;
						public constructor(param0: com.zendesk.sdk.network.AccessProvider, param1: com.zendesk.sdk.storage.SdkSettingsStorage, param2: com.zendesk.sdk.storage.IdentityStorage, param3: com.zendesk.sdk.network.SdkSettingsProvider);
						public configureSdk(param0: com.zendesk.service.ZendeskCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskBlipsProvider {
						public sendHelpCenterSearchBlip(param0: string): void;
						public sendPageViewBlip(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.zendesk.sdk.model.access.Identity.d.ts" />
/// <reference path="./com.zendesk.sdk.model.settings.SafeMobileSettings.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SdkOptions.d.ts" />
/// <reference path="./com.zendesk.sdk.network.ZendeskTracker.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ProviderStore.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StorageStore.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskConfig {
						public static INSTANCE: com.zendesk.sdk.network.impl.ZendeskConfig;
						public static HEADER_SUFFIX_MAX_LENGTH: number;
						public getMobileSettings(): com.zendesk.sdk.model.settings.SafeMobileSettings;
						public setDeviceLocale(param0: javautilLocale): void;
						public static valueOf(param0: string): com.zendesk.sdk.network.impl.ZendeskConfig;
						public isInitialized(): boolean;
						public getTicketFormId(): javalangLong;
						public enablePushWithIdentifier(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
						public getApplicationId(): string;
						public getOauthClientId(): string;
						public getCustomFields(): javautilList;
						public getTracker(): com.zendesk.sdk.network.ZendeskTracker;
						public getZendeskUrl(): string;
						public disablePush(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
						public storage(): com.zendesk.sdk.storage.StorageStore;
						public isAuthenticationAvailable(): boolean;
						public enablePushWithUAChannelId(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
						public setCustomFields(param0: javautilList): void;
						public isCoppaEnabled(): boolean;
						public provider(): com.zendesk.sdk.network.impl.ProviderStore;
						public setSdkOptions(param0: com.zendesk.sdk.network.SdkOptions): void;
						public setIdentity(param0: com.zendesk.sdk.model.access.Identity): void;
						public static values(): native.Array<com.zendesk.sdk.network.impl.ZendeskConfig>;
						public setTicketFormId(param0: javalangLong): void;
						public setCoppaEnabled(param0: boolean): void;
						public getSdkOptions(): com.zendesk.sdk.network.SdkOptions;
						public init(param0: androidcontentContext, param1: string, param2: string, param3: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.ProviderStore.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StorageStore.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskConfigHelper {
						public getProviderStore(): com.zendesk.sdk.network.impl.ProviderStore;
						public getStorageStore(): com.zendesk.sdk.storage.StorageStore;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskConfigModule {
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.impl.ProviderStore.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskConfigHelper.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskConfigModule.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StorageStore.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskConfigModule_ProvideZendeskConfigHelperFactory {
						public constructor(param0: com.zendesk.sdk.network.impl.ZendeskConfigModule, param1: javaxinjectProvider, param2: javaxinjectProvider);
						public static create(param0: com.zendesk.sdk.network.impl.ZendeskConfigModule, param1: javaxinjectProvider, param2: javaxinjectProvider): daggerinternalFactory;
						public get(): com.zendesk.sdk.network.impl.ZendeskConfigHelper;
						public static proxyProvideZendeskConfigHelper(param0: com.zendesk.sdk.network.impl.ZendeskConfigModule, param1: com.zendesk.sdk.network.impl.ProviderStore, param2: com.zendesk.sdk.storage.StorageStore): com.zendesk.sdk.network.impl.ZendeskConfigHelper;
					}
				}
			}
		}
	}
}

import daggerMembersInjector = dagger.MembersInjector;
/// <reference path="./com.zendesk.sdk.network.impl.ZendeskConfig.d.ts" />
/// <reference path="./dagger.MembersInjector.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskConfig_MembersInjector {
						public static injectZendeskConfigHelper(param0: com.zendesk.sdk.network.impl.ZendeskConfig, param1: javaxinjectProvider): void;
						public constructor(param0: javaxinjectProvider);
						public static create(param0: javaxinjectProvider): daggerMembersInjector;
						public injectMembers(param0: com.zendesk.sdk.network.impl.ZendeskConfig): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskDateTypeAdapter {
						public constructor();
						public read(param0: com.google.gson.stream.JsonReader): javautilDate;
						public write(param0: com.google.gson.stream.JsonWriter, param1: javautilDate): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.Article.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.AttachmentType.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.HelpCenterSearch.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.ListArticleQuery.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.help.HelpRequest.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskHelpCenterProvider {
						public submitRecordArticleView(param0: com.zendesk.sdk.model.helpcenter.Article, param1: javautilLocale, param2: com.zendesk.service.ZendeskCallback): void;
						public listArticlesFlat(param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback): void;
						public getCategories(param0: com.zendesk.service.ZendeskCallback): void;
						public getArticle(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
						public getSuggestedArticles(param0: com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch, param1: com.zendesk.service.ZendeskCallback): void;
						public listArticles(param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback): void;
						public getAttachments(param0: javalangLong, param1: com.zendesk.sdk.model.helpcenter.AttachmentType, param2: com.zendesk.service.ZendeskCallback): void;
						public getSections(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
						public searchArticles(param0: com.zendesk.sdk.model.helpcenter.HelpCenterSearch, param1: com.zendesk.service.ZendeskCallback): void;
						public getCategory(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
						public getArticles(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
						public downvoteArticle(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
						public getHelp(param0: com.zendesk.sdk.model.helpcenter.help.HelpRequest, param1: com.zendesk.service.ZendeskCallback): void;
						public upvoteArticle(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
						public getSection(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
						public deleteVote(param0: javalangLong, param1: com.zendesk.service.ZendeskCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.AttachmentType.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.RecordArticleViewRequest.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskHelpCenterService {
						public downvoteArticle(param0: string, param1: javalangLong, param2: string, param3: com.zendesk.service.ZendeskCallback): void;
						public getArticle(param0: string, param1: javalangLong, param2: javautilLocale, param3: string, param4: com.zendesk.service.ZendeskCallback): void;
						public getCategories(param0: string, param1: javautilLocale, param2: com.zendesk.service.ZendeskCallback): void;
						public getSuggestedArticles(param0: string, param1: string, param2: javautilLocale, param3: string, param4: javalangLong, param5: javalangLong, param6: com.zendesk.service.ZendeskCallback): void;
						public getSectionById(param0: string, param1: javalangLong, param2: javautilLocale, param3: com.zendesk.service.ZendeskCallback): void;
						public listArticles(param0: string, param1: string, param2: javautilLocale, param3: string, param4: string, param5: string, param6: javalangInteger, param7: javalangInteger, param8: com.zendesk.service.ZendeskCallback): void;
						public getArticlesForSection(param0: string, param1: javalangLong, param2: javautilLocale, param3: string, param4: com.zendesk.service.ZendeskCallback): void;
						public getAttachments(param0: string, param1: javautilLocale, param2: javalangLong, param3: com.zendesk.sdk.model.helpcenter.AttachmentType, param4: com.zendesk.service.ZendeskCallback): void;
						public getCategoryById(param0: string, param1: javalangLong, param2: javautilLocale, param3: com.zendesk.service.ZendeskCallback): void;
						public searchArticles(param0: string, param1: string, param2: javautilLocale, param3: string, param4: string, param5: string, param6: string, param7: javalangInteger, param8: javalangInteger, param9: com.zendesk.service.ZendeskCallback): void;
						public submitRecordArticleView(param0: string, param1: javalangLong, param2: javautilLocale, param3: com.zendesk.sdk.model.helpcenter.RecordArticleViewRequest, param4: com.zendesk.service.ZendeskCallback): void;
						public getSectionsForCategory(param0: string, param1: javalangLong, param2: javautilLocale, param3: com.zendesk.service.ZendeskCallback): void;
						public upvoteArticle(param0: string, param1: javalangLong, param2: string, param3: com.zendesk.service.ZendeskCallback): void;
						public deleteVote(param0: string, param1: javalangLong, param2: com.zendesk.service.ZendeskCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskLocaleConverter {
					}
				}
			}
		}
	}
}

import androidcontentIntent = android.content.Intent;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.zendesk.sdk.network.NetworkAware.d.ts" />
/// <reference path="./com.zendesk.sdk.network.RetryAction.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskNetworkInfoProvider {
						public addNetworkAwareListener(param0: javalangInteger, param1: com.zendesk.sdk.network.NetworkAware): void;
						public removeRetryAction(param0: javalangInteger): void;
						public unregister(): void;
						public onNetworkAvailable(): void;
						public onNetworkUnavailable(): void;
						public register(): void;
						public clearNetworkAwareListeners(): void;
						public clearRetryActions(): void;
						public removeNetworkAwareListener(param0: javalangInteger): void;
						public isNetworkAvailable(): boolean;
						public addRetryAction(param0: javalangInteger, param1: com.zendesk.sdk.network.RetryAction): void;
					}
					export module ZendeskNetworkInfoProvider {
						export class NetworkAvailabilityBroadcastReceiver {
							public onReceive(param0: androidcontentContext, param1: androidcontentIntent): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.HelpCenterProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.NetworkInfoProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.PushRegistrationProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.RequestProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SdkSettingsProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SettingsHelper.d.ts" />
/// <reference path="./com.zendesk.sdk.network.UploadProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.UserProvider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskProviderStore {
						public networkInfoProvider(): com.zendesk.sdk.network.NetworkInfoProvider;
						public helpCenterProvider(): com.zendesk.sdk.network.HelpCenterProvider;
						public requestProvider(): com.zendesk.sdk.network.RequestProvider;
						public sdkSettingsProvider(): com.zendesk.sdk.network.SdkSettingsProvider;
						public pushRegistrationProvider(): com.zendesk.sdk.network.PushRegistrationProvider;
						public uploadProvider(): com.zendesk.sdk.network.UploadProvider;
						public uiSettingsHelper(): com.zendesk.sdk.network.SettingsHelper;
						public userProvider(): com.zendesk.sdk.network.UserProvider;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskPushRegistrationProvider {
						public registerDeviceWithUAChannelId(param0: string, param1: javautilLocale, param2: com.zendesk.service.ZendeskCallback): void;
						public registerDeviceWithIdentifier(param0: string, param1: javautilLocale, param2: com.zendesk.service.ZendeskCallback): void;
						public unregisterDevice(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
					}
					export module ZendeskPushRegistrationProvider {
						export class TokenType {
							public static Identifier: com.zendesk.sdk.network.impl.ZendeskPushRegistrationProvider.TokenType;
							public static UrbanAirshipChannelId: com.zendesk.sdk.network.impl.ZendeskPushRegistrationProvider.TokenType;
							public static values(): native.Array<com.zendesk.sdk.network.impl.ZendeskPushRegistrationProvider.TokenType>;
							public static valueOf(param0: string): com.zendesk.sdk.network.impl.ZendeskPushRegistrationProvider.TokenType;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.push.PushRegistrationRequestWrapper.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskPushRegistrationService {
						public registerDevice(param0: string, param1: com.zendesk.sdk.model.push.PushRegistrationRequestWrapper, param2: com.zendesk.service.ZendeskCallback): void;
						public unregisterDevice(param0: string, param1: string, param2: com.zendesk.service.ZendeskCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./okhttp3.Response.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskRequestInterceptor {
						public intercept(param0: okhttp3InterceptorChain): okhttp3Response;
						public constructor(param0: string, param1: string, param2: string);
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.CreateRequest.d.ts" />
/// <reference path="./com.zendesk.sdk.model.request.EndUserComment.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskRequestProvider {
						public addComment(param0: string, param1: com.zendesk.sdk.model.request.EndUserComment, param2: com.zendesk.service.ZendeskCallback): void;
						public getComments(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
						public getRequest(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
						public getUpdatesForDevice(param0: com.zendesk.service.ZendeskCallback): void;
						public createRequest(param0: com.zendesk.sdk.model.request.CreateRequest, param1: com.zendesk.service.ZendeskCallback): void;
						public getTicketFormsById(param0: javautilList, param1: com.zendesk.service.ZendeskCallback): void;
						public getAllRequests(param0: com.zendesk.service.ZendeskCallback): void;
						public getRequests(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
					}
					export module ZendeskRequestProvider {
						export class RequestUpdatesCacheCallback extends com.zendesk.sdk.network.impl.PassThroughErrorZendeskCallback {
							public onSuccess(param0: javalangObject): void;
							public onSuccess(param0: javautilList): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.CreateRequest.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskRequestService {
						public createRequest(param0: string, param1: string, param2: com.zendesk.sdk.model.request.CreateRequest, param3: com.zendesk.service.ZendeskCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskSdkSettingsProvider {
						public getSettings(param0: com.zendesk.service.ZendeskCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskSdkSettingsService {
						public getSettings(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.BaseProvider.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskSettingsHelper {
						public constructor(param0: com.zendesk.sdk.network.BaseProvider);
						public loadSetting(param0: com.zendesk.service.ZendeskCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskUploadProvider {
						public uploadAttachment(param0: string, param1: javaioFile, param2: string, param3: com.zendesk.service.ZendeskCallback): void;
						public deleteAttachment(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.network.UploadService.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskUploadService {
						public constructor(param0: com.zendesk.sdk.network.UploadService);
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskUserProvider {
						public setUserFields(param0: javautilMap, param1: com.zendesk.service.ZendeskCallback): void;
						public getUser(param0: com.zendesk.service.ZendeskCallback): void;
						public deleteTags(param0: javautilList, param1: com.zendesk.service.ZendeskCallback): void;
						public getUserFields(param0: com.zendesk.service.ZendeskCallback): void;
						public addTags(param0: javautilList, param1: com.zendesk.service.ZendeskCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskUserService {
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module power {
				export class BatteryStateBroadcastReceiver {
					public onReceive(param0: androidcontentContext, param1: androidcontentIntent): void;
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module power {
				export class PowerConfig {
					public static FIFTEEN_PERCENT_BATTERY_CHARGE: number;
					public static THIRTY_PERCENT_BATTERY_CHARGE: number;
					public isBatteryLow(): boolean;
					public static getInstance(param0: androidcontentContext): com.zendesk.sdk.power.PowerConfig;
					public isGlobalSyncEnabled(): boolean;
					public isBatteryOk(): boolean;
					public isGlobalSyncDisabled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module providers {
				export class BuildConfig {
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.ArticleVote.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class ArticleVoteStorage {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.storage.ArticleVoteStorage interface with the provided implementation.
					 */
					public constructor(implementation: {
						storeArticleVote(param0: javalangLong, param1: com.zendesk.sdk.model.helpcenter.ArticleVote): void;
						getStoredArticleVote(param0: javalangLong): com.zendesk.sdk.model.helpcenter.ArticleVote;
						removeStoredArticleVote(param0: javalangLong): void;
					});
					public getStoredArticleVote(param0: javalangLong): com.zendesk.sdk.model.helpcenter.ArticleVote;
					public removeStoredArticleVote(param0: javalangLong): void;
					public storeArticleVote(param0: javalangLong, param1: com.zendesk.sdk.model.helpcenter.ArticleVote): void;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.LastSearch.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class HelpCenterSessionCache {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.storage.HelpCenterSessionCache interface with the provided implementation.
					 */
					public constructor(implementation: {
						getLastSearch(): com.zendesk.sdk.model.helpcenter.LastSearch;
						setLastSearch(param0: string, param1: number): void;
						unsetUniqueSearchResultClick(): void;
						isUniqueSearchResultClick(): boolean;
					});
					public getLastSearch(): com.zendesk.sdk.model.helpcenter.LastSearch;
					public unsetUniqueSearchResultClick(): void;
					public setLastSearch(param0: string, param1: number): void;
					public isUniqueSearchResultClick(): boolean;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.access.AccessToken.d.ts" />
/// <reference path="./com.zendesk.sdk.model.access.Identity.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class IdentityStorage {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.storage.IdentityStorage interface with the provided implementation.
					 */
					public constructor(implementation: {
						storeAccessToken(param0: com.zendesk.sdk.model.access.AccessToken): void;
						getStoredAccessToken(): com.zendesk.sdk.model.access.AccessToken;
						storeUserId(param0: javalangLong): void;
						getUserId(): javalangLong;
						getStoredAccessTokenAsBearerToken(): string;
						getUUID(): string;
						storeIdentity(param0: com.zendesk.sdk.model.access.Identity): void;
						getIdentity(): com.zendesk.sdk.model.access.Identity;
						anonymiseIdentity(): com.zendesk.sdk.model.access.Identity;
						clearUserData(): void;
						getCacheKey(): string;
					});
					public storeAccessToken(param0: com.zendesk.sdk.model.access.AccessToken): void;
					public getStoredAccessToken(): com.zendesk.sdk.model.access.AccessToken;
					public getUserId(): javalangLong;
					public getIdentity(): com.zendesk.sdk.model.access.Identity;
					public storeUserId(param0: javalangLong): void;
					public anonymiseIdentity(): com.zendesk.sdk.model.access.Identity;
					public getCacheKey(): string;
					public getUUID(): string;
					public getStoredAccessTokenAsBearerToken(): string;
					public clearUserData(): void;
					public storeIdentity(param0: com.zendesk.sdk.model.access.Identity): void;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.push.PushRegistrationResponse.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class PushRegistrationResponseStorage {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.storage.PushRegistrationResponseStorage interface with the provided implementation.
					 */
					public constructor(implementation: {
						storePushRegistrationResponse(param0: com.zendesk.sdk.model.push.PushRegistrationResponse): void;
						getPushRegistrationResponse(): com.zendesk.sdk.model.push.PushRegistrationResponse;
						hasStoredPushRegistrationResponse(): boolean;
						removePushRegistrationResponse(): void;
						clearUserData(): void;
						getCacheKey(): string;
					});
					public hasStoredPushRegistrationResponse(): boolean;
					public storePushRegistrationResponse(param0: com.zendesk.sdk.model.push.PushRegistrationResponse): void;
					public removePushRegistrationResponse(): void;
					public getPushRegistrationResponse(): com.zendesk.sdk.model.push.PushRegistrationResponse;
					public getCacheKey(): string;
					public clearUserData(): void;
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class RequestSessionCache {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.storage.RequestSessionCache interface with the provided implementation.
					 */
					public constructor(implementation: {
						updateTicketFormCache(param0: javautilList): void;
						getTicketFormsById(param0: javautilList): javautilList;
						containsAllTicketForms(param0: javautilList): boolean;
					});
					public getTicketFormsById(param0: javautilList): javautilList;
					public containsAllTicketForms(param0: javautilList): boolean;
					public updateTicketFormCache(param0: javautilList): void;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.RequestUpdates.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class RequestStorage {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.storage.RequestStorage interface with the provided implementation.
					 */
					public constructor(implementation: {
						getStoredRequestIds(): javautilList;
						storeRequestId(param0: string): void;
						setCommentCount(param0: string, param1: number): void;
						getCommentCount(param0: string): javalangInteger;
						hasStoredRequestUpdates(): boolean;
						getRequestUpdatesTimestamp(): number;
						setRequestUpdates(param0: com.zendesk.sdk.model.request.RequestUpdates): void;
						markRequestAsRead(param0: string): void;
						getRequestUpdates(): com.zendesk.sdk.model.request.RequestUpdates;
						clearUserData(): void;
						getCacheKey(): string;
					});
					public getStoredRequestIds(): javautilList;
					public markRequestAsRead(param0: string): void;
					public getRequestUpdatesTimestamp(): number;
					public getRequestUpdates(): com.zendesk.sdk.model.request.RequestUpdates;
					public setRequestUpdates(param0: com.zendesk.sdk.model.request.RequestUpdates): void;
					public storeRequestId(param0: string): void;
					public getCacheKey(): string;
					public hasStoredRequestUpdates(): boolean;
					public setCommentCount(param0: string, param1: number): void;
					public clearUserData(): void;
					public getCommentCount(param0: string): javalangInteger;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.settings.SafeMobileSettings.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class SdkSettingsStorage {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.storage.SdkSettingsStorage interface with the provided implementation.
					 */
					public constructor(implementation: {
						hasStoredSdkSettings(): boolean;
						areSettingsUpToDate(param0: number, param1: javautilconcurrentTimeUnit): boolean;
						getStoredSettings(): com.zendesk.sdk.model.settings.SafeMobileSettings;
						setStoredSettings(param0: com.zendesk.sdk.model.settings.SafeMobileSettings): void;
						deleteStoredSettings(): void;
					});
					public hasStoredSdkSettings(): boolean;
					public areSettingsUpToDate(param0: number, param1: javautilconcurrentTimeUnit): boolean;
					public setStoredSettings(param0: com.zendesk.sdk.model.settings.SafeMobileSettings): void;
					public getStoredSettings(): com.zendesk.sdk.model.settings.SafeMobileSettings;
					public deleteStoredSettings(): void;
				}
			}
		}
	}
}

/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class SdkStorage {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.storage.SdkStorage interface with the provided implementation.
					 */
					public constructor(implementation: {
						registerUserStorage(param0: com.zendesk.sdk.storage.SdkStorage.UserStorage): void;
						clearUserData(): void;
						getUserStorage(): javautilSet;
					});
					public registerUserStorage(param0: com.zendesk.sdk.storage.SdkStorage.UserStorage): void;
					public getUserStorage(): javautilSet;
					public clearUserData(): void;
				}
				export module SdkStorage {
					export class UserStorage {
						/**
						 * Constructs a new instance of the com.zendesk.sdk.storage.SdkStorage$UserStorage interface with the provided implementation.
						 */
						public constructor(implementation: {
							clearUserData(): void;
							getCacheKey(): string;
						});
						public clearUserData(): void;
						public getCacheKey(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class StorageModule {
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.ArticleVoteStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StorageModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class StorageModule_ProvideArticleVoteStorageFactory {
					public constructor(param0: com.zendesk.sdk.storage.StorageModule, param1: javaxinjectProvider, param2: javaxinjectProvider);
					public static create(param0: com.zendesk.sdk.storage.StorageModule, param1: javaxinjectProvider, param2: javaxinjectProvider): daggerinternalFactory;
					public get(): com.zendesk.sdk.storage.ArticleVoteStorage;
					public static proxyProvideArticleVoteStorage(param0: com.zendesk.sdk.storage.StorageModule, param1: androidcontentContext, param2: com.google.gson.Gson): com.zendesk.sdk.storage.ArticleVoteStorage;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.storage.HelpCenterSessionCache.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StorageModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class StorageModule_ProvideHelpCenterSessionCacheFactory {
					public constructor(param0: com.zendesk.sdk.storage.StorageModule);
					public get(): com.zendesk.sdk.storage.HelpCenterSessionCache;
					public static create(param0: com.zendesk.sdk.storage.StorageModule): daggerinternalFactory;
					public static proxyProvideHelpCenterSessionCache(param0: com.zendesk.sdk.storage.StorageModule): com.zendesk.sdk.storage.HelpCenterSessionCache;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StorageModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class StorageModule_ProvideIdentityStorageFactory {
					public constructor(param0: com.zendesk.sdk.storage.StorageModule, param1: javaxinjectProvider, param2: javaxinjectProvider);
					public static create(param0: com.zendesk.sdk.storage.StorageModule, param1: javaxinjectProvider, param2: javaxinjectProvider): daggerinternalFactory;
					public get(): com.zendesk.sdk.storage.IdentityStorage;
					public static proxyProvideIdentityStorage(param0: com.zendesk.sdk.storage.StorageModule, param1: androidcontentContext, param2: com.google.gson.Gson): com.zendesk.sdk.storage.IdentityStorage;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.PushRegistrationResponseStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StorageModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class StorageModule_ProvidePushDeviceIdStorageFactory {
					public constructor(param0: com.zendesk.sdk.storage.StorageModule, param1: javaxinjectProvider, param2: javaxinjectProvider);
					public static proxyProvidePushDeviceIdStorage(param0: com.zendesk.sdk.storage.StorageModule, param1: androidcontentContext, param2: com.google.gson.Gson): com.zendesk.sdk.storage.PushRegistrationResponseStorage;
					public get(): com.zendesk.sdk.storage.PushRegistrationResponseStorage;
					public static create(param0: com.zendesk.sdk.storage.StorageModule, param1: javaxinjectProvider, param2: javaxinjectProvider): daggerinternalFactory;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.storage.RequestSessionCache.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StorageModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class StorageModule_ProvideRequestSessionCacheFactory {
					public constructor(param0: com.zendesk.sdk.storage.StorageModule);
					public get(): com.zendesk.sdk.storage.RequestSessionCache;
					public static proxyProvideRequestSessionCache(param0: com.zendesk.sdk.storage.StorageModule): com.zendesk.sdk.storage.RequestSessionCache;
					public static create(param0: com.zendesk.sdk.storage.StorageModule): daggerinternalFactory;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.RequestStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StorageModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class StorageModule_ProvideRequestStorageFactory {
					public constructor(param0: com.zendesk.sdk.storage.StorageModule, param1: javaxinjectProvider, param2: javaxinjectProvider);
					public static create(param0: com.zendesk.sdk.storage.StorageModule, param1: javaxinjectProvider, param2: javaxinjectProvider): daggerinternalFactory;
					public static proxyProvideRequestStorage(param0: com.zendesk.sdk.storage.StorageModule, param1: androidcontentContext, param2: com.google.gson.Gson): com.zendesk.sdk.storage.RequestStorage;
					public get(): com.zendesk.sdk.storage.RequestStorage;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkSettingsStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StorageModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class StorageModule_ProvideSdkSettingsStorageFactory {
					public constructor(param0: com.zendesk.sdk.storage.StorageModule, param1: javaxinjectProvider, param2: javaxinjectProvider);
					public static create(param0: com.zendesk.sdk.storage.StorageModule, param1: javaxinjectProvider, param2: javaxinjectProvider): daggerinternalFactory;
					public get(): com.zendesk.sdk.storage.SdkSettingsStorage;
					public static proxyProvideSdkSettingsStorage(param0: com.zendesk.sdk.storage.StorageModule, param1: androidcontentContext, param2: com.google.gson.Gson): com.zendesk.sdk.storage.SdkSettingsStorage;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.storage.SdkStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StorageModule.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class StorageModule_ProvideSdkStorageFactory {
					public constructor(param0: com.zendesk.sdk.storage.StorageModule);
					public static proxyProvideSdkStorage(param0: com.zendesk.sdk.storage.StorageModule): com.zendesk.sdk.storage.SdkStorage;
					public get(): com.zendesk.sdk.storage.SdkStorage;
					public static create(param0: com.zendesk.sdk.storage.StorageModule): daggerinternalFactory;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.storage.ArticleVoteStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.HelpCenterSessionCache.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.PushRegistrationResponseStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.RequestStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkSettingsStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StorageModule.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StorageStore.d.ts" />
/// <reference path="./dagger.internal.Factory.d.ts" />
/// <reference path="./javax.inject.Provider.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class StorageModule_ProvideStorageStoreFactory {
					public constructor(param0: com.zendesk.sdk.storage.StorageModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider, param5: javaxinjectProvider, param6: javaxinjectProvider, param7: javaxinjectProvider);
					public static create(param0: com.zendesk.sdk.storage.StorageModule, param1: javaxinjectProvider, param2: javaxinjectProvider, param3: javaxinjectProvider, param4: javaxinjectProvider, param5: javaxinjectProvider, param6: javaxinjectProvider, param7: javaxinjectProvider): daggerinternalFactory;
					public get(): com.zendesk.sdk.storage.StorageStore;
					public static proxyProvideStorageStore(param0: com.zendesk.sdk.storage.StorageModule, param1: com.zendesk.sdk.storage.SdkStorage, param2: com.zendesk.sdk.storage.IdentityStorage, param3: com.zendesk.sdk.storage.RequestStorage, param4: com.zendesk.sdk.storage.SdkSettingsStorage, param5: com.zendesk.sdk.storage.HelpCenterSessionCache, param6: com.zendesk.sdk.storage.PushRegistrationResponseStorage, param7: com.zendesk.sdk.storage.ArticleVoteStorage): com.zendesk.sdk.storage.StorageStore;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.storage.ArticleVoteStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.HelpCenterSessionCache.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.PushRegistrationResponseStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.RequestStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkSettingsStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkStorage.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class StorageStore {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.storage.StorageStore interface with the provided implementation.
					 */
					public constructor(implementation: {
						sdkStorage(): com.zendesk.sdk.storage.SdkStorage;
						identityStorage(): com.zendesk.sdk.storage.IdentityStorage;
						requestStorage(): com.zendesk.sdk.storage.RequestStorage;
						sdkSettingsStorage(): com.zendesk.sdk.storage.SdkSettingsStorage;
						helpCenterSessionCache(): com.zendesk.sdk.storage.HelpCenterSessionCache;
						pushStorage(): com.zendesk.sdk.storage.PushRegistrationResponseStorage;
						voteStorage(): com.zendesk.sdk.storage.ArticleVoteStorage;
					});
					public helpCenterSessionCache(): com.zendesk.sdk.storage.HelpCenterSessionCache;
					public sdkStorage(): com.zendesk.sdk.storage.SdkStorage;
					public sdkSettingsStorage(): com.zendesk.sdk.storage.SdkSettingsStorage;
					public voteStorage(): com.zendesk.sdk.storage.ArticleVoteStorage;
					public identityStorage(): com.zendesk.sdk.storage.IdentityStorage;
					public pushStorage(): com.zendesk.sdk.storage.PushRegistrationResponseStorage;
					public requestStorage(): com.zendesk.sdk.storage.RequestStorage;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.ArticleVote.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class ZendeskArticleVoteStorage {
					public getStoredArticleVote(param0: javalangLong): com.zendesk.sdk.model.helpcenter.ArticleVote;
					public removeStoredArticleVote(param0: javalangLong): void;
					public storeArticleVote(param0: javalangLong, param1: com.zendesk.sdk.model.helpcenter.ArticleVote): void;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.LastSearch.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class ZendeskHelpCenterSessionCache {
					public static DEFAULT_SEARCH: com.zendesk.sdk.model.helpcenter.LastSearch;
					public getLastSearch(): com.zendesk.sdk.model.helpcenter.LastSearch;
					public unsetUniqueSearchResultClick(): void;
					public setLastSearch(param0: string, param1: number): void;
					public isUniqueSearchResultClick(): boolean;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.access.AccessToken.d.ts" />
/// <reference path="./com.zendesk.sdk.model.access.Identity.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class ZendeskIdentityStorage {
					public storeAccessToken(param0: com.zendesk.sdk.model.access.AccessToken): void;
					public getStoredAccessToken(): com.zendesk.sdk.model.access.AccessToken;
					public getUserId(): javalangLong;
					public getIdentity(): com.zendesk.sdk.model.access.Identity;
					public storeUserId(param0: javalangLong): void;
					public anonymiseIdentity(): com.zendesk.sdk.model.access.Identity;
					public getCacheKey(): string;
					public getUUID(): string;
					public getStoredAccessTokenAsBearerToken(): string;
					public clearUserData(): void;
					public storeIdentity(param0: com.zendesk.sdk.model.access.Identity): void;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.push.PushRegistrationResponse.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class ZendeskPushRegistrationResponseStorage {
					public hasStoredPushRegistrationResponse(): boolean;
					public storePushRegistrationResponse(param0: com.zendesk.sdk.model.push.PushRegistrationResponse): void;
					public removePushRegistrationResponse(): void;
					public getPushRegistrationResponse(): com.zendesk.sdk.model.push.PushRegistrationResponse;
					public getCacheKey(): string;
					public clearUserData(): void;
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class ZendeskRequestSessionCache {
					public getTicketFormsById(param0: javautilList): javautilList;
					public containsAllTicketForms(param0: javautilList): boolean;
					public updateTicketFormCache(param0: javautilList): void;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.RequestUpdates.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class ZendeskRequestStorage {
					public getStoredRequestIds(): javautilList;
					public markRequestAsRead(param0: string): void;
					public getRequestUpdatesTimestamp(): number;
					public getRequestUpdates(): com.zendesk.sdk.model.request.RequestUpdates;
					public setRequestUpdates(param0: com.zendesk.sdk.model.request.RequestUpdates): void;
					public storeRequestId(param0: string): void;
					public getCacheKey(): string;
					public hasStoredRequestUpdates(): boolean;
					public setCommentCount(param0: string, param1: number): void;
					public clearUserData(): void;
					public getCommentCount(param0: string): javalangInteger;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.settings.SafeMobileSettings.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class ZendeskSdkSettingsStorage {
					public hasStoredSdkSettings(): boolean;
					public areSettingsUpToDate(param0: number, param1: javautilconcurrentTimeUnit): boolean;
					public setStoredSettings(param0: com.zendesk.sdk.model.settings.SafeMobileSettings): void;
					public getStoredSettings(): com.zendesk.sdk.model.settings.SafeMobileSettings;
					public deleteStoredSettings(): void;
				}
			}
		}
	}
}

/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class ZendeskSdkStorage {
					public registerUserStorage(param0: com.zendesk.sdk.storage.SdkStorage.UserStorage): void;
					public getUserStorage(): javautilSet;
					public clearUserData(): void;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.storage.ArticleVoteStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.HelpCenterSessionCache.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.PushRegistrationResponseStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.RequestStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkSettingsStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkStorage.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class ZendeskStorageStore {
					public helpCenterSessionCache(): com.zendesk.sdk.storage.HelpCenterSessionCache;
					public sdkStorage(): com.zendesk.sdk.storage.SdkStorage;
					public sdkSettingsStorage(): com.zendesk.sdk.storage.SdkSettingsStorage;
					public voteStorage(): com.zendesk.sdk.storage.ArticleVoteStorage;
					public identityStorage(): com.zendesk.sdk.storage.IdentityStorage;
					public pushStorage(): com.zendesk.sdk.storage.PushRegistrationResponseStorage;
					public requestStorage(): com.zendesk.sdk.storage.RequestStorage;
				}
			}
		}
	}
}

import androidnetConnectivityManager = android.net.ConnectivityManager;
import androidnetNetworkInfo = android.net.NetworkInfo;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.ConnectivityManager.d.ts" />
/// <reference path="./android.net.NetworkInfo.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module util {
				export class NetworkUtils {
					public static isConnected(param0: androidcontentContext): boolean;
					public static isMobile(param0: androidcontentContext): boolean;
					public static getActiveNetworkInfo(param0: androidcontentContext): androidnetNetworkInfo;
					public static getConnectivityManager(param0: androidcontentContext): androidnetConnectivityManager;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module util {
				export class StageDetectionUtil {
					public static isDebug(param0: androidcontentContext): boolean;
					public static isProduction(param0: androidcontentContext): boolean;
				}
			}
		}
	}
}

