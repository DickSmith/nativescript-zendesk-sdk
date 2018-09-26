/// <reference path="android-declarations.d.ts"/>

declare module zendesk {
	export module core {
		export class AcceptHeaderInterceptor {
			public static class: java.lang.Class<zendesk.core.AcceptHeaderInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class AcceptLanguageHeaderInterceptor {
			public static class: java.lang.Class<zendesk.core.AcceptLanguageHeaderInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
			public constructor(param0: globalAndroid.content.Context);
		}
	}
}

declare module zendesk {
	export module core {
		export class AccessProvider {
			public static class: java.lang.Class<zendesk.core.AccessProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.AccessProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getAndStoreAuthTokenViaAnonymous(param0: zendesk.core.AnonymousIdentity): zendesk.core.AccessToken;
				getAndStoreAuthTokenViaJwt(param0: zendesk.core.JwtIdentity): zendesk.core.AccessToken;
			});
			public constructor();
			public static NO_JWT_ERROR_MESSAGE: string;
			public getAndStoreAuthTokenViaAnonymous(param0: zendesk.core.AnonymousIdentity): zendesk.core.AccessToken;
			public getAndStoreAuthTokenViaJwt(param0: zendesk.core.JwtIdentity): zendesk.core.AccessToken;
		}
	}
}

