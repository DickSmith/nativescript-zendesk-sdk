# nativescript-zendesk-sdk
[![npm](https://img.shields.io/npm/v/nativescript-zendesk-sdk.svg)](https://www.npmjs.com/package/nativescript-localize)
[![npm](https://img.shields.io/npm/dt/nativescript-zendesk-sdk.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-localize)

A NativeScript plugin implementing the basic Zendesk SDK in TypeScript.
It is inspired from [nativescript-zendesk](https://github.com/sitefinitysteve/nativescript-zendesk)

## Install
```shell
tns plugin add nativescript-zendesk-sdk
```

## Usage

Following [Zendesk Embeddables Documentation](https://developer.zendesk.com/embeddables):

### [Must do] Configure an app in Zendesk Support
[Support SDK for Android](https://developer.zendesk.com/embeddables/docs/android/configure_an_app)  
[Support SDK for iOS](https://developer.zendesk.com/embeddables/docs/ios/configure_an_app)

### [Must do] Initialize the SDK
[Support SDK for Android](https://developer.zendesk.com/embeddables/docs/android/initialize_sdk)  
[Support SDK for iOS](https://developer.zendesk.com/embeddables/docs/ios/initialize_sdk)
```typescript
import { ZendeskSdk } from "nativescript-zendesk-sdk";
...
ZendeskSdk.initialize("zendeskUrl", "applicationId", "clientId");
```
### [Must do] Set an identity (authentication)
[Support SDK for Android](https://developer.zendesk.com/embeddables/docs/android/set_an_identity)  
[Support SDK for iOS](https://developer.zendesk.com/embeddables/docs/ios/set_an_identity)

#### Authenticate using an anonymous identity
```typescript
ZendeskSdk.setAnonymousIdentity(null, null);
```


#### Authenticate using an anonymous identity (with COPPA compliance)
```typescript
ZendeskSdk.setCoppaEnabled(true);

ZendeskSdk.setAnonymousIdentity(null, null);
```

#### Authenticate using an anonymous identity (with details)
```typescript
ZendeskSdk.setAnonymousIdentity("name", "email");
```

#### Authenticate using your JWT endpoint
```typescript
ZendeskSdk.setJwtIdentity("jwtUserIdentifier");
```

### Show the Help Center
[Support SDK for Android](https://developer.zendesk.com/embeddables/docs/android/show_help_center)  
[Support SDK for iOS](https://developer.zendesk.com/embeddables/docs/ios/show_help_center)

_Note:  The SDKs for Android and iOS diverge quite a bit for this section, so some options are only applicable to iOS or Android._

#### Default Behaviors
```typescript

```
