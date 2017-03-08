/// <reference path="./_helpers.d.ts" />
/// <reference path="../node_modules/tns-platform-declarations/android.d.ts" />

import androidsupportv4appFragmentManager = android.support.v4.app.FragmentManager;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.support.v4.app.FragmentManager.d.ts" />
/// <reference path="./com.zendesk.belvedere.BelvedereCallback.d.ts" />
/// <reference path="./com.zendesk.belvedere.BelvedereResult.d.ts" />
/// <reference path="./com.zendesk.belvedere.BelvedereSource.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module belvedere {
            export class Belvedere extends java.lang.Object {
                public oneOrMoreSourceAvailable(): boolean;

                public getFilesFromActivityOnResult(
                        param0: number,
                        param1: number,
                        param2: android.content.Intent,
                        param3: com.zendesk.belvedere.BelvedereCallback): void;

                public showDialog(param0: androidsupportv4appFragmentManager): void;

                public getBelvedereIntents(): java.util.List<any>;

                public getFileRepresentation(param0: string): com.zendesk.belvedere.BelvedereResult;

                public grantPermissionsForUri(
                        param0: android.content.Intent,
                        param1: android.net.Uri): void;

                public isFunctionalityAvailable(param0: com.zendesk.belvedere.BelvedereSource): boolean;

                public clear(): void;

                public revokePermissionsForUri(param0: android.net.Uri): void;

                public static from(param0: android.content.Context): com.zendesk.belvedere.BelvedereConfig.Builder;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
    export module zendesk {
        export module belvedere {
            export abstract class BelvedereCallback extends java.lang.Object {
                public success(param0: java.lang.Object): void;

                public cancel(): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./com.zendesk.belvedere.Belvedere.d.ts" />
/// <reference path="./com.zendesk.belvedere.BelvedereLogger.d.ts" />
/// <reference path="./com.zendesk.belvedere.BelvedereSource.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module belvedere {
            export class BelvedereConfig extends java.lang.Object {
            }
            export module BelvedereConfig {
                export class Builder extends java.lang.Object {
                    public build(): com.zendesk.belvedere.Belvedere;

                    public withCameraRequestCode(
                            param0: number,
                            param1: number): com.zendesk.belvedere.BelvedereConfig.Builder;

                    public withGalleryRequestCode(param0: number): com.zendesk.belvedere.BelvedereConfig.Builder;

                    public withCustomLogger(param0: com.zendesk.belvedere.BelvedereLogger): com.zendesk.belvedere.BelvedereConfig.Builder;

                    public withSource(param0: native.Array<com.zendesk.belvedere.BelvedereSource>): com.zendesk.belvedere.BelvedereConfig.Builder;

                    public withAllowMultiple(param0: boolean): com.zendesk.belvedere.BelvedereConfig.Builder;

                    public withContentType(param0: string): com.zendesk.belvedere.BelvedereConfig.Builder;

                    public withDebug(param0: boolean): com.zendesk.belvedere.BelvedereConfig.Builder;
                }
            }
        }
    }
}

import androidviewLayoutInflater = android.view.LayoutInflater;
import androidviewViewGroup = android.view.ViewGroup;
import androidosBundle = android.os.Bundle;
import androidviewView = android.view.View;
import androidwidgetArrayAdapter = android.widget.ArrayAdapter;
import androidwidgetFilter = android.widget.Filter;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.app.FragmentManager.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./com.zendesk.belvedere.BelvedereIntent.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module belvedere {
            export class BelvedereDialog {
                public onCreate(param0: androidosBundle): void;

                public onActivityCreated(param0: androidosBundle): void;

                public onCreateView(
                        param0: androidviewLayoutInflater,
                        param1: androidviewViewGroup,
                        param2: androidosBundle): androidviewView;

                public static showDialog(
                        param0: androidsupportv4appFragmentManager,
                        param1: java.util.List<any>): void;

                public constructor();
            }
            export module BelvedereDialog {
                export class Adapter extends androidwidgetArrayAdapter<any> {
                    public areAllItemsEnabled(): boolean;

                    public getDropDownView(
                            param0: number,
                            param1: androidviewView,
                            param2: androidviewViewGroup): androidviewView;

                    public isEnabled(param0: number): boolean;

                    public getView(
                            param0: number,
                            param1: androidviewView,
                            param2: androidviewViewGroup): androidviewView;

                    public getFilter(): androidwidgetFilter;
                }
                export class AttachmentSource extends java.lang.Object {
                    public getDrawable(): number;

                    public getText(): string;

                    public static from(
                            param0: com.zendesk.belvedere.BelvedereIntent,
                            param1: android.content.Context): com.zendesk.belvedere.BelvedereDialog.AttachmentSource;
                }
                export class StartActivity extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.belvedere.BelvedereDialog$StartActivity interface
                     * with the provided implementation.
                     */
                    public constructor(
                            implementation: {
                                startActivity(param0: com.zendesk.belvedere.BelvedereIntent): void;
                                getContext(): android.content.Context;
                            });

                    public startActivity(param0: com.zendesk.belvedere.BelvedereIntent): void;

                    public getContext(): android.content.Context;
                }
            }
        }
    }
}

