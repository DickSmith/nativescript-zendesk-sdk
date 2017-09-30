/* tslint:disable max-classes-per-file no-namespace indent max-line-length member-ordering unified-signatures member-access semicolon trailing-comma */

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
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

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace attachment {
        export class AttachmentHelper {
          public static isAttachmentSupportEnabled(param0: com.zendesk.sdk.model.settings.SafeMobileSettings): boolean;
          public constructor();
          public static isFileEligibleForUpload(param0: java.io.File, param1: com.zendesk.sdk.model.settings.SafeMobileSettings): boolean;
          public static showAttachmentTryAgainDialog(param0: android.content.Context, param1: com.zendesk.belvedere.BelvedereResult, param2: com.zendesk.service.ErrorResponse, param3: com.zendesk.sdk.attachment.ImageUploadHelper, param4: com.zendesk.sdk.feedback.ui.AttachmentContainerHost): void;
          public static processAndUploadSelectedFiles(param0: java.util.List, param1: com.zendesk.sdk.attachment.ImageUploadHelper, param2: android.content.Context, param3: com.zendesk.sdk.feedback.ui.AttachmentContainerHost, param4: com.zendesk.sdk.model.settings.SafeMobileSettings): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace attachment {
        export class ImageUploadHelper {
          public getRecentState(): java.util.HashMap;
          public constructor(param0: com.zendesk.sdk.attachment.ImageUploadHelper.ImageUploadProgressListener, param1: com.zendesk.sdk.network.UploadProvider);
          public getUploadTokens(): java.util.List;
          public uploadImage(param0: com.zendesk.belvedere.BelvedereResult, param1: string): void;
          public setImageUploadProgressListener(param0: com.zendesk.sdk.attachment.ImageUploadHelper.ImageUploadProgressListener): void;
          public deleteAllAttachmentsBeforeShutdown(): void;
          public getUploadedAttachments(): java.util.List;
          public removeImage(param0: java.io.File): void;
          public removeDuplicateFilesFromList(param0: java.util.List): java.util.List;
          public reset(): void;
          public isImageUploadCompleted(): boolean;
        }
        export namespace ImageUploadHelper {
          export class ImageUploadProgressListener {
            /**
             * Constructs a new instance of the com.zendesk.sdk.attachment.ImageUploadHelper$ImageUploadProgressListener interface with the provided implementation.
             */
            public constructor(implementation: {
              allImagesUploaded(param0: java.util.Map): void;
              imageUploaded(param0: com.zendesk.sdk.model.request.UploadResponse, param1: com.zendesk.belvedere.BelvedereResult): void;
              imageUploadError(param0: com.zendesk.service.ErrorResponse, param1: com.zendesk.belvedere.BelvedereResult): void;
            });
            public imageUploaded(param0: com.zendesk.sdk.model.request.UploadResponse, param1: com.zendesk.belvedere.BelvedereResult): void;
            public allImagesUploaded(param0: java.util.Map): void;
            public imageUploadError(param0: com.zendesk.service.ErrorResponse, param1: com.zendesk.belvedere.BelvedereResult): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace attachment {
        export class ZendeskBelvedereProvider {
          public static INSTANCE: com.zendesk.sdk.attachment.ZendeskBelvedereProvider;
          public getBelvedere(param0: android.content.Context): com.zendesk.belvedere.Belvedere;
          public static values(): native.Array<com.zendesk.sdk.attachment.ZendeskBelvedereProvider>;
          public static valueOf(param0: string): com.zendesk.sdk.attachment.ZendeskBelvedereProvider;
        }
        export namespace ZendeskBelvedereProvider {
          export class BelvedereZendeskLogger {
            public e(param0: string, param1: string, param2: java.lang.Throwable): void;
            public w(param0: string, param1: string): void;
            public e(param0: string, param1: string): void;
            public setLoggable(param0: boolean): void;
            public d(param0: string, param1: string): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace deeplinking {
        export class ZendeskDeepLinking {
          public static INSTANCE: com.zendesk.sdk.deeplinking.ZendeskDeepLinking;
          public static valueOf(param0: string): com.zendesk.sdk.deeplinking.ZendeskDeepLinking;
          public getArticleIntent(param0: android.content.Context, param1: com.zendesk.sdk.model.helpcenter.SimpleArticle, param2: java.util.ArrayList, param3: android.content.Intent): android.content.Intent;
          public refreshComments(param0: string): boolean;
          public getArticleIntent(param0: android.content.Context, param1: com.zendesk.sdk.model.helpcenter.Article, param2: java.util.ArrayList, param3: android.content.Intent): android.content.Intent;
          public getArticleIntent(param0: android.content.Context, param1: com.zendesk.sdk.model.helpcenter.SimpleArticle, param2: java.util.ArrayList, param3: android.content.Intent, param4: string, param5: string, param6: string): android.content.Intent;
          public static values(): native.Array<com.zendesk.sdk.deeplinking.ZendeskDeepLinking>;
          public getRequestIntent(param0: android.content.Context, param1: string, param2: string, param3: java.util.ArrayList, param4: android.content.Intent): android.content.Intent;
          public registerAction(param0: com.zendesk.sdk.deeplinking.actions.ActionHandler, param1: native.Array<com.zendesk.sdk.deeplinking.actions.Action>): void;
          public unregisterAction(param0: com.zendesk.sdk.deeplinking.actions.ActionHandler): void;
          public getRequestIntent(param0: android.content.Context, param1: string, param2: string, param3: java.util.ArrayList, param4: android.content.Intent, param5: string, param6: string, param7: string): android.content.Intent;
          public getArticleIntent(param0: android.content.Context, param1: com.zendesk.sdk.model.helpcenter.Article, param2: java.util.ArrayList, param3: android.content.Intent, param4: string, param5: string, param6: string): android.content.Intent;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace deeplinking {
        export class ZendeskDeepLinkingBroadcastReceiver {
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
      export namespace deeplinking {
        export class ZendeskDeepLinkingParser {
          public constructor();
          public parse(param0: string, param1: android.content.Context): android.content.Intent;
        }
        export namespace ZendeskDeepLinkingParser {
          export class DefaultParser {
            public parse(param0: string, param1: android.content.Context): android.content.Intent;
          }
          export class HelpCenterParser {
            public parse(param0: string, param1: android.content.Context): android.content.Intent;
          }
          export class HttpParser {
            public parse(param0: string, param1: android.content.Context): android.content.Intent;
          }
          export class MailParser {
            public parse(param0: string, param1: android.content.Context): android.content.Intent;
          }
          export class ZendeskDeepLinkParserModule {
            /**
             * Constructs a new instance of the com.zendesk.sdk.deeplinking.ZendeskDeepLinkingParser$ZendeskDeepLinkParserModule interface with the provided implementation.
             */
            public constructor(implementation: {
              parse(param0: string, param1: android.content.Context): android.content.Intent;
            });
            public parse(param0: string, param1: android.content.Context): android.content.Intent;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace deeplinking {
        export namespace actions {
          export abstract class Action {
            public constructor(param0: com.zendesk.sdk.deeplinking.actions.ActionType, param1: com.zendesk.sdk.deeplinking.actions.ActionData);
            public execute(param0: com.zendesk.sdk.deeplinking.actions.ActionHandler, param1: com.zendesk.sdk.deeplinking.actions.ActionData): void;
            public canHandleData(param0: com.zendesk.sdk.deeplinking.actions.ActionData): boolean;
            public getActionData(): com.zendesk.sdk.deeplinking.actions.ActionData;
            public getActionType(): com.zendesk.sdk.deeplinking.actions.ActionType;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace deeplinking {
        export namespace actions {
          export class ActionData {
            /**
             * Constructs a new instance of the com.zendesk.sdk.deeplinking.actions.ActionData interface with the provided implementation.
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
      export namespace deeplinking {
        export namespace actions {
          export class ActionHandler {
            /**
             * Constructs a new instance of the com.zendesk.sdk.deeplinking.actions.ActionHandler interface with the provided implementation.
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
      export namespace deeplinking {
        export namespace actions {
          export class ActionRefreshComments extends com.zendesk.sdk.deeplinking.actions.Action {
            public constructor(param0: com.zendesk.sdk.deeplinking.actions.ActionType, param1: com.zendesk.sdk.deeplinking.actions.ActionData);
            public execute(param0: com.zendesk.sdk.deeplinking.actions.ActionHandler, param1: com.zendesk.sdk.deeplinking.actions.ActionData): void;
            public canHandleData(param0: com.zendesk.sdk.deeplinking.actions.ActionRefreshComments.ActionRefreshCommentsData): boolean;
            public constructor(param0: string);
            public canHandleData(param0: com.zendesk.sdk.deeplinking.actions.ActionData): boolean;
            public execute(param0: com.zendesk.sdk.deeplinking.actions.ActionRefreshComments.ActionRefreshCommentsListener, param1: com.zendesk.sdk.deeplinking.actions.ActionRefreshComments.ActionRefreshCommentsData): void;
          }
          export namespace ActionRefreshComments {
            export class ActionRefreshCommentsData {
              public getRequestId(): string;
              public constructor(param0: string);
            }
            export class ActionRefreshCommentsListener {
              /**
               * Constructs a new instance of the com.zendesk.sdk.deeplinking.actions.ActionRefreshComments$ActionRefreshCommentsListener interface with the provided implementation.
               */
              public constructor(implementation: {
                refreshComments(param0: com.zendesk.sdk.deeplinking.actions.ActionRefreshComments.ActionRefreshCommentsData): void;
              });
              public refreshComments(param0: com.zendesk.sdk.deeplinking.actions.ActionRefreshComments.ActionRefreshCommentsData): void;
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
      export namespace deeplinking {
        export namespace actions {
          export class ActionType {
            public static RELOAD_COMMENT_STREAM: com.zendesk.sdk.deeplinking.actions.ActionType;
            public static values(): native.Array<com.zendesk.sdk.deeplinking.actions.ActionType>;
            public static valueOf(param0: string): com.zendesk.sdk.deeplinking.actions.ActionType;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace deeplinking {
        export namespace targets {
          export class ArticleConfiguration extends com.zendesk.sdk.deeplinking.targets.TargetConfiguration {
            public constructor(param0: com.zendesk.sdk.model.helpcenter.SimpleArticle, param1: java.util.ArrayList, param2: android.content.Intent);
            public getArticle(): com.zendesk.sdk.model.helpcenter.Article;
            public constructor(param0: com.zendesk.sdk.model.helpcenter.Article, param1: java.util.ArrayList, param2: android.content.Intent);
            public getSimpleArticle(): com.zendesk.sdk.model.helpcenter.SimpleArticle;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace deeplinking {
        export namespace targets {
          export class DeepLinkType {
            public static Request: com.zendesk.sdk.deeplinking.targets.DeepLinkType;
            public static Article: com.zendesk.sdk.deeplinking.targets.DeepLinkType;
            public static Unknown: com.zendesk.sdk.deeplinking.targets.DeepLinkType;
            public static values(): native.Array<com.zendesk.sdk.deeplinking.targets.DeepLinkType>;
            public static valueOf(param0: string): com.zendesk.sdk.deeplinking.targets.DeepLinkType;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace deeplinking {
        export namespace targets {
          export abstract class DeepLinkingTarget {
            public static getDeepLinkType(param0: android.content.Intent): com.zendesk.sdk.deeplinking.targets.DeepLinkType;
            public static getTaskStackBuilder(param0: android.content.Context, param1: java.util.List): android.support.v4.app.TaskStackBuilder;
            public constructor();
            public execute(param0: android.content.Context, param1: android.content.Intent): boolean;
            public getIntent(param0: android.content.Context, param1: com.zendesk.sdk.deeplinking.targets.TargetConfiguration): android.content.Intent;
            public getIntent(param0: android.content.Context, param1: com.zendesk.sdk.deeplinking.targets.TargetConfiguration, param2: string, param3: string, param4: string): android.content.Intent;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace deeplinking {
        export namespace targets {
          export class DeepLinkingTargetArticle extends com.zendesk.sdk.deeplinking.targets.DeepLinkingTarget {
            public static EXTRA_ARTICLE: string;
            public static EXTRA_ARTICLE_SIMPLE: string;
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
      export namespace deeplinking {
        export namespace targets {
          export class DeepLinkingTargetRequest extends com.zendesk.sdk.deeplinking.targets.DeepLinkingTarget {
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
      export namespace deeplinking {
        export namespace targets {
          export class RequestConfiguration extends com.zendesk.sdk.deeplinking.targets.TargetConfiguration {
            public constructor(param0: string, param1: string, param2: java.util.ArrayList, param3: android.content.Intent);
            public getSubject(): string;
            public getRequestId(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace deeplinking {
        export namespace targets {
          export class TargetConfiguration {
            public getFallbackActivity(): android.content.Intent;
            public getDeepLinkType(): com.zendesk.sdk.deeplinking.targets.DeepLinkType;
            public getBackStackActivities(): java.util.ArrayList;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace feedback {
        export abstract class BaseZendeskFeedbackConfiguration {
          public getRequestSubject(): string;
          public getAdditionalInfo(): string;
          public constructor();
          public getTags(): java.util.List;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace feedback {
        export class FeedbackConnector {
          /**
           * Constructs a new instance of the com.zendesk.sdk.feedback.FeedbackConnector interface with the provided implementation.
           */
          public constructor(implementation: {
            sendFeedback(param0: string, param1: java.util.List, param2: com.zendesk.service.ZendeskCallback): void;
            isValid(): boolean;
          });
          public sendFeedback(param0: string, param1: java.util.List, param2: com.zendesk.service.ZendeskCallback): void;
          public isValid(): boolean;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace feedback {
        export class WrappedZendeskFeedbackConfiguration {
          public getRequestSubject(): string;
          public getAdditionalInfo(): string;
          public getTags(): java.util.List;
          public constructor(param0: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration);
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace feedback {
        export class ZendeskFeedbackConfiguration {
          /**
           * Constructs a new instance of the com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration interface with the provided implementation.
           */
          public constructor(implementation: {
            getTags(): java.util.List;
            getAdditionalInfo(): string;
            getRequestSubject(): string;
          });
          public getRequestSubject(): string;
          public getAdditionalInfo(): string;
          public getTags(): java.util.List;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace feedback {
        export class ZendeskFeedbackConnector {
          public static defaultConnector(param0: android.content.Context, param1: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration, param2: java.util.List): com.zendesk.sdk.feedback.ZendeskFeedbackConnector;
          public constructor(param0: android.content.Context, param1: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration, param2: java.util.List, param3: java.util.List, param4: java.lang.Long, param5: com.zendesk.sdk.network.RequestProvider, param6: com.zendesk.sdk.storage.IdentityStorage);
          public sendFeedback(param0: string, param1: java.util.List, param2: com.zendesk.service.ZendeskCallback): void;
          public isValid(): boolean;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace feedback {
        export namespace ui {
          export class AttachmentContainerHost {
            public setAttachmentsDeletable(param0: boolean): void;
            public setAttachmentState(param0: java.io.File, param1: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState): void;
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
            public removeAttachment(param0: java.io.File): void;
            public reset(): void;
            public setAttachmentUploaded(param0: java.io.File): void;
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
            public setState(param0: com.zendesk.sdk.attachment.ImageUploadHelper): void;
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
            public addAttachment(param0: java.io.File): void;
            public removeAttachmentAndNotify(param0: java.io.File): void;
            public setAttachmentContainerListener(param0: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentContainerListener): void;
            public constructor(param0: android.content.Context);
            public setParent(param0: android.view.View): void;
          }
          export namespace AttachmentContainerHost {
            export class AttachmentContainer {
              public getAttachmentState(): com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState;
              public getFile(): java.io.File;
              public constructor(param0: com.zendesk.sdk.feedback.ui.AttachmentContainerHost, param1: android.content.Context, param2: java.io.File, param3: com.zendesk.sdk.feedback.ui.AttachmentContainerHost, param4: number);
              public setState(param0: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState): void;
            }
            export class AttachmentContainerListener {
              /**
               * Constructs a new instance of the com.zendesk.sdk.feedback.ui.AttachmentContainerHost$AttachmentContainerListener interface with the provided implementation.
               */
              public constructor(implementation: {
                attachmentRemoved(param0: java.io.File): void;
              });
              public attachmentRemoved(param0: java.io.File): void;
            }
            export class AttachmentState {
              public static UPLOADING: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState;
              public static UPLOADED: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState;
              public static DISABLE: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState;
              public static values(): native.Array<com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState>;
              public static valueOf(param0: string): com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState;
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
      export namespace feedback {
        export namespace ui {
          export class ContactZendeskActivity extends com.zendesk.sdk.ui.NetworkAwareActionbarActivity {
            public static RESULT_ERROR_REASON: string;
            public static RESULT_ERROR_STATUS_CODE: string;
            public static RESULT_ERROR_IS_NETWORK_ERROR: string;
            public static EXTRA_CONTACT_CONFIGURATION: string;
            public static startActivity(param0: android.content.Context, param1: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration): void;
            public onOptionsItemSelected(param0: android.view.MenuItem): boolean;
            public constructor();
            public onNetworkAvailable(): void;
            public onNetworkUnavailable(): void;
            public onDestroy(): void;
            public onCreate(param0: android.os.Bundle): void;
          }
          export namespace ContactZendeskActivity {
            export class DefaultContactConfiguration extends com.zendesk.sdk.feedback.BaseZendeskFeedbackConfiguration {
              public getRequestSubject(): string;
              public getAdditionalInfo(): string;
              public getTags(): java.util.List;
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
      export namespace feedback {
        export namespace ui {
          export class ContactZendeskFragment {
            public static EXTRA_CONFIGURATION: string;
            public static EXTRA_CONFIGURATION_TAGS: string;
            public static EXTRA_CONFIGURATION_ADDITIONAL_INFO: string;
            public static EXTRA_CONFIGURATION_REQUEST_SUBJECT: string;
            public onAttach(param0: android.content.Context): void;
            public onOptionsItemSelected(param0: android.view.MenuItem): boolean;
            public deleteUnusedAttachmentsBeforeShutdown(): void;
            public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
            public static newInstance(param0: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration): com.zendesk.sdk.feedback.ui.ContactZendeskFragment;
            public onPrepareOptionsMenu(param0: android.view.Menu): void;
            public onDetach(): void;
            public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
            public constructor();
            public setFeedbackListener(param0: com.zendesk.sdk.network.SubmissionListener): void;
            public onDestroy(): void;
            public onCreateOptionsMenu(param0: android.view.Menu, param1: android.view.MenuInflater): void;
            public onCreate(param0: android.os.Bundle): void;
          }
          export namespace ContactZendeskFragment {
            export class ContactZendeskFeedbackConfiguration {
              public getRequestSubject(): string;
              public getAdditionalInfo(): string;
              public getTags(): java.util.List;
              public constructor(param0: com.zendesk.sdk.feedback.ui.ContactZendeskFragment, param1: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration);
            }
            export class RequestCallback {
              public onSuccess(param0: com.zendesk.sdk.model.request.CreateRequest): void;
              public onError(param0: com.zendesk.service.ErrorResponse): void;
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
        export class AppVersion {
          public getAppVersionCode(): number;
          public getAppVersionName(): string;
          public constructor(param0: android.content.Context);
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class RequestLoadingListener {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.RequestLoadingListener interface with the provided implementation.
           */
          public constructor(implementation: {
            onLoadStarted(): void;
            onLoadFinished(param0: number): void;
            onLoadError(param0: com.zendesk.service.ErrorResponse): void;
          });
          public onLoadFinished(param0: number): void;
          public onLoadStarted(): void;
          public onLoadError(param0: com.zendesk.service.ErrorResponse): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class SubmissionListener {
          /**
           * Constructs a new instance of the com.zendesk.sdk.network.SubmissionListener interface with the provided implementation.
           */
          public constructor(implementation: {
            onSubmissionStarted(): void;
            onSubmissionCompleted(): void;
            onSubmissionCancel(): void;
            onSubmissionError(param0: com.zendesk.service.ErrorResponse): void;
          });
          public onSubmissionCancel(): void;
          public onSubmissionError(param0: com.zendesk.service.ErrorResponse): void;
          public onSubmissionCompleted(): void;
          public onSubmissionStarted(): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace network {
        export class SubmissionListenerAdapter {
          public constructor();
          public onSubmissionCancel(): void;
          public onSubmissionError(param0: com.zendesk.service.ErrorResponse): void;
          public onSubmissionCompleted(): void;
          public onSubmissionStarted(): void;
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
          export class CachingAuthorizingOkHttp3Downloader {
            public shutdown(): void;
            public load(param0: android.net.Uri, param1: number): com.squareup.picasso.Downloader.Response;
          }
          export namespace CachingAuthorizingOkHttp3Downloader {
            export class AuthorizationInterceptor {
              public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
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
          export class ZendeskPicassoProvider {
            public static getInstance(param0: android.content.Context): com.squareup.picasso.Picasso;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace requests {
        export class CommentWithUser {
          public static build(param0: com.zendesk.sdk.model.request.CommentResponse, param1: java.util.List): com.zendesk.sdk.requests.CommentWithUser;
          public static build(param0: com.zendesk.sdk.model.request.CommentResponse, param1: com.zendesk.sdk.model.request.User): com.zendesk.sdk.requests.CommentWithUser;
          public getAuthor(): com.zendesk.sdk.model.request.User;
          public getComment(): com.zendesk.sdk.model.request.CommentResponse;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace requests {
        export class ImageLoader {
          public static INSTANCE: com.zendesk.sdk.requests.ImageLoader;
          public static valueOf(param0: string): com.zendesk.sdk.requests.ImageLoader;
          public static values(): native.Array<com.zendesk.sdk.requests.ImageLoader>;
        }
        export namespace ImageLoader {
          export class DownloadImageToExternalStorage {
            public constructor(param0: com.zendesk.sdk.requests.ImageLoader, param1: com.zendesk.service.ZendeskCallback, param2: com.zendesk.belvedere.Belvedere);
            public onPostExecute(param0: com.zendesk.sdk.requests.ImageLoader.Result): void;
            public doInBackground(param0: native.Array<com.zendesk.sdk.requests.ImageLoader.TaskData>): com.zendesk.sdk.requests.ImageLoader.Result;
          }
          export class Result {
            public getResult(): java.lang.Object;
          }
          export class TaskData {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace requests {
        export class RequestActivity extends com.zendesk.sdk.ui.NetworkAwareActionbarActivity {
          public static FRAGMENT_TAG: string;
          public constructor();
          public onCreateOptionsMenu(param0: android.view.Menu): boolean;
          public onOptionsItemSelected(param0: android.view.MenuItem): boolean;
          public onCreate(param0: android.os.Bundle): void;
          public onNetworkUnavailable(): void;
          public static startActivity(param0: android.content.Context, param1: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration): void;
          public onNetworkAvailable(): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace requests {
        export class RequestCommentsListAdapter {
          public getViewTypeCount(): number;
          public getItemViewType(param0: number): number;
          public constructor(param0: android.content.Context, param1: number, param2: java.util.List, param3: com.zendesk.sdk.requests.RequestCommentsListAdapter.AttachmentOnClickListener);
          public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
        }
        export namespace RequestCommentsListAdapter {
          export class AgentRowIdHolder {
            public getAvatarId(): number;
            public getResponseId(): number;
            public getAttachmentsContainerId(): number;
            public getDateId(): number;
            public getContainerId(): number;
            public getNameId(): number;
          }
          export class AttachmentOnClickListener {
            /**
             * Constructs a new instance of the com.zendesk.sdk.requests.RequestCommentsListAdapter$AttachmentOnClickListener interface with the provided implementation.
             */
            public constructor(implementation: {
              onAttachmentClicked(param0: android.view.View, param1: com.zendesk.sdk.model.request.Attachment): void;
            });
            public onAttachmentClicked(param0: android.view.View, param1: com.zendesk.sdk.model.request.Attachment): void;
          }
          export class CommentRow {
            public bind(param0: com.zendesk.sdk.requests.CommentWithUser): void;
            public constructor(param0: android.content.Context, param1: com.zendesk.sdk.requests.RequestCommentsListAdapter.IdHolder, param2: com.zendesk.sdk.requests.RequestCommentsListAdapter.AttachmentOnClickListener);
            public getView(): android.view.View;
            public bind(param0: java.lang.Object): void;
          }
          export class CommentRowAttachmentHelper {
            public static heightMap: java.util.Map;
          }
          export class EndUserRowIdHolder {
            public getAvatarId(): number;
            public getResponseId(): number;
            public getAttachmentsContainerId(): number;
            public getDateId(): number;
            public getContainerId(): number;
            public getNameId(): number;
          }
          export class IdHolder {
            /**
             * Constructs a new instance of the com.zendesk.sdk.requests.RequestCommentsListAdapter$IdHolder interface with the provided implementation.
             */
            public constructor(implementation: {
              getContainerId(): number;
              getAvatarId(): number;
              getNameId(): number;
              getResponseId(): number;
              getDateId(): number;
              getAttachmentsContainerId(): number;
            });
            public getAvatarId(): number;
            public getResponseId(): number;
            public getAttachmentsContainerId(): number;
            public getDateId(): number;
            public getContainerId(): number;
            public getNameId(): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace requests {
        export class RequestListFragment {
          public onAttach(param0: android.content.Context): void;
          public constructor();
          public onResume(): void;
          public setRequestLoadingListener(param0: com.zendesk.sdk.network.RequestLoadingListener): void;
          public onPause(): void;
          public onNetworkUnavailable(): void;
          public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
          public onDetach(): void;
          public refreshRequests(): void;
          public onNetworkAvailable(): void;
        }
        export namespace RequestListFragment {
          export class RequestsCallback {
            public onError(param0: com.zendesk.service.ErrorResponse): void;
            public onSuccess(param0: java.util.List): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace requests {
        export class RequestsAdapter {
          public constructor(param0: android.content.Context, param1: java.util.List);
          public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
        }
        export namespace RequestsAdapter {
          export class RequestRow {
            public setUnreadIndicator(param0: boolean): void;
            public bind(param0: com.zendesk.sdk.model.request.Request): void;
            public constructor(param0: android.content.Context);
            public getView(): android.view.View;
            public bind(param0: java.lang.Object): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace requests {
        export class ViewRequestActivity extends com.zendesk.sdk.ui.NetworkAwareActionbarActivity {
          public static EXTRA_REQUEST_ID: string;
          public static EXTRA_SUBJECT: string;
          public constructor();
          public onOptionsItemSelected(param0: android.view.MenuItem): boolean;
          public onCreate(param0: android.os.Bundle): void;
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
      export namespace requests {
        export class ViewRequestFragment {
          public static EXTRA_REQUEST_ID: string;
          public static EXTRA_REQUEST_SUBJECT: string;
          public onAttach(param0: android.content.Context): void;
          public static newInstance(param0: string, param1: string, param2: com.zendesk.sdk.network.SubmissionListener): com.zendesk.sdk.requests.ViewRequestFragment;
          public static newInstance(param0: string): com.zendesk.sdk.requests.ViewRequestFragment;
          public onCreate(param0: android.os.Bundle): void;
          public onDetach(): void;
          public static newInstance(param0: string, param1: string): com.zendesk.sdk.requests.ViewRequestFragment;
          public constructor();
          public onResume(): void;
          public onDestroy(): void;
          public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
          public onPause(): void;
          public setSubmissionListener(param0: com.zendesk.sdk.network.SubmissionListener): void;
          public refreshComments(param0: com.zendesk.sdk.deeplinking.actions.ActionRefreshComments.ActionRefreshCommentsData): void;
          public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
        }
        export namespace ViewRequestFragment {
          export class Action {
            public static SEND_COMMENT: com.zendesk.sdk.requests.ViewRequestFragment.Action;
            public static LOAD_COMMENTS: com.zendesk.sdk.requests.ViewRequestFragment.Action;
            public static LOAD_IMAGE: com.zendesk.sdk.requests.ViewRequestFragment.Action;
            public static values(): native.Array<com.zendesk.sdk.requests.ViewRequestFragment.Action>;
            public static valueOf(param0: string): com.zendesk.sdk.requests.ViewRequestFragment.Action;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace support {
        export class ArticleVotingView {
          public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
          public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
          public constructor(param0: android.content.Context);
          public bindTo(param0: java.lang.Long, param1: com.zendesk.sdk.storage.ArticleVoteStorage): void;
        }
        export namespace ArticleVotingView {
          export class VoteState {
            public static UPVOTED: com.zendesk.sdk.support.ArticleVotingView.VoteState;
            public static DOWNVOTED: com.zendesk.sdk.support.ArticleVotingView.VoteState;
            public static NONE: com.zendesk.sdk.support.ArticleVotingView.VoteState;
            public static valueOf(param0: string): com.zendesk.sdk.support.ArticleVotingView.VoteState;
            public static values(): native.Array<com.zendesk.sdk.support.ArticleVotingView.VoteState>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace support {
        export class ContactUsButtonVisibility {
          public static OFF: com.zendesk.sdk.support.ContactUsButtonVisibility;
          public static ARTICLE_LIST_ONLY: com.zendesk.sdk.support.ContactUsButtonVisibility;
          public static ARTICLE_LIST_AND_ARTICLE: com.zendesk.sdk.support.ContactUsButtonVisibility;
          public static values(): native.Array<com.zendesk.sdk.support.ContactUsButtonVisibility>;
          public static valueOf(param0: string): com.zendesk.sdk.support.ContactUsButtonVisibility;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace support {
        export class SupportActivity {
          public showSearchResults(param0: java.util.List, param1: string): void;
          public exitActivity(): void;
          public showContactUsButton(): void;
          public dismissError(): void;
          public showRequestList(): void;
          public showHelp(param0: com.zendesk.sdk.support.SupportUiConfig): void;
          public showErrorWithRetry(param0: com.zendesk.sdk.support.SupportMvp.ErrorType, param1: com.zendesk.sdk.network.RetryAction): void;
          public showLoadingState(): void;
          public isShowingHelp(): boolean;
          public onOptionsItemSelected(param0: android.view.MenuItem): boolean;
          public onCreate(param0: android.os.Bundle): void;
          public clearSearchResults(): void;
          public showError(param0: number): void;
          public onSaveInstanceState(param0: android.os.Bundle): void;
          public showContactZendesk(): void;
          public constructor();
          public onResume(): void;
          public onCreateOptionsMenu(param0: android.view.Menu): boolean;
          public hideLoadingState(): void;
          public onPrepareOptionsMenu(param0: android.view.Menu): boolean;
          public getContext(): android.content.Context;
          public onPause(): void;
        }
        export namespace SupportActivity {
          export class Builder {
            public withContactConfiguration(param0: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration): com.zendesk.sdk.support.SupportActivity.Builder;
            public withLabelNames(param0: native.Array<string>): com.zendesk.sdk.support.SupportActivity.Builder;
            public showConversationsMenuButton(param0: boolean): com.zendesk.sdk.support.SupportActivity.Builder;
            public show(param0: android.content.Context): void;
            public withArticlesForSectionIds(param0: native.Array<number>): com.zendesk.sdk.support.SupportActivity.Builder;
            public constructor();
            public withArticlesForCategoryIds(param0: native.Array<number>): com.zendesk.sdk.support.SupportActivity.Builder;
            public withArticleVoting(param0: boolean): com.zendesk.sdk.support.SupportActivity.Builder;
            public withContactUsButtonVisibility(param0: com.zendesk.sdk.support.ContactUsButtonVisibility): com.zendesk.sdk.support.SupportActivity.Builder;
            public withCategoriesCollapsed(param0: boolean): com.zendesk.sdk.support.SupportActivity.Builder;
            public showContactUsButton(param0: boolean): com.zendesk.sdk.support.SupportActivity.Builder;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace support {
        export class SupportModel {
          public getSettings(param0: com.zendesk.service.ZendeskCallback): void;
          public search(param0: java.util.List, param1: java.util.List, param2: string, param3: native.Array<string>, param4: com.zendesk.service.ZendeskCallback): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace support {
        export class SupportMvp {
          /**
           * Constructs a new instance of the com.zendesk.sdk.support.SupportMvp interface with the provided implementation.
           */
          public constructor(implementation: {
          });
        }
        export namespace SupportMvp {
          export class ErrorType {
            public static CATEGORY_LOAD: com.zendesk.sdk.support.SupportMvp.ErrorType;
            public static SECTION_LOAD: com.zendesk.sdk.support.SupportMvp.ErrorType;
            public static ARTICLES_LOAD: com.zendesk.sdk.support.SupportMvp.ErrorType;
            public static values(): native.Array<com.zendesk.sdk.support.SupportMvp.ErrorType>;
            public static valueOf(param0: string): com.zendesk.sdk.support.SupportMvp.ErrorType;
          }
          export class Model {
            /**
             * Constructs a new instance of the com.zendesk.sdk.support.SupportMvp$Model interface with the provided implementation.
             */
            public constructor(implementation: {
              search(param0: java.util.List, param1: java.util.List, param2: string, param3: native.Array<string>, param4: com.zendesk.service.ZendeskCallback): void;
              getSettings(param0: com.zendesk.service.ZendeskCallback): void;
            });
            public getSettings(param0: com.zendesk.service.ZendeskCallback): void;
            public search(param0: java.util.List, param1: java.util.List, param2: string, param3: native.Array<string>, param4: com.zendesk.service.ZendeskCallback): void;
          }
          export class Presenter {
            /**
             * Constructs a new instance of the com.zendesk.sdk.support.SupportMvp$Presenter interface with the provided implementation.
             */
            public constructor(implementation: {
              onResume(param0: com.zendesk.sdk.support.SupportMvp.View): void;
              onPause(): void;
              onSearchSubmit(param0: string): void;
              onLoad(): void;
              onErrorWithRetry(param0: com.zendesk.sdk.support.SupportMvp.ErrorType, param1: com.zendesk.sdk.network.RetryAction): void;
              initWithBundle(param0: android.os.Bundle): void;
              shouldShowConversationsMenuItem(): boolean;
              shouldShowSearchMenuItem(): boolean;
            });
            public onSearchSubmit(param0: string): void;
            public shouldShowSearchMenuItem(): boolean;
            public onResume(param0: com.zendesk.sdk.support.SupportMvp.View): void;
            public onLoad(): void;
            public onErrorWithRetry(param0: com.zendesk.sdk.support.SupportMvp.ErrorType, param1: com.zendesk.sdk.network.RetryAction): void;
            public initWithBundle(param0: android.os.Bundle): void;
            public onPause(): void;
            public shouldShowConversationsMenuItem(): boolean;
          }
          export class View {
            /**
             * Constructs a new instance of the com.zendesk.sdk.support.SupportMvp$View interface with the provided implementation.
             */
            public constructor(implementation: {
              showContactUsButton(): void;
              showHelp(param0: com.zendesk.sdk.support.SupportUiConfig): void;
              showSearchResults(param0: java.util.List, param1: string): void;
              clearSearchResults(): void;
              showLoadingState(): void;
              hideLoadingState(): void;
              showRequestList(): void;
              showContactZendesk(): void;
              showErrorWithRetry(param0: com.zendesk.sdk.support.SupportMvp.ErrorType, param1: com.zendesk.sdk.network.RetryAction): void;
              showError(param0: number): void;
              dismissError(): void;
              getContext(): android.content.Context;
              isShowingHelp(): boolean;
              exitActivity(): void;
            });
            public clearSearchResults(): void;
            public exitActivity(): void;
            public showLoadingState(): void;
            public hideLoadingState(): void;
            public showErrorWithRetry(param0: com.zendesk.sdk.support.SupportMvp.ErrorType, param1: com.zendesk.sdk.network.RetryAction): void;
            public dismissError(): void;
            public getContext(): android.content.Context;
            public isShowingHelp(): boolean;
            public showError(param0: number): void;
            public showContactUsButton(): void;
            public showContactZendesk(): void;
            public showSearchResults(param0: java.util.List, param1: string): void;
            public showHelp(param0: com.zendesk.sdk.support.SupportUiConfig): void;
            public showRequestList(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace support {
        export class SupportPresenter {
          public onErrorWithRetry(param0: com.zendesk.sdk.support.SupportMvp.ErrorType, param1: com.zendesk.sdk.network.RetryAction): void;
          public onResume(param0: com.zendesk.sdk.support.SupportMvp.View): void;
          public shouldShowConversationsMenuItem(): boolean;
          public onSearchSubmit(param0: string): void;
          public onLoad(): void;
          public shouldShowSearchMenuItem(): boolean;
          public initWithBundle(param0: android.os.Bundle): void;
          public onPause(): void;
          public onNetworkUnavailable(): void;
          public onNetworkAvailable(): void;
        }
        export namespace SupportPresenter {
          export class ViewSafeRetryZendeskCallback {
            public onError(param0: com.zendesk.service.ErrorResponse): void;
            public onSuccess(param0: java.util.List): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace support {
        export class SupportUiConfig {
          public static CREATOR: android.os.Parcelable.Creator;
          public isAddListPaddingBottom(): boolean;
          public getCategoryIds(): java.util.List;
          public getSectionIds(): java.util.List;
          public isShowConversationsMenuButton(): boolean;
          public isCollapseCategories(): boolean;
          public isArticleVotingEnabled(): boolean;
          public getLabelNames(): native.Array<string>;
          public getContactUsButtonVisibility(): com.zendesk.sdk.support.ContactUsButtonVisibility;
          public writeToParcel(param0: android.os.Parcel, param1: number): void;
          public describeContents(): number;
          public getFeedbackConfiguration(): com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration;
          public constructor(param0: android.os.Parcel);
        }
        export namespace SupportUiConfig {
          export class Builder {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace support {
        export class ViewArticleActivity extends com.zendesk.sdk.ui.NetworkAwareActionbarActivity {
          public static EXTRA_ARTICLE: string;
          public static EXTRA_SIMPLE_ARTICLE: string;
          public static EXTRA_ARTICLE_VOTING_ENABLED: string;
          public constructor();
          public static startActivity(param0: android.content.Context, param1: com.zendesk.sdk.model.helpcenter.Article): void;
          public onResume(): void;
          public onDestroy(): void;
          public static startActivity(param0: android.content.Context, param1: com.zendesk.sdk.model.helpcenter.SimpleArticle, param2: boolean, param3: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration, param4: boolean): void;
          public static startActivity(param0: android.content.Context, param1: com.zendesk.sdk.model.helpcenter.Article, param2: boolean, param3: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration, param4: boolean): void;
          public onOptionsItemSelected(param0: android.view.MenuItem): boolean;
          public onCreate(param0: android.os.Bundle): void;
          public onPause(): void;
          public static startActivity(param0: android.content.Context, param1: com.zendesk.sdk.model.helpcenter.SimpleArticle): void;
          public onItemClick(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): void;
          public setLoadingState(param0: com.zendesk.sdk.ui.LoadingState): void;
        }
        export namespace ViewArticleActivity {
          export class ArticleAttachmentAdapter {
            public constructor(param0: android.content.Context, param1: java.util.List);
            public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
          }
          export class ArticleAttachmentRow {
            public constructor(param0: android.content.Context);
            public getView(): android.view.View;
            public bind(param0: java.lang.Object): void;
            public bind(param0: com.zendesk.sdk.model.helpcenter.Attachment): void;
          }
          export class AttachmentRequestCallback {
            public onError(param0: com.zendesk.service.ErrorResponse): void;
            public onSuccess(param0: java.util.List): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace support {
        export namespace help {
          export class HelpAdapterPresenter {
            public onSeeAllClick(param0: com.zendesk.sdk.model.helpcenter.help.SeeAllArticlesItem): void;
            public getItem(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpItem;
            public onAttached(): void;
            public constructor(param0: com.zendesk.sdk.support.help.HelpMvp.View, param1: com.zendesk.sdk.support.help.HelpMvp.Model, param2: com.zendesk.sdk.network.NetworkInfoProvider, param3: com.zendesk.sdk.support.SupportUiConfig);
            public setContentPresenter(param0: com.zendesk.sdk.support.SupportMvp.Presenter): void;
            public onCategoryClick(param0: com.zendesk.sdk.model.helpcenter.help.CategoryItem, param1: number): boolean;
            public getItemCount(): number;
            public getItemViewType(param0: number): number;
            public getItemForBinding(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpItem;
            public onDetached(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace support {
        export namespace help {
          export class HelpModel {
            public getArticlesForSection(param0: com.zendesk.sdk.model.helpcenter.help.SectionItem, param1: native.Array<string>, param2: com.zendesk.service.ZendeskCallback): void;
            public getArticles(param0: java.util.List, param1: java.util.List, param2: native.Array<string>, param3: com.zendesk.service.ZendeskCallback): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace support {
        export namespace help {
          export class HelpMvp {
            /**
             * Constructs a new instance of the com.zendesk.sdk.support.help.HelpMvp interface with the provided implementation.
             */
            public constructor(implementation: {
            });
          }
          export namespace HelpMvp {
            export class Model {
              /**
               * Constructs a new instance of the com.zendesk.sdk.support.help.HelpMvp$Model interface with the provided implementation.
               */
              public constructor(implementation: {
                getArticles(param0: java.util.List, param1: java.util.List, param2: native.Array<string>, param3: com.zendesk.service.ZendeskCallback): void;
                getArticlesForSection(param0: com.zendesk.sdk.model.helpcenter.help.SectionItem, param1: native.Array<string>, param2: com.zendesk.service.ZendeskCallback): void;
              });
              public getArticlesForSection(param0: com.zendesk.sdk.model.helpcenter.help.SectionItem, param1: native.Array<string>, param2: com.zendesk.service.ZendeskCallback): void;
              public getArticles(param0: java.util.List, param1: java.util.List, param2: native.Array<string>, param3: com.zendesk.service.ZendeskCallback): void;
            }
            export class Presenter {
              /**
               * Constructs a new instance of the com.zendesk.sdk.support.help.HelpMvp$Presenter interface with the provided implementation.
               */
              public constructor(implementation: {
                onAttached(): void;
                onDetached(): void;
                setContentPresenter(param0: com.zendesk.sdk.support.SupportMvp.Presenter): void;
                onSeeAllClick(param0: com.zendesk.sdk.model.helpcenter.help.SeeAllArticlesItem): void;
                onCategoryClick(param0: com.zendesk.sdk.model.helpcenter.help.CategoryItem, param1: number): boolean;
                getItem(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpItem;
                getItemCount(): number;
                getItemViewType(param0: number): number;
                getItemForBinding(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpItem;
              });
              public setContentPresenter(param0: com.zendesk.sdk.support.SupportMvp.Presenter): void;
              public getItemCount(): number;
              public getItem(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpItem;
              public onSeeAllClick(param0: com.zendesk.sdk.model.helpcenter.help.SeeAllArticlesItem): void;
              public onAttached(): void;
              public onCategoryClick(param0: com.zendesk.sdk.model.helpcenter.help.CategoryItem, param1: number): boolean;
              public getItemViewType(param0: number): number;
              public onDetached(): void;
              public getItemForBinding(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpItem;
            }
            export class View {
              /**
               * Constructs a new instance of the com.zendesk.sdk.support.help.HelpMvp$View interface with the provided implementation.
               */
              public constructor(implementation: {
                showItems(param0: java.util.List): void;
                addItem(param0: number, param1: com.zendesk.sdk.model.helpcenter.help.HelpItem): void;
                removeItem(param0: number): void;
              });
              public showItems(param0: java.util.List): void;
              public removeItem(param0: number): void;
              public addItem(param0: number, param1: com.zendesk.sdk.model.helpcenter.help.HelpItem): void;
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
      export namespace support {
        export namespace help {
          export class HelpRecyclerViewAdapter {
            public showItems(param0: java.util.List): void;
            public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder;
            public onBindViewHolder(param0: com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder, param1: number): void;
            public addItem(param0: number, param1: com.zendesk.sdk.model.helpcenter.help.HelpItem): void;
            public getItemCount(): number;
            public getItemViewType(param0: number): number;
            public constructor(param0: com.zendesk.sdk.support.SupportUiConfig);
            public onAttachedToRecyclerView(param0: android.support.v7.widget.RecyclerView): void;
            public onDetachedFromRecyclerView(param0: android.support.v7.widget.RecyclerView): void;
            public removeItem(param0: number): void;
          }
          export namespace HelpRecyclerViewAdapter {
            export class ArticleViewHolder extends com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder {
              public bindTo(param0: com.zendesk.sdk.model.helpcenter.help.HelpItem, param1: number): void;
            }
            export class CategoryViewHolder extends com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder {
              public bindTo(param0: com.zendesk.sdk.model.helpcenter.help.HelpItem, param1: number): void;
              public isExpanded(): boolean;
            }
            export class ExtraPaddingViewHolder extends com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder {
              public bindTo(param0: com.zendesk.sdk.model.helpcenter.help.HelpItem, param1: number): void;
            }
            export abstract class HelpViewHolder {
              public bindTo(param0: com.zendesk.sdk.model.helpcenter.help.HelpItem, param1: number): void;
            }
            export class LoadingViewHolder extends com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder {
              public bindTo(param0: com.zendesk.sdk.model.helpcenter.help.HelpItem, param1: number): void;
            }
            export class NoResultsViewHolder extends com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder {
              public bindTo(param0: com.zendesk.sdk.model.helpcenter.help.HelpItem, param1: number): void;
            }
            export class SectionViewHolder extends com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder {
              public bindTo(param0: com.zendesk.sdk.model.helpcenter.help.HelpItem, param1: number): void;
            }
            export class SeeAllViewHolder extends com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder {
              public bindTo(param0: com.zendesk.sdk.model.helpcenter.help.HelpItem, param1: number): void;
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
      export namespace support {
        export namespace help {
          export class HelpSearchFragment {
            public clearResults(): void;
            public updateResults(param0: java.util.List, param1: string): void;
            public constructor();
            public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
            public onCreate(param0: android.os.Bundle): void;
            public static newInstance(param0: boolean, param1: com.zendesk.sdk.support.ContactUsButtonVisibility, param2: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration, param3: boolean): com.zendesk.sdk.support.help.HelpSearchFragment;
            public static newInstance(param0: boolean): com.zendesk.sdk.support.help.HelpSearchFragment;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace support {
        export namespace help {
          export class HelpSearchRecyclerViewAdapter {
            public onBindViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
            public getItemCount(): number;
            public getItemViewType(param0: number): number;
            public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): android.support.v7.widget.RecyclerView.ViewHolder;
          }
          export namespace HelpSearchRecyclerViewAdapter {
            export class HelpSearchViewHolder {
            }
            export class NoResultsViewHolder {
            }
            export class PaddingViewHolder {
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
      export namespace support {
        export namespace help {
          export class SeparatorDecoration {
            public onDrawOver(param0: android.graphics.Canvas, param1: android.support.v7.widget.RecyclerView, param2: android.support.v7.widget.RecyclerView.State): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace support {
        export namespace help {
          export class SupportHelpFragment {
            public static LOG_TAG: string;
            public constructor();
            public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
            public onCreate(param0: android.os.Bundle): void;
            public static newInstance(param0: com.zendesk.sdk.support.SupportUiConfig): com.zendesk.sdk.support.help.SupportHelpFragment;
            public setPresenter(param0: com.zendesk.sdk.support.SupportMvp.Presenter): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace ui {
        export class AnimationListenerAdapter {
          public onAnimationEnd(param0: android.view.animation.Animation): void;
          public onAnimationRepeat(param0: android.view.animation.Animation): void;
          public onAnimationStart(param0: android.view.animation.Animation): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace ui {
        export class EmailAddressAutoCompleteTextView {
          public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
          public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
          public constructor(param0: android.content.Context);
          public isInputValid(): boolean;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace ui {
        export class ListRowView {
          /**
           * Constructs a new instance of the com.zendesk.sdk.ui.ListRowView interface with the provided implementation.
           */
          public constructor(implementation: {
            bind(param0: java.lang.Object): void;
            getView(): android.view.View;
          });
          public getView(): android.view.View;
          public bind(param0: java.lang.Object): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace ui {
        export class LoadingState {
          public static LOADING: com.zendesk.sdk.ui.LoadingState;
          public static DISPLAYING: com.zendesk.sdk.ui.LoadingState;
          public static ERRORED: com.zendesk.sdk.ui.LoadingState;
          public static values(): native.Array<com.zendesk.sdk.ui.LoadingState>;
          public static valueOf(param0: string): com.zendesk.sdk.ui.LoadingState;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace ui {
        export abstract class NetworkAwareActionbarActivity {
          public mNetworkAvailable: boolean;
          public constructor();
          public onResume(): void;
          public onRetryUnavailable(): void;
          public onCreate(param0: android.os.Bundle): void;
          public onNetworkUnavailable(): void;
          public onPause(): void;
          public onRetryAvailable(param0: string, param1: android.view.View.OnClickListener): void;
          public onNetworkAvailable(): void;
        }
        export namespace NetworkAwareActionbarActivity {
          export class NetworkAvailabilityBroadcastReceiver {
            public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace ui {
        export abstract class TextWatcherAdapter {
          public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
          public constructor();
          public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
          public afterTextChanged(param0: android.text.Editable): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace ui {
        export class ToolbarSherlock {
          public constructor();
          public static installToolBar(param0: android.support.v7.app.AppCompatActivity): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace ui {
        export class ZendeskPicassoTransformationFactory {
          public static INSTANCE: com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory;
          public static values(): native.Array<com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory>;
          public getResizeTransformationWidth(param0: number): com.squareup.picasso.Transformation;
          public getRoundedTransformation(param0: number, param1: number): com.squareup.picasso.Transformation;
          public getResizeTransformationHeight(param0: number): com.squareup.picasso.Transformation;
          public static valueOf(param0: string): com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory;
        }
        export namespace ZendeskPicassoTransformationFactory {
          export class ResizeTransformHeight {
            public key(): string;
            public transform(param0: android.graphics.Bitmap): android.graphics.Bitmap;
            public constructor(param0: com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory, param1: number);
          }
          export class ResizeTransformWidth {
            public key(): string;
            public transform(param0: android.graphics.Bitmap): android.graphics.Bitmap;
            public constructor(param0: com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory, param1: number);
          }
          export class RoundedTransformation {
            public key(): string;
            public transform(param0: android.graphics.Bitmap): android.graphics.Bitmap;
            public constructor(param0: com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory, param1: number, param2: number);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace zendesk {
    export namespace sdk {
      export namespace util {
        export class UiUtils {
          public static themeAttributeToPixels(param0: number, param1: android.content.Context, param2: number, param3: number): number;
          public static isTablet(param0: android.content.Context): boolean;
          public static dismissKeyboard(param0: android.app.Activity): void;
          public static setVisibility(param0: android.view.View, param1: number): void;
          public static sizeDialogWidthForTablets(param0: android.app.Dialog, param1: number): void;
          public static dpToPixels(param0: number, param1: android.util.DisplayMetrics): number;
          public static spToPixels(param0: number, param1: android.util.DisplayMetrics): number;
          public static getScreenSize(param0: android.content.Context): com.zendesk.sdk.util.UiUtils.ScreenSize;
          public static themeAttributeToColor(param0: number, param1: android.content.Context, param2: number): number;
          public static setThemeIfAttributesAreMissing(param0: android.app.Activity, param1: native.Array<number>): void;
        }
        export namespace UiUtils {
          export class ScreenSize {
            public static UNKNOWN: com.zendesk.sdk.util.UiUtils.ScreenSize;
            public static UNDEFINED: com.zendesk.sdk.util.UiUtils.ScreenSize;
            public static X_LARGE: com.zendesk.sdk.util.UiUtils.ScreenSize;
            public static LARGE: com.zendesk.sdk.util.UiUtils.ScreenSize;
            public static NORMAL: com.zendesk.sdk.util.UiUtils.ScreenSize;
            public static SMALL: com.zendesk.sdk.util.UiUtils.ScreenSize;
            public static valueOf(param0: string): com.zendesk.sdk.util.UiUtils.ScreenSize;
            public static values(): native.Array<com.zendesk.sdk.util.UiUtils.ScreenSize>;
          }
        }
      }
    }
  }
}

