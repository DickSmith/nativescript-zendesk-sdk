"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("platform");
var frame_1 = require("ui/frame");
var ZendeskSdk = (function () {
    function ZendeskSdk() {
    }
    ZendeskSdk.initialize = function (zendeskUrl, applicationId, clientId) {
        ZDKConfig.instance()
            .initializeWithAppIdZendeskUrlClientId(applicationId, zendeskUrl, clientId);
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
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = false; }
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        return null;
    };
    ZendeskSdk.initHelpCenterIos = function (helpCenterContentModel, showConversationsMenuButtonForIos, showAsModalForIos) {
        if (showConversationsMenuButtonForIos === void 0) { showConversationsMenuButtonForIos = true; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
        if (!showConversationsMenuButtonForIos) {
            ZDKHelpCenter.setNavBarConversationsUIType(2);
        }
        if (showAsModalForIos) {
            frame_1.topmost().ios.controller.modalPresentationStyle = 2;
        }
        else {
            ZDKHelpCenter.pushHelpCenterOverviewWithContentModel(frame_1.topmost().ios.controller, helpCenterContentModel);
        }
    };
    ZendeskSdk.showHelpCenter = function (showConversationsMenuButtonForAndroid, showConversationsMenuButtonForIos, withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showAsModalForIos) {
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        if (showConversationsMenuButtonForIos === void 0) { showConversationsMenuButtonForIos = true; }
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
        var helpCenterContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        ZendeskSdk.initHelpCenterIos(helpCenterContentModel, showConversationsMenuButtonForIos, showAsModalForIos);
    };
    ZendeskSdk.showHelpCenterForCategoryIds = function (categoryIds, showConversationsMenuButtonForAndroid, showConversationsMenuButtonForIos, withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showAsModalForIos) {
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        if (showConversationsMenuButtonForIos === void 0) { showConversationsMenuButtonForIos = true; }
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
        var helpCenterContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        helpCenterContentModel.groupType = 2;
        ZendeskSdk.initHelpCenterIos(helpCenterContentModel, showConversationsMenuButtonForIos, showAsModalForIos);
    };
    ZendeskSdk.showHelpCenterForLabelNames = function (labelNames, showConversationsMenuButtonForAndroid, showConversationsMenuButtonForIos, withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showAsModalForIos) {
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        if (showConversationsMenuButtonForIos === void 0) { showConversationsMenuButtonForIos = true; }
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
        var helpCenterContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        helpCenterContentModel.labels = labelNames;
        ZendeskSdk.initHelpCenterIos(helpCenterContentModel, showConversationsMenuButtonForIos, showAsModalForIos);
    };
    ZendeskSdk.showHelpCenterForSectionIds = function (sectionIds, showConversationsMenuButtonForAndroid, showConversationsMenuButtonForIos, withCategoriesCollapsedForAndroid, showContactUsButtonForAndroid, showAsModalForIos) {
        if (showConversationsMenuButtonForAndroid === void 0) { showConversationsMenuButtonForAndroid = true; }
        if (showConversationsMenuButtonForIos === void 0) { showConversationsMenuButtonForIos = true; }
        if (withCategoriesCollapsedForAndroid === void 0) { withCategoriesCollapsedForAndroid = false; }
        if (showContactUsButtonForAndroid === void 0) { showContactUsButtonForAndroid = false; }
        if (showAsModalForIos === void 0) { showAsModalForIos = false; }
        var helpCenterContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        helpCenterContentModel.groupType = 1;
        ZendeskSdk.initHelpCenterIos(helpCenterContentModel, showConversationsMenuButtonForIos, showAsModalForIos);
    };
    ZendeskSdk.showArticle = function (articleId, locale) {
        var provider = ZDKHelpCenterProvider.alloc()
            .initWithLocale(locale);
        provider.getArticleByIdWithCallback(articleId, function (items, error) {
            if (items.count > 0) {
                var vc = ZDKArticleViewController.alloc()
                    .initWithArticle(items.firstObject);
                frame_1.topmost()
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
        var deviceInfo = addDeviceInfo ? "\n\n" + platform_1.device.language + "-" + platform_1.device.region + "\n"
            + platform_1.device.manufacturer + " " + platform_1.device.model + "\n" + platform_1.device.os + " "
            + platform_1.device.osVersion + "(" + platform_1.device.sdkVersion + ")" : "";
        ZDKRequests.configure(function (account, requestCreationConfig) {
            requestCreationConfig.subject = requestSubject;
            requestCreationConfig.additionalRequestInfo = !!additionalInfo || addDeviceInfo
                ? "\n\n------------------------------"
                    + (!!additionalInfo ? "\n\n" + additionalInfo : "")
                    + deviceInfo
                : "";
            requestCreationConfig.tags = tags;
        });
        ZDKRequests.presentRequestCreationWithViewController(frame_1.topmost().ios.controller);
    };
    return ZendeskSdk;
}());
exports.ZendeskSdk = ZendeskSdk;
//# sourceMappingURL=zendesk-sdk.ios.js.map