import androiddatabaseCursor = android.database.Cursor;
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module belvedere {
            export class BelvedereFileProvider {
                public constructor();

                public query(
                        param0: android.net.Uri,
                        param1: native.Array<string>,
                        param2: string,
                        param3: native.Array<string>,
                        param4: string): androiddatabaseCursor;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.zendesk.belvedere.BelvedereSource.d.ts" />
declare module com {
    export module zendesk {
        export module belvedere {
            export class BelvedereImagePicker extends java.lang.Object {
                public isFunctionalityAvailable(
                        param0: com.zendesk.belvedere.BelvedereSource,
                        param1: android.content.Context): boolean;

                public oneOrMoreSourceAvailable(param0: android.content.Context): boolean;
            }
        }
    }
}

import androidosParcelable = android.os.Parcelable;
import androidappActivity = android.app.Activity;
import androidsupportv4appFragment = android.support.v4.app.Fragment;
import androidosParcel = android.os.Parcel;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./com.zendesk.belvedere.BelvedereSource.d.ts" />
declare module com {
    export module zendesk {
        export module belvedere {
            export class BelvedereIntent extends java.lang.Object implements androidosParcelable {
                public static CREATOR: android.os.Parcelable.Creator<any>;

                public writeToParcel(
                        param0: androidosParcel,
                        param1: number): void;

                public open(param0: androidsupportv4appFragment): void;

                public getIntent(): android.content.Intent;

                public constructor(
                        param0: android.content.Intent,
                        param1: number,
                        param2: com.zendesk.belvedere.BelvedereSource);

                public getSource(): com.zendesk.belvedere.BelvedereSource;

                public describeContents(): number;

                public getRequestCode(): number;

                public open(param0: androidappActivity): void;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
    export module zendesk {
        export module belvedere {
            export class BelvedereLogger extends java.lang.Object {
                /**
                 * Constructs a new instance of the com.zendesk.belvedere.BelvedereLogger interface with the provided
                 * implementation.
                 */
                public constructor(
                        implementation: {
                            d(
                                    param0: string,
                                    param1: string): void;
                            w(
                                    param0: string,
                                    param1: string): void;
                            e(
                                    param0: string,
                                    param1: string): void;
                            e(
                                    param0: string,
                                    param1: string,
                                    param2: java.lang.Throwable): void;
                            setLoggable(param0: boolean): void;
                        });

                public setLoggable(param0: boolean): void;

                public w(
                        param0: string,
                        param1: string): void;

                public e(
                        param0: string,
                        param1: string): void;

                public d(
                        param0: string,
                        param1: string): void;

                public e(
                        param0: string,
                        param1: string,
                        param2: java.lang.Throwable): void;
            }
        }
    }
}

import androidosAsyncTask = android.os.AsyncTask;
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module belvedere {
            export class BelvedereResolveUriTask extends androidosAsyncTask<any, any, any> {
                public doInBackground(param0: native.Array<java.lang.Object>): java.lang.Object;

                public onPostExecute(param0: java.util.List<any>): void;
                public onPostExecute(param0: java.lang.Object): void;

                public doInBackground(param0: native.Array<android.net.Uri>): java.util.List<any>;
            }
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.io.File.d.ts" />
declare module com {
    export module zendesk {
        export module belvedere {
            export class BelvedereResult extends java.lang.Object implements androidosParcelable {
                public static CREATOR: android.os.Parcelable.Creator<any>;

                public writeToParcel(
                        param0: androidosParcel,
                        param1: number): void;

                public getFile(): java.io.File;

                public getUri(): android.net.Uri;

                public constructor(
                        param0: java.io.File,
                        param1: android.net.Uri);

                public describeContents(): number;
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module belvedere {
            export class BelvedereSource extends java.lang.Enum<any> {
                public static Camera: com.zendesk.belvedere.BelvedereSource;
                public static Gallery: com.zendesk.belvedere.BelvedereSource;

                public static valueOf(param0: string): com.zendesk.belvedere.BelvedereSource;

                public static values(): native.Array<com.zendesk.belvedere.BelvedereSource>;

                public static valueOf(
                        param0: java.lang.Class<any>,
                        param1: string): java.lang.Enum<any>;
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
    export module zendesk {
        export module belvedere {
            export class BelvedereStorage extends java.lang.Object {
            }
            export module BelvedereStorage {
                export class IntentPermissions extends java.lang.Object implements java.lang.annotation.Annotation {
                    /**
                     * Constructs a new instance of the com.zendesk.belvedere.BelvedereStorage$IntentPermissions
                     * interface with the provided implementation.
                     */
                    public constructor(
                            implementation: {
                                annotationType(): java.lang.Class<any>;
                                equals(param0: java.lang.Object): boolean;
                                hashCode(): number;
                                toString(): string;
                            });

                    public toString(): string;

                    public equals(param0: java.lang.Object): boolean;

                    public annotationType(): java.lang.Class<any>;

                    public hashCode(): number;
                }
            }
        }
    }
}

declare module com {
    export module zendesk {
        export module belvedere {
            export class BuildConfig extends java.lang.Object {
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

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
    export module zendesk {
        export module belvedere {
            export class DefaultLogger extends java.lang.Object implements com.zendesk.belvedere.BelvedereLogger {
                public setLoggable(param0: boolean): void;

                public w(
                        param0: string,
                        param1: string): void;

                public e(
                        param0: string,
                        param1: string): void;

                public d(
                        param0: string,
                        param1: string): void;

                public e(
                        param0: string,
                        param1: string,
                        param2: java.lang.Throwable): void;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare module com {
    export module zendesk {
        export module collection {
            export class CountedSet extends java.lang.Object implements java.util.Set<any> {
                public static NOT_FOUND: number;

                public remove(param0: java.lang.Object): boolean;

                public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;

                public containsAll(param0: java.util.Collection<any>): boolean;

                public retainAll(param0: java.util.Collection<any>): boolean;

                public constructor();

                public size(): number;

                public iterator(): java.util.Iterator<any>;

                public add(param0: java.lang.Object): boolean;

                public removeAll(param0: java.util.Collection<any>): boolean;

                public toArray(): native.Array<java.lang.Object>;

                public equals(param0: java.lang.Object): boolean;

                public addAll(param0: java.util.Collection<any>): boolean;

                public hashCode(): number;

                public getCount(param0: java.lang.Object): number;

                public clear(): void;

                public constructor(param0: number);

                public isEmpty(): boolean;

                public contains(param0: java.lang.Object): boolean;
            }
        }
    }
}

/// <reference path="./com.zendesk.service.ErrorResponse.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
    export module zendesk {
        export module logger {
            export class Logger extends java.lang.Object {
                public static w(
                        param0: string,
                        param1: string,
                        param2: native.Array<java.lang.Object>): void;

                public static i(
                        param0: string,
                        param1: string,
                        param2: native.Array<java.lang.Object>): void;

                public static d(
                        param0: string,
                        param1: string,
                        param2: java.lang.Throwable,
                        param3: native.Array<java.lang.Object>): void;

                public static v(
                        param0: string,
                        param1: string,
                        param2: native.Array<java.lang.Object>): void;

                public static e(
                        param0: string,
                        param1: com.zendesk.service.ErrorResponse): void;

                public static i(
                        param0: string,
                        param1: string,
                        param2: java.lang.Throwable,
                        param3: native.Array<java.lang.Object>): void;

                public static e(
                        param0: string,
                        param1: string,
                        param2: java.lang.Throwable,
                        param3: native.Array<java.lang.Object>): void;

                public static w(
                        param0: string,
                        param1: string,
                        param2: java.lang.Throwable,
                        param3: native.Array<java.lang.Object>): void;

                public static isLoggable(): boolean;

                public static v(
                        param0: string,
                        param1: string,
                        param2: java.lang.Throwable,
                        param3: native.Array<java.lang.Object>): void;

                public static setLoggable(param0: boolean): void;

                public static e(
                        param0: string,
                        param1: string,
                        param2: native.Array<java.lang.Object>): void;

                public static d(
                        param0: string,
                        param1: string,
                        param2: native.Array<java.lang.Object>): void;
            }
            export module Logger {
                export class Android extends java.lang.Object implements com.zendesk.logger.Logger.Platform {
                    public appendUtcInLogs(param0: string): boolean;

                    public log(
                            param0: com.zendesk.logger.Logger.Priority,
                            param1: string,
                            param2: string,
                            param3: java.lang.Throwable): void;
                }
                export class Java extends java.lang.Object implements com.zendesk.logger.Logger.Platform {
                    public appendUtcInLogs(param0: string): boolean;

                    public log(
                            param0: com.zendesk.logger.Logger.Priority,
                            param1: string,
                            param2: string,
                            param3: java.lang.Throwable): void;
                }
                export class Platform extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.logger.Logger$Platform interface with the provided
                     * implementation.
                     */
                    public constructor(
                            implementation: {
                                appendUtcInLogs(param0: string): boolean;
                                log(
                                        param0: com.zendesk.logger.Logger.Priority,
                                        param1: string,
                                        param2: string,
                                        param3: java.lang.Throwable): void;
                            });

                    public appendUtcInLogs(param0: string): boolean;

                    public log(
                            param0: com.zendesk.logger.Logger.Priority,
                            param1: string,
                            param2: string,
                            param3: java.lang.Throwable): void;
                }
                export class Priority extends java.lang.Enum<any> {
                    public static VERBOSE: com.zendesk.logger.Logger.Priority;
                    public static DEBUG: com.zendesk.logger.Logger.Priority;
                    public static INFO: com.zendesk.logger.Logger.Priority;
                    public static WARN: com.zendesk.logger.Logger.Priority;
                    public static ERROR: com.zendesk.logger.Logger.Priority;

                    public static valueOf(param0: string): com.zendesk.logger.Logger.Priority;
                    public static valueOf(
                            param0: java.lang.Class<any>,
                            param1: string): java.lang.Enum<any>;

                    public static values(): native.Array<com.zendesk.logger.Logger.Priority>;
                }
            }
        }
    }
}

declare module com {
    export module zendesk {
        export module logger {
            export class LoggerHelper extends java.lang.Object {
            }
        }
    }
}

declare module com {
    export module zendesk {
        export module sdk {
            export class BuildConfig extends java.lang.Object {
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
                export class AttachmentHelper extends java.lang.Object {
                    public static isFileEligibleForUpload(
                            param0: java.io.File,
                            param1: com.zendesk.sdk.model.settings.SafeMobileSettings): boolean;

                    public static processAndUploadSelectedFiles(
                            param0: java.util.List<any>,
                            param1: com.zendesk.sdk.attachment.ImageUploadHelper,
                            param2: android.content.Context,
                            param3: com.zendesk.sdk.feedback.ui.AttachmentContainerHost,
                            param4: com.zendesk.sdk.model.settings.SafeMobileSettings): void;

                    public constructor();

                    public static showAttachmentTryAgainDialog(
                            param0: android.content.Context,
                            param1: com.zendesk.belvedere.BelvedereResult,
                            param2: com.zendesk.service.ErrorResponse,
                            param3: com.zendesk.sdk.attachment.ImageUploadHelper,
                            param4: com.zendesk.sdk.feedback.ui.AttachmentContainerHost): void;

                    public static isAttachmentSupportEnabled(param0: com.zendesk.sdk.model.settings.SafeMobileSettings): boolean;
                }
            }
        }
    }
}

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
                export class ImageUploadHelper extends java.lang.Object {
                    public constructor(
                            param0: com.zendesk.sdk.attachment.ImageUploadHelper.ImageUploadProgressListener,
                            param1: com.zendesk.sdk.network.UploadProvider);

                    public uploadImage(
                            param0: com.zendesk.belvedere.BelvedereResult,
                            param1: string): void;

                    public reset(): void;

                    public getUploadedAttachments(): java.util.List<any>;

                    public setImageUploadProgressListener(param0: com.zendesk.sdk.attachment.ImageUploadHelper.ImageUploadProgressListener): void;

                    public removeDuplicateFilesFromList(param0: java.util.List<any>): java.util.List<any>;

                    public deleteAllAttachmentsBeforeShutdown(): void;

                    public isImageUploadCompleted(): boolean;

                    public removeImage(param0: java.io.File): void;

                    public getRecentState(): java.util.HashMap<any,any>;

                    public getUploadTokens(): java.util.List<any>;
                }
                export module ImageUploadHelper {
                    export class ImageUploadProgressListener extends java.lang.Object {
                        /**
                         * Constructs a new instance of the
                         * com.zendesk.sdk.attachment.ImageUploadHelper$ImageUploadProgressListener interface with the
                         * provided implementation.
                         */
                        public constructor(
                                implementation: {
                                    allImagesUploaded(param0: java.util.Map<any,any>): void;
                                    imageUploaded(
                                            param0: com.zendesk.sdk.model.request.UploadResponse,
                                            param1: com.zendesk.belvedere.BelvedereResult): void;
                                    imageUploadError(
                                            param0: com.zendesk.service.ErrorResponse,
                                            param1: com.zendesk.belvedere.BelvedereResult): void;
                                });

                        public imageUploadError(
                                param0: com.zendesk.service.ErrorResponse,
                                param1: com.zendesk.belvedere.BelvedereResult): void;

                        public imageUploaded(
                                param0: com.zendesk.sdk.model.request.UploadResponse,
                                param1: com.zendesk.belvedere.BelvedereResult): void;

                        public allImagesUploaded(param0: java.util.Map<any,any>): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.zendesk.belvedere.Belvedere.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module attachment {
                export class ZendeskBelvedereProvider extends java.lang.Enum<any> {
                    public static INSTANCE: com.zendesk.sdk.attachment.ZendeskBelvedereProvider;

                    public getBelvedere(param0: android.content.Context): com.zendesk.belvedere.Belvedere;

                    public static valueOf(param0: string): com.zendesk.sdk.attachment.ZendeskBelvedereProvider;

                    public static values(): native.Array<com.zendesk.sdk.attachment.ZendeskBelvedereProvider>;

                    public static valueOf(
                            param0: java.lang.Class<any>,
                            param1: string): java.lang.Enum<any>;
                }
                export module ZendeskBelvedereProvider {
                    export class BelvedereZendeskLogger extends java.lang.Object implements com.zendesk.belvedere.BelvedereLogger {
                        public w(
                                param0: string,
                                param1: string): void;

                        public setLoggable(param0: boolean): void;

                        public e(
                                param0: string,
                                param1: string): void;

                        public d(
                                param0: string,
                                param1: string): void;

                        public e(
                                param0: string,
                                param1: string,
                                param2: java.lang.Throwable): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.zendesk.sdk.deeplinking.actions.Action.d.ts" />
/// <reference path="./com.zendesk.sdk.deeplinking.actions.ActionHandler.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.Article.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.SimpleArticle.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module deeplinking {
                export class ZendeskDeepLinking extends java.lang.Enum<any> {
                    public static INSTANCE: com.zendesk.sdk.deeplinking.ZendeskDeepLinking;

                    public getRequestIntent(
                            param0: android.content.Context,
                            param1: string,
                            param2: string,
                            param3: java.util.ArrayList<any>,
                            param4: android.content.Intent,
                            param5: string,
                            param6: string,
                            param7: string): android.content.Intent;

                    public unregisterAction(param0: com.zendesk.sdk.deeplinking.actions.ActionHandler): void;

                    public getArticleIntent(
                            param0: android.content.Context,
                            param1: com.zendesk.sdk.model.helpcenter.SimpleArticle,
                            param2: java.util.ArrayList<any>,
                            param3: android.content.Intent,
                            param4: string,
                            param5: string,
                            param6: string): android.content.Intent;
                    public getArticleIntent(
                            param0: android.content.Context,
                            param1: com.zendesk.sdk.model.helpcenter.Article,
                            param2: java.util.ArrayList<any>,
                            param3: android.content.Intent): android.content.Intent;
                    public getArticleIntent(
                            param0: android.content.Context,
                            param1: com.zendesk.sdk.model.helpcenter.Article,
                            param2: java.util.ArrayList<any>,
                            param3: android.content.Intent,
                            param4: string,
                            param5: string,
                            param6: string): android.content.Intent;

                    public static valueOf(param0: string): com.zendesk.sdk.deeplinking.ZendeskDeepLinking;

                    public registerAction(
                            param0: com.zendesk.sdk.deeplinking.actions.ActionHandler,
                            param1: native.Array<com.zendesk.sdk.deeplinking.actions.Action>): void;

                    public static valueOf(
                            param0: java.lang.Class<any>,
                            param1: string): java.lang.Enum<any>;

                    public getRequestIntent(
                            param0: android.content.Context,
                            param1: string,
                            param2: string,
                            param3: java.util.ArrayList<any>,
                            param4: android.content.Intent): android.content.Intent;

                    public refreshComments(param0: string): boolean;

                    public static values(): native.Array<com.zendesk.sdk.deeplinking.ZendeskDeepLinking>;

                    public getArticleIntent(
                            param0: android.content.Context,
                            param1: com.zendesk.sdk.model.helpcenter.SimpleArticle,
                            param2: java.util.ArrayList<any>,
                            param3: android.content.Intent): android.content.Intent;
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
                export class ZendeskDeepLinkingBroadcastReceiver extends android.content.BroadcastReceiver {
                    public onReceive(
                            param0: android.content.Context,
                            param1: android.content.Intent): void;

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
                export class ZendeskDeepLinkingParser extends java.lang.Object {
                    public parse(
                            param0: string,
                            param1: android.content.Context): android.content.Intent;

                    public constructor();
                }
                export module ZendeskDeepLinkingParser {
                    export class DefaultParser extends java.lang.Object implements com.zendesk.sdk.deeplinking.ZendeskDeepLinkingParser.ZendeskDeepLinkParserModule {
                        public parse(
                                param0: string,
                                param1: android.content.Context): android.content.Intent;
                    }
                    export class HelpCenterParser extends java.lang.Object implements com.zendesk.sdk.deeplinking.ZendeskDeepLinkingParser.ZendeskDeepLinkParserModule {
                        public parse(
                                param0: string,
                                param1: android.content.Context): android.content.Intent;
                    }
                    export class HttpParser extends java.lang.Object implements com.zendesk.sdk.deeplinking.ZendeskDeepLinkingParser.ZendeskDeepLinkParserModule {
                        public parse(
                                param0: string,
                                param1: android.content.Context): android.content.Intent;
                    }
                    export class MailParser extends java.lang.Object implements com.zendesk.sdk.deeplinking.ZendeskDeepLinkingParser.ZendeskDeepLinkParserModule {
                        public parse(
                                param0: string,
                                param1: android.content.Context): android.content.Intent;
                    }
                    export class ZendeskDeepLinkParserModule extends java.lang.Object {
                        /**
                         * Constructs a new instance of the
                         * com.zendesk.sdk.deeplinking.ZendeskDeepLinkingParser$ZendeskDeepLinkParserModule interface
                         * with the provided implementation.
                         */
                        public constructor(
                                implementation: {
                                    parse(
                                            param0: string,
                                            param1: android.content.Context): android.content.Intent;
                                });

                        public parse(
                                param0: string,
                                param1: android.content.Context): android.content.Intent;
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
                    export abstract class Action extends java.lang.Object {
                        public execute(
                                param0: com.zendesk.sdk.deeplinking.actions.ActionHandler,
                                param1: com.zendesk.sdk.deeplinking.actions.ActionData): void;

                        public getActionData(): com.zendesk.sdk.deeplinking.actions.ActionData;

                        public constructor(
                                param0: com.zendesk.sdk.deeplinking.actions.ActionType,
                                param1: com.zendesk.sdk.deeplinking.actions.ActionData);

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
                    export class ActionData extends java.lang.Object {
                        /**
                         * Constructs a new instance of the com.zendesk.sdk.deeplinking.actions.ActionData interface
                         * with the provided implementation.
                         */
                        public constructor(implementation: {});
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
                    export class ActionHandler extends java.lang.Object {
                        /**
                         * Constructs a new instance of the com.zendesk.sdk.deeplinking.actions.ActionHandler interface
                         * with the provided implementation.
                         */
                        public constructor(implementation: {});
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
                        public execute(
                                param0: com.zendesk.sdk.deeplinking.actions.ActionHandler,
                                param1: com.zendesk.sdk.deeplinking.actions.ActionData): void;

                        public canHandleData(param0: com.zendesk.sdk.deeplinking.actions.ActionRefreshComments.ActionRefreshCommentsData): boolean;

                        public constructor(
                                param0: com.zendesk.sdk.deeplinking.actions.ActionType,
                                param1: com.zendesk.sdk.deeplinking.actions.ActionData);

                        public execute(
                                param0: com.zendesk.sdk.deeplinking.actions.ActionRefreshComments.ActionRefreshCommentsListener,
                                param1: com.zendesk.sdk.deeplinking.actions.ActionRefreshComments.ActionRefreshCommentsData): void;

                        public canHandleData(param0: com.zendesk.sdk.deeplinking.actions.ActionData): boolean;

                        public constructor(param0: string);
                    }
                    export module ActionRefreshComments {
                        export class ActionRefreshCommentsData extends java.lang.Object implements com.zendesk.sdk.deeplinking.actions.ActionData {
                            public getRequestId(): string;

                            public constructor(param0: string);
                        }
                        export class ActionRefreshCommentsListener extends java.lang.Object implements com.zendesk.sdk.deeplinking.actions.ActionHandler {
                            /**
                             * Constructs a new instance of the
                             * com.zendesk.sdk.deeplinking.actions.ActionRefreshComments$ActionRefreshCommentsListener
                             * interface with the provided implementation.
                             */
                            public constructor(
                                    implementation: {
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

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module deeplinking {
                export module actions {
                    export class ActionType extends java.lang.Enum<any> {
                        public static RELOAD_COMMENT_STREAM: com.zendesk.sdk.deeplinking.actions.ActionType;

                        public static values(): native.Array<com.zendesk.sdk.deeplinking.actions.ActionType>;

                        public static valueOf(
                                param0: java.lang.Class<any>,
                                param1: string): java.lang.Enum<any>;
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

                        public constructor(
                                param0: com.zendesk.sdk.model.helpcenter.Article,
                                param1: java.util.ArrayList<any>,
                                param2: android.content.Intent);
                        public constructor(
                                param0: com.zendesk.sdk.model.helpcenter.SimpleArticle,
                                param1: java.util.ArrayList<any>,
                                param2: android.content.Intent);

                        public getSimpleArticle(): com.zendesk.sdk.model.helpcenter.SimpleArticle;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module deeplinking {
                export module targets {
                    export class DeepLinkType extends java.lang.Enum<any> {
                        public static Request: com.zendesk.sdk.deeplinking.targets.DeepLinkType;
                        public static Article: com.zendesk.sdk.deeplinking.targets.DeepLinkType;
                        public static Unknown: com.zendesk.sdk.deeplinking.targets.DeepLinkType;

                        public static valueOf(param0: string): com.zendesk.sdk.deeplinking.targets.DeepLinkType;

                        public static values(): native.Array<com.zendesk.sdk.deeplinking.targets.DeepLinkType>;

                        public static valueOf(
                                param0: java.lang.Class<any>,
                                param1: string): java.lang.Enum<any>;
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
                    export abstract class DeepLinkingTarget extends java.lang.Object {
                        public constructor();

                        public static getDeepLinkType(param0: android.content.Intent): com.zendesk.sdk.deeplinking.targets.DeepLinkType;

                        public static getTaskStackBuilder(
                                param0: android.content.Context,
                                param1: java.util.List<any>): androidsupportv4appTaskStackBuilder;

                        public getIntent(
                                param0: android.content.Context,
                                param1: com.zendesk.sdk.deeplinking.targets.TargetConfiguration): android.content.Intent;
                        public getIntent(
                                param0: android.content.Context,
                                param1: com.zendesk.sdk.deeplinking.targets.TargetConfiguration,
                                param2: string,
                                param3: string,
                                param4: string): android.content.Intent;

                        public execute(
                                param0: android.content.Context,
                                param1: android.content.Intent): boolean;
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
                        public constructor(
                                param0: string,
                                param1: string,
                                param2: java.util.ArrayList<any>,
                                param3: android.content.Intent);

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
                    export class TargetConfiguration extends java.lang.Object {
                        public getFallbackActivity(): android.content.Intent;

                        public getBackStackActivities(): java.util.ArrayList<any>;

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
                export abstract class BaseZendeskFeedbackConfiguration extends java.lang.Object implements com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration, java.io.Serializable {
                    public getAdditionalInfo(): string;

                    public constructor();

                    public getTags(): java.util.List<any>;

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
                export class FeedbackConnector extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.feedback.FeedbackConnector interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                sendFeedback(
                                        param0: string,
                                        param1: java.util.List<any>,
                                        param2: com.zendesk.service.ZendeskCallback): void;
                                isValid(): boolean;
                            });

                    public isValid(): boolean;

                    public sendFeedback(
                            param0: string,
                            param1: java.util.List<any>,
                            param2: com.zendesk.service.ZendeskCallback): void;
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
                export class WrappedZendeskFeedbackConfiguration extends java.lang.Object implements com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration {
                    public getAdditionalInfo(): string;

                    public constructor(param0: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration);

                    public getTags(): java.util.List<any>;

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
                export class ZendeskFeedbackConfiguration extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration interface
                     * with the provided implementation.
                     */
                    public constructor(
                            implementation: {
                                getTags(): java.util.List<any>;
                                getAdditionalInfo(): string;
                                getRequestSubject(): string;
                            });

                    public getAdditionalInfo(): string;

                    public getTags(): java.util.List<any>;

                    public getRequestSubject(): string;
                }
            }
        }
    }
}

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
                export class ZendeskFeedbackConnector extends java.lang.Object implements com.zendesk.sdk.feedback.FeedbackConnector {
                    public constructor(
                            param0: android.content.Context,
                            param1: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration,
                            param2: java.util.List<any>,
                            param3: java.util.List<any>,
                            param4: java.lang.Long,
                            param5: com.zendesk.sdk.network.RequestProvider,
                            param6: com.zendesk.sdk.storage.IdentityStorage);

                    public isValid(): boolean;

                    public static defaultConnector(
                            param0: android.content.Context,
                            param1: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration,
                            param2: java.util.List<any>): com.zendesk.sdk.feedback.ZendeskFeedbackConnector;

                    public sendFeedback(
                            param0: string,
                            param1: java.util.List<any>,
                            param2: com.zendesk.service.ZendeskCallback): void;
                }
            }
        }
    }
}

import androidwidgetLinearLayout = android.widget.LinearLayout;
import androidutilAttributeSet = android.util.AttributeSet;
import androidviewViewParent = android.view.ViewParent;
import androidgraphicsPoint = android.graphics.Point;
import androidviewContextMenu = android.view.ContextMenu;
import androidviewActionModeCallback = android.view.ActionMode.Callback;
import androidviewActionMode = android.view.ActionMode;
import androidviewaccessibilityAccessibilityEvent = android.view.accessibility.AccessibilityEvent;
import androidviewKeyEvent = android.view.KeyEvent;
import androidviewViewGroupLayoutParams = android.view.ViewGroup.LayoutParams;
import androidwidgetFrameLayout = android.widget.FrameLayout;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./com.zendesk.sdk.attachment.ImageUploadHelper.d.ts" />
/// <reference path="./com.zendesk.sdk.feedback.ui.AttachmentContainerHost.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module feedback {
                export module ui {
                    export class AttachmentContainerHost extends androidwidgetLinearLayout {
                        public isLayoutRequested(): boolean;

                        public onKeyDown(
                                param0: number,
                                param1: androidviewKeyEvent): boolean;

                        public focusableViewAvailable(param0: androidviewView): void;

                        public setState(param0: com.zendesk.sdk.attachment.ImageUploadHelper): void;

                        public showContextMenuForChild(param0: androidviewView): boolean;

                        public sendAccessibilityEvent(param0: number): void;

                        public removeAttachment(param0: java.io.File): void;

                        public childDrawableStateChanged(param0: androidviewView): void;

                        public constructor(
                                param0: android.content.Context,
                                param1: androidutilAttributeSet,
                                param2: number);

                        public requestTransparentRegion(param0: androidviewView): void;

                        public constructor(
                                param0: android.content.Context,
                                param1: androidutilAttributeSet,
                                param2: number,
                                param3: number);

                        public setAttachmentContainerListener(param0: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentContainerListener): void;

                        public constructor(
                                param0: android.content.Context,
                                param1: androidutilAttributeSet);

                        public getParent(): androidviewViewParent;

                        public addView(
                                param0: androidviewView,
                                param1: androidviewViewGroupLayoutParams): void;

                        public requestChildRectangleOnScreen(
                                param0: androidviewView,
                                param1: android.graphics.Rect,
                                param2: boolean): boolean;

                        public setAttachmentUploaded(param0: java.io.File): void;

                        public onKeyLongPress(
                                param0: number,
                                param1: androidviewKeyEvent): boolean;

                        public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                        public startActionModeForChild(
                                param0: androidviewView,
                                param1: androidviewActionModeCallback): androidviewActionMode;

                        public recomputeViewAttributes(param0: androidviewView): void;

                        public unscheduleDrawable(
                                param0: android.graphics.drawable.Drawable,
                                param1: java.lang.Runnable): void;

                        public requestSendAccessibilityEvent(
                                param0: androidviewView,
                                param1: androidviewaccessibilityAccessibilityEvent): boolean;

                        public clearChildFocus(param0: androidviewView): void;

                        public requestChildFocus(
                                param0: androidviewView,
                                param1: androidviewView): void;

                        public getParentForAccessibility(): androidviewViewParent;

                        public requestDisallowInterceptTouchEvent(param0: boolean): void;

                        public invalidateChild(
                                param0: androidviewView,
                                param1: android.graphics.Rect): void;

                        public requestLayout(): void;

                        public constructor(param0: android.content.Context);

                        public reset(): void;

                        public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

                        public focusSearch(param0: number): androidviewView;

                        public addView(
                                param0: androidviewView,
                                param1: number): void;
                        public addView(
                                param0: androidviewView,
                                param1: number,
                                param2: androidviewViewGroupLayoutParams): void;

                        public onKeyUp(
                                param0: number,
                                param1: androidviewKeyEvent): boolean;

                        public setAttachmentsDeletable(param0: boolean): void;

                        public onKeyMultiple(
                                param0: number,
                                param1: number,
                                param2: androidviewKeyEvent): boolean;

                        public addAttachment(param0: java.io.File): void;

                        public createContextMenu(param0: androidviewContextMenu): void;

                        public removeView(param0: androidviewView): void;

                        public scheduleDrawable(
                                param0: android.graphics.drawable.Drawable,
                                param1: java.lang.Runnable,
                                param2: number): void;

                        public requestFitSystemWindows(): void;

                        public setParent(param0: androidviewView): void;

                        public removeAttachmentAndNotify(param0: java.io.File): void;

                        public bringChildToFront(param0: androidviewView): void;

                        public sendAccessibilityEventUnchecked(param0: androidviewaccessibilityAccessibilityEvent): void;

                        public focusSearch(
                                param0: androidviewView,
                                param1: number): androidviewView;

                        public addView(param0: androidviewView): void;

                        public getChildVisibleRect(
                                param0: androidviewView,
                                param1: android.graphics.Rect,
                                param2: androidgraphicsPoint): boolean;

                        public setAttachmentState(
                                param0: java.io.File,
                                param1: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState): void;

                        public invalidateChildInParent(
                                param0: native.Array<number>,
                                param1: android.graphics.Rect): androidviewViewParent;

                        public addView(
                                param0: androidviewView,
                                param1: number,
                                param2: number): void;

                        public updateViewLayout(
                                param0: androidviewView,
                                param1: androidviewViewGroupLayoutParams): void;
                    }
                    export module AttachmentContainerHost {
                        export class AttachmentContainer extends androidwidgetFrameLayout {
                            public clearChildFocus(param0: androidviewView): void;

                            public unscheduleDrawable(
                                    param0: android.graphics.drawable.Drawable,
                                    param1: java.lang.Runnable): void;

                            public getChildVisibleRect(
                                    param0: androidviewView,
                                    param1: android.graphics.Rect,
                                    param2: androidgraphicsPoint): boolean;

                            public onKeyMultiple(
                                    param0: number,
                                    param1: number,
                                    param2: androidviewKeyEvent): boolean;

                            public addView(
                                    param0: androidviewView,
                                    param1: androidviewViewGroupLayoutParams): void;

                            public focusableViewAvailable(param0: androidviewView): void;

                            public childDrawableStateChanged(param0: androidviewView): void;

                            public updateViewLayout(
                                    param0: androidviewView,
                                    param1: androidviewViewGroupLayoutParams): void;

                            public requestFitSystemWindows(): void;

                            public onKeyUp(
                                    param0: number,
                                    param1: androidviewKeyEvent): boolean;

                            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                            public showContextMenuForChild(param0: androidviewView): boolean;

                            public getFile(): java.io.File;

                            public isLayoutRequested(): boolean;

                            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

                            public requestTransparentRegion(param0: androidviewView): void;

                            public constructor(
                                    param0: android.content.Context,
                                    param1: androidutilAttributeSet);
                            public constructor(
                                    param0: com.zendesk.sdk.feedback.ui.AttachmentContainerHost,
                                    param1: android.content.Context,
                                    param2: java.io.File,
                                    param3: com.zendesk.sdk.feedback.ui.AttachmentContainerHost,
                                    param4: number);

                            public requestLayout(): void;

                            public setState(param0: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState): void;

                            public constructor(
                                    param0: android.content.Context,
                                    param1: androidutilAttributeSet,
                                    param2: number);

                            public onKeyDown(
                                    param0: number,
                                    param1: androidviewKeyEvent): boolean;

                            public startActionModeForChild(
                                    param0: androidviewView,
                                    param1: androidviewActionModeCallback): androidviewActionMode;

                            public requestChildFocus(
                                    param0: androidviewView,
                                    param1: androidviewView): void;

                            public focusSearch(
                                    param0: androidviewView,
                                    param1: number): androidviewView;

                            public scheduleDrawable(
                                    param0: android.graphics.drawable.Drawable,
                                    param1: java.lang.Runnable,
                                    param2: number): void;

                            public addView(
                                    param0: androidviewView,
                                    param1: number,
                                    param2: number): void;

                            public removeView(param0: androidviewView): void;

                            public recomputeViewAttributes(param0: androidviewView): void;

                            public focusSearch(param0: number): androidviewView;

                            public getParent(): androidviewViewParent;

                            public requestChildRectangleOnScreen(
                                    param0: androidviewView,
                                    param1: android.graphics.Rect,
                                    param2: boolean): boolean;

                            public requestSendAccessibilityEvent(
                                    param0: androidviewView,
                                    param1: androidviewaccessibilityAccessibilityEvent): boolean;

                            public onKeyLongPress(
                                    param0: number,
                                    param1: androidviewKeyEvent): boolean;

                            public addView(
                                    param0: androidviewView,
                                    param1: number,
                                    param2: androidviewViewGroupLayoutParams): void;

                            public createContextMenu(param0: androidviewContextMenu): void;

                            public sendAccessibilityEventUnchecked(param0: androidviewaccessibilityAccessibilityEvent): void;

                            public getAttachmentState(): com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState;

                            public addView(param0: androidviewView): void;

                            public invalidateChildInParent(
                                    param0: native.Array<number>,
                                    param1: android.graphics.Rect): androidviewViewParent;

                            public addView(
                                    param0: androidviewView,
                                    param1: number): void;

                            public constructor(param0: android.content.Context);

                            public sendAccessibilityEvent(param0: number): void;

                            public invalidateChild(
                                    param0: androidviewView,
                                    param1: android.graphics.Rect): void;

                            public getParentForAccessibility(): androidviewViewParent;

                            public requestDisallowInterceptTouchEvent(param0: boolean): void;

                            public bringChildToFront(param0: androidviewView): void;
                        }
                        export class AttachmentContainerListener extends java.lang.Object {
                            /**
                             * Constructs a new instance of the
                             * com.zendesk.sdk.feedback.ui.AttachmentContainerHost$AttachmentContainerListener
                             * interface with the provided implementation.
                             */
                            public constructor(
                                    implementation: {
                                        attachmentRemoved(param0: java.io.File): void;
                                    });

                            public attachmentRemoved(param0: java.io.File): void;
                        }
                        export class AttachmentState extends java.lang.Enum<any> {
                            public static UPLOADING: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState;
                            public static UPLOADED: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState;
                            public static DISABLE: com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState;

                            public static valueOf(param0: string): com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState;
                            public static valueOf(
                                    param0: java.lang.Class<any>,
                                    param1: string): java.lang.Enum<any>;

                            public static values(): native.Array<com.zendesk.sdk.feedback.ui.AttachmentContainerHost.AttachmentState>;
                        }
                    }
                }
            }
        }
    }
}

import androidviewMenuItem = android.view.MenuItem;
import androidviewViewOnClickListener = android.view.View.OnClickListener;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
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

                        public onRetryAvailable(
                                param0: string,
                                param1: androidviewViewOnClickListener): void;

                        public constructor();

                        public onCreate(param0: androidosBundle): void;

                        public onDestroy(): void;

                        public onNetworkAvailable(): void;

                        public onNetworkUnavailable(): void;

                        public onOptionsItemSelected(param0: androidviewMenuItem): boolean;

                        public onRetryUnavailable(): void;

                        public static startActivity(
                                param0: android.content.Context,
                                param1: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration): void;
                    }
                    export module ContactZendeskActivity {
                        export class DefaultContactConfiguration extends com.zendesk.sdk.feedback.BaseZendeskFeedbackConfiguration {
                            public getTags(): java.util.List<any>;

                            public getRequestSubject(): string;

                            public getAdditionalInfo(): string;
                        }
                    }
                }
            }
        }
    }
}

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
/// <reference path="./java.lang.Object.d.ts" />
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

                        public onAttach(param0: android.content.Context): void;

                        public onPrepareOptionsMenu(param0: androidviewMenu): void;

                        public onOptionsItemSelected(param0: androidviewMenuItem): boolean;

                        public deleteUnusedAttachmentsBeforeShutdown(): void;

                        public onActivityResult(
                                param0: number,
                                param1: number,
                                param2: android.content.Intent): void;

                        public onCreate(param0: androidosBundle): void;

                        public onCreateView(
                                param0: androidviewLayoutInflater,
                                param1: androidviewViewGroup,
                                param2: androidosBundle): androidviewView;

                        public onCreateOptionsMenu(
                                param0: androidviewMenu,
                                param1: androidviewMenuInflater): void;

                        public setFeedbackListener(param0: com.zendesk.sdk.network.SubmissionListener): void;

                        public static newInstance(param0: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration): com.zendesk.sdk.feedback.ui.ContactZendeskFragment;

                        public onDestroy(): void;

                        public onDetach(): void;
                    }
                    export module ContactZendeskFragment {
                        export class ContactZendeskFeedbackConfiguration extends java.lang.Object implements com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration {
                            public constructor(
                                    param0: com.zendesk.sdk.feedback.ui.ContactZendeskFragment,
                                    param1: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration);

                            public getTags(): java.util.List<any>;

                            public getRequestSubject(): string;

                            public getAdditionalInfo(): string;
                        }
                        export class RequestCallback extends com.zendesk.service.ZendeskCallback {
                            public onError(param0: com.zendesk.service.ErrorResponse): void;

                            public onSuccess(param0: com.zendesk.sdk.model.request.CreateRequest): void;
                            public onSuccess(param0: java.lang.Object): void;
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
                export class AppVersion extends java.lang.Object {
                    public getAppVersionCode(): number;

                    public getAppVersionName(): string;

                    public constructor(param0: android.content.Context);
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
                export class DeviceInfo extends java.lang.Object {
                    public toString(): string;

                    public getDeviceInfoAsMap(): java.util.Map<any,any>;

                    public getModelDeviceName(): string;

                    public getVersionName(): string;

                    public getModelManufacturer(): string;

                    public getVersionCode(): number;

                    public constructor(param0: android.content.Context);

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
                export class MemoryInformation extends java.lang.Object {
                    public static EXPECTED_TOKEN_COUNT: number;
                    public static BYTES_MULTIPLIER: number;

                    public formatMemoryUsage(): string;

                    public getTotalMemory(): number;

                    public constructor(param0: android.content.Context);

                    public getTotalMemoryCompat(): number;

                    public getTotalMemoryApi(): number;

                    public isLowMemory(): boolean;

                    public getUsedMemory(): number;
                }
            }
        }
    }
}

/// <reference path="./com.zendesk.sdk.model.access.AccessToken.d.ts" />
/// <reference path="./com.zendesk.sdk.model.settings.SafeMobileSettings.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module model {
                export class SdkConfiguration extends java.lang.Object {
                    public getBearerAuthorizationHeader(): string;

                    public constructor(
                            param0: com.zendesk.sdk.model.access.AccessToken,
                            param1: com.zendesk.sdk.model.settings.SafeMobileSettings);

                    public getMobileSettings(): com.zendesk.sdk.model.settings.SafeMobileSettings;

                    public getAccessToken(): com.zendesk.sdk.model.access.AccessToken;
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
                export module access {
                    export class AccessToken extends java.lang.Object {
                        public constructor();

                        public equals(param0: java.lang.Object): boolean;

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
                    export class AnonymousIdentity extends java.lang.Object implements com.zendesk.sdk.model.access.Identity {
                        public reloadGuid(): void;

                        public getSdkGuid(): string;

                        public equals(param0: java.lang.Object): boolean;

                        public getEmail(): string;

                        public hashCode(): number;

                        public getExternalId(): string;

                        public getName(): string;
                    }
                    export module AnonymousIdentity {
                        export class Builder extends java.lang.Object {
                            public constructor();

                            public build(): com.zendesk.sdk.model.access.Identity;

                            public withExternalIdentifier(param0: string): com.zendesk.sdk.model.access.AnonymousIdentity.Builder;

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
                    export class AuthenticationRequestWrapper extends java.lang.Object {
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
                    export class AuthenticationResponse extends java.lang.Object {
                        public getAuthentication(): com.zendesk.sdk.model.access.AccessToken;

                        public constructor();
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module model {
                export module access {
                    export class AuthenticationType extends java.lang.Enum<any> {
                        public static JWT: com.zendesk.sdk.model.access.AuthenticationType;
                        public static ANONYMOUS: com.zendesk.sdk.model.access.AuthenticationType;

                        public getAuthenticationType(): string;

                        public static getAuthType(param0: string): com.zendesk.sdk.model.access.AuthenticationType;

                        public static values(): native.Array<com.zendesk.sdk.model.access.AuthenticationType>;

                        public static valueOf(
                                param0: java.lang.Class<any>,
                                param1: string): java.lang.Enum<any>;
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
                    export class Identity extends java.lang.Object {
                        /**
                         * Constructs a new instance of the com.zendesk.sdk.model.access.Identity interface with the
                         * provided implementation.
                         */
                        public constructor(implementation: {});
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
                    export class JwtIdentity extends java.lang.Object implements com.zendesk.sdk.model.access.Identity {
                        public equals(param0: java.lang.Object): boolean;

                        public getJwtUserIdentifier(): string;

                        public hashCode(): number;

                        public constructor(param0: string);
                    }
                }
            }
        }
    }
}

/// <reference path="./com.zendesk.sdk.model.helpcenter.User.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module model {
                export module helpcenter {
                    export class Article extends java.lang.Object implements java.io.Serializable {
                        public static UNKNOWN_VOTE_COUNT: number;

                        public getId(): java.lang.Long;

                        public getDownvoteCount(): number;

                        public constructor();

                        public getLabelNames(): java.util.List<any>;

                        public getLocale(): string;

                        public getCreatedAt(): java.util.Date;

                        public setAuthor(param0: com.zendesk.sdk.model.helpcenter.User): void;

                        public getSectionId(): java.lang.Long;

                        public getSourceLocale(): string;

                        public getUrl(): string;

                        public getTitle(): string;

                        public getBody(): string;

                        public isOutdated(): boolean;

                        public getAuthorId(): java.lang.Long;

                        public isDraft(): boolean;

                        public getUpvoteCount(): number;

                        public isCommentsDisabled(): boolean;

                        public getVoteSum(): number;

                        public getUpdatedAt(): java.util.Date;

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
                    export class ArticleResponse extends java.lang.Object {
                        public getUsers(): java.util.List<any>;

                        public constructor();

                        public getArticle(): com.zendesk.sdk.model.helpcenter.Article;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module model {
                export module helpcenter {
                    export class ArticleVote extends java.lang.Object {
                        public getId(): java.lang.Long;

                        public getItemId(): java.lang.Long;

                        public constructor();

                        public getUserId(): java.lang.Long;

                        public getValue(): java.lang.Integer;

                        public getCreatedAt(): java.util.Date;

                        public getUrl(): string;

                        public getUpdatedAt(): java.util.Date;

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
                    export class ArticleVoteResponse extends java.lang.Object {
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
                    export class ArticlesListResponse extends java.lang.Object implements com.zendesk.sdk.model.helpcenter.ArticlesResponse {
                        public getUsers(): java.util.List<any>;

                        public constructor();

                        public getSections(): java.util.List<any>;

                        public getNextPage(): string;

                        public getCategories(): java.util.List<any>;

                        public getPreviousPage(): string;

                        public getArticles(): java.util.List<any>;
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
                    export class ArticlesResponse extends java.lang.Object {
                        /**
                         * Constructs a new instance of the com.zendesk.sdk.model.helpcenter.ArticlesResponse interface
                         * with the provided implementation.
                         */
                        public constructor(
                                implementation: {
                                    getArticles(): java.util.List<any>;
                                    getCategories(): java.util.List<any>;
                                    getSections(): java.util.List<any>;
                                    getUsers(): java.util.List<any>;
                                });

                        public getUsers(): java.util.List<any>;

                        public getSections(): java.util.List<any>;

                        public getCategories(): java.util.List<any>;

                        public getArticles(): java.util.List<any>;
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
                    export class ArticlesSearchResponse extends java.lang.Object implements com.zendesk.sdk.model.helpcenter.ArticlesResponse {
                        public getUsers(): java.util.List<any>;

                        public constructor();

                        public getSections(): java.util.List<any>;

                        public getNextPage(): string;

                        public getCategories(): java.util.List<any>;

                        public getPreviousPage(): string;

                        public getArticles(): java.util.List<any>;
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
                    export class Attachment extends java.lang.Object {
                        public getId(): java.lang.Long;

                        public getArticleId(): java.lang.Long;

                        public constructor();

                        public getSize(): java.lang.Long;

                        public getCreatedAt(): java.util.Date;

                        public getContentType(): string;

                        public getFileName(): string;

                        public getUrl(): string;

                        public getContentUrl(): string;

                        public getUpdatedAt(): java.util.Date;
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
                    export class AttachmentResponse extends java.lang.Object {
                        public constructor();

                        public getArticleAttachments(): java.util.List<any>;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module model {
                export module helpcenter {
                    export class AttachmentType extends java.lang.Enum<any> {
                        public static INLINE: com.zendesk.sdk.model.helpcenter.AttachmentType;
                        public static BLOCK: com.zendesk.sdk.model.helpcenter.AttachmentType;

                        public static values(): native.Array<com.zendesk.sdk.model.helpcenter.AttachmentType>;

                        public static valueOf(param0: string): com.zendesk.sdk.model.helpcenter.AttachmentType;

                        public getAttachmentType(): string;

                        public static valueOf(
                                param0: java.lang.Class<any>,
                                param1: string): java.lang.Enum<any>;
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
                    export class CategoriesResponse extends java.lang.Object {
                        public constructor();

                        public getCategories(): java.util.List<any>;
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
                    export class Category extends java.lang.Object implements java.io.Serializable {
                        public getId(): java.lang.Long;

                        public constructor();

                        public isOutdated(): boolean;

                        public getLocale(): string;

                        public getCreatedAt(): java.util.Date;

                        public getPosition(): number;

                        public getSourceLocale(): string;

                        public getUrl(): string;

                        public getUpdatedAt(): java.util.Date;

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
                    export class CategoryResponse extends java.lang.Object {
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
                    export class FlatArticle extends java.lang.Object {
                        public getArticle(): com.zendesk.sdk.model.helpcenter.Article;

                        public constructor(
                                param0: com.zendesk.sdk.model.helpcenter.Category,
                                param1: com.zendesk.sdk.model.helpcenter.Section,
                                param2: com.zendesk.sdk.model.helpcenter.Article);

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
                    export class HelpCenterSearch extends java.lang.Object implements java.io.Serializable, java.lang.Cloneable {
                        public getCategoryIds(): string;

                        public getInclude(): string;

                        public withQuery(param0: string): com.zendesk.sdk.model.helpcenter.HelpCenterSearch;

                        public getSectionIds(): string;

                        public getLabelNames(): string;

                        public getQuery(): string;

                        public getPage(): java.lang.Integer;

                        public getLocale(): java.util.Locale;

                        public getPerPage(): java.lang.Integer;
                    }
                    export module HelpCenterSearch {
                        export class Builder extends java.lang.Object {
                            public constructor();

                            public withLabelNames(param0: native.Array<string>): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;

                            public withSectionId(param0: java.lang.Long): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;

                            public forLocale(param0: java.util.Locale): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;

                            public withCategoryId(param0: java.lang.Long): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;

                            public withSectionIds(param0: java.util.List<any>): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;

                            public perPage(param0: java.lang.Integer): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;

                            public withQuery(param0: string): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;

                            public build(): com.zendesk.sdk.model.helpcenter.HelpCenterSearch;

                            public withIncludes(param0: native.Array<string>): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;

                            public withCategoryIds(param0: java.util.List<any>): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;

                            public page(param0: java.lang.Integer): com.zendesk.sdk.model.helpcenter.HelpCenterSearch.Builder;
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
                    export class LastSearch extends java.lang.Object {
                        public constructor(
                                param0: string,
                                param1: number);

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
                    export class ListArticleQuery extends java.lang.Object {
                        public getSortOrder(): com.zendesk.sdk.model.helpcenter.SortOrder;

                        public setInclude(param0: string): void;

                        public setSortOrder(param0: com.zendesk.sdk.model.helpcenter.SortOrder): void;

                        public constructor();

                        public getInclude(): string;

                        public getLabelNames(): string;

                        public setResultsPerPage(param0: java.lang.Integer): void;

                        public setLocale(param0: java.util.Locale): void;

                        public setSortBy(param0: com.zendesk.sdk.model.helpcenter.SortBy): void;

                        public getSortBy(): com.zendesk.sdk.model.helpcenter.SortBy;

                        public getResultsPerPage(): java.lang.Integer;

                        public getPage(): java.lang.Integer;

                        public setPage(param0: java.lang.Integer): void;

                        public getLocale(): java.util.Locale;

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
                    export class RecordArticleViewRequest extends java.lang.Object {
                        public constructor(
                                param0: com.zendesk.sdk.model.helpcenter.LastSearch,
                                param1: boolean);
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
                    export class SearchArticle extends java.lang.Object implements java.io.Serializable {
                        public constructor(
                                param0: com.zendesk.sdk.model.helpcenter.Article,
                                param1: com.zendesk.sdk.model.helpcenter.Section,
                                param2: com.zendesk.sdk.model.helpcenter.Category);

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
                    export class Section extends java.lang.Object implements java.io.Serializable {
                        public getId(): java.lang.Long;

                        public constructor();

                        public getLocale(): string;

                        public getCreatedAt(): java.util.Date;

                        public getPosition(): number;

                        public getSorting(): string;

                        public getCategoryId(): java.lang.Long;

                        public getSourceLocale(): string;

                        public getUrl(): string;

                        public getName(): string;

                        public isOutdated(): boolean;

                        public getUpdatedAt(): java.util.Date;

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
                    export class SectionResponse extends java.lang.Object {
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
                    export class SectionsResponse extends java.lang.Object {
                        public sections: java.util.List<any>;

                        public constructor();

                        public getSections(): java.util.List<any>;
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
                    export class SimpleArticle extends java.lang.Object implements java.io.Serializable {
                        public getId(): java.lang.Long;

                        public constructor(
                                param0: java.lang.Long,
                                param1: string);

                        public getTitle(): string;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module model {
                export module helpcenter {
                    export class SortBy extends java.lang.Enum<any> {
                        public static POSITION: com.zendesk.sdk.model.helpcenter.SortBy;
                        public static TITLE: com.zendesk.sdk.model.helpcenter.SortBy;
                        public static CREATED_AT: com.zendesk.sdk.model.helpcenter.SortBy;
                        public static UPDATED_AT: com.zendesk.sdk.model.helpcenter.SortBy;

                        public getApiValue(): string;

                        public static values(): native.Array<com.zendesk.sdk.model.helpcenter.SortBy>;

                        public static valueOf(param0: string): com.zendesk.sdk.model.helpcenter.SortBy;
                        public static valueOf(
                                param0: java.lang.Class<any>,
                                param1: string): java.lang.Enum<any>;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module model {
                export module helpcenter {
                    export class SortOrder extends java.lang.Enum<any> {
                        public static ASCENDING: com.zendesk.sdk.model.helpcenter.SortOrder;
                        public static DESCENDING: com.zendesk.sdk.model.helpcenter.SortOrder;

                        public getApiValue(): string;

                        public static values(): native.Array<com.zendesk.sdk.model.helpcenter.SortOrder>;

                        public static valueOf(
                                param0: java.lang.Class<any>,
                                param1: string): java.lang.Enum<any>;
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
                    export class SuggestedArticleResponse extends java.lang.Object {
                        public constructor();

                        public getResults(): java.util.List<any>;
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
                    export class SuggestedArticleSearch extends java.lang.Object {
                        public getLabelNames(): string;

                        public getQuery(): string;

                        public getCategoryId(): java.lang.Long;

                        public getSectionId(): java.lang.Long;

                        public getLocale(): java.util.Locale;
                    }
                    export module SuggestedArticleSearch {
                        export class Builder extends java.lang.Object {
                            public constructor();

                            public forLocale(param0: java.util.Locale): com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch.Builder;

                            public withCategoryId(param0: java.lang.Long): com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch.Builder;

                            public withSectionId(param0: java.lang.Long): com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch.Builder;

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
                    export class User extends java.lang.Object implements java.io.Serializable {
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

/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module model {
                export module helpcenter {
                    export module help {
                        export class ArticleItem extends java.lang.Object implements com.zendesk.sdk.model.helpcenter.help.HelpItem {
                            public constructor();

                            public getViewType(): number;

                            public getId(): java.lang.Long;

                            public hashCode(): number;

                            public getName(): string;

                            public getChildren(): java.util.List<any>;

                            public equals(param0: java.lang.Object): boolean;

                            public getParentId(): java.lang.Long;
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
                        export class CategoryItem extends java.lang.Object implements com.zendesk.sdk.model.helpcenter.help.HelpItem {
                            public constructor();

                            public getViewType(): number;

                            public getId(): java.lang.Long;

                            public hashCode(): number;

                            public getName(): string;

                            public getChildren(): java.util.List<any>;

                            public isExpanded(): boolean;

                            public setExpanded(param0: boolean): boolean;

                            public setSections(param0: java.util.List<any>): void;

                            public equals(param0: java.lang.Object): boolean;

                            public getParentId(): java.lang.Long;
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
                        export class HelpItem extends java.lang.Object {
                            /**
                             * Constructs a new instance of the com.zendesk.sdk.model.helpcenter.help.HelpItem
                             * interface with the provided implementation.
                             */
                            public constructor(
                                    implementation: {
                                        getViewType(): number;
                                        getName(): string;
                                        getId(): java.lang.Long;
                                        getParentId(): java.lang.Long;
                                        getChildren(): java.util.List<any>;
                                    });

                            public static TYPE_LOADING: number;
                            public static TYPE_SEE_ALL: number;
                            public static TYPE_SECTION: number;
                            public static TYPE_NO_RESULTS: number;
                            public static TYPE_PADDING: number;
                            public static TYPE_CATEGORY: number;
                            public static TYPE_ARTICLE: number;

                            public getViewType(): number;

                            public getId(): java.lang.Long;

                            public getName(): string;

                            public getChildren(): java.util.List<any>;

                            public getParentId(): java.lang.Long;
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
                        export class HelpRequest extends java.lang.Object {
                            public getCategoryIds(): string;

                            public getIncludes(): string;

                            public getLabelNames(): native.Array<string>;

                            public getSectionIds(): string;

                            public getArticlesPerPageLimit(): number;
                        }
                        export module HelpRequest {
                            export class Builder extends java.lang.Object {
                                public withArticlesPerSectionLimit(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpRequest.Builder;

                                public includeCategories(): com.zendesk.sdk.model.helpcenter.help.HelpRequest.Builder;

                                public withSectionIds(param0: java.util.List<any>): com.zendesk.sdk.model.helpcenter.help.HelpRequest.Builder;

                                public withLabelNames(param0: native.Array<string>): com.zendesk.sdk.model.helpcenter.help.HelpRequest.Builder;

                                public withCategoryIds(param0: java.util.List<any>): com.zendesk.sdk.model.helpcenter.help.HelpRequest.Builder;

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
                        export class HelpResponse extends java.lang.Object {
                            public constructor();

                            public getCategories(): java.util.List<any>;

                            public getArticles(): java.util.List<any>;

                            public getSections(): java.util.List<any>;
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
                        export class SectionItem extends java.lang.Object implements com.zendesk.sdk.model.helpcenter.help.HelpItem {
                            public constructor();

                            public getViewType(): number;

                            public getId(): java.lang.Long;

                            public getTotalArticlesCount(): number;

                            public hashCode(): number;

                            public getName(): string;

                            public removeChild(param0: com.zendesk.sdk.model.helpcenter.help.HelpItem): void;

                            public getChildren(): java.util.List<any>;

                            public addChildren(param0: java.util.List<any>): void;

                            public addChild(param0: com.zendesk.sdk.model.helpcenter.help.HelpItem): void;

                            public equals(param0: java.lang.Object): boolean;

                            public getParentId(): java.lang.Long;
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
                        export class SeeAllArticlesItem extends java.lang.Object implements com.zendesk.sdk.model.helpcenter.help.HelpItem {
                            public getViewType(): number;

                            public getSection(): com.zendesk.sdk.model.helpcenter.help.SectionItem;

                            public constructor(param0: com.zendesk.sdk.model.helpcenter.help.SectionItem);

                            public getId(): java.lang.Long;

                            public setLoading(param0: boolean): void;

                            public hashCode(): number;

                            public getName(): string;

                            public getChildren(): java.util.List<any>;

                            public isLoading(): boolean;

                            public equals(param0: java.lang.Object): boolean;

                            public getParentId(): java.lang.Long;
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
                    export abstract class ResponseWrapper extends java.lang.Object {
                        public constructor();

                        public getCount(): java.lang.Integer;

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
                    export abstract class PushRegistrationRequest extends java.lang.Object {
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
                    export class PushRegistrationRequestWrapper extends java.lang.Object {
                        public constructor();

                        public setPushRegistrationRequest(param0: com.zendesk.sdk.model.push.PushRegistrationRequest): void;
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
                    export class PushRegistrationResponse extends java.lang.Object {
                        public constructor();

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
                    export class PushRegistrationResponseWrapper extends java.lang.Object {
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
                    export class Attachment extends java.lang.Object {
                        public getId(): java.lang.Long;

                        public constructor();

                        public getSize(): java.lang.Long;

                        public getContentType(): string;

                        public getFileName(): string;

                        public getUrl(): string;

                        public getContentUrl(): string;

                        public getThumbnails(): java.util.List<any>;
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
                    export class Comment extends java.lang.Object {
                        public getId(): java.lang.Long;

                        public isPublic(): boolean;

                        public setCreatedAt(param0: java.util.Date): void;

                        public constructor();

                        public getHtmlBody(): string;

                        public getCreatedAt(): java.util.Date;

                        public getUrl(): string;

                        public getAttachments(): java.util.List<any>;

                        public setBody(param0: string): void;

                        public getBody(): string;

                        public setAuthorId(param0: java.lang.Long): void;

                        public getRequestId(): string;

                        public setAttachments(param0: java.util.List<any>): void;

                        public getAuthorId(): java.lang.Long;
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
                    export class CommentResponse extends java.lang.Object {
                        public getId(): java.lang.Long;

                        public isPublic(): boolean;

                        public setCreatedAt(param0: java.util.Date): void;

                        public constructor();

                        public getHtmlBody(): string;

                        public getCreatedAt(): java.util.Date;

                        public getUrl(): string;

                        public getAttachments(): java.util.List<any>;

                        public setBody(param0: string): void;

                        public setId(param0: java.lang.Long): void;

                        public getBody(): string;

                        public setAuthorId(param0: java.lang.Long): void;

                        public getRequestId(): string;

                        public setAttachments(param0: java.util.List<any>): void;

                        public getAuthorId(): java.lang.Long;
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
                        public getUsers(): java.util.List<any>;

                        public constructor();

                        public getComments(): java.util.List<any>;

                        public getOrganizations(): java.util.List<any>;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module model {
                export module request {
                    export class CreateRequest extends java.lang.Object {
                        public constructor();

                        public setCustomFields(param0: java.util.List<any>): void;

                        public getEmail(): string;

                        public setId(param0: string): void;

                        public getSubject(): string;

                        public setMetadata(param0: java.util.Map<any,any>): void;

                        public getTags(): java.util.List<any>;

                        public setDescription(param0: string): void;

                        public setSubject(param0: string): void;

                        public setEmail(param0: string): void;

                        public setAttachments(param0: java.util.List<any>): void;

                        public setTicketFormId(param0: java.lang.Long): void;

                        public getId(): string;

                        public setTags(param0: java.util.List<any>): void;

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
                    export class CreateRequestWrapper extends java.lang.Object {
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
                    export class CustomField extends java.lang.Object {
                        public constructor(
                                param0: java.lang.Long,
                                param1: string);
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
                    export class EndUserComment extends java.lang.Object {
                        public constructor();

                        public setValue(param0: string): void;

                        public setAttachments(param0: java.util.List<any>): void;

                        public getAttachments(): java.util.List<any>;
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
                    export class Organization extends java.lang.Object {
                        public getId(): java.lang.Long;

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
                    export class Request extends java.lang.Object {
                        public constructor();

                        public getCreatedAt(): java.util.Date;

                        public getType(): string;

                        public getSubject(): string;

                        public getUrl(): string;

                        public getCollaboratorIds(): java.util.List<any>;

                        public getStatus(): string;

                        public getPublicUpdatedAt(): java.util.Date;

                        public getDueAt(): java.util.Date;

                        public getPriority(): string;

                        public getCommentCount(): java.lang.Integer;

                        public setComment(param0: com.zendesk.sdk.model.request.EndUserComment): void;

                        public getId(): string;

                        public getOrganizationId(): java.lang.Long;

                        public getUpdatedAt(): java.util.Date;

                        public getDescription(): string;

                        public getRequesterId(): java.lang.Long;
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
                    export class RequestResponse extends java.lang.Object {
                        public constructor();

                        public getRequest(): com.zendesk.sdk.model.request.Request;
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

                        public getRequests(): java.util.List<any>;
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
                    export class UpdateRequestWrapper extends java.lang.Object {
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
                    export class UploadResponse extends java.lang.Object {
                        public constructor();

                        public getAttachment(): com.zendesk.sdk.model.request.Attachment;

                        public getToken(): string;

                        public getExpiresAt(): java.util.Date;
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
                    export class UploadResponseWrapper extends java.lang.Object {
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
                    export class User extends java.lang.Object {
                        public getId(): java.lang.Long;

                        public getPhoto(): com.zendesk.sdk.model.request.Attachment;

                        public constructor();

                        public isAgent(): boolean;

                        public getOrganizationId(): java.lang.Long;

                        public getTags(): java.util.List<any>;

                        public getUserFields(): java.util.Map<any,any>;

                        public getName(): string;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module model {
                export module request {
                    export class UserField extends java.lang.Object {
                        public getId(): java.lang.Long;

                        public constructor();

                        public getRawTitle(): string;

                        public getPosition(): java.lang.Long;

                        public getCreatedAt(): java.util.Date;

                        public getUrl(): string;

                        public getUserFieldOptions(): java.util.List<any>;

                        public getKey(): string;

                        public getTitle(): string;

                        public getRawDescription(): string;

                        public getRegexpForValidation(): string;

                        public getUserFieldType(): com.zendesk.sdk.model.request.UserField.UserFieldType;

                        public isSystem(): boolean;

                        public getUpdatedAt(): java.util.Date;

                        public getDescription(): string;

                        public isActive(): boolean;
                    }
                    export module UserField {
                        export class UserFieldType extends java.lang.Enum<any> {
                            public static Integer: com.zendesk.sdk.model.request.UserField.UserFieldType;
                            public static Decimal: com.zendesk.sdk.model.request.UserField.UserFieldType;
                            public static Checkbox: com.zendesk.sdk.model.request.UserField.UserFieldType;
                            public static Date: com.zendesk.sdk.model.request.UserField.UserFieldType;
                            public static Text: com.zendesk.sdk.model.request.UserField.UserFieldType;
                            public static Textarea: com.zendesk.sdk.model.request.UserField.UserFieldType;
                            public static Dropdown: com.zendesk.sdk.model.request.UserField.UserFieldType;
                            public static Regexp: com.zendesk.sdk.model.request.UserField.UserFieldType;

                            public static values(): native.Array<com.zendesk.sdk.model.request.UserField.UserFieldType>;

                            public static valueOf(
                                    param0: java.lang.Class<any>,
                                    param1: string): java.lang.Enum<any>;
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
                    export class UserFieldOption extends java.lang.Object {
                        public getId(): java.lang.Long;

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
                    export class UserFieldRequest extends java.lang.Object {
                        public constructor(param0: java.util.Map<any,any>);
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
                    export class UserFieldResponse extends java.lang.Object {
                        public constructor();

                        public getUserFields(): java.util.List<any>;
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
                    export class UserResponse extends java.lang.Object {
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
                    export class UserTagRequest extends java.lang.Object {
                        public constructor();

                        public setTags(param0: java.util.List<any>): void;
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
                        export class RawTicketField extends java.lang.Object {
                            public constructor();

                            public getId(): number;

                            public getTitle(): string;

                            public getRegexpForValidation(): string;

                            public getCustomFieldOptions(): java.util.List<any>;

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
                        export class RawTicketFieldOption extends java.lang.Object {
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

/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module model {
                export module request {
                    export module fields {
                        export class RawTicketForm extends java.lang.Object {
                            public constructor();

                            public getName(): string;

                            public getId(): number;

                            public getTicketFieldIds(): java.util.List<any>;
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
                        export class RawTicketFormResponse extends java.lang.Object {
                            public constructor();

                            public getTicketFields(): java.util.List<any>;

                            public getTicketForms(): java.util.List<any>;
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
                        export class TicketField extends java.lang.Object {
                            public constructor(
                                    param0: number,
                                    param1: com.zendesk.sdk.model.request.fields.TicketFieldType,
                                    param2: string,
                                    param3: string,
                                    param4: string,
                                    param5: java.util.List<any>);

                            public getTicketFieldOptions(): java.util.List<any>;

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
                        export class TicketFieldOption extends java.lang.Object {
                            public isDefault(): boolean;

                            public getName(): string;

                            public getId(): number;

                            public getValue(): string;

                            public static create(param0: com.zendesk.sdk.model.request.fields.RawTicketFieldOption): com.zendesk.sdk.model.request.fields.TicketFieldOption;

                            public constructor(
                                    param0: number,
                                    param1: string,
                                    param2: string,
                                    param3: boolean);
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module model {
                export module request {
                    export module fields {
                        export class TicketFieldType extends java.lang.Enum<any> {
                            public static Assignee: com.zendesk.sdk.model.request.fields.TicketFieldType;
                            public static Checkbox: com.zendesk.sdk.model.request.fields.TicketFieldType;
                            public static Date: com.zendesk.sdk.model.request.fields.TicketFieldType;
                            public static Decimal: com.zendesk.sdk.model.request.fields.TicketFieldType;
                            public static Description: com.zendesk.sdk.model.request.fields.TicketFieldType;
                            public static Group: com.zendesk.sdk.model.request.fields.TicketFieldType;
                            public static Integer: com.zendesk.sdk.model.request.fields.TicketFieldType;
                            public static Organization: com.zendesk.sdk.model.request.fields.TicketFieldType;
                            public static PartialCreditCard: com.zendesk.sdk.model.request.fields.TicketFieldType;
                            public static Priority: com.zendesk.sdk.model.request.fields.TicketFieldType;
                            public static Regexp: com.zendesk.sdk.model.request.fields.TicketFieldType;
                            public static Status: com.zendesk.sdk.model.request.fields.TicketFieldType;
                            public static Subject: com.zendesk.sdk.model.request.fields.TicketFieldType;
                            public static Tagger: com.zendesk.sdk.model.request.fields.TicketFieldType;
                            public static Text: com.zendesk.sdk.model.request.fields.TicketFieldType;
                            public static TextArea: com.zendesk.sdk.model.request.fields.TicketFieldType;
                            public static TicketType: com.zendesk.sdk.model.request.fields.TicketFieldType;

                            public static values(): native.Array<com.zendesk.sdk.model.request.fields.TicketFieldType>;

                            public static valueOf(param0: string): com.zendesk.sdk.model.request.fields.TicketFieldType;
                            public static valueOf(
                                    param0: java.lang.Class<any>,
                                    param1: string): java.lang.Enum<any>;
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
                        export class TicketForm extends java.lang.Object {
                            public getTicketFields(): java.util.List<any>;

                            public constructor(
                                    param0: number,
                                    param1: string,
                                    param2: java.util.List<any>);

                            public static create(
                                    param0: com.zendesk.sdk.model.request.fields.RawTicketForm,
                                    param1: java.util.List<any>): com.zendesk.sdk.model.request.fields.TicketForm;

                            public getName(): string;

                            public getId(): number;
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
                    export class AccountSettings extends java.lang.Object {
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
                    export class AttachmentSettings extends java.lang.Object {
                        public constructor();

                        public isEnabled(): boolean;

                        public getMaxAttachmentSize(): number;
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
                    export class ContactUsSettings extends java.lang.Object implements java.io.Serializable {
                        public constructor();

                        public getTags(): java.util.List<any>;
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
                    export class ConversationsSettings extends java.lang.Object {
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
                    export class HelpCenterSettings extends java.lang.Object {
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
                    export class MobileSettings extends java.lang.Object {
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
                    export class RateMyAppSettings extends java.lang.Object implements java.io.Serializable {
                        public getDelay(): number;

                        public constructor();

                        public getDuration(): number;

                        public getVisits(): number;

                        public getTags(): java.util.List<any>;

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
                    export class SafeMobileSettings extends java.lang.Object {
                        public getRateMyAppTags(): java.util.List<any>;

                        public isAttachmentsEnabled(): boolean;

                        public isRateMyAppEnabled(): boolean;

                        public isTicketFormSupportAvailable(): boolean;

                        public getHelpCenterLocale(): string;

                        public getContactZendeskTags(): java.util.List<any>;

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
                    export class SdkSettings extends java.lang.Object implements java.io.Serializable {
                        public constructor();

                        public getAuthentication(): com.zendesk.sdk.model.access.AuthenticationType;

                        public getHelpCenterSettings(): com.zendesk.sdk.model.settings.HelpCenterSettings;

                        public getUpdatedAt(): java.util.Date;

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
                    export class TicketFormSettings extends java.lang.Object {
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
                export class AccessProvider extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.AccessProvider interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                getAndStoreAuthTokenViaJwt(
                                        param0: com.zendesk.sdk.model.access.JwtIdentity,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                getAndStoreAuthTokenViaAnonymous(
                                        param0: com.zendesk.sdk.model.access.AnonymousIdentity,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                            });

                    public getAndStoreAuthTokenViaAnonymous(
                            param0: com.zendesk.sdk.model.access.AnonymousIdentity,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public getAndStoreAuthTokenViaJwt(
                            param0: com.zendesk.sdk.model.access.JwtIdentity,
                            param1: com.zendesk.service.ZendeskCallback): void;
                }
            }
        }
    }
}

// import retrofit2Call = retrofit2.Call;
type retrofit2Call = any;
/// <reference path="./com.zendesk.sdk.model.access.AuthenticationRequestWrapper.d.ts" />
/// <reference path="./retrofit2.Call.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module network {
                export class AccessService extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.AccessService interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
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
                export class BaseProvider extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.BaseProvider interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                configureSdk(param0: com.zendesk.service.ZendeskCallback): void;
                                getSdkSettings(param0: com.zendesk.service.ZendeskCallback): void;
                                getAccessToken(
                                        param0: com.zendesk.sdk.model.settings.SafeMobileSettings,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                            });

                    public configureSdk(param0: com.zendesk.service.ZendeskCallback): void;

                    public getAccessToken(
                            param0: com.zendesk.sdk.model.settings.SafeMobileSettings,
                            param1: com.zendesk.service.ZendeskCallback): void;

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
                export class Constants extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.Constants interface with the provided
                     * implementation.
                     */
                    public constructor(implementation: {});

                    public static APPLICATION_JSON: string;
                    public static HEADER_SUFFIX_FORMAT: string;
                    public static ACCEPT_HEADER: string;
                    public static AUTHORIZATION_HEADER: string;
                    public static ENVIRONMENT_DEBUG: string;
                    public static ENVIRONMENT_PRODUCTION: string;
                    public static CLIENT_IDENTIFIER_HEADER: string;
                    public static SDK_GUID_HEADER: string;
                    public static ACCEPT_LANGUAGE_HEADER: string;
                    public static USER_AGENT_HEADER: string;
                    public static ZENDESK_SDK_FOR_ANDROID: string;
                    public static HEADER_SUFFIX_MAX_LENGTH: number;
                }
            }
        }
    }
}

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
                export class HelpCenterProvider extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.HelpCenterProvider interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                getHelp(
                                        param0: com.zendesk.sdk.model.helpcenter.help.HelpRequest,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                getCategories(param0: com.zendesk.service.ZendeskCallback): void;
                                getSections(
                                        param0: java.lang.Long,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                getArticles(
                                        param0: java.lang.Long,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                listArticles(
                                        param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                listArticlesFlat(
                                        param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                searchArticles(
                                        param0: com.zendesk.sdk.model.helpcenter.HelpCenterSearch,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                getArticle(
                                        param0: java.lang.Long,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                getSection(
                                        param0: java.lang.Long,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                getCategory(
                                        param0: java.lang.Long,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                getAttachments(
                                        param0: java.lang.Long,
                                        param1: com.zendesk.sdk.model.helpcenter.AttachmentType,
                                        param2: com.zendesk.service.ZendeskCallback): void;
                                upvoteArticle(
                                        param0: java.lang.Long,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                downvoteArticle(
                                        param0: java.lang.Long,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                deleteVote(
                                        param0: java.lang.Long,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                getSuggestedArticles(
                                        param0: com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                submitRecordArticleView(
                                        param0: java.lang.Long,
                                        param1: java.util.Locale,
                                        param2: com.zendesk.service.ZendeskCallback): void;
                            });

                    public getSection(
                            param0: java.lang.Long,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public getCategory(
                            param0: java.lang.Long,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public upvoteArticle(
                            param0: java.lang.Long,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public getArticles(
                            param0: java.lang.Long,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public getSections(
                            param0: java.lang.Long,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public submitRecordArticleView(
                            param0: java.lang.Long,
                            param1: java.util.Locale,
                            param2: com.zendesk.service.ZendeskCallback): void;

                    public getSuggestedArticles(
                            param0: com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public getArticle(
                            param0: java.lang.Long,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public getCategories(param0: com.zendesk.service.ZendeskCallback): void;

                    public deleteVote(
                            param0: java.lang.Long,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public getAttachments(
                            param0: java.lang.Long,
                            param1: com.zendesk.sdk.model.helpcenter.AttachmentType,
                            param2: com.zendesk.service.ZendeskCallback): void;

                    public listArticlesFlat(
                            param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public searchArticles(
                            param0: com.zendesk.sdk.model.helpcenter.HelpCenterSearch,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public getHelp(
                            param0: com.zendesk.sdk.model.helpcenter.help.HelpRequest,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public listArticles(
                            param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public downvoteArticle(
                            param0: java.lang.Long,
                            param1: com.zendesk.service.ZendeskCallback): void;
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
                export class HelpCenterService extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.HelpCenterService interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                getHelp(
                                        param0: string,
                                        param1: string,
                                        param2: string,
                                        param3: string,
                                        param4: string,
                                        param5: number,
                                        param6: string,
                                        param7: number,
                                        param8: string,
                                        param9: string): retrofit2Call;
                                getCategories(
                                        param0: string,
                                        param1: string): retrofit2Call;
                                getSections(
                                        param0: string,
                                        param1: string,
                                        param2: java.lang.Long,
                                        param3: number): retrofit2Call;
                                getArticles(
                                        param0: string,
                                        param1: string,
                                        param2: java.lang.Long,
                                        param3: string,
                                        param4: number): retrofit2Call;
                                listArticles(
                                        param0: string,
                                        param1: string,
                                        param2: string,
                                        param3: string,
                                        param4: string,
                                        param5: string,
                                        param6: java.lang.Integer,
                                        param7: java.lang.Integer): retrofit2Call;
                                searchArticles(
                                        param0: string,
                                        param1: string,
                                        param2: string,
                                        param3: string,
                                        param4: string,
                                        param5: string,
                                        param6: string,
                                        param7: java.lang.Integer,
                                        param8: java.lang.Integer): retrofit2Call;
                                getArticle(
                                        param0: string,
                                        param1: string,
                                        param2: java.lang.Long,
                                        param3: string): retrofit2Call;
                                getSectionById(
                                        param0: string,
                                        param1: string,
                                        param2: java.lang.Long): retrofit2Call;
                                getCategoryById(
                                        param0: string,
                                        param1: string,
                                        param2: java.lang.Long): retrofit2Call;
                                getAttachments(
                                        param0: string,
                                        param1: string,
                                        param2: java.lang.Long,
                                        param3: string): retrofit2Call;
                                upvoteArticle(
                                        param0: string,
                                        param1: java.lang.Long,
                                        param2: string): retrofit2Call;
                                downvoteArticle(
                                        param0: string,
                                        param1: java.lang.Long,
                                        param2: string): retrofit2Call;
                                deleteVote(
                                        param0: string,
                                        param1: java.lang.Long): retrofit2Call;
                                getSuggestedArticles(
                                        param0: string,
                                        param1: string,
                                        param2: string,
                                        param3: string,
                                        param4: java.lang.Long,
                                        param5: java.lang.Long): retrofit2Call;
                                submitRecordArticleView(
                                        param0: string,
                                        param1: java.lang.Long,
                                        param2: string,
                                        param3: com.zendesk.sdk.model.helpcenter.RecordArticleViewRequest): retrofit2Call;
                            });

                    public getArticle(
                            param0: string,
                            param1: string,
                            param2: java.lang.Long,
                            param3: string): retrofit2Call;

                    public downvoteArticle(
                            param0: string,
                            param1: java.lang.Long,
                            param2: string): retrofit2Call;

                    public getHelp(
                            param0: string,
                            param1: string,
                            param2: string,
                            param3: string,
                            param4: string,
                            param5: number,
                            param6: string,
                            param7: number,
                            param8: string,
                            param9: string): retrofit2Call;

                    public listArticles(
                            param0: string,
                            param1: string,
                            param2: string,
                            param3: string,
                            param4: string,
                            param5: string,
                            param6: java.lang.Integer,
                            param7: java.lang.Integer): retrofit2Call;

                    public getAttachments(
                            param0: string,
                            param1: string,
                            param2: java.lang.Long,
                            param3: string): retrofit2Call;

                    public upvoteArticle(
                            param0: string,
                            param1: java.lang.Long,
                            param2: string): retrofit2Call;

                    public getSuggestedArticles(
                            param0: string,
                            param1: string,
                            param2: string,
                            param3: string,
                            param4: java.lang.Long,
                            param5: java.lang.Long): retrofit2Call;

                    public deleteVote(
                            param0: string,
                            param1: java.lang.Long): retrofit2Call;

                    public searchArticles(
                            param0: string,
                            param1: string,
                            param2: string,
                            param3: string,
                            param4: string,
                            param5: string,
                            param6: string,
                            param7: java.lang.Integer,
                            param8: java.lang.Integer): retrofit2Call;

                    public getArticles(
                            param0: string,
                            param1: string,
                            param2: java.lang.Long,
                            param3: string,
                            param4: number): retrofit2Call;

                    public submitRecordArticleView(
                            param0: string,
                            param1: java.lang.Long,
                            param2: string,
                            param3: com.zendesk.sdk.model.helpcenter.RecordArticleViewRequest): retrofit2Call;

                    public getCategoryById(
                            param0: string,
                            param1: string,
                            param2: java.lang.Long): retrofit2Call;

                    public getSections(
                            param0: string,
                            param1: string,
                            param2: java.lang.Long,
                            param3: number): retrofit2Call;

                    public getSectionById(
                            param0: string,
                            param1: string,
                            param2: java.lang.Long): retrofit2Call;

                    public getCategories(
                            param0: string,
                            param1: string): retrofit2Call;
                }
            }
        }
    }
}

declare module com {
    export module zendesk {
        export module sdk {
            export module network {
                export class NetworkAware extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.NetworkAware interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
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
                export class NetworkInfoProvider extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.NetworkInfoProvider interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                register(): void;
                                unregister(): void;
                                isNetworkAvailable(): boolean;
                                addNetworkAwareListener(
                                        param0: java.lang.Integer,
                                        param1: com.zendesk.sdk.network.NetworkAware): void;
                                removeNetworkAwareListener(param0: java.lang.Integer): void;
                                clearNetworkAwareListeners(): void;
                                addRetryAction(
                                        param0: java.lang.Integer,
                                        param1: com.zendesk.sdk.network.RetryAction): void;
                                removeRetryAction(param0: java.lang.Integer): void;
                                clearRetryActions(): void;
                            });

                    public register(): void;

                    public isNetworkAvailable(): boolean;

                    public removeNetworkAwareListener(param0: java.lang.Integer): void;

                    public removeRetryAction(param0: java.lang.Integer): void;

                    public clearRetryActions(): void;

                    public unregister(): void;

                    public addRetryAction(
                            param0: java.lang.Integer,
                            param1: com.zendesk.sdk.network.RetryAction): void;

                    public addNetworkAwareListener(
                            param0: java.lang.Integer,
                            param1: com.zendesk.sdk.network.NetworkAware): void;

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
                export class PushRegistrationProvider extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.PushRegistrationProvider interface with
                     * the provided implementation.
                     */
                    public constructor(
                            implementation: {
                                registerDeviceWithIdentifier(
                                        param0: string,
                                        param1: java.util.Locale,
                                        param2: com.zendesk.service.ZendeskCallback): void;
                                registerDeviceWithUAChannelId(
                                        param0: string,
                                        param1: java.util.Locale,
                                        param2: com.zendesk.service.ZendeskCallback): void;
                                unregisterDevice(
                                        param0: string,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                            });

                    public unregisterDevice(
                            param0: string,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public registerDeviceWithIdentifier(
                            param0: string,
                            param1: java.util.Locale,
                            param2: com.zendesk.service.ZendeskCallback): void;

                    public registerDeviceWithUAChannelId(
                            param0: string,
                            param1: java.util.Locale,
                            param2: com.zendesk.service.ZendeskCallback): void;
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
                export class PushRegistrationService extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.PushRegistrationService interface with
                     * the provided implementation.
                     */
                    public constructor(
                            implementation: {
                                registerDevice(
                                        param0: string,
                                        param1: com.zendesk.sdk.model.push.PushRegistrationRequestWrapper): retrofit2Call;
                                unregisterDevice(
                                        param0: string,
                                        param1: string): retrofit2Call;
                            });

                    public registerDevice(
                            param0: string,
                            param1: com.zendesk.sdk.model.push.PushRegistrationRequestWrapper): retrofit2Call;

                    public unregisterDevice(
                            param0: string,
                            param1: string): retrofit2Call;
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
                export class RequestLoadingListener extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.RequestLoadingListener interface with
                     * the provided implementation.
                     */
                    public constructor(
                            implementation: {
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

/// <reference path="./com.zendesk.sdk.model.request.CreateRequest.d.ts" />
/// <reference path="./com.zendesk.sdk.model.request.EndUserComment.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module network {
                export class RequestProvider extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.RequestProvider interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                createRequest(
                                        param0: com.zendesk.sdk.model.request.CreateRequest,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                getAllRequests(param0: com.zendesk.service.ZendeskCallback): void;
                                getRequests(
                                        param0: string,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                getComments(
                                        param0: string,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                addComment(
                                        param0: string,
                                        param1: com.zendesk.sdk.model.request.EndUserComment,
                                        param2: com.zendesk.service.ZendeskCallback): void;
                                getRequest(
                                        param0: string,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                getTicketFormsById(
                                        param0: java.util.List<any>,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                            });

                    public createRequest(
                            param0: com.zendesk.sdk.model.request.CreateRequest,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public getTicketFormsById(
                            param0: java.util.List<any>,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public getAllRequests(param0: com.zendesk.service.ZendeskCallback): void;

                    public getComments(
                            param0: string,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public addComment(
                            param0: string,
                            param1: com.zendesk.sdk.model.request.EndUserComment,
                            param2: com.zendesk.service.ZendeskCallback): void;

                    public getRequests(
                            param0: string,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public getRequest(
                            param0: string,
                            param1: com.zendesk.service.ZendeskCallback): void;
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
                export class RequestService extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.RequestService interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                createRequest(
                                        param0: string,
                                        param1: string,
                                        param2: com.zendesk.sdk.model.request.CreateRequestWrapper): retrofit2Call;
                                getAllRequests(
                                        param0: string,
                                        param1: string,
                                        param2: string): retrofit2Call;
                                getManyRequests(
                                        param0: string,
                                        param1: string,
                                        param2: string,
                                        param3: string): retrofit2Call;
                                getComments(
                                        param0: string,
                                        param1: string): retrofit2Call;
                                addComment(
                                        param0: string,
                                        param1: string,
                                        param2: com.zendesk.sdk.model.request.UpdateRequestWrapper): retrofit2Call;
                                getRequest(
                                        param0: string,
                                        param1: string): retrofit2Call;
                                getTicketFormsById(
                                        param0: string,
                                        param1: string,
                                        param2: string,
                                        param3: string): retrofit2Call;
                            });

                    public getManyRequests(
                            param0: string,
                            param1: string,
                            param2: string,
                            param3: string): retrofit2Call;

                    public addComment(
                            param0: string,
                            param1: string,
                            param2: com.zendesk.sdk.model.request.UpdateRequestWrapper): retrofit2Call;

                    public getRequest(
                            param0: string,
                            param1: string): retrofit2Call;

                    public getTicketFormsById(
                            param0: string,
                            param1: string,
                            param2: string,
                            param3: string): retrofit2Call;

                    public getAllRequests(
                            param0: string,
                            param1: string,
                            param2: string): retrofit2Call;

                    public createRequest(
                            param0: string,
                            param1: string,
                            param2: com.zendesk.sdk.model.request.CreateRequestWrapper): retrofit2Call;

                    public getComments(
                            param0: string,
                            param1: string): retrofit2Call;
                }
            }
        }
    }
}

declare module com {
    export module zendesk {
        export module sdk {
            export module network {
                export class RetryAction extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.RetryAction interface with the provided
                     * implementation.
                     */
                    public constructor(
                            implementation: {
                                onRetry(): void;
                            });

                    public onRetry(): void;
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
                export class Retryable extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.Retryable interface with the provided
                     * implementation.
                     */
                    public constructor(
                            implementation: {
                                onRetryAvailable(
                                        param0: string,
                                        param1: androidviewViewOnClickListener): void;
                                onRetryUnavailable(): void;
                            });

                    public onRetryAvailable(
                            param0: string,
                            param1: androidviewViewOnClickListener): void;

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
                export class SdkOptions extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.SdkOptions interface with the provided
                     * implementation.
                     */
                    public constructor(
                            implementation: {
                                overrideResourceLoadingInWebview(): boolean;
                                getServiceOptions(): com.zendesk.sdk.network.SdkOptions.ServiceOptions;
                            });

                    public overrideResourceLoadingInWebview(): boolean;

                    public getServiceOptions(): com.zendesk.sdk.network.SdkOptions.ServiceOptions;
                }
                export module SdkOptions {
                    export class ServiceOptions extends java.lang.Object {
                        /**
                         * Constructs a new instance of the com.zendesk.sdk.network.SdkOptions$ServiceOptions interface
                         * with the provided implementation.
                         */
                        public constructor(
                                implementation: {
                                    getConnectionSpecs(): java.util.List<any>;
                                });

                        public getConnectionSpecs(): java.util.List<any>;
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
                export class SdkSettingsProvider extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.SdkSettingsProvider interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
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
                export class SdkSettingsService extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.SdkSettingsService interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                getSettings(
                                        param0: string,
                                        param1: string): retrofit2Call;
                            });

                    public getSettings(
                            param0: string,
                            param1: string): retrofit2Call;
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
                export class SettingsHelper extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.SettingsHelper interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                loadSetting(param0: com.zendesk.service.ZendeskCallback): void;
                            });

                    public loadSetting(param0: com.zendesk.service.ZendeskCallback): void;
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
                export class SubmissionListener extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.SubmissionListener interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
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
                export class SubmissionListenerAdapter extends java.lang.Object implements com.zendesk.sdk.network.SubmissionListener {
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

/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module network {
                export class UploadProvider extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.UploadProvider interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                uploadAttachment(
                                        param0: string,
                                        param1: java.io.File,
                                        param2: string,
                                        param3: com.zendesk.service.ZendeskCallback): void;
                                deleteAttachment(
                                        param0: string,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                            });

                    public deleteAttachment(
                            param0: string,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public uploadAttachment(
                            param0: string,
                            param1: java.io.File,
                            param2: string,
                            param3: com.zendesk.service.ZendeskCallback): void;
                }
            }
        }
    }
}

// import okhttp3RequestBody = okhttp3.RequestBody;
type okhttp3RequestBody =  any;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./okhttp3.RequestBody.d.ts" />
/// <reference path="./retrofit2.Call.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module network {
                export class UploadService extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.UploadService interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                uploadAttachment(
                                        param0: string,
                                        param1: string,
                                        param2: okhttp3RequestBody): retrofit2Call;
                                deleteAttachment(
                                        param0: string,
                                        param1: string): retrofit2Call;
                            });

                    public deleteAttachment(
                            param0: string,
                            param1: string): retrofit2Call;

                    public uploadAttachment(
                            param0: string,
                            param1: string,
                            param2: okhttp3RequestBody): retrofit2Call;
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
                export class UserProvider extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.UserProvider interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                addTags(
                                        param0: java.util.List<any>,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                deleteTags(
                                        param0: java.util.List<any>,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                getUserFields(param0: com.zendesk.service.ZendeskCallback): void;
                                setUserFields(
                                        param0: java.util.Map<any,any>,
                                        param1: com.zendesk.service.ZendeskCallback): void;
                                getUser(param0: com.zendesk.service.ZendeskCallback): void;
                            });

                    public addTags(
                            param0: java.util.List<any>,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public setUserFields(
                            param0: java.util.Map<any,any>,
                            param1: com.zendesk.service.ZendeskCallback): void;

                    public getUser(param0: com.zendesk.service.ZendeskCallback): void;

                    public deleteTags(
                            param0: java.util.List<any>,
                            param1: com.zendesk.service.ZendeskCallback): void;

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
                export class UserService extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.UserService interface with the provided
                     * implementation.
                     */
                    public constructor(
                            implementation: {
                                addTags(
                                        param0: string,
                                        param1: com.zendesk.sdk.model.request.UserTagRequest): retrofit2Call;
                                deleteTags(
                                        param0: string,
                                        param1: string): retrofit2Call;
                                getUserFields(param0: string): retrofit2Call;
                                setUserFields(
                                        param0: string,
                                        param1: com.zendesk.sdk.model.request.UserFieldRequest): retrofit2Call;
                                getUser(param0: string): retrofit2Call;
                            });

                    public deleteTags(
                            param0: string,
                            param1: string): retrofit2Call;

                    public addTags(
                            param0: string,
                            param1: com.zendesk.sdk.model.request.UserTagRequest): retrofit2Call;

                    public getUserFields(param0: string): retrofit2Call;

                    public getUser(param0: string): retrofit2Call;

                    public setUserFields(
                            param0: string,
                            param1: com.zendesk.sdk.model.request.UserFieldRequest): retrofit2Call;
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
                export class ZendeskTracker extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.network.ZendeskTracker interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
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
                    export class AnswersTracker extends java.lang.Object implements com.zendesk.sdk.network.ZendeskTracker {
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

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.zendesk.sdk.network.SdkOptions.d.ts" />
/// <reference path="./com.zendesk.sdk.util.ScopeCache.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module network {
                export module impl {
                    export class ApplicationScope extends java.lang.Object {
                        public newBuilder(): com.zendesk.sdk.network.impl.ApplicationScope.Builder;

                        public getOAuthToken(): string;

                        public isCoppaEnabled(): boolean;

                        public getStorageModuleCache(): com.zendesk.sdk.util.ScopeCache;

                        public getUrl(): string;

                        public getUserAgentHeader(): string;

                        public getTicketFormId(): java.lang.Long;

                        public getApplicationContext(): android.content.Context;

                        public getCustomFields(): java.util.List<any>;

                        public getSdkOptions(): com.zendesk.sdk.network.SdkOptions;

                        public getRestAdapterCache(): com.zendesk.sdk.util.ScopeCache;

                        public getAppId(): string;

                        public getLocale(): java.util.Locale;

                        public isDevelopmentMode(): boolean;

                        public getLibraryModuleCache(): com.zendesk.sdk.util.ScopeCache;
                    }
                    export module ApplicationScope {
                        export class Builder extends java.lang.Object {
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
                    export class AuthenticationLoggerHelper extends java.lang.Object {
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
                    export class ConfigurationRuntimeException extends java.lang.RuntimeException {
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
                    export class DefaultSdkOptions extends java.lang.Object implements com.zendesk.sdk.network.SdkOptions {
                        public constructor();

                        public getServiceOptions(): com.zendesk.sdk.network.SdkOptions.ServiceOptions;

                        public overrideResourceLoadingInWebview(): boolean;
                    }
                }
            }
        }
    }
}

// import okhttp3Interceptor = okhttp3.Interceptor;
// import okhttp3InterceptorChain = okhttp3.Interceptor.Chain;
// import okhttp3Response = okhttp3.Response;
interface okhttp3Interceptor {
}
type okhttp3InterceptorChain = any;
type okhttp3Response = any;
/// <reference path="./com.zendesk.sdk.storage.SdkStorage.d.ts" />
/// <reference path="./okhttp3.Response.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module network {
                export module impl {
                    export class DefaultZendeskUnauthorizedInterceptor extends java.lang.Object implements okhttp3Interceptor {
                        public intercept(param0: okhttp3InterceptorChain): okhttp3Response;

                        public onHttpUnauthorized(): void;

                        public constructor(param0: com.zendesk.sdk.storage.SdkStorage);
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
                    export class HelpCenterLocaleConverter extends java.lang.Object {
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
                    export class HelpResponseConverter extends java.lang.Object {
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
                    export class NoOpTracker extends java.lang.Object implements com.zendesk.sdk.network.ZendeskTracker {
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
                    export abstract class PassThroughErrorZendeskCallback extends com.zendesk.service.ZendeskCallback {
                        public onError(param0: com.zendesk.service.ErrorResponse): void;

                        public onSuccess(param0: java.lang.Object): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./com.zendesk.sdk.network.NetworkInfoProvider.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ApplicationScope.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ProviderStore.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module network {
                export module impl {
                    export class ProviderInjector extends java.lang.Object {
                        public static injectNetworkInfoProvider(param0: com.zendesk.sdk.network.impl.ApplicationScope): com.zendesk.sdk.network.NetworkInfoProvider;

                        public static injectProviderStore(param0: com.zendesk.sdk.network.impl.ApplicationScope): com.zendesk.sdk.network.impl.ProviderStore;
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
                    export class ProviderStore extends java.lang.Object {
                        /**
                         * Constructs a new instance of the com.zendesk.sdk.network.impl.ProviderStore interface with
                         * the provided implementation.
                         */
                        public constructor(
                                implementation: {
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

// import retrofit2Retrofit = retrofit2.Retrofit;
type retrofit2Retrofit = any;
/// <reference path="./com.zendesk.sdk.network.impl.ApplicationScope.d.ts" />
/// <reference path="./retrofit2.Retrofit.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module network {
                export module impl {
                    export class RestAdapterInjector extends java.lang.Object {
                        public static injectRestAdapter(param0: com.zendesk.sdk.network.impl.ApplicationScope): retrofit2Retrofit;

                        public constructor();
                    }
                }
            }
        }
    }
}

/// <reference path="./retrofit2.Retrofit.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module network {
                export module impl {
                    export class RestAdapterModule extends java.lang.Object {
                        public constructor(param0: retrofit2Retrofit);

                        public getRetrofit(): retrofit2Retrofit;
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
                    export class ServiceInjector extends java.lang.Object {
                    }
                }
            }
        }
    }
}


/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Method.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module network {
                export module impl {
                    export class StubProviderFactory extends java.lang.Object {
                    }
                    export module StubProviderFactory {
                        export class ZendeskCallbackInvocationHandler extends java.lang.Object implements java.lang.reflect.InvocationHandler {
                            public invoke(
                                    param0: java.lang.Object,
                                    param1: java.lang.reflect.Method,
                                    param2: native.Array<java.lang.Object>): java.lang.Object;
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
                    export class StubProviderStore extends java.lang.Object implements com.zendesk.sdk.network.impl.ProviderStore {
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
                    export class ZendeskAccessProvider extends java.lang.Object implements com.zendesk.sdk.network.AccessProvider {
                        public constructor(
                                param0: com.zendesk.sdk.storage.IdentityStorage,
                                param1: com.zendesk.sdk.network.impl.ZendeskAccessService);

                        public getAndStoreAuthTokenViaJwt(
                                param0: com.zendesk.sdk.model.access.JwtIdentity,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public getAndStoreAuthTokenViaAnonymous(
                                param0: com.zendesk.sdk.model.access.AnonymousIdentity,
                                param1: com.zendesk.service.ZendeskCallback): void;
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
                    export class ZendeskAccessService extends java.lang.Object {
                        public constructor(param0: com.zendesk.sdk.network.AccessService);
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
                    export class ZendeskBaseProvider extends java.lang.Object implements com.zendesk.sdk.network.BaseProvider {
                        public getSdkSettings(param0: com.zendesk.service.ZendeskCallback): void;

                        public getAccessToken(
                                param0: com.zendesk.sdk.model.settings.SafeMobileSettings,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public constructor(
                                param0: com.zendesk.sdk.network.AccessProvider,
                                param1: com.zendesk.sdk.storage.SdkSettingsStorage,
                                param2: com.zendesk.sdk.storage.IdentityStorage,
                                param3: com.zendesk.sdk.network.SdkSettingsProvider);

                        public configureSdk(param0: com.zendesk.service.ZendeskCallback): void;
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
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module network {
                export module impl {
                    export class ZendeskConfig extends java.lang.Enum<any> {
                        public static INSTANCE: com.zendesk.sdk.network.impl.ZendeskConfig;
                        public static HEADER_SUFFIX_MAX_LENGTH: number;

                        public getMobileSettings(): com.zendesk.sdk.model.settings.SafeMobileSettings;

                        public setDeviceLocale(param0: java.util.Locale): void;

                        public static valueOf(param0: string): com.zendesk.sdk.network.impl.ZendeskConfig;
                        public static valueOf(
                                param0: java.lang.Class<any>,
                                param1: string): java.lang.Enum<any>;

                        public isInitialized(): boolean;

                        public getTicketFormId(): java.lang.Long;

                        public enablePushWithIdentifier(
                                param0: string,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public getApplicationId(): string;

                        public getOauthClientId(): string;

                        public getCustomFields(): java.util.List<any>;

                        public getTracker(): com.zendesk.sdk.network.ZendeskTracker;

                        public getZendeskUrl(): string;

                        public disablePush(
                                param0: string,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public storage(): com.zendesk.sdk.storage.StorageStore;

                        public isAuthenticationAvailable(): boolean;

                        public enablePushWithUAChannelId(
                                param0: string,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public setCustomFields(param0: java.util.List<any>): void;

                        public isCoppaEnabled(): boolean;

                        public provider(): com.zendesk.sdk.network.impl.ProviderStore;

                        public setSdkOptions(param0: com.zendesk.sdk.network.SdkOptions): void;

                        public setIdentity(param0: com.zendesk.sdk.model.access.Identity): void;

                        public static values(): native.Array<com.zendesk.sdk.network.impl.ZendeskConfig>;

                        public setTicketFormId(param0: java.lang.Long): void;

                        public setCoppaEnabled(param0: boolean): void;

                        public getSdkOptions(): com.zendesk.sdk.network.SdkOptions;

                        public init(
                                param0: android.content.Context,
                                param1: string,
                                param2: string,
                                param3: string): void;
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
                    export class ZendeskConfigHelper extends java.lang.Object {
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
                    export class ZendeskConfigInjector extends java.lang.Object {
                    }
                }
            }
        }
    }
}

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
                    export class ZendeskHelpCenterProvider extends java.lang.Object implements com.zendesk.sdk.network.HelpCenterProvider {
                        public listArticlesFlat(
                                param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public getCategories(param0: com.zendesk.service.ZendeskCallback): void;

                        public submitRecordArticleView(
                                param0: java.lang.Long,
                                param1: java.util.Locale,
                                param2: com.zendesk.service.ZendeskCallback): void;

                        public getArticle(
                                param0: java.lang.Long,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public getSuggestedArticles(
                                param0: com.zendesk.sdk.model.helpcenter.SuggestedArticleSearch,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public listArticles(
                                param0: com.zendesk.sdk.model.helpcenter.ListArticleQuery,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public getAttachments(
                                param0: java.lang.Long,
                                param1: com.zendesk.sdk.model.helpcenter.AttachmentType,
                                param2: com.zendesk.service.ZendeskCallback): void;

                        public getSections(
                                param0: java.lang.Long,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public searchArticles(
                                param0: com.zendesk.sdk.model.helpcenter.HelpCenterSearch,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public getCategory(
                                param0: java.lang.Long,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public getArticles(
                                param0: java.lang.Long,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public downvoteArticle(
                                param0: java.lang.Long,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public getHelp(
                                param0: com.zendesk.sdk.model.helpcenter.help.HelpRequest,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public upvoteArticle(
                                param0: java.lang.Long,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public getSection(
                                param0: java.lang.Long,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public deleteVote(
                                param0: java.lang.Long,
                                param1: com.zendesk.service.ZendeskCallback): void;
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
                    export class ZendeskHelpCenterService extends java.lang.Object {
                        public downvoteArticle(
                                param0: string,
                                param1: java.lang.Long,
                                param2: string,
                                param3: com.zendesk.service.ZendeskCallback): void;

                        public getArticle(
                                param0: string,
                                param1: java.lang.Long,
                                param2: java.util.Locale,
                                param3: string,
                                param4: com.zendesk.service.ZendeskCallback): void;

                        public getCategories(
                                param0: string,
                                param1: java.util.Locale,
                                param2: com.zendesk.service.ZendeskCallback): void;

                        public getSuggestedArticles(
                                param0: string,
                                param1: string,
                                param2: java.util.Locale,
                                param3: string,
                                param4: java.lang.Long,
                                param5: java.lang.Long,
                                param6: com.zendesk.service.ZendeskCallback): void;

                        public getSectionById(
                                param0: string,
                                param1: java.lang.Long,
                                param2: java.util.Locale,
                                param3: com.zendesk.service.ZendeskCallback): void;

                        public listArticles(
                                param0: string,
                                param1: string,
                                param2: java.util.Locale,
                                param3: string,
                                param4: string,
                                param5: string,
                                param6: java.lang.Integer,
                                param7: java.lang.Integer,
                                param8: com.zendesk.service.ZendeskCallback): void;

                        public getArticlesForSection(
                                param0: string,
                                param1: java.lang.Long,
                                param2: java.util.Locale,
                                param3: string,
                                param4: com.zendesk.service.ZendeskCallback): void;

                        public getAttachments(
                                param0: string,
                                param1: java.util.Locale,
                                param2: java.lang.Long,
                                param3: com.zendesk.sdk.model.helpcenter.AttachmentType,
                                param4: com.zendesk.service.ZendeskCallback): void;

                        public getCategoryById(
                                param0: string,
                                param1: java.lang.Long,
                                param2: java.util.Locale,
                                param3: com.zendesk.service.ZendeskCallback): void;

                        public searchArticles(
                                param0: string,
                                param1: string,
                                param2: java.util.Locale,
                                param3: string,
                                param4: string,
                                param5: string,
                                param6: string,
                                param7: java.lang.Integer,
                                param8: java.lang.Integer,
                                param9: com.zendesk.service.ZendeskCallback): void;

                        public submitRecordArticleView(
                                param0: string,
                                param1: java.lang.Long,
                                param2: java.util.Locale,
                                param3: com.zendesk.sdk.model.helpcenter.RecordArticleViewRequest,
                                param4: com.zendesk.service.ZendeskCallback): void;

                        public getSectionsForCategory(
                                param0: string,
                                param1: java.lang.Long,
                                param2: java.util.Locale,
                                param3: com.zendesk.service.ZendeskCallback): void;

                        public upvoteArticle(
                                param0: string,
                                param1: java.lang.Long,
                                param2: string,
                                param3: com.zendesk.service.ZendeskCallback): void;

                        public deleteVote(
                                param0: string,
                                param1: java.lang.Long,
                                param2: com.zendesk.service.ZendeskCallback): void;
                    }
                }
            }
        }
    }
}

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
                    export class ZendeskNetworkInfoProvider extends java.lang.Object implements com.zendesk.sdk.network.NetworkInfoProvider, com.zendesk.sdk.network.NetworkAware {
                        public addNetworkAwareListener(
                                param0: java.lang.Integer,
                                param1: com.zendesk.sdk.network.NetworkAware): void;

                        public removeRetryAction(param0: java.lang.Integer): void;

                        public unregister(): void;

                        public onNetworkAvailable(): void;

                        public onNetworkUnavailable(): void;

                        public register(): void;

                        public clearNetworkAwareListeners(): void;

                        public clearRetryActions(): void;

                        public removeNetworkAwareListener(param0: java.lang.Integer): void;

                        public isNetworkAvailable(): boolean;

                        public addRetryAction(
                                param0: java.lang.Integer,
                                param1: com.zendesk.sdk.network.RetryAction): void;
                    }
                    export module ZendeskNetworkInfoProvider {
                        export class NetworkAvailabilityBroadcastReceiver extends android.content.BroadcastReceiver {
                            public onReceive(
                                    param0: android.content.Context,
                                    param1: android.content.Intent): void;
                        }
                    }
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
                    export class ZendeskPicassoProvider extends java.lang.Object {
                        public static getInstance(param0: android.content.Context): /*com.squareup.picasso.Picasso*/any;
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
                    export class ZendeskProviderStore extends java.lang.Object implements com.zendesk.sdk.network.impl.ProviderStore {
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
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module network {
                export module impl {
                    export class ZendeskPushRegistrationProvider extends java.lang.Object implements com.zendesk.sdk.network.PushRegistrationProvider {
                        public registerDeviceWithUAChannelId(
                                param0: string,
                                param1: java.util.Locale,
                                param2: com.zendesk.service.ZendeskCallback): void;

                        public registerDeviceWithIdentifier(
                                param0: string,
                                param1: java.util.Locale,
                                param2: com.zendesk.service.ZendeskCallback): void;

                        public unregisterDevice(
                                param0: string,
                                param1: com.zendesk.service.ZendeskCallback): void;
                    }
                    export module ZendeskPushRegistrationProvider {
                        export class TokenType extends java.lang.Enum<any> {
                            public static Identifier: com.zendesk.sdk.network.impl.ZendeskPushRegistrationProvider.TokenType;
                            public static UrbanAirshipChannelId: com.zendesk.sdk.network.impl.ZendeskPushRegistrationProvider.TokenType;

                            public static values(): native.Array<com.zendesk.sdk.network.impl.ZendeskPushRegistrationProvider.TokenType>;

                            public static valueOf(param0: string): com.zendesk.sdk.network.impl.ZendeskPushRegistrationProvider.TokenType;
                            public static valueOf(
                                    param0: java.lang.Class<any>,
                                    param1: string): java.lang.Enum<any>;
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
                    export class ZendeskPushRegistrationService extends java.lang.Object {
                        public registerDevice(
                                param0: string,
                                param1: com.zendesk.sdk.model.push.PushRegistrationRequestWrapper,
                                param2: com.zendesk.service.ZendeskCallback): void;

                        public unregisterDevice(
                                param0: string,
                                param1: string,
                                param2: com.zendesk.service.ZendeskCallback): void;
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
                    export class ZendeskRequestInterceptor extends java.lang.Object implements okhttp3Interceptor {
                        public intercept(param0: okhttp3InterceptorChain): okhttp3Response;

                        public constructor(
                                param0: string,
                                param1: string);
                    }
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
                export module impl {
                    export class ZendeskRequestProvider extends java.lang.Object implements com.zendesk.sdk.network.RequestProvider {
                        public addComment(
                                param0: string,
                                param1: com.zendesk.sdk.model.request.EndUserComment,
                                param2: com.zendesk.service.ZendeskCallback): void;

                        public getComments(
                                param0: string,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public getRequest(
                                param0: string,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public createRequest(
                                param0: com.zendesk.sdk.model.request.CreateRequest,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public getTicketFormsById(
                                param0: java.util.List<any>,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public getAllRequests(param0: com.zendesk.service.ZendeskCallback): void;

                        public getRequests(
                                param0: string,
                                param1: com.zendesk.service.ZendeskCallback): void;
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
                    export class ZendeskRequestService extends java.lang.Object {
                        public createRequest(
                                param0: string,
                                param1: string,
                                param2: com.zendesk.sdk.model.request.CreateRequest,
                                param3: com.zendesk.service.ZendeskCallback): void;
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
                    export class ZendeskSdkSettingsProvider extends java.lang.Object implements com.zendesk.sdk.network.SdkSettingsProvider {
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
                    export class ZendeskSdkSettingsService extends java.lang.Object {
                        public getSettings(
                                param0: string,
                                param1: string,
                                param2: com.zendesk.service.ZendeskCallback): void;
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
                    export class ZendeskSettingsHelper extends java.lang.Object implements com.zendesk.sdk.network.SettingsHelper {
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
                    export class ZendeskUploadProvider extends java.lang.Object implements com.zendesk.sdk.network.UploadProvider {
                        public uploadAttachment(
                                param0: string,
                                param1: java.io.File,
                                param2: string,
                                param3: com.zendesk.service.ZendeskCallback): void;

                        public deleteAttachment(
                                param0: string,
                                param1: com.zendesk.service.ZendeskCallback): void;
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
                    export class ZendeskUploadService extends java.lang.Object {
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
                    export class ZendeskUserProvider extends java.lang.Object implements com.zendesk.sdk.network.UserProvider {
                        public setUserFields(
                                param0: java.util.Map<any,any>,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public getUser(param0: com.zendesk.service.ZendeskCallback): void;

                        public deleteTags(
                                param0: java.util.List<any>,
                                param1: com.zendesk.service.ZendeskCallback): void;

                        public getUserFields(param0: com.zendesk.service.ZendeskCallback): void;

                        public addTags(
                                param0: java.util.List<any>,
                                param1: com.zendesk.service.ZendeskCallback): void;
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
                    export class ZendeskUserService extends java.lang.Object {
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
                export class BatteryStateBroadcastReceiver extends android.content.BroadcastReceiver {
                    public onReceive(
                            param0: android.content.Context,
                            param1: android.content.Intent): void;

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
                export class PowerConfig extends java.lang.Object {
                    public static FIFTEEN_PERCENT_BATTERY_CHARGE: number;
                    public static THIRTY_PERCENT_BATTERY_CHARGE: number;

                    public isBatteryLow(): boolean;

                    public static getInstance(param0: android.content.Context): com.zendesk.sdk.power.PowerConfig;

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
                export class BuildConfig extends java.lang.Object {
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

declare module com {
    export module zendesk {
        export module sdk {
            export module rating {
                export class RateMyAppButton extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.rating.RateMyAppButton interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
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
                export class RateMyAppRule extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.rating.RateMyAppRule interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
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
                    export abstract class BaseRateMyAppButton extends java.lang.Object implements com.zendesk.sdk.rating.RateMyAppButton {
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
                    export class IdentityRateMyAppRule extends java.lang.Object implements com.zendesk.sdk.rating.RateMyAppRule {
                        public permitsShowOfDialog(): boolean;

                        public constructor(param0: android.content.Context);
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
                    export class MetricsRateMyAppRule extends java.lang.Object implements com.zendesk.sdk.rating.RateMyAppRule {
                        public permitsShowOfDialog(): boolean;

                        public constructor(param0: android.content.Context);
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
                    export class NetworkRateMyAppRule extends java.lang.Object implements com.zendesk.sdk.rating.RateMyAppRule {
                        public permitsShowOfDialog(): boolean;

                        public constructor(param0: android.content.Context);
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

                        public constructor(param0: android.content.Context);

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
                    export class RateMyAppRules extends java.lang.Object {
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

                        public constructor(
                                param0: androidsupportv4appFragmentActivity,
                                param1: com.zendesk.sdk.feedback.FeedbackConnector);

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

                        public constructor(param0: android.content.Context);

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
                    export class SettingsRateMyAppRule extends java.lang.Object implements com.zendesk.sdk.rating.RateMyAppRule {
                        public permitsShowOfDialog(): boolean;

                        public constructor(param0: android.content.Context);
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

                        public getTags(): java.util.List<any>;

                        public constructor(param0: android.content.Context);
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

                        public onCreateView(
                                param0: androidviewLayoutInflater,
                                param1: androidviewViewGroup,
                                param2: androidosBundle): androidviewView;

                        public static newInstance(param0: com.zendesk.sdk.feedback.FeedbackConnector): com.zendesk.sdk.rating.ui.FeedbackDialog;
                    }
                    export module FeedbackDialog {
                        export class NullSafeFeedbackConnector extends java.lang.Object implements com.zendesk.sdk.feedback.FeedbackConnector {
                            public sendFeedback(
                                    param0: string,
                                    param1: java.util.List<any>,
                                    param2: com.zendesk.service.ZendeskCallback): void;

                            public isValid(): boolean;
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module rating {
                export module ui {
                    export class RateMyAppButtonContainer extends androidwidgetLinearLayout {
                        public isLayoutRequested(): boolean;

                        public onKeyDown(
                                param0: number,
                                param1: androidviewKeyEvent): boolean;

                        public focusableViewAvailable(param0: androidviewView): void;

                        public showContextMenuForChild(param0: androidviewView): boolean;

                        public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

                        public focusSearch(param0: number): androidviewView;

                        public sendAccessibilityEvent(param0: number): void;

                        public childDrawableStateChanged(param0: androidviewView): void;

                        public addView(
                                param0: androidviewView,
                                param1: number): void;
                        public addView(
                                param0: androidviewView,
                                param1: number,
                                param2: androidviewViewGroupLayoutParams): void;

                        public constructor(
                                param0: android.content.Context,
                                param1: androidutilAttributeSet,
                                param2: number);

                        public requestTransparentRegion(param0: androidviewView): void;

                        public onKeyUp(
                                param0: number,
                                param1: androidviewKeyEvent): boolean;

                        public constructor(
                                param0: android.content.Context,
                                param1: androidutilAttributeSet);

                        public getParent(): androidviewViewParent;

                        public addView(
                                param0: androidviewView,
                                param1: androidviewViewGroupLayoutParams): void;

                        public onKeyMultiple(
                                param0: number,
                                param1: number,
                                param2: androidviewKeyEvent): boolean;

                        public requestChildRectangleOnScreen(
                                param0: androidviewView,
                                param1: android.graphics.Rect,
                                param2: boolean): boolean;

                        public onKeyLongPress(
                                param0: number,
                                param1: androidviewKeyEvent): boolean;

                        public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                        public startActionModeForChild(
                                param0: androidviewView,
                                param1: androidviewActionModeCallback): androidviewActionMode;

                        public recomputeViewAttributes(param0: androidviewView): void;

                        public createContextMenu(param0: androidviewContextMenu): void;

                        public unscheduleDrawable(
                                param0: android.graphics.drawable.Drawable,
                                param1: java.lang.Runnable): void;

                        public removeView(param0: androidviewView): void;

                        public scheduleDrawable(
                                param0: android.graphics.drawable.Drawable,
                                param1: java.lang.Runnable,
                                param2: number): void;

                        public requestFitSystemWindows(): void;

                        public requestSendAccessibilityEvent(
                                param0: androidviewView,
                                param1: androidviewaccessibilityAccessibilityEvent): boolean;

                        public clearChildFocus(param0: androidviewView): void;

                        public requestChildFocus(
                                param0: androidviewView,
                                param1: androidviewView): void;

                        public getParentForAccessibility(): androidviewViewParent;

                        public bringChildToFront(param0: androidviewView): void;

                        public sendAccessibilityEventUnchecked(param0: androidviewaccessibilityAccessibilityEvent): void;

                        public constructor(
                                param0: android.content.Context,
                                param1: java.util.List<any>);

                        public setDismissableListener(param0: com.zendesk.sdk.rating.ui.RateMyAppButtonContainer.DismissableListener): void;

                        public focusSearch(
                                param0: androidviewView,
                                param1: number): androidviewView;

                        public addView(param0: androidviewView): void;

                        public getChildVisibleRect(
                                param0: androidviewView,
                                param1: android.graphics.Rect,
                                param2: androidgraphicsPoint): boolean;

                        public requestDisallowInterceptTouchEvent(param0: boolean): void;

                        public invalidateChild(
                                param0: androidviewView,
                                param1: android.graphics.Rect): void;

                        public invalidateChildInParent(
                                param0: native.Array<number>,
                                param1: android.graphics.Rect): androidviewViewParent;

                        public addView(
                                param0: androidviewView,
                                param1: number,
                                param2: number): void;

                        public setRateMyAppSelectionListener(param0: com.zendesk.sdk.rating.ui.RateMyAppButtonContainer.RateMyAppSelectionListener): void;

                        public requestLayout(): void;

                        public constructor(param0: android.content.Context);

                        public updateViewLayout(
                                param0: androidviewView,
                                param1: androidviewViewGroupLayoutParams): void;
                    }
                    export module RateMyAppButtonContainer {
                        export class DismissableListener extends java.lang.Object {
                            /**
                             * Constructs a new instance of the
                             * com.zendesk.sdk.rating.ui.RateMyAppButtonContainer$DismissableListener interface with
                             * the provided implementation.
                             */
                            public constructor(
                                    implementation: {
                                        dismissDialog(): void;
                                    });

                            public dismissDialog(): void;
                        }
                        export class RateMyAppSelectionListener extends java.lang.Object implements java.io.Serializable {
                            /**
                             * Constructs a new instance of the
                             * com.zendesk.sdk.rating.ui.RateMyAppButtonContainer$RateMyAppSelectionListener interface
                             * with the provided implementation.
                             */
                            public constructor(
                                    implementation: {
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
                    export class RateMyAppDialog extends com.zendesk.sdk.ui.ZendeskDialog implements java.io.Serializable {
                        public static RMA_DIALOG_TAG: string;

                        public constructor();

                        public onCreateView(
                                param0: androidviewLayoutInflater,
                                param1: androidviewViewGroup,
                                param2: androidosBundle): androidviewView;

                        public showAlways(param0: androidsupportv4appFragmentActivity): void;

                        public onCreateDialog(param0: androidosBundle): androidappDialog;

                        public show(param0: androidsupportv4appFragmentActivity): void;

                        public tearDownDialog(param0: androidsupportv4appFragmentManager): void;

                        public show(
                                param0: androidsupportv4appFragmentActivity,
                                param1: boolean): void;

                        public onStart(): void;
                    }
                    export module RateMyAppDialog {
                        export class Builder extends java.lang.Object {
                            public withDontRemindMeAgainButton(): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;

                            public withRules(param0: native.Array<com.zendesk.sdk.rating.RateMyAppRule>): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;

                            public build(): com.zendesk.sdk.rating.ui.RateMyAppDialog;

                            public withSendFeedbackButton(
                                    param0: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration,
                                    param1: com.zendesk.sdk.network.SubmissionListener): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;

                            public constructor(param0: androidsupportv4appFragmentActivity);

                            public withSelectionListener(param0: com.zendesk.sdk.rating.ui.RateMyAppButtonContainer.RateMyAppSelectionListener): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;

                            public withButton(param0: com.zendesk.sdk.rating.RateMyAppButton): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;

                            public withAndroidStoreRatingButton(): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;

                            public withSendFeedbackButton(param0: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;
                            public withSendFeedbackButton(): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;

                            public withOnShowListener(param0: com.zendesk.sdk.rating.ui.RateMyAppDialog.OnShowListener): com.zendesk.sdk.rating.ui.RateMyAppDialog.Builder;
                        }
                        export class OnShowListener extends java.lang.Object implements java.io.Serializable {
                            /**
                             * Constructs a new instance of the
                             * com.zendesk.sdk.rating.ui.RateMyAppDialog$OnShowListener interface with the provided
                             * implementation.
                             */
                            public constructor(
                                    implementation: {
                                        onShow(param0: android.content.DialogInterface): void;
                                    });

                            public onShow(param0: android.content.DialogInterface): void;
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
                export class CommentWithUser extends java.lang.Object {
                    public static build(
                            param0: com.zendesk.sdk.model.request.CommentResponse,
                            param1: com.zendesk.sdk.model.request.User): com.zendesk.sdk.requests.CommentWithUser;
                    public static build(
                            param0: com.zendesk.sdk.model.request.CommentResponse,
                            param1: java.util.List<any>): com.zendesk.sdk.requests.CommentWithUser;

                    public getAuthor(): com.zendesk.sdk.model.request.User;

                    public getComment(): com.zendesk.sdk.model.request.CommentResponse;
                }
            }
        }
    }
}

/// <reference path="./com.zendesk.belvedere.Belvedere.d.ts" />
/// <reference path="./com.zendesk.sdk.requests.ImageLoader.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module requests {
                export class ImageLoader extends java.lang.Enum<any> {
                    public static INSTANCE: com.zendesk.sdk.requests.ImageLoader;

                    public static valueOf(param0: string): com.zendesk.sdk.requests.ImageLoader;
                    public static valueOf(
                            param0: java.lang.Class<any>,
                            param1: string): java.lang.Enum<any>;

                    public static values(): native.Array<com.zendesk.sdk.requests.ImageLoader>;
                }
                export module ImageLoader {
                    export class DownloadImageToExternalStorage extends android.os.AsyncTask<any, any, any> {
                        public constructor();

                        public doInBackground(param0: native.Array<java.lang.Object>): java.lang.Object;
                        public doInBackground(param0: native.Array<com.zendesk.sdk.requests.ImageLoader.TaskData>): com.zendesk.sdk.requests.ImageLoader.Result;

                        public onPostExecute(param0: java.lang.Object): void;
                        public onPostExecute(param0: com.zendesk.sdk.requests.ImageLoader.Result): void;

                        public constructor(
                                param0: com.zendesk.sdk.requests.ImageLoader,
                                param1: com.zendesk.service.ZendeskCallback,
                                param2: com.zendesk.belvedere.Belvedere);
                    }
                    export class Result extends java.lang.Object {
                        public getResult(): java.lang.Object;
                    }
                    export class TaskData extends java.lang.Object {
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
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module requests {
                export class RequestActivity extends com.zendesk.sdk.ui.NetworkAwareActionbarActivity {
                    public static FRAGMENT_TAG: string;

                    public onCreateOptionsMenu(param0: androidviewMenu): boolean;

                    public onRetryAvailable(
                            param0: string,
                            param1: androidviewViewOnClickListener): void;

                    public constructor();

                    public onNetworkAvailable(): void;

                    public onCreate(param0: androidosBundle): void;

                    public onRetryUnavailable(): void;

                    public onNetworkUnavailable(): void;

                    public static startActivity(
                            param0: android.content.Context,
                            param1: com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration): void;

                    public onOptionsItemSelected(param0: androidviewMenuItem): boolean;
                }
            }
        }
    }
}

import androidwidgetRelativeLayout = android.widget.RelativeLayout;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./com.zendesk.sdk.model.request.Attachment.d.ts" />
/// <reference path="./com.zendesk.sdk.requests.CommentWithUser.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module requests {
                export class RequestCommentsListAdapter extends android.widget.ArrayAdapter<any> {
                    public constructor(
                            param0: android.content.Context,
                            param1: number,
                            param2: number,
                            param3: native.Array<java.lang.Object>);

                    public getViewTypeCount(): number;

                    public areAllItemsEnabled(): boolean;

                    public getDropDownView(
                            param0: number,
                            param1: androidviewView,
                            param2: androidviewViewGroup): androidviewView;

                    public constructor(
                            param0: android.content.Context,
                            param1: number,
                            param2: number,
                            param3: java.util.List<any>);
                    public constructor(
                            param0: android.content.Context,
                            param1: number,
                            param2: native.Array<java.lang.Object>);
                    public constructor(
                            param0: android.content.Context,
                            param1: number);
                    public constructor(
                            param0: android.content.Context,
                            param1: number,
                            param2: java.util.List<any>);

                    public getView(
                            param0: number,
                            param1: androidviewView,
                            param2: androidviewViewGroup): androidviewView;

                    public constructor(
                            param0: android.content.Context,
                            param1: number,
                            param2: number);

                    public getFilter(): androidwidgetFilter;

                    public constructor();

                    public isEnabled(param0: number): boolean;

                    public constructor(
                            param0: android.content.Context,
                            param1: number,
                            param2: java.util.List<any>,
                            param3: com.zendesk.sdk.requests.RequestCommentsListAdapter.AttachmentOnClickListener);

                    public getItemViewType(param0: number): number;
                }
                export module RequestCommentsListAdapter {
                    export class AgentRowIdHolder extends java.lang.Object implements com.zendesk.sdk.requests.RequestCommentsListAdapter.IdHolder {
                        public getAvatarId(): number;

                        public getContainerId(): number;

                        public getAttachmentsContainerId(): number;

                        public getNameId(): number;

                        public getDateId(): number;

                        public getResponseId(): number;
                    }
                    export class AttachmentOnClickListener extends java.lang.Object {
                        /**
                         * Constructs a new instance of the
                         * com.zendesk.sdk.requests.RequestCommentsListAdapter$AttachmentOnClickListener interface with
                         * the provided implementation.
                         */
                        public constructor(
                                implementation: {
                                    onAttachmentClicked(
                                            param0: androidviewView,
                                            param1: com.zendesk.sdk.model.request.Attachment): void;
                                });

                        public onAttachmentClicked(
                                param0: androidviewView,
                                param1: com.zendesk.sdk.model.request.Attachment): void;
                    }
                    export class CommentRow extends androidwidgetRelativeLayout implements com.zendesk.sdk.ui.ListRowView {
                        public isLayoutRequested(): boolean;

                        public onKeyDown(
                                param0: number,
                                param1: androidviewKeyEvent): boolean;

                        public focusableViewAvailable(param0: androidviewView): void;

                        public bind(param0: java.lang.Object): void;

                        public showContextMenuForChild(param0: androidviewView): boolean;

                        public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

                        public focusSearch(param0: number): androidviewView;

                        public sendAccessibilityEvent(param0: number): void;

                        public childDrawableStateChanged(param0: androidviewView): void;

                        public addView(
                                param0: androidviewView,
                                param1: number): void;
                        public addView(
                                param0: androidviewView,
                                param1: number,
                                param2: androidviewViewGroupLayoutParams): void;

                        public constructor(
                                param0: android.content.Context,
                                param1: androidutilAttributeSet,
                                param2: number);

                        public requestTransparentRegion(param0: androidviewView): void;

                        public onKeyUp(
                                param0: number,
                                param1: androidviewKeyEvent): boolean;

                        public constructor(
                                param0: android.content.Context,
                                param1: androidutilAttributeSet);

                        public getParent(): androidviewViewParent;

                        public addView(
                                param0: androidviewView,
                                param1: androidviewViewGroupLayoutParams): void;

                        public onKeyMultiple(
                                param0: number,
                                param1: number,
                                param2: androidviewKeyEvent): boolean;

                        public requestChildRectangleOnScreen(
                                param0: androidviewView,
                                param1: android.graphics.Rect,
                                param2: boolean): boolean;

                        public bind(param0: com.zendesk.sdk.requests.CommentWithUser): void;

                        public onKeyLongPress(
                                param0: number,
                                param1: androidviewKeyEvent): boolean;

                        public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                        public startActionModeForChild(
                                param0: androidviewView,
                                param1: androidviewActionModeCallback): androidviewActionMode;

                        public recomputeViewAttributes(param0: androidviewView): void;

                        public createContextMenu(param0: androidviewContextMenu): void;

                        public unscheduleDrawable(
                                param0: android.graphics.drawable.Drawable,
                                param1: java.lang.Runnable): void;

                        public removeView(param0: androidviewView): void;

                        public constructor(
                                param0: android.content.Context,
                                param1: com.zendesk.sdk.requests.RequestCommentsListAdapter.IdHolder,
                                param2: com.zendesk.sdk.requests.RequestCommentsListAdapter.AttachmentOnClickListener);

                        public scheduleDrawable(
                                param0: android.graphics.drawable.Drawable,
                                param1: java.lang.Runnable,
                                param2: number): void;

                        public requestFitSystemWindows(): void;

                        public requestSendAccessibilityEvent(
                                param0: androidviewView,
                                param1: androidviewaccessibilityAccessibilityEvent): boolean;

                        public clearChildFocus(param0: androidviewView): void;

                        public requestChildFocus(
                                param0: androidviewView,
                                param1: androidviewView): void;

                        public getParentForAccessibility(): androidviewViewParent;

                        public bringChildToFront(param0: androidviewView): void;

                        public sendAccessibilityEventUnchecked(param0: androidviewaccessibilityAccessibilityEvent): void;

                        public focusSearch(
                                param0: androidviewView,
                                param1: number): androidviewView;

                        public addView(param0: androidviewView): void;

                        public getChildVisibleRect(
                                param0: androidviewView,
                                param1: android.graphics.Rect,
                                param2: androidgraphicsPoint): boolean;

                        public requestDisallowInterceptTouchEvent(param0: boolean): void;

                        public invalidateChild(
                                param0: androidviewView,
                                param1: android.graphics.Rect): void;

                        public invalidateChildInParent(
                                param0: native.Array<number>,
                                param1: android.graphics.Rect): androidviewViewParent;

                        public getView(): androidviewView;

                        public addView(
                                param0: androidviewView,
                                param1: number,
                                param2: number): void;

                        public requestLayout(): void;

                        public constructor(param0: android.content.Context);

                        public updateViewLayout(
                                param0: androidviewView,
                                param1: androidviewViewGroupLayoutParams): void;
                    }
                    export class CommentRowAttachmentHelper extends java.lang.Object {
                        public static heightMap: java.util.Map<any,any>;
                    }
                    export class EndUserRowIdHolder extends java.lang.Object implements com.zendesk.sdk.requests.RequestCommentsListAdapter.IdHolder {
                        public getAvatarId(): number;

                        public getContainerId(): number;

                        public getAttachmentsContainerId(): number;

                        public getNameId(): number;

                        public getDateId(): number;

                        public getResponseId(): number;
                    }
                    export class IdHolder extends java.lang.Object {
                        /**
                         * Constructs a new instance of the
                         * com.zendesk.sdk.requests.RequestCommentsListAdapter$IdHolder interface with the provided
                         * implementation.
                         */
                        public constructor(
                                implementation: {
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
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module requests {
                export class RequestListFragment {
                    public onAttach(param0: android.content.Context): void;

                    public refreshRequests(): void;

                    public constructor();

                    public onCreateView(
                            param0: androidviewLayoutInflater,
                            param1: androidviewViewGroup,
                            param2: androidosBundle): androidviewView;

                    public onNetworkAvailable(): void;

                    public onPause(): void;

                    public onDetach(): void;

                    public onNetworkUnavailable(): void;

                    public onResume(): void;

                    public setRequestLoadingListener(param0: com.zendesk.sdk.network.RequestLoadingListener): void;
                }
                export module RequestListFragment {
                    export class RequestsCallback extends com.zendesk.service.ZendeskCallback {
                        public onError(param0: com.zendesk.service.ErrorResponse): void;

                        public onSuccess(param0: java.lang.Object): void;
                        public onSuccess(param0: java.util.List<any>): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./com.zendesk.sdk.model.request.Request.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module requests {
                export class RequestsAdapter extends android.widget.ArrayAdapter<any> {
                    public constructor(
                            param0: android.content.Context,
                            param1: number,
                            param2: number,
                            param3: native.Array<java.lang.Object>);

                    public areAllItemsEnabled(): boolean;

                    public getDropDownView(
                            param0: number,
                            param1: androidviewView,
                            param2: androidviewViewGroup): androidviewView;

                    public constructor(
                            param0: android.content.Context,
                            param1: number,
                            param2: number,
                            param3: java.util.List<any>);
                    public constructor(
                            param0: android.content.Context,
                            param1: number,
                            param2: native.Array<java.lang.Object>);
                    public constructor(
                            param0: android.content.Context,
                            param1: java.util.List<any>);
                    public constructor(
                            param0: android.content.Context,
                            param1: number);
                    public constructor(
                            param0: android.content.Context,
                            param1: number,
                            param2: java.util.List<any>);

                    public getView(
                            param0: number,
                            param1: androidviewView,
                            param2: androidviewViewGroup): androidviewView;

                    public constructor(
                            param0: android.content.Context,
                            param1: number,
                            param2: number);

                    public getFilter(): androidwidgetFilter;

                    public constructor();

                    public isEnabled(param0: number): boolean;
                }
                export module RequestsAdapter {
                    export class RequestRow extends androidwidgetRelativeLayout implements com.zendesk.sdk.ui.ListRowView {
                        public isLayoutRequested(): boolean;

                        public onKeyDown(
                                param0: number,
                                param1: androidviewKeyEvent): boolean;

                        public focusableViewAvailable(param0: androidviewView): void;

                        public bind(param0: java.lang.Object): void;

                        public showContextMenuForChild(param0: androidviewView): boolean;

                        public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

                        public focusSearch(param0: number): androidviewView;

                        public sendAccessibilityEvent(param0: number): void;

                        public childDrawableStateChanged(param0: androidviewView): void;

                        public addView(
                                param0: androidviewView,
                                param1: number): void;
                        public addView(
                                param0: androidviewView,
                                param1: number,
                                param2: androidviewViewGroupLayoutParams): void;

                        public constructor(
                                param0: android.content.Context,
                                param1: androidutilAttributeSet,
                                param2: number);

                        public requestTransparentRegion(param0: androidviewView): void;

                        public onKeyUp(
                                param0: number,
                                param1: androidviewKeyEvent): boolean;

                        public constructor(
                                param0: android.content.Context,
                                param1: androidutilAttributeSet);

                        public getParent(): androidviewViewParent;

                        public addView(
                                param0: androidviewView,
                                param1: androidviewViewGroupLayoutParams): void;

                        public onKeyMultiple(
                                param0: number,
                                param1: number,
                                param2: androidviewKeyEvent): boolean;

                        public requestChildRectangleOnScreen(
                                param0: androidviewView,
                                param1: android.graphics.Rect,
                                param2: boolean): boolean;

                        public onKeyLongPress(
                                param0: number,
                                param1: androidviewKeyEvent): boolean;

                        public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                        public startActionModeForChild(
                                param0: androidviewView,
                                param1: androidviewActionModeCallback): androidviewActionMode;

                        public recomputeViewAttributes(param0: androidviewView): void;

                        public createContextMenu(param0: androidviewContextMenu): void;

                        public unscheduleDrawable(
                                param0: android.graphics.drawable.Drawable,
                                param1: java.lang.Runnable): void;

                        public removeView(param0: androidviewView): void;

                        public scheduleDrawable(
                                param0: android.graphics.drawable.Drawable,
                                param1: java.lang.Runnable,
                                param2: number): void;

                        public requestFitSystemWindows(): void;

                        public requestSendAccessibilityEvent(
                                param0: androidviewView,
                                param1: androidviewaccessibilityAccessibilityEvent): boolean;

                        public clearChildFocus(param0: androidviewView): void;

                        public requestChildFocus(
                                param0: androidviewView,
                                param1: androidviewView): void;

                        public getParentForAccessibility(): androidviewViewParent;

                        public bringChildToFront(param0: androidviewView): void;

                        public sendAccessibilityEventUnchecked(param0: androidviewaccessibilityAccessibilityEvent): void;

                        public setUnreadIndicator(param0: boolean): void;

                        public focusSearch(
                                param0: androidviewView,
                                param1: number): androidviewView;

                        public addView(param0: androidviewView): void;

                        public getChildVisibleRect(
                                param0: androidviewView,
                                param1: android.graphics.Rect,
                                param2: androidgraphicsPoint): boolean;

                        public requestDisallowInterceptTouchEvent(param0: boolean): void;

                        public invalidateChild(
                                param0: androidviewView,
                                param1: android.graphics.Rect): void;

                        public invalidateChildInParent(
                                param0: native.Array<number>,
                                param1: android.graphics.Rect): androidviewViewParent;

                        public getView(): androidviewView;

                        public addView(
                                param0: androidviewView,
                                param1: number,
                                param2: number): void;

                        public bind(param0: com.zendesk.sdk.model.request.Request): void;

                        public requestLayout(): void;

                        public constructor(param0: android.content.Context);

                        public updateViewLayout(
                                param0: androidviewView,
                                param1: androidviewViewGroupLayoutParams): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module requests {
                export class ViewRequestActivity extends com.zendesk.sdk.ui.NetworkAwareActionbarActivity {
                    public static EXTRA_REQUEST_ID: string;
                    public static EXTRA_SUBJECT: string;

                    public onRetryAvailable(
                            param0: string,
                            param1: androidviewViewOnClickListener): void;

                    public constructor();

                    public onNetworkAvailable(): void;

                    public onCreate(param0: androidosBundle): void;

                    public onRetryUnavailable(): void;

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
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module requests {
                export class ViewRequestFragment {
                    public static EXTRA_REQUEST_ID: string;
                    public static EXTRA_REQUEST_SUBJECT: string;

                    public static newInstance(
                            param0: string,
                            param1: string): com.zendesk.sdk.requests.ViewRequestFragment;

                    public onAttach(param0: android.content.Context): void;

                    public onActivityResult(
                            param0: number,
                            param1: number,
                            param2: android.content.Intent): void;

                    public static newInstance(param0: string): com.zendesk.sdk.requests.ViewRequestFragment;

                    public onCreateView(
                            param0: androidviewLayoutInflater,
                            param1: androidviewViewGroup,
                            param2: androidosBundle): androidviewView;

                    public onCreate(param0: androidosBundle): void;

                    public onDestroy(): void;

                    public setSubmissionListener(param0: com.zendesk.sdk.network.SubmissionListener): void;

                    public onResume(): void;

                    public refreshComments(param0: com.zendesk.sdk.deeplinking.actions.ActionRefreshComments.ActionRefreshCommentsData): void;

                    public constructor();

                    public static newInstance(
                            param0: string,
                            param1: string,
                            param2: com.zendesk.sdk.network.SubmissionListener): com.zendesk.sdk.requests.ViewRequestFragment;

                    public onPause(): void;

                    public onDetach(): void;
                }
                export module ViewRequestFragment {
                    export class Action extends java.lang.Enum<any> {
                        public static SEND_COMMENT: com.zendesk.sdk.requests.ViewRequestFragment.Action;
                        public static LOAD_COMMENTS: com.zendesk.sdk.requests.ViewRequestFragment.Action;
                        public static LOAD_IMAGE: com.zendesk.sdk.requests.ViewRequestFragment.Action;

                        public static valueOf(
                                param0: java.lang.Class<any>,
                                param1: string): java.lang.Enum<any>;

                        public static values(): native.Array<com.zendesk.sdk.requests.ViewRequestFragment.Action>;

                        public static valueOf(param0: string): com.zendesk.sdk.requests.ViewRequestFragment.Action;
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
            export module storage {
                export class HelpCenterSessionCache extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.storage.HelpCenterSessionCache interface with
                     * the provided implementation.
                     */
                    public constructor(
                            implementation: {
                                getLastSearch(): com.zendesk.sdk.model.helpcenter.LastSearch;
                                setLastSearch(
                                        param0: string,
                                        param1: number): void;
                                unsetUniqueSearchResultClick(): void;
                                isUniqueSearchResultClick(): boolean;
                            });

                    public getLastSearch(): com.zendesk.sdk.model.helpcenter.LastSearch;

                    public unsetUniqueSearchResultClick(): void;

                    public setLastSearch(
                            param0: string,
                            param1: number): void;

                    public isUniqueSearchResultClick(): boolean;
                }
            }
        }
    }
}

/// <reference path="./com.zendesk.sdk.model.access.AccessToken.d.ts" />
/// <reference path="./com.zendesk.sdk.model.access.Identity.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module storage {
                export class IdentityStorage extends java.lang.Object implements com.zendesk.sdk.storage.SdkStorage.UserStorage {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.storage.IdentityStorage interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                storeAccessToken(param0: com.zendesk.sdk.model.access.AccessToken): void;
                                getStoredAccessToken(): com.zendesk.sdk.model.access.AccessToken;
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

                    public getIdentity(): com.zendesk.sdk.model.access.Identity;

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

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module storage {
                export class RateMyAppStorage extends java.lang.Object implements com.zendesk.sdk.storage.SdkStorage.UserStorage {
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

                    public constructor(param0: android.content.Context);

                    public isRatedForCurrentVersion(): boolean;

                    public incrementNumberOfLaunches(): void;
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
                export class RequestSessionCache extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.storage.RequestSessionCache interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                updateTicketFormCache(param0: java.util.List<any>): void;
                                getTicketFormsById(param0: java.util.List<any>): java.util.List<any>;
                                containsAllTicketForms(param0: java.util.List<any>): boolean;
                            });

                    public getTicketFormsById(param0: java.util.List<any>): java.util.List<any>;

                    public containsAllTicketForms(param0: java.util.List<any>): boolean;

                    public updateTicketFormCache(param0: java.util.List<any>): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module storage {
                export class RequestStorage extends java.lang.Object implements com.zendesk.sdk.storage.SdkStorage.UserStorage {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.storage.RequestStorage interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                getStoredRequestIds(): java.util.List<any>;
                                storeRequestId(param0: string): void;
                                setCommentCount(
                                        param0: string,
                                        param1: number): void;
                                getCommentCount(param0: string): java.lang.Integer;
                                clearUserData(): void;
                                getCacheKey(): string;
                            });

                    public getStoredRequestIds(): java.util.List<any>;

                    public storeRequestId(param0: string): void;

                    public getCacheKey(): string;

                    public setCommentCount(
                            param0: string,
                            param1: number): void;

                    public clearUserData(): void;

                    public getCommentCount(param0: string): java.lang.Integer;
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
                export class SdkSettingsStorage extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.storage.SdkSettingsStorage interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                hasStoredSdkSettings(): boolean;
                                areSettingsUpToDate(
                                        param0: number,
                                        param1: java.util.concurrent.TimeUnit): boolean;
                                getStoredSettings(): com.zendesk.sdk.model.settings.SafeMobileSettings;
                                setStoredSettings(param0: com.zendesk.sdk.model.settings.SafeMobileSettings): void;
                                deleteStoredSettings(): void;
                            });

                    public hasStoredSdkSettings(): boolean;

                    public areSettingsUpToDate(
                            param0: number,
                            param1: java.util.concurrent.TimeUnit): boolean;

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
                export class SdkStorage extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.storage.SdkStorage interface with the provided
                     * implementation.
                     */
                    public constructor(
                            implementation: {
                                registerUserStorage(param0: com.zendesk.sdk.storage.SdkStorage.UserStorage): void;
                                clearUserData(): void;
                                getUserStorage(): java.util.Set<any>;
                            });

                    public registerUserStorage(param0: com.zendesk.sdk.storage.SdkStorage.UserStorage): void;

                    public getUserStorage(): java.util.Set<any>;

                    public clearUserData(): void;
                }
                export module SdkStorage {
                    export class UserStorage extends java.lang.Object {
                        /**
                         * Constructs a new instance of the com.zendesk.sdk.storage.SdkStorage$UserStorage interface
                         * with the provided implementation.
                         */
                        public constructor(
                                implementation: {
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

/// <reference path="./com.zendesk.sdk.network.impl.ApplicationScope.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.HelpCenterSessionCache.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.RequestSessionCache.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.RequestStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkSettingsStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StorageStore.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.StubStorageStore.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module storage {
                export class StorageInjector extends java.lang.Object {
                    public static injectCachedSdkStorage(param0: com.zendesk.sdk.network.impl.ApplicationScope): com.zendesk.sdk.storage.SdkStorage;

                    public static injectCachedRequestSessionCache(param0: com.zendesk.sdk.network.impl.ApplicationScope): com.zendesk.sdk.storage.RequestSessionCache;

                    public static injectStubStorageStore(param0: com.zendesk.sdk.network.impl.ApplicationScope): com.zendesk.sdk.storage.StubStorageStore;

                    public static injectCachedRequestStorage(param0: com.zendesk.sdk.network.impl.ApplicationScope): com.zendesk.sdk.storage.RequestStorage;

                    public constructor();

                    public static injectCachedSdkSettingsStorage(param0: com.zendesk.sdk.network.impl.ApplicationScope): com.zendesk.sdk.storage.SdkSettingsStorage;

                    public static injectCachedHelpCenterSessionCache(param0: com.zendesk.sdk.network.impl.ApplicationScope): com.zendesk.sdk.storage.HelpCenterSessionCache;

                    public static injectCachedIdentityStorage(param0: com.zendesk.sdk.network.impl.ApplicationScope): com.zendesk.sdk.storage.IdentityStorage;

                    public static injectStorageStore(param0: com.zendesk.sdk.network.impl.ApplicationScope): com.zendesk.sdk.storage.StorageStore;
                }
            }
        }
    }
}

/// <reference path="./com.zendesk.sdk.storage.HelpCenterSessionCache.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.RequestSessionCache.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.RequestStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkSettingsStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkStorage.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module storage {
                export class StorageModule extends java.lang.Object {
                    public getRequestStorage(): com.zendesk.sdk.storage.RequestStorage;

                    public getSdkSettingsStorage(): com.zendesk.sdk.storage.SdkSettingsStorage;

                    public getHelpCenterSessionCache(): com.zendesk.sdk.storage.HelpCenterSessionCache;

                    public getIdentityStorage(): com.zendesk.sdk.storage.IdentityStorage;

                    public getSdkStorage(): com.zendesk.sdk.storage.SdkStorage;

                    public getRequestSessionCache(): com.zendesk.sdk.storage.RequestSessionCache;
                }
            }
        }
    }
}

/// <reference path="./com.zendesk.sdk.storage.HelpCenterSessionCache.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.RequestStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkSettingsStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkStorage.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module storage {
                export class StorageStore extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.storage.StorageStore interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                sdkStorage(): com.zendesk.sdk.storage.SdkStorage;
                                identityStorage(): com.zendesk.sdk.storage.IdentityStorage;
                                requestStorage(): com.zendesk.sdk.storage.RequestStorage;
                                sdkSettingsStorage(): com.zendesk.sdk.storage.SdkSettingsStorage;
                                helpCenterSessionCache(): com.zendesk.sdk.storage.HelpCenterSessionCache;
                            });

                    public helpCenterSessionCache(): com.zendesk.sdk.storage.HelpCenterSessionCache;

                    public sdkStorage(): com.zendesk.sdk.storage.SdkStorage;

                    public sdkSettingsStorage(): com.zendesk.sdk.storage.SdkSettingsStorage;

                    public identityStorage(): com.zendesk.sdk.storage.IdentityStorage;

                    public requestStorage(): com.zendesk.sdk.storage.RequestStorage;
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
                export class StubHelpCenterSessionCache extends java.lang.Object implements com.zendesk.sdk.storage.HelpCenterSessionCache {
                    public getLastSearch(): com.zendesk.sdk.model.helpcenter.LastSearch;

                    public unsetUniqueSearchResultClick(): void;

                    public setLastSearch(
                            param0: string,
                            param1: number): void;

                    public isUniqueSearchResultClick(): boolean;
                }
            }
        }
    }
}

declare module com {
    export module zendesk {
        export module sdk {
            export module storage {
                export class StubIdentity extends java.lang.Object implements com.zendesk.sdk.model.access.Identity {
                }
            }
        }
    }
}

/// <reference path="./com.zendesk.sdk.model.access.AccessToken.d.ts" />
/// <reference path="./com.zendesk.sdk.model.access.Identity.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module storage {
                export class StubIdentityStorage extends java.lang.Object implements com.zendesk.sdk.storage.IdentityStorage {
                    public storeAccessToken(param0: com.zendesk.sdk.model.access.AccessToken): void;

                    public getStoredAccessToken(): com.zendesk.sdk.model.access.AccessToken;

                    public getIdentity(): com.zendesk.sdk.model.access.Identity;

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

/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module storage {
                export class StubRequestStorage extends java.lang.Object implements com.zendesk.sdk.storage.RequestStorage {
                    public getStoredRequestIds(): java.util.List<any>;

                    public storeRequestId(param0: string): void;

                    public getCacheKey(): string;

                    public setCommentCount(
                            param0: string,
                            param1: number): void;

                    public clearUserData(): void;

                    public getCommentCount(param0: string): java.lang.Integer;
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
                export class StubSdkSettingsStorage extends java.lang.Object implements com.zendesk.sdk.storage.SdkSettingsStorage {
                    public hasStoredSdkSettings(): boolean;

                    public areSettingsUpToDate(
                            param0: number,
                            param1: java.util.concurrent.TimeUnit): boolean;

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
                export class StubSdkStorage extends java.lang.Object implements com.zendesk.sdk.storage.SdkStorage {
                    public registerUserStorage(param0: com.zendesk.sdk.storage.SdkStorage.UserStorage): void;

                    public getUserStorage(): java.util.Set<any>;

                    public clearUserData(): void;
                }
            }
        }
    }
}

/// <reference path="./com.zendesk.sdk.storage.HelpCenterSessionCache.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.RequestStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkSettingsStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkStorage.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module storage {
                export class StubStorageStore extends java.lang.Object implements com.zendesk.sdk.storage.StorageStore {
                    public helpCenterSessionCache(): com.zendesk.sdk.storage.HelpCenterSessionCache;

                    public sdkStorage(): com.zendesk.sdk.storage.SdkStorage;

                    public sdkSettingsStorage(): com.zendesk.sdk.storage.SdkSettingsStorage;

                    public identityStorage(): com.zendesk.sdk.storage.IdentityStorage;

                    public requestStorage(): com.zendesk.sdk.storage.RequestStorage;
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
                export class ZendeskHelpCenterSessionCache extends java.lang.Object implements com.zendesk.sdk.storage.HelpCenterSessionCache {
                    public static DEFAULT_SEARCH: com.zendesk.sdk.model.helpcenter.LastSearch;

                    public getLastSearch(): com.zendesk.sdk.model.helpcenter.LastSearch;

                    public unsetUniqueSearchResultClick(): void;

                    public setLastSearch(
                            param0: string,
                            param1: number): void;

                    public isUniqueSearchResultClick(): boolean;
                }
            }
        }
    }
}

/// <reference path="./com.zendesk.sdk.model.access.AccessToken.d.ts" />
/// <reference path="./com.zendesk.sdk.model.access.Identity.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module storage {
                export class ZendeskIdentityStorage extends java.lang.Object implements com.zendesk.sdk.storage.IdentityStorage {
                    public storeAccessToken(param0: com.zendesk.sdk.model.access.AccessToken): void;

                    public getStoredAccessToken(): com.zendesk.sdk.model.access.AccessToken;

                    public getIdentity(): com.zendesk.sdk.model.access.Identity;

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

/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module storage {
                export class ZendeskRequestSessionCache extends java.lang.Object implements com.zendesk.sdk.storage.RequestSessionCache {
                    public getTicketFormsById(param0: java.util.List<any>): java.util.List<any>;

                    public containsAllTicketForms(param0: java.util.List<any>): boolean;

                    public updateTicketFormCache(param0: java.util.List<any>): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module storage {
                export class ZendeskRequestStorage extends java.lang.Object implements com.zendesk.sdk.storage.RequestStorage {
                    public getStoredRequestIds(): java.util.List<any>;

                    public storeRequestId(param0: string): void;

                    public getCacheKey(): string;

                    public setCommentCount(
                            param0: string,
                            param1: number): void;

                    public clearUserData(): void;

                    public getCommentCount(param0: string): java.lang.Integer;
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
                export class ZendeskSdkSettingsStorage extends java.lang.Object implements com.zendesk.sdk.storage.SdkSettingsStorage {
                    public hasStoredSdkSettings(): boolean;

                    public areSettingsUpToDate(
                            param0: number,
                            param1: java.util.concurrent.TimeUnit): boolean;

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
                export class ZendeskSdkStorage extends java.lang.Object implements com.zendesk.sdk.storage.SdkStorage {
                    public registerUserStorage(param0: com.zendesk.sdk.storage.SdkStorage.UserStorage): void;

                    public getUserStorage(): java.util.Set<any>;

                    public clearUserData(): void;
                }
            }
        }
    }
}

/// <reference path="./com.zendesk.sdk.storage.HelpCenterSessionCache.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.IdentityStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.RequestStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkSettingsStorage.d.ts" />
/// <reference path="./com.zendesk.sdk.storage.SdkStorage.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module storage {
                export class ZendeskStorageStore extends java.lang.Object implements com.zendesk.sdk.storage.StorageStore {
                    public helpCenterSessionCache(): com.zendesk.sdk.storage.HelpCenterSessionCache;

                    public sdkStorage(): com.zendesk.sdk.storage.SdkStorage;

                    public sdkSettingsStorage(): com.zendesk.sdk.storage.SdkSettingsStorage;

                    public identityStorage(): com.zendesk.sdk.storage.IdentityStorage;

                    public requestStorage(): com.zendesk.sdk.storage.RequestStorage;
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

                    public showErrorWithRetry(
                            param0: com.zendesk.sdk.support.SupportMvp.ErrorType,
                            param1: com.zendesk.sdk.network.RetryAction): void;

                    public showLoadingState(): void;

                    public isShowingHelp(): boolean;

                    public hideLoadingState(): void;

                    public onResume(): void;

                    public clearSearchResults(): void;

                    public showHelp(param0: com.zendesk.sdk.support.SupportUiConfig): void;

                    public onSaveInstanceState(param0: androidosBundle): void;

                    public onCreateOptionsMenu(param0: androidviewMenu): boolean;

                    public showSearchResults(
                            param0: java.util.List<any>,
                            param1: string): void;

                    public constructor();

                    public onPause(): void;

                    public getContext(): android.content.Context;

                    public onOptionsItemSelected(param0: androidviewMenuItem): boolean;
                }
                export module SupportActivity {
                    export class Builder extends java.lang.Object {
                        public constructor();

                        public withArticlesForCategoryIds(param0: native.Array<number>): com.zendesk.sdk.support.SupportActivity.Builder;

                        public showContactUsButton(param0: boolean): com.zendesk.sdk.support.SupportActivity.Builder;

                        public withArticlesForSectionIds(param0: native.Array<number>): com.zendesk.sdk.support.SupportActivity.Builder;

                        public show(param0: android.content.Context): void;

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
                export class SupportModel extends java.lang.Object implements com.zendesk.sdk.support.SupportMvp.Model {
                    public getSettings(param0: com.zendesk.service.ZendeskCallback): void;

                    public search(
                            param0: java.util.List<any>,
                            param1: java.util.List<any>,
                            param2: string,
                            param3: native.Array<string>,
                            param4: com.zendesk.service.ZendeskCallback): void;
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
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module support {
                export class SupportMvp extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.support.SupportMvp interface with the provided
                     * implementation.
                     */
                    public constructor(implementation: {});
                }
                export module SupportMvp {
                    export class ErrorType extends java.lang.Enum<any> {
                        public static CATEGORY_LOAD: com.zendesk.sdk.support.SupportMvp.ErrorType;
                        public static SECTION_LOAD: com.zendesk.sdk.support.SupportMvp.ErrorType;
                        public static ARTICLES_LOAD: com.zendesk.sdk.support.SupportMvp.ErrorType;

                        public static values(): native.Array<com.zendesk.sdk.support.SupportMvp.ErrorType>;

                        public static valueOf(
                                param0: java.lang.Class<any>,
                                param1: string): java.lang.Enum<any>;
                        public static valueOf(param0: string): com.zendesk.sdk.support.SupportMvp.ErrorType;
                    }
                    export class Model extends java.lang.Object {
                        /**
                         * Constructs a new instance of the com.zendesk.sdk.support.SupportMvp$Model interface with the
                         * provided implementation.
                         */
                        public constructor(
                                implementation: {
                                    search(
                                            param0: java.util.List<any>,
                                            param1: java.util.List<any>,
                                            param2: string,
                                            param3: native.Array<string>,
                                            param4: com.zendesk.service.ZendeskCallback): void;
                                    getSettings(param0: com.zendesk.service.ZendeskCallback): void;
                                });

                        public getSettings(param0: com.zendesk.service.ZendeskCallback): void;

                        public search(
                                param0: java.util.List<any>,
                                param1: java.util.List<any>,
                                param2: string,
                                param3: native.Array<string>,
                                param4: com.zendesk.service.ZendeskCallback): void;
                    }
                    export class Presenter extends java.lang.Object {
                        /**
                         * Constructs a new instance of the com.zendesk.sdk.support.SupportMvp$Presenter interface with
                         * the provided implementation.
                         */
                        public constructor(
                                implementation: {
                                    onResume(param0: com.zendesk.sdk.support.SupportMvp.View): void;
                                    onPause(): void;
                                    onSearchSubmit(param0: string): void;
                                    onLoad(): void;
                                    onErrorWithRetry(
                                            param0: com.zendesk.sdk.support.SupportMvp.ErrorType,
                                            param1: com.zendesk.sdk.network.RetryAction): void;
                                    initWithBundle(param0: androidosBundle): void;
                                    shouldShowConversationsMenuItem(): boolean;
                                    shouldShowSearchMenuItem(): boolean;
                                });

                        public onLoad(): void;

                        public onErrorWithRetry(
                                param0: com.zendesk.sdk.support.SupportMvp.ErrorType,
                                param1: com.zendesk.sdk.network.RetryAction): void;

                        public shouldShowConversationsMenuItem(): boolean;

                        public shouldShowSearchMenuItem(): boolean;

                        public onSearchSubmit(param0: string): void;

                        public onResume(param0: com.zendesk.sdk.support.SupportMvp.View): void;

                        public onPause(): void;

                        public initWithBundle(param0: androidosBundle): void;
                    }
                    export class View extends java.lang.Object {
                        /**
                         * Constructs a new instance of the com.zendesk.sdk.support.SupportMvp$View interface with the
                         * provided implementation.
                         */
                        public constructor(
                                implementation: {
                                    showContactUsButton(): void;
                                    showHelp(param0: com.zendesk.sdk.support.SupportUiConfig): void;
                                    showSearchResults(
                                            param0: java.util.List<any>,
                                            param1: string): void;
                                    clearSearchResults(): void;
                                    showLoadingState(): void;
                                    hideLoadingState(): void;
                                    showRequestList(): void;
                                    showContactZendesk(): void;
                                    showErrorWithRetry(
                                            param0: com.zendesk.sdk.support.SupportMvp.ErrorType,
                                            param1: com.zendesk.sdk.network.RetryAction): void;
                                    showError(param0: number): void;
                                    dismissError(): void;
                                    getContext(): android.content.Context;
                                    isShowingHelp(): boolean;
                                    exitActivity(): void;
                                });

                        public showSearchResults(
                                param0: java.util.List<any>,
                                param1: string): void;

                        public showErrorWithRetry(
                                param0: com.zendesk.sdk.support.SupportMvp.ErrorType,
                                param1: com.zendesk.sdk.network.RetryAction): void;

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

                        public getContext(): android.content.Context;

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
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module support {
                export class SupportPresenter extends java.lang.Object implements com.zendesk.sdk.support.SupportMvp.Presenter, com.zendesk.sdk.network.NetworkAware {
                    public onResume(param0: com.zendesk.sdk.support.SupportMvp.View): void;

                    public onErrorWithRetry(
                            param0: com.zendesk.sdk.support.SupportMvp.ErrorType,
                            param1: com.zendesk.sdk.network.RetryAction): void;

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
                    export class ViewSafeRetryZendeskCallback extends com.zendesk.service.ZendeskCallback {
                        public onError(param0: com.zendesk.service.ErrorResponse): void;

                        public onSuccess(param0: java.lang.Object): void;
                        public onSuccess(param0: java.util.List<any>): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module support {
                export class SupportUiConfig extends java.lang.Object implements androidosParcelable {
                    public static CREATOR: android.os.Parcelable.Creator<any>;

                    public getLabelNames(): native.Array<string>;

                    public isAddListPaddingBottom(): boolean;

                    public getCategoryIds(): java.util.List<any>;

                    public getSectionIds(): java.util.List<any>;

                    public constructor(param0: androidosParcel);

                    public isCollapseCategories(): boolean;

                    public describeContents(): number;

                    public isShowConversationsMenuButton(): boolean;

                    public writeToParcel(
                            param0: androidosParcel,
                            param1: number): void;
                }
                export module SupportUiConfig {
                    export class Builder extends java.lang.Object {
                    }
                }
            }
        }
    }
}


/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.AdapterView.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.Article.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.Attachment.d.ts" />
/// <reference path="./com.zendesk.sdk.model.helpcenter.SimpleArticle.d.ts" />
/// <reference path="./com.zendesk.sdk.ui.LoadingState.d.ts" />
/// <reference path="./com.zendesk.service.ErrorResponse.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module support {
                export class ViewArticleActivity extends com.zendesk.sdk.ui.NetworkAwareActionbarActivity implements android.widget.AdapterView.OnItemClickListener {
                    public static EXTRA_ARTICLE: string;
                    public static EXTRA_SIMPLE_ARTICLE: string;

                    public onRetryAvailable(
                            param0: string,
                            param1: androidviewViewOnClickListener): void;

                    public onCreate(param0: androidosBundle): void;

                    public onDestroy(): void;

                    public onNetworkUnavailable(): void;

                    public onResume(): void;

                    public static startActivity(
                            param0: android.content.Context,
                            param1: com.zendesk.sdk.model.helpcenter.Article): void;

                    public constructor();

                    public onNetworkAvailable(): void;

                    public onPause(): void;

                    public onItemClick(
                            param0: android.widget.AdapterView<any>,
                            param1: androidviewView,
                            param2: number,
                            param3: number): void;

                    public onRetryUnavailable(): void;

                    public static startActivity(
                            param0: android.content.Context,
                            param1: com.zendesk.sdk.model.helpcenter.SimpleArticle): void;

                    public onOptionsItemSelected(param0: androidviewMenuItem): boolean;

                    public setLoadingState(param0: com.zendesk.sdk.ui.LoadingState): void;
                }
                export module ViewArticleActivity {
                    export class ArticleAttachmentAdapter extends android.widget.ArrayAdapter<any> {
                        public isEnabled(param0: number): boolean;

                        public areAllItemsEnabled(): boolean;

                        public constructor();

                        public getFilter(): androidwidgetFilter;

                        public constructor(
                                param0: android.content.Context,
                                param1: number);
                        public constructor(
                                param0: android.content.Context,
                                param1: number,
                                param2: number,
                                param3: java.util.List<any>);

                        public getView(
                                param0: number,
                                param1: androidviewView,
                                param2: androidviewViewGroup): androidviewView;

                        public constructor(
                                param0: android.content.Context,
                                param1: number,
                                param2: java.util.List<any>);
                        public constructor(
                                param0: android.content.Context,
                                param1: java.util.List<any>);
                        public constructor(
                                param0: android.content.Context,
                                param1: number,
                                param2: number,
                                param3: native.Array<java.lang.Object>);
                        public constructor(
                                param0: android.content.Context,
                                param1: number,
                                param2: number);
                        public constructor(
                                param0: android.content.Context,
                                param1: number,
                                param2: native.Array<java.lang.Object>);

                        public getDropDownView(
                                param0: number,
                                param1: androidviewView,
                                param2: androidviewViewGroup): androidviewView;
                    }
                    export class ArticleAttachmentRow extends androidwidgetRelativeLayout implements com.zendesk.sdk.ui.ListRowView {
                        public isLayoutRequested(): boolean;

                        public onKeyDown(
                                param0: number,
                                param1: androidviewKeyEvent): boolean;

                        public focusableViewAvailable(param0: androidviewView): void;

                        public bind(param0: java.lang.Object): void;

                        public showContextMenuForChild(param0: androidviewView): boolean;

                        public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

                        public focusSearch(param0: number): androidviewView;

                        public sendAccessibilityEvent(param0: number): void;

                        public childDrawableStateChanged(param0: androidviewView): void;

                        public addView(
                                param0: androidviewView,
                                param1: number): void;
                        public addView(
                                param0: androidviewView,
                                param1: number,
                                param2: androidviewViewGroupLayoutParams): void;

                        public constructor(
                                param0: android.content.Context,
                                param1: androidutilAttributeSet,
                                param2: number);

                        public requestTransparentRegion(param0: androidviewView): void;

                        public onKeyUp(
                                param0: number,
                                param1: androidviewKeyEvent): boolean;

                        public constructor(
                                param0: android.content.Context,
                                param1: androidutilAttributeSet);

                        public getParent(): androidviewViewParent;

                        public addView(
                                param0: androidviewView,
                                param1: androidviewViewGroupLayoutParams): void;

                        public onKeyMultiple(
                                param0: number,
                                param1: number,
                                param2: androidviewKeyEvent): boolean;

                        public requestChildRectangleOnScreen(
                                param0: androidviewView,
                                param1: android.graphics.Rect,
                                param2: boolean): boolean;

                        public onKeyLongPress(
                                param0: number,
                                param1: androidviewKeyEvent): boolean;

                        public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                        public startActionModeForChild(
                                param0: androidviewView,
                                param1: androidviewActionModeCallback): androidviewActionMode;

                        public recomputeViewAttributes(param0: androidviewView): void;

                        public createContextMenu(param0: androidviewContextMenu): void;

                        public unscheduleDrawable(
                                param0: android.graphics.drawable.Drawable,
                                param1: java.lang.Runnable): void;

                        public removeView(param0: androidviewView): void;

                        public scheduleDrawable(
                                param0: android.graphics.drawable.Drawable,
                                param1: java.lang.Runnable,
                                param2: number): void;

                        public requestFitSystemWindows(): void;

                        public requestSendAccessibilityEvent(
                                param0: androidviewView,
                                param1: androidviewaccessibilityAccessibilityEvent): boolean;

                        public clearChildFocus(param0: androidviewView): void;

                        public bind(param0: com.zendesk.sdk.model.helpcenter.Attachment): void;

                        public requestChildFocus(
                                param0: androidviewView,
                                param1: androidviewView): void;

                        public getParentForAccessibility(): androidviewViewParent;

                        public bringChildToFront(param0: androidviewView): void;

                        public sendAccessibilityEventUnchecked(param0: androidviewaccessibilityAccessibilityEvent): void;

                        public focusSearch(
                                param0: androidviewView,
                                param1: number): androidviewView;

                        public addView(param0: androidviewView): void;

                        public getChildVisibleRect(
                                param0: androidviewView,
                                param1: android.graphics.Rect,
                                param2: androidgraphicsPoint): boolean;

                        public requestDisallowInterceptTouchEvent(param0: boolean): void;

                        public invalidateChild(
                                param0: androidviewView,
                                param1: android.graphics.Rect): void;

                        public invalidateChildInParent(
                                param0: native.Array<number>,
                                param1: android.graphics.Rect): androidviewViewParent;

                        public getView(): androidviewView;

                        public addView(
                                param0: androidviewView,
                                param1: number,
                                param2: number): void;

                        public requestLayout(): void;

                        public constructor(param0: android.content.Context);

                        public updateViewLayout(
                                param0: androidviewView,
                                param1: androidviewViewGroupLayoutParams): void;
                    }
                    export class AttachmentRequestCallback extends com.zendesk.service.ZendeskCallback {
                        public onError(param0: com.zendesk.service.ErrorResponse): void;

                        public onSuccess(param0: java.lang.Object): void;
                        public onSuccess(param0: java.util.List<any>): void;
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
                    export class HelpAdapterPresenter extends java.lang.Object implements com.zendesk.sdk.support.help.HelpMvp.Presenter {
                        public onAttached(): void;

                        public onDetached(): void;

                        public getItemViewType(param0: number): number;

                        public getItemForBinding(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpItem;

                        public getItemCount(): number;

                        public constructor(
                                param0: com.zendesk.sdk.support.help.HelpMvp.View,
                                param1: com.zendesk.sdk.support.help.HelpMvp.Model,
                                param2: com.zendesk.sdk.network.NetworkInfoProvider,
                                param3: com.zendesk.sdk.support.SupportUiConfig);

                        public onSeeAllClick(param0: com.zendesk.sdk.model.helpcenter.help.SeeAllArticlesItem): void;

                        public setContentPresenter(param0: com.zendesk.sdk.support.SupportMvp.Presenter): void;

                        public onCategoryClick(
                                param0: com.zendesk.sdk.model.helpcenter.help.CategoryItem,
                                param1: number): boolean;

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
                    export class HelpModel extends java.lang.Object implements com.zendesk.sdk.support.help.HelpMvp.Model {
                        public getArticlesForSection(
                                param0: com.zendesk.sdk.model.helpcenter.help.SectionItem,
                                param1: native.Array<string>,
                                param2: com.zendesk.service.ZendeskCallback): void;

                        public getArticles(
                                param0: java.util.List<any>,
                                param1: java.util.List<any>,
                                param2: native.Array<string>,
                                param3: com.zendesk.service.ZendeskCallback): void;
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
                    export class HelpMvp extends java.lang.Object {
                        /**
                         * Constructs a new instance of the com.zendesk.sdk.support.help.HelpMvp interface with the
                         * provided implementation.
                         */
                        public constructor(implementation: {});
                    }
                    export module HelpMvp {
                        export class Model extends java.lang.Object {
                            /**
                             * Constructs a new instance of the com.zendesk.sdk.support.help.HelpMvp$Model interface
                             * with the provided implementation.
                             */
                            public constructor(
                                    implementation: {
                                        getArticles(
                                                param0: java.util.List<any>,
                                                param1: java.util.List<any>,
                                                param2: native.Array<string>,
                                                param3: com.zendesk.service.ZendeskCallback): void;
                                        getArticlesForSection(
                                                param0: com.zendesk.sdk.model.helpcenter.help.SectionItem,
                                                param1: native.Array<string>,
                                                param2: com.zendesk.service.ZendeskCallback): void;
                                    });

                            public getArticles(
                                    param0: java.util.List<any>,
                                    param1: java.util.List<any>,
                                    param2: native.Array<string>,
                                    param3: com.zendesk.service.ZendeskCallback): void;

                            public getArticlesForSection(
                                    param0: com.zendesk.sdk.model.helpcenter.help.SectionItem,
                                    param1: native.Array<string>,
                                    param2: com.zendesk.service.ZendeskCallback): void;
                        }
                        export class Presenter extends java.lang.Object {
                            /**
                             * Constructs a new instance of the com.zendesk.sdk.support.help.HelpMvp$Presenter
                             * interface with the provided implementation.
                             */
                            public constructor(
                                    implementation: {
                                        onAttached(): void;
                                        onDetached(): void;
                                        setContentPresenter(param0: com.zendesk.sdk.support.SupportMvp.Presenter): void;
                                        onSeeAllClick(param0: com.zendesk.sdk.model.helpcenter.help.SeeAllArticlesItem): void;
                                        onCategoryClick(
                                                param0: com.zendesk.sdk.model.helpcenter.help.CategoryItem,
                                                param1: number): boolean;
                                        getItem(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpItem;
                                        getItemCount(): number;
                                        getItemViewType(param0: number): number;
                                        getItemForBinding(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpItem;
                                    });

                            public onAttached(): void;

                            public getItemViewType(param0: number): number;

                            public getItemCount(): number;

                            public onCategoryClick(
                                    param0: com.zendesk.sdk.model.helpcenter.help.CategoryItem,
                                    param1: number): boolean;

                            public setContentPresenter(param0: com.zendesk.sdk.support.SupportMvp.Presenter): void;

                            public onSeeAllClick(param0: com.zendesk.sdk.model.helpcenter.help.SeeAllArticlesItem): void;

                            public onDetached(): void;

                            public getItemForBinding(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpItem;

                            public getItem(param0: number): com.zendesk.sdk.model.helpcenter.help.HelpItem;
                        }
                        export class View extends java.lang.Object {
                            /**
                             * Constructs a new instance of the com.zendesk.sdk.support.help.HelpMvp$View interface
                             * with the provided implementation.
                             */
                            public constructor(
                                    implementation: {
                                        showItems(param0: java.util.List<any>): void;
                                        addItem(
                                                param0: number,
                                                param1: com.zendesk.sdk.model.helpcenter.help.HelpItem): void;
                                        removeItem(param0: number): void;
                                    });

                            public addItem(
                                    param0: number,
                                    param1: com.zendesk.sdk.model.helpcenter.help.HelpItem): void;

                            public removeItem(param0: number): void;

                            public showItems(param0: java.util.List<any>): void;
                        }
                    }
                }
            }
        }
    }
}

// import androidsupportv7widgetRecyclerView = android.support.v7.widget.RecyclerView;
type androidsupportv7widgetRecyclerView = any;
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

                        public onCreateViewHolder(
                                param0: androidviewViewGroup,
                                param1: number): com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder;

                        public addItem(
                                param0: number,
                                param1: com.zendesk.sdk.model.helpcenter.help.HelpItem): void;

                        public showItems(param0: java.util.List<any>): void;

                        public removeItem(param0: number): void;

                        public onAttachedToRecyclerView(param0: androidsupportv7widgetRecyclerView): void;

                        public onBindViewHolder(
                                param0: com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder,
                                param1: number): void;
                    }
                    export module HelpRecyclerViewAdapter {
                        export class ArticleViewHolder extends com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder {
                            public bindTo(
                                    param0: com.zendesk.sdk.model.helpcenter.help.HelpItem,
                                    param1: number): void;
                        }
                        export class CategoryViewHolder extends com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder {
                            public bindTo(
                                    param0: com.zendesk.sdk.model.helpcenter.help.HelpItem,
                                    param1: number): void;

                            public isExpanded(): boolean;
                        }
                        export class ExtraPaddingViewHolder extends com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder {
                            public bindTo(
                                    param0: com.zendesk.sdk.model.helpcenter.help.HelpItem,
                                    param1: number): void;
                        }
                        export abstract class HelpViewHolder {
                            public bindTo(
                                    param0: com.zendesk.sdk.model.helpcenter.help.HelpItem,
                                    param1: number): void;
                        }
                        export class LoadingViewHolder extends com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder {
                            public bindTo(
                                    param0: com.zendesk.sdk.model.helpcenter.help.HelpItem,
                                    param1: number): void;
                        }
                        export class NoResultsViewHolder extends com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder {
                            public bindTo(
                                    param0: com.zendesk.sdk.model.helpcenter.help.HelpItem,
                                    param1: number): void;
                        }
                        export class SectionViewHolder extends com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder {
                            public bindTo(
                                    param0: com.zendesk.sdk.model.helpcenter.help.HelpItem,
                                    param1: number): void;
                        }
                        export class SeeAllViewHolder extends com.zendesk.sdk.support.help.HelpRecyclerViewAdapter.HelpViewHolder {
                            public bindTo(
                                    param0: com.zendesk.sdk.model.helpcenter.help.HelpItem,
                                    param1: number): void;
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

                        public onCreateView(
                                param0: androidviewLayoutInflater,
                                param1: androidviewViewGroup,
                                param2: androidosBundle): androidviewView;

                        public updateResults(
                                param0: java.util.List<any>,
                                param1: string): void;

                        public clearResults(): void;

                        public static newInstance(param0: boolean): com.zendesk.sdk.support.help.HelpSearchFragment;
                    }
                }
            }
        }
    }
}

// import androidsupportv7widgetRecyclerViewViewHolder = android.support.v7.widget.RecyclerView.ViewHolder;
type androidsupportv7widgetRecyclerViewViewHolder = any;
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module support {
                export module help {
                    export class HelpSearchRecyclerViewAdapter {
                        public onCreateViewHolder(
                                param0: androidviewViewGroup,
                                param1: number): androidsupportv7widgetRecyclerViewViewHolder;

                        public getItemViewType(param0: number): number;

                        public onBindViewHolder(
                                param0: androidsupportv7widgetRecyclerViewViewHolder,
                                param1: number): void;

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

// import androidsupportv7widgetRecyclerViewState = android.support.v7.widget.RecyclerView.State;
type androidsupportv7widgetRecyclerViewState = any;
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module support {
                export module help {
                    export class SeparatorDecoration {
                        public onDrawOver(
                                param0: android.graphics.Canvas,
                                param1: androidsupportv7widgetRecyclerView,
                                param2: androidsupportv7widgetRecyclerViewState): void;
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

                        public onCreateView(
                                param0: androidviewLayoutInflater,
                                param1: androidviewViewGroup,
                                param2: androidosBundle): androidviewView;

                        public setPresenter(param0: com.zendesk.sdk.support.SupportMvp.Presenter): void;

                        public static newInstance(param0: com.zendesk.sdk.support.SupportUiConfig): com.zendesk.sdk.support.help.SupportHelpFragment;
                    }
                }
            }
        }
    }
}

import androidviewanimationAnimationAnimationListener = android.view.animation.Animation.AnimationListener;
import androidviewanimationAnimation = android.view.animation.Animation;
/// <reference path="./android.view.animation.Animation.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module ui {
                export class AnimationListenerAdapter extends java.lang.Object implements androidviewanimationAnimationAnimationListener {
                    public onAnimationRepeat(param0: androidviewanimationAnimation): void;

                    public onAnimationEnd(param0: androidviewanimationAnimation): void;

                    public onAnimationStart(param0: androidviewanimationAnimation): void;
                }
            }
        }
    }
}

import androidwidgetAutoCompleteTextView = android.widget.AutoCompleteTextView;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module ui {
                export class EmailAddressAutoCompleteTextView extends androidwidgetAutoCompleteTextView {
                    public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                    public onPreDraw(): boolean;

                    public constructor(
                            param0: android.content.Context,
                            param1: androidutilAttributeSet,
                            param2: number);

                    public sendAccessibilityEventUnchecked(param0: androidviewaccessibilityAccessibilityEvent): void;

                    public onKeyMultiple(
                            param0: number,
                            param1: number,
                            param2: androidviewKeyEvent): boolean;

                    public onKeyDown(
                            param0: number,
                            param1: androidviewKeyEvent): boolean;

                    public unscheduleDrawable(
                            param0: android.graphics.drawable.Drawable,
                            param1: java.lang.Runnable): void;

                    public onKeyLongPress(
                            param0: number,
                            param1: androidviewKeyEvent): boolean;

                    public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

                    public constructor(
                            param0: android.content.Context,
                            param1: androidutilAttributeSet);

                    public scheduleDrawable(
                            param0: android.graphics.drawable.Drawable,
                            param1: java.lang.Runnable,
                            param2: number): void;

                    public onKeyUp(
                            param0: number,
                            param1: androidviewKeyEvent): boolean;

                    public constructor(param0: android.content.Context);

                    public onFilterComplete(param0: number): void;

                    public sendAccessibilityEvent(param0: number): void;

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
                export class ListRowView extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.ui.ListRowView interface with the provided
                     * implementation.
                     */
                    public constructor(
                            implementation: {
                                bind(param0: java.lang.Object): void;
                                getView(): androidviewView;
                            });

                    public getView(): androidviewView;

                    public bind(param0: java.lang.Object): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module ui {
                export class LoadingState extends java.lang.Enum<any> {
                    public static LOADING: com.zendesk.sdk.ui.LoadingState;
                    public static DISPLAYING: com.zendesk.sdk.ui.LoadingState;
                    public static ERRORED: com.zendesk.sdk.ui.LoadingState;

                    public static valueOf(param0: string): com.zendesk.sdk.ui.LoadingState;

                    public static values(): native.Array<com.zendesk.sdk.ui.LoadingState>;

                    public static valueOf(
                            param0: java.lang.Class<any>,
                            param1: string): java.lang.Enum<any>;
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

                    public onRetryAvailable(
                            param0: string,
                            param1: androidviewViewOnClickListener): void;

                    public constructor();

                    public onNetworkAvailable(): void;

                    public onPause(): void;

                    public onCreate(param0: androidosBundle): void;

                    public onRetryUnavailable(): void;

                    public onNetworkUnavailable(): void;

                    public onResume(): void;
                }
                export module NetworkAwareActionbarActivity {
                    export class NetworkAvailabilityBroadcastReceiver extends android.content.BroadcastReceiver {
                        public onReceive(
                                param0: android.content.Context,
                                param1: android.content.Intent): void;
                    }
                }
            }
        }
    }
}

import androidtextTextWatcher = android.text.TextWatcher;
import androidtextEditable = android.text.Editable;
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module ui {
                export abstract class TextWatcherAdapter extends java.lang.Object implements androidtextTextWatcher {
                    public onTextChanged(
                            param0: string,
                            param1: number,
                            param2: number,
                            param3: number): void;

                    public afterTextChanged(param0: androidtextEditable): void;

                    public constructor();

                    public beforeTextChanged(
                            param0: string,
                            param1: number,
                            param2: number,
                            param3: number): void;
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
                export class ToolbarSherlock extends java.lang.Object {
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

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.squareup.picasso.Transformation.d.ts" />
/// <reference path="./com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module ui {
                export class ZendeskPicassoTransformationFactory extends java.lang.Enum<any> {
                    public static INSTANCE: com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory;

                    public getRoundedTransformation(
                            param0: number,
                            param1: number): /*com.squareup.picasso.Transformation*/any;

                    public getResizeTransformationHeight(param0: number): /*com.squareup.picasso.Transformation*/any;

                    public static valueOf(param0: string): com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory;
                    public static valueOf(
                            param0: java.lang.Class<any>,
                            param1: string): java.lang.Enum<any>;

                    public getResizeTransformationWidth(param0: number): /*com.squareup.picasso.Transformation*/any;

                    public static values(): native.Array<com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory>;
                }
                export module ZendeskPicassoTransformationFactory {
                    export class ResizeTransformHeight extends java.lang.Object /*implements com.squareup.picasso.Transformation*/ {
                        public transform(param0: android.graphics.Bitmap): android.graphics.Bitmap;

                        public constructor(
                                param0: com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory,
                                param1: number);

                        public key(): string;
                    }
                    export class ResizeTransformWidth extends java.lang.Object /*implements com.squareup.picasso.Transformation*/ {
                        public transform(param0: android.graphics.Bitmap): android.graphics.Bitmap;

                        public constructor(
                                param0: com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory,
                                param1: number);

                        public key(): string;
                    }
                    export class RoundedTransformation extends java.lang.Object /*implements com.squareup.picasso.Transformation*/ {
                        public constructor(
                                param0: com.zendesk.sdk.ui.ZendeskPicassoTransformationFactory,
                                param1: number,
                                param2: number);

                        public transform(param0: android.graphics.Bitmap): android.graphics.Bitmap;

                        public key(): string;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ApplicationScope.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module util {
                export class BaseInjector extends java.lang.Object {
                    public static injectUrl(param0: com.zendesk.sdk.network.impl.ApplicationScope): string;

                    public constructor();

                    public static injectAppId(param0: com.zendesk.sdk.network.impl.ApplicationScope): string;

                    public static injectApplicationContext(param0: com.zendesk.sdk.network.impl.ApplicationScope): android.content.Context;

                    public static injectUserAgentHeader(param0: com.zendesk.sdk.network.impl.ApplicationScope): string;

                    public static injectLocale(param0: com.zendesk.sdk.network.impl.ApplicationScope): java.util.Locale;

                    public static injectConnectionSpec(param0: com.zendesk.sdk.network.impl.ApplicationScope): java.util.List<any>;

                    public static injectOAuthToken(param0: com.zendesk.sdk.network.impl.ApplicationScope): string;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module util {
                export class DependencyProvider extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.sdk.util.DependencyProvider interface with the
                     * provided implementation.
                     */
                    public constructor(
                            implementation: {
                                provideDependency(): java.lang.Object;
                            });

                    public provideDependency(): java.lang.Object;
                }
            }
        }
    }
}

// import okhttp3OkHttpClient = okhttp3.OkHttpClient;
type okhttp3OkHttpClient = any;
/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.ApplicationScope.d.ts" />
/// <reference path="./okhttp3.OkHttpClient.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module util {
                export class LibraryInjector extends java.lang.Object {
                    public static injectOkHttpClient(param0: com.zendesk.sdk.network.impl.ApplicationScope): okhttp3OkHttpClient;

                    public constructor();

                    public static injectCachedGson(param0: com.zendesk.sdk.network.impl.ApplicationScope): /*com.google.gson.Gson*/any;

                    public static injectGson(param0: com.zendesk.sdk.network.impl.ApplicationScope): /*com.google.gson.Gson*/any;
                }
            }
        }
    }
}

/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./okhttp3.OkHttpClient.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module util {
                export class LibraryModule extends java.lang.Object {
                    public getOkHttpClient(): okhttp3OkHttpClient;

                    public getGson(): /*com.google.gson.Gson*/any;
                }
            }
        }
    }
}

/// <reference path="./com.zendesk.sdk.network.impl.ApplicationScope.d.ts" />
/// <reference path="./com.zendesk.sdk.network.impl.RestAdapterModule.d.ts" />
/// <reference path="./com.zendesk.sdk.util.LibraryModule.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module util {
                export class ModuleInjector extends java.lang.Object {
                    public static injectCachedRestAdapterModule(param0: com.zendesk.sdk.network.impl.ApplicationScope): com.zendesk.sdk.network.impl.RestAdapterModule;

                    public static injectCachedLibraryModule(param0: com.zendesk.sdk.network.impl.ApplicationScope): com.zendesk.sdk.util.LibraryModule;

                    public constructor();
                }
            }
        }
    }
}


/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.ConnectivityManager.d.ts" />
/// <reference path="./android.net.NetworkInfo.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module util {
                export class NetworkUtils extends java.lang.Object {
                    public static isConnected(param0: android.content.Context): boolean;

                    public static isMobile(param0: android.content.Context): boolean;

                    public static getActiveNetworkInfo(param0: android.content.Context): android.net.NetworkInfo;

                    public static getConnectivityManager(param0: android.content.Context): android.net.ConnectivityManager;
                }
            }
        }
    }
}

/// <reference path="./com.zendesk.sdk.util.DependencyProvider.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module util {
                export class ScopeCache extends java.lang.Object {
                    public constructor();

                    public get(param0: com.zendesk.sdk.util.DependencyProvider): java.lang.Object;
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
                export class StageDetectionUtil extends java.lang.Object {
                    public static isDebug(param0: android.content.Context): boolean;

                    public static isProduction(param0: android.content.Context): boolean;
                }
            }
        }
    }
}

import androidutilDisplayMetrics = android.util.DisplayMetrics;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module sdk {
            export module util {
                export class UiUtils extends java.lang.Object {
                    public static spToPixels(
                            param0: number,
                            param1: androidutilDisplayMetrics): number;

                    public static themeAttributeToPixels(
                            param0: number,
                            param1: android.content.Context,
                            param2: number,
                            param3: number): number;

                    public static getScreenSize(param0: android.content.Context): com.zendesk.sdk.util.UiUtils.ScreenSize;

                    public static dpToPixels(
                            param0: number,
                            param1: androidutilDisplayMetrics): number;

                    public static setVisibility(
                            param0: androidviewView,
                            param1: number): void;

                    public static isTablet(param0: android.content.Context): boolean;

                    public static sizeDialogWidthForTablets(
                            param0: androidappDialog,
                            param1: number): void;

                    public static setThemeIfAttributesAreMissing(
                            param0: androidappActivity,
                            param1: native.Array<number>): void;

                    public static themeAttributeToColor(
                            param0: number,
                            param1: android.content.Context,
                            param2: number): number;

                    public static dismissKeyboard(param0: androidappActivity): void;
                }
                export module UiUtils {
                    export class ScreenSize extends java.lang.Enum<any> {
                        public static UNKNOWN: com.zendesk.sdk.util.UiUtils.ScreenSize;
                        public static UNDEFINED: com.zendesk.sdk.util.UiUtils.ScreenSize;
                        public static X_LARGE: com.zendesk.sdk.util.UiUtils.ScreenSize;
                        public static LARGE: com.zendesk.sdk.util.UiUtils.ScreenSize;
                        public static NORMAL: com.zendesk.sdk.util.UiUtils.ScreenSize;
                        public static SMALL: com.zendesk.sdk.util.UiUtils.ScreenSize;

                        public static values(): native.Array<com.zendesk.sdk.util.UiUtils.ScreenSize>;

                        public static valueOf(param0: string): com.zendesk.sdk.util.UiUtils.ScreenSize;
                        public static valueOf(
                                param0: java.lang.Class<any>,
                                param1: string): java.lang.Enum<any>;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module service {
            export class ErrorResponse extends java.lang.Object {
                /**
                 * Constructs a new instance of the com.zendesk.service.ErrorResponse interface with the provided
                 * implementation.
                 */
                public constructor(
                        implementation: {
                            isNetworkError(): boolean;
                            isConversionError(): boolean;
                            isHTTPError(): boolean;
                            getReason(): string;
                            getStatus(): number;
                            getUrl(): string;
                            getResponseBody(): string;
                            getResponseBodyType(): string;
                            getResponseHeaders(): java.util.List<any>;
                        });

                public static NON_HTTP_ERROR: number;

                public getResponseBody(): string;

                public getResponseBodyType(): string;

                public getReason(): string;

                public isNetworkError(): boolean;

                public getStatus(): number;

                public isHTTPError(): boolean;

                public getUrl(): string;

                public isConversionError(): boolean;

                public getResponseHeaders(): java.util.List<any>;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module service {
            export class ErrorResponseAdapter extends java.lang.Object implements com.zendesk.service.ErrorResponse {
                public getResponseBody(): string;

                public getResponseBodyType(): string;

                public getReason(): string;

                public isNetworkError(): boolean;

                public getStatus(): number;

                public isHTTPError(): boolean;

                public getUrl(): string;

                public constructor(param0: string);

                public isConversionError(): boolean;

                public constructor();

                public getResponseHeaders(): java.util.List<any>;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module service {
            export class Header extends java.lang.Object {
                public equals(param0: java.lang.Object): boolean;

                public hashCode(): number;

                public getValue(): string;

                public getName(): string;

                public toString(): string;

                public constructor(
                        param0: string,
                        param1: string);
            }
        }
    }
}

declare module com {
    export module zendesk {
        export module service {
            export class HttpConstants extends java.lang.Object {
                /**
                 * Constructs a new instance of the com.zendesk.service.HttpConstants interface with the provided
                 * implementation.
                 */
                public constructor(implementation: {});

                public static APPLICATION_JSON: string;
                public static HTTP_LENGTH_REQUIRED: number;
                public static HTTP_RESET: number;
                public static HTTP_VERSION: number;
                public static HTTP_PRECON_FAILED: number;
                public static HTTP_CLIENT_TIMEOUT: number;
                public static HTTP_SEE_OTHER: number;
                public static HTTP_BAD_REQUEST: number;
                public static HTTP_ACCEPTED: number;
                public static HTTP_NOT_ACCEPTABLE: number;
                public static HTTP_PROXY_AUTH: number;
                public static HTTP_BLOCKED: number;
                public static HTTP_REQ_TOO_LONG: number;
                public static HTTP_BAD_GATEWAY: number;
                public static HTTP_MOVED_PERM: number;
                public static HTTP_NO_CONTENT: number;
                public static HTTP_GATEWAY_TIMEOUT: number;
                public static HTTP_PAYMENT_REQUIRED: number;
                public static HTTP_NOT_MODIFIED: number;
                public static HTTP_BAD_METHOD: number;
                public static HTTP_NOT_AUTHORITATIVE: number;
                public static HTTP_INTERNAL_ERROR: number;
                public static HTTP_USE_PROXY: number;
                public static HTTP_UNAVAILABLE: number;
                public static HTTP_OK: number;
                public static HTTP_ENTITY_TOO_LARGE: number;
                public static USER_AGENT_HEADER: string;
                public static HTTP_MOVED_TEMP: number;
                public static HTTP_GONE: number;
                public static AUTHORIZATION_HEADER: string;
                public static ACCEPT_HEADER: string;
                public static HTTP_FORBIDDEN: number;
                public static HTTP_NOT_IMPLEMENTED: number;
                public static HTTP_UNAUTHORIZED: number;
                public static HTTP_UNSUPPORTED_TYPE: number;
                public static HTTP_NOT_FOUND: number;
                public static HTTP_PARTIAL: number;
                public static HTTP_CONFLICT: number;
                public static HTTP_MULT_CHOICE: number;
                public static HTTP_CREATED: number;
            }
        }
    }
}

// import retrofit2Response = retrofit2.Response;
type retrofit2Response = any;
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./retrofit2.Response.d.ts" />
declare module com {
    export module zendesk {
        export module service {
            export class RetrofitErrorResponse extends java.lang.Object implements com.zendesk.service.ErrorResponse {
                public getResponseBody(): string;

                public getResponseBodyType(): string;

                public static response(param0: retrofit2Response): com.zendesk.service.RetrofitErrorResponse;

                public getReason(): string;

                public isNetworkError(): boolean;

                public getStatus(): number;

                public static throwable(param0: java.lang.Throwable): com.zendesk.service.RetrofitErrorResponse;

                public isHTTPError(): boolean;

                public getUrl(): string;

                public isConversionError(): boolean;

                public getResponseHeaders(): java.util.List<any>;
            }
        }
    }
}

// import retrofit2Callback = retrofit2.Callback;
type retrofit2Callback = any;
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./retrofit2.Call.d.ts" />
/// <reference path="./retrofit2.Response.d.ts" />
declare module com {
    export module zendesk {
        export module service {
            export class RetrofitZendeskCallbackAdapter extends java.lang.Object /*implements retrofit2Callback*/ {
                public static DEFAULT_EXTRACTOR: com.zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor;

                public constructor(param0: com.zendesk.service.ZendeskCallback);
                public constructor(
                        param0: com.zendesk.service.ZendeskCallback,
                        param1: com.zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor);

                public onResponse(
                        param0: retrofit2Call,
                        param1: retrofit2Response): void;

                public onFailure(
                        param0: retrofit2Call,
                        param1: java.lang.Throwable): void;
            }
            export module RetrofitZendeskCallbackAdapter {
                export class DefaultExtractor extends java.lang.Object implements com.zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor {
                    public extract(param0: java.lang.Object): java.lang.Object;
                }
                export class RequestExtractor extends java.lang.Object {
                    /**
                     * Constructs a new instance of the
                     * com.zendesk.service.RetrofitZendeskCallbackAdapter$RequestExtractor interface with the provided
                     * implementation.
                     */
                    public constructor(
                            implementation: {
                                extract(param0: java.lang.Object): java.lang.Object;
                            });

                    public extract(param0: java.lang.Object): java.lang.Object;
                }
            }
        }
    }
}

/// <reference path="./com.zendesk.service.ErrorResponse.d.ts" />
/// <reference path="./com.zendesk.service.ZendeskCallback.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
    export module zendesk {
        export module service {
            export class SafeZendeskCallback extends com.zendesk.service.ZendeskCallback {
                public constructor(param0: com.zendesk.service.ZendeskCallback);

                public onSuccess(param0: java.lang.Object): void;

                public static from(param0: com.zendesk.service.ZendeskCallback): com.zendesk.service.SafeZendeskCallback;

                public cancel(): void;

                public onError(param0: com.zendesk.service.ErrorResponse): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./com.zendesk.service.ErrorResponse.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
    export module zendesk {
        export module service {
            export abstract class ZendeskCallback extends java.lang.Object {
                public onSuccess(param0: java.lang.Object): void;

                public onError(param0: com.zendesk.service.ErrorResponse): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
    export module zendesk {
        export module util {
            export class CollectionUtils extends java.lang.Object {
                public static isNotEmpty(param0: native.Array<java.lang.Object>): boolean;

                public static isEmpty(param0: native.Array<java.lang.Object>): boolean;

                public static isNotEmpty(param0: java.util.Collection<any>): boolean;

                public static unmodifiableList(param0: java.util.List<any>): java.util.List<any>;

                public static ensureEmpty(param0: java.util.List<any>): java.util.List<any>;

                public static copyOf(param0: java.util.Map<any,any>): java.util.Map<any,any>;

                public static combineLists(param0: native.Array<java.util.List<any>>): java.util.List<any>;

                public static isEmpty(param0: java.util.Collection<any>): boolean;

                public static copyOf(param0: java.util.List<any>): java.util.List<any>;
            }
        }
    }
}

// import javaawtColor = java.awt.Color;
type javaawtColor = any;
/// <reference path="./java.awt.Color.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module util {
            export class ColorUtils extends java.lang.Object {
                public static LOG_TAG: string;

                public static apiColorToJavaColor(param0: string): javaawtColor;

                public static apiColorToAndroidColor(param0: string): java.lang.Integer;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module util {
            export class DigestUtils extends java.lang.Object {
                public static md5(param0: string): string;

                public static sha512(param0: string): string;

                public static sha384(param0: string): string;

                public static sha1(param0: string): string;

                public constructor();

                public static sha256(param0: string): string;
            }
        }
    }
}

/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module util {
            export class FileUtils extends java.lang.Object {
                public static humanReadableFileSize(param0: java.lang.Long): string;
                public static humanReadableFileSize(
                        param0: java.lang.Long,
                        param1: boolean): string;

                public static getFileExtension(param0: string): string;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
    export module zendesk {
        export module util {
            export class LocaleUtil extends java.lang.Object {
                public static toLanguageTag(param0: java.util.Locale): string;

                public static forLanguageTag(param0: string): java.util.Locale;
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module util {
            export class NumberFormatUtil extends java.lang.Object {
                public static format(param0: number): string;
                public static format(
                        param0: number,
                        param1: com.zendesk.util.NumberFormatUtil.SuffixFormatDelegate): string;
            }
            export module NumberFormatUtil {
                export class NumberSuffix extends java.lang.Enum<any> {
                    public static NONE: com.zendesk.util.NumberFormatUtil.NumberSuffix;
                    public static KILO: com.zendesk.util.NumberFormatUtil.NumberSuffix;
                    public static MEGA: com.zendesk.util.NumberFormatUtil.NumberSuffix;
                    public static GIGA: com.zendesk.util.NumberFormatUtil.NumberSuffix;
                    public static TERA: com.zendesk.util.NumberFormatUtil.NumberSuffix;
                    public static PETA: com.zendesk.util.NumberFormatUtil.NumberSuffix;
                    public static EXA: com.zendesk.util.NumberFormatUtil.NumberSuffix;

                    public static valueOf(param0: string): com.zendesk.util.NumberFormatUtil.NumberSuffix;

                    public static values(): native.Array<com.zendesk.util.NumberFormatUtil.NumberSuffix>;

                    public static valueOf(
                            param0: java.lang.Class<any>,
                            param1: string): java.lang.Enum<any>;

                    public getSuffix(): string;
                }
                export class SuffixFormatDelegate extends java.lang.Object {
                    /**
                     * Constructs a new instance of the com.zendesk.util.NumberFormatUtil$SuffixFormatDelegate
                     * interface with the provided implementation.
                     */
                    public constructor(
                            implementation: {
                                getSuffix(param0: com.zendesk.util.NumberFormatUtil.NumberSuffix): string;
                            });

                    public getSuffix(param0: com.zendesk.util.NumberFormatUtil.NumberSuffix): string;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module zendesk {
        export module util {
            export class RegexUtils extends java.lang.Object {
                public static escape(param0: string): string;
            }
        }
    }
}

/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
    export module zendesk {
        export module util {
            export class StringUtils extends java.lang.Object {
                public static EMPTY_STRING: string;
                public static LINE_SEPARATOR: string;

                public static toCsvString(param0: java.util.List<any>): string;

                public static toCsvStringNumber(param0: native.Array<java.lang.Number>): string;

                public static toCsvString(param0: native.Array<string>): string;

                public static capitalize(param0: string): string;

                public static isNumeric(param0: string): boolean;

                public static startsWithIdeographic(param0: string): boolean;

                public static isEmpty(param0: string): boolean;

                public static toCsvString(param0: native.Array<number>): string;

                public static toCsvStringNumber(param0: java.util.List<any>): string;

                public static escapeEcmaScript(param0: string): string;

                public static fromCsv(param0: string): java.util.List<any>;

                public static hasLength(param0: string): boolean;

                public static hasLengthMany(param0: native.Array<string>): boolean;

                public static toDateInIsoFormat(param0: java.util.Date): string;
            }
        }
    }
}
