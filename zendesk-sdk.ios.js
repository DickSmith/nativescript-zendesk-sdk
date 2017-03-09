"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uiFrame = require("ui/frame");
var platform_1 = require("platform");
var ZendeskSdk = (function () {
    function ZendeskSdk() {
    }
    ZendeskSdk.initialize = function (zendeskUrl, applicationId, oauthClientId) {
        ZDKConfig.instance()
            .initializeWithAppIdZendeskUrlClientId(applicationId, zendeskUrl, oauthClientId);
        return ZendeskSdk;
    };
    ZendeskSdk.setUserLocale = function (locale) {
        ZDKConfig.instance().userLocale = locale;
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
    ZendeskSdk.initHelpCenterAndroid = function (withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid) {
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = true; }
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        return null;
    };
    ZendeskSdk.initHelpCenterIos = function (helpCenterContentModel, withoutRequestsForIos, showAsModalForIos) {
        if (withoutRequestsForIos === void 0) { withoutRequestsForIos = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
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
    ZendeskSdk.showHelpCenter = function (withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showConversationsMenuButtonForAndroid, withoutRequestsForIos, showAsModalForIos) {
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = true; }
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        if (withoutRequestsForIos === void 0) { withoutRequestsForIos = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
        var helpCenterContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        ZendeskSdk.initHelpCenterIos(helpCenterContentModel, withoutRequestsForIos, showAsModalForIos);
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
        var helpCenterContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        helpCenterContentModel.groupType = 2;
        ZendeskSdk.initHelpCenterIos(helpCenterContentModel, withoutRequestsForIos, showAsModalForIos);
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
        var helpCenterContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        helpCenterContentModel.labels = labelNames;
        ZendeskSdk.initHelpCenterIos(helpCenterContentModel, withoutRequestsForIos, showAsModalForIos);
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
        var helpCenterContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        helpCenterContentModel.groupType = 1;
        ZendeskSdk.initHelpCenterIos(helpCenterContentModel, withoutRequestsForIos, showAsModalForIos);
    };
    ZendeskSdk.showArticle = function (articleId, locale) {
        var provider = ZDKHelpCenterProvider.alloc()
            .initWithLocale(locale);
        provider.getArticleByIdWithCallback(articleId, function (items, error) {
            if (items.count > 0) {
                var vc = ZDKArticleViewController.alloc()
                    .initWithArticle(items.firstObject);
                uiFrame.topmost()
                    .ios
                    .controller
                    .pushViewControllerAnimated(vc, true);
            }
        });
    };
    ZendeskSdk.createRequest = function (requestSubject, additionalInfo, addDeviceInfo) {
        if (addDeviceInfo === void 0) { addDeviceInfo = true; }
        var tags = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            tags[_i - 3] = arguments[_i];
        }
        var temp = addDeviceInfo
            ? "\n\nDEVICE INFORMATION:"
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
                + platform_1.device.uuid
            : "";
        ZDKRequests.configure(function (account, requestCreationConfig) {
            requestCreationConfig.subject = requestSubject;
            requestCreationConfig.additionalRequestInfo = !!additionalInfo ? additionalInfo + temp : temp;
            requestCreationConfig.tags = tags;
        });
        ZDKRequests.presentRequestCreationWithViewController(uiFrame.topmost().ios.controller);
    };
    return ZendeskSdk;
}());
exports.ZendeskSdk = ZendeskSdk;
//# sourceMappingURL=zendesk-sdk.ios.js.map