"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uiFrame = require("ui/frame");
var ZendeskConfig = com.zendesk.sdk.network.impl.ZendeskConfig;
var AnonymousIdentity = com.zendesk.sdk.model.access.AnonymousIdentity;
var JwtIdentity = com.zendesk.sdk.model.access.JwtIdentity;
var SupportActivity = com.zendesk.sdk.support.SupportActivity;
var ViewArticleActivity = com.zendesk.sdk.support.ViewArticleActivity;
var SimpleArticle = com.zendesk.sdk.model.helpcenter.SimpleArticle;
var ZendeskSdk = (function () {
    function ZendeskSdk() {
    }
    ZendeskSdk.initialize = function (zendeskUrl, applicationId, oauthClientId) {
        ZendeskConfig.INSTANCE.init(uiFrame.topmost().android.activity, zendeskUrl, applicationId, oauthClientId);
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
    ZendeskSdk.initHelpCenter = function (withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid, withoutRequestsForIos, showAsModalForIos) {
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = true; }
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        if (withoutRequestsForIos === void 0) { withoutRequestsForIos = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
        return new SupportActivity.Builder().withCategoriesCollapsed(withCategoriesCollapsedForAndroid)
            .showContactUsButton(showContactUsButtonForAndroid)
            .showConversationsMenuButton(showConversationsMenuButtonForAndroid);
    };
    ZendeskSdk.showHelpCenter = function (withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid, withoutRequestsForIos, showAsModalForIos) {
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = true; }
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        if (withoutRequestsForIos === void 0) { withoutRequestsForIos = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
        ZendeskSdk.initHelpCenter(withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid)
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
        ZendeskSdk.initHelpCenter(withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid)
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
        ZendeskSdk.initHelpCenter(withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid)
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
        ZendeskSdk.initHelpCenter(withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid)
            .withArticlesForSectionIds(sectionIds)
            .show(uiFrame.topmost().android.activity);
    };
    ZendeskSdk.showArticle = function (articleId) {
        ViewArticleActivity.startActivity(uiFrame.topmost().android.activity, new SimpleArticle(long(articleId), ""));
    };
    return ZendeskSdk;
}());
exports.ZendeskSdk = ZendeskSdk;
//# sourceMappingURL=zendesk-sdk.android.js.map