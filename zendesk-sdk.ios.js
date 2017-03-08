"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uiFrame = require("ui/frame");
var ZendeskSdk = (function () {
    function ZendeskSdk() {
    }
    ZendeskSdk.initialize = function (zendeskUrl, applicationId, oauthClientId) {
        ZDKConfig.instance()
            .initializeWithAppIdZendeskUrlClientId(applicationId, zendeskUrl, oauthClientId);
        return ZendeskSdk;
    };
    ZendeskSdk.setCoppaEnabled = function (enable) {
        ZDKConfig.instance().coppaEnabled = enable;
        return ZendeskSdk;
    };
    ZendeskSdk.setAnonymousIdentity = function (name, email) {
        var identity = ZDKAnonymousIdentity.new();
        identity.name = name;
        identity.email = email;
        ZDKConfig.instance().userIdentity = identity;
        return ZendeskSdk;
    };
    ZendeskSdk.setJwtIdentity = function (jwtUserIdentifier) {
        ZDKConfig.instance().userIdentity = ZDKJwtIdentity.alloc()
            .initWithJwtUserIdentifier(jwtUserIdentifier);
        return ZendeskSdk;
    };
    ZendeskSdk.initHelpCenter = function (withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid, withoutRequestsForIos, showAsModalForIos) {
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = true; }
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        if (withoutRequestsForIos === void 0) { withoutRequestsForIos = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
    };
    ZendeskSdk.showHelpCenter = function (withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid, withoutRequestsForIos, showAsModalForIos) {
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = true; }
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        if (withoutRequestsForIos === void 0) { withoutRequestsForIos = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
        var helpCenterContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        if (withoutRequestsForIos) {
            ZDKHelpCenter.setNavBarConversationsUIType(2);
        }
        if (showAsModalForIos) {
            uiFrame.topmost().ios.controller.modalPresentationStyle = 2;
        }
        else {
            ZDKHelpCenter.pushHelpCenterOverviewWithContentModel(uiFrame.topmost().ios.controller, helpCenterContentModel);
        }
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
    };
    ZendeskSdk.showArticle = function (articleId) {
    };
    return ZendeskSdk;
}());
exports.ZendeskSdk = ZendeskSdk;
//# sourceMappingURL=zendesk-sdk.ios.js.map