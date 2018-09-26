/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module zendesk {
		export module sdk {
			export module providers {
				export class BuildConfig {
					public static class: java.lang.Class<com.zendesk.sdk.providers.BuildConfig>;
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

declare module zendesk {
	export module support {
		export class AnswersTracker extends zendesk.support.ZendeskTracker {
			public static class: java.lang.Class<zendesk.support.AnswersTracker>;
			public requestCreated(): void;
			public requestUpdated(): void;
			public helpCenterSearched(param0: string): void;
			public helpCenterLoaded(): void;
			public helpCenterArticleViewed(): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ApplicationScope {
			public static class: java.lang.Class<zendesk.support.ApplicationScope>;
			public getZendeskTracker(): zendesk.support.ZendeskTracker;
			public newBuilder(): zendesk.support.ApplicationScope.Builder;
			public getLocale(): java.util.Locale;
		}
		export module ApplicationScope {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.ApplicationScope.Builder>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class Article {
			public static class: java.lang.Class<zendesk.support.Article>;
			public static UNKNOWN_VOTE_COUNT: number;
			public getTitle(): string;
			public getUrl(): string;
			public isOutdated(): boolean;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getVoteCount(): number;
			public getUpdatedAt(): java.util.Date;
			public isDraft(): boolean;
			public getSectionId(): java.lang.Long;
			public getAuthor(): zendesk.support.User;
			public getAuthorId(): java.lang.Long;
			public getLocale(): string;
			public getId(): java.lang.Long;
			public getLabelNames(): java.util.List<string>;
			public setAuthor(param0: zendesk.support.User): void;
			public getSourceLocale(): string;
			public isCommentsDisabled(): boolean;
			public getUpvoteCount(): number;
			public getDownvoteCount(): number;
			public getBody(): string;
			public getHtmlUrl(): string;
			public getVoteSum(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticleItem extends zendesk.support.HelpItem {
			public static class: java.lang.Class<zendesk.support.ArticleItem>;
			public equals(param0: any): boolean;
			public getName(): string;
			public getId(): java.lang.Long;
			public getParentId(): java.lang.Long;
			public constructor(param0: java.lang.Long, param1: java.lang.Long, param2: string);
			public getViewType(): number;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticleResponse {
			public static class: java.lang.Class<zendesk.support.ArticleResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticleVote {
			public static class: java.lang.Class<zendesk.support.ArticleVote>;
			public getValue(): java.lang.Integer;
			public equals(param0: any): boolean;
			public getUrl(): string;
			public getId(): java.lang.Long;
			public getUserId(): java.lang.Long;
			public getItemType(): string;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getUpdatedAt(): java.util.Date;
			public getItemId(): java.lang.Long;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticleVoteResponse {
			public static class: java.lang.Class<zendesk.support.ArticleVoteResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticleVoteStorage {
			public static class: java.lang.Class<zendesk.support.ArticleVoteStorage>;
			/**
			 * Constructs a new instance of the zendesk.support.ArticleVoteStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				storeArticleVote(param0: java.lang.Long, param1: zendesk.support.ArticleVote): void;
				getStoredArticleVote(param0: java.lang.Long): zendesk.support.ArticleVote;
				removeStoredArticleVote(param0: java.lang.Long): void;
			});
			public constructor();
			public removeStoredArticleVote(param0: java.lang.Long): void;
			public storeArticleVote(param0: java.lang.Long, param1: zendesk.support.ArticleVote): void;
			public getStoredArticleVote(param0: java.lang.Long): zendesk.support.ArticleVote;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticlesListResponse extends zendesk.support.ArticlesResponse {
			public static class: java.lang.Class<zendesk.support.ArticlesListResponse>;
			public getSections(): java.util.List<zendesk.support.Section>;
			public getCategories(): java.util.List<zendesk.support.Category>;
			public getNextPage(): string;
			public getArticles(): java.util.List<zendesk.support.Article>;
			public getUsers(): java.util.List<zendesk.support.User>;
			public getPreviousPage(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticlesResponse {
			public static class: java.lang.Class<zendesk.support.ArticlesResponse>;
			/**
			 * Constructs a new instance of the zendesk.support.ArticlesResponse interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getArticles(): java.util.List<zendesk.support.Article>;
				getCategories(): java.util.List<zendesk.support.Category>;
				getSections(): java.util.List<zendesk.support.Section>;
				getUsers(): java.util.List<zendesk.support.User>;
			});
			public constructor();
			public getSections(): java.util.List<zendesk.support.Section>;
			public getCategories(): java.util.List<zendesk.support.Category>;
			public getArticles(): java.util.List<zendesk.support.Article>;
			public getUsers(): java.util.List<zendesk.support.User>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticlesSearchResponse extends zendesk.support.ArticlesResponse {
			public static class: java.lang.Class<zendesk.support.ArticlesSearchResponse>;
			public getSections(): java.util.List<zendesk.support.Section>;
			public getCategories(): java.util.List<zendesk.support.Category>;
			public getNextPage(): string;
			public getArticles(): java.util.List<zendesk.support.Article>;
			public getUsers(): java.util.List<zendesk.support.User>;
			public getPreviousPage(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class Attachment {
			public static class: java.lang.Class<zendesk.support.Attachment>;
			public getSize(): java.lang.Long;
			public getUrl(): string;
			public getId(): java.lang.Long;
			public getFileName(): string;
			public getHeight(): java.lang.Long;
			public getWidth(): java.lang.Long;
			public getThumbnails(): java.util.List<zendesk.support.Attachment>;
			public constructor();
			public getContentType(): string;
			public getContentUrl(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class AttachmentResponse {
			public static class: java.lang.Class<zendesk.support.AttachmentResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class AttachmentSettings {
			public static class: java.lang.Class<zendesk.support.AttachmentSettings>;
		}
	}
}

declare module zendesk {
	export module support {
		export class AttachmentType {
			public static class: java.lang.Class<zendesk.support.AttachmentType>;
			public static INLINE: zendesk.support.AttachmentType;
			public static BLOCK: zendesk.support.AttachmentType;
			public static valueOf(param0: string): zendesk.support.AttachmentType;
			public getAttachmentType(): string;
			public static values(): native.Array<zendesk.support.AttachmentType>;
		}
	}
}

declare module zendesk {
	export module support {
		export class CategoriesResponse {
			public static class: java.lang.Class<zendesk.support.CategoriesResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class Category {
			public static class: java.lang.Class<zendesk.support.Category>;
			public getUrl(): string;
			public getLocale(): string;
			public getName(): string;
			public getId(): java.lang.Long;
			public isOutdated(): boolean;
			public getSourceLocale(): string;
			public getCreatedAt(): java.util.Date;
			public getPosition(): number;
			public constructor();
			public getUpdatedAt(): java.util.Date;
			public getDescription(): string;
			public getHtmlUrl(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class CategoryItem extends zendesk.support.HelpItem {
			public static class: java.lang.Class<zendesk.support.CategoryItem>;
			public equals(param0: any): boolean;
			public setSections(param0: java.util.List<zendesk.support.SectionItem>): void;
			public isExpanded(): boolean;
			public getName(): string;
			public getId(): java.lang.Long;
			public getParentId(): java.lang.Long;
			public setExpanded(param0: boolean): boolean;
			public getSections(): java.util.List<zendesk.support.SectionItem>;
			public constructor();
			public getViewType(): number;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class CategoryResponse {
			public static class: java.lang.Class<zendesk.support.CategoryResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class Comment {
			public static class: java.lang.Class<zendesk.support.Comment>;
			public setBody(param0: string): void;
			public getUrl(): string;
			public setAttachments(param0: java.util.List<string>): void;
			public getAttachments(): java.util.List<string>;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getHtmlBody(): string;
			public getAuthorId(): java.lang.Long;
			public setAuthorId(param0: java.lang.Long): void;
			public getId(): java.lang.Long;
			public getRequestId(): string;
			public isPublic(): boolean;
			public setCreatedAt(param0: java.util.Date): void;
			public getBody(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class CommentResponse {
			public static class: java.lang.Class<zendesk.support.CommentResponse>;
			public setBody(param0: string): void;
			public getUrl(): string;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getHtmlBody(): string;
			public setAttachments(param0: java.util.List<zendesk.support.Attachment>): void;
			public getAuthorId(): java.lang.Long;
			public setAuthorId(param0: java.lang.Long): void;
			public getId(): java.lang.Long;
			public getAttachments(): java.util.List<zendesk.support.Attachment>;
			public getRequestId(): string;
			public isPublic(): boolean;
			public setCreatedAt(param0: java.util.Date): void;
			public setId(param0: java.lang.Long): void;
			public getBody(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class CommentsResponse extends zendesk.support.ResponseWrapper {
			public static class: java.lang.Class<zendesk.support.CommentsResponse>;
			public getOrganizations(): java.util.List<zendesk.support.Organization>;
			public getComments(): java.util.List<zendesk.support.CommentResponse>;
			public constructor();
			public getUsers(): java.util.List<zendesk.support.User>;
		}
	}
}

declare module zendesk {
	export module support {
		export class Constants {
			public static class: java.lang.Class<zendesk.support.Constants>;
			/**
			 * Constructs a new instance of the zendesk.support.Constants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
			public static USER_AGENT_VARIANT: string;
			public static CUSTOM_HC_CACHING_HEADER: string;
			public static SDK_GUID_HEADER: string;
			public static ACTION_REFRESH_REQUEST_LIST: string;
			public static ACTION_REFRESH_REQUEST_CONVERSATION: string;
			public static HOURS_MINUTES_FORMAT: string;
			public static STANDARD_CACHING_HEADER: string;
		}
	}
}

declare module zendesk {
	export module support {
		export class ContactUsSettings {
			public static class: java.lang.Class<zendesk.support.ContactUsSettings>;
			public getTags(): java.util.List<string>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ConversationsSettings {
			public static class: java.lang.Class<zendesk.support.ConversationsSettings>;
		}
	}
}

declare module zendesk {
	export module support {
		export class CreateRequest {
			public static class: java.lang.Class<zendesk.support.CreateRequest>;
			public setMetadata(param0: java.util.Map<string,string>): void;
			public setSubject(param0: string): void;
			public setAttachments(param0: java.util.List<string>): void;
			public setDescription(param0: string): void;
			public setCustomFields(param0: java.util.List<zendesk.support.CustomField>): void;
			public constructor();
			public getCustomFields(): java.util.List<zendesk.support.CustomField>;
			public setTicketFormId(param0: java.lang.Long): void;
			public setTags(param0: java.util.List<string>): void;
			public getId(): string;
			public setId(param0: string): void;
			public getTags(): java.util.List<string>;
			public getSubject(): string;
			public getTicketFormId(): java.lang.Long;
			public getDescription(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class CreateRequestWrapper {
			public static class: java.lang.Class<zendesk.support.CreateRequestWrapper>;
		}
	}
}

declare module zendesk {
	export module support {
		export class CustomField {
			public static class: java.lang.Class<zendesk.support.CustomField>;
			public getId(): java.lang.Long;
			public constructor(param0: java.lang.Long, param1: string);
			public getValue(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class DaggerSupportSdkProvidersComponent extends zendesk.support.SupportSdkProvidersComponent {
			public static class: java.lang.Class<zendesk.support.DaggerSupportSdkProvidersComponent>;
			public static builder(): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
			public inject(param0: zendesk.support.Support): zendesk.support.Support;
		}
		export module DaggerSupportSdkProvidersComponent {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.DaggerSupportSdkProvidersComponent.Builder>;
				public coreModule(param0: zendesk.core.CoreModule): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
				public serviceModule(param0: zendesk.support.ServiceModule): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
				public supportApplicationModule(param0: zendesk.support.SupportApplicationModule): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
				public storageModule(param0: zendesk.support.StorageModule): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
				public build(): zendesk.support.SupportSdkProvidersComponent;
				public providerModule(param0: zendesk.support.ProviderModule): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class EndUserComment {
			public static class: java.lang.Class<zendesk.support.EndUserComment>;
			public setAttachments(param0: java.util.List<string>): void;
			public getAttachments(): java.util.List<string>;
			public constructor();
			public setValue(param0: string): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class FlatArticle extends java.lang.Comparable<zendesk.support.FlatArticle> {
			public static class: java.lang.Class<zendesk.support.FlatArticle>;
			public getCategory(): zendesk.support.Category;
			public toString(): string;
			public constructor(param0: zendesk.support.Category, param1: zendesk.support.Section, param2: zendesk.support.Article);
			public getSection(): zendesk.support.Section;
			public getArticle(): zendesk.support.Article;
			public compareTo(param0: zendesk.support.FlatArticle): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterAttachment {
			public static class: java.lang.Class<zendesk.support.HelpCenterAttachment>;
			public getSize(): java.lang.Long;
			public getUrl(): string;
			public getId(): java.lang.Long;
			public getFileName(): string;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getContentType(): string;
			public getUpdatedAt(): java.util.Date;
			public getContentUrl(): string;
			public getArticleId(): java.lang.Long;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterCachingInterceptor {
			public static class: java.lang.Class<zendesk.support.HelpCenterCachingInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterCachingNetworkConfig {
			public static class: java.lang.Class<zendesk.support.HelpCenterCachingNetworkConfig>;
			public configureOkHttpClient(param0: okhttp3.OkHttpClient.Builder): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterLocaleConverter {
			public static class: java.lang.Class<zendesk.support.HelpCenterLocaleConverter>;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterProvider {
			public static class: java.lang.Class<zendesk.support.HelpCenterProvider>;
			/**
			 * Constructs a new instance of the zendesk.support.HelpCenterProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getHelp(param0: zendesk.support.HelpRequest, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
				getCategories(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Category>>): void;
				getSections(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Section>>): void;
				getArticles(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
				getArticles(param0: java.lang.Long, param1: string, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
				listArticles(param0: zendesk.support.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
				listArticlesFlat(param0: zendesk.support.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.FlatArticle>>): void;
				searchArticles(param0: zendesk.support.HelpCenterSearch, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
				getArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Article>): void;
				getSection(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Section>): void;
				getCategory(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Category>): void;
				getAttachments(param0: java.lang.Long, param1: zendesk.support.AttachmentType, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpCenterAttachment>>): void;
				upvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
				downvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
				deleteVote(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
				getSuggestedArticles(param0: zendesk.support.SuggestedArticleSearch, param1: com.zendesk.service.ZendeskCallback<zendesk.support.SuggestedArticleResponse>): void;
				submitRecordArticleView(param0: zendesk.support.Article, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			});
			public constructor();
			public getAttachments(param0: java.lang.Long, param1: zendesk.support.AttachmentType, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpCenterAttachment>>): void;
			public getArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Article>): void;
			public getArticles(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
			public getSections(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Section>>): void;
			public getCategory(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Category>): void;
			public deleteVote(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public upvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
			public submitRecordArticleView(param0: zendesk.support.Article, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public downvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
			public getCategories(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Category>>): void;
			public listArticlesFlat(param0: zendesk.support.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.FlatArticle>>): void;
			public getHelp(param0: zendesk.support.HelpRequest, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
			public getArticles(param0: java.lang.Long, param1: string, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
			public listArticles(param0: zendesk.support.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
			public getSuggestedArticles(param0: zendesk.support.SuggestedArticleSearch, param1: com.zendesk.service.ZendeskCallback<zendesk.support.SuggestedArticleResponse>): void;
			public searchArticles(param0: zendesk.support.HelpCenterSearch, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
			public getSection(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Section>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterSearch {
			public static class: java.lang.Class<zendesk.support.HelpCenterSearch>;
			public getInclude(): string;
			public getLabelNames(): string;
			public getCategoryIds(): string;
			public getQuery(): string;
			public getPage(): java.lang.Integer;
			public getSectionIds(): string;
			public getPerPage(): java.lang.Integer;
			public withQuery(param0: string): zendesk.support.HelpCenterSearch;
			public getLocale(): java.util.Locale;
		}
		export module HelpCenterSearch {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.HelpCenterSearch.Builder>;
				public withIncludes(param0: native.Array<string>): zendesk.support.HelpCenterSearch.Builder;
				public withLabelNames(param0: native.Array<string>): zendesk.support.HelpCenterSearch.Builder;
				public withSectionId(param0: java.lang.Long): zendesk.support.HelpCenterSearch.Builder;
				public build(): zendesk.support.HelpCenterSearch;
				public withCategoryId(param0: java.lang.Long): zendesk.support.HelpCenterSearch.Builder;
				public perPage(param0: java.lang.Integer): zendesk.support.HelpCenterSearch.Builder;
				public withCategoryIds(param0: java.util.List<java.lang.Long>): zendesk.support.HelpCenterSearch.Builder;
				public page(param0: java.lang.Integer): zendesk.support.HelpCenterSearch.Builder;
				public withSectionIds(param0: java.util.List<java.lang.Long>): zendesk.support.HelpCenterSearch.Builder;
				public constructor();
				public withQuery(param0: string): zendesk.support.HelpCenterSearch.Builder;
				public forLocale(param0: java.util.Locale): zendesk.support.HelpCenterSearch.Builder;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterService {
			public static class: java.lang.Class<zendesk.support.HelpCenterService>;
			/**
			 * Constructs a new instance of the zendesk.support.HelpCenterService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getHelp(param0: string, param1: string, param2: string, param3: string, param4: number, param5: string, param6: number, param7: string, param8: string): retrofit2.Call<zendesk.support.HelpResponse>;
				getCategories(param0: string): retrofit2.Call<zendesk.support.CategoriesResponse>;
				getSections(param0: string, param1: java.lang.Long, param2: number): retrofit2.Call<zendesk.support.SectionsResponse>;
				getArticles(param0: string, param1: java.lang.Long, param2: string, param3: string, param4: number): retrofit2.Call<zendesk.support.ArticlesListResponse>;
				listArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer): retrofit2.Call<zendesk.support.ArticlesListResponse>;
				searchArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: java.lang.Integer): retrofit2.Call<zendesk.support.ArticlesSearchResponse>;
				getArticle(param0: string, param1: java.lang.Long, param2: string): retrofit2.Call<zendesk.support.ArticleResponse>;
				getSectionById(param0: string, param1: java.lang.Long): retrofit2.Call<zendesk.support.SectionResponse>;
				getCategoryById(param0: string, param1: java.lang.Long): retrofit2.Call<zendesk.support.CategoryResponse>;
				getAttachments(param0: string, param1: java.lang.Long, param2: string): retrofit2.Call<zendesk.support.AttachmentResponse>;
				upvoteArticle(param0: java.lang.Long, param1: string): retrofit2.Call<zendesk.support.ArticleVoteResponse>;
				downvoteArticle(param0: java.lang.Long, param1: string): retrofit2.Call<zendesk.support.ArticleVoteResponse>;
				deleteVote(param0: java.lang.Long): retrofit2.Call<java.lang.Void>;
				getSuggestedArticles(param0: string, param1: string, param2: string, param3: java.lang.Long, param4: java.lang.Long): retrofit2.Call<zendesk.support.SuggestedArticleResponse>;
				submitRecordArticleView(param0: java.lang.Long, param1: string, param2: zendesk.support.RecordArticleViewRequest): retrofit2.Call<java.lang.Void>;
			});
			public constructor();
			public getSectionById(param0: string, param1: java.lang.Long): retrofit2.Call<zendesk.support.SectionResponse>;
			public getSuggestedArticles(param0: string, param1: string, param2: string, param3: java.lang.Long, param4: java.lang.Long): retrofit2.Call<zendesk.support.SuggestedArticleResponse>;
			public getHelp(param0: string, param1: string, param2: string, param3: string, param4: number, param5: string, param6: number, param7: string, param8: string): retrofit2.Call<zendesk.support.HelpResponse>;
			public getCategoryById(param0: string, param1: java.lang.Long): retrofit2.Call<zendesk.support.CategoryResponse>;
			public submitRecordArticleView(param0: java.lang.Long, param1: string, param2: zendesk.support.RecordArticleViewRequest): retrofit2.Call<java.lang.Void>;
			public listArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer): retrofit2.Call<zendesk.support.ArticlesListResponse>;
			public downvoteArticle(param0: java.lang.Long, param1: string): retrofit2.Call<zendesk.support.ArticleVoteResponse>;
			public upvoteArticle(param0: java.lang.Long, param1: string): retrofit2.Call<zendesk.support.ArticleVoteResponse>;
			public searchArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: java.lang.Integer): retrofit2.Call<zendesk.support.ArticlesSearchResponse>;
			public getAttachments(param0: string, param1: java.lang.Long, param2: string): retrofit2.Call<zendesk.support.AttachmentResponse>;
			public getArticles(param0: string, param1: java.lang.Long, param2: string, param3: string, param4: number): retrofit2.Call<zendesk.support.ArticlesListResponse>;
			public getSections(param0: string, param1: java.lang.Long, param2: number): retrofit2.Call<zendesk.support.SectionsResponse>;
			public getArticle(param0: string, param1: java.lang.Long, param2: string): retrofit2.Call<zendesk.support.ArticleResponse>;
			public deleteVote(param0: java.lang.Long): retrofit2.Call<java.lang.Void>;
			public getCategories(param0: string): retrofit2.Call<zendesk.support.CategoriesResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterSessionCache {
			public static class: java.lang.Class<zendesk.support.HelpCenterSessionCache>;
			/**
			 * Constructs a new instance of the zendesk.support.HelpCenterSessionCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getLastSearch(): zendesk.support.LastSearch;
				setLastSearch(param0: string, param1: number): void;
				unsetUniqueSearchResultClick(): void;
				isUniqueSearchResultClick(): boolean;
			});
			public constructor();
			public isUniqueSearchResultClick(): boolean;
			public unsetUniqueSearchResultClick(): void;
			public getLastSearch(): zendesk.support.LastSearch;
			public setLastSearch(param0: string, param1: number): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterSettings {
			public static class: java.lang.Class<zendesk.support.HelpCenterSettings>;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpItem {
			public static class: java.lang.Class<zendesk.support.HelpItem>;
			/**
			 * Constructs a new instance of the zendesk.support.HelpItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getViewType(): number;
				getName(): string;
				getId(): java.lang.Long;
				getParentId(): java.lang.Long;
			});
			public constructor();
			public static TYPE_LOADING: number;
			public static TYPE_SEE_ALL: number;
			public static TYPE_SECTION: number;
			public static TYPE_NO_RESULTS: number;
			public static TYPE_PADDING: number;
			public static TYPE_CATEGORY: number;
			public static TYPE_ARTICLE: number;
			public getName(): string;
			public getId(): java.lang.Long;
			public getParentId(): java.lang.Long;
			public getViewType(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpRequest {
			public static class: java.lang.Class<zendesk.support.HelpRequest>;
			public getCategoryIds(): string;
			public getLabelNames(): native.Array<string>;
			public getIncludes(): string;
			public getSectionIds(): string;
			public getArticlesPerPageLimit(): number;
		}
		export module HelpRequest {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.HelpRequest.Builder>;
				public withArticlesPerSectionLimit(param0: number): zendesk.support.HelpRequest.Builder;
				public withLabelNames(param0: native.Array<string>): zendesk.support.HelpRequest.Builder;
				public withCategoryIds(param0: java.util.List<java.lang.Long>): zendesk.support.HelpRequest.Builder;
				public includeCategories(): zendesk.support.HelpRequest.Builder;
				public withSectionIds(param0: java.util.List<java.lang.Long>): zendesk.support.HelpRequest.Builder;
				public build(): zendesk.support.HelpRequest;
				public includeSections(): zendesk.support.HelpRequest.Builder;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpResponse {
			public static class: java.lang.Class<zendesk.support.HelpResponse>;
			public getCategories(): java.util.List<zendesk.support.CategoryItem>;
			public getCategoryCount(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class LastSearch {
			public static class: java.lang.Class<zendesk.support.LastSearch>;
		}
	}
}

declare module zendesk {
	export module support {
		export class LegacyRequestMigrator extends zendesk.support.RequestMigrator {
			public static class: java.lang.Class<zendesk.support.LegacyRequestMigrator>;
			public clearLegacyRequestStorage(): void;
			public getLegacyRequests(): java.util.List<zendesk.support.RequestData>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ListArticleQuery {
			public static class: java.lang.Class<zendesk.support.ListArticleQuery>;
			public setLocale(param0: java.util.Locale): void;
			public setResultsPerPage(param0: java.lang.Integer): void;
			public setPage(param0: java.lang.Integer): void;
			public getSortBy(): zendesk.support.SortBy;
			public setSortBy(param0: zendesk.support.SortBy): void;
			public constructor();
			public getPage(): java.lang.Integer;
			public getResultsPerPage(): java.lang.Integer;
			public getInclude(): string;
			public getSortOrder(): zendesk.support.SortOrder;
			public getLabelNames(): string;
			public setInclude(param0: string): void;
			public setLabelNames(param0: string): void;
			public getLocale(): java.util.Locale;
			public setSortOrder(param0: zendesk.support.SortOrder): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class Organization {
			public static class: java.lang.Class<zendesk.support.Organization>;
			public getName(): string;
			public getId(): java.lang.Long;
			public constructor();
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule {
			public static class: java.lang.Class<zendesk.support.ProviderModule>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideHelpCenterLocaleConverterFactory extends dagger.internal.Factory<zendesk.support.HelpCenterLocaleConverter> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideHelpCenterLocaleConverterFactory>;
			public static create(param0: zendesk.support.ProviderModule): dagger.internal.Factory<zendesk.support.HelpCenterLocaleConverter>;
			public get(): zendesk.support.HelpCenterLocaleConverter;
			public static proxyProvideHelpCenterLocaleConverter(param0: zendesk.support.ProviderModule): zendesk.support.HelpCenterLocaleConverter;
			public constructor(param0: zendesk.support.ProviderModule);
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideHelpCenterProviderFactory extends dagger.internal.Factory<zendesk.support.HelpCenterProvider> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideHelpCenterProviderFactory>;
			public get(): zendesk.support.HelpCenterProvider;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param3: javax.inject.Provider<zendesk.support.ZendeskHelpCenterService>, param4: javax.inject.Provider<zendesk.support.HelpCenterSessionCache>, param5: javax.inject.Provider<zendesk.support.ZendeskTracker>);
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param3: javax.inject.Provider<zendesk.support.ZendeskHelpCenterService>, param4: javax.inject.Provider<zendesk.support.HelpCenterSessionCache>, param5: javax.inject.Provider<zendesk.support.ZendeskTracker>): dagger.internal.Factory<zendesk.support.HelpCenterProvider>;
			public static proxyProvideHelpCenterProvider(param0: zendesk.support.ProviderModule, param1: zendesk.support.SupportSettingsProvider, param2: zendesk.support.SupportBlipsProvider, param3: any, param4: any, param5: any): zendesk.support.HelpCenterProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideProviderStoreFactory extends dagger.internal.Factory<zendesk.support.ProviderStore> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideProviderStoreFactory>;
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param2: javax.inject.Provider<zendesk.support.RequestProvider>, param3: javax.inject.Provider<zendesk.support.UploadProvider>): dagger.internal.Factory<zendesk.support.ProviderStore>;
			public static proxyProvideProviderStore(param0: zendesk.support.ProviderModule, param1: zendesk.support.HelpCenterProvider, param2: zendesk.support.RequestProvider, param3: zendesk.support.UploadProvider): zendesk.support.ProviderStore;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param2: javax.inject.Provider<zendesk.support.RequestProvider>, param3: javax.inject.Provider<zendesk.support.UploadProvider>);
			public get(): zendesk.support.ProviderStore;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideRequestProviderFactory extends dagger.internal.Factory<zendesk.support.RequestProvider> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideRequestProviderFactory>;
			public static proxyProvideRequestProvider(param0: zendesk.support.ProviderModule, param1: zendesk.support.SupportSettingsProvider, param2: zendesk.core.AuthenticationProvider, param3: any, param4: any, param5: any, param6: any, param7: any, param8: zendesk.support.SupportBlipsProvider): zendesk.support.RequestProvider;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param3: javax.inject.Provider<zendesk.support.ZendeskRequestService>, param4: javax.inject.Provider<zendesk.support.RequestStorage>, param5: javax.inject.Provider<zendesk.support.RequestSessionCache>, param6: javax.inject.Provider<zendesk.support.ZendeskTracker>, param7: javax.inject.Provider<zendesk.support.SupportSdkMetadata>, param8: javax.inject.Provider<zendesk.support.SupportBlipsProvider>);
			public get(): zendesk.support.RequestProvider;
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param3: javax.inject.Provider<zendesk.support.ZendeskRequestService>, param4: javax.inject.Provider<zendesk.support.RequestStorage>, param5: javax.inject.Provider<zendesk.support.RequestSessionCache>, param6: javax.inject.Provider<zendesk.support.ZendeskTracker>, param7: javax.inject.Provider<zendesk.support.SupportSdkMetadata>, param8: javax.inject.Provider<zendesk.support.SupportBlipsProvider>): dagger.internal.Factory<zendesk.support.RequestProvider>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideSdkSettingsProviderFactory extends dagger.internal.Factory<zendesk.support.SupportSettingsProvider> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideSdkSettingsProviderFactory>;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.core.SettingsProvider>, param2: javax.inject.Provider<java.util.Locale>, param3: javax.inject.Provider<zendesk.support.HelpCenterLocaleConverter>);
			public get(): zendesk.support.SupportSettingsProvider;
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.core.SettingsProvider>, param2: javax.inject.Provider<java.util.Locale>, param3: javax.inject.Provider<zendesk.support.HelpCenterLocaleConverter>): dagger.internal.Factory<zendesk.support.SupportSettingsProvider>;
			public static proxyProvideSdkSettingsProvider(param0: zendesk.support.ProviderModule, param1: zendesk.core.SettingsProvider, param2: java.util.Locale, param3: any): zendesk.support.SupportSettingsProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideSupportBlipsProviderFactory extends dagger.internal.Factory<zendesk.support.SupportBlipsProvider> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideSupportBlipsProviderFactory>;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.core.BlipsProvider>, param2: javax.inject.Provider<java.util.Locale>);
			public static proxyProvideSupportBlipsProvider(param0: zendesk.support.ProviderModule, param1: zendesk.core.BlipsProvider, param2: java.util.Locale): zendesk.support.SupportBlipsProvider;
			public get(): zendesk.support.SupportBlipsProvider;
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.core.BlipsProvider>, param2: javax.inject.Provider<java.util.Locale>): dagger.internal.Factory<zendesk.support.SupportBlipsProvider>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideSupportModuleFactory extends dagger.internal.Factory<zendesk.support.SupportModule> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideSupportModuleFactory>;
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.RequestProvider>, param2: javax.inject.Provider<zendesk.support.UploadProvider>, param3: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param4: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param5: javax.inject.Provider<zendesk.core.RestServiceProvider>, param6: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param7: javax.inject.Provider<zendesk.support.ZendeskTracker>, param8: javax.inject.Provider<zendesk.support.ArticleVoteStorage>): dagger.internal.Factory<zendesk.support.SupportModule>;
			public get(): zendesk.support.SupportModule;
			public static proxyProvideSupportModule(param0: zendesk.support.ProviderModule, param1: zendesk.support.RequestProvider, param2: zendesk.support.UploadProvider, param3: zendesk.support.HelpCenterProvider, param4: zendesk.support.SupportSettingsProvider, param5: zendesk.core.RestServiceProvider, param6: zendesk.support.SupportBlipsProvider, param7: any, param8: zendesk.support.ArticleVoteStorage): zendesk.support.SupportModule;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.RequestProvider>, param2: javax.inject.Provider<zendesk.support.UploadProvider>, param3: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param4: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param5: javax.inject.Provider<zendesk.core.RestServiceProvider>, param6: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param7: javax.inject.Provider<zendesk.support.ZendeskTracker>, param8: javax.inject.Provider<zendesk.support.ArticleVoteStorage>);
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideUploadProviderFactory extends dagger.internal.Factory<zendesk.support.UploadProvider> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideUploadProviderFactory>;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.ZendeskUploadService>);
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.ZendeskUploadService>): dagger.internal.Factory<zendesk.support.UploadProvider>;
			public static proxyProvideUploadProvider(param0: zendesk.support.ProviderModule, param1: any): zendesk.support.UploadProvider;
			public get(): zendesk.support.UploadProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderStore {
			public static class: java.lang.Class<zendesk.support.ProviderStore>;
			/**
			 * Constructs a new instance of the zendesk.support.ProviderStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				helpCenterProvider(): zendesk.support.HelpCenterProvider;
				requestProvider(): zendesk.support.RequestProvider;
				uploadProvider(): zendesk.support.UploadProvider;
			});
			public constructor();
			public helpCenterProvider(): zendesk.support.HelpCenterProvider;
			public requestProvider(): zendesk.support.RequestProvider;
			public uploadProvider(): zendesk.support.UploadProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class RawTicketField {
			public static class: java.lang.Class<zendesk.support.RawTicketField>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RawTicketFieldOption {
			public static class: java.lang.Class<zendesk.support.RawTicketFieldOption>;
			public static create(param0: zendesk.support.RawTicketFieldOption): zendesk.support.TicketFieldOption;
		}
	}
}

declare module zendesk {
	export module support {
		export class RawTicketFieldSystemOption {
			public static class: java.lang.Class<zendesk.support.RawTicketFieldSystemOption>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RawTicketForm {
			public static class: java.lang.Class<zendesk.support.RawTicketForm>;
			public static create(param0: zendesk.support.RawTicketForm, param1: java.util.List<zendesk.support.TicketField>): zendesk.support.TicketForm;
		}
	}
}

declare module zendesk {
	export module support {
		export class RawTicketFormResponse {
			public static class: java.lang.Class<zendesk.support.RawTicketFormResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RecordArticleViewRequest {
			public static class: java.lang.Class<zendesk.support.RecordArticleViewRequest>;
		}
	}
}

declare module zendesk {
	export module support {
		export class Request {
			public static class: java.lang.Class<zendesk.support.Request>;
			public getCommentCount(): java.lang.Integer;
			public getFirstComment(): zendesk.support.Comment;
			public getUrl(): string;
			public getDueAt(): java.util.Date;
			public getRequesterId(): java.lang.Long;
			public getLastCommentingAgents(): java.util.List<zendesk.support.User>;
			public getCreatedAt(): java.util.Date;
			public getStatus(): zendesk.support.RequestStatus;
			public constructor();
			public getUpdatedAt(): java.util.Date;
			public getOrganizationId(): java.lang.Long;
			public setComment(param0: zendesk.support.EndUserComment): void;
			public getId(): string;
			public getSubject(): string;
			public getPriority(): string;
			public getPublicUpdatedAt(): java.util.Date;
			public getLastComment(): zendesk.support.Comment;
			public getDescription(): string;
			public getCollaboratorIds(): java.util.List<java.lang.Long>;
			public getType(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestData {
			public static class: java.lang.Class<zendesk.support.RequestData>;
			public equals(param0: any): boolean;
			public toString(): string;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestDataList {
			public static class: java.lang.Class<zendesk.support.RequestDataList>;
			public equals(param0: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestMigrator {
			public static class: java.lang.Class<zendesk.support.RequestMigrator>;
			/**
			 * Constructs a new instance of the zendesk.support.RequestMigrator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getLegacyRequests(): java.util.List<zendesk.support.RequestData>;
				clearLegacyRequestStorage(): void;
			});
			public constructor();
			public clearLegacyRequestStorage(): void;
			public getLegacyRequests(): java.util.List<zendesk.support.RequestData>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestProvider {
			public static class: java.lang.Class<zendesk.support.RequestProvider>;
			/**
			 * Constructs a new instance of the zendesk.support.RequestProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createRequest(param0: zendesk.support.CreateRequest, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
				getAllRequests(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
				getRequests(param0: string, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
				getComments(param0: string, param1: com.zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
				getCommentsSince(param0: string, param1: java.util.Date, param2: boolean, param3: com.zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
				addComment(param0: string, param1: zendesk.support.EndUserComment, param2: com.zendesk.service.ZendeskCallback<zendesk.support.Comment>): void;
				getRequest(param0: string, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
				getTicketFormsById(param0: java.util.List<java.lang.Long>, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.TicketForm>>): void;
				getUpdatesForDevice(param0: com.zendesk.service.ZendeskCallback<zendesk.support.RequestUpdates>): void;
				markRequestAsRead(param0: string, param1: number): void;
				markRequestAsUnread(param0: string): void;
			});
			public constructor();
			public createRequest(param0: zendesk.support.CreateRequest, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
			public getCommentsSince(param0: string, param1: java.util.Date, param2: boolean, param3: com.zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
			public getUpdatesForDevice(param0: com.zendesk.service.ZendeskCallback<zendesk.support.RequestUpdates>): void;
			public addComment(param0: string, param1: zendesk.support.EndUserComment, param2: com.zendesk.service.ZendeskCallback<zendesk.support.Comment>): void;
			public getComments(param0: string, param1: com.zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
			public getTicketFormsById(param0: java.util.List<java.lang.Long>, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.TicketForm>>): void;
			public markRequestAsRead(param0: string, param1: number): void;
			public markRequestAsUnread(param0: string): void;
			public getRequests(param0: string, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
			public getAllRequests(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
			public getRequest(param0: string, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestResponse {
			public static class: java.lang.Class<zendesk.support.RequestResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestService {
			public static class: java.lang.Class<zendesk.support.RequestService>;
			/**
			 * Constructs a new instance of the zendesk.support.RequestService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createRequest(param0: string, param1: zendesk.support.CreateRequestWrapper): retrofit2.Call<zendesk.support.RequestResponse>;
				getAllRequests(param0: string, param1: string): retrofit2.Call<zendesk.support.RequestsResponse>;
				getManyRequests(param0: string, param1: string, param2: string): retrofit2.Call<zendesk.support.RequestsResponse>;
				getComments(param0: string): retrofit2.Call<zendesk.support.CommentsResponse>;
				getCommentsSince(param0: string, param1: string, param2: string): retrofit2.Call<zendesk.support.CommentsResponse>;
				addComment(param0: string, param1: zendesk.support.UpdateRequestWrapper): retrofit2.Call<zendesk.support.RequestResponse>;
				getRequest(param0: string, param1: string): retrofit2.Call<zendesk.support.RequestResponse>;
				getTicketFormsById(param0: string, param1: string): retrofit2.Call<zendesk.support.RawTicketFormResponse>;
			});
			public constructor();
			public getCommentsSince(param0: string, param1: string, param2: string): retrofit2.Call<zendesk.support.CommentsResponse>;
			public getManyRequests(param0: string, param1: string, param2: string): retrofit2.Call<zendesk.support.RequestsResponse>;
			public getRequest(param0: string, param1: string): retrofit2.Call<zendesk.support.RequestResponse>;
			public getTicketFormsById(param0: string, param1: string): retrofit2.Call<zendesk.support.RawTicketFormResponse>;
			public getComments(param0: string): retrofit2.Call<zendesk.support.CommentsResponse>;
			public addComment(param0: string, param1: zendesk.support.UpdateRequestWrapper): retrofit2.Call<zendesk.support.RequestResponse>;
			public getAllRequests(param0: string, param1: string): retrofit2.Call<zendesk.support.RequestsResponse>;
			public createRequest(param0: string, param1: zendesk.support.CreateRequestWrapper): retrofit2.Call<zendesk.support.RequestResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestSessionCache {
			public static class: java.lang.Class<zendesk.support.RequestSessionCache>;
			/**
			 * Constructs a new instance of the zendesk.support.RequestSessionCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				updateTicketFormCache(param0: java.util.List<zendesk.support.TicketForm>): void;
				getTicketFormsById(param0: java.util.List<java.lang.Long>): java.util.List<zendesk.support.TicketForm>;
				containsAllTicketForms(param0: java.util.List<java.lang.Long>): boolean;
			});
			public constructor();
			public updateTicketFormCache(param0: java.util.List<zendesk.support.TicketForm>): void;
			public getTicketFormsById(param0: java.util.List<java.lang.Long>): java.util.List<zendesk.support.TicketForm>;
			public containsAllTicketForms(param0: java.util.List<java.lang.Long>): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestStatus {
			public static class: java.lang.Class<zendesk.support.RequestStatus>;
			public static New: zendesk.support.RequestStatus;
			public static Open: zendesk.support.RequestStatus;
			public static Pending: zendesk.support.RequestStatus;
			public static Hold: zendesk.support.RequestStatus;
			public static Solved: zendesk.support.RequestStatus;
			public static Closed: zendesk.support.RequestStatus;
			public static values(): native.Array<zendesk.support.RequestStatus>;
			public static valueOf(param0: string): zendesk.support.RequestStatus;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestStorage {
			public static class: java.lang.Class<zendesk.support.RequestStorage>;
			/**
			 * Constructs a new instance of the zendesk.support.RequestStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				storeRequestData(param0: java.util.List<zendesk.support.RequestData>): void;
				getRequestData(): java.util.List<zendesk.support.RequestData>;
				isRequestDataExpired(): boolean;
				updateRequestData(param0: java.util.List<zendesk.support.Request>): void;
				markRequestAsRead(param0: string, param1: number): void;
				markRequestAsUnread(param0: string): void;
			});
			public constructor();
			public storeRequestData(param0: java.util.List<zendesk.support.RequestData>): void;
			public getRequestData(): java.util.List<zendesk.support.RequestData>;
			public isRequestDataExpired(): boolean;
			public markRequestAsRead(param0: string, param1: number): void;
			public markRequestAsUnread(param0: string): void;
			public updateRequestData(param0: java.util.List<zendesk.support.Request>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestUpdates {
			public static class: java.lang.Class<zendesk.support.RequestUpdates>;
			public getRequestUpdates(): java.util.Map<string,java.lang.Integer>;
			public totalUpdates(): number;
			public isRequestUnread(param0: string): boolean;
			public constructor(param0: java.util.Map<string,java.lang.Integer>);
			public hasUpdatedRequests(): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestsResponse extends zendesk.support.ResponseWrapper {
			public static class: java.lang.Class<zendesk.support.RequestsResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export abstract class ResponseWrapper {
			public static class: java.lang.Class<zendesk.support.ResponseWrapper>;
			public getCount(): java.lang.Integer;
			public constructor();
			public getNextPage(): string;
			public getPreviousPage(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class SearchArticle {
			public static class: java.lang.Class<zendesk.support.SearchArticle>;
			public getCategory(): zendesk.support.Category;
			public getSection(): zendesk.support.Section;
			public getArticle(): zendesk.support.Article;
			public constructor(param0: zendesk.support.Article, param1: zendesk.support.Section, param2: zendesk.support.Category);
		}
	}
}

declare module zendesk {
	export module support {
		export class Section {
			public static class: java.lang.Class<zendesk.support.Section>;
			public getCategoryId(): java.lang.Long;
			public getUrl(): string;
			public isOutdated(): boolean;
			public getArticlesCount(): number;
			public getCreatedAt(): java.util.Date;
			public getPosition(): number;
			public constructor();
			public getUpdatedAt(): java.util.Date;
			public getLocale(): string;
			public getSorting(): string;
			public getName(): string;
			public getId(): java.lang.Long;
			public getSourceLocale(): string;
			public getDescription(): string;
			public getHtmlUrl(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class SectionItem extends zendesk.support.HelpItem {
			public static class: java.lang.Class<zendesk.support.SectionItem>;
			public addArticle(param0: zendesk.support.ArticleItem): void;
			public equals(param0: any): boolean;
			public getName(): string;
			public getChildren(): java.util.List<zendesk.support.HelpItem>;
			public getId(): java.lang.Long;
			public getParentId(): java.lang.Long;
			public getTotalArticlesCount(): number;
			public constructor();
			public getViewType(): number;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class SectionResponse {
			public static class: java.lang.Class<zendesk.support.SectionResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SectionsResponse {
			public static class: java.lang.Class<zendesk.support.SectionsResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SeeAllArticlesItem extends zendesk.support.HelpItem {
			public static class: java.lang.Class<zendesk.support.SeeAllArticlesItem>;
			public equals(param0: any): boolean;
			public getName(): string;
			public constructor(param0: zendesk.support.SectionItem);
			public getId(): java.lang.Long;
			public getParentId(): java.lang.Long;
			public getSection(): zendesk.support.SectionItem;
			public setLoading(param0: boolean): void;
			public isLoading(): boolean;
			public getViewType(): number;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule {
			public static class: java.lang.Class<zendesk.support.ServiceModule>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvideCustomNetworkConfigFactory extends dagger.internal.Factory<zendesk.support.HelpCenterCachingNetworkConfig> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvideCustomNetworkConfigFactory>;
			public get(): zendesk.support.HelpCenterCachingNetworkConfig;
			public constructor(param0: javax.inject.Provider<zendesk.support.HelpCenterCachingInterceptor>);
			public static proxyProvideCustomNetworkConfig(param0: any): zendesk.support.HelpCenterCachingNetworkConfig;
			public static create(param0: javax.inject.Provider<zendesk.support.HelpCenterCachingInterceptor>): dagger.internal.Factory<zendesk.support.HelpCenterCachingNetworkConfig>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvideHelpCenterCachingInterceptorFactory extends dagger.internal.Factory<zendesk.support.HelpCenterCachingInterceptor> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvideHelpCenterCachingInterceptorFactory>;
			public static create(): dagger.internal.Factory<zendesk.support.HelpCenterCachingInterceptor>;
			public constructor();
			public static proxyProvideHelpCenterCachingInterceptor(): zendesk.support.HelpCenterCachingInterceptor;
			public get(): zendesk.support.HelpCenterCachingInterceptor;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvideZendeskHelpCenterServiceFactory extends dagger.internal.Factory<zendesk.support.ZendeskHelpCenterService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvideZendeskHelpCenterServiceFactory>;
			public static proxyProvideZendeskHelpCenterService(param0: any, param1: any): zendesk.support.ZendeskHelpCenterService;
			public get(): zendesk.support.ZendeskHelpCenterService;
			public static create(param0: javax.inject.Provider<zendesk.support.HelpCenterService>, param1: javax.inject.Provider<zendesk.support.HelpCenterLocaleConverter>): dagger.internal.Factory<zendesk.support.ZendeskHelpCenterService>;
			public constructor(param0: javax.inject.Provider<zendesk.support.HelpCenterService>, param1: javax.inject.Provider<zendesk.support.HelpCenterLocaleConverter>);
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvideZendeskRequestServiceFactory extends dagger.internal.Factory<zendesk.support.ZendeskRequestService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvideZendeskRequestServiceFactory>;
			public static create(param0: javax.inject.Provider<zendesk.support.RequestService>): dagger.internal.Factory<zendesk.support.ZendeskRequestService>;
			public constructor(param0: javax.inject.Provider<zendesk.support.RequestService>);
			public get(): zendesk.support.ZendeskRequestService;
			public static proxyProvideZendeskRequestService(param0: any): zendesk.support.ZendeskRequestService;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvideZendeskUploadServiceFactory extends dagger.internal.Factory<zendesk.support.ZendeskUploadService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvideZendeskUploadServiceFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.support.UploadService>);
			public static create(param0: javax.inject.Provider<zendesk.support.UploadService>): dagger.internal.Factory<zendesk.support.ZendeskUploadService>;
			public get(): zendesk.support.ZendeskUploadService;
			public static proxyProvideZendeskUploadService(param0: any): zendesk.support.ZendeskUploadService;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvidesHelpCenterServiceFactory extends dagger.internal.Factory<zendesk.support.HelpCenterService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvidesHelpCenterServiceFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>, param1: javax.inject.Provider<zendesk.support.HelpCenterCachingNetworkConfig>): dagger.internal.Factory<zendesk.support.HelpCenterService>;
			public get(): zendesk.support.HelpCenterService;
			public constructor(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>, param1: javax.inject.Provider<zendesk.support.HelpCenterCachingNetworkConfig>);
			public static proxyProvidesHelpCenterService(param0: zendesk.core.RestServiceProvider, param1: any): zendesk.support.HelpCenterService;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvidesRequestServiceFactory extends dagger.internal.Factory<zendesk.support.RequestService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvidesRequestServiceFactory>;
			public get(): zendesk.support.RequestService;
			public static proxyProvidesRequestService(param0: zendesk.core.RestServiceProvider): zendesk.support.RequestService;
			public constructor(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>);
			public static create(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>): dagger.internal.Factory<zendesk.support.RequestService>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvidesUploadServiceFactory extends dagger.internal.Factory<zendesk.support.UploadService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvidesUploadServiceFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>): dagger.internal.Factory<zendesk.support.UploadService>;
			public static proxyProvidesUploadService(param0: zendesk.core.RestServiceProvider): zendesk.support.UploadService;
			public constructor(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>);
			public get(): zendesk.support.UploadService;
		}
	}
}

declare module zendesk {
	export module support {
		export class SimpleArticle {
			public static class: java.lang.Class<zendesk.support.SimpleArticle>;
			public getTitle(): string;
			public getId(): java.lang.Long;
			public constructor(param0: java.lang.Long, param1: string);
		}
	}
}

declare module zendesk {
	export module support {
		export class SortBy {
			public static class: java.lang.Class<zendesk.support.SortBy>;
			public static POSITION: zendesk.support.SortBy;
			public static TITLE: zendesk.support.SortBy;
			public static CREATED_AT: zendesk.support.SortBy;
			public static UPDATED_AT: zendesk.support.SortBy;
			public static valueOf(param0: string): zendesk.support.SortBy;
			public static values(): native.Array<zendesk.support.SortBy>;
			public getApiValue(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class SortOrder {
			public static class: java.lang.Class<zendesk.support.SortOrder>;
			public static ASCENDING: zendesk.support.SortOrder;
			public static DESCENDING: zendesk.support.SortOrder;
			public static values(): native.Array<zendesk.support.SortOrder>;
			public static valueOf(param0: string): zendesk.support.SortOrder;
			public getApiValue(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule {
			public static class: java.lang.Class<zendesk.support.StorageModule>;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule_ProvideArticleVoteStorageFactory extends dagger.internal.Factory<zendesk.support.ArticleVoteStorage> {
			public static class: java.lang.Class<zendesk.support.StorageModule_ProvideArticleVoteStorageFactory>;
			public static create(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>): dagger.internal.Factory<zendesk.support.ArticleVoteStorage>;
			public constructor(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>);
			public get(): zendesk.support.ArticleVoteStorage;
			public static proxyProvideArticleVoteStorage(param0: zendesk.support.StorageModule, param1: zendesk.core.SessionStorage): zendesk.support.ArticleVoteStorage;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule_ProvideHelpCenterSessionCacheFactory extends dagger.internal.Factory<zendesk.support.HelpCenterSessionCache> {
			public static class: java.lang.Class<zendesk.support.StorageModule_ProvideHelpCenterSessionCacheFactory>;
			public static create(param0: zendesk.support.StorageModule): dagger.internal.Factory<zendesk.support.HelpCenterSessionCache>;
			public static proxyProvideHelpCenterSessionCache(param0: zendesk.support.StorageModule): zendesk.support.HelpCenterSessionCache;
			public constructor(param0: zendesk.support.StorageModule);
			public get(): zendesk.support.HelpCenterSessionCache;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule_ProvideRequestMigratorFactory extends dagger.internal.Factory<zendesk.support.RequestMigrator> {
			public static class: java.lang.Class<zendesk.support.StorageModule_ProvideRequestMigratorFactory>;
			public get(): zendesk.support.RequestMigrator;
			public constructor(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<globalAndroid.content.Context>);
			public static proxyProvideRequestMigrator(param0: zendesk.support.StorageModule, param1: globalAndroid.content.Context): zendesk.support.RequestMigrator;
			public static create(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<globalAndroid.content.Context>): dagger.internal.Factory<zendesk.support.RequestMigrator>;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule_ProvideRequestSessionCacheFactory extends dagger.internal.Factory<zendesk.support.RequestSessionCache> {
			public static class: java.lang.Class<zendesk.support.StorageModule_ProvideRequestSessionCacheFactory>;
			public get(): zendesk.support.RequestSessionCache;
			public static proxyProvideRequestSessionCache(param0: zendesk.support.StorageModule): zendesk.support.RequestSessionCache;
			public constructor(param0: zendesk.support.StorageModule);
			public static create(param0: zendesk.support.StorageModule): dagger.internal.Factory<zendesk.support.RequestSessionCache>;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule_ProvideRequestStorageFactory extends dagger.internal.Factory<zendesk.support.RequestStorage> {
			public static class: java.lang.Class<zendesk.support.StorageModule_ProvideRequestStorageFactory>;
			public static proxyProvideRequestStorage(param0: zendesk.support.StorageModule, param1: zendesk.core.SessionStorage, param2: any, param3: zendesk.core.MemoryCache): zendesk.support.RequestStorage;
			public constructor(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>, param2: javax.inject.Provider<zendesk.support.RequestMigrator>, param3: javax.inject.Provider<zendesk.core.MemoryCache>);
			public get(): zendesk.support.RequestStorage;
			public static create(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>, param2: javax.inject.Provider<zendesk.support.RequestMigrator>, param3: javax.inject.Provider<zendesk.core.MemoryCache>): dagger.internal.Factory<zendesk.support.RequestStorage>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SuggestedArticleResponse {
			public static class: java.lang.Class<zendesk.support.SuggestedArticleResponse>;
			public getResults(): java.util.List<zendesk.support.SimpleArticle>;
			public constructor();
		}
	}
}

declare module zendesk {
	export module support {
		export class SuggestedArticleSearch {
			public static class: java.lang.Class<zendesk.support.SuggestedArticleSearch>;
			public getLabelNames(): string;
			public getCategoryId(): java.lang.Long;
			public getQuery(): string;
			public getSectionId(): java.lang.Long;
			public getLocale(): java.util.Locale;
		}
		export module SuggestedArticleSearch {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.SuggestedArticleSearch.Builder>;
				public withSectionId(param0: java.lang.Long): zendesk.support.SuggestedArticleSearch.Builder;
				public withQuery(param0: string): zendesk.support.SuggestedArticleSearch.Builder;
				public forLocale(param0: java.util.Locale): zendesk.support.SuggestedArticleSearch.Builder;
				public withLabelNames(param0: native.Array<string>): zendesk.support.SuggestedArticleSearch.Builder;
				public withCategoryId(param0: java.lang.Long): zendesk.support.SuggestedArticleSearch.Builder;
				public build(): zendesk.support.SuggestedArticleSearch;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class Support {
			public static class: java.lang.Class<zendesk.support.Support>;
			public static INSTANCE: zendesk.support.Support;
			public provider(): zendesk.support.ProviderStore;
			public setHelpCenterLocaleOverride(param0: java.util.Locale): void;
			public static values(): native.Array<zendesk.support.Support>;
			public refreshRequest(param0: string, param1: globalAndroid.content.Context): boolean;
			public init(param0: zendesk.core.Zendesk): void;
			public static valueOf(param0: string): zendesk.support.Support;
			public getHelpCenterLocaleOverride(): java.util.Locale;
			public isInitialized(): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportApplicationModule {
			public static class: java.lang.Class<zendesk.support.SupportApplicationModule>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportApplicationModule_ProvideLocaleFactory extends dagger.internal.Factory<java.util.Locale> {
			public static class: java.lang.Class<zendesk.support.SupportApplicationModule_ProvideLocaleFactory>;
			public get(): java.util.Locale;
			public static create(param0: zendesk.support.SupportApplicationModule): dagger.internal.Factory<java.util.Locale>;
			public constructor(param0: zendesk.support.SupportApplicationModule);
			public static proxyProvideLocale(param0: zendesk.support.SupportApplicationModule): java.util.Locale;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportApplicationModule_ProvideMetadataFactory extends dagger.internal.Factory<zendesk.support.SupportSdkMetadata> {
			public static class: java.lang.Class<zendesk.support.SupportApplicationModule_ProvideMetadataFactory>;
			public constructor(param0: zendesk.support.SupportApplicationModule, param1: javax.inject.Provider<globalAndroid.content.Context>);
			public static proxyProvideMetadata(param0: zendesk.support.SupportApplicationModule, param1: globalAndroid.content.Context): zendesk.support.SupportSdkMetadata;
			public static create(param0: zendesk.support.SupportApplicationModule, param1: javax.inject.Provider<globalAndroid.content.Context>): dagger.internal.Factory<zendesk.support.SupportSdkMetadata>;
			public get(): zendesk.support.SupportSdkMetadata;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportApplicationModule_ProvidesZendeskTrackerFactory extends dagger.internal.Factory<zendesk.support.ZendeskTracker> {
			public static class: java.lang.Class<zendesk.support.SupportApplicationModule_ProvidesZendeskTrackerFactory>;
			public static create(param0: zendesk.support.SupportApplicationModule): dagger.internal.Factory<zendesk.support.ZendeskTracker>;
			public constructor(param0: zendesk.support.SupportApplicationModule);
			public get(): zendesk.support.ZendeskTracker;
			public static proxyProvidesZendeskTracker(param0: zendesk.support.SupportApplicationModule): zendesk.support.ZendeskTracker;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportBlipsProvider {
			public static class: java.lang.Class<zendesk.support.SupportBlipsProvider>;
			/**
			 * Constructs a new instance of the zendesk.support.SupportBlipsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				supportSdkInit(): void;
				requestCreated(param0: string): void;
				requestUpdated(param0: string): void;
				requestViewed(param0: string): void;
				requestListViewed(): void;
				helpCenterSearch(param0: string): void;
				articleView(param0: zendesk.support.Article): void;
				articleVote(param0: java.lang.Long, param1: number): void;
			});
			public constructor();
			public requestListViewed(): void;
			public requestCreated(param0: string): void;
			public articleView(param0: zendesk.support.Article): void;
			public requestViewed(param0: string): void;
			public articleVote(param0: java.lang.Long, param1: number): void;
			public supportSdkInit(): void;
			public requestUpdated(param0: string): void;
			public helpCenterSearch(param0: string): void;
		}
		export module SupportBlipsProvider {
			export class ArticleVote {
				public static class: java.lang.Class<zendesk.support.SupportBlipsProvider.ArticleVote>;
				/**
				 * Constructs a new instance of the zendesk.support.SupportBlipsProvider$ArticleVote interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static ARTICLE_VOTE_DOWN: number;
				public static ARTICLE_VOTE_UP: number;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule {
			public static class: java.lang.Class<zendesk.support.SupportModule>;
			public constructor(param0: zendesk.support.RequestProvider, param1: zendesk.support.UploadProvider, param2: zendesk.support.HelpCenterProvider, param3: zendesk.support.SupportSettingsProvider, param4: zendesk.support.SupportBlipsProvider, param5: okhttp3.OkHttpClient, param6: zendesk.support.ZendeskTracker, param7: zendesk.support.ArticleVoteStorage);
			public getId(): java.util.UUID;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesArticleVoteStorageFactory extends dagger.internal.Factory<zendesk.support.ArticleVoteStorage> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesArticleVoteStorageFactory>;
			public constructor(param0: zendesk.support.SupportModule);
			public static create(param0: zendesk.support.SupportModule): dagger.internal.Factory<zendesk.support.ArticleVoteStorage>;
			public static proxyProvidesArticleVoteStorage(param0: zendesk.support.SupportModule): zendesk.support.ArticleVoteStorage;
			public get(): zendesk.support.ArticleVoteStorage;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesBlipsProviderFactory extends dagger.internal.Factory<zendesk.support.SupportBlipsProvider> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesBlipsProviderFactory>;
			public constructor(param0: zendesk.support.SupportModule);
			public static create(param0: zendesk.support.SupportModule): dagger.internal.Factory<zendesk.support.SupportBlipsProvider>;
			public get(): zendesk.support.SupportBlipsProvider;
			public static proxyProvidesBlipsProvider(param0: zendesk.support.SupportModule): zendesk.support.SupportBlipsProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesHelpCenterProviderFactory extends dagger.internal.Factory<zendesk.support.HelpCenterProvider> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesHelpCenterProviderFactory>;
			public get(): zendesk.support.HelpCenterProvider;
			public constructor(param0: zendesk.support.SupportModule);
			public static proxyProvidesHelpCenterProvider(param0: zendesk.support.SupportModule): zendesk.support.HelpCenterProvider;
			public static create(param0: zendesk.support.SupportModule): dagger.internal.Factory<zendesk.support.HelpCenterProvider>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesOkHttpClientFactory extends dagger.internal.Factory<okhttp3.OkHttpClient> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesOkHttpClientFactory>;
			public constructor(param0: zendesk.support.SupportModule);
			public static create(param0: zendesk.support.SupportModule): dagger.internal.Factory<okhttp3.OkHttpClient>;
			public static proxyProvidesOkHttpClient(param0: zendesk.support.SupportModule): okhttp3.OkHttpClient;
			public get(): okhttp3.OkHttpClient;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesRequestProviderFactory extends dagger.internal.Factory<zendesk.support.RequestProvider> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesRequestProviderFactory>;
			public constructor(param0: zendesk.support.SupportModule);
			public get(): zendesk.support.RequestProvider;
			public static create(param0: zendesk.support.SupportModule): dagger.internal.Factory<zendesk.support.RequestProvider>;
			public static proxyProvidesRequestProvider(param0: zendesk.support.SupportModule): zendesk.support.RequestProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesSettingsProviderFactory extends dagger.internal.Factory<zendesk.support.SupportSettingsProvider> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesSettingsProviderFactory>;
			public constructor(param0: zendesk.support.SupportModule);
			public get(): zendesk.support.SupportSettingsProvider;
			public static proxyProvidesSettingsProvider(param0: zendesk.support.SupportModule): zendesk.support.SupportSettingsProvider;
			public static create(param0: zendesk.support.SupportModule): dagger.internal.Factory<zendesk.support.SupportSettingsProvider>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesUploadProviderFactory extends dagger.internal.Factory<zendesk.support.UploadProvider> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesUploadProviderFactory>;
			public constructor(param0: zendesk.support.SupportModule);
			public static proxyProvidesUploadProvider(param0: zendesk.support.SupportModule): zendesk.support.UploadProvider;
			public get(): zendesk.support.UploadProvider;
			public static create(param0: zendesk.support.SupportModule): dagger.internal.Factory<zendesk.support.UploadProvider>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesZendeskTrackerFactory extends dagger.internal.Factory<zendesk.support.ZendeskTracker> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesZendeskTrackerFactory>;
			public constructor(param0: zendesk.support.SupportModule);
			public static proxyProvidesZendeskTracker(param0: zendesk.support.SupportModule): zendesk.support.ZendeskTracker;
			public get(): zendesk.support.ZendeskTracker;
			public static create(param0: zendesk.support.SupportModule): dagger.internal.Factory<zendesk.support.ZendeskTracker>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkMetadata {
			public static class: java.lang.Class<zendesk.support.SupportSdkMetadata>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkProvidersComponent {
			public static class: java.lang.Class<zendesk.support.SupportSdkProvidersComponent>;
			/**
			 * Constructs a new instance of the zendesk.support.SupportSdkProvidersComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				inject(param0: zendesk.support.Support): zendesk.support.Support;
			});
			public constructor();
			public inject(param0: zendesk.support.Support): zendesk.support.Support;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkSettings {
			public static class: java.lang.Class<zendesk.support.SupportSdkSettings>;
			public getContactZendeskTags(): java.util.List<string>;
			public isAttachmentsEnabled(): boolean;
			public hasHelpCenterSettings(): boolean;
			public isTicketFormSupportAvailable(): boolean;
			public getHelpCenterLocale(): string;
			public getMaxAttachmentSize(): number;
			public isNeverAskForEmailEnabled(): boolean;
			public getReferrerUrl(): string;
			public constructor(param0: zendesk.support.SupportSettings, param1: zendesk.support.HelpCenterSettings, param2: zendesk.core.AuthenticationType);
			public isHelpCenterArticleVotingEnabled(): boolean;
			public isHelpCenterEnabled(): boolean;
			public getAuthenticationType(): zendesk.core.AuthenticationType;
			public isShowReferrerLogoEnabled(): boolean;
			public isConversationsEnabled(): boolean;
			public isShowClosedRequests(): boolean;
			public getRequestSystemMessage(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSettings {
			public static class: java.lang.Class<zendesk.support.SupportSettings>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSettingsProvider {
			public static class: java.lang.Class<zendesk.support.SupportSettingsProvider>;
			/**
			 * Constructs a new instance of the zendesk.support.SupportSettingsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
			});
			public constructor();
			public getSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class Support_MembersInjector extends dagger.MembersInjector<zendesk.support.Support> {
			public static class: java.lang.Class<zendesk.support.Support_MembersInjector>;
			public static injectBlipsProvider(param0: zendesk.support.Support, param1: zendesk.support.SupportBlipsProvider): void;
			public static injectAuthenticationProvider(param0: zendesk.support.Support, param1: zendesk.core.AuthenticationProvider): void;
			public static injectRequestProvider(param0: zendesk.support.Support, param1: zendesk.support.RequestProvider): void;
			public static injectProviderStore(param0: zendesk.support.Support, param1: zendesk.support.ProviderStore): void;
			public injectMembers(param0: zendesk.support.Support): void;
			public constructor(param0: javax.inject.Provider<zendesk.support.ProviderStore>, param1: javax.inject.Provider<zendesk.support.SupportModule>, param2: javax.inject.Provider<zendesk.support.RequestMigrator>, param3: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param4: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param5: javax.inject.Provider<zendesk.support.RequestProvider>, param6: javax.inject.Provider<zendesk.core.AuthenticationProvider>);
			public static injectSupportModule(param0: zendesk.support.Support, param1: zendesk.support.SupportModule): void;
			public static create(param0: javax.inject.Provider<zendesk.support.ProviderStore>, param1: javax.inject.Provider<zendesk.support.SupportModule>, param2: javax.inject.Provider<zendesk.support.RequestMigrator>, param3: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param4: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param5: javax.inject.Provider<zendesk.support.RequestProvider>, param6: javax.inject.Provider<zendesk.core.AuthenticationProvider>): dagger.MembersInjector<zendesk.support.Support>;
			public static injectActionHandlerRegistry(param0: zendesk.support.Support, param1: zendesk.core.ActionHandlerRegistry): void;
			public static injectRequestMigrator(param0: zendesk.support.Support, param1: any): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketField {
			public static class: java.lang.Class<zendesk.support.TicketField>;
			public getTitle(): string;
			public getId(): number;
			public getTitleInPortal(): string;
			public getRegexpForValidation(): string;
			public getTicketFieldSystemOptions(): java.util.List<zendesk.support.TicketFieldSystemOption>;
			public getDescription(): string;
			public getTicketFieldOptions(): java.util.List<zendesk.support.TicketFieldOption>;
			public getType(): zendesk.support.TicketFieldType;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketFieldOption {
			public static class: java.lang.Class<zendesk.support.TicketFieldOption>;
			public getName(): string;
			public getId(): number;
			public getValue(): string;
			public isDefault(): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketFieldSystemOption {
			public static class: java.lang.Class<zendesk.support.TicketFieldSystemOption>;
			public getName(): string;
			public getValue(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketFieldType {
			public static class: java.lang.Class<zendesk.support.TicketFieldType>;
			public static Checkbox: zendesk.support.TicketFieldType;
			public static Date: zendesk.support.TicketFieldType;
			public static Decimal: zendesk.support.TicketFieldType;
			public static Description: zendesk.support.TicketFieldType;
			public static Integer: zendesk.support.TicketFieldType;
			public static PartialCreditCard: zendesk.support.TicketFieldType;
			public static Priority: zendesk.support.TicketFieldType;
			public static Status: zendesk.support.TicketFieldType;
			public static TicketType: zendesk.support.TicketFieldType;
			public static Regexp: zendesk.support.TicketFieldType;
			public static Subject: zendesk.support.TicketFieldType;
			public static Tagger: zendesk.support.TicketFieldType;
			public static Text: zendesk.support.TicketFieldType;
			public static TextArea: zendesk.support.TicketFieldType;
			public static MultiSelect: zendesk.support.TicketFieldType;
			public static Unknown: zendesk.support.TicketFieldType;
			public static valueOf(param0: string): zendesk.support.TicketFieldType;
			public static values(): native.Array<zendesk.support.TicketFieldType>;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketForm {
			public static class: java.lang.Class<zendesk.support.TicketForm>;
			public constructor(param0: number, param1: string, param2: java.util.List<zendesk.support.TicketField>);
			public getName(): string;
			public getId(): number;
			public getTicketFields(): java.util.List<zendesk.support.TicketField>;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketFormSettings {
			public static class: java.lang.Class<zendesk.support.TicketFormSettings>;
			public isAvailable(): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class UpdateRequestWrapper {
			public static class: java.lang.Class<zendesk.support.UpdateRequestWrapper>;
		}
	}
}

declare module zendesk {
	export module support {
		export class UploadProvider {
			public static class: java.lang.Class<zendesk.support.UploadProvider>;
			/**
			 * Constructs a new instance of the zendesk.support.UploadProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				uploadAttachment(param0: string, param1: java.io.File, param2: string, param3: com.zendesk.service.ZendeskCallback<zendesk.support.UploadResponse>): void;
				deleteAttachment(param0: string, param1: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			});
			public constructor();
			public uploadAttachment(param0: string, param1: java.io.File, param2: string, param3: com.zendesk.service.ZendeskCallback<zendesk.support.UploadResponse>): void;
			public deleteAttachment(param0: string, param1: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class UploadResponse {
			public static class: java.lang.Class<zendesk.support.UploadResponse>;
			public getToken(): string;
			public constructor();
			public getAttachment(): zendesk.support.Attachment;
			public getExpiresAt(): java.util.Date;
		}
	}
}

declare module zendesk {
	export module support {
		export class UploadResponseWrapper {
			public static class: java.lang.Class<zendesk.support.UploadResponseWrapper>;
		}
	}
}

declare module zendesk {
	export module support {
		export class UploadService {
			public static class: java.lang.Class<zendesk.support.UploadService>;
			/**
			 * Constructs a new instance of the zendesk.support.UploadService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				uploadAttachment(param0: string, param1: okhttp3.RequestBody): retrofit2.Call<zendesk.support.UploadResponseWrapper>;
				deleteAttachment(param0: string): retrofit2.Call<java.lang.Void>;
			});
			public constructor();
			public uploadAttachment(param0: string, param1: okhttp3.RequestBody): retrofit2.Call<zendesk.support.UploadResponseWrapper>;
			public deleteAttachment(param0: string): retrofit2.Call<java.lang.Void>;
		}
	}
}

declare module zendesk {
	export module support {
		export class User {
			public static class: java.lang.Class<zendesk.support.User>;
			public equals(param0: any): boolean;
			public getTags(): java.util.List<string>;
			public getName(): string;
			public constructor(param0: java.lang.Long, param1: string, param2: zendesk.support.Attachment, param3: boolean, param4: java.lang.Long, param5: java.util.List<string>, param6: java.util.Map<string,string>);
			public getId(): java.lang.Long;
			public getUserFields(): java.util.Map<string,string>;
			public constructor();
			public getPhoto(): zendesk.support.Attachment;
			public getOrganizationId(): java.lang.Long;
			public isAgent(): boolean;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskArticleVoteStorage extends zendesk.support.ArticleVoteStorage {
			public static class: java.lang.Class<zendesk.support.ZendeskArticleVoteStorage>;
			public removeStoredArticleVote(param0: java.lang.Long): void;
			public storeArticleVote(param0: java.lang.Long, param1: zendesk.support.ArticleVote): void;
			public getStoredArticleVote(param0: java.lang.Long): zendesk.support.ArticleVote;
		}
		export module ZendeskArticleVoteStorage {
			export class ArticleVoteMapWrapper {
				public static class: java.lang.Class<zendesk.support.ZendeskArticleVoteStorage.ArticleVoteMapWrapper>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export abstract class ZendeskCallbackSuccess<E>  extends com.zendesk.service.ZendeskCallback<any> {
			public static class: java.lang.Class<zendesk.support.ZendeskCallbackSuccess<any>>;
			public onError(param0: com.zendesk.service.ErrorResponse): void;
			public onSuccess(param0: any): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskHelpCenterProvider extends zendesk.support.HelpCenterProvider {
			public static class: java.lang.Class<zendesk.support.ZendeskHelpCenterProvider>;
			public getAttachments(param0: java.lang.Long, param1: zendesk.support.AttachmentType, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpCenterAttachment>>): void;
			public getArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Article>): void;
			public getArticles(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
			public getSections(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Section>>): void;
			public getCategory(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Category>): void;
			public deleteVote(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public upvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
			public submitRecordArticleView(param0: zendesk.support.Article, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public downvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
			public getCategories(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Category>>): void;
			public listArticlesFlat(param0: zendesk.support.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.FlatArticle>>): void;
			public getHelp(param0: zendesk.support.HelpRequest, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
			public getArticles(param0: java.lang.Long, param1: string, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
			public listArticles(param0: zendesk.support.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
			public getSuggestedArticles(param0: zendesk.support.SuggestedArticleSearch, param1: com.zendesk.service.ZendeskCallback<zendesk.support.SuggestedArticleResponse>): void;
			public searchArticles(param0: zendesk.support.HelpCenterSearch, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
			public getSection(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Section>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskHelpCenterService {
			public static class: java.lang.Class<zendesk.support.ZendeskHelpCenterService>;
			public getAttachments(param0: java.util.Locale, param1: java.lang.Long, param2: zendesk.support.AttachmentType, param3: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpCenterAttachment>>): void;
			public getCategoryById(param0: java.lang.Long, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback<zendesk.support.Category>): void;
			public getSectionById(param0: java.lang.Long, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback<zendesk.support.Section>): void;
			public getSuggestedArticles(param0: string, param1: java.util.Locale, param2: string, param3: java.lang.Long, param4: java.lang.Long, param5: com.zendesk.service.ZendeskCallback<zendesk.support.SuggestedArticleResponse>): void;
			public getArticle(param0: java.lang.Long, param1: java.util.Locale, param2: string, param3: com.zendesk.service.ZendeskCallback<zendesk.support.Article>): void;
			public downvoteArticle(param0: java.lang.Long, param1: string, param2: com.zendesk.service.ZendeskCallback<zendesk.support.ArticleVoteResponse>): void;
			public deleteVote(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public submitRecordArticleView(param0: java.lang.Long, param1: java.util.Locale, param2: zendesk.support.RecordArticleViewRequest, param3: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public getSectionsForCategory(param0: java.lang.Long, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Section>>): void;
			public searchArticles(param0: string, param1: java.util.Locale, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: java.lang.Integer, param8: com.zendesk.service.ZendeskCallback<zendesk.support.ArticlesSearchResponse>): void;
			public getCategories(param0: java.util.Locale, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Category>>): void;
			public upvoteArticle(param0: java.lang.Long, param1: string, param2: com.zendesk.service.ZendeskCallback<zendesk.support.ArticleVoteResponse>): void;
			public listArticles(param0: string, param1: java.util.Locale, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer, param7: com.zendesk.service.ZendeskCallback<zendesk.support.ArticlesListResponse>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskHelpCenterSessionCache extends zendesk.support.HelpCenterSessionCache {
			public static class: java.lang.Class<zendesk.support.ZendeskHelpCenterSessionCache>;
			public static DEFAULT_SEARCH: zendesk.support.LastSearch;
			public isUniqueSearchResultClick(): boolean;
			public unsetUniqueSearchResultClick(): void;
			public getLastSearch(): zendesk.support.LastSearch;
			public setLastSearch(param0: string, param1: number): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskProviderStore extends zendesk.support.ProviderStore {
			public static class: java.lang.Class<zendesk.support.ZendeskProviderStore>;
			public helpCenterProvider(): zendesk.support.HelpCenterProvider;
			public requestProvider(): zendesk.support.RequestProvider;
			public uploadProvider(): zendesk.support.UploadProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskRequestProvider extends zendesk.support.RequestProvider {
			public static class: java.lang.Class<zendesk.support.ZendeskRequestProvider>;
			public createRequest(param0: zendesk.support.CreateRequest, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
			public getCommentsSince(param0: string, param1: java.util.Date, param2: boolean, param3: com.zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
			public getUpdatesForDevice(param0: com.zendesk.service.ZendeskCallback<zendesk.support.RequestUpdates>): void;
			public addComment(param0: string, param1: zendesk.support.EndUserComment, param2: com.zendesk.service.ZendeskCallback<zendesk.support.Comment>): void;
			public getComments(param0: string, param1: com.zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
			public getTicketFormsById(param0: java.util.List<java.lang.Long>, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.TicketForm>>): void;
			public markRequestAsRead(param0: string, param1: number): void;
			public markRequestAsUnread(param0: string): void;
			public getRequests(param0: string, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
			public getAllRequests(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
			public getRequest(param0: string, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskRequestService {
			public static class: java.lang.Class<zendesk.support.ZendeskRequestService>;
			public createRequest(param0: string, param1: zendesk.support.CreateRequest, param2: com.zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskRequestSessionCache extends zendesk.support.RequestSessionCache {
			public static class: java.lang.Class<zendesk.support.ZendeskRequestSessionCache>;
			public updateTicketFormCache(param0: java.util.List<zendesk.support.TicketForm>): void;
			public getTicketFormsById(param0: java.util.List<java.lang.Long>): java.util.List<zendesk.support.TicketForm>;
			public containsAllTicketForms(param0: java.util.List<java.lang.Long>): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskRequestStorage extends zendesk.support.RequestStorage {
			public static class: java.lang.Class<zendesk.support.ZendeskRequestStorage>;
			public storeRequestData(param0: java.util.List<zendesk.support.RequestData>): void;
			public getRequestData(): java.util.List<zendesk.support.RequestData>;
			public isRequestDataExpired(): boolean;
			public markRequestAsRead(param0: string, param1: number): void;
			public markRequestAsUnread(param0: string): void;
			public updateRequestData(param0: java.util.List<zendesk.support.Request>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskSupportBlipsProvider extends zendesk.support.SupportBlipsProvider {
			public static class: java.lang.Class<zendesk.support.ZendeskSupportBlipsProvider>;
			public requestListViewed(): void;
			public articleView(param0: zendesk.support.Article): void;
			public requestCreated(param0: string): void;
			public articleVote(param0: java.lang.Long, param1: number): void;
			public requestViewed(param0: string): void;
			public supportSdkInit(): void;
			public requestUpdated(param0: string): void;
			public helpCenterSearch(param0: string): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskSupportSettingsProvider extends zendesk.support.SupportSettingsProvider {
			public static class: java.lang.Class<zendesk.support.ZendeskSupportSettingsProvider>;
			public getSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
		}
		export module ZendeskSupportSettingsProvider {
			export class LoadHelpCenterSettings extends com.zendesk.service.ZendeskCallback<zendesk.core.SettingsPack<zendesk.support.HelpCenterSettings>> {
				public static class: java.lang.Class<zendesk.support.ZendeskSupportSettingsProvider.LoadHelpCenterSettings>;
				public onSuccess(param0: zendesk.core.SettingsPack<zendesk.support.HelpCenterSettings>): void;
				public onError(param0: com.zendesk.service.ErrorResponse): void;
			}
			export class LoadSupportSettings extends com.zendesk.service.ZendeskCallback<zendesk.core.SettingsPack<zendesk.support.SupportSettings>> {
				public static class: java.lang.Class<zendesk.support.ZendeskSupportSettingsProvider.LoadSupportSettings>;
				public onSuccess(param0: zendesk.core.SettingsPack<zendesk.support.SupportSettings>): void;
				public onError(param0: com.zendesk.service.ErrorResponse): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskTracker {
			public static class: java.lang.Class<zendesk.support.ZendeskTracker>;
			/**
			 * Constructs a new instance of the zendesk.support.ZendeskTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				helpCenterLoaded(): void;
				helpCenterSearched(param0: string): void;
				helpCenterArticleViewed(): void;
				requestCreated(): void;
				requestUpdated(): void;
			});
			public constructor();
			public requestCreated(): void;
			public requestUpdated(): void;
			public helpCenterSearched(param0: string): void;
			public helpCenterLoaded(): void;
			public helpCenterArticleViewed(): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskUploadProvider extends zendesk.support.UploadProvider {
			public static class: java.lang.Class<zendesk.support.ZendeskUploadProvider>;
			public uploadAttachment(param0: string, param1: java.io.File, param2: string, param3: com.zendesk.service.ZendeskCallback<zendesk.support.UploadResponse>): void;
			public deleteAttachment(param0: string, param1: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskUploadService {
			public static class: java.lang.Class<zendesk.support.ZendeskUploadService>;
			public constructor(param0: zendesk.support.UploadService);
		}
	}
}

//Generics information:
//zendesk.support.ZendeskCallbackSuccess:1

