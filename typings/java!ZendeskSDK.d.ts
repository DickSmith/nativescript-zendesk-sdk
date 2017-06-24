/* tslint:disable indent max-line-length member-ordering unified-signatures member-access semicolon trailing-comma */

/// <reference path="./_helpers.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
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

import javaioFile = java.io.File;
import androidcontentContext = android.content.Context;
import javautilList = java.util.List;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.zendesk.belvedere.BelvedereResult.d.ts" />
/// <reference path="./com.zendesk.sdk.attachment.ImageUploadHelper.d.ts" />
/// <reference path="./com.zendesk.sdk.feedback.ui.AttachmentContainerHost.d.ts" />
/// <reference path="./com.zendesk.sdk.model.settings.SafeMobileSettings.d.ts" />
/// <reference path="./com.zendesk.service.ErrorResponse.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module attachment {
				export class AttachmentHelper {
					public static isFileEligibleForUpload(param0: javaioFile, param1: com.zendesk.sdk.model.settings.SafeMobileSettings): boolean;
					public static processAndUploadSelectedFiles(param0: javautilList, param1: com.zendesk.sdk.attachment.ImageUploadHelper, param2: androidcontentContext, param3: com.zendesk.sdk.feedback.ui.AttachmentContainerHost, param4: com.zendesk.sdk.model.settings.SafeMobileSettings): void;
					public constructor();
					public static showAttachmentTryAgainDialog(param0: androidcontentContext, param1: com.zendesk.belvedere.BelvedereResult, param2: com.zendesk.service.ErrorResponse, param3: com.zendesk.sdk.attachment.ImageUploadHelper, param4: com.zendesk.sdk.feedback.ui.AttachmentContainerHost): void;
					public static isAttachmentSupportEnabled(param0: com.zendesk.sdk.model.settings.SafeMobileSettings): boolean;
				}
			}
		}
	}
}

