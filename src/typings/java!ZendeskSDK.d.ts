/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module zendesk {
		export module sdk {
			export class BuildConfig {
				public static class: java.lang.Class<com.zendesk.sdk.BuildConfig>;
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

declare module zendesk {
	export module support {
		export class ActivityScope {
			public static class: java.lang.Class<zendesk.support.ActivityScope>;
			/**
			 * Constructs a new instance of the zendesk.support.ActivityScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module zendesk {
	export module support {
		export class AggregatedCallback<T>  extends com.zendesk.service.ZendeskCallback<any> {
			public static class: java.lang.Class<zendesk.support.AggregatedCallback<any>>;
			public add(param0: com.zendesk.service.ZendeskCallback<any>): boolean;
			public onError(param0: com.zendesk.service.ErrorResponse): void;
			public cancel(): void;
			public constructor();
			public onSuccess(param0: any): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class DaggerSupportSdkComponent extends zendesk.support.SupportSdkComponent {
			public static class: java.lang.Class<zendesk.support.DaggerSupportSdkComponent>;
			public plus(param0: zendesk.support.requestlist.RequestListModule): zendesk.support.requestlist.RequestListComponent;
			public plus(param0: zendesk.support.request.RequestModule): zendesk.support.request.RequestComponent;
			public inject(param0: zendesk.support.guide.HelpCenterActivity): void;
			public helpCenterProvider(): zendesk.support.HelpCenterProvider;
			public static builder(): zendesk.support.DaggerSupportSdkComponent.Builder;
			public inject(param0: zendesk.support.SdkDependencyProvider): void;
			public inject(param0: zendesk.support.guide.ViewArticleActivity): void;
			public inject(param0: zendesk.support.DeepLinkingBroadcastReceiver): void;
			public inject(param0: zendesk.support.guide.HelpCenterFragment): void;
		}
		export module DaggerSupportSdkComponent {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.DaggerSupportSdkComponent.Builder>;
				public build(): zendesk.support.SupportSdkComponent;
				public supportSdkModule(param0: zendesk.support.SupportSdkModule): zendesk.support.DaggerSupportSdkComponent.Builder;
				public coreModule(param0: zendesk.core.CoreModule): zendesk.support.DaggerSupportSdkComponent.Builder;
				public supportModule(param0: zendesk.support.SupportModule): zendesk.support.DaggerSupportSdkComponent.Builder;
			}
			export class RequestComponentImpl extends zendesk.support.request.RequestComponent {
				public static class: java.lang.Class<zendesk.support.DaggerSupportSdkComponent.RequestComponentImpl>;
				public inject(param0: zendesk.support.request.RequestViewConversationsEnabled): void;
				public inject(param0: zendesk.support.request.RequestActivity): void;
				public inject(param0: zendesk.support.request.RequestViewConversationsDisabled): void;
			}
			export class RequestListComponentImpl extends zendesk.support.requestlist.RequestListComponent {
				public static class: java.lang.Class<zendesk.support.DaggerSupportSdkComponent.RequestListComponentImpl>;
				public inject(param0: zendesk.support.requestlist.RequestListActivity): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class DeepLinkToRequestActionHandler {
			public static class: java.lang.Class<zendesk.support.DeepLinkToRequestActionHandler>;
			public handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
			public getPriority(): number;
			public canHandle(param0: string): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class DeepLinkingBroadcastReceiver {
			public static class: java.lang.Class<zendesk.support.DeepLinkingBroadcastReceiver>;
			public static EXTRA_BACK_STACK_ACTIVITIES: string;
			public static EXTRA_REQUEST_INTENT: string;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public constructor();
		}
	}
}

declare module zendesk {
	export module support {
		export class DeepLinkingBroadcastReceiver_MembersInjector extends dagger.MembersInjector<zendesk.support.DeepLinkingBroadcastReceiver> {
			public static class: java.lang.Class<zendesk.support.DeepLinkingBroadcastReceiver_MembersInjector>;
			public constructor(param0: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>);
			public static create(param0: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>): dagger.MembersInjector<zendesk.support.DeepLinkingBroadcastReceiver>;
			public injectMembers(param0: zendesk.support.DeepLinkingBroadcastReceiver): void;
			public static injectDeepLinkHelper(param0: zendesk.support.DeepLinkingBroadcastReceiver, param1: zendesk.support.ZendeskDeepLinkHelper): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class IdUtil {
			public static class: java.lang.Class<zendesk.support.IdUtil>;
			public constructor();
			public static newLongId(): number;
			public static newStringId(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class PicassoTransformations {
			public static class: java.lang.Class<zendesk.support.PicassoTransformations>;
			public static getBlurTransformation(param0: globalAndroid.content.Context): com.squareup.picasso.Transformation;
			public static getRoundedTransformation(param0: number): com.squareup.picasso.Transformation;
			public static getRoundWithBorderTransformation(param0: number, param1: number, param2: number): com.squareup.picasso.Transformation;
		}
		export module PicassoTransformations {
			export class BlurTransformation {
				public static class: java.lang.Class<zendesk.support.PicassoTransformations.BlurTransformation>;
				public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public key(): string;
			}
			export class RoundedTransformation {
				public static class: java.lang.Class<zendesk.support.PicassoTransformations.RoundedTransformation>;
				public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public key(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class SdkDependencyProvider {
			public static class: java.lang.Class<zendesk.support.SdkDependencyProvider>;
			public static INSTANCE: zendesk.support.SdkDependencyProvider;
			public static NOT_INITIALIZED_LOG: string;
			public static values(): native.Array<zendesk.support.SdkDependencyProvider>;
			public static valueOf(param0: string): zendesk.support.SdkDependencyProvider;
			public provideSupportSdkComponent(): zendesk.support.SupportSdkComponent;
			public isInitialized(): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class SdkDependencyProvider_MembersInjector extends dagger.MembersInjector<zendesk.support.SdkDependencyProvider> {
			public static class: java.lang.Class<zendesk.support.SdkDependencyProvider_MembersInjector>;
			public injectMembers(param0: zendesk.support.SdkDependencyProvider): void;
			public static injectActionHandlers(param0: zendesk.support.SdkDependencyProvider, param1: java.util.List<zendesk.core.ActionHandler>): void;
			public constructor(param0: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param1: javax.inject.Provider<java.util.List<zendesk.core.ActionHandler>>);
			public static create(param0: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param1: javax.inject.Provider<java.util.List<zendesk.core.ActionHandler>>): dagger.MembersInjector<zendesk.support.SdkDependencyProvider>;
			public static injectRegistry(param0: zendesk.support.SdkDependencyProvider, param1: zendesk.core.ActionHandlerRegistry): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class Streams {
			public static class: java.lang.Class<zendesk.support.Streams>;
			public static closeQuietly(param0: java.io.Closeable): void;
			public static toJson(param0: com.google.gson.Gson, param1: okio.Sink, param2: any): void;
			public constructor();
			public static fromJson(param0: com.google.gson.Gson, param1: okio.Source, param2: java.lang.reflect.Type): any;
			public static toWriter(param0: okio.Sink): java.io.Writer;
			public static use(param0: java.io.Closeable, param1: zendesk.support.Streams.Use<any,any>): any;
			public static toReader(param0: okio.Source): java.io.Reader;
		}
		export module Streams {
			export class Use<R, P>  extends java.lang.Object {
				public static class: java.lang.Class<zendesk.support.Streams.Use<any,any>>;
				/**
				 * Constructs a new instance of the zendesk.support.Streams$Use interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					use(param0: P): R;
				});
				public constructor();
				public use(param0: P): R;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkComponent {
			public static class: java.lang.Class<zendesk.support.SupportSdkComponent>;
			/**
			 * Constructs a new instance of the zendesk.support.SupportSdkComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				inject(param0: zendesk.support.guide.ViewArticleActivity): void;
				inject(param0: zendesk.support.guide.HelpCenterActivity): void;
				inject(param0: zendesk.support.guide.HelpCenterFragment): void;
				inject(param0: zendesk.support.SdkDependencyProvider): void;
				inject(param0: zendesk.support.DeepLinkingBroadcastReceiver): void;
				helpCenterProvider(): zendesk.support.HelpCenterProvider;
				plus(param0: zendesk.support.request.RequestModule): zendesk.support.request.RequestComponent;
				plus(param0: zendesk.support.requestlist.RequestListModule): zendesk.support.requestlist.RequestListComponent;
			});
			public constructor();
			public static SUPPORT_MAIN_THREAD_EXECUTOR: string;
			public plus(param0: zendesk.support.requestlist.RequestListModule): zendesk.support.requestlist.RequestListComponent;
			public plus(param0: zendesk.support.request.RequestModule): zendesk.support.request.RequestComponent;
			public inject(param0: zendesk.support.guide.HelpCenterActivity): void;
			public helpCenterProvider(): zendesk.support.HelpCenterProvider;
			public inject(param0: zendesk.support.SdkDependencyProvider): void;
			public inject(param0: zendesk.support.guide.ViewArticleActivity): void;
			public inject(param0: zendesk.support.DeepLinkingBroadcastReceiver): void;
			public inject(param0: zendesk.support.guide.HelpCenterFragment): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_MainThreadExecutorFactory extends dagger.internal.Factory<java.util.concurrent.Executor> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_MainThreadExecutorFactory>;
			public constructor(param0: zendesk.support.SupportSdkModule);
			public get(): java.util.concurrent.Executor;
			public static create(param0: zendesk.support.SupportSdkModule): dagger.internal.Factory<java.util.concurrent.Executor>;
			public static proxyMainThreadExecutor(param0: zendesk.support.SupportSdkModule): java.util.concurrent.Executor;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesActionHandlersFactory extends dagger.internal.Factory<java.util.List<zendesk.core.ActionHandler>> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesActionHandlersFactory>;
			public constructor(param0: zendesk.support.SupportSdkModule);
			public get(): java.util.List<zendesk.core.ActionHandler>;
			public static proxyProvidesActionHandlers(param0: zendesk.support.SupportSdkModule): java.util.List<zendesk.core.ActionHandler>;
			public static create(param0: zendesk.support.SupportSdkModule): dagger.internal.Factory<java.util.List<zendesk.core.ActionHandler>>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesDeepLinkHelperFactory extends dagger.internal.Factory<zendesk.support.ZendeskDeepLinkHelper> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesDeepLinkHelperFactory>;
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param2: javax.inject.Provider<zendesk.support.ZendeskDeepLinkParser>): dagger.internal.Factory<zendesk.support.ZendeskDeepLinkHelper>;
			public static proxyProvidesDeepLinkHelper(param0: zendesk.support.SupportSdkModule, param1: zendesk.core.ActionHandlerRegistry, param2: any): zendesk.support.ZendeskDeepLinkHelper;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param2: javax.inject.Provider<zendesk.support.ZendeskDeepLinkParser>);
			public get(): zendesk.support.ZendeskDeepLinkHelper;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesDeepLinkParserFactory extends dagger.internal.Factory<zendesk.support.ZendeskDeepLinkParser> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesDeepLinkParserFactory>;
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<string>, param2: javax.inject.Provider<java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>>): dagger.internal.Factory<zendesk.support.ZendeskDeepLinkParser>;
			public static proxyProvidesDeepLinkParser(param0: zendesk.support.SupportSdkModule, param1: string, param2: java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>): zendesk.support.ZendeskDeepLinkParser;
			public get(): zendesk.support.ZendeskDeepLinkParser;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<string>, param2: javax.inject.Provider<java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>>);
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesFactory extends dagger.internal.Factory<com.google.gson.Gson> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesFactory>;
			public constructor(param0: zendesk.support.SupportSdkModule);
			public get(): com.google.gson.Gson;
			public static create(param0: zendesk.support.SupportSdkModule): dagger.internal.Factory<com.google.gson.Gson>;
			public static proxyProvides(param0: zendesk.support.SupportSdkModule): com.google.gson.Gson;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesParserModuleFactory extends dagger.internal.Factory<java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesParserModuleFactory>;
			public constructor(param0: zendesk.support.SupportSdkModule);
			public get(): java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>;
			public static proxyProvidesParserModule(param0: zendesk.support.SupportSdkModule): java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>;
			public static create(param0: zendesk.support.SupportSdkModule): dagger.internal.Factory<java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesPicassoFactory extends dagger.internal.Factory<com.squareup.picasso.Picasso> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesPicassoFactory>;
			public static proxyProvidesPicasso(param0: zendesk.support.SupportSdkModule, param1: globalAndroid.content.Context, param2: okhttp3.OkHttpClient, param3: java.util.concurrent.ExecutorService): com.squareup.picasso.Picasso;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<globalAndroid.content.Context>, param2: javax.inject.Provider<okhttp3.OkHttpClient>, param3: javax.inject.Provider<java.util.concurrent.ExecutorService>);
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<globalAndroid.content.Context>, param2: javax.inject.Provider<okhttp3.OkHttpClient>, param3: javax.inject.Provider<java.util.concurrent.ExecutorService>): dagger.internal.Factory<com.squareup.picasso.Picasso>;
			public get(): com.squareup.picasso.Picasso;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesRequestDiskLruCacheFactory extends dagger.internal.Factory<com.jakewharton.disklrucache.DiskLruCache> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesRequestDiskLruCacheFactory>;
			public get(): com.jakewharton.disklrucache.DiskLruCache;
			public static proxyProvidesRequestDiskLruCache(param0: zendesk.support.SupportSdkModule, param1: zendesk.core.SessionStorage): com.jakewharton.disklrucache.DiskLruCache;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>);
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>): dagger.internal.Factory<com.jakewharton.disklrucache.DiskLruCache>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesZendeskUrlFactory extends dagger.internal.Factory<string> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesZendeskUrlFactory>;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>);
			public get(): string;
			public static proxyProvidesZendeskUrl(param0: zendesk.support.SupportSdkModule, param1: zendesk.core.ApplicationConfiguration): string;
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>): dagger.internal.Factory<string>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_RequestInfoDataSourceFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_RequestInfoDataSourceFactory>;
			public static proxyRequestInfoDataSource(param0: zendesk.support.SupportSdkModule, param1: zendesk.support.SupportUiStorage, param2: java.util.concurrent.Executor, param3: java.util.concurrent.ExecutorService): zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource;
			public get(): zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.support.SupportUiStorage>, param2: javax.inject.Provider<java.util.concurrent.Executor>, param3: javax.inject.Provider<java.util.concurrent.ExecutorService>);
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.support.SupportUiStorage>, param2: javax.inject.Provider<java.util.concurrent.Executor>, param3: javax.inject.Provider<java.util.concurrent.ExecutorService>): dagger.internal.Factory<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_SupportUIStorageFactory extends dagger.internal.Factory<zendesk.support.SupportUiStorage> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_SupportUIStorageFactory>;
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<com.jakewharton.disklrucache.DiskLruCache>, param2: javax.inject.Provider<com.google.gson.Gson>): dagger.internal.Factory<zendesk.support.SupportUiStorage>;
			public get(): zendesk.support.SupportUiStorage;
			public static proxySupportUIStorage(param0: zendesk.support.SupportSdkModule, param1: com.jakewharton.disklrucache.DiskLruCache, param2: com.google.gson.Gson): zendesk.support.SupportUiStorage;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<com.jakewharton.disklrucache.DiskLruCache>, param2: javax.inject.Provider<com.google.gson.Gson>);
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportUiStorage {
			public static class: java.lang.Class<zendesk.support.SupportUiStorage>;
			public static REQUEST_MAPPER: string;
			public constructor(param0: com.jakewharton.disklrucache.DiskLruCache, param1: com.google.gson.Gson);
			public write(param0: string, param1: any): void;
			public read(param0: string, param1: java.lang.reflect.Type): any;
		}
	}
}

declare module zendesk {
	export module support {
		export class UiConfig {
			public static class: java.lang.Class<zendesk.support.UiConfig>;
			/**
			 * Constructs a new instance of the zendesk.support.UiConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getUiConfigs(): java.util.List<zendesk.support.UiConfig>;
			});
			public constructor();
			public getUiConfigs(): java.util.List<zendesk.support.UiConfig>;
		}
	}
}

declare module zendesk {
	export module support {
		export class UiConfigUtil {
			public static class: java.lang.Class<zendesk.support.UiConfigUtil>;
			public static findConfigForType(param0: java.util.List, param1: java.lang.Class): zendesk.support.UiConfig;
			public static addSelfIfNotInList(param0: java.util.List<zendesk.support.UiConfig>, param1: zendesk.support.UiConfig): java.util.List<zendesk.support.UiConfig>;
			public static fromMap(param0: java.util.Map, param1: java.lang.Class): zendesk.support.UiConfig;
			public static fromBundle(param0: globalAndroid.os.Bundle, param1: java.lang.Class): zendesk.support.UiConfig;
			public static addToIntent(param0: globalAndroid.content.Intent, param1: zendesk.support.UiConfig): void;
			public static addToBundle(param0: globalAndroid.os.Bundle, param1: zendesk.support.UiConfig): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class UiUtils {
			public static class: java.lang.Class<zendesk.support.UiUtils>;
			public static dismissKeyboard(param0: globalAndroid.view.View): void;
			public static decodeHtmlEntities(param0: string): string;
			public static showKeyboard(param0: globalAndroid.view.View): void;
			public internalThemeAttributeToPixels(param0: number, param1: globalAndroid.content.Context, param2: number, param3: number): number;
			public static resolveColor(param0: number, param1: globalAndroid.content.Context): number;
			public static setVisibility(param0: globalAndroid.view.View, param1: number): void;
			public internalThemeAttributeToColor(param0: number, param1: globalAndroid.content.Context, param2: number): number;
			public static themeAttributeToColor(param0: number, param1: globalAndroid.content.Context, param2: number): number;
			public static setTint(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.view.View): void;
			public internalDismissKeyboard(param0: globalAndroid.app.Activity): void;
			public internalShowKeyboard(param0: globalAndroid.view.View): void;
			public internalSetTint(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.view.View): void;
			public static setUiUtils(param0: zendesk.support.UiUtils): void;
			public static dismissKeyboard(param0: globalAndroid.app.Activity): void;
			public internalResolveColor(param0: number, param1: globalAndroid.content.Context): number;
			public internalDismissKeyboard(param0: globalAndroid.view.View): void;
		}
		export module UiUtils {
			export class ScreenSize {
				public static class: java.lang.Class<zendesk.support.UiUtils.ScreenSize>;
				public static UNKNOWN: zendesk.support.UiUtils.ScreenSize;
				public static UNDEFINED: zendesk.support.UiUtils.ScreenSize;
				public static X_LARGE: zendesk.support.UiUtils.ScreenSize;
				public static LARGE: zendesk.support.UiUtils.ScreenSize;
				public static NORMAL: zendesk.support.UiUtils.ScreenSize;
				public static SMALL: zendesk.support.UiUtils.ScreenSize;
				public static values(): native.Array<zendesk.support.UiUtils.ScreenSize>;
				public static valueOf(param0: string): zendesk.support.UiUtils.ScreenSize;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class ViewArticleActionHandler {
			public static class: java.lang.Class<zendesk.support.ViewArticleActionHandler>;
			public handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
			public getPriority(): number;
			public canHandle(param0: string): boolean;
			public static data(param0: number, param1: string): java.util.Map<string,any>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ViewArticleDeepLinkParser extends zendesk.support.ZendeskDeepLinkParser.Module {
			public static class: java.lang.Class<zendesk.support.ViewArticleDeepLinkParser>;
			public parse(param0: okhttp3.HttpUrl): zendesk.support.ViewArticleDeepLinkParser.ActionPayload;
		}
		export module ViewArticleDeepLinkParser {
			export class ActionPayload {
				public static class: java.lang.Class<zendesk.support.ViewArticleDeepLinkParser.ActionPayload>;
				public getAction(): string;
				public isValid(): boolean;
				public getPayload(): java.util.Map<string,any>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskAvatarView {
			public static class: java.lang.Class<zendesk.support.ZendeskAvatarView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public showUserWithIdentifier(param0: any): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public setStroke(param0: number, param1: number): void;
			public showUserWithName(param0: string): void;
			public constructor(param0: globalAndroid.content.Context);
			public showUserWithAvatarImage(param0: com.squareup.picasso.Picasso, param1: string, param2: string, param3: number): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskDeepLinkHelper {
			public static class: java.lang.Class<zendesk.support.ZendeskDeepLinkHelper>;
			public launch(param0: string, param1: zendesk.support.UiConfig, param2: globalAndroid.content.Context): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskDeepLinkParser {
			public static class: java.lang.Class<zendesk.support.ZendeskDeepLinkParser>;
			public parse(param0: string): zendesk.support.ViewArticleDeepLinkParser.ActionPayload;
		}
		export module ZendeskDeepLinkParser {
			export class Module {
				public static class: java.lang.Class<zendesk.support.ZendeskDeepLinkParser.Module>;
				/**
				 * Constructs a new instance of the zendesk.support.ZendeskDeepLinkParser$Module interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					parse(param0: okhttp3.HttpUrl): zendesk.support.ViewArticleDeepLinkParser.ActionPayload;
				});
				public constructor();
				public parse(param0: okhttp3.HttpUrl): zendesk.support.ViewArticleDeepLinkParser.ActionPayload;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class ArticleUiConfig extends zendesk.support.UiConfig {
				public static class: java.lang.Class<zendesk.support.guide.ArticleUiConfig>;
				public isContactUsButtonVisible(): boolean;
				public getUiConfigs(): java.util.List<zendesk.support.UiConfig>;
			}
			export module ArticleUiConfig {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.guide.ArticleUiConfig.Builder>;
					public withContactUsButtonVisible(param0: boolean): zendesk.support.guide.ArticleUiConfig.Builder;
					public show(param0: globalAndroid.content.Context, param1: native.Array<zendesk.support.UiConfig>): void;
					public constructor();
					public config(): zendesk.support.UiConfig;
					public show(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.support.UiConfig>): void;
					public constructor(param0: number);
					public constructor(param0: zendesk.support.Article);
					public intent(param0: globalAndroid.content.Context, param1: native.Array<zendesk.support.UiConfig>): globalAndroid.content.Intent;
					public intent(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.support.UiConfig>): globalAndroid.content.Intent;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class ArticleViewModel {
				public static class: java.lang.Class<zendesk.support.guide.ArticleViewModel>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class ArticleVotingView {
				public static class: java.lang.Class<zendesk.support.guide.ArticleVotingView>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public bindTo(param0: java.lang.Long, param1: zendesk.support.ArticleVoteStorage, param2: zendesk.support.HelpCenterProvider): void;
			}
			export module ArticleVotingView {
				export class VoteState {
					public static class: java.lang.Class<zendesk.support.guide.ArticleVotingView.VoteState>;
					public static UPVOTED: zendesk.support.guide.ArticleVotingView.VoteState;
					public static DOWNVOTED: zendesk.support.guide.ArticleVotingView.VoteState;
					public static NONE: zendesk.support.guide.ArticleVotingView.VoteState;
					public static values(): native.Array<zendesk.support.guide.ArticleVotingView.VoteState>;
					public static valueOf(param0: string): zendesk.support.guide.ArticleVotingView.VoteState;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpAdapterPresenter extends zendesk.support.guide.HelpMvp.Presenter {
				public static class: java.lang.Class<zendesk.support.guide.HelpAdapterPresenter>;
				public setContentPresenter(param0: zendesk.support.guide.HelpCenterMvp.Presenter): void;
				public getItem(param0: number): zendesk.support.HelpItem;
				public onAttached(): void;
				public onSeeAllClick(param0: zendesk.support.SeeAllArticlesItem): void;
				public constructor(param0: zendesk.support.guide.HelpMvp.View, param1: zendesk.support.guide.HelpMvp.Model, param2: zendesk.core.NetworkInfoProvider, param3: zendesk.support.guide.HelpCenterUiConfig);
				public getItemViewType(param0: number): number;
				public onCategoryClick(param0: zendesk.support.CategoryItem, param1: number): boolean;
				public getItemForBinding(param0: number): zendesk.support.HelpItem;
				public onDetached(): void;
				public getItemCount(): number;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterActivity implements zendesk.support.guide.HelpCenterMvp.View {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterActivity>;
				public isShowingHelp(): boolean;
				public onPause(): void;
				public setSearchEnabled(param0: boolean): void;
				public constructor();
				public onPrepareOptionsMenu(param0: globalAndroid.view.Menu): boolean;
				public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public showLoadingState(): void;
				public announceContentLoaded(): void;
				public hideLoadingState(): void;
				public showSearchResults(param0: java.util.List<zendesk.support.SearchArticle>, param1: string): void;
				public showContactUsButton(): void;
				public showContactZendesk(): void;
				public onResume(): void;
				public getContext(): globalAndroid.content.Context;
				public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
				public showRequestList(): void;
				public showNoConnectionError(): void;
				public clearSearchResults(): void;
				public dismissError(): void;
				public showLoadArticleErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
				public exitActivity(): void;
				public static builder(): zendesk.support.guide.HelpCenterUiConfig.Builder;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onStart(): void;
				public showHelp(param0: zendesk.support.guide.HelpCenterUiConfig): void;
			}
			export module HelpCenterActivity {
				export class SnackbarStatus {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterActivity.SnackbarStatus>;
					public static NO_CONNECTION: zendesk.support.guide.HelpCenterActivity.SnackbarStatus;
					public static NONE: zendesk.support.guide.HelpCenterActivity.SnackbarStatus;
					public static CONTENT_ERROR: zendesk.support.guide.HelpCenterActivity.SnackbarStatus;
					public static values(): native.Array<zendesk.support.guide.HelpCenterActivity.SnackbarStatus>;
					public static valueOf(param0: string): zendesk.support.guide.HelpCenterActivity.SnackbarStatus;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterActivity_MembersInjector extends dagger.MembersInjector<zendesk.support.guide.HelpCenterActivity> {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterActivity_MembersInjector>;
				public injectMembers(param0: zendesk.support.guide.HelpCenterActivity): void;
				public static create(param0: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.core.NetworkInfoProvider>): dagger.MembersInjector<zendesk.support.guide.HelpCenterActivity>;
				public static injectSettingsProvider(param0: zendesk.support.guide.HelpCenterActivity, param1: zendesk.support.SupportSettingsProvider): void;
				public static injectNetworkInfoProvider(param0: zendesk.support.guide.HelpCenterActivity, param1: zendesk.core.NetworkInfoProvider): void;
				public static injectHelpCenterProvider(param0: zendesk.support.guide.HelpCenterActivity, param1: zendesk.support.HelpCenterProvider): void;
				public constructor(param0: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.core.NetworkInfoProvider>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterFragment {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterFragment>;
				public static LOG_TAG: string;
				public static newInstance(param0: zendesk.support.guide.HelpCenterUiConfig): zendesk.support.guide.HelpCenterFragment;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public setPresenter(param0: zendesk.support.guide.HelpCenterMvp.Presenter): void;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterFragment_MembersInjector extends dagger.MembersInjector<zendesk.support.guide.HelpCenterFragment> {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterFragment_MembersInjector>;
				public static injectHelpCenterProvider(param0: zendesk.support.guide.HelpCenterFragment, param1: zendesk.support.HelpCenterProvider): void;
				public injectMembers(param0: zendesk.support.guide.HelpCenterFragment): void;
				public static injectNetworkInfoProvider(param0: zendesk.support.guide.HelpCenterFragment, param1: zendesk.core.NetworkInfoProvider): void;
				public static create(param0: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param1: javax.inject.Provider<zendesk.core.NetworkInfoProvider>): dagger.MembersInjector<zendesk.support.guide.HelpCenterFragment>;
				public constructor(param0: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param1: javax.inject.Provider<zendesk.core.NetworkInfoProvider>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterModel extends zendesk.support.guide.HelpCenterMvp.Model {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterModel>;
				public getSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
				public search(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: string, param3: native.Array<string>, param4: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterMvp {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterMvp>;
				/**
				 * Constructs a new instance of the zendesk.support.guide.HelpCenterMvp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
			export module HelpCenterMvp {
				export class ErrorType {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterMvp.ErrorType>;
					public static CATEGORY_LOAD: zendesk.support.guide.HelpCenterMvp.ErrorType;
					public static SECTION_LOAD: zendesk.support.guide.HelpCenterMvp.ErrorType;
					public static ARTICLES_LOAD: zendesk.support.guide.HelpCenterMvp.ErrorType;
					public static valueOf(param0: string): zendesk.support.guide.HelpCenterMvp.ErrorType;
					public static values(): native.Array<zendesk.support.guide.HelpCenterMvp.ErrorType>;
				}
				export class Model {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterMvp.Model>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpCenterMvp$Model interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						search(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: string, param3: native.Array<string>, param4: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
						getSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
					});
					public constructor();
					public getSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
					public search(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: string, param3: native.Array<string>, param4: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
				}
				export class Presenter {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterMvp.Presenter>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpCenterMvp$Presenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResume(param0: zendesk.support.guide.HelpCenterMvp.View): void;
						onPause(): void;
						onSearchSubmit(param0: string): void;
						onLoad(): void;
						onErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
						init(param0: zendesk.support.guide.HelpCenterUiConfig): void;
						shouldShowConversationsMenuItem(): boolean;
						shouldShowSearchMenuItem(): boolean;
					});
					public constructor();
					public onResume(param0: zendesk.support.guide.HelpCenterMvp.View): void;
					public shouldShowConversationsMenuItem(): boolean;
					public shouldShowSearchMenuItem(): boolean;
					public onLoad(): void;
					public onPause(): void;
					public onSearchSubmit(param0: string): void;
					public onErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
					public init(param0: zendesk.support.guide.HelpCenterUiConfig): void;
				}
				export class View {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterMvp.View>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpCenterMvp$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						showContactUsButton(): void;
						showHelp(param0: zendesk.support.guide.HelpCenterUiConfig): void;
						showSearchResults(param0: java.util.List<zendesk.support.SearchArticle>, param1: string): void;
						clearSearchResults(): void;
						setSearchEnabled(param0: boolean): void;
						showLoadingState(): void;
						hideLoadingState(): void;
						showRequestList(): void;
						showContactZendesk(): void;
						showLoadArticleErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
						showNoConnectionError(): void;
						dismissError(): void;
						getContext(): globalAndroid.content.Context;
						isShowingHelp(): boolean;
						exitActivity(): void;
						announceContentLoaded(): void;
					});
					public constructor();
					public exitActivity(): void;
					public showContactZendesk(): void;
					public showRequestList(): void;
					public setSearchEnabled(param0: boolean): void;
					public dismissError(): void;
					public showContactUsButton(): void;
					public showLoadingState(): void;
					public isShowingHelp(): boolean;
					public hideLoadingState(): void;
					public showSearchResults(param0: java.util.List<zendesk.support.SearchArticle>, param1: string): void;
					public clearSearchResults(): void;
					public showNoConnectionError(): void;
					public showHelp(param0: zendesk.support.guide.HelpCenterUiConfig): void;
					public getContext(): globalAndroid.content.Context;
					public showLoadArticleErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
					public announceContentLoaded(): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterPresenter extends zendesk.support.guide.HelpCenterMvp.Presenter {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterPresenter>;
				public shouldShowConversationsMenuItem(): boolean;
				public onNetworkUnavailable(): void;
				public onLoad(): void;
				public onPause(): void;
				public init(param0: zendesk.support.guide.HelpCenterUiConfig): void;
				public onResume(param0: zendesk.support.guide.HelpCenterMvp.View): void;
				public shouldShowSearchMenuItem(): boolean;
				public onSearchSubmit(param0: string): void;
				public onErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
				public onNetworkAvailable(): void;
			}
			export module HelpCenterPresenter {
				export class ViewSafeRetryZendeskCallback extends com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>> {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterPresenter.ViewSafeRetryZendeskCallback>;
					public onError(param0: com.zendesk.service.ErrorResponse): void;
					public onSuccess(param0: java.util.List<zendesk.support.SearchArticle>): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterUiConfig extends zendesk.support.UiConfig {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterUiConfig>;
				public getCategoryIds(): java.util.List<java.lang.Long>;
				public getLabelNames(): native.Array<string>;
				public getSectionIds(): java.util.List<java.lang.Long>;
				public isShowConversationsMenuButton(): boolean;
				public isCollapseCategories(): boolean;
				public isContactUsButtonVisible(): boolean;
				public getUiConfigs(): java.util.List<zendesk.support.UiConfig>;
			}
			export module HelpCenterUiConfig {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterUiConfig.Builder>;
					public withArticlesForSectionIds(param0: native.Array<java.lang.Long>): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public show(param0: globalAndroid.content.Context, param1: native.Array<zendesk.support.UiConfig>): void;
					public withArticlesForSectionIds(param0: java.util.List<java.lang.Long>): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public withContactUsButtonVisible(param0: boolean): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public withLabelNames(param0: java.util.List<string>): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public withCategoriesCollapsed(param0: boolean): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public withLabelNames(param0: native.Array<string>): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public intent(param0: globalAndroid.content.Context, param1: native.Array<zendesk.support.UiConfig>): globalAndroid.content.Intent;
					public intent(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.support.UiConfig>): globalAndroid.content.Intent;
					public withShowConversationsMenuButton(param0: boolean): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public constructor();
					public withArticlesForCategoryIds(param0: native.Array<java.lang.Long>): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public config(): zendesk.support.UiConfig;
					public show(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.support.UiConfig>): void;
					public withArticlesForCategoryIds(param0: java.util.List<java.lang.Long>): zendesk.support.guide.HelpCenterUiConfig.Builder;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpModel extends zendesk.support.guide.HelpMvp.Model {
				public static class: java.lang.Class<zendesk.support.guide.HelpModel>;
				public getArticles(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: native.Array<string>, param3: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
				public getArticlesForSection(param0: zendesk.support.SectionItem, param1: native.Array<string>, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.ArticleItem>>): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpMvp {
				public static class: java.lang.Class<zendesk.support.guide.HelpMvp>;
				/**
				 * Constructs a new instance of the zendesk.support.guide.HelpMvp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
			export module HelpMvp {
				export class Model {
					public static class: java.lang.Class<zendesk.support.guide.HelpMvp.Model>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpMvp$Model interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getArticles(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: native.Array<string>, param3: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
						getArticlesForSection(param0: zendesk.support.SectionItem, param1: native.Array<string>, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.ArticleItem>>): void;
					});
					public constructor();
					public getArticles(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: native.Array<string>, param3: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
					public getArticlesForSection(param0: zendesk.support.SectionItem, param1: native.Array<string>, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.ArticleItem>>): void;
				}
				export class Presenter {
					public static class: java.lang.Class<zendesk.support.guide.HelpMvp.Presenter>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpMvp$Presenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAttached(): void;
						onDetached(): void;
						setContentPresenter(param0: zendesk.support.guide.HelpCenterMvp.Presenter): void;
						onSeeAllClick(param0: zendesk.support.SeeAllArticlesItem): void;
						onCategoryClick(param0: zendesk.support.CategoryItem, param1: number): boolean;
						getItem(param0: number): zendesk.support.HelpItem;
						getItemCount(): number;
						getItemViewType(param0: number): number;
						getItemForBinding(param0: number): zendesk.support.HelpItem;
					});
					public constructor();
					public getItemForBinding(param0: number): zendesk.support.HelpItem;
					public onCategoryClick(param0: zendesk.support.CategoryItem, param1: number): boolean;
					public onDetached(): void;
					public getItemCount(): number;
					public getItem(param0: number): zendesk.support.HelpItem;
					public onSeeAllClick(param0: zendesk.support.SeeAllArticlesItem): void;
					public getItemViewType(param0: number): number;
					public onAttached(): void;
					public setContentPresenter(param0: zendesk.support.guide.HelpCenterMvp.Presenter): void;
				}
				export class View {
					public static class: java.lang.Class<zendesk.support.guide.HelpMvp.View>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpMvp$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						showItems(param0: java.util.List<zendesk.support.HelpItem>): void;
						addItem(param0: number, param1: zendesk.support.HelpItem): void;
						removeItem(param0: number): void;
					});
					public constructor();
					public showItems(param0: java.util.List<zendesk.support.HelpItem>): void;
					public addItem(param0: number, param1: zendesk.support.HelpItem): void;
					public removeItem(param0: number): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpRecyclerViewAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder> implements zendesk.support.guide.HelpMvp.View  {
				public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter>;
				public addItem(param0: number, param1: zendesk.support.HelpItem): void;
				public onDetachedFromRecyclerView(param0: globalAndroid.support.v7.widget.RecyclerView): void;
				public getItemViewType(param0: number): number;
				public onBindViewHolder(param0: zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder, param1: number): void;
				public showItems(param0: java.util.List<zendesk.support.HelpItem>): void;
				public removeItem(param0: number): void;
				public onAttachedToRecyclerView(param0: globalAndroid.support.v7.widget.RecyclerView): void;
				public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder;
				public getItemCount(): number;
			}
			export module HelpRecyclerViewAdapter {
				export class ArticleViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.ArticleViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export class CategoryViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.CategoryViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
					public isExpanded(): boolean;
				}
				export class ExtraPaddingViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.ExtraPaddingViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export abstract class HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export class LoadingViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.LoadingViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export class NoResultsViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.NoResultsViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export class SectionViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.SectionViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export class SeeAllViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.SeeAllViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpSearchFragment {
				public static class: java.lang.Class<zendesk.support.guide.HelpSearchFragment>;
				public static newInstance(param0: zendesk.support.guide.HelpCenterUiConfig, param1: zendesk.support.HelpCenterProvider): zendesk.support.guide.HelpSearchFragment;
				public updateResults(param0: java.util.List<zendesk.support.SearchArticle>, param1: string): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public clearResults(): void;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpSearchRecyclerViewAdapter {
				public static class: java.lang.Class<zendesk.support.guide.HelpSearchRecyclerViewAdapter>;
				public onBindViewHolder(param0: globalAndroid.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
				public getItemViewType(param0: number): number;
				public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): globalAndroid.support.v7.widget.RecyclerView.ViewHolder;
				public getItemCount(): number;
			}
			export module HelpSearchRecyclerViewAdapter {
				export class HelpSearchViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpSearchRecyclerViewAdapter.HelpSearchViewHolder>;
				}
				export class NoResultsViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpSearchRecyclerViewAdapter.NoResultsViewHolder>;
				}
				export class PaddingViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpSearchRecyclerViewAdapter.PaddingViewHolder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class NetworkUtils {
				public static class: java.lang.Class<zendesk.support.guide.NetworkUtils>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class SeparatorDecoration {
				public static class: java.lang.Class<zendesk.support.guide.SeparatorDecoration>;
				public onDrawOver(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.support.v7.widget.RecyclerView, param2: globalAndroid.support.v7.widget.RecyclerView.State): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class ViewArticleActivity {
				public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity>;
				public static builder(param0: number): zendesk.support.guide.ArticleUiConfig.Builder;
				public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onStart(): void;
				public static builder(param0: zendesk.support.Article): zendesk.support.guide.ArticleUiConfig.Builder;
				public setLoadingState(param0: zendesk.support.guide.ViewArticleActivity.LoadingState): void;
				public onStop(): void;
				public onItemClick(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
				public onDestroy(): void;
				public static builder(): zendesk.support.guide.ArticleUiConfig.Builder;
				public constructor();
			}
			export module ViewArticleActivity {
				export class ArticleAttachmentAdapter extends globalAndroid.widget.ArrayAdapter<zendesk.support.HelpCenterAttachment> {
					public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity.ArticleAttachmentAdapter>;
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
				export class ArticleAttachmentRow {
					public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity.ArticleAttachmentRow>;
					public constructor(param0: globalAndroid.content.Context);
					public bind(param0: zendesk.support.HelpCenterAttachment): void;
				}
				export class AttachmentRequestCallback extends com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpCenterAttachment>> {
					public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity.AttachmentRequestCallback>;
					public onSuccess(param0: java.util.List<zendesk.support.HelpCenterAttachment>): void;
					public onError(param0: com.zendesk.service.ErrorResponse): void;
				}
				export class LoadingState {
					public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity.LoadingState>;
					public static LOADING: zendesk.support.guide.ViewArticleActivity.LoadingState;
					public static DISPLAYING: zendesk.support.guide.ViewArticleActivity.LoadingState;
					public static ERRORED: zendesk.support.guide.ViewArticleActivity.LoadingState;
					public static valueOf(param0: string): zendesk.support.guide.ViewArticleActivity.LoadingState;
					public static values(): native.Array<zendesk.support.guide.ViewArticleActivity.LoadingState>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class ViewArticleActivity_MembersInjector extends dagger.MembersInjector<zendesk.support.guide.ViewArticleActivity> {
				public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity_MembersInjector>;
				public constructor(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param2: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param3: javax.inject.Provider<zendesk.support.ArticleVoteStorage>, param4: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>, param5: javax.inject.Provider<zendesk.core.NetworkInfoProvider>, param6: javax.inject.Provider<zendesk.support.SupportSettingsProvider>);
				public static injectSupportSettingsProvider(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.support.SupportSettingsProvider): void;
				public static create(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param2: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param3: javax.inject.Provider<zendesk.support.ArticleVoteStorage>, param4: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>, param5: javax.inject.Provider<zendesk.core.NetworkInfoProvider>, param6: javax.inject.Provider<zendesk.support.SupportSettingsProvider>): dagger.MembersInjector<zendesk.support.guide.ViewArticleActivity>;
				public static injectApplicationConfiguration(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.core.ApplicationConfiguration): void;
				public static injectHelpCenterProvider(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.support.HelpCenterProvider): void;
				public static injectDeepLinkHelper(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.support.ZendeskDeepLinkHelper): void;
				public injectMembers(param0: zendesk.support.guide.ViewArticleActivity): void;
				public static injectOkHttpClient(param0: zendesk.support.guide.ViewArticleActivity, param1: okhttp3.OkHttpClient): void;
				public static injectArticleVoteStorage(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.support.ArticleVoteStorage): void;
				public static injectNetworkInfoProvider(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.core.NetworkInfoProvider): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionCreateComment extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionCreateComment>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
			export module ActionCreateComment {
				export class CreateCommentResult {
					public static class: java.lang.Class<zendesk.support.request.ActionCreateComment.CreateCommentResult>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionFactory {
				public static class: java.lang.Class<zendesk.support.request.ActionFactory>;
			}
			export module ActionFactory {
				export class ErrorAction<E>  extends zendesk.suas.Action<any> {
					public static class: java.lang.Class<zendesk.support.request.ActionFactory.ErrorAction<any>>;
					public getErrorResponse(): com.zendesk.service.ErrorResponse;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionInstallConfiguration extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionInstallConfiguration>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionLoadCachedComments extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionLoadCachedComments>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
			export module ActionLoadCachedComments {
				export class LoadComments {
					public static class: java.lang.Class<zendesk.support.request.ActionLoadCachedComments.LoadComments>;
					public run(): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionLoadComments extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionLoadComments>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
			export module ActionLoadComments {
				export abstract class MinimumTimeCallback<E>  extends com.zendesk.service.ZendeskCallback<any> {
					public static class: java.lang.Class<zendesk.support.request.ActionLoadComments.MinimumTimeCallback<any>>;
					public onDelayedError(param0: com.zendesk.service.ErrorResponse): void;
					public onError(param0: com.zendesk.service.ErrorResponse): void;
					public onDelayedSuccess(param0: any): void;
					public onSuccess(param0: any): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionLoadRequest extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionLoadRequest>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionLoadSettings extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionLoadSettings>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionUpdateNameEmail extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionUpdateNameEmail>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AdapterAttachmentCarousel extends globalAndroid.support.v7.widget.RecyclerView.Adapter<zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder> {
				public static class: java.lang.Class<zendesk.support.request.AdapterAttachmentCarousel>;
				public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder;
				public getItemId(param0: number): number;
				public getItemViewType(param0: number): number;
				public onBindViewHolder(param0: zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder, param1: number): void;
				public getItemCount(): number;
			}
			export module AdapterAttachmentCarousel {
				export abstract class CarouselViewHolder {
					public static class: java.lang.Class<zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder>;
				}
				export module CarouselViewHolder {
					export class OnRemoveListener {
						public static class: java.lang.Class<zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder.OnRemoveListener>;
						/**
						 * Constructs a new instance of the zendesk.support.request.AdapterAttachmentCarousel$CarouselViewHolder$OnRemoveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onRemove(param0: zendesk.support.request.StateRequestAttachment): void;
						});
						public constructor();
						public onRemove(param0: zendesk.support.request.StateRequestAttachment): void;
					}
				}
				export class FileAttachmentViewHolder extends zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder {
					public static class: java.lang.Class<zendesk.support.request.AdapterAttachmentCarousel.FileAttachmentViewHolder>;
				}
				export class ImageAttachmentViewHolder extends zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder {
					public static class: java.lang.Class<zendesk.support.request.AdapterAttachmentCarousel.ImageAttachmentViewHolder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AsyncMiddleware {
				public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware>;
				public onAction(param0: zendesk.suas.Action<any>, param1: zendesk.suas.GetState, param2: zendesk.suas.Dispatcher, param3: zendesk.suas.Continuation): void;
			}
			export module AsyncMiddleware {
				export class AsyncAction {
					public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.AsyncAction>;
					/**
					 * Constructs a new instance of the zendesk.support.request.AsyncMiddleware$AsyncAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
						execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
					});
					public constructor();
					public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
					public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				}
				export class Callback {
					public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.Callback>;
					/**
					 * Constructs a new instance of the zendesk.support.request.AsyncMiddleware$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						done(): void;
					});
					public constructor();
					public done(): void;
				}
				export class Item {
					public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.Item>;
					/**
					 * Constructs a new instance of the zendesk.support.request.AsyncMiddleware$Item interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						execute(param0: zendesk.support.request.AsyncMiddleware.Callback): void;
					});
					public constructor();
					public execute(param0: zendesk.support.request.AsyncMiddleware.Callback): void;
				}
				export class Queue {
					public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.Queue>;
				}
				export module Queue {
					export class QueueCallback extends zendesk.support.request.AsyncMiddleware.Callback {
						public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.Queue.QueueCallback>;
						public done(): void;
					}
				}
				export class QueueItem extends zendesk.support.request.AsyncMiddleware.Item {
					public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.QueueItem>;
					public execute(param0: zendesk.support.request.AsyncMiddleware.Callback): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AttachmentDownloadService {
				public static class: java.lang.Class<zendesk.support.request.AttachmentDownloadService>;
			}
			export module AttachmentDownloadService {
				export class SaveToFileTask {
					public static class: java.lang.Class<zendesk.support.request.AttachmentDownloadService.SaveToFileTask>;
					public run(): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AttachmentDownloaderComponent extends zendesk.suas.Listener<zendesk.support.request.StateConversation> {
				public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent>;
				public update(param0: zendesk.support.request.StateConversation): void;
			}
			export module AttachmentDownloaderComponent {
				export class AttachmentDownloader {
					public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader>;
				}
				export module AttachmentDownloader {
					export class CacheCallback extends com.zendesk.service.ZendeskCallback<zendesk.belvedere.MediaResult> {
						public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader.CacheCallback>;
						public onSuccess(param0: zendesk.belvedere.MediaResult): void;
						public onError(param0: com.zendesk.service.ErrorResponse): void;
					}
					export class HttpCallback extends com.zendesk.service.ZendeskCallback<okhttp3.ResponseBody> {
						public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader.HttpCallback>;
						public onError(param0: com.zendesk.service.ErrorResponse): void;
						public onSuccess(param0: okhttp3.ResponseBody): void;
					}
					export class Request {
						public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader.Request>;
					}
				}
				export class AttachmentDownloaderSelector {
					public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloaderSelector>;
					public selectData(param0: zendesk.support.request.StateConversation): java.util.List<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader.Request>;
				}
				export class DownloadCallback extends com.zendesk.service.ZendeskCallback<zendesk.belvedere.MediaResult> {
					public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.DownloadCallback>;
					public onError(param0: com.zendesk.service.ErrorResponse): void;
					public onSuccess(param0: zendesk.belvedere.MediaResult): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AttachmentHelper {
				public static class: java.lang.Class<zendesk.support.request.AttachmentHelper>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AttachmentUploadService {
				public static class: java.lang.Class<zendesk.support.request.AttachmentUploadService>;
			}
			export module AttachmentUploadService {
				export class AttachmentUploadResult {
					public static class: java.lang.Class<zendesk.support.request.AttachmentUploadService.AttachmentUploadResult>;
				}
				export class AttachmentsCallback extends com.zendesk.service.ZendeskCallback<zendesk.support.UploadResponse> {
					public static class: java.lang.Class<zendesk.support.request.AttachmentUploadService.AttachmentsCallback>;
					public onSuccess(param0: zendesk.support.UploadResponse): void;
					public onError(param0: com.zendesk.service.ErrorResponse): void;
				}
				export class ResolveCallback extends zendesk.belvedere.Callback<java.util.List<zendesk.belvedere.MediaResult>> {
					public static class: java.lang.Class<zendesk.support.request.AttachmentUploadService.ResolveCallback>;
					public success(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellAgentAttachmentGeneric extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Attachment, zendesk.support.request.CellType.Agent {
				public static class: java.lang.Class<zendesk.support.request.CellAgentAttachmentGeneric>;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getTimeStamp(): java.util.Date;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public isAgentNameVisible(): boolean;
				public getAgent(): zendesk.support.request.StateRequestUser;
				public showAgentName(param0: boolean): void;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
				public getAttachment(): zendesk.support.request.StateRequestAttachment;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellAgentAttachmentImage extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Attachment, zendesk.support.request.CellType.Agent {
				public static class: java.lang.Class<zendesk.support.request.CellAgentAttachmentImage>;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getTimeStamp(): java.util.Date;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public isAgentNameVisible(): boolean;
				public getAgent(): zendesk.support.request.StateRequestUser;
				public showAgentName(param0: boolean): void;
				public getAttachment(): zendesk.support.request.StateRequestAttachment;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellAgentMessage extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Message, zendesk.support.request.CellType.Agent {
				public static class: java.lang.Class<zendesk.support.request.CellAgentMessage>;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getTimeStamp(): java.util.Date;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public isAgentNameVisible(): boolean;
				public getAgent(): zendesk.support.request.StateRequestUser;
				public getMessage(): string;
				public showAgentName(param0: boolean): void;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellAttachmentLoadingUtil {
				public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil>;
			}
			export module CellAttachmentLoadingUtil {
				export class ImageLoadingLogic {
					public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic>;
				}
				export module ImageLoadingLogic {
					export class DefaultDisplayStrategy extends zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.LoadingStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.DefaultDisplayStrategy>;
						public load(param0: globalAndroid.widget.ImageView, param1: zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions): void;
					}
					export class DisplayImageFromLocalSource extends zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.LoadingStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.DisplayImageFromLocalSource>;
						public load(param0: globalAndroid.widget.ImageView, param1: zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions): void;
					}
					export class DisplayImageFromWeb extends zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.LoadingStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.DisplayImageFromWeb>;
						public load(param0: globalAndroid.widget.ImageView, param1: zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions): void;
					}
					export class LoadingStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.LoadingStrategy>;
						/**
						 * Constructs a new instance of the zendesk.support.request.CellAttachmentLoadingUtil$ImageLoadingLogic$LoadingStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							load(param0: globalAndroid.widget.ImageView, param1: zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions): void;
						});
						public constructor();
						public load(param0: globalAndroid.widget.ImageView, param1: zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions): void;
					}
				}
				export class ImageSizingLogic {
					public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic>;
				}
				export module ImageSizingLogic {
					export class DefaultStrategy extends zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DimensionStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DefaultStrategy>;
						public findDimensions(param0: com.zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
					}
					export class DimensionStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DimensionStrategy>;
						/**
						 * Constructs a new instance of the zendesk.support.request.CellAttachmentLoadingUtil$ImageSizingLogic$DimensionStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							findDimensions(param0: com.zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
						});
						public constructor();
						public findDimensions(param0: com.zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
					}
					export class ExistingDimensions extends zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DimensionStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ExistingDimensions>;
						public findDimensions(param0: com.zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
					}
					export class ImageDimensions {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>;
						public toString(): string;
					}
					export class ReadFromBitmap extends zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DimensionStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ReadFromBitmap>;
						public findDimensions(param0: com.zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
					}
					export class ReadFromPicasso extends zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DimensionStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ReadFromPicasso>;
						public findDimensions(param0: com.zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
					}
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export abstract class CellBase extends zendesk.support.request.CellType.Base {
				public static class: java.lang.Class<zendesk.support.request.CellBase>;
				public utils: zendesk.support.request.CellBindHelper;
				public getTimeStamp(): java.util.Date;
				public getUniqueId(): number;
				public setPositionType(param0: number): void;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public getGroupId(): number;
				public getLayoutId(): number;
				public getInsets(): globalAndroid.graphics.Rect;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
				public getPositionType(): number;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellBindHelper {
				public static class: java.lang.Class<zendesk.support.request.CellBindHelper>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellFactory {
				public static class: java.lang.Class<zendesk.support.request.CellFactory>;
				public generateCells(param0: java.util.List<zendesk.support.request.StateMessage>, param1: java.util.List<zendesk.support.request.StateRequestUser>, param2: zendesk.support.RequestStatus, param3: string): java.util.List<zendesk.support.request.CellType.Base>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellMarginDecorator {
				public static class: java.lang.Class<zendesk.support.request.CellMarginDecorator>;
				public static CELL: number;
				public static CELL_START_BLOCK: number;
				public static CELL_WITH_LABEL: number;
				public static CELL_LAST: number;
				public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View, param2: globalAndroid.support.v7.widget.RecyclerView, param3: globalAndroid.support.v7.widget.RecyclerView.State): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellSystemMessages {
				public static class: java.lang.Class<zendesk.support.request.CellSystemMessages>;
			}
			export module CellSystemMessages {
				export class CellDateMessage extends zendesk.support.request.CellBase {
					public static class: java.lang.Class<zendesk.support.request.CellSystemMessages.CellDateMessage>;
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class CellRequestStatus extends zendesk.support.request.CellBase {
					public static class: java.lang.Class<zendesk.support.request.CellSystemMessages.CellRequestStatus>;
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class CellSystemMessage extends zendesk.support.request.CellBase {
					public static class: java.lang.Class<zendesk.support.request.CellSystemMessages.CellSystemMessage>;
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellType {
				public static class: java.lang.Class<zendesk.support.request.CellType>;
				/**
				 * Constructs a new instance of the zendesk.support.request.CellType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
			export module CellType {
				export class Agent extends zendesk.support.request.CellType.Base {
					public static class: java.lang.Class<zendesk.support.request.CellType.Agent>;
					/**
					 * Constructs a new instance of the zendesk.support.request.CellType$Agent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						showAgentName(param0: boolean): void;
						isAgentNameVisible(): boolean;
						getAgent(): zendesk.support.request.StateRequestUser;
						getPositionType(): number;
						setPositionType(param0: number): void;
						getUniqueId(): number;
						getGroupId(): number;
						getLayoutId(): number;
						bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
						areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
						getTimeStamp(): java.util.Date;
						getInsets(): globalAndroid.graphics.Rect;
					});
					public constructor();
					public getUniqueId(): number;
					public isAgentNameVisible(): boolean;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getAgent(): zendesk.support.request.StateRequestUser;
					public getLayoutId(): number;
					public showAgentName(param0: boolean): void;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class Attachment extends zendesk.support.request.CellType.Base {
					public static class: java.lang.Class<zendesk.support.request.CellType.Attachment>;
					/**
					 * Constructs a new instance of the zendesk.support.request.CellType$Attachment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAttachment(): zendesk.support.request.StateRequestAttachment;
						getPositionType(): number;
						setPositionType(param0: number): void;
						getUniqueId(): number;
						getGroupId(): number;
						getLayoutId(): number;
						bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
						areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
						getTimeStamp(): java.util.Date;
						getInsets(): globalAndroid.graphics.Rect;
					});
					public constructor();
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getAttachment(): zendesk.support.request.StateRequestAttachment;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class Base {
					public static class: java.lang.Class<zendesk.support.request.CellType.Base>;
					/**
					 * Constructs a new instance of the zendesk.support.request.CellType$Base interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getPositionType(): number;
						setPositionType(param0: number): void;
						getUniqueId(): number;
						getGroupId(): number;
						getLayoutId(): number;
						bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
						areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
						getTimeStamp(): java.util.Date;
						getInsets(): globalAndroid.graphics.Rect;
					});
					public constructor();
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class Message extends zendesk.support.request.CellType.Base {
					public static class: java.lang.Class<zendesk.support.request.CellType.Message>;
					/**
					 * Constructs a new instance of the zendesk.support.request.CellType$Message interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getMessage(): string;
						getPositionType(): number;
						setPositionType(param0: number): void;
						getUniqueId(): number;
						getGroupId(): number;
						getLayoutId(): number;
						bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
						areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
						getTimeStamp(): java.util.Date;
						getInsets(): globalAndroid.graphics.Rect;
					});
					public constructor();
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public getMessage(): string;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class Stateful extends zendesk.support.request.CellType.Base {
					public static class: java.lang.Class<zendesk.support.request.CellType.Stateful>;
					/**
					 * Constructs a new instance of the zendesk.support.request.CellType$Stateful interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						markAsDelivered(): zendesk.support.request.CellType.Stateful;
						markAsErrored(param0: java.util.List<zendesk.support.request.StateMessage>, param1: boolean): zendesk.support.request.CellType.Stateful;
						getStateMessage(): zendesk.support.request.StateMessage;
						getErrorGroupMessages(): java.util.List<zendesk.support.request.StateMessage>;
						isMarkedAsDelivered(): boolean;
						isErrorShown(): boolean;
						isLastErrorCellOfBlock(): boolean;
						getPositionType(): number;
						setPositionType(param0: number): void;
						getUniqueId(): number;
						getGroupId(): number;
						getLayoutId(): number;
						bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
						areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
						getTimeStamp(): java.util.Date;
						getInsets(): globalAndroid.graphics.Rect;
					});
					public constructor();
					public getErrorGroupMessages(): java.util.List<zendesk.support.request.StateMessage>;
					public getUniqueId(): number;
					public isErrorShown(): boolean;
					public isMarkedAsDelivered(): boolean;
					public getGroupId(): number;
					public setPositionType(param0: number): void;
					public markAsDelivered(): zendesk.support.request.CellType.Stateful;
					public isLastErrorCellOfBlock(): boolean;
					public markAsErrored(param0: java.util.List<zendesk.support.request.StateMessage>, param1: boolean): zendesk.support.request.CellType.Stateful;
					public getPositionType(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getLayoutId(): number;
					public getStateMessage(): zendesk.support.request.StateMessage;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellUserAttachmentGeneric extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Attachment, zendesk.support.request.CellType.Stateful {
				public static class: java.lang.Class<zendesk.support.request.CellUserAttachmentGeneric>;
				public isErrorShown(): boolean;
				public markAsErrored(param0: java.util.List<zendesk.support.request.StateMessage>, param1: boolean): zendesk.support.request.CellType.Stateful;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getErrorGroupMessages(): java.util.List<zendesk.support.request.StateMessage>;
				public getStateMessage(): zendesk.support.request.StateMessage;
				public getTimeStamp(): java.util.Date;
				public markAsDelivered(): zendesk.support.request.CellType.Stateful;
				public isLastErrorCellOfBlock(): boolean;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
				public getAttachment(): zendesk.support.request.StateRequestAttachment;
				public isMarkedAsDelivered(): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellUserAttachmentImage extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Attachment, zendesk.support.request.CellType.Stateful {
				public static class: java.lang.Class<zendesk.support.request.CellUserAttachmentImage>;
				public isErrorShown(): boolean;
				public markAsErrored(param0: java.util.List<zendesk.support.request.StateMessage>, param1: boolean): zendesk.support.request.CellType.Stateful;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getErrorGroupMessages(): java.util.List<zendesk.support.request.StateMessage>;
				public getStateMessage(): zendesk.support.request.StateMessage;
				public getTimeStamp(): java.util.Date;
				public markAsDelivered(): zendesk.support.request.CellType.Stateful;
				public isLastErrorCellOfBlock(): boolean;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public getAttachment(): zendesk.support.request.StateRequestAttachment;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
				public isMarkedAsDelivered(): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellUserMessage extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Message, zendesk.support.request.CellType.Stateful {
				public static class: java.lang.Class<zendesk.support.request.CellUserMessage>;
				public isErrorShown(): boolean;
				public markAsErrored(param0: java.util.List<zendesk.support.request.StateMessage>, param1: boolean): zendesk.support.request.CellType.Stateful;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getErrorGroupMessages(): java.util.List<zendesk.support.request.StateMessage>;
				public getStateMessage(): zendesk.support.request.StateMessage;
				public getTimeStamp(): java.util.Date;
				public markAsDelivered(): zendesk.support.request.CellType.Stateful;
				public isLastErrorCellOfBlock(): boolean;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public getMessage(): string;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
				public isMarkedAsDelivered(): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentAttachmentCarousel extends java.lang.Object {
				public static class: java.lang.Class<zendesk.support.request.ComponentAttachmentCarousel>;
				public update(param0: zendesk.support.request.ComponentAttachmentCarousel.AttachmentCarouselModel): void;
				public onMenuItemsInflated(param0: globalAndroid.view.MenuItem, param1: globalAndroid.view.MenuItem): void;
				public onDismissed(): void;
				public onVisible(): void;
				public onMenuItemsClicked(param0: globalAndroid.view.MenuItem): void;
				public onMediaDeselected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
				public onMediaSelected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
			}
			export module ComponentAttachmentCarousel {
				export class AttachmentCarouselModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentAttachmentCarousel.AttachmentCarouselModel>;
				}
				export class AttachmentCarouselSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentAttachmentCarousel.AttachmentCarouselModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentAttachmentCarousel.AttachmentCarouselSelector>;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentAttachmentCarousel.AttachmentCarouselModel;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentDialog extends zendesk.suas.Listener<zendesk.support.request.StateUi> {
				public static class: java.lang.Class<zendesk.support.request.ComponentDialog>;
				public update(param0: zendesk.support.request.StateUi): void;
			}
			export module ComponentDialog {
				export class OnDismissedListener {
					public static class: java.lang.Class<zendesk.support.request.ComponentDialog.OnDismissedListener>;
					public onDismiss(param0: globalAndroid.content.DialogInterface): void;
				}
				export class RetryDialogListener extends zendesk.support.request.RetryDialog.Listener {
					public static class: java.lang.Class<zendesk.support.request.ComponentDialog.RetryDialogListener>;
					public onRetryMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
					public onDeleteMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentError extends zendesk.suas.Listener<zendesk.support.request.ComponentError.ErrorStateModel> {
				public static class: java.lang.Class<zendesk.support.request.ComponentError>;
				public update(param0: zendesk.support.request.ComponentError.ErrorStateModel): void;
			}
			export module ComponentError {
				export class ErrorStateModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentError.ErrorStateModel>;
				}
				export class ErrorStateSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentError.ErrorStateModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentError.ErrorStateSelector>;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentError.ErrorStateModel;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentInputForm extends java.lang.Object {
				public static class: java.lang.Class<zendesk.support.request.ComponentInputForm>;
				public onMenuItemsInflated(param0: globalAndroid.view.MenuItem, param1: globalAndroid.view.MenuItem): void;
				public onKeyboardDismissed(): void;
				public onMenuItemsClicked(param0: globalAndroid.view.MenuItem): void;
				public onKeyboardVisible(): void;
				public update(param0: zendesk.support.request.ComponentInputForm.InputFormModel): void;
			}
			export module ComponentInputForm {
				export class EditTextTextWatcher {
					public static class: java.lang.Class<zendesk.support.request.ComponentInputForm.EditTextTextWatcher>;
					public afterTextChanged(param0: globalAndroid.text.Editable): void;
					public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				}
				export class EmailFieldFocusListener {
					public static class: java.lang.Class<zendesk.support.request.ComponentInputForm.EmailFieldFocusListener>;
					public onFocusChange(param0: globalAndroid.view.View, param1: boolean): void;
				}
				export class InputFormModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentInputForm.InputFormModel>;
					public isLoading(): boolean;
				}
				export class InputFormSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentInputForm.InputFormModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentInputForm.InputFormSelector>;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentInputForm.InputFormModel;
				}
				export class Validator<T>  extends java.lang.Object {
					public static class: java.lang.Class<zendesk.support.request.ComponentInputForm.Validator<any>>;
					/**
					 * Constructs a new instance of the zendesk.support.request.ComponentInputForm$Validator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isValid(param0: T): boolean;
					});
					public constructor();
					public isValid(param0: T): boolean;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentMessageComposer extends java.lang.Object {
				public static class: java.lang.Class<zendesk.support.request.ComponentMessageComposer>;
				public onDismissed(): void;
				public update(param0: zendesk.support.request.ComponentMessageComposer.MessageComposerModel): void;
				public onVisible(): void;
				public onMediaDeselected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
				public getSelector(): zendesk.suas.StateSelector<zendesk.support.request.ComponentMessageComposer.MessageComposerModel>;
				public onMediaSelected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
				public onAddAttachmentsRequested(): void;
				public onSendMessageRequested(param0: string): void;
			}
			export module ComponentMessageComposer {
				export class MessageComposerModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentMessageComposer.MessageComposerModel>;
				}
				export class MessageComposerSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentMessageComposer.MessageComposerModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentMessageComposer.MessageComposerSelector>;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentMessageComposer.MessageComposerModel;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentPersistence extends zendesk.suas.Listener<zendesk.support.request.ComponentPersistence.RequestPersistenceModel> {
				public static class: java.lang.Class<zendesk.support.request.ComponentPersistence>;
				public update(param0: zendesk.support.request.ComponentPersistence.RequestPersistenceModel): void;
			}
			export module ComponentPersistence {
				export class Item {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.Item>;
					/**
					 * Constructs a new instance of the zendesk.support.request.ComponentPersistence$Item interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						persist(): void;
					});
					public constructor();
					public persist(): void;
				}
				export class PersistenceItem extends zendesk.support.request.ComponentPersistence.Item {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.PersistenceItem>;
					public persist(): void;
				}
				export class PersistenceQueue {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.PersistenceQueue>;
					public constructor(param0: java.util.concurrent.Executor);
				}
				export module PersistenceQueue {
					export class Worker {
						public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.PersistenceQueue.Worker>;
						public run(): void;
					}
				}
				export class PersistenceSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentPersistence.RequestPersistenceModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.PersistenceSelector>;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentPersistence.RequestPersistenceModel;
				}
				export class RequestIdMapper {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.RequestIdMapper>;
					public constructor();
				}
				export class RequestPersistenceModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.RequestPersistenceModel>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentRequestAdapter extends zendesk.suas.Listener<java.util.List<zendesk.support.request.CellType.Base>> {
				public static class: java.lang.Class<zendesk.support.request.ComponentRequestAdapter>;
				public update(param0: java.util.List<zendesk.support.request.CellType.Base>): void;
			}
			export module ComponentRequestAdapter {
				export class DiffCalculator {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestAdapter.DiffCalculator>;
					public getNewListSize(): number;
					public areContentsTheSame(param0: number, param1: number): boolean;
					public getOldListSize(): number;
					public areItemsTheSame(param0: number, param1: number): boolean;
				}
				export class RequestAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<zendesk.support.request.ComponentRequestAdapter.RequestViewHolder> {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestAdapter.RequestAdapter>;
					public getItemCount(): number;
					public getItemViewType(param0: number): number;
					public onBindViewHolder(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder, param1: number): void;
					public getItemId(param0: number): number;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): zendesk.support.request.ComponentRequestAdapter.RequestViewHolder;
					public onViewDetachedFromWindow(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				}
				export class RequestAdapterSelector extends zendesk.suas.StateSelector<java.util.List<zendesk.support.request.CellType.Base>> {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestAdapter.RequestAdapterSelector>;
					public selectData(param0: zendesk.suas.State): java.util.List<zendesk.support.request.CellType.Base>;
				}
				export class RequestViewHolder {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestAdapter.RequestViewHolder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentRequestRouter extends zendesk.suas.Listener<zendesk.support.request.ComponentRequestRouter.RequestScreen> {
				public static class: java.lang.Class<zendesk.support.request.ComponentRequestRouter>;
				public update(param0: zendesk.support.request.ComponentRequestRouter.RequestScreen): void;
			}
			export module ComponentRequestRouter {
				export class RequestRouterSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentRequestRouter.RequestScreen> {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestRouter.RequestRouterSelector>;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentRequestRouter.RequestScreen;
				}
				export class RequestScreen {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestRouter.RequestScreen>;
					public static Loading: zendesk.support.request.ComponentRequestRouter.RequestScreen;
					public static EmailForm: zendesk.support.request.ComponentRequestRouter.RequestScreen;
					public static Conversation: zendesk.support.request.ComponentRequestRouter.RequestScreen;
					public static Fin: zendesk.support.request.ComponentRequestRouter.RequestScreen;
					public static valueOf(param0: string): zendesk.support.request.ComponentRequestRouter.RequestScreen;
					public static values(): native.Array<zendesk.support.request.ComponentRequestRouter.RequestScreen>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentToolbar extends zendesk.suas.Listener<zendesk.support.request.ComponentToolbar.ToolbarModel> {
				public static class: java.lang.Class<zendesk.support.request.ComponentToolbar>;
				public update(param0: zendesk.support.request.ComponentToolbar.ToolbarModel): void;
			}
			export module ComponentToolbar {
				export class ToolbarModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentToolbar.ToolbarModel>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
				export class ToolbarSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentToolbar.ToolbarModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentToolbar.ToolbarSelector>;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentToolbar.ToolbarModel;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentUpdateActionHandlers extends zendesk.suas.Listener<zendesk.support.request.StateConversation> {
				public static class: java.lang.Class<zendesk.support.request.ComponentUpdateActionHandlers>;
				public update(param0: zendesk.support.request.StateConversation): void;
			}
			export module ComponentUpdateActionHandlers {
				export class RefreshCallback extends com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>> {
					public static class: java.lang.Class<zendesk.support.request.ComponentUpdateActionHandlers.RefreshCallback>;
					public onError(param0: com.zendesk.service.ErrorResponse): void;
					public onSuccess(param0: java.util.List<zendesk.support.requestlist.RequestInfo>): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class DocumentRenderer {
				public static class: java.lang.Class<zendesk.support.request.DocumentRenderer>;
			}
			export module DocumentRenderer {
				export class HtmlParser {
					public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.HtmlParser>;
				}
				export class Node {
					public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Node>;
					public getText(): string;
					public getType(): zendesk.support.request.DocumentRenderer.Node.Type;
					public getParent(): zendesk.support.request.DocumentRenderer.Node;
				}
				export module Node {
					export class Type {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Node.Type>;
						public static B: zendesk.support.request.DocumentRenderer.Node.Type;
						public static I: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Code: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H1: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H2: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H3: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H4: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H5: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H6: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Strong: zendesk.support.request.DocumentRenderer.Node.Type;
						public static U: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Em: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Br: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Hr: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Div: zendesk.support.request.DocumentRenderer.Node.Type;
						public static P: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Li: zendesk.support.request.DocumentRenderer.Node.Type;
						public static A: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Ol: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Ul: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Img: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Text: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Document: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Unknown: zendesk.support.request.DocumentRenderer.Node.Type;
						public static values(): native.Array<zendesk.support.request.DocumentRenderer.Node.Type>;
						public static valueOf(param0: string): zendesk.support.request.DocumentRenderer.Node.Type;
						public getTag(): string;
					}
				}
				export class RichRenderingDocument {
					public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.RichRenderingDocument>;
				}
				export class Style {
					public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style>;
					/**
					 * Constructs a new instance of the zendesk.support.request.DocumentRenderer$Style interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					});
					public constructor();
					public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
				}
				export module Style {
					export class Bold extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Bold>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Br extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Br>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class CodeSpan extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.CodeSpan>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Factory {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Factory>;
					}
					export class Header extends zendesk.support.request.DocumentRenderer.Style.Bold {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Header>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Image extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Image>;
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Italic extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Italic>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Li extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Li>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Link extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Link>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class SpannableHelper {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.SpannableHelper>;
					}
					export class Unknown extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Unknown>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
				}
				export class ZendeskUrlSpan {
					public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.ZendeskUrlSpan>;
					public onClick(param0: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class HeadlessComponentListener {
				public static class: java.lang.Class<zendesk.support.request.HeadlessComponentListener>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class HeadlessFragment<E>  extends globalAndroid.support.v4.app.Fragment {
				public static class: java.lang.Class<zendesk.support.request.HeadlessFragment<any>>;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerAndroidLifecycle extends zendesk.suas.Reducer<zendesk.support.request.StateAndroidLifecycle> {
				public static class: java.lang.Class<zendesk.support.request.ReducerAndroidLifecycle>;
				public getInitialState(): zendesk.support.request.StateAndroidLifecycle;
				public reduce(param0: zendesk.support.request.StateAndroidLifecycle, param1: zendesk.suas.Action<any>): zendesk.support.request.StateAndroidLifecycle;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerAttachments extends zendesk.suas.Reducer<zendesk.support.request.StateAttachments> {
				public static class: java.lang.Class<zendesk.support.request.ReducerAttachments>;
				public reduce(param0: zendesk.support.request.StateAttachments, param1: zendesk.suas.Action<any>): zendesk.support.request.StateAttachments;
				public getInitialState(): zendesk.support.request.StateAttachments;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerConfiguration extends zendesk.suas.Reducer<zendesk.support.request.StateConfig> {
				public static class: java.lang.Class<zendesk.support.request.ReducerConfiguration>;
				public reduce(param0: zendesk.support.request.StateConfig, param1: zendesk.suas.Action<any>): zendesk.support.request.StateConfig;
				public getInitialState(): zendesk.support.request.StateConfig;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerConversation extends zendesk.suas.Reducer<zendesk.support.request.StateConversation> {
				public static class: java.lang.Class<zendesk.support.request.ReducerConversation>;
				public reduce(param0: zendesk.support.request.StateConversation, param1: zendesk.suas.Action<any>): zendesk.support.request.StateConversation;
				public getInitialState(): zendesk.support.request.StateConversation;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerError extends zendesk.suas.Reducer<zendesk.support.request.StateError> {
				public static class: java.lang.Class<zendesk.support.request.ReducerError>;
				public reduce(param0: zendesk.support.request.StateError, param1: zendesk.suas.Action<any>): zendesk.support.request.StateError;
				public getInitialState(): zendesk.support.request.StateError;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerProgress extends zendesk.suas.Reducer<zendesk.support.request.StateProgress> {
				public static class: java.lang.Class<zendesk.support.request.ReducerProgress>;
				public reduce(param0: zendesk.support.request.StateProgress, param1: zendesk.suas.Action<any>): zendesk.support.request.StateProgress;
				public getInitialState(): zendesk.support.request.StateProgress;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerUiState extends zendesk.suas.Reducer<zendesk.support.request.StateUi> {
				public static class: java.lang.Class<zendesk.support.request.ReducerUiState>;
				public reduce(param0: zendesk.support.request.StateUi, param1: zendesk.suas.Action<any>): zendesk.support.request.StateUi;
				public getInitialState(): zendesk.support.request.StateUi;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestAccessibilityHerald extends zendesk.suas.Listener<zendesk.suas.Action<any>> {
				public static class: java.lang.Class<zendesk.support.request.RequestAccessibilityHerald>;
				public update(param0: zendesk.suas.Action<any>): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestActivity {
				public static class: java.lang.Class<zendesk.support.request.RequestActivity>;
				public onBackPressed(): void;
				public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public static builder(): zendesk.support.request.RequestUiConfig.Builder;
				public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
				public onPause(): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public constructor();
			}
			export module RequestActivity {
				export class MoveUpWithSnackbarBehaviour {
					public static class: java.lang.Class<zendesk.support.request.RequestActivity.MoveUpWithSnackbarBehaviour>;
					public onDependentViewChanged(param0: globalAndroid.support.design.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
					public layoutDependsOn(param0: globalAndroid.support.design.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
				}
				export class RefreshRequestActionHandler {
					public static class: java.lang.Class<zendesk.support.request.RequestActivity.RefreshRequestActionHandler>;
					public getPriority(): number;
					public canHandle(param0: string): boolean;
					public handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestActivity_MembersInjector extends dagger.MembersInjector<zendesk.support.request.RequestActivity> {
				public static class: java.lang.Class<zendesk.support.request.RequestActivity_MembersInjector>;
				public injectMembers(param0: zendesk.support.request.RequestActivity): void;
				public static injectHeadlessComponentListener(param0: zendesk.support.request.RequestActivity, param1: any): void;
				public static injectPicasso(param0: zendesk.support.request.RequestActivity, param1: com.squareup.picasso.Picasso): void;
				public static injectActionHandlerRegistry(param0: zendesk.support.request.RequestActivity, param1: zendesk.core.ActionHandlerRegistry): void;
				public constructor(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.HeadlessComponentListener>, param3: javax.inject.Provider<com.squareup.picasso.Picasso>, param4: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>);
				public static create(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.HeadlessComponentListener>, param3: javax.inject.Provider<com.squareup.picasso.Picasso>, param4: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>): dagger.MembersInjector<zendesk.support.request.RequestActivity>;
				public static injectStore(param0: zendesk.support.request.RequestActivity, param1: zendesk.suas.Store): void;
				public static injectAf(param0: zendesk.support.request.RequestActivity, param1: any): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestComponent {
				public static class: java.lang.Class<zendesk.support.request.RequestComponent>;
				/**
				 * Constructs a new instance of the zendesk.support.request.RequestComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					inject(param0: zendesk.support.request.RequestActivity): void;
					inject(param0: zendesk.support.request.RequestViewConversationsEnabled): void;
					inject(param0: zendesk.support.request.RequestViewConversationsDisabled): void;
				});
				public constructor();
				public inject(param0: zendesk.support.request.RequestViewConversationsEnabled): void;
				public inject(param0: zendesk.support.request.RequestActivity): void;
				public inject(param0: zendesk.support.request.RequestViewConversationsDisabled): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule {
				public static class: java.lang.Class<zendesk.support.request.RequestModule>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesActionFactoryFactory extends dagger.internal.Factory<zendesk.support.request.ActionFactory> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesActionFactoryFactory>;
				public static proxyProvidesActionFactory(param0: zendesk.support.RequestProvider, param1: zendesk.support.SupportSettingsProvider, param2: zendesk.support.UploadProvider, param3: zendesk.belvedere.Belvedere, param4: zendesk.support.SupportUiStorage, param5: java.util.concurrent.ExecutorService, param6: java.util.concurrent.Executor, param7: zendesk.core.AuthenticationProvider, param8: zendesk.support.SupportBlipsProvider): zendesk.support.request.ActionFactory;
				public get(): zendesk.support.request.ActionFactory;
				public constructor(param0: javax.inject.Provider<zendesk.support.RequestProvider>, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.support.UploadProvider>, param3: javax.inject.Provider<zendesk.belvedere.Belvedere>, param4: javax.inject.Provider<zendesk.support.SupportUiStorage>, param5: javax.inject.Provider<java.util.concurrent.ExecutorService>, param6: javax.inject.Provider<java.util.concurrent.Executor>, param7: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param8: javax.inject.Provider<zendesk.support.SupportBlipsProvider>);
				public static create(param0: javax.inject.Provider<zendesk.support.RequestProvider>, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.support.UploadProvider>, param3: javax.inject.Provider<zendesk.belvedere.Belvedere>, param4: javax.inject.Provider<zendesk.support.SupportUiStorage>, param5: javax.inject.Provider<java.util.concurrent.ExecutorService>, param6: javax.inject.Provider<java.util.concurrent.Executor>, param7: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param8: javax.inject.Provider<zendesk.support.SupportBlipsProvider>): dagger.internal.Factory<zendesk.support.request.ActionFactory>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesAsyncMiddlewareFactory extends dagger.internal.Factory<zendesk.support.request.AsyncMiddleware> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesAsyncMiddlewareFactory>;
				public static create(): dagger.internal.Factory<zendesk.support.request.AsyncMiddleware>;
				public get(): zendesk.support.request.AsyncMiddleware;
				public static proxyProvidesAsyncMiddleware(): zendesk.support.request.AsyncMiddleware;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesAttachmentDownloaderComponentFactory extends dagger.internal.Factory<zendesk.support.request.AttachmentDownloaderComponent> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesAttachmentDownloaderComponentFactory>;
				public get(): zendesk.support.request.AttachmentDownloaderComponent;
				public static create(param0: javax.inject.Provider<zendesk.suas.Dispatcher>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader>): dagger.internal.Factory<zendesk.support.request.AttachmentDownloaderComponent>;
				public static proxyProvidesAttachmentDownloaderComponent(param0: zendesk.suas.Dispatcher, param1: any, param2: any): zendesk.support.request.AttachmentDownloaderComponent;
				public constructor(param0: javax.inject.Provider<zendesk.suas.Dispatcher>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesAttachmentDownloaderFactory extends dagger.internal.Factory<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesAttachmentDownloaderFactory>;
				public constructor(param0: javax.inject.Provider<zendesk.belvedere.Belvedere>, param1: javax.inject.Provider<zendesk.support.request.AttachmentDownloadService>);
				public static proxyProvidesAttachmentDownloader(param0: zendesk.belvedere.Belvedere, param1: any): zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader;
				public static create(param0: javax.inject.Provider<zendesk.belvedere.Belvedere>, param1: javax.inject.Provider<zendesk.support.request.AttachmentDownloadService>): dagger.internal.Factory<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader>;
				public get(): zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesAttachmentToDiskServiceFactory extends dagger.internal.Factory<zendesk.support.request.AttachmentDownloadService> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesAttachmentToDiskServiceFactory>;
				public constructor(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<java.util.concurrent.ExecutorService>);
				public static create(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<java.util.concurrent.ExecutorService>): dagger.internal.Factory<zendesk.support.request.AttachmentDownloadService>;
				public get(): zendesk.support.request.AttachmentDownloadService;
				public static proxyProvidesAttachmentToDiskService(param0: okhttp3.OkHttpClient, param1: java.util.concurrent.ExecutorService): zendesk.support.request.AttachmentDownloadService;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesBelvedereFactory extends dagger.internal.Factory<zendesk.belvedere.Belvedere> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesBelvedereFactory>;
				public static proxyProvidesBelvedere(param0: globalAndroid.content.Context): zendesk.belvedere.Belvedere;
				public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): dagger.internal.Factory<zendesk.belvedere.Belvedere>;
				public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
				public get(): zendesk.belvedere.Belvedere;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesConversationsUpdatesComponentFactory extends dagger.internal.Factory<zendesk.support.request.ComponentUpdateActionHandlers> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesConversationsUpdatesComponentFactory>;
				public static proxyProvidesConversationsUpdatesComponent(param0: globalAndroid.content.Context, param1: zendesk.core.ActionHandlerRegistry, param2: zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource): zendesk.support.request.ComponentUpdateActionHandlers;
				public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param2: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource>): dagger.internal.Factory<zendesk.support.request.ComponentUpdateActionHandlers>;
				public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param2: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource>);
				public get(): zendesk.support.request.ComponentUpdateActionHandlers;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesDiskQueueFactory extends dagger.internal.Factory<zendesk.support.request.ComponentPersistence.PersistenceQueue> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesDiskQueueFactory>;
				public constructor(param0: javax.inject.Provider<java.util.concurrent.ExecutorService>);
				public get(): zendesk.support.request.ComponentPersistence.PersistenceQueue;
				public static create(param0: javax.inject.Provider<java.util.concurrent.ExecutorService>): dagger.internal.Factory<zendesk.support.request.ComponentPersistence.PersistenceQueue>;
				public static proxyProvidesDiskQueue(param0: java.util.concurrent.ExecutorService): zendesk.support.request.ComponentPersistence.PersistenceQueue;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesDispatcherFactory extends dagger.internal.Factory<zendesk.suas.Dispatcher> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesDispatcherFactory>;
				public get(): zendesk.suas.Dispatcher;
				public static create(param0: javax.inject.Provider<zendesk.suas.Store>): dagger.internal.Factory<zendesk.suas.Dispatcher>;
				public static proxyProvidesDispatcher(param0: zendesk.suas.Store): zendesk.suas.Dispatcher;
				public constructor(param0: javax.inject.Provider<zendesk.suas.Store>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesHeadlessComponentListenerFactory extends dagger.internal.Factory<zendesk.support.request.HeadlessComponentListener> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesHeadlessComponentListenerFactory>;
				public static create(param0: javax.inject.Provider<zendesk.support.request.ComponentPersistence>, param1: javax.inject.Provider<zendesk.support.request.AttachmentDownloaderComponent>, param2: javax.inject.Provider<zendesk.support.request.ComponentUpdateActionHandlers>): dagger.internal.Factory<zendesk.support.request.HeadlessComponentListener>;
				public get(): zendesk.support.request.HeadlessComponentListener;
				public constructor(param0: javax.inject.Provider<zendesk.support.request.ComponentPersistence>, param1: javax.inject.Provider<zendesk.support.request.AttachmentDownloaderComponent>, param2: javax.inject.Provider<zendesk.support.request.ComponentUpdateActionHandlers>);
				public static proxyProvidesHeadlessComponentListener(param0: any, param1: any, param2: any): zendesk.support.request.HeadlessComponentListener;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesMessageFactoryFactory extends dagger.internal.Factory<zendesk.support.request.CellFactory> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesMessageFactoryFactory>;
				public constructor(param0: zendesk.support.request.RequestModule, param1: javax.inject.Provider<globalAndroid.content.Context>, param2: javax.inject.Provider<com.squareup.picasso.Picasso>, param3: javax.inject.Provider<zendesk.support.request.ActionFactory>, param4: javax.inject.Provider<zendesk.suas.Dispatcher>, param5: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>);
				public static proxyProvidesMessageFactory(param0: zendesk.support.request.RequestModule, param1: globalAndroid.content.Context, param2: com.squareup.picasso.Picasso, param3: any, param4: zendesk.suas.Dispatcher, param5: zendesk.support.ZendeskDeepLinkHelper): zendesk.support.request.CellFactory;
				public get(): zendesk.support.request.CellFactory;
				public static create(param0: zendesk.support.request.RequestModule, param1: javax.inject.Provider<globalAndroid.content.Context>, param2: javax.inject.Provider<com.squareup.picasso.Picasso>, param3: javax.inject.Provider<zendesk.support.request.ActionFactory>, param4: javax.inject.Provider<zendesk.suas.Dispatcher>, param5: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>): dagger.internal.Factory<zendesk.support.request.CellFactory>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesPersistenceComponentFactory extends dagger.internal.Factory<zendesk.support.request.ComponentPersistence> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesPersistenceComponentFactory>;
				public constructor(param0: javax.inject.Provider<zendesk.support.SupportUiStorage>, param1: javax.inject.Provider<zendesk.support.request.ComponentPersistence.PersistenceQueue>, param2: javax.inject.Provider<java.util.concurrent.ExecutorService>);
				public static proxyProvidesPersistenceComponent(param0: zendesk.support.SupportUiStorage, param1: any, param2: java.util.concurrent.ExecutorService): zendesk.support.request.ComponentPersistence;
				public get(): zendesk.support.request.ComponentPersistence;
				public static create(param0: javax.inject.Provider<zendesk.support.SupportUiStorage>, param1: javax.inject.Provider<zendesk.support.request.ComponentPersistence.PersistenceQueue>, param2: javax.inject.Provider<java.util.concurrent.ExecutorService>): dagger.internal.Factory<zendesk.support.request.ComponentPersistence>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesReducerFactory extends dagger.internal.Factory<java.util.List<zendesk.suas.Reducer>> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesReducerFactory>;
				public get(): java.util.List<zendesk.suas.Reducer>;
				public static create(): dagger.internal.Factory<java.util.List<zendesk.suas.Reducer>>;
				public constructor();
				public static proxyProvidesReducer(): java.util.List<zendesk.suas.Reducer>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesStoreFactory extends dagger.internal.Factory<zendesk.suas.Store> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesStoreFactory>;
				public constructor(param0: javax.inject.Provider<java.util.List<zendesk.suas.Reducer>>, param1: javax.inject.Provider<zendesk.support.request.AsyncMiddleware>);
				public get(): zendesk.suas.Store;
				public static create(param0: javax.inject.Provider<java.util.List<zendesk.suas.Reducer>>, param1: javax.inject.Provider<zendesk.support.request.AsyncMiddleware>): dagger.internal.Factory<zendesk.suas.Store>;
				public static proxyProvidesStore(param0: java.util.List<zendesk.suas.Reducer>, param1: any): zendesk.suas.Store;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestUiConfig extends zendesk.support.UiConfig {
				public static class: java.lang.Class<zendesk.support.request.RequestUiConfig>;
				public getTags(): java.util.List<string>;
				public getRequestSubject(): string;
				public getTicketForm(): zendesk.support.request.StateRequestTicketForm;
				public getFiles(): java.util.List<zendesk.support.request.StateRequestAttachment>;
				public getRequestStatus(): zendesk.support.RequestStatus;
				public getRequestId(): string;
				public getLocalRequestId(): string;
				public getUiConfigs(): java.util.List<zendesk.support.UiConfig>;
			}
			export module RequestUiConfig {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.request.RequestUiConfig.Builder>;
					public deepLinkIntent(param0: globalAndroid.content.Context, param1: native.Array<globalAndroid.content.Intent>): globalAndroid.content.Intent;
					public show(param0: globalAndroid.content.Context, param1: native.Array<zendesk.support.UiConfig>): void;
					public deepLinkIntent(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.support.UiConfig>, param2: native.Array<globalAndroid.content.Intent>): globalAndroid.content.Intent;
					public withFiles(param0: java.util.List<java.io.File>): zendesk.support.request.RequestUiConfig.Builder;
					public withFiles(param0: native.Array<java.io.File>): zendesk.support.request.RequestUiConfig.Builder;
					public withRequestSubject(param0: string): zendesk.support.request.RequestUiConfig.Builder;
					public withRequestId(param0: string): zendesk.support.request.RequestUiConfig.Builder;
					public intent(param0: globalAndroid.content.Context, param1: native.Array<zendesk.support.UiConfig>): globalAndroid.content.Intent;
					public intent(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.support.UiConfig>): globalAndroid.content.Intent;
					public withTicketForm(param0: number, param1: java.util.List<zendesk.support.CustomField>): zendesk.support.request.RequestUiConfig.Builder;
					public withTags(param0: java.util.List<string>): zendesk.support.request.RequestUiConfig.Builder;
					public withCustomFields(param0: java.util.List<zendesk.support.CustomField>): zendesk.support.request.RequestUiConfig.Builder;
					public withRequestInfo(param0: zendesk.support.requestlist.RequestInfo): zendesk.support.request.RequestUiConfig.Builder;
					public constructor();
					public withRequest(param0: zendesk.support.Request): zendesk.support.request.RequestUiConfig.Builder;
					public config(): zendesk.support.UiConfig;
					public show(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.support.UiConfig>): void;
					public withTags(param0: native.Array<string>): zendesk.support.request.RequestUiConfig.Builder;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestView {
				public static class: java.lang.Class<zendesk.support.request.RequestView>;
				/**
				 * Constructs a new instance of the zendesk.support.request.RequestView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					inflateMenu(param0: globalAndroid.view.MenuInflater, param1: globalAndroid.view.Menu): boolean;
					onOptionsItemClicked(param0: globalAndroid.view.MenuItem): boolean;
					hasUnsavedInput(): boolean;
				});
				public constructor();
				public inflateMenu(param0: globalAndroid.view.MenuInflater, param1: globalAndroid.view.Menu): boolean;
				public onOptionsItemClicked(param0: globalAndroid.view.MenuItem): boolean;
				public hasUnsavedInput(): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestViewConversationsDisabled implements zendesk.support.request.RequestView {
				public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsDisabled>;
				public init(param0: zendesk.support.request.RequestComponent): void;
				public inflateMenu(param0: globalAndroid.view.MenuInflater, param1: globalAndroid.view.Menu): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public hasUnsavedInput(): boolean;
				public onOptionsItemClicked(param0: globalAndroid.view.MenuItem): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onDetachedFromWindow(): void;
			}
			export module RequestViewConversationsDisabled {
				export class MenuItemsDelegate {
					public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsDisabled.MenuItemsDelegate>;
					/**
					 * Constructs a new instance of the zendesk.support.request.RequestViewConversationsDisabled$MenuItemsDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemsInflated(param0: globalAndroid.view.MenuItem, param1: globalAndroid.view.MenuItem): void;
						onMenuItemsClicked(param0: globalAndroid.view.MenuItem): void;
					});
					public constructor();
					public onMenuItemsClicked(param0: globalAndroid.view.MenuItem): void;
					public onMenuItemsInflated(param0: globalAndroid.view.MenuItem, param1: globalAndroid.view.MenuItem): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestViewConversationsDisabled_MembersInjector extends dagger.MembersInjector<zendesk.support.request.RequestViewConversationsDisabled> {
				public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsDisabled_MembersInjector>;
				public static injectPicasso(param0: zendesk.support.request.RequestViewConversationsDisabled, param1: com.squareup.picasso.Picasso): void;
				public static injectStore(param0: zendesk.support.request.RequestViewConversationsDisabled, param1: zendesk.suas.Store): void;
				public injectMembers(param0: zendesk.support.request.RequestViewConversationsDisabled): void;
				public static create(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<com.squareup.picasso.Picasso>): dagger.MembersInjector<zendesk.support.request.RequestViewConversationsDisabled>;
				public static injectAf(param0: zendesk.support.request.RequestViewConversationsDisabled, param1: any): void;
				public constructor(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<com.squareup.picasso.Picasso>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestViewConversationsEnabled implements zendesk.support.request.RequestView {
				public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsEnabled>;
				public inflateMenu(param0: globalAndroid.view.MenuInflater, param1: globalAndroid.view.Menu): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onOptionsItemClicked(param0: globalAndroid.view.MenuItem): boolean;
				public hasUnsavedInput(): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onDetachedFromWindow(): void;
			}
			export module RequestViewConversationsEnabled {
				export class ImagePickerDragAnimation {
					public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsEnabled.ImagePickerDragAnimation>;
					public onScroll(param0: number, param1: number, param2: number): void;
				}
				export class RecyclerListener extends zendesk.support.request.ViewMessageComposer.OnHeightChangeListener {
					public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsEnabled.RecyclerListener>;
					public onFocusChange(param0: globalAndroid.view.View, param1: boolean): void;
					public onRemoved(param0: number, param1: number): void;
					public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
					public onHeightChange(param0: number): void;
					public onInserted(param0: number, param1: number): void;
					public onChanged(param0: number, param1: number, param2: any): void;
					public onMoved(param0: number, param1: number): void;
				}
				export class RequestItemAnimator {
					public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsEnabled.RequestItemAnimator>;
					public canReuseUpdatedViewHolder(param0: globalAndroid.support.v7.widget.RecyclerView.ViewHolder): boolean;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestViewConversationsEnabled_MembersInjector extends dagger.MembersInjector<zendesk.support.request.RequestViewConversationsEnabled> {
				public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsEnabled_MembersInjector>;
				public static create(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.CellFactory>, param3: javax.inject.Provider<com.squareup.picasso.Picasso>): dagger.MembersInjector<zendesk.support.request.RequestViewConversationsEnabled>;
				public constructor(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.CellFactory>, param3: javax.inject.Provider<com.squareup.picasso.Picasso>);
				public static injectStore(param0: zendesk.support.request.RequestViewConversationsEnabled, param1: zendesk.suas.Store): void;
				public injectMembers(param0: zendesk.support.request.RequestViewConversationsEnabled): void;
				public static injectAf(param0: zendesk.support.request.RequestViewConversationsEnabled, param1: any): void;
				public static injectCellFactory(param0: zendesk.support.request.RequestViewConversationsEnabled, param1: any): void;
				public static injectPicasso(param0: zendesk.support.request.RequestViewConversationsEnabled, param1: com.squareup.picasso.Picasso): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestViewLoading implements zendesk.support.request.RequestView {
				public static class: java.lang.Class<zendesk.support.request.RequestViewLoading>;
				public inflateMenu(param0: globalAndroid.view.MenuInflater, param1: globalAndroid.view.Menu): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onOptionsItemClicked(param0: globalAndroid.view.MenuItem): boolean;
				public hasUnsavedInput(): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RetryDialog {
				public static class: java.lang.Class<zendesk.support.request.RetryDialog>;
				public setListener(param0: zendesk.support.request.RetryDialog.Listener): void;
				public onStart(): void;
			}
			export module RetryDialog {
				export class Listener {
					public static class: java.lang.Class<zendesk.support.request.RetryDialog.Listener>;
					/**
					 * Constructs a new instance of the zendesk.support.request.RetryDialog$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDeleteMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
						onRetryMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
					});
					public constructor();
					public onRetryMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
					public onDeleteMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateAndroidLifecycle {
				public static class: java.lang.Class<zendesk.support.request.StateAndroidLifecycle>;
				public static STARTED: number;
				public static STOPPED: number;
				public getState(): number;
				public constructor(param0: number);
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateAttachments {
				public static class: java.lang.Class<zendesk.support.request.StateAttachments>;
				public toString(): string;
			}
			export module StateAttachments {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.request.StateAttachments.Builder>;
				}
				export class UriComparator extends java.lang.Object {
					public static class: java.lang.Class<zendesk.support.request.StateAttachments.UriComparator>;
					public compare(param0: zendesk.support.request.StateRequestAttachment, param1: zendesk.support.request.StateRequestAttachment): number;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateConfig {
				public static class: java.lang.Class<zendesk.support.request.StateConfig>;
				public toString(): string;
			}
			export module StateConfig {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.request.StateConfig.Builder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateConversation {
				public static class: java.lang.Class<zendesk.support.request.StateConversation>;
				public toString(): string;
			}
			export module StateConversation {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.request.StateConversation.Builder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateError {
				public static class: java.lang.Class<zendesk.support.request.StateError>;
			}
			export module StateError {
				export class ErrorType {
					public static class: java.lang.Class<zendesk.support.request.StateError.ErrorType>;
					public static InitialGetComments: zendesk.support.request.StateError.ErrorType;
					public static InputFormSubmission: zendesk.support.request.StateError.ErrorType;
					public static NoAccess: zendesk.support.request.StateError.ErrorType;
					public static NoError: zendesk.support.request.StateError.ErrorType;
					public static values(): native.Array<zendesk.support.request.StateError.ErrorType>;
					public static valueOf(param0: string): zendesk.support.request.StateError.ErrorType;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateIdMapper {
				public static class: java.lang.Class<zendesk.support.request.StateIdMapper>;
				public toString(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateMessage {
				public static class: java.lang.Class<zendesk.support.request.StateMessage>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateMessageMergeUtil {
				public static class: java.lang.Class<zendesk.support.request.StateMessageMergeUtil>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateMessageStatus {
				public static class: java.lang.Class<zendesk.support.request.StateMessageStatus>;
				public toString(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateProgress {
				public static class: java.lang.Class<zendesk.support.request.StateProgress>;
				public toString(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateRequestAttachment extends java.lang.Object {
				public static class: java.lang.Class<zendesk.support.request.StateRequestAttachment>;
				public static convert(param0: java.util.List<zendesk.support.CommentResponse>, param1: java.util.Map<java.lang.Long,zendesk.belvedere.MediaResult>, param2: zendesk.support.request.StateIdMapper): globalAndroid.support.v4.util.Pair<java.util.Map<java.lang.Long,zendesk.support.request.StateRequestAttachment>,zendesk.support.request.StateIdMapper>;
				public toString(): string;
				public compareTo(param0: zendesk.support.request.StateRequestAttachment): number;
			}
			export module StateRequestAttachment {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.request.StateRequestAttachment.Builder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateRequestTicketForm {
				public static class: java.lang.Class<zendesk.support.request.StateRequestTicketForm>;
				public constructor(param0: number, param1: java.util.List<zendesk.support.CustomField>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateRequestUser {
				public static class: java.lang.Class<zendesk.support.request.StateRequestUser>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateRetryDialog extends zendesk.support.request.StateUi.DialogState {
				public static class: java.lang.Class<zendesk.support.request.StateRetryDialog>;
				public isVisible(): boolean;
				public setVisible(param0: boolean): zendesk.support.request.StateUi.DialogState;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateSettings {
				public static class: java.lang.Class<zendesk.support.request.StateSettings>;
				public toString(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateUi {
				public static class: java.lang.Class<zendesk.support.request.StateUi>;
				public toString(): string;
			}
			export module StateUi {
				export class DialogState {
					public static class: java.lang.Class<zendesk.support.request.StateUi.DialogState>;
					/**
					 * Constructs a new instance of the zendesk.support.request.StateUi$DialogState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setVisible(param0: boolean): zendesk.support.request.StateUi.DialogState;
						isVisible(): boolean;
					});
					public constructor();
					public setVisible(param0: boolean): zendesk.support.request.StateUi.DialogState;
					public isVisible(): boolean;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class UtilsAnimation {
				public static class: java.lang.Class<zendesk.support.request.UtilsAnimation>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class UtilsAttachment {
				public static class: java.lang.Class<zendesk.support.request.UtilsAttachment>;
			}
			export module UtilsAttachment {
				export class AttachmentNameComparator extends java.util.Comparator<zendesk.support.request.StateRequestAttachment> {
					public static class: java.lang.Class<zendesk.support.request.UtilsAttachment.AttachmentNameComparator>;
					public compare(param0: zendesk.support.request.StateRequestAttachment, param1: zendesk.support.request.StateRequestAttachment): number;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class UtilsDate {
				public static class: java.lang.Class<zendesk.support.request.UtilsDate>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewAlmostRealProgressBar {
				public static class: java.lang.Class<zendesk.support.request.ViewAlmostRealProgressBar>;
				public static STOP_ANIMATION_DURATION: number;
				public static ALPHA_FADE_DURATION: number;
				public static STOP_DEBOUNCE_TIME: number;
				public static START_DEBOUNCE_TIME: number;
				public static SIMPLE_PROGRESSBAR: java.util.List<zendesk.support.request.ViewAlmostRealProgressBar.Step>;
				public static DONT_STOP_MOVING: java.util.List<zendesk.support.request.ViewAlmostRealProgressBar.Step>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public stop(param0: number): void;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public start(param0: java.util.List<zendesk.support.request.ViewAlmostRealProgressBar.Step>): void;
			}
			export module ViewAlmostRealProgressBar {
				export class State {
					public static class: java.lang.Class<zendesk.support.request.ViewAlmostRealProgressBar.State>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<zendesk.support.request.ViewAlmostRealProgressBar.State>;
					public constructor(param0: globalAndroid.os.Parcelable, param1: number, param2: java.util.List<zendesk.support.request.ViewAlmostRealProgressBar.Step>);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export class StateAwareAnimator {
					public static class: java.lang.Class<zendesk.support.request.ViewAlmostRealProgressBar.StateAwareAnimator>;
					public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
					public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
					public onAnimationStart(param0: globalAndroid.animation.Animator): void;
					public onAnimationRepeat(param0: globalAndroid.animation.Animator): void;
				}
				export class Step extends java.lang.Object {
					public static class: java.lang.Class<zendesk.support.request.ViewAlmostRealProgressBar.Step>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<zendesk.support.request.ViewAlmostRealProgressBar.Step>;
					public compareTo(param0: zendesk.support.request.ViewAlmostRealProgressBar.Step): number;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewAttachmentsIndicator {
				public static class: java.lang.Class<zendesk.support.request.ViewAttachmentsIndicator>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewCellAttachmentMenuItem {
				public static class: java.lang.Class<zendesk.support.request.ViewCellAttachmentMenuItem>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewMessageComposer {
				public static class: java.lang.Class<zendesk.support.request.ViewMessageComposer>;
				public addListener(param0: zendesk.support.request.ViewMessageComposer.InputListener): void;
				public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setOnHeightChangeListener(param0: zendesk.support.request.ViewMessageComposer.OnHeightChangeListener): void;
				public init(param0: zendesk.belvedere.ImageStream): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public addOnFocusChangeListener(param0: globalAndroid.view.View.OnFocusChangeListener): void;
				public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public setAttachmentsCount(param0: number): void;
				public hide(param0: boolean): void;
				public onFocusChange(param0: globalAndroid.view.View, param1: boolean): void;
				public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public onClick(param0: globalAndroid.view.View): void;
				public constructor(param0: globalAndroid.content.Context);
				public removeAllListener(): void;
				public dispatchKeyEventPreIme(param0: globalAndroid.view.KeyEvent): boolean;
				public onEditorAction(param0: globalAndroid.widget.TextView, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public getMessage(): string;
				public afterTextChanged(param0: globalAndroid.text.Editable): void;
				public requestFocusForInput(): void;
			}
			export module ViewMessageComposer {
				export class InputListener {
					public static class: java.lang.Class<zendesk.support.request.ViewMessageComposer.InputListener>;
					/**
					 * Constructs a new instance of the zendesk.support.request.ViewMessageComposer$InputListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAddAttachmentsRequested(): void;
						onSendMessageRequested(param0: string): void;
					});
					public constructor();
					public onSendMessageRequested(param0: string): void;
					public onAddAttachmentsRequested(): void;
				}
				export class MessageComposerState {
					public static class: java.lang.Class<zendesk.support.request.ViewMessageComposer.MessageComposerState>;
					public toString(): string;
				}
				export class MessageComposerStateHelper {
					public static class: java.lang.Class<zendesk.support.request.ViewMessageComposer.MessageComposerStateHelper>;
				}
				export class OnHeightChangeListener {
					public static class: java.lang.Class<zendesk.support.request.ViewMessageComposer.OnHeightChangeListener>;
					/**
					 * Constructs a new instance of the zendesk.support.request.ViewMessageComposer$OnHeightChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onHeightChange(param0: number): void;
					});
					public constructor();
					public onHeightChange(param0: number): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewRequestText {
				public static class: java.lang.Class<zendesk.support.request.ViewRequestText>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewToolbarAvatar {
				public static class: java.lang.Class<zendesk.support.request.ViewToolbarAvatar>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class CancelableCompositeCallback {
				public static class: java.lang.Class<zendesk.support.requestlist.CancelableCompositeCallback>;
				public add(param0: com.zendesk.service.SafeZendeskCallback): void;
				public cancel(): void;
				public add(param0: native.Array<com.zendesk.service.SafeZendeskCallback>): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestInfo {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestInfo>;
				public constructor(param0: string, param1: string, param2: zendesk.support.RequestStatus, param3: boolean, param4: java.util.Date, param5: java.util.List<zendesk.support.requestlist.RequestInfo.AgentInfo>, param6: zendesk.support.requestlist.RequestInfo.MessageInfo, param7: zendesk.support.requestlist.RequestInfo.MessageInfo, param8: java.util.Set<string>);
				public getAgentInfos(): java.util.List<zendesk.support.requestlist.RequestInfo.AgentInfo>;
				public hashCode(): number;
				public getRemoteId(): string;
				public equals(param0: any): boolean;
				public getLocalId(): string;
				public getRequestStatus(): zendesk.support.RequestStatus;
			}
			export module RequestInfo {
				export class AgentInfo {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfo.AgentInfo>;
					public equals(param0: any): boolean;
					public hashCode(): number;
					public constructor(param0: string, param1: string, param2: string);
				}
				export class MessageInfo {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfo.MessageInfo>;
					public equals(param0: any): boolean;
					public constructor(param0: string, param1: java.util.Date, param2: string);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestInfoDataSource {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource>;
				/**
				 * Constructs a new instance of the zendesk.support.requestlist.RequestInfoDataSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					load(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
				});
				public constructor();
				public static LOCAL: string;
				public static REMOTE: string;
				public load(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
			}
			export module RequestInfoDataSource {
				export class Disk extends zendesk.support.requestlist.RequestInfoDataSource {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource.Disk>;
					public load(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
					public constructor(param0: java.util.concurrent.Executor, param1: java.util.concurrent.Executor, param2: zendesk.support.SupportUiStorage, param3: string);
				}
				export class LocalDataSource extends zendesk.support.requestlist.RequestInfoDataSource {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource>;
					public insert(param0: zendesk.support.requestlist.RequestInfo, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
					public load(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
					public constructor(param0: zendesk.support.requestlist.RequestInfoDataSource.Disk);
					public remove(param0: string, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
				}
				export class Network extends zendesk.support.requestlist.RequestInfoDataSource {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource.Network>;
					public load(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
				}
				export class RemoteDataSource extends zendesk.support.requestlist.RequestInfoDataSource {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource.RemoteDataSource>;
					public load(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
				}
				export class Repository extends zendesk.support.requestlist.RequestInfoDataSource {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource.Repository>;
					public load(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
				}
				export module Repository {
					export class Merger {
						public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource.Repository.Merger>;
					}
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListActivity {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListActivity>;
				public static refresh(param0: globalAndroid.content.Context, param1: zendesk.core.ActionHandlerRegistry): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public onStart(): void;
				public onPause(): void;
				public onStop(): void;
				public onDestroy(): void;
				public static builder(): zendesk.support.requestlist.RequestListUiConfig.Builder;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListActivity_MembersInjector extends dagger.MembersInjector<zendesk.support.requestlist.RequestListActivity> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListActivity_MembersInjector>;
				public static injectSyncHandler(param0: zendesk.support.requestlist.RequestListActivity, param1: any): void;
				public static injectModel(param0: zendesk.support.requestlist.RequestListActivity, param1: any): void;
				public constructor(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListPresenter>, param1: javax.inject.Provider<zendesk.support.requestlist.RequestListView>, param2: javax.inject.Provider<zendesk.support.requestlist.RequestListModel>, param3: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param4: javax.inject.Provider<zendesk.support.requestlist.RequestListSyncHandler>);
				public static injectActionHandlerRegistry(param0: zendesk.support.requestlist.RequestListActivity, param1: zendesk.core.ActionHandlerRegistry): void;
				public static create(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListPresenter>, param1: javax.inject.Provider<zendesk.support.requestlist.RequestListView>, param2: javax.inject.Provider<zendesk.support.requestlist.RequestListModel>, param3: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param4: javax.inject.Provider<zendesk.support.requestlist.RequestListSyncHandler>): dagger.MembersInjector<zendesk.support.requestlist.RequestListActivity>;
				public injectMembers(param0: zendesk.support.requestlist.RequestListActivity): void;
				public static injectPresenter(param0: zendesk.support.requestlist.RequestListActivity, param1: any): void;
				public static injectView(param0: zendesk.support.requestlist.RequestListActivity, param1: any): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<zendesk.support.requestlist.RequestListViewHolder> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListAdapter>;
				public onBindViewHolder(param0: zendesk.support.requestlist.RequestListViewHolder, param1: number): void;
				public getItemId(param0: number): number;
				public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): zendesk.support.requestlist.RequestListViewHolder;
				public getItemCount(): number;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListComponent {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListComponent>;
				/**
				 * Constructs a new instance of the zendesk.support.requestlist.RequestListComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					inject(param0: zendesk.support.requestlist.RequestListActivity): void;
				});
				public constructor();
				public inject(param0: zendesk.support.requestlist.RequestListActivity): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListItem {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListItem>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModel {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModel>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule_ModelFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestListModel> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule_ModelFactory>;
				public static proxyModel(param0: zendesk.support.requestlist.RequestInfoDataSource.Repository, param1: zendesk.core.MemoryCache, param2: zendesk.support.SupportBlipsProvider, param3: zendesk.support.SupportSettingsProvider): zendesk.support.requestlist.RequestListModel;
				public static create(param0: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.Repository>, param1: javax.inject.Provider<zendesk.core.MemoryCache>, param2: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param3: javax.inject.Provider<zendesk.support.SupportSettingsProvider>): dagger.internal.Factory<zendesk.support.requestlist.RequestListModel>;
				public get(): zendesk.support.requestlist.RequestListModel;
				public constructor(param0: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.Repository>, param1: javax.inject.Provider<zendesk.core.MemoryCache>, param2: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param3: javax.inject.Provider<zendesk.support.SupportSettingsProvider>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule_PresenterFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestListPresenter> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule_PresenterFactory>;
				public constructor(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListView>, param1: javax.inject.Provider<zendesk.support.requestlist.RequestListModel>);
				public static proxyPresenter(param0: any, param1: any): zendesk.support.requestlist.RequestListPresenter;
				public get(): zendesk.support.requestlist.RequestListPresenter;
				public static create(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListView>, param1: javax.inject.Provider<zendesk.support.requestlist.RequestListModel>): dagger.internal.Factory<zendesk.support.requestlist.RequestListPresenter>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule_RefreshHandlerFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestListSyncHandler> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule_RefreshHandlerFactory>;
				public get(): zendesk.support.requestlist.RequestListSyncHandler;
				public static create(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListPresenter>): dagger.internal.Factory<zendesk.support.requestlist.RequestListSyncHandler>;
				public constructor(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListPresenter>);
				public static proxyRefreshHandler(param0: any): zendesk.support.requestlist.RequestListSyncHandler;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule_RepositoryFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestInfoDataSource.Repository> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule_RepositoryFactory>;
				public get(): zendesk.support.requestlist.RequestInfoDataSource.Repository;
				public constructor(param0: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource>, param1: javax.inject.Provider<zendesk.support.SupportUiStorage>, param2: javax.inject.Provider<zendesk.support.RequestProvider>, param3: javax.inject.Provider<java.util.concurrent.Executor>, param4: javax.inject.Provider<java.util.concurrent.ExecutorService>);
				public static proxyRepository(param0: zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource, param1: zendesk.support.SupportUiStorage, param2: zendesk.support.RequestProvider, param3: java.util.concurrent.Executor, param4: java.util.concurrent.ExecutorService): zendesk.support.requestlist.RequestInfoDataSource.Repository;
				public static create(param0: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource>, param1: javax.inject.Provider<zendesk.support.SupportUiStorage>, param2: javax.inject.Provider<zendesk.support.RequestProvider>, param3: javax.inject.Provider<java.util.concurrent.Executor>, param4: javax.inject.Provider<java.util.concurrent.ExecutorService>): dagger.internal.Factory<zendesk.support.requestlist.RequestInfoDataSource.Repository>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule_ViewFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestListView> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule_ViewFactory>;
				public static create(param0: zendesk.support.requestlist.RequestListModule, param1: javax.inject.Provider<com.squareup.picasso.Picasso>): dagger.internal.Factory<zendesk.support.requestlist.RequestListView>;
				public constructor(param0: zendesk.support.requestlist.RequestListModule, param1: javax.inject.Provider<com.squareup.picasso.Picasso>);
				public get(): zendesk.support.requestlist.RequestListView;
				public static proxyView(param0: zendesk.support.requestlist.RequestListModule, param1: com.squareup.picasso.Picasso): zendesk.support.requestlist.RequestListView;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListPresenter {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListPresenter>;
				public constructor(param0: zendesk.support.requestlist.RequestListView, param1: zendesk.support.requestlist.RequestListModel);
			}
			export module RequestListPresenter {
				export class SettingsCallback {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestListPresenter.SettingsCallback>;
					/**
					 * Constructs a new instance of the zendesk.support.requestlist.RequestListPresenter$SettingsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSettings(param0: zendesk.support.SupportSdkSettings): void;
					});
					public constructor();
					public onSettings(param0: zendesk.support.SupportSdkSettings): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListSyncHandler {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListSyncHandler>;
				public canHandle(param0: string): boolean;
				public getPriority(): number;
				public handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListUiConfig extends zendesk.support.UiConfig {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListUiConfig>;
				public getUiConfigs(): java.util.List<zendesk.support.UiConfig>;
			}
			export module RequestListUiConfig {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestListUiConfig.Builder>;
					public show(param0: globalAndroid.content.Context, param1: native.Array<zendesk.support.UiConfig>): void;
					public constructor();
					public config(): zendesk.support.UiConfig;
					public show(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.support.UiConfig>): void;
					public intent(param0: globalAndroid.content.Context, param1: native.Array<zendesk.support.UiConfig>): globalAndroid.content.Intent;
					public intent(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.support.UiConfig>): globalAndroid.content.Intent;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListView {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListView>;
				public setBackClickListener(param0: globalAndroid.view.View.OnClickListener): void;
				public startReferrerPage(param0: string): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public startRequestActivity(param0: zendesk.support.request.RequestUiConfig.Builder): void;
				public finish(param0: string): void;
				public finish(): void;
				public setCreateRequestListener(param0: globalAndroid.view.View.OnClickListener): void;
				public setLogoClickListener(param0: boolean, param1: globalAndroid.view.View.OnClickListener): void;
				public showErrorMessage(): void;
				public setItemClickListener(param0: zendesk.support.requestlist.RequestListView.OnItemClick): void;
				public onStart(): void;
				public showRequestList(param0: java.util.List<zendesk.support.requestlist.RequestListItem>): void;
				public setLoading(param0: boolean): void;
				public constructor(param0: globalAndroid.support.v7.app.AppCompatActivity, param1: zendesk.support.requestlist.RequestListUiConfig, param2: com.squareup.picasso.Picasso);
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public setSwipeRefreshListener(param0: globalAndroid.support.v4.widget.SwipeRefreshLayout.OnRefreshListener): void;
				public setRetryClickListener(param0: globalAndroid.view.View.OnClickListener): void;
				public onStop(): void;
				public announceAccessibility(param0: number): void;
			}
			export module RequestListView {
				export class OnItemClick {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestListView.OnItemClick>;
					/**
					 * Constructs a new instance of the zendesk.support.requestlist.RequestListView$OnItemClick interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onClick(param0: zendesk.support.requestlist.RequestListItem): void;
					});
					public constructor();
					public onClick(param0: zendesk.support.requestlist.RequestListItem): void;
				}
				export class SceneState {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestListView.SceneState>;
					public static LIST: zendesk.support.requestlist.RequestListView.SceneState;
					public static EMPTY: zendesk.support.requestlist.RequestListView.SceneState;
					public static NONE: zendesk.support.requestlist.RequestListView.SceneState;
					public static values(): native.Array<zendesk.support.requestlist.RequestListView.SceneState>;
					public static valueOf(param0: string): zendesk.support.requestlist.RequestListView.SceneState;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListViewHolder {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListViewHolder>;
			}
		}
	}
}

//Generics information:
//zendesk.support.AggregatedCallback:1
//zendesk.support.Streams.Use:2
//zendesk.support.request.ActionFactory.ErrorAction:1
//zendesk.support.request.ActionLoadComments.MinimumTimeCallback:1
//zendesk.support.request.ComponentInputForm.Validator:1
//zendesk.support.request.HeadlessFragment:1