declare module zendesk {
	export module core {
		export class AccessService {
			public static class: java.lang.Class<zendesk.core.AccessService>;
			/**
			 * Constructs a new instance of the zendesk.core.AccessService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getAuthTokenForJwt(param0: zendesk.core.AuthenticationRequestWrapper): retrofit2.Call<zendesk.core.AuthenticationResponse>;
				getAuthTokenForAnonymous(param0: zendesk.core.AuthenticationRequestWrapper): retrofit2.Call<zendesk.core.AuthenticationResponse>;
			});
			public constructor();
			public getAuthTokenForJwt(param0: zendesk.core.AuthenticationRequestWrapper): retrofit2.Call<zendesk.core.AuthenticationResponse>;
			public getAuthTokenForAnonymous(param0: zendesk.core.AuthenticationRequestWrapper): retrofit2.Call<zendesk.core.AuthenticationResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class AccessToken {
			public static class: java.lang.Class<zendesk.core.AccessToken>;
			public equals(param0: any): boolean;
			public getUserId(): string;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module core {
		export class ActionDescription {
			public static class: java.lang.Class<zendesk.core.ActionDescription>;
			public getLocalizedLabel(): string;
			public getLocalizedAccessibilityLabel(): string;
			public getIcon(): number;
			public constructor(param0: string, param1: string, param2: number);
		}
	}
}

declare module zendesk {
	export module core {
		export class ActionHandler {
			public static class: java.lang.Class<zendesk.core.ActionHandler>;
			/**
			 * Constructs a new instance of the zendesk.core.ActionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				canHandle(param0: string): boolean;
				handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
				getPriority(): number;
				getActionDescription(): zendesk.core.ActionDescription;
			});
			public constructor();
			public getActionDescription(): zendesk.core.ActionDescription;
			public handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
			public getPriority(): number;
			public canHandle(param0: string): boolean;
		}
	}
}

declare module zendesk {
	export module core {
		export class ActionHandlerRegistry {
			public static class: java.lang.Class<zendesk.core.ActionHandlerRegistry>;
			/**
			 * Constructs a new instance of the zendesk.core.ActionHandlerRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				add(param0: zendesk.core.ActionHandler): void;
				remove(param0: zendesk.core.ActionHandler): void;
				clear(): void;
				handlerByAction(param0: string): zendesk.core.ActionHandler;
				handlersByAction(param0: string): java.util.List<zendesk.core.ActionHandler>;
			});
			public constructor();
			public clear(): void;
			public handlersByAction(param0: string): java.util.List<zendesk.core.ActionHandler>;
			public remove(param0: zendesk.core.ActionHandler): void;
			public add(param0: zendesk.core.ActionHandler): void;
			public handlerByAction(param0: string): zendesk.core.ActionHandler;
		}
	}
}

declare module zendesk {
	export module core {
		export class AnonymousIdentity extends zendesk.core.Identity {
			public static class: java.lang.Class<zendesk.core.AnonymousIdentity>;
			public equals(param0: any): boolean;
			public getSdkGuid(): string;
			public getName(): string;
			public constructor();
			public hashCode(): number;
			public getEmail(): string;
		}
		export module AnonymousIdentity {
			export class Builder {
				public static class: java.lang.Class<zendesk.core.AnonymousIdentity.Builder>;
				public withEmailIdentifier(param0: string): zendesk.core.AnonymousIdentity.Builder;
				public withNameIdentifier(param0: string): zendesk.core.AnonymousIdentity.Builder;
				public build(): zendesk.core.Identity;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class ApiAnonymousIdentity extends zendesk.core.Identity {
			public static class: java.lang.Class<zendesk.core.ApiAnonymousIdentity>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ApplicationConfiguration {
			public static class: java.lang.Class<zendesk.core.ApplicationConfiguration>;
			public getZendeskUrl(): string;
			public equals(param0: any): boolean;
			public constructor(param0: string, param1: string, param2: string);
			public getApplicationId(): string;
			public getOauthClientId(): string;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module core {
		export class Attachment {
			public static class: java.lang.Class<zendesk.core.Attachment>;
			public getSize(): java.lang.Long;
			public getUrl(): string;
			public getThumbnails(): java.util.List<zendesk.core.Attachment>;
			public getId(): java.lang.Long;
			public getFileName(): string;
			public getContentType(): string;
			public getContentUrl(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class AuthenticationProvider {
			public static class: java.lang.Class<zendesk.core.AuthenticationProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.AuthenticationProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getIdentity(): zendesk.core.Identity;
			});
			public constructor();
			public getIdentity(): zendesk.core.Identity;
		}
	}
}

declare module zendesk {
	export module core {
		export class AuthenticationRequestWrapper {
			public static class: java.lang.Class<zendesk.core.AuthenticationRequestWrapper>;
		}
	}
}

declare module zendesk {
	export module core {
		export class AuthenticationResponse {
			public static class: java.lang.Class<zendesk.core.AuthenticationResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class AuthenticationType {
			public static class: java.lang.Class<zendesk.core.AuthenticationType>;
			public static JWT: zendesk.core.AuthenticationType;
			public static ANONYMOUS: zendesk.core.AuthenticationType;
			public static values(): native.Array<zendesk.core.AuthenticationType>;
			public static valueOf(param0: string): zendesk.core.AuthenticationType;
		}
	}
}

declare module zendesk {
	export module core {
		export class BaseStorage {
			public static class: java.lang.Class<zendesk.core.BaseStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.BaseStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				put(param0: string, param1: string): void;
				put(param0: string, param1: any): void;
				get(param0: string): string;
				get(param0: string, param1: java.lang.Class): any;
				remove(param0: string): void;
				clear(): void;
			});
			public constructor();
			public get(param0: string): string;
			public clear(): void;
			public put(param0: string, param1: any): void;
			public remove(param0: string): void;
			public get(param0: string, param1: java.lang.Class): any;
			public put(param0: string, param1: string): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsCoreProvider {
			public static class: java.lang.Class<zendesk.core.BlipsCoreProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.BlipsCoreProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				coreInitialized(): void;
				corePushEnabled(): void;
				corePushDisabled(param0: java.lang.Long): void;
			});
			public constructor();
			public corePushDisabled(param0: java.lang.Long): void;
			public coreInitialized(): void;
			public corePushEnabled(): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsFormatHelper {
			public static class: java.lang.Class<zendesk.core.BlipsFormatHelper>;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsGroup {
			public static class: java.lang.Class<zendesk.core.BlipsGroup>;
			public static REQUIRED: zendesk.core.BlipsGroup;
			public static BEHAVIOURAL: zendesk.core.BlipsGroup;
			public static PATHFINDER: zendesk.core.BlipsGroup;
			public static values(): native.Array<zendesk.core.BlipsGroup>;
			public static valueOf(param0: string): zendesk.core.BlipsGroup;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsPermissions {
			public static class: java.lang.Class<zendesk.core.BlipsPermissions>;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsProvider {
			public static class: java.lang.Class<zendesk.core.BlipsProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.BlipsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				sendBlip(param0: zendesk.core.UserAction, param1: zendesk.core.BlipsGroup): void;
				sendBlip(param0: zendesk.core.PageView, param1: zendesk.core.BlipsGroup): void;
			});
			public constructor();
			public sendBlip(param0: zendesk.core.UserAction, param1: zendesk.core.BlipsGroup): void;
			public sendBlip(param0: zendesk.core.PageView, param1: zendesk.core.BlipsGroup): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsRequest {
			public static class: java.lang.Class<zendesk.core.BlipsRequest>;
		}
		export module BlipsRequest {
			export class ApiPageView {
				public static class: java.lang.Class<zendesk.core.BlipsRequest.ApiPageView>;
			}
			export class ApiUserAction {
				public static class: java.lang.Class<zendesk.core.BlipsRequest.ApiUserAction>;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsService {
			public static class: java.lang.Class<zendesk.core.BlipsService>;
			/**
			 * Constructs a new instance of the zendesk.core.BlipsService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				send(param0: string): retrofit2.Call<java.lang.Void>;
			});
			public constructor();
			public send(param0: string): retrofit2.Call<java.lang.Void>;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsSettings {
			public static class: java.lang.Class<zendesk.core.BlipsSettings>;
		}
	}
}

declare module zendesk {
	export module core {
		export class BuildConfig {
			public static class: java.lang.Class<zendesk.core.BuildConfig>;
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

declare module zendesk {
	export module core {
		export class CachingInterceptor {
			public static class: java.lang.Class<zendesk.core.CachingInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class Constants {
			public static class: java.lang.Class<zendesk.core.Constants>;
			/**
			 * Constructs a new instance of the zendesk.core.Constants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
			public static APPLICATION_JSON: string;
			public static ACCEPT_LANGUAGE: string;
			public static USER_AGENT_HEADER_KEY: string;
			public static X_ZENDESK_CLIENT_HEADER_NAME: string;
			public static PUSH_DEVICE_IDENTIFIER: string;
			public static X_ZENDESK_CLIENT_HEADER_VALUE_FORMAT: string;
			public static X_ZENDESK_CLIENT_VERSION_HEADER_NAME: string;
			public static ACCEPT_HEADER: string;
			public static AUTHORIZATION_HEADER: string;
			public static TEXT_JSON: string;
			public static USER_AGENT_HEADER_TEMPLATE: string;
			public static CLIENT_IDENTIFIER_HEADER: string;
			public static VARIANT: string;
			public static AUTHORIZATION_BEARER_FORMAT: string;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule {
			public static class: java.lang.Class<zendesk.core.CoreModule>;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_ActionHandlerRegistryFactory extends dagger.internal.Factory<zendesk.core.ActionHandlerRegistry> {
			public static class: java.lang.Class<zendesk.core.CoreModule_ActionHandlerRegistryFactory>;
			public get(): zendesk.core.ActionHandlerRegistry;
			public static create(param0: zendesk.core.CoreModule): dagger.internal.Factory<zendesk.core.ActionHandlerRegistry>;
			public constructor(param0: zendesk.core.CoreModule);
			public static proxyActionHandlerRegistry(param0: zendesk.core.CoreModule): zendesk.core.ActionHandlerRegistry;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetApplicationConfigurationFactory extends dagger.internal.Factory<zendesk.core.ApplicationConfiguration> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetApplicationConfigurationFactory>;
			public get(): zendesk.core.ApplicationConfiguration;
			public static create(param0: zendesk.core.CoreModule): dagger.internal.Factory<zendesk.core.ApplicationConfiguration>;
			public constructor(param0: zendesk.core.CoreModule);
			public static proxyGetApplicationConfiguration(param0: zendesk.core.CoreModule): zendesk.core.ApplicationConfiguration;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetApplicationContextFactory extends dagger.internal.Factory<globalAndroid.content.Context> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetApplicationContextFactory>;
			public get(): globalAndroid.content.Context;
			public static create(param0: zendesk.core.CoreModule): dagger.internal.Factory<globalAndroid.content.Context>;
			public constructor(param0: zendesk.core.CoreModule);
			public static proxyGetApplicationContext(param0: zendesk.core.CoreModule): globalAndroid.content.Context;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetAuthenticationProviderFactory extends dagger.internal.Factory<zendesk.core.AuthenticationProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetAuthenticationProviderFactory>;
			public static create(param0: zendesk.core.CoreModule): dagger.internal.Factory<zendesk.core.AuthenticationProvider>;
			public static proxyGetAuthenticationProvider(param0: zendesk.core.CoreModule): zendesk.core.AuthenticationProvider;
			public get(): zendesk.core.AuthenticationProvider;
			public constructor(param0: zendesk.core.CoreModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetBlipsProviderFactory extends dagger.internal.Factory<zendesk.core.BlipsProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetBlipsProviderFactory>;
			public static proxyGetBlipsProvider(param0: zendesk.core.CoreModule): zendesk.core.BlipsProvider;
			public get(): zendesk.core.BlipsProvider;
			public constructor(param0: zendesk.core.CoreModule);
			public static create(param0: zendesk.core.CoreModule): dagger.internal.Factory<zendesk.core.BlipsProvider>;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetExecutorFactory extends dagger.internal.Factory<java.util.concurrent.Executor> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetExecutorFactory>;
			public static proxyGetExecutor(param0: zendesk.core.CoreModule): java.util.concurrent.Executor;
			public get(): java.util.concurrent.Executor;
			public static create(param0: zendesk.core.CoreModule): dagger.internal.Factory<java.util.concurrent.Executor>;
			public constructor(param0: zendesk.core.CoreModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetExecutorServiceFactory extends dagger.internal.Factory<java.util.concurrent.ExecutorService> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetExecutorServiceFactory>;
			public static proxyGetExecutorService(param0: zendesk.core.CoreModule): java.util.concurrent.ExecutorService;
			public static create(param0: zendesk.core.CoreModule): dagger.internal.Factory<java.util.concurrent.ExecutorService>;
			public constructor(param0: zendesk.core.CoreModule);
			public get(): java.util.concurrent.ExecutorService;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetMemoryCacheFactory extends dagger.internal.Factory<zendesk.core.MemoryCache> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetMemoryCacheFactory>;
			public static proxyGetMemoryCache(param0: zendesk.core.CoreModule): zendesk.core.MemoryCache;
			public get(): zendesk.core.MemoryCache;
			public static create(param0: zendesk.core.CoreModule): dagger.internal.Factory<zendesk.core.MemoryCache>;
			public constructor(param0: zendesk.core.CoreModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetNetworkInfoProviderFactory extends dagger.internal.Factory<zendesk.core.NetworkInfoProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetNetworkInfoProviderFactory>;
			public static proxyGetNetworkInfoProvider(param0: zendesk.core.CoreModule): zendesk.core.NetworkInfoProvider;
			public get(): zendesk.core.NetworkInfoProvider;
			public static create(param0: zendesk.core.CoreModule): dagger.internal.Factory<zendesk.core.NetworkInfoProvider>;
			public constructor(param0: zendesk.core.CoreModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetPushRegistrationProviderFactory extends dagger.internal.Factory<zendesk.core.PushRegistrationProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetPushRegistrationProviderFactory>;
			public get(): zendesk.core.PushRegistrationProvider;
			public constructor(param0: zendesk.core.CoreModule);
			public static create(param0: zendesk.core.CoreModule): dagger.internal.Factory<zendesk.core.PushRegistrationProvider>;
			public static proxyGetPushRegistrationProvider(param0: zendesk.core.CoreModule): zendesk.core.PushRegistrationProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetRestServiceProviderFactory extends dagger.internal.Factory<zendesk.core.RestServiceProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetRestServiceProviderFactory>;
			public static proxyGetRestServiceProvider(param0: zendesk.core.CoreModule): zendesk.core.RestServiceProvider;
			public static create(param0: zendesk.core.CoreModule): dagger.internal.Factory<zendesk.core.RestServiceProvider>;
			public constructor(param0: zendesk.core.CoreModule);
			public get(): zendesk.core.RestServiceProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetSessionStorageFactory extends dagger.internal.Factory<zendesk.core.SessionStorage> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetSessionStorageFactory>;
			public get(): zendesk.core.SessionStorage;
			public static proxyGetSessionStorage(param0: zendesk.core.CoreModule): zendesk.core.SessionStorage;
			public constructor(param0: zendesk.core.CoreModule);
			public static create(param0: zendesk.core.CoreModule): dagger.internal.Factory<zendesk.core.SessionStorage>;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetSettingsProviderFactory extends dagger.internal.Factory<zendesk.core.SettingsProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetSettingsProviderFactory>;
			public static proxyGetSettingsProvider(param0: zendesk.core.CoreModule): zendesk.core.SettingsProvider;
			public static create(param0: zendesk.core.CoreModule): dagger.internal.Factory<zendesk.core.SettingsProvider>;
			public constructor(param0: zendesk.core.CoreModule);
			public get(): zendesk.core.SettingsProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreSettings extends zendesk.core.Settings {
			public static class: java.lang.Class<zendesk.core.CoreSettings>;
			public getAuthentication(): zendesk.core.AuthenticationType;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreSettingsStorage {
			public static class: java.lang.Class<zendesk.core.CoreSettingsStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.CoreSettingsStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getCoreSettings(): zendesk.core.CoreSettings;
				getBlipsSettings(): zendesk.core.BlipsSettings;
			});
			public constructor();
			public getBlipsSettings(): zendesk.core.BlipsSettings;
			public getCoreSettings(): zendesk.core.CoreSettings;
		}
	}
}

declare module zendesk {
	export module core {
		export abstract class CustomNetworkConfig {
			public static class: java.lang.Class<zendesk.core.CustomNetworkConfig>;
			public configureOkHttpClient(param0: okhttp3.OkHttpClient.Builder): void;
			public constructor();
			public configureRetrofit(param0: retrofit2.Retrofit.Builder): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class DaggerZendeskApplicationComponent extends zendesk.core.ZendeskApplicationComponent {
			public static class: java.lang.Class<zendesk.core.DaggerZendeskApplicationComponent>;
			public static builder(): zendesk.core.DaggerZendeskApplicationComponent.Builder;
			public zendeskShadow(): zendesk.core.ZendeskShadow;
		}
		export module DaggerZendeskApplicationComponent {
			export class Builder {
				public static class: java.lang.Class<zendesk.core.DaggerZendeskApplicationComponent.Builder>;
				public zendeskApplicationModule(param0: zendesk.core.ZendeskApplicationModule): zendesk.core.DaggerZendeskApplicationComponent.Builder;
				public build(): zendesk.core.ZendeskApplicationComponent;
				public zendeskProvidersModule(param0: zendesk.core.ZendeskProvidersModule): zendesk.core.DaggerZendeskApplicationComponent.Builder;
				public zendeskStorageModule(param0: zendesk.core.ZendeskStorageModule): zendesk.core.DaggerZendeskApplicationComponent.Builder;
				public zendeskNetworkModule(param0: zendesk.core.ZendeskNetworkModule): zendesk.core.DaggerZendeskApplicationComponent.Builder;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class DeviceInfo {
			public static class: java.lang.Class<zendesk.core.DeviceInfo>;
			public static getCurrentLocale(param0: globalAndroid.content.Context): java.util.Locale;
		}
	}
}

declare module zendesk {
	export module core {
		export class GsonSerializer extends zendesk.core.Serializer {
			public static class: java.lang.Class<zendesk.core.GsonSerializer>;
			public deserialize(param0: any, param1: java.lang.Class): any;
			public serialize(param0: any): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class Identity {
			public static class: java.lang.Class<zendesk.core.Identity>;
			/**
			 * Constructs a new instance of the zendesk.core.Identity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class IdentityManager {
			public static class: java.lang.Class<zendesk.core.IdentityManager>;
			/**
			 * Constructs a new instance of the zendesk.core.IdentityManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				identityIsDifferent(param0: zendesk.core.Identity): boolean;
				updateAndPersistIdentity(param0: zendesk.core.Identity): zendesk.core.Identity;
				getSdkGuid(): string;
				getStoredAccessTokenAsBearerToken(): string;
				getIdentity(): zendesk.core.Identity;
				getBlipsUuid(): string;
				storeAccessToken(param0: zendesk.core.AccessToken): void;
				getUserId(): java.lang.Long;
			});
			public constructor();
			public getSdkGuid(): string;
			public storeAccessToken(param0: zendesk.core.AccessToken): void;
			public updateAndPersistIdentity(param0: zendesk.core.Identity): zendesk.core.Identity;
			public getUserId(): java.lang.Long;
			public getIdentity(): zendesk.core.Identity;
			public identityIsDifferent(param0: zendesk.core.Identity): boolean;
			public getBlipsUuid(): string;
			public getStoredAccessTokenAsBearerToken(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class IdentityStorage {
			public static class: java.lang.Class<zendesk.core.IdentityStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.IdentityStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				storeAccessToken(param0: zendesk.core.AccessToken): void;
				getStoredAccessToken(): zendesk.core.AccessToken;
				storeUserId(param0: java.lang.Long): void;
				getUserId(): java.lang.Long;
				getUuid(): string;
				storeIdentity(param0: zendesk.core.Identity): void;
				getIdentity(): zendesk.core.Identity;
				clear(): void;
				updateBlipsUuid(): string;
				getBlipsUuid(): string;
				updateSdkGuid(): string;
				storeSdkGuid(param0: string): void;
			});
			public constructor();
			public clear(): void;
			public storeAccessToken(param0: zendesk.core.AccessToken): void;
			public storeIdentity(param0: zendesk.core.Identity): void;
			public getUserId(): java.lang.Long;
			public getIdentity(): zendesk.core.Identity;
			public updateSdkGuid(): string;
			public getStoredAccessToken(): zendesk.core.AccessToken;
			public getUuid(): string;
			public getBlipsUuid(): string;
			public updateBlipsUuid(): string;
			public storeSdkGuid(param0: string): void;
			public storeUserId(param0: java.lang.Long): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class JwtIdentity extends zendesk.core.Identity {
			public static class: java.lang.Class<zendesk.core.JwtIdentity>;
			public equals(param0: any): boolean;
			public getJwtUserIdentifier(): string;
			public constructor(param0: string);
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module core {
		export class LegacyIdentityMigrator {
			public static class: java.lang.Class<zendesk.core.LegacyIdentityMigrator>;
		}
	}
}

declare module zendesk {
	export module core {
		export class MemoryCache {
			public static class: java.lang.Class<zendesk.core.MemoryCache>;
			/**
			 * Constructs a new instance of the zendesk.core.MemoryCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				get(param0: string): any;
				getOrDefault(param0: string, param1: any): any;
				contains(param0: string): boolean;
				put(param0: string, param1: any): void;
				remove(param0: string): void;
				clear(): void;
			});
			public constructor();
			public getOrDefault(param0: string, param1: any): any;
			public clear(): void;
			public get(param0: string): any;
			public put(param0: string, param1: any): void;
			public remove(param0: string): void;
			public contains(param0: string): boolean;
		}
	}
}

declare module zendesk {
	export module core {
		export class NetworkAware {
			public static class: java.lang.Class<zendesk.core.NetworkAware>;
			/**
			 * Constructs a new instance of the zendesk.core.NetworkAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onNetworkAvailable(): void;
				onNetworkUnavailable(): void;
			});
			public constructor();
			public onNetworkAvailable(): void;
			public onNetworkUnavailable(): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class NetworkInfoProvider {
			public static class: java.lang.Class<zendesk.core.NetworkInfoProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.NetworkInfoProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				register(): void;
				unregister(): void;
				isNetworkAvailable(): boolean;
				addNetworkAwareListener(param0: java.lang.Integer, param1: zendesk.core.NetworkAware): void;
				removeNetworkAwareListener(param0: java.lang.Integer): void;
				clearNetworkAwareListeners(): void;
				addRetryAction(param0: java.lang.Integer, param1: zendesk.core.RetryAction): void;
				removeRetryAction(param0: java.lang.Integer): void;
				clearRetryActions(): void;
			});
			public constructor();
			public clearNetworkAwareListeners(): void;
			public removeNetworkAwareListener(param0: java.lang.Integer): void;
			public isNetworkAvailable(): boolean;
			public addNetworkAwareListener(param0: java.lang.Integer, param1: zendesk.core.NetworkAware): void;
			public register(): void;
			public addRetryAction(param0: java.lang.Integer, param1: zendesk.core.RetryAction): void;
			public removeRetryAction(param0: java.lang.Integer): void;
			public clearRetryActions(): void;
			public unregister(): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class NetworkUtils {
			public static class: java.lang.Class<zendesk.core.NetworkUtils>;
		}
	}
}

declare module zendesk {
	export module core {
		export class PageView {
			public static class: java.lang.Class<zendesk.core.PageView>;
			public getValue(): java.util.Map<string,any>;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
			public getNavigatorLanguage(): string;
			public getPageTitle(): string;
			public getUrl(): string;
			public getChannel(): string;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.Map<string,any>);
			public getVersion(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export abstract class PassThroughErrorZendeskCallback<E>  extends com.zendesk.service.ZendeskCallback<any> {
			public static class: java.lang.Class<zendesk.core.PassThroughErrorZendeskCallback<any>>;
			public onError(param0: com.zendesk.service.ErrorResponse): void;
			public onSuccess(param0: any): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ProviderStore {
			public static class: java.lang.Class<zendesk.core.ProviderStore>;
			/**
			 * Constructs a new instance of the zendesk.core.ProviderStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				userProvider(): zendesk.core.UserProvider;
				pushRegistrationProvider(): zendesk.core.PushRegistrationProvider;
			});
			public constructor();
			public pushRegistrationProvider(): zendesk.core.PushRegistrationProvider;
			public userProvider(): zendesk.core.UserProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushDeviceIdStorage {
			public static class: java.lang.Class<zendesk.core.PushDeviceIdStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.PushDeviceIdStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				storePushDeviceId(param0: string): void;
				getPushDeviceId(): string;
				hasStoredDeviceId(): boolean;
				removePushDeviceId(): void;
			});
			public constructor();
			public removePushDeviceId(): void;
			public hasStoredDeviceId(): boolean;
			public getPushDeviceId(): string;
			public storePushDeviceId(param0: string): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationProvider {
			public static class: java.lang.Class<zendesk.core.PushRegistrationProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.PushRegistrationProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				registerWithDeviceIdentifier(param0: string, param1: com.zendesk.service.ZendeskCallback<string>): void;
				registerWithUAChannelId(param0: string, param1: com.zendesk.service.ZendeskCallback<string>): void;
				unregisterDevice(param0: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
				isRegisteredForPush(): boolean;
			});
			public constructor();
			public registerWithDeviceIdentifier(param0: string, param1: com.zendesk.service.ZendeskCallback<string>): void;
			public registerWithUAChannelId(param0: string, param1: com.zendesk.service.ZendeskCallback<string>): void;
			public unregisterDevice(param0: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public isRegisteredForPush(): boolean;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationRequest {
			public static class: java.lang.Class<zendesk.core.PushRegistrationRequest>;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationRequestWrapper {
			public static class: java.lang.Class<zendesk.core.PushRegistrationRequestWrapper>;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationResponse {
			public static class: java.lang.Class<zendesk.core.PushRegistrationResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationResponseWrapper {
			public static class: java.lang.Class<zendesk.core.PushRegistrationResponseWrapper>;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationService {
			public static class: java.lang.Class<zendesk.core.PushRegistrationService>;
			/**
			 * Constructs a new instance of the zendesk.core.PushRegistrationService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				registerDevice(param0: zendesk.core.PushRegistrationRequestWrapper): retrofit2.Call<zendesk.core.PushRegistrationResponseWrapper>;
				unregisterDevice(param0: string): retrofit2.Call<java.lang.Void>;
			});
			public constructor();
			public unregisterDevice(param0: string): retrofit2.Call<java.lang.Void>;
			public registerDevice(param0: zendesk.core.PushRegistrationRequestWrapper): retrofit2.Call<zendesk.core.PushRegistrationResponseWrapper>;
		}
	}
}

declare module zendesk {
	export module core {
		export class RestServiceProvider {
			public static class: java.lang.Class<zendesk.core.RestServiceProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.RestServiceProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createRestService(param0: java.lang.Class, param1: string, param2: string): any;
				createRestService(param0: java.lang.Class, param1: string, param2: string, param3: zendesk.core.CustomNetworkConfig): any;
				getMediaOkHttpClient(): okhttp3.OkHttpClient;
			});
			public constructor();
			public createRestService(param0: java.lang.Class, param1: string, param2: string, param3: zendesk.core.CustomNetworkConfig): any;
			public createRestService(param0: java.lang.Class, param1: string, param2: string): any;
			public getMediaOkHttpClient(): okhttp3.OkHttpClient;
		}
	}
}

declare module zendesk {
	export module core {
		export class RetryAction {
			public static class: java.lang.Class<zendesk.core.RetryAction>;
			/**
			 * Constructs a new instance of the zendesk.core.RetryAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onRetry(): void;
			});
			public constructor();
			public onRetry(): void;
		}
	}
}

declare module zendesk {
	export module core {
		export abstract class SDKStartUpProvider {
			public static class: java.lang.Class<zendesk.core.SDKStartUpProvider>;
			public onCreate(): boolean;
			public onStartUp(param0: globalAndroid.content.Context): void;
			public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
			public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
			public constructor();
			public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
			public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
			public getType(param0: globalAndroid.net.Uri): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class SdkSettings {
			public static class: java.lang.Class<zendesk.core.SdkSettings>;
		}
	}
}

declare module zendesk {
	export module core {
		export class SdkSettingsProviderInternal {
			public static class: java.lang.Class<zendesk.core.SdkSettingsProviderInternal>;
			/**
			 * Constructs a new instance of the zendesk.core.SdkSettingsProviderInternal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getCoreSettings(): zendesk.core.CoreSettings;
				getBlipsSettings(): zendesk.core.BlipsSettings;
			});
			public constructor();
			public getBlipsSettings(): zendesk.core.BlipsSettings;
			public getCoreSettings(): zendesk.core.CoreSettings;
		}
	}
}

declare module zendesk {
	export module core {
		export class SdkSettingsService {
			public static class: java.lang.Class<zendesk.core.SdkSettingsService>;
			/**
			 * Constructs a new instance of the zendesk.core.SdkSettingsService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSettings(param0: string, param1: string): retrofit2.Call<java.util.Map<string,com.google.gson.JsonElement>>;
			});
			public constructor();
			public getSettings(param0: string, param1: string): retrofit2.Call<java.util.Map<string,com.google.gson.JsonElement>>;
		}
	}
}

declare module zendesk {
	export module core {
		export class Serializer {
			public static class: java.lang.Class<zendesk.core.Serializer>;
			/**
			 * Constructs a new instance of the zendesk.core.Serializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				deserialize(param0: any, param1: java.lang.Class): any;
				serialize(param0: any): string;
			});
			public constructor();
			public deserialize(param0: any, param1: java.lang.Class): any;
			public serialize(param0: any): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class SessionConfiguration {
			public static class: java.lang.Class<zendesk.core.SessionConfiguration>;
		}
		export module SessionConfiguration {
			export class Builder {
				public static class: java.lang.Class<zendesk.core.SessionConfiguration.Builder>;
				public build(): zendesk.core.SessionConfiguration;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class SessionStorage {
			public static class: java.lang.Class<zendesk.core.SessionStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.SessionStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getAdditionalSdkStorage(): zendesk.core.BaseStorage;
				getZendeskCacheDir(): java.io.File;
				getZendeskDataDir(): java.io.File;
				clear(): void;
			});
			public constructor();
			public clear(): void;
			public getZendeskCacheDir(): java.io.File;
			public getAdditionalSdkStorage(): zendesk.core.BaseStorage;
			public getZendeskDataDir(): java.io.File;
		}
	}
}

declare module zendesk {
	export module core {
		export class Settings {
			public static class: java.lang.Class<zendesk.core.Settings>;
			/**
			 * Constructs a new instance of the zendesk.core.Settings interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class SettingsPack<E>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.core.SettingsPack<any>>;
			public getSettings(): E;
			public getCoreSettings(): zendesk.core.CoreSettings;
		}
	}
}

declare module zendesk {
	export module core {
		export class SettingsProvider {
			public static class: java.lang.Class<zendesk.core.SettingsProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.SettingsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getCoreSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.core.CoreSettings>): void;
				getSettingsForSdk(param0: string, param1: java.lang.Class, param2: com.zendesk.service.ZendeskCallback): void;
			});
			public constructor();
			public getSettingsForSdk(param0: string, param1: java.lang.Class, param2: com.zendesk.service.ZendeskCallback): void;
			public getCoreSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.core.CoreSettings>): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class SettingsStorage {
			public static class: java.lang.Class<zendesk.core.SettingsStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.SettingsStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSettings(param0: string, param1: java.lang.Class): any;
				storeRawSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
				hasStoredSettings(): boolean;
				areSettingsUpToDate(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
				clear(): void;
			});
			public constructor();
			public clear(): void;
			public getSettings(param0: string, param1: java.lang.Class): any;
			public areSettingsUpToDate(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
			public storeRawSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
			public hasStoredSettings(): boolean;
		}
	}
}

declare module zendesk {
	export module core {
		export class SharedPreferencesStorage extends zendesk.core.BaseStorage {
			public static class: java.lang.Class<zendesk.core.SharedPreferencesStorage>;
			public get(param0: string): string;
			public clear(): void;
			public put(param0: string, param1: any): void;
			public remove(param0: string): void;
			public get(param0: string, param1: java.lang.Class): any;
			public put(param0: string, param1: string): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class Storage {
			public static class: java.lang.Class<zendesk.core.Storage>;
			/**
			 * Constructs a new instance of the zendesk.core.Storage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSessionStorage(): zendesk.core.SessionStorage;
				clear(): void;
				hasSdkConfigChanged(param0: zendesk.core.ApplicationConfiguration): boolean;
				storeSdkHash(param0: zendesk.core.ApplicationConfiguration): void;
			});
			public constructor();
			public clear(): void;
			public hasSdkConfigChanged(param0: zendesk.core.ApplicationConfiguration): boolean;
			public storeSdkHash(param0: zendesk.core.ApplicationConfiguration): void;
			public getSessionStorage(): zendesk.core.SessionStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class Tls12SocketFactory {
			public static class: java.lang.Class<zendesk.core.Tls12SocketFactory>;
			public static enableTls12OnPreLollipop(param0: okhttp3.OkHttpClient.Builder): okhttp3.OkHttpClient.Builder;
			public createSocket(param0: string, param1: number): java.net.Socket;
			public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
			public getSupportedCipherSuites(): native.Array<string>;
			public constructor(param0: javax.net.ssl.SSLSocketFactory);
			public getDefaultCipherSuites(): native.Array<string>;
			public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
			public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
			public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
		}
	}
}

declare module zendesk {
	export module core {
		export class User {
			public static class: java.lang.Class<zendesk.core.User>;
			public getTags(): java.util.List<string>;
			public getName(): string;
			public getId(): java.lang.Long;
			public getUserFields(): java.util.Map<string,string>;
			public getPhoto(): string;
			public constructor();
			public isAgent(): boolean;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserAction {
			public static class: java.lang.Class<zendesk.core.UserAction>;
			public getValue(): java.util.Map<string,any>;
			public getLabel(): string;
			public getAction(): string;
			public getChannel(): string;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.Map<string,any>);
			public getVersion(): string;
			public constructor(param0: string, param1: string, param2: string, param3: string);
			public getCategory(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserAgentAndClientHeadersInterceptor {
			public static class: java.lang.Class<zendesk.core.UserAgentAndClientHeadersInterceptor>;
			public constructor(param0: string, param1: string);
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserField {
			public static class: java.lang.Class<zendesk.core.UserField>;
			public getTitle(): string;
			public getUrl(): string;
			public getUserFieldOptions(): java.util.List<zendesk.core.UserFieldOption>;
			public getRegexpForValidation(): string;
			public getUserFieldType(): zendesk.core.UserField.UserFieldType;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getUpdatedAt(): java.util.Date;
			public getRawDescription(): string;
			public getRawTitle(): string;
			public getId(): java.lang.Long;
			public getKey(): string;
			public getDescription(): string;
			public isSystem(): boolean;
			public getPosition(): java.lang.Long;
			public isActive(): boolean;
		}
		export module UserField {
			export class UserFieldType {
				public static class: java.lang.Class<zendesk.core.UserField.UserFieldType>;
				public static Integer: zendesk.core.UserField.UserFieldType;
				public static Decimal: zendesk.core.UserField.UserFieldType;
				public static Checkbox: zendesk.core.UserField.UserFieldType;
				public static Date: zendesk.core.UserField.UserFieldType;
				public static Text: zendesk.core.UserField.UserFieldType;
				public static Textarea: zendesk.core.UserField.UserFieldType;
				public static Dropdown: zendesk.core.UserField.UserFieldType;
				public static Regexp: zendesk.core.UserField.UserFieldType;
				public static valueOf(param0: string): zendesk.core.UserField.UserFieldType;
				public static values(): native.Array<zendesk.core.UserField.UserFieldType>;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class UserFieldOption {
			public static class: java.lang.Class<zendesk.core.UserFieldOption>;
			public getRawName(): string;
			public getName(): string;
			public getId(): java.lang.Long;
			public constructor();
			public getValue(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserFieldRequest {
			public static class: java.lang.Class<zendesk.core.UserFieldRequest>;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserFieldResponse {
			public static class: java.lang.Class<zendesk.core.UserFieldResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserProvider {
			public static class: java.lang.Class<zendesk.core.UserProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.UserProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				addTags(param0: java.util.List<string>, param1: com.zendesk.service.ZendeskCallback<java.util.List<string>>): void;
				deleteTags(param0: java.util.List<string>, param1: com.zendesk.service.ZendeskCallback<java.util.List<string>>): void;
				getUserFields(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.core.UserField>>): void;
				setUserFields(param0: java.util.Map<string,string>, param1: com.zendesk.service.ZendeskCallback<java.util.Map<string,string>>): void;
				getUser(param0: com.zendesk.service.ZendeskCallback<zendesk.core.User>): void;
			});
			public constructor();
			public getUserFields(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.core.UserField>>): void;
			public setUserFields(param0: java.util.Map<string,string>, param1: com.zendesk.service.ZendeskCallback<java.util.Map<string,string>>): void;
			public getUser(param0: com.zendesk.service.ZendeskCallback<zendesk.core.User>): void;
			public addTags(param0: java.util.List<string>, param1: com.zendesk.service.ZendeskCallback<java.util.List<string>>): void;
			public deleteTags(param0: java.util.List<string>, param1: com.zendesk.service.ZendeskCallback<java.util.List<string>>): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserResponse {
			public static class: java.lang.Class<zendesk.core.UserResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserService {
			public static class: java.lang.Class<zendesk.core.UserService>;
			/**
			 * Constructs a new instance of the zendesk.core.UserService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				addTags(param0: zendesk.core.UserTagRequest): retrofit2.Call<zendesk.core.UserResponse>;
				deleteTags(param0: string): retrofit2.Call<zendesk.core.UserResponse>;
				getUserFields(): retrofit2.Call<zendesk.core.UserFieldResponse>;
				setUserFields(param0: zendesk.core.UserFieldRequest): retrofit2.Call<zendesk.core.UserResponse>;
				getUser(): retrofit2.Call<zendesk.core.UserResponse>;
			});
			public constructor();
			public addTags(param0: zendesk.core.UserTagRequest): retrofit2.Call<zendesk.core.UserResponse>;
			public getUser(): retrofit2.Call<zendesk.core.UserResponse>;
			public getUserFields(): retrofit2.Call<zendesk.core.UserFieldResponse>;
			public deleteTags(param0: string): retrofit2.Call<zendesk.core.UserResponse>;
			public setUserFields(param0: zendesk.core.UserFieldRequest): retrofit2.Call<zendesk.core.UserResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserTagRequest {
			public static class: java.lang.Class<zendesk.core.UserTagRequest>;
		}
	}
}

declare module zendesk {
	export module core {
		export class Zendesk {
			public static class: java.lang.Class<zendesk.core.Zendesk>;
			public static INSTANCE: zendesk.core.Zendesk;
			public setIdentity(param0: zendesk.core.Identity): void;
			public init(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string): void;
			public actionHandlerRegistry(): zendesk.core.ActionHandlerRegistry;
			public getIdentity(): zendesk.core.Identity;
			public static valueOf(param0: string): zendesk.core.Zendesk;
			public static values(): native.Array<zendesk.core.Zendesk>;
			public isInitialized(): boolean;
			public provider(): zendesk.core.ProviderStore;
			public coreModule(): zendesk.core.CoreModule;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskAccessInterceptor {
			public static class: java.lang.Class<zendesk.core.ZendeskAccessInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskAccessProvider extends zendesk.core.AccessProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskAccessProvider>;
			public getAndStoreAuthTokenViaAnonymous(param0: zendesk.core.AnonymousIdentity): zendesk.core.AccessToken;
			public getAndStoreAuthTokenViaJwt(param0: zendesk.core.JwtIdentity): zendesk.core.AccessToken;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskActionHandlerRegistry extends zendesk.core.ActionHandlerRegistry {
			public static class: java.lang.Class<zendesk.core.ZendeskActionHandlerRegistry>;
			public clear(): void;
			public handlersByAction(param0: string): java.util.List<zendesk.core.ActionHandler>;
			public remove(param0: zendesk.core.ActionHandler): void;
			public add(param0: zendesk.core.ActionHandler): void;
			public handlerByAction(param0: string): zendesk.core.ActionHandler;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationComponent {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationComponent>;
			/**
			 * Constructs a new instance of the zendesk.core.ZendeskApplicationComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				zendeskShadow(): zendesk.core.ZendeskShadow;
			});
			public constructor();
			public zendeskShadow(): zendesk.core.ZendeskShadow;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideApplicationConfigurationFactory extends dagger.internal.Factory<zendesk.core.ApplicationConfiguration> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideApplicationConfigurationFactory>;
			public static create(param0: zendesk.core.ZendeskApplicationModule): dagger.internal.Factory<zendesk.core.ApplicationConfiguration>;
			public get(): zendesk.core.ApplicationConfiguration;
			public constructor(param0: zendesk.core.ZendeskApplicationModule);
			public static proxyProvideApplicationConfiguration(param0: zendesk.core.ZendeskApplicationModule): zendesk.core.ApplicationConfiguration;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideApplicationContextFactory extends dagger.internal.Factory<globalAndroid.content.Context> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideApplicationContextFactory>;
			public get(): globalAndroid.content.Context;
			public static create(param0: zendesk.core.ZendeskApplicationModule): dagger.internal.Factory<globalAndroid.content.Context>;
			public constructor(param0: zendesk.core.ZendeskApplicationModule);
			public static proxyProvideApplicationContext(param0: zendesk.core.ZendeskApplicationModule): globalAndroid.content.Context;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideBase64SerializerFactory extends dagger.internal.Factory<zendesk.core.Serializer> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideBase64SerializerFactory>;
			public get(): zendesk.core.Serializer;
			public static create(param0: zendesk.core.ZendeskApplicationModule, param1: javax.inject.Provider<zendesk.core.Serializer>): dagger.internal.Factory<zendesk.core.Serializer>;
			public static proxyProvideBase64Serializer(param0: zendesk.core.ZendeskApplicationModule, param1: any): zendesk.core.Serializer;
			public constructor(param0: zendesk.core.ZendeskApplicationModule, param1: javax.inject.Provider<zendesk.core.Serializer>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideDeviceInfoFactory extends dagger.internal.Factory<zendesk.core.DeviceInfo> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideDeviceInfoFactory>;
			public get(): zendesk.core.DeviceInfo;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): dagger.internal.Factory<zendesk.core.DeviceInfo>;
			public static proxyProvideDeviceInfo(param0: globalAndroid.content.Context): zendesk.core.DeviceInfo;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideExecutorFactory extends dagger.internal.Factory<java.util.concurrent.ExecutorService> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideExecutorFactory>;
			public static proxyProvideExecutor(): java.util.concurrent.ExecutorService;
			public constructor();
			public static create(): dagger.internal.Factory<java.util.concurrent.ExecutorService>;
			public get(): java.util.concurrent.ExecutorService;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideGsonFactory extends dagger.internal.Factory<com.google.gson.Gson> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideGsonFactory>;
			public get(): com.google.gson.Gson;
			public static proxyProvideGson(): com.google.gson.Gson;
			public constructor();
			public static create(): dagger.internal.Factory<com.google.gson.Gson>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideHttpLoggingInterceptorFactory extends dagger.internal.Factory<okhttp3.logging.HttpLoggingInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideHttpLoggingInterceptorFactory>;
			public static create(): dagger.internal.Factory<okhttp3.logging.HttpLoggingInterceptor>;
			public constructor();
			public static proxyProvideHttpLoggingInterceptor(): okhttp3.logging.HttpLoggingInterceptor;
			public get(): okhttp3.logging.HttpLoggingInterceptor;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideZendeskFactory extends dagger.internal.Factory<zendesk.core.ZendeskShadow> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideZendeskFactory>;
			public static proxyProvideZendesk(param0: any, param1: any, param2: any, param3: any, param4: zendesk.core.PushRegistrationProvider, param5: zendesk.core.CoreModule, param6: zendesk.core.ProviderStore): zendesk.core.ZendeskShadow;
			public get(): zendesk.core.ZendeskShadow;
			public static create(param0: javax.inject.Provider<zendesk.core.Storage>, param1: javax.inject.Provider<zendesk.core.LegacyIdentityMigrator>, param2: javax.inject.Provider<zendesk.core.IdentityManager>, param3: javax.inject.Provider<zendesk.core.BlipsCoreProvider>, param4: javax.inject.Provider<zendesk.core.PushRegistrationProvider>, param5: javax.inject.Provider<zendesk.core.CoreModule>, param6: javax.inject.Provider<zendesk.core.ProviderStore>): dagger.internal.Factory<zendesk.core.ZendeskShadow>;
			public constructor(param0: javax.inject.Provider<zendesk.core.Storage>, param1: javax.inject.Provider<zendesk.core.LegacyIdentityMigrator>, param2: javax.inject.Provider<zendesk.core.IdentityManager>, param3: javax.inject.Provider<zendesk.core.BlipsCoreProvider>, param4: javax.inject.Provider<zendesk.core.PushRegistrationProvider>, param5: javax.inject.Provider<zendesk.core.CoreModule>, param6: javax.inject.Provider<zendesk.core.ProviderStore>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskAuthHeaderInterceptor {
			public static class: java.lang.Class<zendesk.core.ZendeskAuthHeaderInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskAuthenticationProvider extends zendesk.core.AuthenticationProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskAuthenticationProvider>;
			public getIdentity(): zendesk.core.Identity;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskBase64Serializer extends zendesk.core.Serializer {
			public static class: java.lang.Class<zendesk.core.ZendeskBase64Serializer>;
			public deserialize(param0: any, param1: java.lang.Class): any;
			public serialize(param0: any): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskBlipsProvider implements zendesk.core.BlipsProvider, zendesk.core.BlipsCoreProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskBlipsProvider>;
			public sendBlip(param0: zendesk.core.UserAction, param1: zendesk.core.BlipsGroup): void;
			public corePushDisabled(param0: java.lang.Long): void;
			public coreInitialized(): void;
			public sendBlip(param0: zendesk.core.PageView, param1: zendesk.core.BlipsGroup): void;
			public corePushEnabled(): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskCoreSettingsStorage extends zendesk.core.CoreSettingsStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskCoreSettingsStorage>;
			public getBlipsSettings(): zendesk.core.BlipsSettings;
			public getCoreSettings(): zendesk.core.CoreSettings;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskDiskLruCache extends zendesk.core.BaseStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskDiskLruCache>;
			public get(param0: string): string;
			public clear(): void;
			public put(param0: string, param1: any): void;
			public remove(param0: string): void;
			public get(param0: string, param1: java.lang.Class): any;
			public put(param0: string, param1: string): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskIdentityManager extends zendesk.core.IdentityManager {
			public static class: java.lang.Class<zendesk.core.ZendeskIdentityManager>;
			public getSdkGuid(): string;
			public storeAccessToken(param0: zendesk.core.AccessToken): void;
			public updateAndPersistIdentity(param0: zendesk.core.Identity): zendesk.core.Identity;
			public getUserId(): java.lang.Long;
			public getIdentity(): zendesk.core.Identity;
			public identityIsDifferent(param0: zendesk.core.Identity): boolean;
			public getBlipsUuid(): string;
			public getStoredAccessTokenAsBearerToken(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskIdentityStorage extends zendesk.core.IdentityStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskIdentityStorage>;
			public clear(): void;
			public storeAccessToken(param0: zendesk.core.AccessToken): void;
			public storeIdentity(param0: zendesk.core.Identity): void;
			public getUserId(): java.lang.Long;
			public getIdentity(): zendesk.core.Identity;
			public updateSdkGuid(): string;
			public getStoredAccessToken(): zendesk.core.AccessToken;
			public getUuid(): string;
			public getBlipsUuid(): string;
			public updateBlipsUuid(): string;
			public storeSdkGuid(param0: string): void;
			public storeUserId(param0: java.lang.Long): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskLruMemoryCache extends zendesk.core.MemoryCache {
			public static class: java.lang.Class<zendesk.core.ZendeskLruMemoryCache>;
			public cache: globalAndroid.util.LruCache<string,any>;
			public getOrDefault(param0: string, param1: any): any;
			public clear(): void;
			public get(param0: string): any;
			public put(param0: string, param1: any): void;
			public remove(param0: string): void;
			public contains(param0: string): boolean;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkInfoProvider implements zendesk.core.NetworkInfoProvider, zendesk.core.NetworkAware {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkInfoProvider>;
			public clearNetworkAwareListeners(): void;
			public removeNetworkAwareListener(param0: java.lang.Integer): void;
			public isNetworkAvailable(): boolean;
			public onNetworkAvailable(): void;
			public addNetworkAwareListener(param0: java.lang.Integer, param1: zendesk.core.NetworkAware): void;
			public register(): void;
			public addRetryAction(param0: java.lang.Integer, param1: zendesk.core.RetryAction): void;
			public removeRetryAction(param0: java.lang.Integer): void;
			public clearRetryActions(): void;
			public unregister(): void;
			public onNetworkUnavailable(): void;
		}
		export module ZendeskNetworkInfoProvider {
			export class CurrentState {
				public static class: java.lang.Class<zendesk.core.ZendeskNetworkInfoProvider.CurrentState>;
				public static CONNECTED: zendesk.core.ZendeskNetworkInfoProvider.CurrentState;
				public static DISCONNECTED: zendesk.core.ZendeskNetworkInfoProvider.CurrentState;
				public static values(): native.Array<zendesk.core.ZendeskNetworkInfoProvider.CurrentState>;
				public static valueOf(param0: string): zendesk.core.ZendeskNetworkInfoProvider.CurrentState;
			}
			export class NetworkAvailabilityBroadcastReceiver {
				public static class: java.lang.Class<zendesk.core.ZendeskNetworkInfoProvider.NetworkAvailabilityBroadcastReceiver>;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideAcceptLanguageHeaderInterceptorFactory extends dagger.internal.Factory<zendesk.core.AcceptLanguageHeaderInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideAcceptLanguageHeaderInterceptorFactory>;
			public get(): zendesk.core.AcceptLanguageHeaderInterceptor;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): dagger.internal.Factory<zendesk.core.AcceptLanguageHeaderInterceptor>;
			public static proxyProvideAcceptLanguageHeaderInterceptor(param0: globalAndroid.content.Context): zendesk.core.AcceptLanguageHeaderInterceptor;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideAccessInterceptorFactory extends dagger.internal.Factory<zendesk.core.ZendeskAccessInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideAccessInterceptorFactory>;
			public static proxyProvideAccessInterceptor(param0: any, param1: any, param2: any, param3: any): zendesk.core.ZendeskAccessInterceptor;
			public get(): zendesk.core.ZendeskAccessInterceptor;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityManager>, param1: javax.inject.Provider<zendesk.core.AccessProvider>, param2: javax.inject.Provider<zendesk.core.Storage>, param3: javax.inject.Provider<zendesk.core.CoreSettingsStorage>);
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityManager>, param1: javax.inject.Provider<zendesk.core.AccessProvider>, param2: javax.inject.Provider<zendesk.core.Storage>, param3: javax.inject.Provider<zendesk.core.CoreSettingsStorage>): dagger.internal.Factory<zendesk.core.ZendeskAccessInterceptor>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideAuthHeaderInterceptorFactory extends dagger.internal.Factory<zendesk.core.ZendeskAuthHeaderInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideAuthHeaderInterceptorFactory>;
			public static proxyProvideAuthHeaderInterceptor(param0: any): zendesk.core.ZendeskAuthHeaderInterceptor;
			public get(): zendesk.core.ZendeskAuthHeaderInterceptor;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityManager>);
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityManager>): dagger.internal.Factory<zendesk.core.ZendeskAuthHeaderInterceptor>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideBaseOkHttpClientFactory extends dagger.internal.Factory<okhttp3.OkHttpClient> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideBaseOkHttpClientFactory>;
			public constructor(param0: zendesk.core.ZendeskNetworkModule, param1: javax.inject.Provider<okhttp3.logging.HttpLoggingInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskOauthIdHeaderInterceptor>, param3: javax.inject.Provider<zendesk.core.UserAgentAndClientHeadersInterceptor>, param4: javax.inject.Provider<java.util.concurrent.ExecutorService>);
			public get(): okhttp3.OkHttpClient;
			public static proxyProvideBaseOkHttpClient(param0: zendesk.core.ZendeskNetworkModule, param1: okhttp3.logging.HttpLoggingInterceptor, param2: any, param3: any, param4: java.util.concurrent.ExecutorService): okhttp3.OkHttpClient;
			public static create(param0: zendesk.core.ZendeskNetworkModule, param1: javax.inject.Provider<okhttp3.logging.HttpLoggingInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskOauthIdHeaderInterceptor>, param3: javax.inject.Provider<zendesk.core.UserAgentAndClientHeadersInterceptor>, param4: javax.inject.Provider<java.util.concurrent.ExecutorService>): dagger.internal.Factory<okhttp3.OkHttpClient>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideCachingInterceptorFactory extends dagger.internal.Factory<zendesk.core.CachingInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideCachingInterceptorFactory>;
			public get(): zendesk.core.CachingInterceptor;
			public constructor(param0: javax.inject.Provider<zendesk.core.BaseStorage>);
			public static create(param0: javax.inject.Provider<zendesk.core.BaseStorage>): dagger.internal.Factory<zendesk.core.CachingInterceptor>;
			public static proxyProvideCachingInterceptor(param0: zendesk.core.BaseStorage): zendesk.core.CachingInterceptor;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideCoreOkHttpClientFactory extends dagger.internal.Factory<okhttp3.OkHttpClient> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideCoreOkHttpClientFactory>;
			public static create(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.AcceptLanguageHeaderInterceptor>, param2: javax.inject.Provider<zendesk.core.AcceptHeaderInterceptor>): dagger.internal.Factory<okhttp3.OkHttpClient>;
			public static proxyProvideCoreOkHttpClient(param0: okhttp3.OkHttpClient, param1: any, param2: any): okhttp3.OkHttpClient;
			public constructor(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.AcceptLanguageHeaderInterceptor>, param2: javax.inject.Provider<zendesk.core.AcceptHeaderInterceptor>);
			public get(): okhttp3.OkHttpClient;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideCoreRetrofitFactory extends dagger.internal.Factory<retrofit2.Retrofit> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideCoreRetrofitFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param1: javax.inject.Provider<com.google.gson.Gson>, param2: javax.inject.Provider<okhttp3.OkHttpClient>);
			public static proxyProvideCoreRetrofit(param0: zendesk.core.ApplicationConfiguration, param1: com.google.gson.Gson, param2: okhttp3.OkHttpClient): retrofit2.Retrofit;
			public get(): retrofit2.Retrofit;
			public static create(param0: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param1: javax.inject.Provider<com.google.gson.Gson>, param2: javax.inject.Provider<okhttp3.OkHttpClient>): dagger.internal.Factory<retrofit2.Retrofit>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideMediaOkHttpClientFactory extends dagger.internal.Factory<okhttp3.OkHttpClient> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideMediaOkHttpClientFactory>;
			public static proxyProvideMediaOkHttpClient(param0: okhttp3.OkHttpClient, param1: any, param2: any, param3: any, param4: any, param5: any): okhttp3.OkHttpClient;
			public constructor(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ZendeskAccessInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskAuthHeaderInterceptor>, param3: javax.inject.Provider<zendesk.core.ZendeskSettingsInterceptor>, param4: javax.inject.Provider<zendesk.core.CachingInterceptor>, param5: javax.inject.Provider<zendesk.core.ZendeskUnauthorizedInterceptor>);
			public get(): okhttp3.OkHttpClient;
			public static create(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ZendeskAccessInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskAuthHeaderInterceptor>, param3: javax.inject.Provider<zendesk.core.ZendeskSettingsInterceptor>, param4: javax.inject.Provider<zendesk.core.CachingInterceptor>, param5: javax.inject.Provider<zendesk.core.ZendeskUnauthorizedInterceptor>): dagger.internal.Factory<okhttp3.OkHttpClient>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideOkHttpClientFactory extends dagger.internal.Factory<okhttp3.OkHttpClient> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideOkHttpClientFactory>;
			public static proxyProvideOkHttpClient(param0: okhttp3.OkHttpClient, param1: any, param2: any, param3: any, param4: any, param5: any, param6: okhttp3.Cache): okhttp3.OkHttpClient;
			public get(): okhttp3.OkHttpClient;
			public static create(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ZendeskAccessInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskUnauthorizedInterceptor>, param3: javax.inject.Provider<zendesk.core.ZendeskAuthHeaderInterceptor>, param4: javax.inject.Provider<zendesk.core.ZendeskSettingsInterceptor>, param5: javax.inject.Provider<zendesk.core.AcceptHeaderInterceptor>, param6: javax.inject.Provider<okhttp3.Cache>): dagger.internal.Factory<okhttp3.OkHttpClient>;
			public constructor(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ZendeskAccessInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskUnauthorizedInterceptor>, param3: javax.inject.Provider<zendesk.core.ZendeskAuthHeaderInterceptor>, param4: javax.inject.Provider<zendesk.core.ZendeskSettingsInterceptor>, param5: javax.inject.Provider<zendesk.core.AcceptHeaderInterceptor>, param6: javax.inject.Provider<okhttp3.Cache>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideRestServiceProviderFactory extends dagger.internal.Factory<zendesk.core.RestServiceProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideRestServiceProviderFactory>;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>, param1: javax.inject.Provider<okhttp3.OkHttpClient>, param2: javax.inject.Provider<okhttp3.OkHttpClient>);
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>, param1: javax.inject.Provider<okhttp3.OkHttpClient>, param2: javax.inject.Provider<okhttp3.OkHttpClient>): dagger.internal.Factory<zendesk.core.RestServiceProvider>;
			public static proxyProvideRestServiceProvider(param0: retrofit2.Retrofit, param1: okhttp3.OkHttpClient, param2: okhttp3.OkHttpClient): zendesk.core.RestServiceProvider;
			public get(): zendesk.core.RestServiceProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideRetrofitFactory extends dagger.internal.Factory<retrofit2.Retrofit> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideRetrofitFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param1: javax.inject.Provider<com.google.gson.Gson>, param2: javax.inject.Provider<okhttp3.OkHttpClient>);
			public static proxyProvideRetrofit(param0: zendesk.core.ApplicationConfiguration, param1: com.google.gson.Gson, param2: okhttp3.OkHttpClient): retrofit2.Retrofit;
			public get(): retrofit2.Retrofit;
			public static create(param0: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param1: javax.inject.Provider<com.google.gson.Gson>, param2: javax.inject.Provider<okhttp3.OkHttpClient>): dagger.internal.Factory<retrofit2.Retrofit>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideSettingsInterceptorFactory extends dagger.internal.Factory<zendesk.core.ZendeskSettingsInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideSettingsInterceptorFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.SdkSettingsProviderInternal>, param1: javax.inject.Provider<zendesk.core.SettingsStorage>);
			public get(): zendesk.core.ZendeskSettingsInterceptor;
			public static proxyProvideSettingsInterceptor(param0: any, param1: any): zendesk.core.ZendeskSettingsInterceptor;
			public static create(param0: javax.inject.Provider<zendesk.core.SdkSettingsProviderInternal>, param1: javax.inject.Provider<zendesk.core.SettingsStorage>): dagger.internal.Factory<zendesk.core.ZendeskSettingsInterceptor>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideZendeskBasicHeadersInterceptorFactory extends dagger.internal.Factory<zendesk.core.ZendeskOauthIdHeaderInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideZendeskBasicHeadersInterceptorFactory>;
			public constructor(param0: zendesk.core.ZendeskNetworkModule, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>);
			public get(): zendesk.core.ZendeskOauthIdHeaderInterceptor;
			public static create(param0: zendesk.core.ZendeskNetworkModule, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>): dagger.internal.Factory<zendesk.core.ZendeskOauthIdHeaderInterceptor>;
			public static proxyProvideZendeskBasicHeadersInterceptor(param0: zendesk.core.ZendeskNetworkModule, param1: zendesk.core.ApplicationConfiguration): zendesk.core.ZendeskOauthIdHeaderInterceptor;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideZendeskUnauthorizedInterceptorFactory extends dagger.internal.Factory<zendesk.core.ZendeskUnauthorizedInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideZendeskUnauthorizedInterceptorFactory>;
			public get(): zendesk.core.ZendeskUnauthorizedInterceptor;
			public static create(param0: javax.inject.Provider<zendesk.core.SessionStorage>): dagger.internal.Factory<zendesk.core.ZendeskUnauthorizedInterceptor>;
			public static proxyProvideZendeskUnauthorizedInterceptor(param0: zendesk.core.SessionStorage): zendesk.core.ZendeskUnauthorizedInterceptor;
			public constructor(param0: javax.inject.Provider<zendesk.core.SessionStorage>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvidesAcceptHeaderInterceptorFactory extends dagger.internal.Factory<zendesk.core.AcceptHeaderInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvidesAcceptHeaderInterceptorFactory>;
			public static create(): dagger.internal.Factory<zendesk.core.AcceptHeaderInterceptor>;
			public static proxyProvidesAcceptHeaderInterceptor(): zendesk.core.AcceptHeaderInterceptor;
			public get(): zendesk.core.AcceptHeaderInterceptor;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvidesUserAgentHeaderInterceptorFactory extends dagger.internal.Factory<zendesk.core.UserAgentAndClientHeadersInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvidesUserAgentHeaderInterceptorFactory>;
			public static create(param0: zendesk.core.ZendeskNetworkModule): dagger.internal.Factory<zendesk.core.UserAgentAndClientHeadersInterceptor>;
			public get(): zendesk.core.UserAgentAndClientHeadersInterceptor;
			public constructor(param0: zendesk.core.ZendeskNetworkModule);
			public static proxyProvidesUserAgentHeaderInterceptor(param0: zendesk.core.ZendeskNetworkModule): zendesk.core.UserAgentAndClientHeadersInterceptor;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskOauthIdHeaderInterceptor {
			public static class: java.lang.Class<zendesk.core.ZendeskOauthIdHeaderInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
			public constructor(param0: string);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProviderStore extends zendesk.core.ProviderStore {
			public static class: java.lang.Class<zendesk.core.ZendeskProviderStore>;
			public pushRegistrationProvider(): zendesk.core.PushRegistrationProvider;
			public userProvider(): zendesk.core.UserProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ActionHandlerRegistryFactory extends dagger.internal.Factory<zendesk.core.ActionHandlerRegistry> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ActionHandlerRegistryFactory>;
			public static proxyActionHandlerRegistry(): zendesk.core.ActionHandlerRegistry;
			public get(): zendesk.core.ActionHandlerRegistry;
			public static create(): dagger.internal.Factory<zendesk.core.ActionHandlerRegistry>;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideAccessProviderFactory extends dagger.internal.Factory<zendesk.core.AccessProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideAccessProviderFactory>;
			public static proxyProvideAccessProvider(param0: any, param1: any): zendesk.core.AccessProvider;
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityManager>, param1: javax.inject.Provider<zendesk.core.AccessService>): dagger.internal.Factory<zendesk.core.AccessProvider>;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityManager>, param1: javax.inject.Provider<zendesk.core.AccessService>);
			public get(): zendesk.core.AccessProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideAccessServiceFactory extends dagger.internal.Factory<zendesk.core.AccessService> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideAccessServiceFactory>;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>);
			public static proxyProvideAccessService(param0: retrofit2.Retrofit): zendesk.core.AccessService;
			public get(): zendesk.core.AccessService;
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>): dagger.internal.Factory<zendesk.core.AccessService>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideBlipsServiceFactory extends dagger.internal.Factory<zendesk.core.BlipsService> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideBlipsServiceFactory>;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>);
			public get(): zendesk.core.BlipsService;
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>): dagger.internal.Factory<zendesk.core.BlipsService>;
			public static proxyProvideBlipsService(param0: retrofit2.Retrofit): zendesk.core.BlipsService;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideCoreSdkModuleFactory extends dagger.internal.Factory<zendesk.core.CoreModule> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideCoreSdkModuleFactory>;
			public get(): zendesk.core.CoreModule;
			public constructor(param0: javax.inject.Provider<zendesk.core.SettingsProvider>, param1: javax.inject.Provider<zendesk.core.RestServiceProvider>, param2: javax.inject.Provider<zendesk.core.BlipsProvider>, param3: javax.inject.Provider<zendesk.core.SessionStorage>, param4: javax.inject.Provider<zendesk.core.NetworkInfoProvider>, param5: javax.inject.Provider<zendesk.core.MemoryCache>, param6: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param7: javax.inject.Provider<java.util.concurrent.ExecutorService>, param8: javax.inject.Provider<globalAndroid.content.Context>, param9: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param10: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param11: javax.inject.Provider<zendesk.core.PushRegistrationProvider>);
			public static proxyProvideCoreSdkModule(param0: zendesk.core.SettingsProvider, param1: zendesk.core.RestServiceProvider, param2: zendesk.core.BlipsProvider, param3: zendesk.core.SessionStorage, param4: zendesk.core.NetworkInfoProvider, param5: zendesk.core.MemoryCache, param6: zendesk.core.ActionHandlerRegistry, param7: java.util.concurrent.ExecutorService, param8: globalAndroid.content.Context, param9: zendesk.core.AuthenticationProvider, param10: zendesk.core.ApplicationConfiguration, param11: zendesk.core.PushRegistrationProvider): zendesk.core.CoreModule;
			public static create(param0: javax.inject.Provider<zendesk.core.SettingsProvider>, param1: javax.inject.Provider<zendesk.core.RestServiceProvider>, param2: javax.inject.Provider<zendesk.core.BlipsProvider>, param3: javax.inject.Provider<zendesk.core.SessionStorage>, param4: javax.inject.Provider<zendesk.core.NetworkInfoProvider>, param5: javax.inject.Provider<zendesk.core.MemoryCache>, param6: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param7: javax.inject.Provider<java.util.concurrent.ExecutorService>, param8: javax.inject.Provider<globalAndroid.content.Context>, param9: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param10: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param11: javax.inject.Provider<zendesk.core.PushRegistrationProvider>): dagger.internal.Factory<zendesk.core.CoreModule>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideProviderStoreFactory extends dagger.internal.Factory<zendesk.core.ProviderStore> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideProviderStoreFactory>;
			public get(): zendesk.core.ProviderStore;
			public static create(param0: javax.inject.Provider<zendesk.core.UserProvider>, param1: javax.inject.Provider<zendesk.core.PushRegistrationProvider>): dagger.internal.Factory<zendesk.core.ProviderStore>;
			public static proxyProvideProviderStore(param0: zendesk.core.UserProvider, param1: zendesk.core.PushRegistrationProvider): zendesk.core.ProviderStore;
			public constructor(param0: javax.inject.Provider<zendesk.core.UserProvider>, param1: javax.inject.Provider<zendesk.core.PushRegistrationProvider>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvidePushRegistrationProviderFactory extends dagger.internal.Factory<zendesk.core.PushRegistrationProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvidePushRegistrationProviderFactory>;
			public get(): zendesk.core.PushRegistrationProvider;
			public static create(param0: javax.inject.Provider<zendesk.core.PushRegistrationService>, param1: javax.inject.Provider<zendesk.core.IdentityManager>, param2: javax.inject.Provider<zendesk.core.SettingsProvider>, param3: javax.inject.Provider<zendesk.core.BlipsCoreProvider>, param4: javax.inject.Provider<zendesk.core.PushDeviceIdStorage>, param5: javax.inject.Provider<globalAndroid.content.Context>): dagger.internal.Factory<zendesk.core.PushRegistrationProvider>;
			public static proxyProvidePushRegistrationProvider(param0: any, param1: any, param2: zendesk.core.SettingsProvider, param3: any, param4: any, param5: globalAndroid.content.Context): zendesk.core.PushRegistrationProvider;
			public constructor(param0: javax.inject.Provider<zendesk.core.PushRegistrationService>, param1: javax.inject.Provider<zendesk.core.IdentityManager>, param2: javax.inject.Provider<zendesk.core.SettingsProvider>, param3: javax.inject.Provider<zendesk.core.BlipsCoreProvider>, param4: javax.inject.Provider<zendesk.core.PushDeviceIdStorage>, param5: javax.inject.Provider<globalAndroid.content.Context>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvidePushRegistrationServiceFactory extends dagger.internal.Factory<zendesk.core.PushRegistrationService> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvidePushRegistrationServiceFactory>;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>);
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>): dagger.internal.Factory<zendesk.core.PushRegistrationService>;
			public get(): zendesk.core.PushRegistrationService;
			public static proxyProvidePushRegistrationService(param0: retrofit2.Retrofit): zendesk.core.PushRegistrationService;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideSdkSettingsProviderFactory extends dagger.internal.Factory<zendesk.core.SettingsProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideSdkSettingsProviderFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.ZendeskSettingsProvider>);
			public static create(param0: javax.inject.Provider<zendesk.core.ZendeskSettingsProvider>): dagger.internal.Factory<zendesk.core.SettingsProvider>;
			public static proxyProvideSdkSettingsProvider(param0: any): zendesk.core.SettingsProvider;
			public get(): zendesk.core.SettingsProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideSdkSettingsProviderInternalFactory extends dagger.internal.Factory<zendesk.core.SdkSettingsProviderInternal> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideSdkSettingsProviderInternalFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.ZendeskSettingsProvider>);
			public get(): zendesk.core.SdkSettingsProviderInternal;
			public static create(param0: javax.inject.Provider<zendesk.core.ZendeskSettingsProvider>): dagger.internal.Factory<zendesk.core.SdkSettingsProviderInternal>;
			public static proxyProvideSdkSettingsProviderInternal(param0: any): zendesk.core.SdkSettingsProviderInternal;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideSdkSettingsServiceFactory extends dagger.internal.Factory<zendesk.core.SdkSettingsService> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideSdkSettingsServiceFactory>;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>);
			public get(): zendesk.core.SdkSettingsService;
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>): dagger.internal.Factory<zendesk.core.SdkSettingsService>;
			public static proxyProvideSdkSettingsService(param0: retrofit2.Retrofit): zendesk.core.SdkSettingsService;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideUserProviderFactory extends dagger.internal.Factory<zendesk.core.UserProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideUserProviderFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.UserService>);
			public static proxyProvideUserProvider(param0: any): zendesk.core.UserProvider;
			public static create(param0: javax.inject.Provider<zendesk.core.UserService>): dagger.internal.Factory<zendesk.core.UserProvider>;
			public get(): zendesk.core.UserProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideUserServiceFactory extends dagger.internal.Factory<zendesk.core.UserService> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideUserServiceFactory>;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>);
			public get(): zendesk.core.UserService;
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>): dagger.internal.Factory<zendesk.core.UserService>;
			public static proxyProvideUserService(param0: retrofit2.Retrofit): zendesk.core.UserService;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideZendeskSdkSettingsProviderFactory extends dagger.internal.Factory<zendesk.core.ZendeskSettingsProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideZendeskSdkSettingsProviderFactory>;
			public get(): zendesk.core.ZendeskSettingsProvider;
			public static proxyProvideZendeskSdkSettingsProvider(param0: any, param1: any, param2: any, param3: any, param4: zendesk.core.ApplicationConfiguration, param5: globalAndroid.content.Context): zendesk.core.ZendeskSettingsProvider;
			public constructor(param0: javax.inject.Provider<zendesk.core.SdkSettingsService>, param1: javax.inject.Provider<zendesk.core.SettingsStorage>, param2: javax.inject.Provider<zendesk.core.CoreSettingsStorage>, param3: javax.inject.Provider<zendesk.core.Serializer>, param4: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param5: javax.inject.Provider<globalAndroid.content.Context>);
			public static create(param0: javax.inject.Provider<zendesk.core.SdkSettingsService>, param1: javax.inject.Provider<zendesk.core.SettingsStorage>, param2: javax.inject.Provider<zendesk.core.CoreSettingsStorage>, param3: javax.inject.Provider<zendesk.core.Serializer>, param4: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param5: javax.inject.Provider<globalAndroid.content.Context>): dagger.internal.Factory<zendesk.core.ZendeskSettingsProvider>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProviderBlipsCoreProviderFactory extends dagger.internal.Factory<zendesk.core.BlipsCoreProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProviderBlipsCoreProviderFactory>;
			public get(): zendesk.core.BlipsCoreProvider;
			public static proxyProviderBlipsCoreProvider(param0: any): zendesk.core.BlipsCoreProvider;
			public static create(param0: javax.inject.Provider<zendesk.core.ZendeskBlipsProvider>): dagger.internal.Factory<zendesk.core.BlipsCoreProvider>;
			public constructor(param0: javax.inject.Provider<zendesk.core.ZendeskBlipsProvider>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProviderBlipsProviderFactory extends dagger.internal.Factory<zendesk.core.BlipsProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProviderBlipsProviderFactory>;
			public static proxyProviderBlipsProvider(param0: any): zendesk.core.BlipsProvider;
			public static create(param0: javax.inject.Provider<zendesk.core.ZendeskBlipsProvider>): dagger.internal.Factory<zendesk.core.BlipsProvider>;
			public get(): zendesk.core.BlipsProvider;
			public constructor(param0: javax.inject.Provider<zendesk.core.ZendeskBlipsProvider>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProviderConnectivityManagerFactory extends dagger.internal.Factory<globalAndroid.net.ConnectivityManager> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProviderConnectivityManagerFactory>;
			public static proxyProviderConnectivityManager(param0: globalAndroid.content.Context): globalAndroid.net.ConnectivityManager;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public get(): globalAndroid.net.ConnectivityManager;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): dagger.internal.Factory<globalAndroid.net.ConnectivityManager>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProviderNetworkInfoProviderFactory extends dagger.internal.Factory<zendesk.core.NetworkInfoProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProviderNetworkInfoProviderFactory>;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<globalAndroid.net.ConnectivityManager>);
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<globalAndroid.net.ConnectivityManager>): dagger.internal.Factory<zendesk.core.NetworkInfoProvider>;
			public static proxyProviderNetworkInfoProvider(param0: globalAndroid.content.Context, param1: globalAndroid.net.ConnectivityManager): zendesk.core.NetworkInfoProvider;
			public get(): zendesk.core.NetworkInfoProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProviderZendeskBlipsProviderFactory extends dagger.internal.Factory<zendesk.core.ZendeskBlipsProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProviderZendeskBlipsProviderFactory>;
			public get(): zendesk.core.ZendeskBlipsProvider;
			public static create(param0: javax.inject.Provider<zendesk.core.BlipsService>, param1: javax.inject.Provider<zendesk.core.DeviceInfo>, param2: javax.inject.Provider<zendesk.core.Serializer>, param3: javax.inject.Provider<zendesk.core.IdentityManager>, param4: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param5: javax.inject.Provider<zendesk.core.CoreSettingsStorage>, param6: javax.inject.Provider<java.util.concurrent.ExecutorService>): dagger.internal.Factory<zendesk.core.ZendeskBlipsProvider>;
			public static proxyProviderZendeskBlipsProvider(param0: any, param1: any, param2: any, param3: any, param4: zendesk.core.ApplicationConfiguration, param5: any, param6: java.util.concurrent.ExecutorService): zendesk.core.ZendeskBlipsProvider;
			public constructor(param0: javax.inject.Provider<zendesk.core.BlipsService>, param1: javax.inject.Provider<zendesk.core.DeviceInfo>, param2: javax.inject.Provider<zendesk.core.Serializer>, param3: javax.inject.Provider<zendesk.core.IdentityManager>, param4: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param5: javax.inject.Provider<zendesk.core.CoreSettingsStorage>, param6: javax.inject.Provider<java.util.concurrent.ExecutorService>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskPushDeviceIdStorage extends zendesk.core.PushDeviceIdStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskPushDeviceIdStorage>;
			public removePushDeviceId(): void;
			public hasStoredDeviceId(): boolean;
			public getPushDeviceId(): string;
			public storePushDeviceId(param0: string): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskPushRegistrationProvider extends zendesk.core.PushRegistrationProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskPushRegistrationProvider>;
			public registerWithDeviceIdentifier(param0: string, param1: com.zendesk.service.ZendeskCallback<string>): void;
			public registerWithUAChannelId(param0: string, param1: com.zendesk.service.ZendeskCallback<string>): void;
			public unregisterDevice(param0: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public isRegisteredForPush(): boolean;
		}
		export module ZendeskPushRegistrationProvider {
			export class TokenType {
				public static class: java.lang.Class<zendesk.core.ZendeskPushRegistrationProvider.TokenType>;
				public static Identifier: zendesk.core.ZendeskPushRegistrationProvider.TokenType;
				public static UrbanAirshipChannelId: zendesk.core.ZendeskPushRegistrationProvider.TokenType;
				public static valueOf(param0: string): zendesk.core.ZendeskPushRegistrationProvider.TokenType;
				public static values(): native.Array<zendesk.core.ZendeskPushRegistrationProvider.TokenType>;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskRestServiceProvider extends zendesk.core.RestServiceProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskRestServiceProvider>;
			public createRestService(param0: java.lang.Class, param1: string, param2: string, param3: zendesk.core.CustomNetworkConfig): any;
			public createRestService(param0: java.lang.Class, param1: string, param2: string): any;
			public getMediaOkHttpClient(): okhttp3.OkHttpClient;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskSessionStorage extends zendesk.core.SessionStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskSessionStorage>;
			public clear(): void;
			public getZendeskCacheDir(): java.io.File;
			public getAdditionalSdkStorage(): zendesk.core.BaseStorage;
			public getZendeskDataDir(): java.io.File;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskSettingsInterceptor {
			public static class: java.lang.Class<zendesk.core.ZendeskSettingsInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskSettingsProvider implements zendesk.core.SettingsProvider, zendesk.core.SdkSettingsProviderInternal {
			public static class: java.lang.Class<zendesk.core.ZendeskSettingsProvider>;
			public getSettingsForSdk(param0: string, param1: java.lang.Class, param2: com.zendesk.service.ZendeskCallback): void;
			public getBlipsSettings(): zendesk.core.BlipsSettings;
			public getCoreSettings(): zendesk.core.CoreSettings;
			public getCoreSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.core.CoreSettings>): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskSettingsStorage extends zendesk.core.SettingsStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskSettingsStorage>;
			public clear(): void;
			public getSettings(param0: string, param1: java.lang.Class): any;
			public areSettingsUpToDate(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
			public storeRawSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
			public hasStoredSettings(): boolean;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskShadow {
			public static class: java.lang.Class<zendesk.core.ZendeskShadow>;
			public setIdentity(param0: zendesk.core.Identity): void;
			public providers(): zendesk.core.ProviderStore;
			public getIdentity(): zendesk.core.Identity;
			public coreModule(): zendesk.core.CoreModule;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorage extends zendesk.core.Storage {
			public static class: java.lang.Class<zendesk.core.ZendeskStorage>;
			public clear(): void;
			public hasSdkConfigChanged(param0: zendesk.core.ApplicationConfiguration): boolean;
			public storeSdkHash(param0: zendesk.core.ApplicationConfiguration): void;
			public getSessionStorage(): zendesk.core.SessionStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideAdditionalSdkBaseStorageFactory extends dagger.internal.Factory<zendesk.core.BaseStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideAdditionalSdkBaseStorageFactory>;
			public static proxyProvideAdditionalSdkBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.BaseStorage;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): dagger.internal.Factory<zendesk.core.BaseStorage>;
			public get(): zendesk.core.BaseStorage;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideAuthProviderFactory extends dagger.internal.Factory<zendesk.core.AuthenticationProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideAuthProviderFactory>;
			public static proxyProvideAuthProvider(param0: any): zendesk.core.AuthenticationProvider;
			public get(): zendesk.core.AuthenticationProvider;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityManager>);
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityManager>): dagger.internal.Factory<zendesk.core.AuthenticationProvider>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideCacheFactory extends dagger.internal.Factory<okhttp3.Cache> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideCacheFactory>;
			public constructor(param0: javax.inject.Provider<java.io.File>);
			public get(): okhttp3.Cache;
			public static create(param0: javax.inject.Provider<java.io.File>): dagger.internal.Factory<okhttp3.Cache>;
			public static proxyProvideCache(param0: java.io.File): okhttp3.Cache;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideCoreSettingsStorageFactory extends dagger.internal.Factory<zendesk.core.CoreSettingsStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideCoreSettingsStorageFactory>;
			public static proxyProvideCoreSettingsStorage(param0: any): zendesk.core.CoreSettingsStorage;
			public get(): zendesk.core.CoreSettingsStorage;
			public static create(param0: javax.inject.Provider<zendesk.core.SettingsStorage>): dagger.internal.Factory<zendesk.core.CoreSettingsStorage>;
			public constructor(param0: javax.inject.Provider<zendesk.core.SettingsStorage>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideIdentityBaseStorageFactory extends dagger.internal.Factory<zendesk.core.BaseStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideIdentityBaseStorageFactory>;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): dagger.internal.Factory<zendesk.core.BaseStorage>;
			public static proxyProvideIdentityBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.BaseStorage;
			public get(): zendesk.core.BaseStorage;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideIdentityManagerFactory extends dagger.internal.Factory<zendesk.core.IdentityManager> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideIdentityManagerFactory>;
			public static proxyProvideIdentityManager(param0: any): zendesk.core.IdentityManager;
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityStorage>): dagger.internal.Factory<zendesk.core.IdentityManager>;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityStorage>);
			public get(): zendesk.core.IdentityManager;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideIdentityStorageFactory extends dagger.internal.Factory<zendesk.core.IdentityStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideIdentityStorageFactory>;
			public static proxyProvideIdentityStorage(param0: zendesk.core.BaseStorage): zendesk.core.IdentityStorage;
			public static create(param0: javax.inject.Provider<zendesk.core.BaseStorage>): dagger.internal.Factory<zendesk.core.IdentityStorage>;
			public constructor(param0: javax.inject.Provider<zendesk.core.BaseStorage>);
			public get(): zendesk.core.IdentityStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideLegacyIdentityBaseStorageFactory extends dagger.internal.Factory<zendesk.core.SharedPreferencesStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideLegacyIdentityBaseStorageFactory>;
			public static proxyProvideLegacyIdentityBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.SharedPreferencesStorage;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): dagger.internal.Factory<zendesk.core.SharedPreferencesStorage>;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public get(): zendesk.core.SharedPreferencesStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideLegacyIdentityStorageFactory extends dagger.internal.Factory<zendesk.core.LegacyIdentityMigrator> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideLegacyIdentityStorageFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.SharedPreferencesStorage>, param1: javax.inject.Provider<zendesk.core.SharedPreferencesStorage>, param2: javax.inject.Provider<zendesk.core.IdentityStorage>, param3: javax.inject.Provider<zendesk.core.IdentityManager>, param4: javax.inject.Provider<zendesk.core.PushDeviceIdStorage>);
			public get(): zendesk.core.LegacyIdentityMigrator;
			public static proxyProvideLegacyIdentityStorage(param0: any, param1: any, param2: any, param3: any, param4: any): zendesk.core.LegacyIdentityMigrator;
			public static create(param0: javax.inject.Provider<zendesk.core.SharedPreferencesStorage>, param1: javax.inject.Provider<zendesk.core.SharedPreferencesStorage>, param2: javax.inject.Provider<zendesk.core.IdentityStorage>, param3: javax.inject.Provider<zendesk.core.IdentityManager>, param4: javax.inject.Provider<zendesk.core.PushDeviceIdStorage>): dagger.internal.Factory<zendesk.core.LegacyIdentityMigrator>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideLegacyPushBaseStorageFactory extends dagger.internal.Factory<zendesk.core.SharedPreferencesStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideLegacyPushBaseStorageFactory>;
			public static proxyProvideLegacyPushBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.SharedPreferencesStorage;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): dagger.internal.Factory<zendesk.core.SharedPreferencesStorage>;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public get(): zendesk.core.SharedPreferencesStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideMemoryCacheFactory extends dagger.internal.Factory<zendesk.core.MemoryCache> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideMemoryCacheFactory>;
			public static proxyProvideMemoryCache(): zendesk.core.MemoryCache;
			public get(): zendesk.core.MemoryCache;
			public static create(): dagger.internal.Factory<zendesk.core.MemoryCache>;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvidePushDeviceIdStorageFactory extends dagger.internal.Factory<zendesk.core.PushDeviceIdStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvidePushDeviceIdStorageFactory>;
			public static proxyProvidePushDeviceIdStorage(param0: zendesk.core.BaseStorage): zendesk.core.PushDeviceIdStorage;
			public constructor(param0: javax.inject.Provider<zendesk.core.BaseStorage>);
			public static create(param0: javax.inject.Provider<zendesk.core.BaseStorage>): dagger.internal.Factory<zendesk.core.PushDeviceIdStorage>;
			public get(): zendesk.core.PushDeviceIdStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSdkBaseStorageFactory extends dagger.internal.Factory<zendesk.core.BaseStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSdkBaseStorageFactory>;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): dagger.internal.Factory<zendesk.core.BaseStorage>;
			public get(): zendesk.core.BaseStorage;
			public static proxyProvideSdkBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.BaseStorage;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSdkStorageFactory extends dagger.internal.Factory<zendesk.core.Storage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSdkStorageFactory>;
			public get(): zendesk.core.Storage;
			public static proxyProvideSdkStorage(param0: any, param1: zendesk.core.SessionStorage, param2: zendesk.core.BaseStorage, param3: zendesk.core.MemoryCache): zendesk.core.Storage;
			public constructor(param0: javax.inject.Provider<zendesk.core.SettingsStorage>, param1: javax.inject.Provider<zendesk.core.SessionStorage>, param2: javax.inject.Provider<zendesk.core.BaseStorage>, param3: javax.inject.Provider<zendesk.core.MemoryCache>);
			public static create(param0: javax.inject.Provider<zendesk.core.SettingsStorage>, param1: javax.inject.Provider<zendesk.core.SessionStorage>, param2: javax.inject.Provider<zendesk.core.BaseStorage>, param3: javax.inject.Provider<zendesk.core.MemoryCache>): dagger.internal.Factory<zendesk.core.Storage>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSerializerFactory extends dagger.internal.Factory<zendesk.core.Serializer> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSerializerFactory>;
			public get(): zendesk.core.Serializer;
			public constructor(param0: javax.inject.Provider<com.google.gson.Gson>);
			public static proxyProvideSerializer(param0: com.google.gson.Gson): zendesk.core.Serializer;
			public static create(param0: javax.inject.Provider<com.google.gson.Gson>): dagger.internal.Factory<zendesk.core.Serializer>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSessionStorageFactory extends dagger.internal.Factory<zendesk.core.SessionStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSessionStorageFactory>;
			public get(): zendesk.core.SessionStorage;
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityStorage>, param1: javax.inject.Provider<zendesk.core.BaseStorage>, param2: javax.inject.Provider<zendesk.core.BaseStorage>, param3: javax.inject.Provider<okhttp3.Cache>, param4: javax.inject.Provider<java.io.File>, param5: javax.inject.Provider<java.io.File>, param6: javax.inject.Provider<java.io.File>): dagger.internal.Factory<zendesk.core.SessionStorage>;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityStorage>, param1: javax.inject.Provider<zendesk.core.BaseStorage>, param2: javax.inject.Provider<zendesk.core.BaseStorage>, param3: javax.inject.Provider<okhttp3.Cache>, param4: javax.inject.Provider<java.io.File>, param5: javax.inject.Provider<java.io.File>, param6: javax.inject.Provider<java.io.File>);
			public static proxyProvideSessionStorage(param0: any, param1: zendesk.core.BaseStorage, param2: zendesk.core.BaseStorage, param3: okhttp3.Cache, param4: java.io.File, param5: java.io.File, param6: java.io.File): zendesk.core.SessionStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSettingsBaseStorageFactory extends dagger.internal.Factory<zendesk.core.BaseStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSettingsBaseStorageFactory>;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): dagger.internal.Factory<zendesk.core.BaseStorage>;
			public get(): zendesk.core.BaseStorage;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public static proxyProvideSettingsBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.BaseStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSettingsStorageFactory extends dagger.internal.Factory<zendesk.core.SettingsStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSettingsStorageFactory>;
			public static proxyProvideSettingsStorage(param0: zendesk.core.BaseStorage): zendesk.core.SettingsStorage;
			public get(): zendesk.core.SettingsStorage;
			public constructor(param0: javax.inject.Provider<zendesk.core.BaseStorage>);
			public static create(param0: javax.inject.Provider<zendesk.core.BaseStorage>): dagger.internal.Factory<zendesk.core.SettingsStorage>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvidesBelvedereDirFactory extends dagger.internal.Factory<java.io.File> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvidesBelvedereDirFactory>;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public get(): java.io.File;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): dagger.internal.Factory<java.io.File>;
			public static proxyProvidesBelvedereDir(param0: globalAndroid.content.Context): java.io.File;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvidesCacheDirFactory extends dagger.internal.Factory<java.io.File> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvidesCacheDirFactory>;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public get(): java.io.File;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): dagger.internal.Factory<java.io.File>;
			public static proxyProvidesCacheDir(param0: globalAndroid.content.Context): java.io.File;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvidesDataDirFactory extends dagger.internal.Factory<java.io.File> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvidesDataDirFactory>;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public get(): java.io.File;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): dagger.internal.Factory<java.io.File>;
			public static proxyProvidesDataDir(param0: globalAndroid.content.Context): java.io.File;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvidesDiskLruStorageFactory extends dagger.internal.Factory<zendesk.core.BaseStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvidesDiskLruStorageFactory>;
			public static proxyProvidesDiskLruStorage(param0: java.io.File, param1: any): zendesk.core.BaseStorage;
			public static create(param0: javax.inject.Provider<java.io.File>, param1: javax.inject.Provider<zendesk.core.Serializer>): dagger.internal.Factory<zendesk.core.BaseStorage>;
			public constructor(param0: javax.inject.Provider<java.io.File>, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public get(): zendesk.core.BaseStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskUnauthorizedInterceptor {
			public static class: java.lang.Class<zendesk.core.ZendeskUnauthorizedInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskUserProvider extends zendesk.core.UserProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskUserProvider>;
			public getUserFields(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.core.UserField>>): void;
			public setUserFields(param0: java.util.Map<string,string>, param1: com.zendesk.service.ZendeskCallback<java.util.Map<string,string>>): void;
			public getUser(param0: com.zendesk.service.ZendeskCallback<zendesk.core.User>): void;
			public addTags(param0: java.util.List<string>, param1: com.zendesk.service.ZendeskCallback<java.util.List<string>>): void;
			public deleteTags(param0: java.util.List<string>, param1: com.zendesk.service.ZendeskCallback<java.util.List<string>>): void;
		}
	}
}

//Generics information:
//zendesk.core.PassThroughErrorZendeskCallback:1
//zendesk.core.SettingsPack:1

