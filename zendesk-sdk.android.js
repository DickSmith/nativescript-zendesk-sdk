"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("platform");
var frame_1 = require("ui/frame");
var Locale = java.util.Locale;
var ZendeskConfig = com.zendesk.sdk.network.impl.ZendeskConfig;
var AnonymousIdentity = com.zendesk.sdk.model.access.AnonymousIdentity;
var JwtIdentity = com.zendesk.sdk.model.access.JwtIdentity;
var SupportActivity = com.zendesk.sdk.support.SupportActivity;
var ViewArticleActivity = com.zendesk.sdk.support.ViewArticleActivity;
var SimpleArticle = com.zendesk.sdk.model.helpcenter.SimpleArticle;
var ContactZendeskActivity = com.zendesk.sdk.feedback.ui.ContactZendeskActivity;
var ZendeskFeedbackConfiguration = com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration;
var ZendeskSdk = (function () {
    function ZendeskSdk() {
    }
    ZendeskSdk.initialize = function (zendeskUrl, applicationId, clientId) {
        ZendeskConfig.INSTANCE.init(frame_1.topmost().android.activity, zendeskUrl, applicationId, clientId);
        return ZendeskSdk;
    };
    ZendeskSdk.setUserLocale = function (locale) {
        ZendeskConfig.INSTANCE.setDeviceLocale(new Locale(locale));
        return ZendeskSdk;
    };
    ZendeskSdk.setCoppaEnabled = function (enable) {
        ZendeskConfig.INSTANCE.setCoppaEnabled(enable);
        return ZendeskSdk;
    };
    ZendeskSdk.setAnonymousIdentity = function (name, email) {
        ZendeskConfig.INSTANCE.setIdentity(new AnonymousIdentity.Builder()
            .withNameIdentifier(name)
            .withEmailIdentifier(email)
            .build());
        return ZendeskSdk;
    };
    ZendeskSdk.setJwtIdentity = function (jwtUserIdentifier) {
        ZendeskConfig.INSTANCE.setIdentity(new JwtIdentity(jwtUserIdentifier));
        return ZendeskSdk;
    };
    ZendeskSdk.initHelpCenterAndroid = function (withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid) {
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = false; }
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        return new SupportActivity.Builder().withCategoriesCollapsed(withCategoriesCollapsedForAndroid)
            .showContactUsButton(showContactUsButtonForAndroid)
            .showConversationsMenuButton(showConversationsMenuButtonForAndroid);
    };
    ZendeskSdk.initHelpCenterIos = function (helpCenterContentModel, showConversationsMenuButtonForIos, showAsModalForIos) {
        if (showConversationsMenuButtonForIos === void 0) { showConversationsMenuButtonForIos = true; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
    };
    ZendeskSdk.showHelpCenter = function (showConversationsMenuButtonForAndroid, showConversationsMenuButtonForIos, withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showAsModalForIos) {
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        if (showConversationsMenuButtonForIos === void 0) { showConversationsMenuButtonForIos = true; }
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
        ZendeskSdk.initHelpCenterAndroid(withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid)
            .show(frame_1.topmost().android.activity);
    };
    ZendeskSdk.showHelpCenterForCategoryIds = function (categoryIds, showConversationsMenuButtonForAndroid, showConversationsMenuButtonForIos, withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showAsModalForIos) {
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        if (showConversationsMenuButtonForIos === void 0) { showConversationsMenuButtonForIos = true; }
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
        ZendeskSdk.initHelpCenterAndroid(withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid)
            .withArticlesForCategoryIds(categoryIds)
            .show(frame_1.topmost().android.activity);
    };
    ZendeskSdk.showHelpCenterForLabelNames = function (labelNames, showConversationsMenuButtonForAndroid, showConversationsMenuButtonForIos, withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showAsModalForIos) {
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        if (showConversationsMenuButtonForIos === void 0) { showConversationsMenuButtonForIos = true; }
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
        ZendeskSdk.initHelpCenterAndroid(withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid)
            .withLabelNames(labelNames)
            .show(frame_1.topmost().android.activity);
    };
    ZendeskSdk.showHelpCenterForSectionIds = function (sectionIds, showConversationsMenuButtonForAndroid, showConversationsMenuButtonForIos, withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showAsModalForIos) {
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        if (showConversationsMenuButtonForIos === void 0) { showConversationsMenuButtonForIos = true; }
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
        ZendeskSdk.initHelpCenterAndroid(withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid)
            .withArticlesForSectionIds(sectionIds)
            .show(frame_1.topmost().android.activity);
    };
    ZendeskSdk.showArticle = function (articleId, locale) {
        ViewArticleActivity.startActivity(frame_1.topmost().android.activity, new SimpleArticle(global.long(global.long(articleId)), ""));
    };
    ZendeskSdk.createRequest = function (requestSubject, additionalInfo, addDeviceInfo) {
        if (addDeviceInfo === void 0) { addDeviceInfo = true; }
        var tags = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            tags[_i - 3] = arguments[_i];
        }
        ContactZendeskActivity.startActivity(frame_1.topmost().android.activity, new ZendeskFeedbackConfiguration({
            getRequestSubject: function () {
                return !!requestSubject ? requestSubject : null;
            },
            getAdditionalInfo: function () {
                var deviceInfo = addDeviceInfo ? "\n\n" + platform_1.device.language + "-" + platform_1.device.region
                    + "\n" + platform_1.device.manufacturer + " " + platform_1.device.model
                    + "\n" + platform_1.device.os + " " + platform_1.device.osVersion + "("
                    + platform_1.device.sdkVersion + ")" : "";
                return !!additionalInfo || addDeviceInfo ? +(!!additionalInfo
                    ? "\n\n" + additionalInfo
                    : "") + deviceInfo : "";
            },
            getTags: function () {
                return !!tags ? tags : null;
            },
        }));
    };
    return ZendeskSdk;
}());
exports.ZendeskSdk = ZendeskSdk;
//# sourceMappingURL=zendesk-sdk.android.js.map