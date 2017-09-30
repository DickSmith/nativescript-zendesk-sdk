declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
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

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace access {
          export class AccessToken {
            public getUserId(): string;
            public constructor();
            public equals(param0: java.lang.Object): boolean;
            public getAccessToken(): string;
            public hashCode(): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace access {
          export class AnonymousIdentity {
            public reloadGuid(): void;
            public constructor();
            public equals(param0: java.lang.Object): boolean;
            public hashCode(): number;
            public getEmail(): string;
            public getSdkGuid(): string;
            public getName(): string;
          }
          export namespace AnonymousIdentity {
            export class Builder {
              public constructor();
              public withEmailIdentifier(param0: string): com.zendesk.sdk.model.access.AnonymousIdentity.Builder;
              public build(): com.zendesk.sdk.model.access.Identity;
              public withNameIdentifier(param0: string): com.zendesk.sdk.model.access.AnonymousIdentity.Builder;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace access {
          export class AuthenticationRequestWrapper {
            public constructor();
            public setUser(param0: com.zendesk.sdk.model.access.Identity): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace access {
          export class AuthenticationResponse {
            public getAuthentication(): com.zendesk.sdk.model.access.AccessToken;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace access {
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

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace access {
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

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace access {
          export class JwtIdentity {
            public equals(param0: java.lang.Object): boolean;
            public constructor(param0: string);
            public hashCode(): number;
            public getJwtUserIdentifier(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class Article {
            public static UNKNOWN_VOTE_COUNT: number;
            public getVoteSum(): number;
            public getUpvoteCount(): number;
            public getId(): java.lang.Long;
            public getCreatedAt(): java.util.Date;
            public getDownvoteCount(): number;
            public isOutdated(): boolean;
            public getAuthor(): com.zendesk.sdk.model.helpcenter.User;
            public getHtmlUrl(): string;
            public getAuthorId(): java.lang.Long;
            public getTitle(): string;
            public getLocale(): string;
            public isCommentsDisabled(): boolean;
            public getVoteCount(): number;
            public getSourceLocale(): string;
            public constructor();
            public getUpdatedAt(): java.util.Date;
            public setAuthor(param0: com.zendesk.sdk.model.helpcenter.User): void;
            public getBody(): string;
            public isDraft(): boolean;
            public getUrl(): string;
            public getLabelNames(): java.util.List;
            public getSectionId(): java.lang.Long;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class ArticleResponse {
            public constructor();
            public getArticle(): com.zendesk.sdk.model.helpcenter.Article;
            public getUsers(): java.util.List;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class ArticleVote {
            public getId(): java.lang.Long;
            public getCreatedAt(): java.util.Date;
            public constructor();
            public getItemId(): java.lang.Long;
            public equals(param0: java.lang.Object): boolean;
            public getUpdatedAt(): java.util.Date;
            public hashCode(): number;
            public getUrl(): string;
            public getValue(): java.lang.Integer;
            public getItemType(): string;
            public getUserId(): java.lang.Long;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class ArticleVoteResponse {
            public getVote(): com.zendesk.sdk.model.helpcenter.ArticleVote;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class ArticlesListResponse {
            public constructor();
            public getArticles(): java.util.List;
            public getSections(): java.util.List;
            public getCategories(): java.util.List;
            public getPreviousPage(): string;
            public getNextPage(): string;
            public getUsers(): java.util.List;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class ArticlesResponse {
            /**
             * Constructs a new instance of the com.zendesk.sdk.model.helpcenter.ArticlesResponse interface with the provided implementation.
             */
            public constructor(implementation: {
              getArticles(): java.util.List;
              getCategories(): java.util.List;
              getSections(): java.util.List;
              getUsers(): java.util.List;
            });
            public getArticles(): java.util.List;
            public getSections(): java.util.List;
            public getCategories(): java.util.List;
            public getUsers(): java.util.List;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class ArticlesSearchResponse {
            public constructor();
            public getArticles(): java.util.List;
            public getSections(): java.util.List;
            public getCategories(): java.util.List;
            public getPreviousPage(): string;
            public getNextPage(): string;
            public getUsers(): java.util.List;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class Attachment {
            public getId(): java.lang.Long;
            public getContentUrl(): string;
            public getCreatedAt(): java.util.Date;
            public getSize(): java.lang.Long;
            public constructor();
            public getUpdatedAt(): java.util.Date;
            public getFileName(): string;
            public getUrl(): string;
            public getContentType(): string;
            public getArticleId(): java.lang.Long;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class AttachmentResponse {
            public constructor();
            public getArticleAttachments(): java.util.List;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class AttachmentType {
            public static INLINE: com.zendesk.sdk.model.helpcenter.AttachmentType;
            public static BLOCK: com.zendesk.sdk.model.helpcenter.AttachmentType;
            public static valueOf(param0: string): com.zendesk.sdk.model.helpcenter.AttachmentType;
            public getAttachmentType(): string;
            public static values(): native.Array<com.zendesk.sdk.model.helpcenter.AttachmentType>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class CategoriesResponse {
            public constructor();
            public getCategories(): java.util.List;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class Category {
            public getId(): java.lang.Long;
            public getCreatedAt(): java.util.Date;
            public isOutdated(): boolean;
            public getSourceLocale(): string;
            public constructor();
            public getDescription(): string;
            public getPosition(): number;
            public getUpdatedAt(): java.util.Date;
            public getHtmlUrl(): string;
            public getUrl(): string;
            public getLocale(): string;
            public getName(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class CategoryResponse {
            public constructor();
            public getCategory(): com.zendesk.sdk.model.helpcenter.Category;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class FlatArticle {
            public compareTo(param0: com.zendesk.sdk.model.helpcenter.FlatArticle): number;
            public constructor(param0: com.zendesk.sdk.model.helpcenter.Category, param1: com.zendesk.sdk.model.helpcenter.Section, param2: com.zendesk.sdk.model.helpcenter.Article);
            public getArticle(): com.zendesk.sdk.model.helpcenter.Article;
            public toString(): string;
            public getCategory(): com.zendesk.sdk.model.helpcenter.Category;
            public getSection(): com.zendesk.sdk.model.helpcenter.Section;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class HelpCenterSearch {
            public getQuery(): string;
            public getPerPage(): java.lang.Integer;
            public getPage(): java.lang.Integer;
            public getInclude(): string;
            public withQuery(param0: string): com.zendesk.sdk.model.helpcenter.HelpCenterSearch;
            public getLocale(): java.util.Locale;
            public getCategoryIds(): string;
            public getSectionIds(): string;
            public getLabelNames(): string;
          }
          export namespace HelpCenterSearch {
            export class Builder {
              public withIncludes(param0: native.Array<string>): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
              public withCategoryId(param0: java.lang.Long): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
              public page(param0: java.lang.Integer): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
              public withSectionId(param0: java.lang.Long): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
              public withQuery(param0: string): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
              public constructor();
              public build(): com.zendesk.sdk.model.helpcenter.HelpCenterSearch;
              public perPage(param0: java.lang.Integer): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
              public withLabelNames(param0: native.Array<string>): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
              public withSectionIds(param0: java.util.List): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
              public forLocale(param0: java.util.Locale): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
              public withCategoryIds(param0: java.util.List): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class LastSearch {
            public getQuery(): string;
            public constructor(param0: string, param1: number);
            public getResultsCount(): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class ListArticleQuery {
            public setLabelNames(param0: string): void;
            public setInclude(param0: string): void;
            public getResultsPerPage(): java.lang.Integer;
            public setSortOrder(param0: com.zendesk.sdk.model.helpcenter.SortOrder): void;
            public getPage(): java.lang.Integer;
            public setSortBy(param0: com.zendesk.sdk.model.helpcenter.SortBy): void;
            public getSortOrder(): com.zendesk.sdk.model.helpcenter.SortOrder;
            public setLocale(param0: java.util.Locale): void;
            public getSortBy(): com.zendesk.sdk.model.helpcenter.SortBy;
            public constructor();
            public getInclude(): string;
            public getLocale(): java.util.Locale;
            public setResultsPerPage(param0: java.lang.Integer): void;
            public setPage(param0: java.lang.Integer): void;
            public getLabelNames(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class RecordArticleViewRequest {
            public constructor(param0: com.zendesk.sdk.model.helpcenter.LastSearch, param1: boolean);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class SearchArticle {
            public getArticle(): com.zendesk.sdk.model.helpcenter.Article;
            public getSection(): com.zendesk.sdk.model.helpcenter.Section;
            public getCategory(): com.zendesk.sdk.model.helpcenter.Category;
            public constructor(param0: com.zendesk.sdk.model.helpcenter.Article, param1: com.zendesk.sdk.model.helpcenter.Section, param2: com.zendesk.sdk.model.helpcenter.Category);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class Section {
            public getId(): java.lang.Long;
            public getCreatedAt(): java.util.Date;
            public isOutdated(): boolean;
            public getDescription(): string;
            public getHtmlUrl(): string;
            public getLocale(): string;
            public getSorting(): string;
            public getName(): string;
            public getSourceLocale(): string;
            public constructor();
            public getCategoryId(): java.lang.Long;
            public getPosition(): number;
            public getUpdatedAt(): java.util.Date;
            public getUrl(): string;
            public getArticlesCount(): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class SectionResponse {
            public constructor();
            public getSection(): com.zendesk.sdk.model.helpcenter.Section;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class SectionsResponse {
            public sections: java.util.List;
            public constructor();
            public getSections(): java.util.List;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class SimpleArticle {
            public getId(): java.lang.Long;
            public constructor(param0: java.lang.Long, param1: string);
            public getTitle(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
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

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class SortOrder {
            public static ASCENDING: com.zendesk.sdk.model.helpcenter.SortOrder;
            public static DESCENDING: com.zendesk.sdk.model.helpcenter.SortOrder;
            public getApiValue(): string;
            public static valueOf(param0: string): com.zendesk.sdk.model.helpcenter.SortOrder;
            public static values(): native.Array<com.zendesk.sdk.model.helpcenter.SortOrder>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class SuggestedArticleResponse {
            public constructor();
            public getResults(): java.util.List;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class SuggestedArticleSearch {
            public getQuery(): string;
            public getCategoryId(): java.lang.Long;
            public getLocale(): java.util.Locale;
            public getSectionId(): java.lang.Long;
            public getLabelNames(): string;
          }
          export namespace SuggestedArticleSearch {
            export class Builder {
              public withLabelNames(param0: native.Array<string>): com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch.Builder;
              public constructor();
              public forLocale(param0: java.util.Locale): com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch.Builder;
              public withSectionId(param0: java.lang.Long): com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch.Builder;
              public withQuery(param0: string): com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch.Builder;
              public build(): com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch;
              public withCategoryId(param0: java.lang.Long): com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch.Builder;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export class User {
            public getId(): java.lang.Long;
            public constructor();
            public equals(param0: java.lang.Object): boolean;
            public hashCode(): number;
            public getName(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export namespace help {
            export class ArticleItem {
              public getName(): string;
              public hashCode(): number;
              public constructor();
              public getId(): java.lang.Long;
              public getParentId(): java.lang.Long;
              public equals(param0: java.lang.Object): boolean;
              public getViewType(): number;
              public getChildren(): java.util.List;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export namespace help {
            export class CategoryItem {
              public getName(): string;
              public hashCode(): number;
              public constructor();
              public getId(): java.lang.Long;
              public getParentId(): java.lang.Long;
              public isExpanded(): boolean;
              public equals(param0: java.lang.Object): boolean;
              public setExpanded(param0: boolean): boolean;
              public getViewType(): number;
              public getChildren(): java.util.List;
              public setSections(param0: java.util.List): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export namespace help {
            export class HelpItem {
              /**
               * Constructs a new instance of the com.zendesk.sdk.model.helpcenter.help.HelpItem interface with the provided implementation.
               */
              public constructor(implementation: {
                getViewType(): number;
                getName(): string;
                getId(): java.lang.Long;
                getParentId(): java.lang.Long;
                getChildren(): java.util.List;
              });
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
              public getChildren(): java.util.List;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export namespace help {
            export class HelpRequest {
              public getSectionIds(): string;
              public getCategoryIds(): string;
              public getArticlesPerPageLimit(): number;
              public getLabelNames(): native.Array<string>;
              public getIncludes(): string;
            }
            export namespace HelpRequest {
              export class Builder {
                public constructor();
                public includeSections(): com.zendesk.sdk.model.helpcenter.help.HelpRequest.Builder;
                public withSectionIds(param0: java.util.List): com.zendesk.sdk.model.helpcenter.help.HelpRequest.Builder;
                public withArticlesPerSectionLimit(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpRequest.Builder;
                public withLabelNames(param0: native.Array<string>): com.zendesk.sdk.model.helpcenter.help.HelpRequest.Builder;
                public withCategoryIds(param0: java.util.List): com.zendesk.sdk.model.helpcenter.help.HelpRequest.Builder;
                public includeCategories(): com.zendesk.sdk.model.helpcenter.help.HelpRequest.Builder;
                public build(): com.zendesk.sdk.model.helpcenter.help.HelpRequest;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export namespace help {
            export class HelpResponse {
              public constructor();
              public getCategories(): java.util.List;
              public getArticles(): java.util.List;
              public getSections(): java.util.List;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export namespace help {
            export class SectionItem {
              public getName(): string;
              public addChildren(param0: java.util.List): void;
              public getTotalArticlesCount(): number;
              public hashCode(): number;
              public constructor();
              public getId(): java.lang.Long;
              public getParentId(): java.lang.Long;
              public addChild(param0: com.zendesk.sdk.model.helpcenter.help.HelpItem): void;
              public equals(param0: java.lang.Object): boolean;
              public getViewType(): number;
              public removeChild(param0: com.zendesk.sdk.model.helpcenter.help.HelpItem): void;
              public getChildren(): java.util.List;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace helpcenter {
          export namespace help {
            export class SeeAllArticlesItem {
              public getName(): string;
              public hashCode(): number;
              public setLoading(param0: boolean): void;
              public getId(): java.lang.Long;
              public getParentId(): java.lang.Long;
              public equals(param0: java.lang.Object): boolean;
              public getViewType(): number;
              public getSection(): com.zendesk.sdk.model.helpcenter.help.SectionItem;
              public isLoading(): boolean;
              public constructor(param0: com.zendesk.sdk.model.helpcenter.help.SectionItem);
              public getChildren(): java.util.List;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace network {
          export abstract class ResponseWrapper {
            public constructor();
            public getCount(): java.lang.Integer;
            public getPreviousPage(): string;
            public getNextPage(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace push {
          export class AnonymousPushRegistrationRequest extends com.zendesk.sdk.model.push.PushRegistrationRequest {
            public constructor();
            public getSdkGuid(): string;
            public setSdkGuid(param0: string): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace push {
          export class JwtPushRegistrationRequest extends com.zendesk.sdk.model.push.PushRegistrationRequest {
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace push {
          export abstract class PushRegistrationRequest {
            public getIdentifier(): string;
            public constructor();
            public setTokenType(param0: string): void;
            public getTokenType(): string;
            public setLocale(param0: string): void;
            public setIdentifier(param0: string): void;
            public getLocale(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace push {
          export class PushRegistrationRequestWrapper {
            public constructor();
            public setPushRegistrationRequest(param0: com.zendesk.sdk.model.push.PushRegistrationRequest): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace push {
          export class PushRegistrationResponse {
            public getIdentifier(): string;
            public constructor();
            public equals(param0: java.lang.Object): boolean;
            public hashCode(): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace push {
          export class PushRegistrationResponseWrapper {
            public constructor();
            public getRegistrationResponse(): com.zendesk.sdk.model.push.PushRegistrationResponse;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class Attachment {
            public getId(): java.lang.Long;
            public getContentUrl(): string;
            public getSize(): java.lang.Long;
            public constructor();
            public getThumbnails(): java.util.List;
            public getFileName(): string;
            public getUrl(): string;
            public getContentType(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class Comment {
            public getId(): java.lang.Long;
            public getCreatedAt(): java.util.Date;
            public isPublic(): boolean;
            public setCreatedAt(param0: java.util.Date): void;
            public getAuthorId(): java.lang.Long;
            public setAuthorId(param0: java.lang.Long): void;
            public getAttachments(): java.util.List;
            public constructor();
            public getHtmlBody(): string;
            public getBody(): string;
            public getUrl(): string;
            public setBody(param0: string): void;
            public getRequestId(): string;
            public setAttachments(param0: java.util.List): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class CommentResponse {
            public getId(): java.lang.Long;
            public getCreatedAt(): java.util.Date;
            public isPublic(): boolean;
            public setCreatedAt(param0: java.util.Date): void;
            public getAuthorId(): java.lang.Long;
            public setAuthorId(param0: java.lang.Long): void;
            public getAttachments(): java.util.List;
            public constructor();
            public getHtmlBody(): string;
            public getBody(): string;
            public setId(param0: java.lang.Long): void;
            public getUrl(): string;
            public setBody(param0: string): void;
            public getRequestId(): string;
            public setAttachments(param0: java.util.List): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class CommentsResponse extends com.zendesk.sdk.model.network.ResponseWrapper {
            public constructor();
            public getOrganizations(): java.util.List;
            public getUsers(): java.util.List;
            public getComments(): java.util.List;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class CreateRequest {
            public setEmail(param0: string): void;
            public setTags(param0: java.util.List): void;
            public getTags(): java.util.List;
            public getDescription(): string;
            public setCustomFields(param0: java.util.List): void;
            public getEmail(): string;
            public setId(param0: string): void;
            public setSubject(param0: string): void;
            public constructor();
            public setDescription(param0: string): void;
            public getId(): string;
            public setMetadata(param0: java.util.Map): void;
            public getSubject(): string;
            public setTicketFormId(param0: java.lang.Long): void;
            public setAttachments(param0: java.util.List): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class CreateRequestWrapper {
            public setRequest(param0: com.zendesk.sdk.model.request.CreateRequest): void;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class CustomField {
            public constructor(param0: java.lang.Long, param1: string);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class EndUserComment {
            public getAttachments(): java.util.List;
            public constructor();
            public setValue(param0: string): void;
            public setAttachments(param0: java.util.List): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class Organization {
            public getId(): java.lang.Long;
            public constructor();
            public getName(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class Request {
            public getCommentCount(): java.lang.Integer;
            public getCreatedAt(): java.util.Date;
            public getPriority(): string;
            public getOrganizationId(): java.lang.Long;
            public getDescription(): string;
            public getStatus(): string;
            public getType(): string;
            public getRequesterId(): java.lang.Long;
            public setComment(param0: com.zendesk.sdk.model.request.EndUserComment): void;
            public constructor();
            public getUpdatedAt(): java.util.Date;
            public getPublicUpdatedAt(): java.util.Date;
            public getId(): string;
            public getUrl(): string;
            public getSubject(): string;
            public getDueAt(): java.util.Date;
            public getCollaboratorIds(): java.util.List;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class RequestResponse {
            public constructor();
            public getRequest(): com.zendesk.sdk.model.request.Request;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class RequestUpdates {
            public equals(param0: java.lang.Object): boolean;
            public getRequestsWithUpdates(): java.util.Map;
            public hasUpdates(): boolean;
            public hashCode(): number;
            public constructor(param0: java.util.Map);
            public getUpdateCount(): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class RequestsResponse extends com.zendesk.sdk.model.network.ResponseWrapper {
            public constructor();
            public getRequests(): java.util.List;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
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

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class UploadResponse {
            public getExpiresAt(): java.util.Date;
            public getAttachment(): com.zendesk.sdk.model.request.Attachment;
            public constructor();
            public getToken(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class UploadResponseWrapper {
            public constructor();
            public getUpload(): com.zendesk.sdk.model.request.UploadResponse;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class User {
            public getId(): java.lang.Long;
            public getOrganizationId(): java.lang.Long;
            public constructor();
            public getPhoto(): com.zendesk.sdk.model.request.Attachment;
            public isAgent(): boolean;
            public getTags(): java.util.List;
            public getUserFields(): java.util.Map;
            public getName(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class UserField {
            public getPosition(): java.lang.Long;
            public getId(): java.lang.Long;
            public getCreatedAt(): java.util.Date;
            public getDescription(): string;
            public getUserFieldOptions(): java.util.List;
            public getTitle(): string;
            public getRegexpForValidation(): string;
            public getRawTitle(): string;
            public constructor();
            public getUpdatedAt(): java.util.Date;
            public getRawDescription(): string;
            public getUrl(): string;
            public isSystem(): boolean;
            public isActive(): boolean;
            public getUserFieldType(): com.zendesk.sdk.model.request.UserField.UserFieldType;
            public getKey(): string;
          }
          export namespace UserField {
            export class UserFieldType {
              public static Integer: com.zendesk.sdk.model.request.UserField.UserFieldType;
              public static Decimal: com.zendesk.sdk.model.request.UserField.UserFieldType;
              public static Checkbox: com.zendesk.sdk.model.request.UserField.UserFieldType;
              public static Date: com.zendesk.sdk.model.request.UserField.UserFieldType;
              public static Text: com.zendesk.sdk.model.request.UserField.UserFieldType;
              public static Textarea: com.zendesk.sdk.model.request.UserField.UserFieldType;
              public static Dropdown: com.zendesk.sdk.model.request.UserField.UserFieldType;
              public static Regexp: com.zendesk.sdk.model.request.UserField.UserFieldType;
              public static valueOf(param0: string): com.zendesk.sdk.model.request.UserField.UserFieldType;
              public static values(): native.Array<com.zendesk.sdk.model.request.UserField.UserFieldType>;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class UserFieldOption {
            public getId(): java.lang.Long;
            public constructor();
            public getRawName(): string;
            public getValue(): string;
            public getName(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class UserFieldRequest {
            public constructor(param0: java.util.Map);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class UserFieldResponse {
            public constructor();
            public getUserFields(): java.util.List;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class UserResponse {
            public constructor();
            public getUser(): com.zendesk.sdk.model.request.User;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export class UserTagRequest {
            public setTags(param0: java.util.List): void;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export namespace fields {
            export class RawTicketField {
              public getType(): com.zendesk.sdk.model.request.fields.TicketFieldType;
              public constructor();
              public getTitleInPortal(): string;
              public getTitle(): string;
              public getDescription(): string;
              public getId(): number;
              public getSystemFieldOptions(): java.util.List;
              public getRegexpForValidation(): string;
              public getCustomFieldOptions(): java.util.List;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export namespace fields {
            export class RawTicketFieldOption {
              public getName(): string;
              public constructor();
              public getValue(): string;
              public getId(): number;
              public isDefault(): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export namespace fields {
            export class RawTicketFieldSystemOption {
              public getName(): string;
              public constructor();
              public getValue(): string;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export namespace fields {
            export class RawTicketForm {
              public getName(): string;
              public constructor();
              public getTicketFieldIds(): java.util.List;
              public getId(): number;
              public getDisplayName(): string;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export namespace fields {
            export class RawTicketFormResponse {
              public constructor();
              public getTicketForms(): java.util.List;
              public getTicketFields(): java.util.List;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export namespace fields {
            export class TicketField {
              public getType(): com.zendesk.sdk.model.request.fields.TicketFieldType;
              public getTicketFieldOptions(): java.util.List;
              public getTitleInPortal(): string;
              public constructor(param0: number, param1: com.zendesk.sdk.model.request.fields.TicketFieldType, param2: string, param3: string, param4: string, param5: string, param6: java.util.List, param7: java.util.List);
              public getTicketFieldSystemOptions(): java.util.List;
              public static create(param0: com.zendesk.sdk.model.request.fields.RawTicketField): com.zendesk.sdk.model.request.fields.TicketField;
              public getTitle(): string;
              public getDescription(): string;
              public getId(): number;
              public getRegexpForValidation(): string;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export namespace fields {
            export class TicketFieldOption {
              public getName(): string;
              public getValue(): string;
              public static create(param0: com.zendesk.sdk.model.request.fields.RawTicketFieldOption): com.zendesk.sdk.model.request.fields.TicketFieldOption;
              public constructor(param0: number, param1: string, param2: string, param3: boolean);
              public getId(): number;
              public isDefault(): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export namespace fields {
            export class TicketFieldSystemOption {
              public getName(): string;
              public getValue(): string;
              public constructor(param0: string, param1: string);
              public static create(param0: com.zendesk.sdk.model.request.fields.RawTicketFieldSystemOption): com.zendesk.sdk.model.request.fields.TicketFieldSystemOption;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export namespace fields {
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

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace request {
          export namespace fields {
            export class TicketForm {
              public getName(): string;
              public constructor(param0: number, param1: string, param2: string, param3: java.util.List);
              public static create(param0: com.zendesk.sdk.model.request.fields.RawTicketForm, param1: java.util.List): com.zendesk.sdk.model.request.fields.TicketForm;
              public getTicketFields(): java.util.List;
              public getId(): number;
              public getDisplayName(): string;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace settings {
          export class AccountSettings {
            public constructor();
            public getAttachmentSettings(): com.zendesk.sdk.model.settings.AttachmentSettings;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace settings {
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

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace settings {
          export class BlipsPermissions {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace settings {
          export class BlipsSettings {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace settings {
          export class ContactUsSettings {
            public constructor();
            public getTags(): java.util.List;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace settings {
          export class ConversationsSettings {
            public constructor();
            public isEnabled(): boolean;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace settings {
          export class HelpCenterSettings {
            public constructor();
            public isEnabled(): boolean;
            public getLocale(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace settings {
          export class MobileSettings {
            public constructor();
            public getAccountSettings(): com.zendesk.sdk.model.settings.AccountSettings;
            public getSdkSettings(): com.zendesk.sdk.model.settings.SdkSettings;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace settings {
          export class SafeMobileSettings {
            public getHelpCenterLocale(): string;
            public getMobileSettings(): com.zendesk.sdk.model.settings.MobileSettings;
            public isConversationsEnabled(): boolean;
            public constructor(param0: com.zendesk.sdk.model.settings.MobileSettings);
            public isAttachmentsEnabled(): boolean;
            public isHelpCenterEnabled(): boolean;
            public getHelpCenterSettings(): com.zendesk.sdk.model.settings.HelpCenterSettings;
            public hasHelpCenterSettings(): boolean;
            public getContactZendeskTags(): java.util.List;
            public getMaxAttachmentSize(): number;
            public getAuthenticationType(): com.zendesk.sdk.model.access.AuthenticationType;
            public isPathfinderEnabled(): boolean;
            public isTicketFormSupportAvailable(): boolean;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace settings {
          export class SdkSettings {
            public getHelpCenterSettings(): com.zendesk.sdk.model.settings.HelpCenterSettings;
            public constructor();
            public getUpdatedAt(): java.util.Date;
            public getAuthentication(): com.zendesk.sdk.model.access.AuthenticationType;
            public getConversationsSettings(): com.zendesk.sdk.model.settings.ConversationsSettings;
            public getTicketFormSettings(): com.zendesk.sdk.model.settings.TicketFormSettings;
            public getBlipsSettings(): com.zendesk.sdk.model.settings.BlipsSettings;
            public getContactUsSettings(): com.zendesk.sdk.model.settings.ContactUsSettings;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace model {
        export namespace settings {
          export class TicketFormSettings {
            public constructor();
            public isAvailable(): boolean;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class AccessProvider {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.AccessProvider interface with the provided implementation.
           */
          public constructor(implementation: {
            getAndStoreAuthTokenViaJwt(param0: com.zendesk.sdk.model.access.JwtIdentity, param1: com.zendesk.service.ZendeskCallback): void;
            getAndStoreAuthTokenViaAnonymous(param0: com.zendesk.sdk.model.access.AnonymousIdentity, param1: com.zendesk.service.ZendeskCallback): void;
          });
          public getAndStoreAuthTokenViaJwt(param0: com.zendesk.sdk.model.access.JwtIdentity, param1: com.zendesk.service.ZendeskCallback): void;
          public getAndStoreAuthTokenViaAnonymous(param0: com.zendesk.sdk.model.access.AnonymousIdentity, param1: com.zendesk.service.ZendeskCallback): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class AccessService {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.AccessService interface with the provided implementation.
           */
          public constructor(implementation: {
            getAuthToken(param0: com.zendesk.sdk.model.access.AuthenticationRequestWrapper): retrofit2.Call;
            getAuthTokenForAnonymous(param0: com.zendesk.sdk.model.access.AuthenticationRequestWrapper): retrofit2.Call;
          });
          public getAuthTokenForAnonymous(param0: com.zendesk.sdk.model.access.AuthenticationRequestWrapper): retrofit2.Call;
          public getAuthToken(param0: com.zendesk.sdk.model.access.AuthenticationRequestWrapper): retrofit2.Call;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class BaseProvider {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.BaseProvider interface with the provided implementation.
           */
          public constructor(implementation: {
            configureSdk(param0: com.zendesk.service.ZendeskCallback): void;
            getSdkSettings(param0: com.zendesk.service.ZendeskCallback): void;
            getAccessToken(param0: com.zendesk.sdk.model.settings.SafeMobileSettings, param1: com.zendesk.service.ZendeskCallback): void;
          });
          public getAccessToken(param0: com.zendesk.sdk.model.settings.SafeMobileSettings, param1: com.zendesk.service.ZendeskCallback): void;
          public configureSdk(param0: com.zendesk.service.ZendeskCallback): void;
          public getSdkSettings(param0: com.zendesk.service.ZendeskCallback): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
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

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class HelpCenterProvider {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.HelpCenterProvider interface with the provided implementation.
           */
          public constructor(implementation: {
            getHelp(param0: com.zendesk.sdk.model.helpcenter.help.HelpRequest, param1: com.zendesk.service.ZendeskCallback): void;
            getCategories(param0: com.zendesk.service.ZendeskCallback): void;
            getSections(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
            getArticles(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
            listArticles(param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback): void;
            listArticlesFlat(param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback): void;
            searchArticles(param0: com.zendesk.sdk.model.helpcenter.HelpCenterSearch, param1: com.zendesk.service.ZendeskCallback): void;
            getArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
            getSection(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
            getCategory(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
            getAttachments(param0: java.lang.Long, param1: com.zendesk.sdk.model.helpcenter.AttachmentType, param2: com.zendesk.service.ZendeskCallback): void;
            upvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
            downvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
            deleteVote(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
            getSuggestedArticles(param0: com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch, param1: com.zendesk.service.ZendeskCallback): void;
            submitRecordArticleView(param0: com.zendesk.sdk.model.helpcenter.Article, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback): void;
          });
          public getSection(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
          public getAttachments(param0: java.lang.Long, param1: com.zendesk.sdk.model.helpcenter.AttachmentType, param2: com.zendesk.service.ZendeskCallback): void;
          public listArticles(param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback): void;
          public getCategory(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
          public getSuggestedArticles(param0: com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch, param1: com.zendesk.service.ZendeskCallback): void;
          public downvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
          public deleteVote(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
          public getCategories(param0: com.zendesk.service.ZendeskCallback): void;
          public searchArticles(param0: com.zendesk.sdk.model.helpcenter.HelpCenterSearch, param1: com.zendesk.service.ZendeskCallback): void;
          public getArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
          public upvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
          public getSections(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
          public getArticles(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
          public listArticlesFlat(param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback): void;
          public getHelp(param0: com.zendesk.sdk.model.helpcenter.help.HelpRequest, param1: com.zendesk.service.ZendeskCallback): void;
          public submitRecordArticleView(param0: com.zendesk.sdk.model.helpcenter.Article, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class HelpCenterService {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.HelpCenterService interface with the provided implementation.
           */
          public constructor(implementation: {
            getHelp(param0: string, param1: string, param2: string, param3: string, param4: string, param5: number, param6: string, param7: number, param8: string, param9: string): retrofit2.Call;
            getCategories(param0: string, param1: string): retrofit2.Call;
            getSections(param0: string, param1: string, param2: java.lang.Long, param3: number): retrofit2.Call;
            getArticles(param0: string, param1: string, param2: java.lang.Long, param3: string, param4: number): retrofit2.Call;
            listArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: java.lang.Integer): retrofit2.Call;
            searchArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: java.lang.Integer, param8: java.lang.Integer): retrofit2.Call;
            getArticle(param0: string, param1: string, param2: java.lang.Long, param3: string): retrofit2.Call;
            getSectionById(param0: string, param1: string, param2: java.lang.Long): retrofit2.Call;
            getCategoryById(param0: string, param1: string, param2: java.lang.Long): retrofit2.Call;
            getAttachments(param0: string, param1: string, param2: java.lang.Long, param3: string): retrofit2.Call;
            upvoteArticle(param0: string, param1: java.lang.Long, param2: string): retrofit2.Call;
            downvoteArticle(param0: string, param1: java.lang.Long, param2: string): retrofit2.Call;
            deleteVote(param0: string, param1: java.lang.Long): retrofit2.Call;
            getSuggestedArticles(param0: string, param1: string, param2: string, param3: string, param4: java.lang.Long, param5: java.lang.Long): retrofit2.Call;
            submitRecordArticleView(param0: string, param1: java.lang.Long, param2: string, param3: com.zendesk.sdk.model.helpcenter.RecordArticleViewRequest): retrofit2.Call;
          });
          public getSections(param0: string, param1: string, param2: java.lang.Long, param3: number): retrofit2.Call;
          public submitRecordArticleView(param0: string, param1: java.lang.Long, param2: string, param3: com.zendesk.sdk.model.helpcenter.RecordArticleViewRequest): retrofit2.Call;
          public searchArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: java.lang.Integer, param8: java.lang.Integer): retrofit2.Call;
          public getArticle(param0: string, param1: string, param2: java.lang.Long, param3: string): retrofit2.Call;
          public deleteVote(param0: string, param1: java.lang.Long): retrofit2.Call;
          public upvoteArticle(param0: string, param1: java.lang.Long, param2: string): retrofit2.Call;
          public getHelp(param0: string, param1: string, param2: string, param3: string, param4: string, param5: number, param6: string, param7: number, param8: string, param9: string): retrofit2.Call;
          public getCategories(param0: string, param1: string): retrofit2.Call;
          public getSectionById(param0: string, param1: string, param2: java.lang.Long): retrofit2.Call;
          public getAttachments(param0: string, param1: string, param2: java.lang.Long, param3: string): retrofit2.Call;
          public listArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: java.lang.Integer): retrofit2.Call;
          public getSuggestedArticles(param0: string, param1: string, param2: string, param3: string, param4: java.lang.Long, param5: java.lang.Long): retrofit2.Call;
          public downvoteArticle(param0: string, param1: java.lang.Long, param2: string): retrofit2.Call;
          public getCategoryById(param0: string, param1: string, param2: java.lang.Long): retrofit2.Call;
          public getArticles(param0: string, param1: string, param2: java.lang.Long, param3: string, param4: number): retrofit2.Call;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class NetworkAware {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.NetworkAware interface with the provided implementation.
           */
          public constructor(implementation: {
            onNetworkAvailable(): void;
            onNetworkUnavailable(): void;
          });
          public onNetworkUnavailable(): void;
          public onNetworkAvailable(): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class NetworkInfoProvider {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.NetworkInfoProvider interface with the provided implementation.
           */
          public constructor(implementation: {
            register(): void;
            unregister(): void;
            isNetworkAvailable(): boolean;
            addNetworkAwareListener(param0: java.lang.Integer, param1: com.zendesk.sdk.network.NetworkAware): void;
            removeNetworkAwareListener(param0: java.lang.Integer): void;
            clearNetworkAwareListeners(): void;
            addRetryAction(param0: java.lang.Integer, param1: com.zendesk.sdk.network.RetryAction): void;
            removeRetryAction(param0: java.lang.Integer): void;
            clearRetryActions(): void;
          });
          public isNetworkAvailable(): boolean;
          public unregister(): void;
          public removeRetryAction(param0: java.lang.Integer): void;
          public addNetworkAwareListener(param0: java.lang.Integer, param1: com.zendesk.sdk.network.NetworkAware): void;
          public register(): void;
          public removeNetworkAwareListener(param0: java.lang.Integer): void;
          public addRetryAction(param0: java.lang.Integer, param1: com.zendesk.sdk.network.RetryAction): void;
          public clearRetryActions(): void;
          public clearNetworkAwareListeners(): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class PushRegistrationProvider {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.PushRegistrationProvider interface with the provided implementation.
           */
          public constructor(implementation: {
            registerDeviceWithIdentifier(param0: string, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback): void;
            registerDeviceWithUAChannelId(param0: string, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback): void;
            unregisterDevice(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
          });
          public registerDeviceWithIdentifier(param0: string, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback): void;
          public registerDeviceWithUAChannelId(param0: string, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback): void;
          public unregisterDevice(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class PushRegistrationService {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.PushRegistrationService interface with the provided implementation.
           */
          public constructor(implementation: {
            registerDevice(param0: string, param1: com.zendesk.sdk.model.push.PushRegistrationRequestWrapper): retrofit2.Call;
            unregisterDevice(param0: string, param1: string): retrofit2.Call;
          });
          public unregisterDevice(param0: string, param1: string): retrofit2.Call;
          public registerDevice(param0: string, param1: com.zendesk.sdk.model.push.PushRegistrationRequestWrapper): retrofit2.Call;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
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
            getTicketFormsById(param0: java.util.List, param1: com.zendesk.service.ZendeskCallback): void;
            getUpdatesForDevice(param0: com.zendesk.service.ZendeskCallback): void;
          });
          public getComments(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
          public getAllRequests(param0: com.zendesk.service.ZendeskCallback): void;
          public getTicketFormsById(param0: java.util.List, param1: com.zendesk.service.ZendeskCallback): void;
          public createRequest(param0: com.zendesk.sdk.model.request.CreateRequest, param1: com.zendesk.service.ZendeskCallback): void;
          public getRequests(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
          public getUpdatesForDevice(param0: com.zendesk.service.ZendeskCallback): void;
          public getRequest(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
          public addComment(param0: string, param1: com.zendesk.sdk.model.request.EndUserComment, param2: com.zendesk.service.ZendeskCallback): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class RequestService {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.RequestService interface with the provided implementation.
           */
          public constructor(implementation: {
            createRequest(param0: string, param1: string, param2: com.zendesk.sdk.model.request.CreateRequestWrapper): retrofit2.Call;
            getAllRequests(param0: string, param1: string, param2: string): retrofit2.Call;
            getManyRequests(param0: string, param1: string, param2: string, param3: string): retrofit2.Call;
            getComments(param0: string, param1: string): retrofit2.Call;
            addComment(param0: string, param1: string, param2: com.zendesk.sdk.model.request.UpdateRequestWrapper): retrofit2.Call;
            getRequest(param0: string, param1: string): retrofit2.Call;
            getTicketFormsById(param0: string, param1: string, param2: string, param3: string): retrofit2.Call;
          });
          public getComments(param0: string, param1: string): retrofit2.Call;
          public getRequest(param0: string, param1: string): retrofit2.Call;
          public getManyRequests(param0: string, param1: string, param2: string, param3: string): retrofit2.Call;
          public addComment(param0: string, param1: string, param2: com.zendesk.sdk.model.request.UpdateRequestWrapper): retrofit2.Call;
          public createRequest(param0: string, param1: string, param2: com.zendesk.sdk.model.request.CreateRequestWrapper): retrofit2.Call;
          public getAllRequests(param0: string, param1: string, param2: string): retrofit2.Call;
          public getTicketFormsById(param0: string, param1: string, param2: string, param3: string): retrofit2.Call;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
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

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class Retryable {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.Retryable interface with the provided implementation.
           */
          public constructor(implementation: {
            onRetryAvailable(param0: string, param1: android.view.View.OnClickListener): void;
            onRetryUnavailable(): void;
          });
          public onRetryUnavailable(): void;
          public onRetryAvailable(param0: string, param1: android.view.View.OnClickListener): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class SdkOptions {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.SdkOptions interface with the provided implementation.
           */
          public constructor(implementation: {
            overrideResourceLoadingInWebview(): boolean;
            getServiceOptions(): com.zendesk.sdk.network.SdkOptions.ServiceOptions;
          });
          public getServiceOptions(): com.zendesk.sdk.network.SdkOptions.ServiceOptions;
          public overrideResourceLoadingInWebview(): boolean;
        }
        export namespace SdkOptions {
          export class ServiceOptions {
            /**
             * Constructs a new instance of the com.zendesk.sdk.network.SdkOptions$ServiceOptions interface with the provided implementation.
             */
            public constructor(implementation: {
              getConnectionSpecs(): java.util.List;
            });
            public getConnectionSpecs(): java.util.List;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
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

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class SdkSettingsService {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.SdkSettingsService interface with the provided implementation.
           */
          public constructor(implementation: {
            getSettings(param0: string): retrofit2.Call;
          });
          public getSettings(param0: string): retrofit2.Call;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
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

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class UploadProvider {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.UploadProvider interface with the provided implementation.
           */
          public constructor(implementation: {
            uploadAttachment(param0: string, param1: java.io.File, param2: string, param3: com.zendesk.service.ZendeskCallback): void;
            deleteAttachment(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
          });
          public deleteAttachment(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
          public uploadAttachment(param0: string, param1: java.io.File, param2: string, param3: com.zendesk.service.ZendeskCallback): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class UploadService {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.UploadService interface with the provided implementation.
           */
          public constructor(implementation: {
            uploadAttachment(param0: string, param1: string, param2: okhttp3.RequestBody): retrofit2.Call;
            deleteAttachment(param0: string, param1: string): retrofit2.Call;
          });
          public uploadAttachment(param0: string, param1: string, param2: okhttp3.RequestBody): retrofit2.Call;
          public deleteAttachment(param0: string, param1: string): retrofit2.Call;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class UserProvider {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.UserProvider interface with the provided implementation.
           */
          public constructor(implementation: {
            addTags(param0: java.util.List, param1: com.zendesk.service.ZendeskCallback): void;
            deleteTags(param0: java.util.List, param1: com.zendesk.service.ZendeskCallback): void;
            getUserFields(param0: com.zendesk.service.ZendeskCallback): void;
            setUserFields(param0: java.util.Map, param1: com.zendesk.service.ZendeskCallback): void;
            getUser(param0: com.zendesk.service.ZendeskCallback): void;
          });
          public getUser(param0: com.zendesk.service.ZendeskCallback): void;
          public deleteTags(param0: java.util.List, param1: com.zendesk.service.ZendeskCallback): void;
          public addTags(param0: java.util.List, param1: com.zendesk.service.ZendeskCallback): void;
          public getUserFields(param0: com.zendesk.service.ZendeskCallback): void;
          public setUserFields(param0: java.util.Map, param1: com.zendesk.service.ZendeskCallback): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class UserService {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.UserService interface with the provided implementation.
           */
          public constructor(implementation: {
            addTags(param0: string, param1: com.zendesk.sdk.model.request.UserTagRequest): retrofit2.Call;
            deleteTags(param0: string, param1: string): retrofit2.Call;
            getUserFields(param0: string): retrofit2.Call;
            setUserFields(param0: string, param1: com.zendesk.sdk.model.request.UserFieldRequest): retrofit2.Call;
            getUser(param0: string): retrofit2.Call;
          });
          public addTags(param0: string, param1: com.zendesk.sdk.model.request.UserTagRequest): retrofit2.Call;
          public setUserFields(param0: string, param1: com.zendesk.sdk.model.request.UserFieldRequest): retrofit2.Call;
          public getUser(param0: string): retrofit2.Call;
          public getUserFields(param0: string): retrofit2.Call;
          public deleteTags(param0: string, param1: string): retrofit2.Call;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
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
          });
          public helpCenterSearched(param0: string): void;
          public helpCenterArticleViewed(): void;
          public requestUpdated(): void;
          public helpCenterLoaded(): void;
          public requestCreated(): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class AnswersTracker {
            public requestCreated(): void;
            public helpCenterArticleViewed(): void;
            public requestUpdated(): void;
            public helpCenterSearched(param0: string): void;
            public helpCenterLoaded(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ApplicationScope {
            public isCoppaEnabled(): boolean;
            public newBuilder(): com.zendesk.sdk.network.impl.ApplicationScope.Builder;
            public getLocale(): java.util.Locale;
            public getApplicationContext(): android.content.Context;
            public getUserAgentHeader(): string;
            public getUrl(): string;
            public getAppId(): string;
            public getOAuthToken(): string;
            public getSdkOptions(): com.zendesk.sdk.network.SdkOptions;
            public isDevelopmentMode(): boolean;
            public getCustomFields(): java.util.List;
            public getTicketFormId(): java.lang.Long;
          }
          export namespace ApplicationScope {
            export class Builder {
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class AuthenticationLoggerHelper {
            public getLogMessage(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BaseModule {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BaseModule_ProvideAppIdFactory {
            public static create(param0: com.zendesk.sdk.network.impl.BaseModule): dagger.internal.Factory;
            public get(): string;
            public static proxyProvideAppId(param0: com.zendesk.sdk.network.impl.BaseModule): string;
            public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BaseModule_ProvideApplicationContextFactory {
            public static create(param0: com.zendesk.sdk.network.impl.BaseModule): dagger.internal.Factory;
            public static proxyProvideApplicationContext(param0: com.zendesk.sdk.network.impl.BaseModule): android.content.Context;
            public get(): android.content.Context;
            public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BaseModule_ProvideBase64SerializerFactory {
            public constructor(param0: com.zendesk.sdk.network.impl.BaseModule, param1: javax.inject.Provider);
            public static create(param0: com.zendesk.sdk.network.impl.BaseModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public static proxyProvideBase64Serializer(param0: com.zendesk.sdk.network.impl.BaseModule, param1: java.lang.Object): com.zendesk.sdk.network.impl.Serializer;
            public get(): com.zendesk.sdk.network.impl.Serializer;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BaseModule_ProvideConnectionSpecFactory {
            public get(): java.util.List;
            public static create(param0: com.zendesk.sdk.network.impl.BaseModule): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
            public static proxyProvideConnectionSpec(param0: com.zendesk.sdk.network.impl.BaseModule): java.util.List;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BaseModule_ProvideDeviceInfoFactory {
            public static create(param0: com.zendesk.sdk.network.impl.BaseModule): dagger.internal.Factory;
            public get(): com.zendesk.sdk.network.impl.DeviceInfo;
            public static proxyProvideDeviceInfo(param0: com.zendesk.sdk.network.impl.BaseModule): com.zendesk.sdk.network.impl.DeviceInfo;
            public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BaseModule_ProvideLocaleFactory {
            public static create(param0: com.zendesk.sdk.network.impl.BaseModule): dagger.internal.Factory;
            public get(): java.util.Locale;
            public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
            public static proxyProvideLocale(param0: com.zendesk.sdk.network.impl.BaseModule): java.util.Locale;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BaseModule_ProvideOAuthtokenFactory {
            public static proxyProvideOAuthtoken(param0: com.zendesk.sdk.network.impl.BaseModule): string;
            public static create(param0: com.zendesk.sdk.network.impl.BaseModule): dagger.internal.Factory;
            public get(): string;
            public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BaseModule_ProvideSerializerFactory {
            public constructor(param0: com.zendesk.sdk.network.impl.BaseModule, param1: javax.inject.Provider);
            public static create(param0: com.zendesk.sdk.network.impl.BaseModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public get(): com.zendesk.sdk.network.impl.Serializer;
            public static proxyProvideSerializer(param0: com.zendesk.sdk.network.impl.BaseModule, param1: com.google.gson.Gson): com.zendesk.sdk.network.impl.Serializer;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BaseModule_ProvideUrlFactory {
            public static create(param0: com.zendesk.sdk.network.impl.BaseModule): dagger.internal.Factory;
            public get(): string;
            public static proxyProvideUrl(param0: com.zendesk.sdk.network.impl.BaseModule): string;
            public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BaseModule_ProvideUserAgentHeaderFactory {
            public static create(param0: com.zendesk.sdk.network.impl.BaseModule): dagger.internal.Factory;
            public get(): string;
            public static proxyProvideUserAgentHeader(param0: com.zendesk.sdk.network.impl.BaseModule): string;
            public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BaseModule_ProvideZendeskLocaleConverterFactory {
            public static create(param0: com.zendesk.sdk.network.impl.BaseModule): dagger.internal.Factory;
            public static proxyProvideZendeskLocaleConverter(param0: com.zendesk.sdk.network.impl.BaseModule): com.zendesk.sdk.network.impl.ZendeskLocaleConverter;
            public constructor(param0: com.zendesk.sdk.network.impl.BaseModule);
            public get(): com.zendesk.sdk.network.impl.ZendeskLocaleConverter;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BaseModule_ProvideZendeskLocaleTagFactory {
            public constructor(param0: com.zendesk.sdk.network.impl.BaseModule, param1: javax.inject.Provider, param2: javax.inject.Provider);
            public get(): string;
            public static create(param0: com.zendesk.sdk.network.impl.BaseModule, param1: javax.inject.Provider, param2: javax.inject.Provider): dagger.internal.Factory;
            public static proxyProvideZendeskLocaleTag(param0: com.zendesk.sdk.network.impl.BaseModule, param1: java.lang.Object, param2: java.util.Locale): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BlipsFormatHelper {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BlipsPageView {
            public equals(param0: java.lang.Object): boolean;
            public hashCode(): number;
          }
          export namespace BlipsPageView {
            export class Builder {
              public from(param0: com.zendesk.sdk.network.impl.BlipsPageView): com.zendesk.sdk.network.impl.BlipsPageView.Builder;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BlipsPageViewRequest extends com.zendesk.sdk.network.impl.BlipsRequest {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BlipsProvider {
            /**
             * Constructs a new instance of the com.zendesk.sdk.network.impl.BlipsProvider interface with the provided implementation.
             */
            public constructor(implementation: {
              sendHelpCenterSearchBlip(param0: string): void;
              sendPageViewBlip(param0: string, param1: string): void;
            });
            public sendPageViewBlip(param0: string, param1: string): void;
            public sendHelpCenterSearchBlip(param0: string): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export abstract class BlipsRequest {
            public version: string;
            public timestamp: string;
            public channel: string;
            public schemaVersion: string;
            public userId: java.lang.Long;
            public appId: string;
            public getAppId(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BlipsService {
            /**
             * Constructs a new instance of the com.zendesk.sdk.network.impl.BlipsService interface with the provided implementation.
             */
            public constructor(implementation: {
              send(param0: string): retrofit2.Call;
            });
            public send(param0: string): retrofit2.Call;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BlipsUserAction {
            public equals(param0: java.lang.Object): boolean;
            public hashCode(): number;
            public toString(): string;
          }
          export namespace BlipsUserAction {
            export class Builder {
              public from(param0: com.zendesk.sdk.network.impl.BlipsUserAction): com.zendesk.sdk.network.impl.BlipsUserAction.Builder;
              public withAction(param0: string): com.zendesk.sdk.network.impl.BlipsUserAction.Builder;
              public build(): com.zendesk.sdk.network.impl.BlipsUserAction;
              public constructor();
              public withLabel(param0: string): com.zendesk.sdk.network.impl.BlipsUserAction.Builder;
              public withValue(param0: java.util.Map): com.zendesk.sdk.network.impl.BlipsUserAction.Builder;
              public withCategory(param0: string): com.zendesk.sdk.network.impl.BlipsUserAction.Builder;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class BlipsUserActionRequest extends com.zendesk.sdk.network.impl.BlipsRequest {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ConfigurationRuntimeException {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class DaggerStubComponent {
            public static create(): com.zendesk.sdk.network.impl.StubComponent;
            public inject(param0: com.zendesk.sdk.network.impl.ZendeskConfig): com.zendesk.sdk.network.impl.ZendeskConfig;
            public static builder(): com.zendesk.sdk.network.impl.DaggerStubComponent.Builder;
          }
          export namespace DaggerStubComponent {
            export class Builder {
              public stubModule(param0: com.zendesk.sdk.network.impl.StubModule): com.zendesk.sdk.network.impl.DaggerStubComponent.Builder;
              public build(): com.zendesk.sdk.network.impl.StubComponent;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class DaggerSupportSdkProvidersComponent {
            public static builder(): com.zendesk.sdk.network.impl.DaggerSupportSdkProvidersComponent.Builder;
            public inject(param0: com.zendesk.sdk.network.impl.ZendeskConfig): com.zendesk.sdk.network.impl.ZendeskConfig;
          }
          export namespace DaggerSupportSdkProvidersComponent {
            export class Builder {
              public baseModule(param0: com.zendesk.sdk.network.impl.BaseModule): com.zendesk.sdk.network.impl.DaggerSupportSdkProvidersComponent.Builder;
              public restModule(param0: com.zendesk.sdk.network.impl.RestModule): com.zendesk.sdk.network.impl.DaggerSupportSdkProvidersComponent.Builder;
              public zendeskConfigModule(param0: com.zendesk.sdk.network.impl.ZendeskConfigModule): com.zendesk.sdk.network.impl.DaggerSupportSdkProvidersComponent.Builder;
              public build(): com.zendesk.sdk.network.impl.SupportSdkProvidersComponent;
              public storageModule(param0: com.zendesk.sdk.storage.StorageModule): com.zendesk.sdk.network.impl.DaggerSupportSdkProvidersComponent.Builder;
              public serviceModule(param0: com.zendesk.sdk.network.impl.ServiceModule): com.zendesk.sdk.network.impl.DaggerSupportSdkProvidersComponent.Builder;
              public providerModule(param0: com.zendesk.sdk.network.impl.ProviderModule): com.zendesk.sdk.network.impl.DaggerSupportSdkProvidersComponent.Builder;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class DefaultSdkOptions {
            public constructor();
            public overrideResourceLoadingInWebview(): boolean;
            public getServiceOptions(): com.zendesk.sdk.network.SdkOptions.ServiceOptions;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class DefaultZendeskUnauthorizedInterceptor {
            public constructor(param0: com.zendesk.sdk.storage.SdkStorage, param1: okhttp3.Cache);
            public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
            public onHttpUnauthorized(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class DeviceInfo {
            public isLowMemory(): boolean;
            public getDeviceInfoAsMapForMetaData(): java.util.Map;
            public constructor(param0: android.content.Context);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class GsonSerializer {
            public serialize(param0: java.lang.Object): string;
            public deserialize(param0: java.lang.Object, param1: java.lang.Class): java.lang.Object;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class HelpCenterCachingInterceptor {
            public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class HelpResponseConverter {
            public constructor(param0: com.zendesk.sdk.model.helpcenter.help.HelpResponse);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class NoOpTracker {
            public requestCreated(): void;
            public helpCenterArticleViewed(): void;
            public requestUpdated(): void;
            public helpCenterSearched(param0: string): void;
            public helpCenterLoaded(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export abstract class PassThroughErrorZendeskCallback {
            public onSuccess(param0: java.lang.Object): void;
            public onError(param0: com.zendesk.service.ErrorResponse): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ProviderModule {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ProviderModule_InjectNetworkInfoProviderFactory {
            public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider);
            public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public get(): com.zendesk.sdk.network.NetworkInfoProvider;
            public static proxyInjectNetworkInfoProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: android.content.Context): com.zendesk.sdk.network.NetworkInfoProvider;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ProviderModule_InjectUserProviderFactory {
            public static proxyInjectUserProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.BaseProvider, param2: java.lang.Object): com.zendesk.sdk.network.UserProvider;
            public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider);
            public get(): com.zendesk.sdk.network.UserProvider;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ProviderModule_InjectZendeskSettingsHelperFactory {
            public static proxyInjectZendeskSettingsHelper(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.BaseProvider): com.zendesk.sdk.network.SettingsHelper;
            public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider);
            public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public get(): com.zendesk.sdk.network.SettingsHelper;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ProviderModule_ProvideAccessProviderFactory {
            public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider): dagger.internal.Factory;
            public static proxyProvideAccessProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.storage.IdentityStorage, param2: java.lang.Object): com.zendesk.sdk.network.AccessProvider;
            public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider);
            public get(): com.zendesk.sdk.network.AccessProvider;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ProviderModule_ProvideHelpCenterProviderFactory {
            public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider);
            public static proxyProvideHelpCenterProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.BaseProvider, param2: java.lang.Object, param3: com.zendesk.sdk.storage.HelpCenterSessionCache, param4: java.lang.Object): com.zendesk.sdk.network.HelpCenterProvider;
            public get(): com.zendesk.sdk.network.HelpCenterProvider;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ProviderModule_ProvideProviderStoreFactory {
            public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider, param5: javax.inject.Provider, param6: javax.inject.Provider, param7: javax.inject.Provider, param8: javax.inject.Provider): dagger.internal.Factory;
            public static proxyProvideProviderStore(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.UserProvider, param2: com.zendesk.sdk.network.HelpCenterProvider, param3: com.zendesk.sdk.network.PushRegistrationProvider, param4: com.zendesk.sdk.network.RequestProvider, param5: com.zendesk.sdk.network.UploadProvider, param6: com.zendesk.sdk.network.SdkSettingsProvider, param7: com.zendesk.sdk.network.NetworkInfoProvider, param8: com.zendesk.sdk.network.SettingsHelper): com.zendesk.sdk.network.impl.ProviderStore;
            public get(): com.zendesk.sdk.network.impl.ProviderStore;
            public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider, param5: javax.inject.Provider, param6: javax.inject.Provider, param7: javax.inject.Provider, param8: javax.inject.Provider);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ProviderModule_ProvidePushRegistrationProviderFactory {
            public get(): com.zendesk.sdk.network.PushRegistrationProvider;
            public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider);
            public static proxyProvidePushRegistrationProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.BaseProvider, param2: java.lang.Object, param3: com.zendesk.sdk.storage.IdentityStorage, param4: com.zendesk.sdk.storage.PushRegistrationResponseStorage): com.zendesk.sdk.network.PushRegistrationProvider;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ProviderModule_ProvideRequestProviderFactory {
            public static proxyProvideRequestProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.BaseProvider, param2: com.zendesk.sdk.storage.IdentityStorage, param3: java.lang.Object, param4: com.zendesk.sdk.storage.RequestStorage, param5: com.zendesk.sdk.storage.RequestSessionCache, param6: com.zendesk.sdk.storage.PushRegistrationResponseStorage, param7: java.util.Locale): com.zendesk.sdk.network.RequestProvider;
            public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider, param5: javax.inject.Provider, param6: javax.inject.Provider, param7: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider, param5: javax.inject.Provider, param6: javax.inject.Provider, param7: javax.inject.Provider);
            public get(): com.zendesk.sdk.network.RequestProvider;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ProviderModule_ProvideSdkSettingsProviderFactory {
            public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider): dagger.internal.Factory;
            public get(): com.zendesk.sdk.network.SdkSettingsProvider;
            public static proxyProvideSdkSettingsProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: java.lang.Object, param2: string, param3: com.zendesk.sdk.storage.SdkSettingsStorage, param4: string): com.zendesk.sdk.network.SdkSettingsProvider;
            public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ProviderModule_ProvideUploadProviderFactory {
            public get(): com.zendesk.sdk.network.UploadProvider;
            public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider);
            public static proxyProvideUploadProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.BaseProvider, param2: java.lang.Object): com.zendesk.sdk.network.UploadProvider;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ProviderModule_ProvideZendeskBaseProviderFactory {
            public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider): dagger.internal.Factory;
            public static proxyProvideZendeskBaseProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.AccessProvider, param2: com.zendesk.sdk.storage.SdkSettingsStorage, param3: com.zendesk.sdk.storage.IdentityStorage, param4: com.zendesk.sdk.network.SdkSettingsProvider): com.zendesk.sdk.network.BaseProvider;
            public get(): com.zendesk.sdk.network.BaseProvider;
            public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ProviderModule_ProvideZendeskBlipsProviderFactory {
            public get(): com.zendesk.sdk.network.impl.BlipsProvider;
            public static create(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider, param5: javax.inject.Provider, param6: javax.inject.Provider, param7: javax.inject.Provider): dagger.internal.Factory;
            public static proxyProvideZendeskBlipsProvider(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: com.zendesk.sdk.network.BaseProvider, param2: java.lang.Object, param3: java.util.Locale, param4: com.zendesk.sdk.storage.IdentityStorage, param5: java.lang.Object, param6: com.zendesk.sdk.network.impl.DeviceInfo, param7: string): com.zendesk.sdk.network.impl.BlipsProvider;
            public constructor(param0: com.zendesk.sdk.network.impl.ProviderModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider, param5: javax.inject.Provider, param6: javax.inject.Provider, param7: javax.inject.Provider);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
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
            public requestProvider(): com.zendesk.sdk.network.RequestProvider;
            public uploadProvider(): com.zendesk.sdk.network.UploadProvider;
            public sdkSettingsProvider(): com.zendesk.sdk.network.SdkSettingsProvider;
            public helpCenterProvider(): com.zendesk.sdk.network.HelpCenterProvider;
            public pushRegistrationProvider(): com.zendesk.sdk.network.PushRegistrationProvider;
            public userProvider(): com.zendesk.sdk.network.UserProvider;
            public networkInfoProvider(): com.zendesk.sdk.network.NetworkInfoProvider;
            public uiSettingsHelper(): com.zendesk.sdk.network.SettingsHelper;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class RestModule {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class RestModule_ProvideCacheFactory {
            public static create(param0: com.zendesk.sdk.network.impl.RestModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public static proxyProvideCache(param0: com.zendesk.sdk.network.impl.RestModule, param1: android.content.Context): okhttp3.Cache;
            public constructor(param0: com.zendesk.sdk.network.impl.RestModule, param1: javax.inject.Provider);
            public get(): okhttp3.Cache;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class RestModule_ProvideDateTypeAdapterFactory {
            public static create(param0: com.zendesk.sdk.network.impl.RestModule): dagger.internal.Factory;
            public static proxyProvideDateTypeAdapter(param0: com.zendesk.sdk.network.impl.RestModule): com.google.gson.TypeAdapter;
            public constructor(param0: com.zendesk.sdk.network.impl.RestModule);
            public get(): com.google.gson.TypeAdapter;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class RestModule_ProvideDefaultZendeskUnauthorizedInterceptorFactory {
            public get(): com.zendesk.sdk.network.impl.DefaultZendeskUnauthorizedInterceptor;
            public static proxyProvideDefaultZendeskUnauthorizedInterceptor(param0: com.zendesk.sdk.network.impl.RestModule, param1: com.zendesk.sdk.storage.SdkStorage, param2: okhttp3.Cache): com.zendesk.sdk.network.impl.DefaultZendeskUnauthorizedInterceptor;
            public constructor(param0: com.zendesk.sdk.network.impl.RestModule, param1: javax.inject.Provider, param2: javax.inject.Provider);
            public static create(param0: com.zendesk.sdk.network.impl.RestModule, param1: javax.inject.Provider, param2: javax.inject.Provider): dagger.internal.Factory;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class RestModule_ProvideGsonConverterFactoryFactory {
            public static create(param0: com.zendesk.sdk.network.impl.RestModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public static proxyProvideGsonConverterFactory(param0: com.zendesk.sdk.network.impl.RestModule, param1: com.google.gson.Gson): retrofit2.converter.gson.GsonConverterFactory;
            public get(): retrofit2.converter.gson.GsonConverterFactory;
            public constructor(param0: com.zendesk.sdk.network.impl.RestModule, param1: javax.inject.Provider);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class RestModule_ProvideGsonFactory {
            public static create(param0: com.zendesk.sdk.network.impl.RestModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public static proxyProvideGson(param0: com.zendesk.sdk.network.impl.RestModule, param1: com.google.gson.TypeAdapter): com.google.gson.Gson;
            public get(): com.google.gson.Gson;
            public constructor(param0: com.zendesk.sdk.network.impl.RestModule, param1: javax.inject.Provider);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class RestModule_ProvideHelpCenterCachingInterceptorFactory {
            public static create(param0: com.zendesk.sdk.network.impl.RestModule): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.RestModule);
            public get(): com.zendesk.sdk.network.impl.HelpCenterCachingInterceptor;
            public static proxyProvideHelpCenterCachingInterceptor(param0: com.zendesk.sdk.network.impl.RestModule): com.zendesk.sdk.network.impl.HelpCenterCachingInterceptor;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class RestModule_ProvideHttpLoggingInterceptorFactory {
            public static create(param0: com.zendesk.sdk.network.impl.RestModule): dagger.internal.Factory;
            public static proxyProvideHttpLoggingInterceptor(param0: com.zendesk.sdk.network.impl.RestModule): okhttp3.logging.HttpLoggingInterceptor;
            public constructor(param0: com.zendesk.sdk.network.impl.RestModule);
            public get(): okhttp3.logging.HttpLoggingInterceptor;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class RestModule_ProvideOkHttpClientFactory {
            public get(): okhttp3.OkHttpClient;
            public static create(param0: com.zendesk.sdk.network.impl.RestModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider, param5: javax.inject.Provider, param6: javax.inject.Provider): dagger.internal.Factory;
            public static proxyProvideOkHttpClient(param0: com.zendesk.sdk.network.impl.RestModule, param1: com.zendesk.sdk.network.impl.DefaultZendeskUnauthorizedInterceptor, param2: com.zendesk.sdk.network.impl.ZendeskRequestInterceptor, param3: okhttp3.logging.HttpLoggingInterceptor, param4: java.lang.Object, param5: java.util.List, param6: okhttp3.Cache): okhttp3.OkHttpClient;
            public constructor(param0: com.zendesk.sdk.network.impl.RestModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider, param5: javax.inject.Provider, param6: javax.inject.Provider);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class RestModule_ProvideRestAdapterFactory {
            public static create(param0: com.zendesk.sdk.network.impl.RestModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.RestModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider);
            public get(): retrofit2.Retrofit;
            public static proxyProvideRestAdapter(param0: com.zendesk.sdk.network.impl.RestModule, param1: string, param2: retrofit2.converter.gson.GsonConverterFactory, param3: okhttp3.OkHttpClient): retrofit2.Retrofit;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class RestModule_ProvideZendeskRequestInterceptorFactory {
            public static create(param0: com.zendesk.sdk.network.impl.RestModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.RestModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider);
            public static proxyProvideZendeskRequestInterceptor(param0: com.zendesk.sdk.network.impl.RestModule, param1: string, param2: string, param3: string): com.zendesk.sdk.network.impl.ZendeskRequestInterceptor;
            public get(): com.zendesk.sdk.network.impl.ZendeskRequestInterceptor;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class Serializer {
            /**
             * Constructs a new instance of the com.zendesk.sdk.network.impl.Serializer interface with the provided implementation.
             */
            public constructor(implementation: {
              deserialize(param0: java.lang.Object, param1: java.lang.Class): java.lang.Object;
              serialize(param0: java.lang.Object): string;
            });
            public serialize(param0: java.lang.Object): string;
            public deserialize(param0: java.lang.Object, param1: java.lang.Class): java.lang.Object;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ServiceModule {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ServiceModule_ProvideAccessServiceFactory {
            public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider);
            public get(): com.zendesk.sdk.network.AccessService;
            public static proxyProvideAccessService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: retrofit2.Retrofit): com.zendesk.sdk.network.AccessService;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ServiceModule_ProvideBlipsServiceFactory {
            public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider);
            public static proxyProvideBlipsService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: retrofit2.Retrofit): com.zendesk.sdk.network.impl.BlipsService;
            public get(): com.zendesk.sdk.network.impl.BlipsService;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ServiceModule_ProvideHelpCenterServiceFactory {
            public static proxyProvideHelpCenterService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: retrofit2.Retrofit): com.zendesk.sdk.network.HelpCenterService;
            public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider);
            public get(): com.zendesk.sdk.network.HelpCenterService;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ServiceModule_ProvidePushRegistrationServiceFactory {
            public get(): com.zendesk.sdk.network.PushRegistrationService;
            public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider);
            public static proxyProvidePushRegistrationService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: retrofit2.Retrofit): com.zendesk.sdk.network.PushRegistrationService;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ServiceModule_ProvideRequestServiceFactory {
            public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider);
            public static proxyProvideRequestService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: retrofit2.Retrofit): com.zendesk.sdk.network.RequestService;
            public get(): com.zendesk.sdk.network.RequestService;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ServiceModule_ProvideSdkSettingsServiceFactory {
            public get(): com.zendesk.sdk.network.SdkSettingsService;
            public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider);
            public static proxyProvideSdkSettingsService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: retrofit2.Retrofit): com.zendesk.sdk.network.SdkSettingsService;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ServiceModule_ProvideUploadServiceFactory {
            public get(): com.zendesk.sdk.network.UploadService;
            public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider);
            public static proxyProvideUploadService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: retrofit2.Retrofit): com.zendesk.sdk.network.UploadService;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ServiceModule_ProvideUserServiceFactory {
            public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider);
            public get(): com.zendesk.sdk.network.UserService;
            public static proxyProvideUserService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: retrofit2.Retrofit): com.zendesk.sdk.network.UserService;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ServiceModule_ProvideZendeskAccessServiceFactory {
            public static proxyProvideZendeskAccessService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: com.zendesk.sdk.network.AccessService): com.zendesk.sdk.network.impl.ZendeskAccessService;
            public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider);
            public get(): com.zendesk.sdk.network.impl.ZendeskAccessService;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ServiceModule_ProvideZendeskHelpCenterServiceFactory {
            public static proxyProvideZendeskHelpCenterService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: com.zendesk.sdk.network.HelpCenterService): com.zendesk.sdk.network.impl.ZendeskHelpCenterService;
            public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider);
            public get(): com.zendesk.sdk.network.impl.ZendeskHelpCenterService;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ServiceModule_ProvideZendeskPushRegistrationServiceFactory {
            public static proxyProvideZendeskPushRegistrationService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: com.zendesk.sdk.network.PushRegistrationService): com.zendesk.sdk.network.impl.ZendeskPushRegistrationService;
            public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider);
            public get(): com.zendesk.sdk.network.impl.ZendeskPushRegistrationService;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ServiceModule_ProvideZendeskRequestServiceFactory {
            public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider);
            public get(): com.zendesk.sdk.network.impl.ZendeskRequestService;
            public static proxyProvideZendeskRequestService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: com.zendesk.sdk.network.RequestService): com.zendesk.sdk.network.impl.ZendeskRequestService;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ServiceModule_ProvideZendeskSdkSettingsServiceFactory {
            public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider);
            public static proxyProvideZendeskSdkSettingsService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: com.zendesk.sdk.network.SdkSettingsService): com.zendesk.sdk.network.impl.ZendeskSdkSettingsService;
            public get(): com.zendesk.sdk.network.impl.ZendeskSdkSettingsService;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ServiceModule_ProvideZendeskUploadServiceFactory {
            public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider);
            public static proxyProvideZendeskUploadService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: com.zendesk.sdk.network.UploadService): com.zendesk.sdk.network.impl.ZendeskUploadService;
            public get(): com.zendesk.sdk.network.impl.ZendeskUploadService;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ServiceModule_ProvideZendeskUserServiceFactory {
            public get(): com.zendesk.sdk.network.impl.ZendeskUserService;
            public static create(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider): dagger.internal.Factory;
            public constructor(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: javax.inject.Provider);
            public static proxyProvideZendeskUserService(param0: com.zendesk.sdk.network.impl.ServiceModule, param1: com.zendesk.sdk.network.UserService): com.zendesk.sdk.network.impl.ZendeskUserService;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class StubArticleVoteStorage {
            public storeArticleVote(param0: java.lang.Long, param1: com.zendesk.sdk.model.helpcenter.ArticleVote): void;
            public getCacheKey(): string;
            public constructor();
            public clearUserData(): void;
            public getStoredArticleVote(param0: java.lang.Long): com.zendesk.sdk.model.helpcenter.ArticleVote;
            public removeStoredArticleVote(param0: java.lang.Long): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
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

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class StubHelpCenterSessionCache {
            public isUniqueSearchResultClick(): boolean;
            public unsetUniqueSearchResultClick(): void;
            public setLastSearch(param0: string, param1: number): void;
            public getLastSearch(): com.zendesk.sdk.model.helpcenter.LastSearch;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class StubIdentity {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class StubIdentityStorage {
            public storeIdentity(param0: com.zendesk.sdk.model.access.Identity): void;
            public getCacheKey(): string;
            public storeAccessToken(param0: com.zendesk.sdk.model.access.AccessToken): void;
            public getStoredAccessToken(): com.zendesk.sdk.model.access.AccessToken;
            public getUUID(): string;
            public getIdentity(): com.zendesk.sdk.model.access.Identity;
            public clearUserData(): void;
            public anonymiseIdentity(): com.zendesk.sdk.model.access.Identity;
            public getUserId(): java.lang.Long;
            public getStoredAccessTokenAsBearerToken(): string;
            public storeUserId(param0: java.lang.Long): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class StubModule {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class StubModule_InjectStubZendeskConfigHelperFactory {
            public static proxyInjectStubZendeskConfigHelper(param0: com.zendesk.sdk.network.impl.StubModule, param1: com.zendesk.sdk.network.impl.ProviderStore, param2: com.zendesk.sdk.storage.StorageStore): com.zendesk.sdk.network.impl.ZendeskConfigHelper;
            public get(): com.zendesk.sdk.network.impl.ZendeskConfigHelper;
            public constructor(param0: com.zendesk.sdk.network.impl.StubModule, param1: javax.inject.Provider, param2: javax.inject.Provider);
            public static create(param0: com.zendesk.sdk.network.impl.StubModule, param1: javax.inject.Provider, param2: javax.inject.Provider): dagger.internal.Factory;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class StubModule_ProvideStubProviderStoreFactory {
            public constructor(param0: com.zendesk.sdk.network.impl.StubModule);
            public static create(param0: com.zendesk.sdk.network.impl.StubModule): dagger.internal.Factory;
            public get(): com.zendesk.sdk.network.impl.ProviderStore;
            public static proxyProvideStubProviderStore(param0: com.zendesk.sdk.network.impl.StubModule): com.zendesk.sdk.network.impl.ProviderStore;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class StubModule_ProvideStubStorageStoreFactory {
            public constructor(param0: com.zendesk.sdk.network.impl.StubModule);
            public static create(param0: com.zendesk.sdk.network.impl.StubModule): dagger.internal.Factory;
            public get(): com.zendesk.sdk.storage.StorageStore;
            public static proxyProvideStubStorageStore(param0: com.zendesk.sdk.network.impl.StubModule): com.zendesk.sdk.storage.StorageStore;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class StubProviderFactory {
          }
          export namespace StubProviderFactory {
            export class ZendeskCallbackInvocationHandler {
              public invoke(param0: java.lang.Object, param1: java.lang.reflect.Method, param2: native.Array<java.lang.Object>): java.lang.Object;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class StubProviderStore {
            public requestProvider(): com.zendesk.sdk.network.RequestProvider;
            public uploadProvider(): com.zendesk.sdk.network.UploadProvider;
            public sdkSettingsProvider(): com.zendesk.sdk.network.SdkSettingsProvider;
            public helpCenterProvider(): com.zendesk.sdk.network.HelpCenterProvider;
            public pushRegistrationProvider(): com.zendesk.sdk.network.PushRegistrationProvider;
            public userProvider(): com.zendesk.sdk.network.UserProvider;
            public networkInfoProvider(): com.zendesk.sdk.network.NetworkInfoProvider;
            public uiSettingsHelper(): com.zendesk.sdk.network.SettingsHelper;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class StubPushRegistrationResponseStorage {
            public hasStoredPushRegistrationResponse(): boolean;
            public getCacheKey(): string;
            public constructor();
            public getPushRegistrationResponse(): com.zendesk.sdk.model.push.PushRegistrationResponse;
            public clearUserData(): void;
            public storePushRegistrationResponse(param0: com.zendesk.sdk.model.push.PushRegistrationResponse): void;
            public removePushRegistrationResponse(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class StubRequestStorage {
            public hasStoredRequestUpdates(): boolean;
            public storeRequestId(param0: string): void;
            public getRequestUpdatesTimestamp(): number;
            public getCacheKey(): string;
            public getStoredRequestIds(): java.util.List;
            public getRequestUpdates(): com.zendesk.sdk.model.request.RequestUpdates;
            public clearUserData(): void;
            public setRequestUpdates(param0: com.zendesk.sdk.model.request.RequestUpdates): void;
            public markRequestAsRead(param0: string): void;
            public setCommentCount(param0: string, param1: number): void;
            public getCommentCount(param0: string): java.lang.Integer;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class StubSdkSettingsStorage {
            public areSettingsUpToDate(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
            public deleteStoredSettings(): void;
            public setStoredSettings(param0: com.zendesk.sdk.model.settings.SafeMobileSettings): void;
            public getStoredSettings(): com.zendesk.sdk.model.settings.SafeMobileSettings;
            public hasStoredSdkSettings(): boolean;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class StubSdkStorage {
            public getUserStorage(): java.util.Set;
            public clearUserData(): void;
            public registerUserStorage(param0: com.zendesk.sdk.storage.SdkStorage.UserStorage): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class StubStorageStore {
            public requestStorage(): com.zendesk.sdk.storage.RequestStorage;
            public helpCenterSessionCache(): com.zendesk.sdk.storage.HelpCenterSessionCache;
            public sdkStorage(): com.zendesk.sdk.storage.SdkStorage;
            public identityStorage(): com.zendesk.sdk.storage.IdentityStorage;
            public sdkSettingsStorage(): com.zendesk.sdk.storage.SdkSettingsStorage;
            public pushStorage(): com.zendesk.sdk.storage.PushRegistrationResponseStorage;
            public voteStorage(): com.zendesk.sdk.storage.ArticleVoteStorage;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
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

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskAccessProvider {
            public getAndStoreAuthTokenViaAnonymous(param0: com.zendesk.sdk.model.access.AnonymousIdentity, param1: com.zendesk.service.ZendeskCallback): void;
            public constructor(param0: com.zendesk.sdk.storage.IdentityStorage, param1: com.zendesk.sdk.network.impl.ZendeskAccessService);
            public getAndStoreAuthTokenViaJwt(param0: com.zendesk.sdk.model.access.JwtIdentity, param1: com.zendesk.service.ZendeskCallback): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskAccessService {
            public constructor(param0: com.zendesk.sdk.network.AccessService);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskBase64Serializer {
            public serialize(param0: java.lang.Object): string;
            public deserialize(param0: java.lang.Object, param1: java.lang.Class): java.lang.Object;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskBaseProvider {
            public configureSdk(param0: com.zendesk.service.ZendeskCallback): void;
            public getAccessToken(param0: com.zendesk.sdk.model.settings.SafeMobileSettings, param1: com.zendesk.service.ZendeskCallback): void;
            public constructor(param0: com.zendesk.sdk.network.AccessProvider, param1: com.zendesk.sdk.storage.SdkSettingsStorage, param2: com.zendesk.sdk.storage.IdentityStorage, param3: com.zendesk.sdk.network.SdkSettingsProvider);
            public getSdkSettings(param0: com.zendesk.service.ZendeskCallback): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskBlipsProvider {
            public sendPageViewBlip(param0: string, param1: string): void;
            public sendHelpCenterSearchBlip(param0: string): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskConfig {
            public static INSTANCE: com.zendesk.sdk.network.impl.ZendeskConfig;
            public static HEADER_SUFFIX_MAX_LENGTH: number;
            public setSdkOptions(param0: com.zendesk.sdk.network.SdkOptions): void;
            public isInitialized(): boolean;
            public provider(): com.zendesk.sdk.network.impl.ProviderStore;
            public isCoppaEnabled(): boolean;
            public getApplicationId(): string;
            public getOauthClientId(): string;
            public setCoppaEnabled(param0: boolean): void;
            public enablePushWithIdentifier(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
            public setTicketFormId(param0: java.lang.Long): void;
            public isAuthenticationAvailable(): boolean;
            public enablePushWithUAChannelId(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
            public static valueOf(param0: string): com.zendesk.sdk.network.impl.ZendeskConfig;
            public storage(): com.zendesk.sdk.storage.StorageStore;
            public disablePush(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
            public init(param0: android.content.Context, param1: string, param2: string, param3: string): void;
            public setCustomFields(param0: java.util.List): void;
            public getMobileSettings(): com.zendesk.sdk.model.settings.SafeMobileSettings;
            public getSdkOptions(): com.zendesk.sdk.network.SdkOptions;
            public getZendeskUrl(): string;
            public getTicketFormId(): java.lang.Long;
            public setIdentity(param0: com.zendesk.sdk.model.access.Identity): void;
            public setDeviceLocale(param0: java.util.Locale): void;
            public getTracker(): com.zendesk.sdk.network.ZendeskTracker;
            public getCustomFields(): java.util.List;
            public static values(): native.Array<com.zendesk.sdk.network.impl.ZendeskConfig>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskConfigHelper {
            public getStorageStore(): com.zendesk.sdk.storage.StorageStore;
            public getProviderStore(): com.zendesk.sdk.network.impl.ProviderStore;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskConfigModule {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskConfigModule_ProvideZendeskConfigHelperFactory {
            public constructor(param0: com.zendesk.sdk.network.impl.ZendeskConfigModule, param1: javax.inject.Provider, param2: javax.inject.Provider);
            public get(): com.zendesk.sdk.network.impl.ZendeskConfigHelper;
            public static proxyProvideZendeskConfigHelper(param0: com.zendesk.sdk.network.impl.ZendeskConfigModule, param1: com.zendesk.sdk.network.impl.ProviderStore, param2: com.zendesk.sdk.storage.StorageStore): com.zendesk.sdk.network.impl.ZendeskConfigHelper;
            public static create(param0: com.zendesk.sdk.network.impl.ZendeskConfigModule, param1: javax.inject.Provider, param2: javax.inject.Provider): dagger.internal.Factory;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskConfig_MembersInjector {
            public static injectZendeskConfigHelper(param0: com.zendesk.sdk.network.impl.ZendeskConfig, param1: javax.inject.Provider): void;
            public injectMembers(param0: com.zendesk.sdk.network.impl.ZendeskConfig): void;
            public static create(param0: javax.inject.Provider): dagger.MembersInjector;
            public constructor(param0: javax.inject.Provider);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskDateTypeAdapter {
            public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.Date): void;
            public read(param0: com.google.gson.stream.JsonReader): java.util.Date;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskHelpCenterProvider {
            public listArticlesFlat(param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback): void;
            public deleteVote(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
            public getSections(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
            public getSection(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
            public getArticles(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
            public getSuggestedArticles(param0: com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch, param1: com.zendesk.service.ZendeskCallback): void;
            public getHelp(param0: com.zendesk.sdk.model.helpcenter.help.HelpRequest, param1: com.zendesk.service.ZendeskCallback): void;
            public getAttachments(param0: java.lang.Long, param1: com.zendesk.sdk.model.helpcenter.AttachmentType, param2: com.zendesk.service.ZendeskCallback): void;
            public upvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
            public getArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
            public downvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
            public submitRecordArticleView(param0: com.zendesk.sdk.model.helpcenter.Article, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback): void;
            public getCategory(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback): void;
            public getCategories(param0: com.zendesk.service.ZendeskCallback): void;
            public listArticles(param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback): void;
            public searchArticles(param0: com.zendesk.sdk.model.helpcenter.HelpCenterSearch, param1: com.zendesk.service.ZendeskCallback): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskHelpCenterService {
            public listArticles(param0: string, param1: string, param2: java.util.Locale, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: java.lang.Integer, param8: com.zendesk.service.ZendeskCallback): void;
            public searchArticles(param0: string, param1: string, param2: java.util.Locale, param3: string, param4: string, param5: string, param6: string, param7: java.lang.Integer, param8: java.lang.Integer, param9: com.zendesk.service.ZendeskCallback): void;
            public getCategoryById(param0: string, param1: java.lang.Long, param2: java.util.Locale, param3: com.zendesk.service.ZendeskCallback): void;
            public getSuggestedArticles(param0: string, param1: string, param2: java.util.Locale, param3: string, param4: java.lang.Long, param5: java.lang.Long, param6: com.zendesk.service.ZendeskCallback): void;
            public upvoteArticle(param0: string, param1: java.lang.Long, param2: string, param3: com.zendesk.service.ZendeskCallback): void;
            public getSectionsForCategory(param0: string, param1: java.lang.Long, param2: java.util.Locale, param3: com.zendesk.service.ZendeskCallback): void;
            public deleteVote(param0: string, param1: java.lang.Long, param2: com.zendesk.service.ZendeskCallback): void;
            public submitRecordArticleView(param0: string, param1: java.lang.Long, param2: java.util.Locale, param3: com.zendesk.sdk.model.helpcenter.RecordArticleViewRequest, param4: com.zendesk.service.ZendeskCallback): void;
            public getSectionById(param0: string, param1: java.lang.Long, param2: java.util.Locale, param3: com.zendesk.service.ZendeskCallback): void;
            public getArticle(param0: string, param1: java.lang.Long, param2: java.util.Locale, param3: string, param4: com.zendesk.service.ZendeskCallback): void;
            public downvoteArticle(param0: string, param1: java.lang.Long, param2: string, param3: com.zendesk.service.ZendeskCallback): void;
            public getCategories(param0: string, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback): void;
            public getArticlesForSection(param0: string, param1: java.lang.Long, param2: java.util.Locale, param3: string, param4: com.zendesk.service.ZendeskCallback): void;
            public getAttachments(param0: string, param1: java.util.Locale, param2: java.lang.Long, param3: com.zendesk.sdk.model.helpcenter.AttachmentType, param4: com.zendesk.service.ZendeskCallback): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskLocaleConverter {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskNetworkInfoProvider {
            public unregister(): void;
            public clearRetryActions(): void;
            public addRetryAction(param0: java.lang.Integer, param1: com.zendesk.sdk.network.RetryAction): void;
            public onNetworkAvailable(): void;
            public onNetworkUnavailable(): void;
            public register(): void;
            public clearNetworkAwareListeners(): void;
            public isNetworkAvailable(): boolean;
            public addNetworkAwareListener(param0: java.lang.Integer, param1: com.zendesk.sdk.network.NetworkAware): void;
            public removeRetryAction(param0: java.lang.Integer): void;
            public removeNetworkAwareListener(param0: java.lang.Integer): void;
          }
          export namespace ZendeskNetworkInfoProvider {
            export class NetworkAvailabilityBroadcastReceiver {
              public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskProviderStore {
            public requestProvider(): com.zendesk.sdk.network.RequestProvider;
            public uploadProvider(): com.zendesk.sdk.network.UploadProvider;
            public sdkSettingsProvider(): com.zendesk.sdk.network.SdkSettingsProvider;
            public helpCenterProvider(): com.zendesk.sdk.network.HelpCenterProvider;
            public pushRegistrationProvider(): com.zendesk.sdk.network.PushRegistrationProvider;
            public userProvider(): com.zendesk.sdk.network.UserProvider;
            public networkInfoProvider(): com.zendesk.sdk.network.NetworkInfoProvider;
            public uiSettingsHelper(): com.zendesk.sdk.network.SettingsHelper;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskPushRegistrationProvider {
            public unregisterDevice(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
            public registerDeviceWithIdentifier(param0: string, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback): void;
            public registerDeviceWithUAChannelId(param0: string, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback): void;
          }
          export namespace ZendeskPushRegistrationProvider {
            export class TokenType {
              public static Identifier: com.zendesk.sdk.network.impl.ZendeskPushRegistrationProvider.TokenType;
              public static UrbanAirshipChannelId: com.zendesk.sdk.network.impl.ZendeskPushRegistrationProvider.TokenType;
              public static valueOf(param0: string): com.zendesk.sdk.network.impl.ZendeskPushRegistrationProvider.TokenType;
              public static values(): native.Array<com.zendesk.sdk.network.impl.ZendeskPushRegistrationProvider.TokenType>;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskPushRegistrationService {
            public registerDevice(param0: string, param1: com.zendesk.sdk.model.push.PushRegistrationRequestWrapper, param2: com.zendesk.service.ZendeskCallback): void;
            public unregisterDevice(param0: string, param1: string, param2: com.zendesk.service.ZendeskCallback): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskRequestInterceptor {
            public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
            public constructor(param0: string, param1: string, param2: string);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskRequestProvider {
            public getComments(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
            public getUpdatesForDevice(param0: com.zendesk.service.ZendeskCallback): void;
            public getRequests(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
            public getRequest(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
            public createRequest(param0: com.zendesk.sdk.model.request.CreateRequest, param1: com.zendesk.service.ZendeskCallback): void;
            public getTicketFormsById(param0: java.util.List, param1: com.zendesk.service.ZendeskCallback): void;
            public getAllRequests(param0: com.zendesk.service.ZendeskCallback): void;
            public addComment(param0: string, param1: com.zendesk.sdk.model.request.EndUserComment, param2: com.zendesk.service.ZendeskCallback): void;
          }
          export namespace ZendeskRequestProvider {
            export class RequestUpdatesCacheCallback extends com.zendesk.sdk.network.impl.PassThroughErrorZendeskCallback {
              public onSuccess(param0: java.lang.Object): void;
              public onSuccess(param0: java.util.List): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskRequestService {
            public createRequest(param0: string, param1: string, param2: com.zendesk.sdk.model.request.CreateRequest, param3: com.zendesk.service.ZendeskCallback): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskSdkSettingsProvider {
            public getSettings(param0: com.zendesk.service.ZendeskCallback): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskSdkSettingsService {
            public getSettings(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskSettingsHelper {
            public loadSetting(param0: com.zendesk.service.ZendeskCallback): void;
            public constructor(param0: com.zendesk.sdk.network.BaseProvider);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskUploadProvider {
            public deleteAttachment(param0: string, param1: com.zendesk.service.ZendeskCallback): void;
            public uploadAttachment(param0: string, param1: java.io.File, param2: string, param3: com.zendesk.service.ZendeskCallback): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskUploadService {
            public constructor(param0: com.zendesk.sdk.network.UploadService);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskUserProvider {
            public setUserFields(param0: java.util.Map, param1: com.zendesk.service.ZendeskCallback): void;
            public getUserFields(param0: com.zendesk.service.ZendeskCallback): void;
            public addTags(param0: java.util.List, param1: com.zendesk.service.ZendeskCallback): void;
            public deleteTags(param0: java.util.List, param1: com.zendesk.service.ZendeskCallback): void;
            public getUser(param0: com.zendesk.service.ZendeskCallback): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export namespace impl {
          export class ZendeskUserService {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace power {
        export class BatteryStateBroadcastReceiver {
          public constructor();
          public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace power {
        export class PowerConfig {
          public static FIFTEEN_PERCENT_BATTERY_CHARGE: number;
          public static THIRTY_PERCENT_BATTERY_CHARGE: number;
          public isGlobalSyncDisabled(): boolean;
          public isGlobalSyncEnabled(): boolean;
          public isBatteryLow(): boolean;
          public isBatteryOk(): boolean;
          public static getInstance(param0: android.content.Context): com.zendesk.sdk.power.PowerConfig;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace providers {
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

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class ArticleVoteStorage {
          /**
           * Constructs a new instance of the com.zendesk.sdk.storage.ArticleVoteStorage interface with the provided implementation.
           */
          public constructor(implementation: {
            storeArticleVote(param0: java.lang.Long, param1: com.zendesk.sdk.model.helpcenter.ArticleVote): void;
            getStoredArticleVote(param0: java.lang.Long): com.zendesk.sdk.model.helpcenter.ArticleVote;
            removeStoredArticleVote(param0: java.lang.Long): void;
            clearUserData(): void;
            getCacheKey(): string;
          });
          public getStoredArticleVote(param0: java.lang.Long): com.zendesk.sdk.model.helpcenter.ArticleVote;
          public getCacheKey(): string;
          public clearUserData(): void;
          public storeArticleVote(param0: java.lang.Long, param1: com.zendesk.sdk.model.helpcenter.ArticleVote): void;
          public removeStoredArticleVote(param0: java.lang.Long): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
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
          public isUniqueSearchResultClick(): boolean;
          public setLastSearch(param0: string, param1: number): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class IdentityStorage {
          /**
           * Constructs a new instance of the com.zendesk.sdk.storage.IdentityStorage interface with the provided implementation.
           */
          public constructor(implementation: {
            storeAccessToken(param0: com.zendesk.sdk.model.access.AccessToken): void;
            getStoredAccessToken(): com.zendesk.sdk.model.access.AccessToken;
            storeUserId(param0: java.lang.Long): void;
            getUserId(): java.lang.Long;
            getStoredAccessTokenAsBearerToken(): string;
            getUUID(): string;
            storeIdentity(param0: com.zendesk.sdk.model.access.Identity): void;
            getIdentity(): com.zendesk.sdk.model.access.Identity;
            anonymiseIdentity(): com.zendesk.sdk.model.access.Identity;
            clearUserData(): void;
            getCacheKey(): string;
          });
          public storeUserId(param0: java.lang.Long): void;
          public storeAccessToken(param0: com.zendesk.sdk.model.access.AccessToken): void;
          public getUserId(): java.lang.Long;
          public getUUID(): string;
          public getIdentity(): com.zendesk.sdk.model.access.Identity;
          public anonymiseIdentity(): com.zendesk.sdk.model.access.Identity;
          public getCacheKey(): string;
          public storeIdentity(param0: com.zendesk.sdk.model.access.Identity): void;
          public clearUserData(): void;
          public getStoredAccessToken(): com.zendesk.sdk.model.access.AccessToken;
          public getStoredAccessTokenAsBearerToken(): string;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
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
          public storePushRegistrationResponse(param0: com.zendesk.sdk.model.push.PushRegistrationResponse): void;
          public hasStoredPushRegistrationResponse(): boolean;
          public getPushRegistrationResponse(): com.zendesk.sdk.model.push.PushRegistrationResponse;
          public removePushRegistrationResponse(): void;
          public getCacheKey(): string;
          public clearUserData(): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class RequestSessionCache {
          /**
           * Constructs a new instance of the com.zendesk.sdk.storage.RequestSessionCache interface with the provided implementation.
           */
          public constructor(implementation: {
            updateTicketFormCache(param0: java.util.List): void;
            getTicketFormsById(param0: java.util.List): java.util.List;
            containsAllTicketForms(param0: java.util.List): boolean;
          });
          public getTicketFormsById(param0: java.util.List): java.util.List;
          public updateTicketFormCache(param0: java.util.List): void;
          public containsAllTicketForms(param0: java.util.List): boolean;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class RequestStorage {
          /**
           * Constructs a new instance of the com.zendesk.sdk.storage.RequestStorage interface with the provided implementation.
           */
          public constructor(implementation: {
            getStoredRequestIds(): java.util.List;
            storeRequestId(param0: string): void;
            setCommentCount(param0: string, param1: number): void;
            getCommentCount(param0: string): java.lang.Integer;
            hasStoredRequestUpdates(): boolean;
            getRequestUpdatesTimestamp(): number;
            setRequestUpdates(param0: com.zendesk.sdk.model.request.RequestUpdates): void;
            markRequestAsRead(param0: string): void;
            getRequestUpdates(): com.zendesk.sdk.model.request.RequestUpdates;
            clearUserData(): void;
            getCacheKey(): string;
          });
          public setCommentCount(param0: string, param1: number): void;
          public getCacheKey(): string;
          public getCommentCount(param0: string): java.lang.Integer;
          public hasStoredRequestUpdates(): boolean;
          public getRequestUpdatesTimestamp(): number;
          public setRequestUpdates(param0: com.zendesk.sdk.model.request.RequestUpdates): void;
          public markRequestAsRead(param0: string): void;
          public getStoredRequestIds(): java.util.List;
          public clearUserData(): void;
          public getRequestUpdates(): com.zendesk.sdk.model.request.RequestUpdates;
          public storeRequestId(param0: string): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class SdkSettingsStorage {
          /**
           * Constructs a new instance of the com.zendesk.sdk.storage.SdkSettingsStorage interface with the provided implementation.
           */
          public constructor(implementation: {
            hasStoredSdkSettings(): boolean;
            areSettingsUpToDate(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
            getStoredSettings(): com.zendesk.sdk.model.settings.SafeMobileSettings;
            setStoredSettings(param0: com.zendesk.sdk.model.settings.SafeMobileSettings): void;
            deleteStoredSettings(): void;
          });
          public getStoredSettings(): com.zendesk.sdk.model.settings.SafeMobileSettings;
          public areSettingsUpToDate(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
          public setStoredSettings(param0: com.zendesk.sdk.model.settings.SafeMobileSettings): void;
          public deleteStoredSettings(): void;
          public hasStoredSdkSettings(): boolean;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class SdkStorage {
          /**
           * Constructs a new instance of the com.zendesk.sdk.storage.SdkStorage interface with the provided implementation.
           */
          public constructor(implementation: {
            registerUserStorage(param0: com.zendesk.sdk.storage.SdkStorage.UserStorage): void;
            clearUserData(): void;
            getUserStorage(): java.util.Set;
          });
          public getUserStorage(): java.util.Set;
          public registerUserStorage(param0: com.zendesk.sdk.storage.SdkStorage.UserStorage): void;
          public clearUserData(): void;
        }
        export namespace SdkStorage {
          export class UserStorage {
            /**
             * Constructs a new instance of the com.zendesk.sdk.storage.SdkStorage$UserStorage interface with the provided implementation.
             */
            public constructor(implementation: {
              clearUserData(): void;
              getCacheKey(): string;
            });
            public getCacheKey(): string;
            public clearUserData(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class StorageModule {
          public constructor();
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class StorageModule_ProvideArticleVoteStorageFactory {
          public static proxyProvideArticleVoteStorage(param0: com.zendesk.sdk.storage.StorageModule, param1: android.content.Context, param2: com.google.gson.Gson): com.zendesk.sdk.storage.ArticleVoteStorage;
          public static create(param0: com.zendesk.sdk.storage.StorageModule, param1: javax.inject.Provider, param2: javax.inject.Provider): dagger.internal.Factory;
          public constructor(param0: com.zendesk.sdk.storage.StorageModule, param1: javax.inject.Provider, param2: javax.inject.Provider);
          public get(): com.zendesk.sdk.storage.ArticleVoteStorage;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class StorageModule_ProvideHelpCenterSessionCacheFactory {
          public constructor(param0: com.zendesk.sdk.storage.StorageModule);
          public static create(param0: com.zendesk.sdk.storage.StorageModule): dagger.internal.Factory;
          public get(): com.zendesk.sdk.storage.HelpCenterSessionCache;
          public static proxyProvideHelpCenterSessionCache(param0: com.zendesk.sdk.storage.StorageModule): com.zendesk.sdk.storage.HelpCenterSessionCache;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class StorageModule_ProvideIdentityStorageFactory {
          public get(): com.zendesk.sdk.storage.IdentityStorage;
          public static create(param0: com.zendesk.sdk.storage.StorageModule, param1: javax.inject.Provider, param2: javax.inject.Provider): dagger.internal.Factory;
          public constructor(param0: com.zendesk.sdk.storage.StorageModule, param1: javax.inject.Provider, param2: javax.inject.Provider);
          public static proxyProvideIdentityStorage(param0: com.zendesk.sdk.storage.StorageModule, param1: android.content.Context, param2: com.google.gson.Gson): com.zendesk.sdk.storage.IdentityStorage;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class StorageModule_ProvidePushDeviceIdStorageFactory {
          public get(): com.zendesk.sdk.storage.PushRegistrationResponseStorage;
          public static create(param0: com.zendesk.sdk.storage.StorageModule, param1: javax.inject.Provider, param2: javax.inject.Provider): dagger.internal.Factory;
          public constructor(param0: com.zendesk.sdk.storage.StorageModule, param1: javax.inject.Provider, param2: javax.inject.Provider);
          public static proxyProvidePushDeviceIdStorage(param0: com.zendesk.sdk.storage.StorageModule, param1: android.content.Context, param2: com.google.gson.Gson): com.zendesk.sdk.storage.PushRegistrationResponseStorage;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class StorageModule_ProvideRequestSessionCacheFactory {
          public constructor(param0: com.zendesk.sdk.storage.StorageModule);
          public get(): com.zendesk.sdk.storage.RequestSessionCache;
          public static create(param0: com.zendesk.sdk.storage.StorageModule): dagger.internal.Factory;
          public static proxyProvideRequestSessionCache(param0: com.zendesk.sdk.storage.StorageModule): com.zendesk.sdk.storage.RequestSessionCache;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class StorageModule_ProvideRequestStorageFactory {
          public static proxyProvideRequestStorage(param0: com.zendesk.sdk.storage.StorageModule, param1: android.content.Context, param2: com.google.gson.Gson): com.zendesk.sdk.storage.RequestStorage;
          public static create(param0: com.zendesk.sdk.storage.StorageModule, param1: javax.inject.Provider, param2: javax.inject.Provider): dagger.internal.Factory;
          public constructor(param0: com.zendesk.sdk.storage.StorageModule, param1: javax.inject.Provider, param2: javax.inject.Provider);
          public get(): com.zendesk.sdk.storage.RequestStorage;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class StorageModule_ProvideSdkSettingsStorageFactory {
          public static proxyProvideSdkSettingsStorage(param0: com.zendesk.sdk.storage.StorageModule, param1: android.content.Context, param2: com.google.gson.Gson): com.zendesk.sdk.storage.SdkSettingsStorage;
          public get(): com.zendesk.sdk.storage.SdkSettingsStorage;
          public static create(param0: com.zendesk.sdk.storage.StorageModule, param1: javax.inject.Provider, param2: javax.inject.Provider): dagger.internal.Factory;
          public constructor(param0: com.zendesk.sdk.storage.StorageModule, param1: javax.inject.Provider, param2: javax.inject.Provider);
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class StorageModule_ProvideSdkStorageFactory {
          public constructor(param0: com.zendesk.sdk.storage.StorageModule);
          public get(): com.zendesk.sdk.storage.SdkStorage;
          public static create(param0: com.zendesk.sdk.storage.StorageModule): dagger.internal.Factory;
          public static proxyProvideSdkStorage(param0: com.zendesk.sdk.storage.StorageModule): com.zendesk.sdk.storage.SdkStorage;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class StorageModule_ProvideStorageStoreFactory {
          public static create(param0: com.zendesk.sdk.storage.StorageModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider, param5: javax.inject.Provider, param6: javax.inject.Provider, param7: javax.inject.Provider): dagger.internal.Factory;
          public constructor(param0: com.zendesk.sdk.storage.StorageModule, param1: javax.inject.Provider, param2: javax.inject.Provider, param3: javax.inject.Provider, param4: javax.inject.Provider, param5: javax.inject.Provider, param6: javax.inject.Provider, param7: javax.inject.Provider);
          public static proxyProvideStorageStore(param0: com.zendesk.sdk.storage.StorageModule, param1: com.zendesk.sdk.storage.SdkStorage, param2: com.zendesk.sdk.storage.IdentityStorage, param3: com.zendesk.sdk.storage.RequestStorage, param4: com.zendesk.sdk.storage.SdkSettingsStorage, param5: com.zendesk.sdk.storage.HelpCenterSessionCache, param6: com.zendesk.sdk.storage.PushRegistrationResponseStorage, param7: com.zendesk.sdk.storage.ArticleVoteStorage): com.zendesk.sdk.storage.StorageStore;
          public get(): com.zendesk.sdk.storage.StorageStore;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
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
          public requestStorage(): com.zendesk.sdk.storage.RequestStorage;
          public sdkSettingsStorage(): com.zendesk.sdk.storage.SdkSettingsStorage;
          public helpCenterSessionCache(): com.zendesk.sdk.storage.HelpCenterSessionCache;
          public pushStorage(): com.zendesk.sdk.storage.PushRegistrationResponseStorage;
          public voteStorage(): com.zendesk.sdk.storage.ArticleVoteStorage;
          public sdkStorage(): com.zendesk.sdk.storage.SdkStorage;
          public identityStorage(): com.zendesk.sdk.storage.IdentityStorage;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class ZendeskArticleVoteStorage {
          public getStoredArticleVote(param0: java.lang.Long): com.zendesk.sdk.model.helpcenter.ArticleVote;
          public getCacheKey(): string;
          public clearUserData(): void;
          public storeArticleVote(param0: java.lang.Long, param1: com.zendesk.sdk.model.helpcenter.ArticleVote): void;
          public removeStoredArticleVote(param0: java.lang.Long): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class ZendeskHelpCenterSessionCache {
          public static DEFAULT_SEARCH: com.zendesk.sdk.model.helpcenter.LastSearch;
          public getLastSearch(): com.zendesk.sdk.model.helpcenter.LastSearch;
          public unsetUniqueSearchResultClick(): void;
          public isUniqueSearchResultClick(): boolean;
          public setLastSearch(param0: string, param1: number): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class ZendeskIdentityStorage {
          public storeUserId(param0: java.lang.Long): void;
          public storeAccessToken(param0: com.zendesk.sdk.model.access.AccessToken): void;
          public getUserId(): java.lang.Long;
          public getUUID(): string;
          public getIdentity(): com.zendesk.sdk.model.access.Identity;
          public anonymiseIdentity(): com.zendesk.sdk.model.access.Identity;
          public getCacheKey(): string;
          public storeIdentity(param0: com.zendesk.sdk.model.access.Identity): void;
          public clearUserData(): void;
          public getStoredAccessToken(): com.zendesk.sdk.model.access.AccessToken;
          public getStoredAccessTokenAsBearerToken(): string;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class ZendeskPushRegistrationResponseStorage {
          public storePushRegistrationResponse(param0: com.zendesk.sdk.model.push.PushRegistrationResponse): void;
          public hasStoredPushRegistrationResponse(): boolean;
          public getPushRegistrationResponse(): com.zendesk.sdk.model.push.PushRegistrationResponse;
          public removePushRegistrationResponse(): void;
          public getCacheKey(): string;
          public clearUserData(): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class ZendeskRequestSessionCache {
          public getTicketFormsById(param0: java.util.List): java.util.List;
          public updateTicketFormCache(param0: java.util.List): void;
          public containsAllTicketForms(param0: java.util.List): boolean;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class ZendeskRequestStorage {
          public setCommentCount(param0: string, param1: number): void;
          public getCacheKey(): string;
          public getCommentCount(param0: string): java.lang.Integer;
          public hasStoredRequestUpdates(): boolean;
          public getRequestUpdatesTimestamp(): number;
          public setRequestUpdates(param0: com.zendesk.sdk.model.request.RequestUpdates): void;
          public markRequestAsRead(param0: string): void;
          public getStoredRequestIds(): java.util.List;
          public clearUserData(): void;
          public getRequestUpdates(): com.zendesk.sdk.model.request.RequestUpdates;
          public storeRequestId(param0: string): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class ZendeskSdkSettingsStorage {
          public getStoredSettings(): com.zendesk.sdk.model.settings.SafeMobileSettings;
          public areSettingsUpToDate(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
          public setStoredSettings(param0: com.zendesk.sdk.model.settings.SafeMobileSettings): void;
          public deleteStoredSettings(): void;
          public hasStoredSdkSettings(): boolean;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class ZendeskSdkStorage {
          public getUserStorage(): java.util.Set;
          public registerUserStorage(param0: com.zendesk.sdk.storage.SdkStorage.UserStorage): void;
          public clearUserData(): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace storage {
        export class ZendeskStorageStore {
          public requestStorage(): com.zendesk.sdk.storage.RequestStorage;
          public sdkSettingsStorage(): com.zendesk.sdk.storage.SdkSettingsStorage;
          public helpCenterSessionCache(): com.zendesk.sdk.storage.HelpCenterSessionCache;
          public pushStorage(): com.zendesk.sdk.storage.PushRegistrationResponseStorage;
          public voteStorage(): com.zendesk.sdk.storage.ArticleVoteStorage;
          public sdkStorage(): com.zendesk.sdk.storage.SdkStorage;
          public identityStorage(): com.zendesk.sdk.storage.IdentityStorage;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace util {
        export class NetworkUtils {
          public static isConnected(param0: android.content.Context): boolean;
          public static getConnectivityManager(param0: android.content.Context): android.net.ConnectivityManager;
          public static isMobile(param0: android.content.Context): boolean;
          public static getActiveNetworkInfo(param0: android.content.Context): android.net.NetworkInfo;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace util {
        export class StageDetectionUtil {
          public static isProduction(param0: android.content.Context): boolean;
          public static isDebug(param0: android.content.Context): boolean;
        }
      }
    }
  }
}

