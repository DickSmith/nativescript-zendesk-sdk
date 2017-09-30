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
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android/configure_an_app) / [iOS](https://developer.zendesk.com/embeddables/docs/ios/configure_an_app)_

### [Must do] Initialize the SDK
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android/initialize_sdk) / [iOS](https://developer.zendesk.com/embeddables/docs/ios/initialize_sdk)_

```typescript
export interface InitConfig {
    applicationId: string;
    zendeskUrl: string;
    clientId: string;
    userLocale?: string;
    coppaEnabled?: boolean;
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
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android/set_an_identity) / [iOS](https://developer.zendesk.com/embeddables/docs/ios/set_an_identity)_

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
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android/localize_text) / [iOS](https://developer.zendesk.com/embeddables/docs/ios/localize_text)_

The locale used by the SDK for static strings will match the Android Application Configuration or the iOS NSUserDefaults.
_(These strings can be overridden or missing languages can be added as described in the links above)._

To set the Locale of any dynamic content retrieved from Zendesk:
```typescript
ZendeskSdk.setUserLocale(localeCode);
```

### Configure Requests
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android/add_data_to_request) / [iOS](https://developer.zendesk.com/embeddables/docs/ios/https://developer.zendesk.com/embeddables/docs/ios/requests#additional-methods-api-providers)_

Before opening the Help Center or creating a Rewuest you can specify the Request settings:

```typescript

```

### Show the Help Center
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android/show_help_center) / [iOS](https://developer.zendesk.com/embeddables/docs/ios/show_help_center)_

#### Default Usage
```typescript
ZendeskSdk.showHelpCenter();
```

#### Optional Parameters
```typescript
export interface HelpCenterOptions {
    /** Default: false */
    categoriesCollapsedAndroid?: boolean;
    /** Default: true */
    conversationsMenuAndroid?: boolean;
    /** Default: true */
    conversationsMenuIos?: boolean;
    /** Default: false */
    showAsModalForIos?: boolean;
}
```

```typescript
ZendeskSdk.showHelpCenter(options);
```

_Note:  The SDKs for Android and iOS diverge quite a bit for this section, so some options are only applicable to iOS or Android. The defaults selected are those that provide the most consitency between both_

##### Both

###### showConversationMenuButtonFor(Android/Ios) [_default = true_]
Enables a button in the navigation bar that enables users to view their active requests/converations or start a new one.

##### Android only

###### showContactUsButtonForAndroid [_default = false_]
This displays an additional `(+)` button in the lower-right corner, similar to the button in the Android templates.

Enabled by default in the Android SDK, but disabled by default in this plugin for consitency with iOS.

###### withCategoriesCollapsedForAndroid [_default = false_]
This collapses the categories into their headers. The default behaviour on both Android and iOS is to show the first 5 of a category, and then has the option to expand further if more are available.

##### iOS only

###### showAsModalForIos [_default = false_]
This displays the helpcenter as a modal action sheet.

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
    primaryTextColor:          '#FF0000',
    secondaryTextColor:        '#00FF00',
    primaryBackgroundColor:    '#0000FF',
    secondaryBackgroundColor:  '#00FFFF',
    emptyBackgroundColor:      '#FF00FF',
    metaTextColor:             '#FFFF00',
    separatorColor:            '#884444',
    inputFieldTextColor:       '#448844',
    inputFieldBackgroundColor: '#444488',
    fontName:                  'Courier',
    boldFontName:              'Cochin-BoldItalic',
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
Although some manual changes had to be made by commenting-out types and setting to `any` that NativeScript handles the conversions for, such as NSArray and `java.util.List`.  
Current typings/metadata were generated using version `ios@1.11.1.1` and ``android@1.11.0.1` of the Zendesk and Zendesk Provider SDKs.

## Dumping typings...
##### iOS
From `src/`:
```sh
pod repo update
TNS_TYPESCRIPT_DECLARATIONS_PATH="$(pwd)/typings" npm run demo.ios
cp typings/x86_64/objc\!Zendesk* typings/
```

##### Android
From project root:
```sh
cd android
./gradlew clean
./gradlew getDeps

cd lib
jar xf sdk-1.11.0.1.aar
mv classes.jar used-zendesk-sdk.jar
jar xf sdk-providers-1.11.0.1.aar
mv classes.jar used-zendesk-providers-sdk.jar

rm -rf */
find . -type f ! -iname "used-zendesk-*" -delete
cd ../..

rm -rf out/
java -jar ../android-dts-generator/dts-generator/build/libs/dts-generator.jar -input \
    android/lib/used-zendesk-sdk.jar \
    && mv out/android.d.ts src/typings/java\!ZendeskSDK.d.ts;
java -jar ../android-dts-generator/dts-generator/build/libs/dts-generator.jar -input \
    android/lib/used-zendesk-providers-sdk.jar \
    && mv out/android.d.ts src/typings/java\!ZendeskProviderSDK.d.ts;
```
