import { Component, AfterViewInit } from "@angular/core";
import { InitConfig, ZendeskSdk } from "nativescript-zendesk-sdk";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements AfterViewInit {
    constructor() {}

    ngAfterViewInit() {
        const initConfig: InitConfig = {
            applicationId: "dc7a21824e1596be8a4a75891e10461ca74d79e51fbb944d",
            zendeskUrl: "https://nativescript-sdk.zendesk.com",
            clientId: "mobile_sdk_client_f9d6dd75b827d16cc820"
        };
        ZendeskSdk.initialize(initConfig);
        ZendeskSdk.setAnonymousIdentity({
            name: "test",
            email: "test@gmail.com"
        });
    
        ZendeskSdk.setIosTheme({
            primaryColor: "red"
        });
    }

}
