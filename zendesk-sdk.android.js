"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uiFrame = require("ui/frame");
var ZendeskConfig = com.zendesk.sdk.network.impl.ZendeskConfig;
var AnonymousIdentity = com.zendesk.sdk.model.access.AnonymousIdentity;
var JwtIdentity = com.zendesk.sdk.model.access.JwtIdentity;
var SupportActivity = com.zendesk.sdk.support.SupportActivity;
var ViewArticleActivity = com.zendesk.sdk.support.ViewArticleActivity;
var SimpleArticle = com.zendesk.sdk.model.helpcenter.SimpleArticle;
var ContactZendeskActivity = com.zendesk.sdk.feedback.ui.ContactZendeskActivity;
var ZendeskFeedbackConfiguration = com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration;
var platform_1 = require("platform");
var ZendeskSdk = (function () {
    function ZendeskSdk() {
    }
    ZendeskSdk.initialize = function (zendeskUrl, applicationId, oauthClientId) {
        ZendeskConfig.INSTANCE.init(uiFrame.topmost().android.activity, zendeskUrl, applicationId, oauthClientId);
        return ZendeskSdk;
    };
    ZendeskSdk.setUserLocale = function (locale) {
        ZendeskConfig.INSTANCE.setDeviceLocale(new java.util.Locale(locale));
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
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = true; }
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        return new SupportActivity.Builder().withCategoriesCollapsed(withCategoriesCollapsedForAndroid)
            .showContactUsButton(showContactUsButtonForAndroid)
            .showConversationsMenuButton(showConversationsMenuButtonForAndroid);
    };
    ZendeskSdk.initHelpCenterIos = function (helpCenterContentModel, withoutRequestsForIos, showAsModalForIos) {
        if (withoutRequestsForIos === void 0) { withoutRequestsForIos = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
    };
    ZendeskSdk.showHelpCenter = function (withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid, withoutRequestsForIos, showAsModalForIos) {
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = true; }
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        if (withoutRequestsForIos === void 0) { withoutRequestsForIos = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
        ZendeskSdk.initHelpCenterAndroid(withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid)
            .show(uiFrame.topmost().android.activity);
    };
    ZendeskSdk.showHelpCenterForCategoryIds = function (withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid, withoutRequestsForIos, showAsModalForIos) {
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = true; }
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        if (withoutRequestsForIos === void 0) { withoutRequestsForIos = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
        var categoryIds = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            categoryIds[_i - 5] = arguments[_i];
        }
        ZendeskSdk.initHelpCenterAndroid(withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid)
            .withArticlesForCategoryIds(categoryIds)
            .show(uiFrame.topmost().android.activity);
    };
    ZendeskSdk.showHelpCenterForLabelNames = function (withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid, withoutRequestsForIos, showAsModalForIos) {
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = true; }
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        if (withoutRequestsForIos === void 0) { withoutRequestsForIos = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
        var labelNames = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            labelNames[_i - 5] = arguments[_i];
        }
        ZendeskSdk.initHelpCenterAndroid(withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid)
            .withLabelNames(labelNames)
            .show(uiFrame.topmost().android.activity);
    };
    ZendeskSdk.showHelpCenterForSectionIds = function (withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid, withoutRequestsForIos, showAsModalForIos) {
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = true; }
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        if (withoutRequestsForIos === void 0) { withoutRequestsForIos = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
        var sectionIds = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            sectionIds[_i - 5] = arguments[_i];
        }
        ZendeskSdk.initHelpCenterAndroid(withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid)
            .withArticlesForSectionIds(sectionIds)
            .show(uiFrame.topmost().android.activity);
    };
    ZendeskSdk.showArticle = function (articleId, locale) {
        ViewArticleActivity.startActivity(uiFrame.topmost().android.activity, new SimpleArticle(long(long(articleId)), ""));
    };
    ZendeskSdk.createRequest = function (requestSubject, additionalInfo) {
        if (requestSubject === void 0) { requestSubject = "Android Ticket"; }
        var tags = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            tags[_i - 2] = arguments[_i];
        }
        ContactZendeskActivity.startActivity(uiFrame.topmost().android.activity, new ZendeskFeedbackConfiguration({
            getRequestSubject: function () {
                return !!requestSubject ? requestSubject : null;
            },
            getAdditionalInfo: function () {
                var temp = "\n\nDEVICE INFORMATION:"
                    + " - Device Language: "
                    + platform_1.device.language
                    + "\n"
                    + " - Device Manufacturer: "
                    + platform_1.device.manufacturer
                    + "\n"
                    + " - Device Model: "
                    + platform_1.device.model
                    + "\n"
                    + " - Device OS: "
                    + platform_1.device.os
                    + "\n"
                    + " - Device OS Version: "
                    + platform_1.device.osVersion
                    + "\n"
                    + " - Device Region: "
                    + platform_1.device.region
                    + "\n"
                    + " - Device SDK Version: "
                    + platform_1.device.sdkVersion
                    + "\n"
                    + " - Device UUID: "
                    + platform_1.device.uuid;
                return !!additionalInfo ? additionalInfo + temp : temp;
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