import javautilHashMap = java.util.HashMap;
import javautilMap = java.util.Map;
/// <reference path="./com.zendesk.belvedere.BelvedereResult.d.ts" />
/// <reference path="./com.zendesk.sdk.model.request.UploadResponse.d.ts" />
/// <reference path="./com.zendesk.sdk.network.UploadProvider.d.ts" />
/// <reference path="./com.zendesk.service.ErrorResponse.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module attachment {
				export class ImageUploadHelper {
					public constructor(param0: com.zendesk.sdk.attachment.ImageUploadHelper.ImageUploadProgressListener, param1: com.zendesk.sdk.network.UploadProvider);
					public uploadImage(param0: com.zendesk.belvedere.BelvedereResult, param1: string): void;
					public reset(): void;
					public getUploadedAttachments(): javautilList;
					public setImageUploadProgressListener(param0: com.zendesk.sdk.attachment.ImageUploadHelper.ImageUploadProgressListener): void;
					public removeDuplicateFilesFromList(param0: javautilList): javautilList;
					public deleteAllAttachmentsBeforeShutdown(): void;
					public isImageUploadCompleted(): boolean;
					public removeImage(param0: javaioFile): void;
					public getRecentState(): javautilHashMap;
					public getUploadTokens(): javautilList;
				}
				export module ImageUploadHelper {
					export class ImageUploadProgressListener {
						/**
						 * Constructs a new instance of the com.zendesk.sdk.attachment.ImageUploadHelper$ImageUploadProgressListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							allImagesUploaded(param0: javautilMap): void;
							imageUploaded(param0: com.zendesk.sdk.model.request.UploadResponse, param1: com.zendesk.belvedere.BelvedereResult): void;
							imageUploadError(param0: com.zendesk.service.ErrorResponse, param1: com.zendesk.belvedere.BelvedereResult): void;
						});
						public imageUploadError(param0: com.zendesk.service.ErrorResponse, param1: com.zendesk.belvedere.BelvedereResult): void;
						public imageUploaded(param0: com.zendesk.sdk.model.request.UploadResponse, param1: com.zendesk.belvedere.BelvedereResult): void;
						public allImagesUploaded(param0: javautilMap): void;
					}
				}
			}
		}
	}
}

import javalangThrowable = java.lang.Throwable;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.zendesk.belvedere.Belvedere.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module attachment {
				export class ZendeskBelvedereProvider {
					public static INSTANCE: com.zendesk.sdk.attachment.ZendeskBelvedereProvider;
					public getBelvedere(param0: androidcontentContext): com.zendesk.belvedere.Belvedere;
					public static valueOf(param0: string): com.zendesk.sdk.attachment.ZendeskBelvedereProvider;
					public static values(): native.Array<com.zendesk.sdk.attachment.ZendeskBelvedereProvider>;
				}
				export module ZendeskBelvedereProvider {
					export class BelvedereZendeskLogger {
						public w(param0: string, param1: string): void;
						public setLoggable(param0: boolean): void;
						public e(param0: string, param1: string): void;
						public d(param0: string, param1: string): void;
						public e(param0: string, param1: string, param2: javalangThrowable): void;
					}
				}
			}
		}
	}
}

import javautilArrayList = java.util.ArrayList;
import androidcontentIntent = android.content.Intent;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.zendesk.sdk.deeplinking.actions.Action.d.ts" />
/// <reference path="./com.zendesk.sdk.deeplinking.actions.ActionHandler.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.Article.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.SimpleArticle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module deeplinking {
				export class ZendeskDeepLinking {
					public static INSTANCE: com.zendesk.sdk.deeplinking.ZendeskDeepLinking;
					public getRequestIntent(param0: androidcontentContext, param1: string, param2: string, param3: javautilArrayList, param4: androidcontentIntent, param5: string, param6: string, param7: string): androidcontentIntent;
					public unregisterAction(param0: com.zendesk.sdk.deeplinking.actions.ActionHandler): void;
					public getArticleIntent(param0: androidcontentContext, param1: com.zendesk.sdk.model.helpcenter.SimpleArticle, param2: javautilArrayList, param3: androidcontentIntent, param4: string, param5: string, param6: string): androidcontentIntent;
					public getArticleIntent(param0: androidcontentContext, param1: com.zendesk.sdk.model.helpcenter.Article, param2: javautilArrayList, param3: androidcontentIntent): androidcontentIntent;
					public getArticleIntent(param0: androidcontentContext, param1: com.zendesk.sdk.model.helpcenter.Article, param2: javautilArrayList, param3: androidcontentIntent, param4: string, param5: string, param6: string): androidcontentIntent;
					public static valueOf(param0: string): com.zendesk.sdk.deeplinking.ZendeskDeepLinking;
					public registerAction(param0: com.zendesk.sdk.deeplinking.actions.ActionHandler, param1: native.Array<com.zendesk.sdk.deeplinking.actions.Action>): void;
					public getRequestIntent(param0: androidcontentContext, param1: string, param2: string, param3: javautilArrayList, param4: androidcontentIntent): androidcontentIntent;
					public refreshComments(param0: string): boolean;
					public static values(): native.Array<com.zendesk.sdk.deeplinking.ZendeskDeepLinking>;
					public getArticleIntent(param0: androidcontentContext, param1: com.zendesk.sdk.model.helpcenter.SimpleArticle, param2: javautilArrayList, param3: androidcontentIntent): androidcontentIntent;
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
			export module deeplinking {
				export class ZendeskDeepLinkingBroadcastReceiver {
					public onReceive(param0: androidcontentContext, param1: androidcontentIntent): void;
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module deeplinking {
				export class ZendeskDeepLinkingParser {
					public parse(param0: string, param1: androidcontentContext): androidcontentIntent;
					public constructor();
				}
				export module ZendeskDeepLinkingParser {
					export class DefaultParser {
						public parse(param0: string, param1: androidcontentContext): androidcontentIntent;
					}
					export class HelpCenterParser {
						public parse(param0: string, param1: androidcontentContext): androidcontentIntent;
					}
					export class HttpParser {
						public parse(param0: string, param1: androidcontentContext): androidcontentIntent;
					}
					export class MailParser {
						public parse(param0: string, param1: androidcontentContext): androidcontentIntent;
					}
					export class ZendeskDeepLinkParserModule {
						/**
						 * Constructs a new instance of the com.zendesk.sdk.deeplinking.ZendeskDeepLinkingParser$ZendeskDeepLinkParserModule interface with the provided implementation.
						 */
						public constructor(implementation: {
							parse(param0: string, param1: androidcontentContext): androidcontentIntent;
						});
						public parse(param0: string, param1: androidcontentContext): androidcontentIntent;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.deeplinking.actions.ActionData.d.ts" />
/// <reference path="./com.zendesk.sdk.deeplinking.actions.ActionHandler.d.ts" />
/// <reference path="./com.zendesk.sdk.deeplinking.actions.ActionType.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module deeplinking {
				export module actions {
					export abstract class Action {
						public execute(param0: com.zendesk.sdk.deeplinking.actions.ActionHandler, param1: com.zendesk.sdk.deeplinking.actions.ActionData): void;
						public getActionData(): com.zendesk.sdk.deeplinking.actions.ActionData;
						public constructor(param0: com.zendesk.sdk.deeplinking.actions.ActionType, param1: com.zendesk.sdk.deeplinking.actions.ActionData);
						public getActionType(): com.zendesk.sdk.deeplinking.actions.ActionType;
						public canHandleData(param0: com.zendesk.sdk.deeplinking.actions.ActionData): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module deeplinking {
				export module actions {
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

declare module com {
	export module zendesk {
		export module sdk {
			export module deeplinking {
				export module actions {
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

/// <reference path="./com.zendesk.sdk.deeplinking.actions.ActionData.d.ts" />
/// <reference path="./com.zendesk.sdk.deeplinking.actions.ActionHandler.d.ts" />
/// <reference path="./com.zendesk.sdk.deeplinking.actions.ActionType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module deeplinking {
				export module actions {
					export class ActionRefreshComments extends com.zendesk.sdk.deeplinking.actions.Action {
						public execute(param0: com.zendesk.sdk.deeplinking.actions.ActionHandler, param1: com.zendesk.sdk.deeplinking.actions.ActionData): void;
						public canHandleData(param0: com.zendesk.sdk.deeplinking.actions.ActionRefreshComments.ActionRefreshCommentsData): boolean;
						public constructor(param0: com.zendesk.sdk.deeplinking.actions.ActionType, param1: com.zendesk.sdk.deeplinking.actions.ActionData);
						public execute(param0: com.zendesk.sdk.deeplinking.actions.ActionRefreshComments.ActionRefreshCommentsListener, param1: com.zendesk.sdk.deeplinking.actions.ActionRefreshComments.ActionRefreshCommentsData): void;
						public canHandleData(param0: com.zendesk.sdk.deeplinking.actions.ActionData): boolean;
						public constructor(param0: string);
					}
					export module ActionRefreshComments {
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

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module deeplinking {
				export module actions {
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

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.Article.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.SimpleArticle.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module deeplinking {
				export module targets {
					export class ArticleConfiguration extends com.zendesk.sdk.deeplinking.targets.TargetConfiguration {
						public getArticle(): com.zendesk.sdk.model.helpcenter.Article;
						public constructor(param0: com.zendesk.sdk.model.helpcenter.Article, param1: javautilArrayList, param2: androidcontentIntent);
						public constructor(param0: com.zendesk.sdk.model.helpcenter.SimpleArticle, param1: javautilArrayList, param2: androidcontentIntent);
						public getSimpleArticle(): com.zendesk.sdk.model.helpcenter.SimpleArticle;
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
			export module deeplinking {
				export module targets {
					export class DeepLinkType {
						public static Request: com.zendesk.sdk.deeplinking.targets.DeepLinkType;
						public static Article: com.zendesk.sdk.deeplinking.targets.DeepLinkType;
						public static Unknown: com.zendesk.sdk.deeplinking.targets.DeepLinkType;
						public static valueOf(param0: string): com.zendesk.sdk.deeplinking.targets.DeepLinkType;
						public static values(): native.Array<com.zendesk.sdk.deeplinking.targets.DeepLinkType>;
					}
				}
			}
		}
	}
}

import androidsupportv4appTaskStackBuilder = android.support.v4.app.TaskStackBuilder;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.support.v4.app.TaskStackBuilder.d.ts" />
/// <reference path="./com.zendesk.sdk.deeplinking.targets.DeepLinkType.d.ts" />
/// <reference path="./com.zendesk.sdk.deeplinking.targets.TargetConfiguration.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module deeplinking {
				export module targets {
					export abstract class DeepLinkingTarget {
						public constructor();
						public static getDeepLinkType(param0: androidcontentIntent): com.zendesk.sdk.deeplinking.targets.DeepLinkType;
						public static getTaskStackBuilder(param0: androidcontentContext, param1: javautilList): androidsupportv4appTaskStackBuilder;
						public getIntent(param0: androidcontentContext, param1: com.zendesk.sdk.deeplinking.targets.TargetConfiguration): androidcontentIntent;
						public getIntent(param0: androidcontentContext, param1: com.zendesk.sdk.deeplinking.targets.TargetConfiguration, param2: string, param3: string, param4: string): androidcontentIntent;
						public execute(param0: androidcontentContext, param1: androidcontentIntent): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module deeplinking {
				export module targets {
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

declare module com {
	export module zendesk {
		export module sdk {
			export module deeplinking {
				export module targets {
					export class DeepLinkingTargetRequest extends com.zendesk.sdk.deeplinking.targets.DeepLinkingTarget {
						public constructor();
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module deeplinking {
				export module targets {
					export class RequestConfiguration extends com.zendesk.sdk.deeplinking.targets.TargetConfiguration {
						public constructor(param0: string, param1: string, param2: javautilArrayList, param3: androidcontentIntent);
						public getRequestId(): string;
						public getSubject(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.zendesk.sdk.deeplinking.targets.DeepLinkType.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module deeplinking {
				export module targets {
					export class TargetConfiguration {
						public getFallbackActivity(): androidcontentIntent;
						public getBackStackActivities(): javautilArrayList;
						public getDeepLinkType(): com.zendesk.sdk.deeplinking.targets.DeepLinkType;
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
			export module feedback {
				export abstract class BaseZendeskFeedbackConfiguration {
					public getAdditionalInfo(): string;
					public constructor();
					public getTags(): javautilList;
					public getRequestSubject(): string;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module feedback {
				export class FeedbackConnector {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.feedback.FeedbackConnector interface with the provided implementation.
					 */
					public constructor(implementation: {
						sendFeedback(param0: string, param1: javautilList, param2: com.zendesk.service.ZendeskCallback): void;
						isValid(): boolean;
					});
					public isValid(): boolean;
					public sendFeedback(param0: string, param1: javautilList, param2: com.zendesk.service.ZendeskCallback): void;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module feedback {
				export class WrappedZendeskFeedbackConfiguration {
					public getAdditionalInfo(): string;
					public constructor(param0: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration);
					public getTags(): javautilList;
					public getRequestSubject(): string;
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module feedback {
				export class ZendeskFeedbackConfiguration {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration interface with the provided implementation.
					 */
					public constructor(implementation: {
						getTags(): javautilList;
						getAdditionalInfo(): string;
						getRequestSubject(): string;
					});
					public getAdditionalInfo(): string;
					public getTags(): javautilList;
					public getRequestSubject(): string;
				}
			}
		}
	}
}

import javalangLong = java.lang.Long;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration.d.ts" />
/// <reference path="./com.zendesk.sdk.network.RequestProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module feedback {
				export class ZendeskFeedbackConnector {
					public constructor(param0: androidcontentContext, param1: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration, param2: javautilList, param3: javautilList, param4: javalangLong, param5: com.zendesk.sdk.network.RequestProvider, param6: com.zendesk.sdk.storage.IdentityStorage);
					public isValid(): boolean;
					public static defaultConnector(param0: androidcontentContext, param1: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration, param2: javautilList): com.zendesk.sdk.feedback.ZendeskFeedbackConnector;
					public sendFeedback(param0: string, param1: javautilList, param2: com.zendesk.service.ZendeskCallback): void;
				}
			}
		}
	}
}

import androidutilAttributeSet = android.util.AttributeSet;
import androidviewView = android.view.View;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.zendesk.sdk.attachment.ImageUploadHelper.d.ts" />
/// <reference path="./com.zendesk.sdk.feedback.ui.AttachmentContainerHost.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module feedback {
				export module ui {
					export class AttachmentContainerHost {
						public setState(param0: com.zendesk.sdk.attachment.ImageUploadHelper): void;
						public setParent(param0: androidviewView): void;
						public removeAttachment(param0: javaioFile): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						public removeAttachmentAndNotify(param0: javaioFile): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number, param3: number);
						public setAttachmentContainerListener(param0: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentContainerListener): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public setAttachmentsDeletable(param0: boolean): void;
						public setAttachmentState(param0: javaioFile, param1: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState): void;
						public addAttachment(param0: javaioFile): void;
						public setAttachmentUploaded(param0: javaioFile): void;
						public constructor(param0: androidcontentContext);
						public reset(): void;
					}
					export module AttachmentContainerHost {
						export class AttachmentContainer {
							public constructor(param0: com.zendesk.sdk.feedback.ui.AttachmentContainerHost, param1: androidcontentContext, param2: javaioFile, param3: com.zendesk.sdk.feedback.ui.AttachmentContainerHost, param4: number);
							public setState(param0: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState): void;
							public getAttachmentState(): com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState;
							public getFile(): javaioFile;
						}
						export class AttachmentContainerListener {
							/**
							 * Constructs a new instance of the com.zendesk.sdk.feedback.ui.AttachmentContainerHost$AttachmentContainerListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								attachmentRemoved(param0: javaioFile): void;
							});
							public attachmentRemoved(param0: javaioFile): void;
						}
						export class AttachmentState {
							public static UPLOADING: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState;
							public static UPLOADED: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState;
							public static DISABLE: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState;
							public static valueOf(param0: string): com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState;
							public static values(): native.Array<com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState>;
						}
					}
				}
			}
		}
	}
}

import androidosBundle = android.os.Bundle;
import androidviewMenuItem = android.view.MenuItem;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module feedback {
				export module ui {
					export class ContactZendeskActivity extends com.zendesk.sdk.ui.NetworkAwareActionbarActivity {
						public static RESULT_ERROR_REASON: string;
						public static RESULT_ERROR_STATUS_CODE: string;
						public static RESULT_ERROR_IS_NETWORK_ERROR: string;
						public static EXTRA_CONTACT_CONFIGURATION: string;
						public constructor();
						public onCreate(param0: androidosBundle): void;
						public onDestroy(): void;
						public onNetworkAvailable(): void;
						public onNetworkUnavailable(): void;
						public onOptionsItemSelected(param0: androidviewMenuItem): boolean;
						public static startActivity(param0: androidcontentContext, param1: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration): void;
					}
					export module ContactZendeskActivity {
						export class DefaultContactConfiguration extends com.zendesk.sdk.feedback.BaseZendeskFeedbackConfiguration {
							public getTags(): javautilList;
							public getRequestSubject(): string;
							public getAdditionalInfo(): string;
						}
					}
				}
			}
		}
	}
}

import androidviewLayoutInflater = android.view.LayoutInflater;
import androidviewViewGroup = android.view.ViewGroup;
import androidviewMenu = android.view.Menu;
import androidviewMenuInflater = android.view.MenuInflater;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration.d.ts" />
/// <reference path="./com.zendesk.sdk.feedback.ui.ContactZendeskFragment.d.ts" />
/// <reference path="./com.zendesk.sdk.model.request.CreateRequest.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SubmissionListener.d.ts" />
/// <reference path="./com.zendesk.service.ErrorResponse.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module feedback {
				export module ui {
					export class ContactZendeskFragment {
						public static EXTRA_CONFIGURATION: string;
						public static EXTRA_CONFIGURATION_TAGS: string;
						public static EXTRA_CONFIGURATION_ADDITIONAL_INFO: string;
						public static EXTRA_CONFIGURATION_REQUEST_SUBJECT: string;
						public constructor();
						public onAttach(param0: androidcontentContext): void;
						public onPrepareOptionsMenu(param0: androidviewMenu): void;
						public onOptionsItemSelected(param0: androidviewMenuItem): boolean;
						public deleteUnusedAttachmentsBeforeShutdown(): void;
						public onActivityResult(param0: number, param1: number, param2: androidcontentIntent): void;
						public onCreate(param0: androidosBundle): void;
						public onCreateView(param0: androidviewLayoutInflater, param1: androidviewViewGroup, param2: androidosBundle): androidviewView;
						public onCreateOptionsMenu(param0: androidviewMenu, param1: androidviewMenuInflater): void;
						public setFeedbackListener(param0: com.zendesk.sdk.network.SubmissionListener): void;
						public static newInstance(param0: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration): com.zendesk.sdk.feedback.ui.ContactZendeskFragment;
						public onDestroy(): void;
						public onDetach(): void;
					}
					export module ContactZendeskFragment {
						export class ContactZendeskFeedbackConfiguration {
							public constructor(param0: com.zendesk.sdk.feedback.ui.ContactZendeskFragment, param1: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration);
							public getTags(): javautilList;
							public getRequestSubject(): string;
							public getAdditionalInfo(): string;
						}
						export class RequestCallback {
							public onError(param0: com.zendesk.service.ErrorResponse): void;
							public onSuccess(param0: com.zendesk.sdk.model.request.CreateRequest): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export class AppVersion {
					public getAppVersionCode(): number;
					public getAppVersionName(): string;
					public constructor(param0: androidcontentContext);
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
			export module model {
				export class DeviceInfo {
					public toString(): string;
					public getDeviceInfoAsMap(): javautilMap;
					public getModelDeviceName(): string;
					public getVersionName(): string;
					public getModelManufacturer(): string;
					public getVersionCode(): number;
					public constructor(param0: androidcontentContext);
					public getModelName(): string;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module model {
				export class MemoryInformation {
					public static EXPECTED_TOKEN_COUNT: number;
					public static BYTES_MULTIPLIER: number;
					public formatMemoryUsage(): string;
					public getTotalMemory(): number;
					public constructor(param0: androidcontentContext);
					public getTotalMemoryCompat(): number;
					public getTotalMemoryApi(): number;
					public isLowMemory(): boolean;
					public getUsedMemory(): number;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.service.ErrorResponse.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class RequestLoadingListener {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.network.RequestLoadingListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onLoadStarted(): void;
						onLoadFinished(param0: number): void;
						onLoadError(param0: com.zendesk.service.ErrorResponse): void;
					});
					public onLoadStarted(): void;
					public onLoadError(param0: com.zendesk.service.ErrorResponse): void;
					public onLoadFinished(param0: number): void;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.service.ErrorResponse.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
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
					public onSubmissionStarted(): void;
					public onSubmissionCompleted(): void;
					public onSubmissionError(param0: com.zendesk.service.ErrorResponse): void;
					public onSubmissionCancel(): void;
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.service.ErrorResponse.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export class SubmissionListenerAdapter {
					public onSubmissionStarted(): void;
					public constructor();
					public onSubmissionCompleted(): void;
					public onSubmissionError(param0: com.zendesk.service.ErrorResponse): void;
					public onSubmissionCancel(): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.squareup.picasso.Picasso.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module network {
				export module impl {
					export class ZendeskPicassoProvider {
						public static getInstance(param0: androidcontentContext): com.squareup.picasso.Picasso;
					}
				}
			}
		}
	}
}

import androidviewViewOnClickListener = android.view.View.OnClickListener;
declare module com {
	export module zendesk {
		export module sdk {
			export module rating {
				export class RateMyAppButton {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.rating.RateMyAppButton interface with the provided implementation.
					 */
					public constructor(implementation: {
						getLabel(): string;
						getStyleAttributeId(): number;
						getOnClickListener(): androidviewViewOnClickListener;
						getId(): number;
						shouldDismissDialog(): boolean;
					});
					public getLabel(): string;
					public getStyleAttributeId(): number;
					public getOnClickListener(): androidviewViewOnClickListener;
					public shouldDismissDialog(): boolean;
					public getId(): number;
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module rating {
				export class RateMyAppRule {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.rating.RateMyAppRule interface with the provided implementation.
					 */
					public constructor(implementation: {
						permitsShowOfDialog(): boolean;
					});
					public permitsShowOfDialog(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module rating {
				export module impl {
					export abstract class BaseRateMyAppButton {
						public constructor();
						public getStyleAttributeId(): number;
						public getLabel(): string;
						public getOnClickListener(): androidviewViewOnClickListener;
						public shouldDismissDialog(): boolean;
						public getId(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module rating {
				export module impl {
					export class IdentityRateMyAppRule {
						public permitsShowOfDialog(): boolean;
						public constructor(param0: androidcontentContext);
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module rating {
				export module impl {
					export class MetricsRateMyAppRule {
						public permitsShowOfDialog(): boolean;
						public constructor(param0: androidcontentContext);
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module rating {
				export module impl {
					export class NetworkRateMyAppRule {
						public permitsShowOfDialog(): boolean;
						public constructor(param0: androidcontentContext);
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module rating {
				export module impl {
					export class RateMyAppDontAskAgainButton extends com.zendesk.sdk.rating.impl.BaseRateMyAppButton {
						public constructor();
						public getStyleAttributeId(): number;
						public getLabel(): string;
						public getOnClickListener(): androidviewViewOnClickListener;
						public constructor(param0: androidcontentContext);
						public shouldDismissDialog(): boolean;
						public getId(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.rating.RateMyAppRule.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module rating {
				export module impl {
					export class RateMyAppRules {
						public constructor(param0: native.Array<com.zendesk.sdk.rating.RateMyAppRule>);
						public checkRules(): boolean;
					}
				}
			}
		}
	}
}

import androidsupportv4appFragmentActivity = android.support.v4.app.FragmentActivity;
/// <reference path="./android.support.v4.app.FragmentActivity.d.ts" />
/// <reference path="./com.zendesk.sdk.feedback.FeedbackConnector.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SubmissionListener.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module rating {
				export module impl {
					export class RateMyAppSendFeedbackButton extends com.zendesk.sdk.rating.impl.BaseRateMyAppButton {
						public static FEEDBACK_DIALOG_TAG: string;
						public constructor();
						public setFeedbackListener(param0: com.zendesk.sdk.network.SubmissionListener): void;
						public getStyleAttributeId(): number;
						public getLabel(): string;
						public getOnClickListener(): androidviewViewOnClickListener;
						public shouldDismissDialog(): boolean;
						public constructor(param0: androidsupportv4appFragmentActivity, param1: com.zendesk.sdk.feedback.FeedbackConnector);
						public getId(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module rating {
				export module impl {
					export class RateMyAppStoreButton extends com.zendesk.sdk.rating.impl.BaseRateMyAppButton {
						public constructor();
						public getStyleAttributeId(): number;
						public getLabel(): string;
						public getOnClickListener(): androidviewViewOnClickListener;
						public constructor(param0: androidcontentContext);
						public shouldDismissDialog(): boolean;
						public getId(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module rating {
				export module impl {
					export class SettingsRateMyAppRule {
						public permitsShowOfDialog(): boolean;
						public constructor(param0: androidcontentContext);
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module rating {
				export module ui {
					export class DefaultContactConfiguration extends com.zendesk.sdk.feedback.BaseZendeskFeedbackConfiguration {
						public constructor();
						public getRequestSubject(): string;
						public getAdditionalInfo(): string;
						public getTags(): javautilList;
						public constructor(param0: androidcontentContext);
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.zendesk.sdk.feedback.FeedbackConnector.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SubmissionListener.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module rating {
				export module ui {
					export class FeedbackDialog extends com.zendesk.sdk.ui.ZendeskDialog {
						public onDestroyView(): void;
						public constructor();
						public onCreate(param0: androidosBundle): void;
						public setFeedbackListener(param0: com.zendesk.sdk.network.SubmissionListener): void;
						public onCreateView(param0: androidviewLayoutInflater, param1: androidviewViewGroup, param2: androidosBundle): androidviewView;
						public static newInstance(param0: com.zendesk.sdk.feedback.FeedbackConnector): com.zendesk.sdk.rating.ui.FeedbackDialog;
					}
					export module FeedbackDialog {
						export class NullSafeFeedbackConnector {
							public sendFeedback(param0: string, param1: javautilList, param2: com.zendesk.service.ZendeskCallback): void;
							public isValid(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module rating {
				export module ui {
					export class RateMyAppButtonContainer {
						public setRateMyAppSelectionListener(param0: com.zendesk.sdk.rating.ui.RateMyAppButtonContainer.RateMyAppSelectionListener): void;
						public constructor(param0: androidcontentContext, param1: javautilList);
						public setDismissableListener(param0: com.zendesk.sdk.rating.ui.RateMyAppButtonContainer.DismissableListener): void;
					}
					export module RateMyAppButtonContainer {
						export class DismissableListener {
							/**
							 * Constructs a new instance of the com.zendesk.sdk.rating.ui.RateMyAppButtonContainer$DismissableListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								dismissDialog(): void;
							});
							public dismissDialog(): void;
						}
						export class RateMyAppSelectionListener {
							/**
							 * Constructs a new instance of the com.zendesk.sdk.rating.ui.RateMyAppButtonContainer$RateMyAppSelectionListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								selectionMade(param0: number): void;
							});
							public selectionMade(param0: number): void;
						}
					}
				}
			}
		}
	}
}

import androidappDialog = android.app.Dialog;
import androidsupportv4appFragmentManager = android.support.v4.app.FragmentManager;
import androidcontentDialogInterface = android.content.DialogInterface;
/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.app.FragmentActivity.d.ts" />
/// <reference path="./android.support.v4.app.FragmentManager.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SubmissionListener.d.ts" />
/// <reference path="./com.zendesk.sdk.rating.RateMyAppButton.d.ts" />
/// <reference path="./com.zendesk.sdk.rating.RateMyAppRule.d.ts" />
/// <reference path="./com.zendesk.sdk.rating.ui.RateMyAppDialog.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module rating {
				export module ui {
					export class RateMyAppDialog extends com.zendesk.sdk.ui.ZendeskDialog {
						public static RMA_DIALOG_TAG: string;
						public constructor();
						public onCreateView(param0: androidviewLayoutInflater, param1: androidviewViewGroup, param2: androidosBundle): androidviewView;
						public showAlways(param0: androidsupportv4appFragmentActivity): void;
						public onCreateDialog(param0: androidosBundle): androidappDialog;
						public show(param0: androidsupportv4appFragmentActivity): void;
						public tearDownDialog(param0: androidsupportv4appFragmentManager): void;
						public show(param0: androidsupportv4appFragmentActivity, param1: boolean): void;
						public onStart(): void;
					}
					export module RateMyAppDialog {
						export class Builder {
							public withDontRemindMeAgainButton(): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;
							public withRules(param0: native.Array<com.zendesk.sdk.rating.RateMyAppRule>): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;
							public build(): com.zendesk.sdk.rating.ui.RateMyAppDialog;
							public withSendFeedbackButton(param0: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration, param1: com.zendesk.sdk.network.SubmissionListener): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;
							public constructor(param0: androidsupportv4appFragmentActivity);
							public withSelectionListener(param0: com.zendesk.sdk.rating.ui.RateMyAppButtonContainer.RateMyAppSelectionListener): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;
							public withButton(param0: com.zendesk.sdk.rating.RateMyAppButton): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;
							public withAndroidStoreRatingButton(): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;
							public withSendFeedbackButton(param0: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;
							public withSendFeedbackButton(): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;
							public withOnShowListener(param0: com.zendesk.sdk.rating.ui.RateMyAppDialog.OnShowListener): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;
						}
						export class OnShowListener {
							/**
							 * Constructs a new instance of the com.zendesk.sdk.rating.ui.RateMyAppDialog$OnShowListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onShow(param0: androidcontentDialogInterface): void;
							});
							public onShow(param0: androidcontentDialogInterface): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.request.CommentResponse.d.ts" />
/// <reference path="./com.zendesk.sdk.model.request.User.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module requests {
				export class CommentWithUser {
					public static build(param0: com.zendesk.sdk.model.request.CommentResponse, param1: com.zendesk.sdk.model.request.User): com.zendesk.sdk.requests.CommentWithUser;
					public static build(param0: com.zendesk.sdk.model.request.CommentResponse, param1: javautilList): com.zendesk.sdk.requests.CommentWithUser;
					public getAuthor(): com.zendesk.sdk.model.request.User;
					public getComment(): com.zendesk.sdk.model.request.CommentResponse;
				}
			}
		}
	}
}

import javalangObject = java.lang.Object;
/// <reference path="./com.zendesk.belvedere.Belvedere.d.ts" />
/// <reference path="./com.zendesk.sdk.requests.ImageLoader.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module requests {
				export class ImageLoader {
					public static INSTANCE: com.zendesk.sdk.requests.ImageLoader;
					public static valueOf(param0: string): com.zendesk.sdk.requests.ImageLoader;
					public static values(): native.Array<com.zendesk.sdk.requests.ImageLoader>;
				}
				export module ImageLoader {
					export class DownloadImageToExternalStorage {
						public doInBackground(param0: native.Array<com.zendesk.sdk.requests.ImageLoader.TaskData>): com.zendesk.sdk.requests.ImageLoader.Result;
						public onPostExecute(param0: com.zendesk.sdk.requests.ImageLoader.Result): void;
						public constructor(param0: com.zendesk.sdk.requests.ImageLoader, param1: com.zendesk.service.ZendeskCallback, param2: com.zendesk.belvedere.Belvedere);
					}
					export class Result {
						public getResult(): javalangObject;
					}
					export class TaskData {
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module requests {
				export class RequestActivity extends com.zendesk.sdk.ui.NetworkAwareActionbarActivity {
					public static FRAGMENT_TAG: string;
					public onCreateOptionsMenu(param0: androidviewMenu): boolean;
					public constructor();
					public onNetworkAvailable(): void;
					public onCreate(param0: androidosBundle): void;
					public onNetworkUnavailable(): void;
					public static startActivity(param0: androidcontentContext, param1: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration): void;
					public onOptionsItemSelected(param0: androidviewMenuItem): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.zendesk.sdk.model.request.Attachment.d.ts" />
/// <reference path="./com.zendesk.sdk.requests.CommentWithUser.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module requests {
				export class RequestCommentsListAdapter {
					public getViewTypeCount(): number;
					public constructor(param0: androidcontentContext, param1: number, param2: javautilList, param3: com.zendesk.sdk.requests.RequestCommentsListAdapter.AttachmentOnClickListener);
					public getItemViewType(param0: number): number;
					public getView(param0: number, param1: androidviewView, param2: androidviewViewGroup): androidviewView;
				}
				export module RequestCommentsListAdapter {
					export class AgentRowIdHolder {
						public getAvatarId(): number;
						public getContainerId(): number;
						public getAttachmentsContainerId(): number;
						public getNameId(): number;
						public getDateId(): number;
						public getResponseId(): number;
					}
					export class AttachmentOnClickListener {
						/**
						 * Constructs a new instance of the com.zendesk.sdk.requests.RequestCommentsListAdapter$AttachmentOnClickListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onAttachmentClicked(param0: androidviewView, param1: com.zendesk.sdk.model.request.Attachment): void;
						});
						public onAttachmentClicked(param0: androidviewView, param1: com.zendesk.sdk.model.request.Attachment): void;
					}
					export class CommentRow {
						public constructor(param0: androidcontentContext, param1: com.zendesk.sdk.requests.RequestCommentsListAdapter.IdHolder, param2: com.zendesk.sdk.requests.RequestCommentsListAdapter.AttachmentOnClickListener);
						public bind(param0: javalangObject): void;
						public bind(param0: com.zendesk.sdk.requests.CommentWithUser): void;
						public getView(): androidviewView;
					}
					export class CommentRowAttachmentHelper {
						public static heightMap: javautilMap;
					}
					export class EndUserRowIdHolder {
						public getAvatarId(): number;
						public getContainerId(): number;
						public getAttachmentsContainerId(): number;
						public getNameId(): number;
						public getDateId(): number;
						public getResponseId(): number;
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
						public getContainerId(): number;
						public getAttachmentsContainerId(): number;
						public getNameId(): number;
						public getDateId(): number;
						public getResponseId(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.zendesk.sdk.network.RequestLoadingListener.d.ts" />
/// <reference path="./com.zendesk.service.ErrorResponse.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module requests {
				export class RequestListFragment {
					public onAttach(param0: androidcontentContext): void;
					public refreshRequests(): void;
					public constructor();
					public onCreateView(param0: androidviewLayoutInflater, param1: androidviewViewGroup, param2: androidosBundle): androidviewView;
					public onNetworkAvailable(): void;
					public onPause(): void;
					public onDetach(): void;
					public onNetworkUnavailable(): void;
					public onResume(): void;
					public setRequestLoadingListener(param0: com.zendesk.sdk.network.RequestLoadingListener): void;
				}
				export module RequestListFragment {
					export class RequestsCallback {
						public onError(param0: com.zendesk.service.ErrorResponse): void;
						public onSuccess(param0: javautilList): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.zendesk.sdk.model.request.Request.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module requests {
				export class RequestsAdapter {
					public constructor(param0: androidcontentContext, param1: javautilList);
					public getView(param0: number, param1: androidviewView, param2: androidviewViewGroup): androidviewView;
				}
				export module RequestsAdapter {
					export class RequestRow {
						public bind(param0: javalangObject): void;
						public getView(): androidviewView;
						public bind(param0: com.zendesk.sdk.model.request.Request): void;
						public constructor(param0: androidcontentContext);
						public setUnreadIndicator(param0: boolean): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module requests {
				export class ViewRequestActivity extends com.zendesk.sdk.ui.NetworkAwareActionbarActivity {
					public static EXTRA_REQUEST_ID: string;
					public static EXTRA_SUBJECT: string;
					public constructor();
					public onNetworkAvailable(): void;
					public onCreate(param0: androidosBundle): void;
					public onNetworkUnavailable(): void;
					public onOptionsItemSelected(param0: androidviewMenuItem): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SubmissionListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module requests {
				export class ViewRequestFragment {
					public static EXTRA_REQUEST_ID: string;
					public static EXTRA_REQUEST_SUBJECT: string;
					public static newInstance(param0: string, param1: string): com.zendesk.sdk.requests.ViewRequestFragment;
					public onAttach(param0: androidcontentContext): void;
					public onActivityResult(param0: number, param1: number, param2: androidcontentIntent): void;
					public static newInstance(param0: string): com.zendesk.sdk.requests.ViewRequestFragment;
					public onCreateView(param0: androidviewLayoutInflater, param1: androidviewViewGroup, param2: androidosBundle): androidviewView;
					public onCreate(param0: androidosBundle): void;
					public onDestroy(): void;
					public setSubmissionListener(param0: com.zendesk.sdk.network.SubmissionListener): void;
					public onResume(): void;
					public refreshComments(param0: com.zendesk.sdk.deeplinking.actions.ActionRefreshComments.ActionRefreshCommentsData): void;
					public constructor();
					public static newInstance(param0: string, param1: string, param2: com.zendesk.sdk.network.SubmissionListener): com.zendesk.sdk.requests.ViewRequestFragment;
					public onPause(): void;
					public onDetach(): void;
				}
				export module ViewRequestFragment {
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

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module storage {
				export class RateMyAppStorage {
					public reset(): void;
					public setRatedForCurrentVersion(): void;
					public getCanShowAfterTime(): number;
					public getCacheKey(): string;
					public clearUserData(): void;
					public getNumberOfLaunches(): number;
					public isLaunchTimeMet(): boolean;
					public setDontShowAgain(): void;
					public setSavedFeedback(param0: string): void;
					public isDontShowAgain(): boolean;
					public isNumberOfLaunchesMet(): boolean;
					public getSavedFeedback(): string;
					public constructor(param0: androidcontentContext);
					public isRatedForCurrentVersion(): boolean;
					public incrementNumberOfLaunches(): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration.d.ts" />
/// <reference path="./com.zendesk.sdk.network.RetryAction.d.ts" />
/// <reference path="./com.zendesk.sdk.support.SupportUiConfig.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module support {
				export class SupportActivity {
					public exitActivity(): void;
					public showError(param0: number): void;
					public showContactZendesk(): void;
					public onPrepareOptionsMenu(param0: androidviewMenu): boolean;
					public showRequestList(): void;
					public dismissError(): void;
					public onCreate(param0: androidosBundle): void;
					public showContactUsButton(): void;
					public showErrorWithRetry(param0: com.zendesk.sdk.support.SupportMvp.ErrorType, param1: com.zendesk.sdk.network.RetryAction): void;
					public showLoadingState(): void;
					public isShowingHelp(): boolean;
					public hideLoadingState(): void;
					public onResume(): void;
					public clearSearchResults(): void;
					public showHelp(param0: com.zendesk.sdk.support.SupportUiConfig): void;
					public onSaveInstanceState(param0: androidosBundle): void;
					public onCreateOptionsMenu(param0: androidviewMenu): boolean;
					public showSearchResults(param0: javautilList, param1: string): void;
					public constructor();
					public onPause(): void;
					public getContext(): androidcontentContext;
					public onOptionsItemSelected(param0: androidviewMenuItem): boolean;
				}
				export module SupportActivity {
					export class Builder {
						public constructor();
						public withArticlesForCategoryIds(param0: native.Array<number>): com.zendesk.sdk.support.SupportActivity.Builder;
						public showContactUsButton(param0: boolean): com.zendesk.sdk.support.SupportActivity.Builder;
						public withArticlesForSectionIds(param0: native.Array<number>): com.zendesk.sdk.support.SupportActivity.Builder;
						public show(param0: androidcontentContext): void;
						public withLabelNames(param0: native.Array<string>): com.zendesk.sdk.support.SupportActivity.Builder;
						public withCategoriesCollapsed(param0: boolean): com.zendesk.sdk.support.SupportActivity.Builder;
						public showConversationsMenuButton(param0: boolean): com.zendesk.sdk.support.SupportActivity.Builder;
						public withContactConfiguration(param0: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration): com.zendesk.sdk.support.SupportActivity.Builder;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module support {
				export class SupportModel {
					public getSettings(param0: com.zendesk.service.ZendeskCallback): void;
					public search(param0: javautilList, param1: javautilList, param2: string, param3: native.Array<string>, param4: com.zendesk.service.ZendeskCallback): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.zendesk.sdk.network.RetryAction.d.ts" />
/// <reference path="./com.zendesk.sdk.support.SupportUiConfig.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module support {
				export class SupportMvp {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.support.SupportMvp interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
				}
				export module SupportMvp {
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
							search(param0: javautilList, param1: javautilList, param2: string, param3: native.Array<string>, param4: com.zendesk.service.ZendeskCallback): void;
							getSettings(param0: com.zendesk.service.ZendeskCallback): void;
						});
						public getSettings(param0: com.zendesk.service.ZendeskCallback): void;
						public search(param0: javautilList, param1: javautilList, param2: string, param3: native.Array<string>, param4: com.zendesk.service.ZendeskCallback): void;
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
							initWithBundle(param0: androidosBundle): void;
							shouldShowConversationsMenuItem(): boolean;
							shouldShowSearchMenuItem(): boolean;
						});
						public onLoad(): void;
						public onErrorWithRetry(param0: com.zendesk.sdk.support.SupportMvp.ErrorType, param1: com.zendesk.sdk.network.RetryAction): void;
						public shouldShowConversationsMenuItem(): boolean;
						public shouldShowSearchMenuItem(): boolean;
						public onSearchSubmit(param0: string): void;
						public onResume(param0: com.zendesk.sdk.support.SupportMvp.View): void;
						public onPause(): void;
						public initWithBundle(param0: androidosBundle): void;
					}
					export class View {
						/**
						 * Constructs a new instance of the com.zendesk.sdk.support.SupportMvp$View interface with the provided implementation.
						 */
						public constructor(implementation: {
							showContactUsButton(): void;
							showHelp(param0: com.zendesk.sdk.support.SupportUiConfig): void;
							showSearchResults(param0: javautilList, param1: string): void;
							clearSearchResults(): void;
							showLoadingState(): void;
							hideLoadingState(): void;
							showRequestList(): void;
							showContactZendesk(): void;
							showErrorWithRetry(param0: com.zendesk.sdk.support.SupportMvp.ErrorType, param1: com.zendesk.sdk.network.RetryAction): void;
							showError(param0: number): void;
							dismissError(): void;
							getContext(): androidcontentContext;
							isShowingHelp(): boolean;
							exitActivity(): void;
						});
						public showSearchResults(param0: javautilList, param1: string): void;
						public showErrorWithRetry(param0: com.zendesk.sdk.support.SupportMvp.ErrorType, param1: com.zendesk.sdk.network.RetryAction): void;
						public dismissError(): void;
						public showLoadingState(): void;
						public hideLoadingState(): void;
						public showError(param0: number): void;
						public clearSearchResults(): void;
						public showRequestList(): void;
						public isShowingHelp(): boolean;
						public showContactUsButton(): void;
						public showContactZendesk(): void;
						public showHelp(param0: com.zendesk.sdk.support.SupportUiConfig): void;
						public getContext(): androidcontentContext;
						public exitActivity(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.zendesk.sdk.network.RetryAction.d.ts" />
/// <reference path="./com.zendesk.service.ErrorResponse.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module support {
				export class SupportPresenter {
					public onResume(param0: com.zendesk.sdk.support.SupportMvp.View): void;
					public onErrorWithRetry(param0: com.zendesk.sdk.support.SupportMvp.ErrorType, param1: com.zendesk.sdk.network.RetryAction): void;
					public shouldShowConversationsMenuItem(): boolean;
					public shouldShowSearchMenuItem(): boolean;
					public initWithBundle(param0: androidosBundle): void;
					public onNetworkAvailable(): void;
					public onLoad(): void;
					public onPause(): void;
					public onSearchSubmit(param0: string): void;
					public onNetworkUnavailable(): void;
				}
				export module SupportPresenter {
					export class ViewSafeRetryZendeskCallback {
						public onError(param0: com.zendesk.service.ErrorResponse): void;
						public onSuccess(param0: javautilList): void;
					}
				}
			}
		}
	}
}

import androidosParcel = android.os.Parcel;
import androidosParcelableCreator = android.os.Parcelable.Creator;
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module support {
				export class SupportUiConfig {
					public static CREATOR: androidosParcelableCreator;
					public getLabelNames(): native.Array<string>;
					public isAddListPaddingBottom(): boolean;
					public getCategoryIds(): javautilList;
					public getSectionIds(): javautilList;
					public constructor(param0: androidosParcel);
					public isCollapseCategories(): boolean;
					public describeContents(): number;
					public isShowConversationsMenuButton(): boolean;
					public writeToParcel(param0: androidosParcel, param1: number): void;
				}
				export module SupportUiConfig {
					export class Builder {
					}
				}
			}
		}
	}
}

import androidwidgetAdapterView = android.widget.AdapterView;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.AdapterView.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.Article.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.Attachment.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.SimpleArticle.d.ts" />
/// <reference path="./com.zendesk.sdk.ui.LoadingState.d.ts" />
/// <reference path="./com.zendesk.service.ErrorResponse.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module support {
				export class ViewArticleActivity extends com.zendesk.sdk.ui.NetworkAwareActionbarActivity {
					public static EXTRA_ARTICLE: string;
					public static EXTRA_SIMPLE_ARTICLE: string;
					public static startActivity(param0: androidcontentContext, param1: com.zendesk.sdk.model.helpcenter.Article): void;
					public constructor();
					public onPause(): void;
					public onCreate(param0: androidosBundle): void;
					public onItemClick(param0: androidwidgetAdapterView, param1: androidviewView, param2: number, param3: number): void;
					public onDestroy(): void;
					public static startActivity(param0: androidcontentContext, param1: com.zendesk.sdk.model.helpcenter.SimpleArticle): void;
					public onResume(): void;
					public onOptionsItemSelected(param0: androidviewMenuItem): boolean;
					public setLoadingState(param0: com.zendesk.sdk.ui.LoadingState): void;
				}
				export module ViewArticleActivity {
					export class ArticleAttachmentAdapter {
						public getView(param0: number, param1: androidviewView, param2: androidviewViewGroup): androidviewView;
						public constructor(param0: androidcontentContext, param1: javautilList);
					}
					export class ArticleAttachmentRow {
						public bind(param0: javalangObject): void;
						public getView(): androidviewView;
						public bind(param0: com.zendesk.sdk.model.helpcenter.Attachment): void;
						public constructor(param0: androidcontentContext);
					}
					export class AttachmentRequestCallback {
						public onError(param0: com.zendesk.service.ErrorResponse): void;
						public onSuccess(param0: javautilList): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.help.CategoryItem.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.help.HelpItem.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.help.SeeAllArticlesItem.d.ts" />
/// <reference path="./com.zendesk.sdk.network.NetworkInfoProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.support.SupportUiConfig.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module support {
				export module help {
					export class HelpAdapterPresenter {
						public onAttached(): void;
						public onDetached(): void;
						public getItemViewType(param0: number): number;
						public getItemForBinding(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpItem;
						public getItemCount(): number;
						public constructor(param0: com.zendesk.sdk.support.help.HelpMvp.View, param1: com.zendesk.sdk.support.help.HelpMvp.Model, param2: com.zendesk.sdk.network.NetworkInfoProvider, param3: com.zendesk.sdk.support.SupportUiConfig);
						public onSeeAllClick(param0: com.zendesk.sdk.model.helpcenter.help.SeeAllArticlesItem): void;
						public setContentPresenter(param0: com.zendesk.sdk.support.SupportMvp.Presenter): void;
						public onCategoryClick(param0: com.zendesk.sdk.model.helpcenter.help.CategoryItem, param1: number): boolean;
						public getItem(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpItem;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.help.SectionItem.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module support {
				export module help {
					export class HelpModel {
						public getArticlesForSection(param0: com.zendesk.sdk.model.helpcenter.help.SectionItem, param1: native.Array<string>, param2: com.zendesk.service.ZendeskCallback): void;
						public getArticles(param0: javautilList, param1: javautilList, param2: native.Array<string>, param3: com.zendesk.service.ZendeskCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.help.CategoryItem.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.help.HelpItem.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.help.SectionItem.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.help.SeeAllArticlesItem.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module support {
				export module help {
					export class HelpMvp {
						/**
						 * Constructs a new instance of the com.zendesk.sdk.support.help.HelpMvp interface with the provided implementation.
						 */
						public constructor(implementation: {
						});
					}
					export module HelpMvp {
						export class Model {
							/**
							 * Constructs a new instance of the com.zendesk.sdk.support.help.HelpMvp$Model interface with the provided implementation.
							 */
							public constructor(implementation: {
								getArticles(param0: javautilList, param1: javautilList, param2: native.Array<string>, param3: com.zendesk.service.ZendeskCallback): void;
								getArticlesForSection(param0: com.zendesk.sdk.model.helpcenter.help.SectionItem, param1: native.Array<string>, param2: com.zendesk.service.ZendeskCallback): void;
							});
							public getArticles(param0: javautilList, param1: javautilList, param2: native.Array<string>, param3: com.zendesk.service.ZendeskCallback): void;
							public getArticlesForSection(param0: com.zendesk.sdk.model.helpcenter.help.SectionItem, param1: native.Array<string>, param2: com.zendesk.service.ZendeskCallback): void;
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
							public onAttached(): void;
							public getItemViewType(param0: number): number;
							public getItemCount(): number;
							public onCategoryClick(param0: com.zendesk.sdk.model.helpcenter.help.CategoryItem, param1: number): boolean;
							public setContentPresenter(param0: com.zendesk.sdk.support.SupportMvp.Presenter): void;
							public onSeeAllClick(param0: com.zendesk.sdk.model.helpcenter.help.SeeAllArticlesItem): void;
							public onDetached(): void;
							public getItemForBinding(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpItem;
							public getItem(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpItem;
						}
						export class View {
							/**
							 * Constructs a new instance of the com.zendesk.sdk.support.help.HelpMvp$View interface with the provided implementation.
							 */
							public constructor(implementation: {
								showItems(param0: javautilList): void;
								addItem(param0: number, param1: com.zendesk.sdk.model.helpcenter.help.HelpItem): void;
								removeItem(param0: number): void;
							});
							public addItem(param0: number, param1: com.zendesk.sdk.model.helpcenter.help.HelpItem): void;
							public removeItem(param0: number): void;
							public showItems(param0: javautilList): void;
						}
					}
				}
			}
		}
	}
}

import androidsupportv7widgetRecyclerView = android.support.v7.widget.RecyclerView;
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.help.HelpItem.d.ts" />
/// <reference path="./com.zendesk.sdk.support.SupportUiConfig.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module support {
				export module help {
					export class HelpRecyclerViewAdapter {
						public onDetachedFromRecyclerView(param0: androidsupportv7widgetRecyclerView): void;
						public constructor(param0: com.zendesk.sdk.support.SupportUiConfig);
						public getItemViewType(param0: number): number;
						public getItemCount(): number;
						public onCreateViewHolder(param0: androidviewViewGroup, param1: number): com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder;
						public addItem(param0: number, param1: com.zendesk.sdk.model.helpcenter.help.HelpItem): void;
						public showItems(param0: javautilList): void;
						public removeItem(param0: number): void;
						public onAttachedToRecyclerView(param0: androidsupportv7widgetRecyclerView): void;
						public onBindViewHolder(param0: com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder, param1: number): void;
					}
					export module HelpRecyclerViewAdapter {
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

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module support {
				export module help {
					export class HelpSearchFragment {
						public constructor();
						public onCreate(param0: androidosBundle): void;
						public onCreateView(param0: androidviewLayoutInflater, param1: androidviewViewGroup, param2: androidosBundle): androidviewView;
						public updateResults(param0: javautilList, param1: string): void;
						public clearResults(): void;
						public static newInstance(param0: boolean): com.zendesk.sdk.support.help.HelpSearchFragment;
					}
				}
			}
		}
	}
}

import androidsupportv7widgetRecyclerViewViewHolder = android.support.v7.widget.RecyclerView.ViewHolder;
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module support {
				export module help {
					export class HelpSearchRecyclerViewAdapter {
						public onCreateViewHolder(param0: androidviewViewGroup, param1: number): androidsupportv7widgetRecyclerViewViewHolder;
						public getItemViewType(param0: number): number;
						public onBindViewHolder(param0: androidsupportv7widgetRecyclerViewViewHolder, param1: number): void;
						public getItemCount(): number;
					}
					export module HelpSearchRecyclerViewAdapter {
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

import androidgraphicsCanvas = android.graphics.Canvas;
import androidsupportv7widgetRecyclerViewState = android.support.v7.widget.RecyclerView.State;
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module support {
				export module help {
					export class SeparatorDecoration {
						public onDrawOver(param0: androidgraphicsCanvas, param1: androidsupportv7widgetRecyclerView, param2: androidsupportv7widgetRecyclerViewState): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.zendesk.sdk.support.SupportUiConfig.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module support {
				export module help {
					export class SupportHelpFragment {
						public static LOG_TAG: string;
						public constructor();
						public onCreate(param0: androidosBundle): void;
						public onCreateView(param0: androidviewLayoutInflater, param1: androidviewViewGroup, param2: androidosBundle): androidviewView;
						public setPresenter(param0: com.zendesk.sdk.support.SupportMvp.Presenter): void;
						public static newInstance(param0: com.zendesk.sdk.support.SupportUiConfig): com.zendesk.sdk.support.help.SupportHelpFragment;
					}
				}
			}
		}
	}
}

import androidviewanimationAnimation = android.view.animation.Animation;
/// <reference path="./android.view.animation.Animation.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module ui {
				export class AnimationListenerAdapter {
					public onAnimationRepeat(param0: androidviewanimationAnimation): void;
					public onAnimationEnd(param0: androidviewanimationAnimation): void;
					public onAnimationStart(param0: androidviewanimationAnimation): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module ui {
				export class EmailAddressAutoCompleteTextView {
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
					public constructor(param0: androidcontentContext);
					public isInputValid(): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module ui {
				export class ListRowView {
					/**
					 * Constructs a new instance of the com.zendesk.sdk.ui.ListRowView interface with the provided implementation.
					 */
					public constructor(implementation: {
						bind(param0: javalangObject): void;
						getView(): androidviewView;
					});
					public getView(): androidviewView;
					public bind(param0: javalangObject): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module ui {
				export class LoadingState {
					public static LOADING: com.zendesk.sdk.ui.LoadingState;
					public static DISPLAYING: com.zendesk.sdk.ui.LoadingState;
					public static ERRORED: com.zendesk.sdk.ui.LoadingState;
					public static valueOf(param0: string): com.zendesk.sdk.ui.LoadingState;
					public static values(): native.Array<com.zendesk.sdk.ui.LoadingState>;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module ui {
				export abstract class NetworkAwareActionbarActivity {
					public mNetworkAvailable: boolean;
					public onRetryAvailable(param0: string, param1: androidviewViewOnClickListener): void;
					public constructor();
					public onNetworkAvailable(): void;
					public onPause(): void;
					public onCreate(param0: androidosBundle): void;
					public onRetryUnavailable(): void;
					public onNetworkUnavailable(): void;
					public onResume(): void;
				}
				export module NetworkAwareActionbarActivity {
					export class NetworkAvailabilityBroadcastReceiver {
						public onReceive(param0: androidcontentContext, param1: androidcontentIntent): void;
					}
				}
			}
		}
	}
}

import androidtextEditable = android.text.Editable;
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module ui {
				export abstract class TextWatcherAdapter {
					public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public afterTextChanged(param0: androidtextEditable): void;
					public constructor();
					public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				}
			}
		}
	}
}

import androidsupportv7appAppCompatActivity = android.support.v7.app.AppCompatActivity;
/// <reference path="./android.support.v7.app.AppCompatActivity.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module ui {
				export class ToolbarSherlock {
					public constructor();
					public static installToolBar(param0: androidsupportv7appAppCompatActivity): void;
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module ui {
				export class ZendeskDialog {
					public onStart(): void;
					public constructor();
					public onCreate(param0: androidosBundle): void;
				}
			}
		}
	}
}

import androidgraphicsBitmap = android.graphics.Bitmap;
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.squareup.picasso.Transformation.d.ts" />
/// <reference path="./com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module ui {
				export class ZendeskPicassoTransformationFactory {
					public static INSTANCE: com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory;
					public getRoundedTransformation(param0: number, param1: number): com.squareup.picasso.Transformation;
					public getResizeTransformationHeight(param0: number): com.squareup.picasso.Transformation;
					public static valueOf(param0: string): com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory;
					public getResizeTransformationWidth(param0: number): com.squareup.picasso.Transformation;
					public static values(): native.Array<com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory>;
				}
				export module ZendeskPicassoTransformationFactory {
					export class ResizeTransformHeight {
						public transform(param0: androidgraphicsBitmap): androidgraphicsBitmap;
						public constructor(param0: com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory, param1: number);
						public key(): string;
					}
					export class ResizeTransformWidth {
						public transform(param0: androidgraphicsBitmap): androidgraphicsBitmap;
						public constructor(param0: com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory, param1: number);
						public key(): string;
					}
					export class RoundedTransformation {
						public constructor(param0: com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory, param1: number, param2: number);
						public transform(param0: androidgraphicsBitmap): androidgraphicsBitmap;
						public key(): string;
					}
				}
			}
		}
	}
}

import androidutilDisplayMetrics = android.util.DisplayMetrics;
import androidappActivity = android.app.Activity;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module zendesk {
		export module sdk {
			export module util {
				export class UiUtils {
					public static spToPixels(param0: number, param1: androidutilDisplayMetrics): number;
					public static themeAttributeToPixels(param0: number, param1: androidcontentContext, param2: number, param3: number): number;
					public static getScreenSize(param0: androidcontentContext): com.zendesk.sdk.util.UiUtils.ScreenSize;
					public static dpToPixels(param0: number, param1: androidutilDisplayMetrics): number;
					public static setVisibility(param0: androidviewView, param1: number): void;
					public static isTablet(param0: androidcontentContext): boolean;
					public static sizeDialogWidthForTablets(param0: androidappDialog, param1: number): void;
					public static setThemeIfAttributesAreMissing(param0: androidappActivity, param1: native.Array<number>): void;
					public static themeAttributeToColor(param0: number, param1: androidcontentContext, param2: number): number;
					public static dismissKeyboard(param0: androidappActivity): void;
				}
				export module UiUtils {
					export class ScreenSize {
						public static UNKNOWN: com.zendesk.sdk.util.UiUtils.ScreenSize;
						public static UNDEFINED: com.zendesk.sdk.util.UiUtils.ScreenSize;
						public static X_LARGE: com.zendesk.sdk.util.UiUtils.ScreenSize;
						public static LARGE: com.zendesk.sdk.util.UiUtils.ScreenSize;
						public static NORMAL: com.zendesk.sdk.util.UiUtils.ScreenSize;
						public static SMALL: com.zendesk.sdk.util.UiUtils.ScreenSize;
						public static values(): native.Array<com.zendesk.sdk.util.UiUtils.ScreenSize>;
						public static valueOf(param0: string): com.zendesk.sdk.util.UiUtils.ScreenSize;
					}
				}
			}
		}
	}
}

