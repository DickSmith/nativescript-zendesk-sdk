/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";

import { HomeViewModel } from "./home-view-model";
import { ZendeskSdk, InitConfig } from "nativescript-zendesk-sdk";
import { applicationId, zendeskUrl, clientId } from "../../../secrets";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();

    const initConfig: InitConfig = {
        applicationId,
        zendeskUrl,
        clientId
    };
    ZendeskSdk.initialize(initConfig);
    ZendeskSdk.setAnonymousIdentity({
        name: "test",
        email: "test@gmail.com"
    });

    ZendeskSdk.setIosTheme({
        primaryColor: "blue"
    });
}

export function showHelpCenter() {
    ZendeskSdk.showHelpCenter({
        contactUsButtonVisible: false,
        categoriesCollapsed: false,
        conversationsMenu: false
    });
}

export function createRequest() {
    ZendeskSdk.createRequest({
        requestSubject: 'toto android',
        tags: ['sdk', 'android']
    });
}


export function showRequestList() {
    ZendeskSdk.showRequestList();
}

export function showArticle() {
    ZendeskSdk.showArticle('360000496800');
}

