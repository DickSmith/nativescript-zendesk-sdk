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
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android-support-sdk/nutshell) / [iOS](https://developer.zendesk.com/embeddables/docs/ios_support_sdk/nutshell)_

### [Must do] Initialize the SDK
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android-support-sdk/sdk_initialize) / [iOS](https://developer.zendesk.com/embeddables/docs/ios_support_sdk/sdk_initialize)_

```typescript
export interface InitConfig {
    applicationId: string;
    zendeskUrl: string;
    clientId: string;
    userLocale?: string;
    /** AnonUserIdentity object or JWT Token string */
    identity?: AnonUserIdentity | string;
}
```

```typescript
import { ZendeskSdk } from "nativescript-zendesk-sdk";
...
const initConfig = {
    ...
}
ZendeskSdk.initialize(initConfig);
```

If `identity: null` a new anonymous identity is created, but if `identity` is undefined it must be set later, but before launching any Zendesk views/activities.

_Note: `applicationId`, `zendeskUrl`, and `clientId` must be specified when initializing the Zendesk, but locale, COPPA-compliance mode, and Identity can be set/changed later._
#### [Must do] Set an identity (authentication)
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android-support-sdk/sdk_set_identity) / [iOS](https://developer.zendesk.com/embeddables/docs/ios_support_sdk/sdk_set_identity)_

##### Authenticate using an anonymous identity
```typescript
ZendeskSdk.setAnonymousIdentity();
```

##### Authenticate using an anonymous identity (with details)
```typescript
ZendeskSdk.setAnonymousIdentity({name: "name", email: "email"});
```

##### Authenticate using your JWT endpoint
```typescript
ZendeskSdk.setJwtIdentity("jwtUserIdentifier");
```

### Locale Settings
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android-support-sdk/localize_text) / [iOS](https://developer.zendesk.com/embeddables/docs/ios_support_sdk/localize_text)_

The locale used by the SDK for static strings will match the Android Application Configuration or the iOS NSUserDefaults.
_(These strings can be overridden or missing languages can be added as described in the links above)._

To set the Locale of any dynamic content retrieved from Zendesk:
```typescript
ZendeskSdk.setUserLocale(localeCode);
```

### Configure Requests
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android-support-sdk/requests) / [iOS](https://developer.zendesk.com/embeddables/docs/ios_support_sdk/requests)_

Before opening the Help Center or creating a Request you can specify the Request settings:

```typescript
export interface RequestOptions {
  requestId?: string;
  requestSubject?: string;
  addDeviceInfo?: boolean;
  tags?: string[];
  files?: File[]; // android only
  customFields?: CustomField[];
  ticketForm?: {
    ticketFormId: string;
    customFields: CustomField[]
  };
}

```
### Show the user's tickets
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android-support-sdk/requests#show-the-users-tickets) / [iOS](https://developer.zendesk.com/embeddables/docs/ios_support_sdk/requests#show-the-users-tickets)_

#### Default Usage
```typescript
ZendeskSdk.showRequestList();
```

### Show the Help Center
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android-support-sdk/help_center) / [iOS](https://developer.zendesk.com/embeddables/docs/ios_support_sdk/help_center)_

#### Default Usage
```typescript
ZendeskSdk.showHelpCenter();
```

#### Optional Parameters
```typescript
export interface HelpCenterOptions {
  /** default: { contactUsButtonVisible: false } */
  articleOptions?: ArticleOptions;
  /** default: false */
  contactUsButtonVisible?: boolean;
  /** default: false -- android only */
  categoriesCollapsed?: boolean;
  /** default: true -- android only */
  conversationsMenu?: boolean;
}
```

```typescript
ZendeskSdk.showHelpCenter(options);
```

### Filter the Help Center
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android/filter_help_center) / [iOS](https://developer.zendesk.com/embeddables/docs/iOS/filter_help_center)_

Per original SDKs, only one filter can be used at a time.

#### Filter by category
```typescript
ZendeskSdk.showHelpCenterForCategoryIds(categoryIds, options);
```

#### Filter by section
```typescript
ZendeskSdk.showHelpCenterForLabelNames(labelNames, options);
```

#### Filter by article label
```typescript
ZendeskSdk.showHelpCenterForSectionIds(sectionIds, options);
```

### Create a request
```typescript
ZendeskSdk.createRequest();
```

## Styling
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android/customize_the_look) / [iOS](https://developer.zendesk.com/embeddables/docs/ios/customize_the_look)_

### Android
Configured via `app/App_Resources/Android/AndroidManifest.xml` as detailed [here](https://developer.zendesk.com/embeddables/docs/android/customize_the_look).

#### Simple Styling

Zendesk offers 3 base themes that can be used or extended:
- **ZendeskSdkTheme.Light**
- **ZendeskSdkTheme.Dark**
- **ZendeskSdkTheme.Light**

###### Example extending PnpZendeskSdkTheme.DarkActionBar
***app/App_Resources/Android/AndroidManifest.xml***
```xml
    
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    ...>
    <application
        ...>
        <activity android:name="com.zendesk.sdk.support.SupportActivity"
                  android:theme="@style/MyZendeskSdkTheme.DarkActionBar"/>

        <activity android:name="com.zendesk.sdk.feedback.ui.ContactZendeskActivity"
                  android:theme="@style/MyZendeskSdkTheme.DarkActionBar"/>

        <activity android:name="com.zendesk.sdk.support.ViewArticleActivity"
                  android:theme="@style/MyZendeskSdkTheme.DarkActionBar"/>

        <activity android:name="com.zendesk.sdk.requests.RequestActivity"
                  android:theme="@style/MyZendeskSdkTheme.DarkActionBar"/>

        <activity android:name="com.zendesk.sdk.requests.ViewRequestActivity"
                  android:theme="@style/MyZendeskSdkTheme.DarkActionBar"/>
    </application>
</manifest>
```

***app/App_Resources/Android/values/styles.xml***
```xml
<?xml version="1.0" encoding="utf-8"?>
<resources xmlns:android="http://schemas.android.com/apk/res/android">
...
    <style name="PnpZendeskSdkTheme.DarkActionBar" parent="ZendeskSdkTheme.Light.DarkActionBar">
        <item name="colorPrimary">@color/ns_primary</item>
        <item name="colorPrimaryDark">@color/ns_primaryDark</item>
        <item name="colorAccent">@color/ns_accent</item>
        <item name="android:actionMenuTextColor">@color/ns_blue</item>
    </style>
</resources>
```

```xml
<style name="YourLightTheme" parent="ZendeskSdkTheme.Light">
...
</style>
<style name="YourDarkTheme" parent="ZendeskSdkTheme.Dark">
...
</style>
<style name="YourLightTheme.DarkActionBar" parent="ZendeskSdkTheme.Light.DarkActionBar">
...
</style>
```

### iOS
```typescript
import { isIOS } from 'tns-core-modules/platform';

...

if ( isIOS ) {
    UINavigationBar.appearance().tintColor = new Color('#00FFFF').ios;
    UINavigationBar.appearance().barTintColor = new Color('#FF00FF').ios;
    UINavigationBar.appearance().titleTextAttributes =
        <NSDictionary<string, any>>NSDictionary.dictionaryWithObjectForKey(
            new Color('#FFFF00').ios,
            NSForegroundColorAttributeName);
}

const iOSTheme: ZendeskIosThemeSimple = {
    primaryColor: '#FF0000',
};
ZendeskSdk.setIosTheme(iOSTheme);
```
The first 3 colors are used primarily on the ActionBar/StatusBar for the "new ticket" screen, as the Help Center uses the default ActionBar/StatusBar colors from the regular NativeScript setup.

These settings could affect the whole app, but are ignored by the regular NativeScript Views, but could potentially impact other 3rd part views. Likely you will set these to be the same as what is used in the rest of the app.

The settings within the theme object will only affect the Zendesk.

## Contributions
Typings and iOS metadata have been included in the project to allow for easier usage.  
Typings were autogenerated using:  
https://github.com/NativeScript/android-dts-generator  
https://docs.nativescript.org/runtimes/ios/how-to/Use-Native-Libraries
```
