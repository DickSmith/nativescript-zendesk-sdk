import { device } from 'tns-core-modules/platform';
import { topmost } from 'tns-core-modules/ui/frame';
import { HelpCenterOptions, ZendeskIosThemeSimple } from './zendesk-sdk.common';
import Locale = java.util.Locale;
import ZendeskConfig = com.zendesk.sdk.network.impl.ZendeskConfig;
import AnonymousIdentity = com.zendesk.sdk.model.access.AnonymousIdentity;
import JwtIdentity = com.zendesk.sdk.model.access.JwtIdentity;
import SupportActivity = com.zendesk.sdk.support.SupportActivity;
import ViewArticleActivity = com.zendesk.sdk.support.ViewArticleActivity;
import SimpleArticle = com.zendesk.sdk.model.helpcenter.SimpleArticle;
import ContactZendeskActivity = com.zendesk.sdk.feedback.ui.ContactZendeskActivity;
import ZendeskFeedbackConfiguration = com.zendesk.sdk.feedback.ZendeskFeedbackConfiguration;

export class ZendeskSdk {

    private constructor() {
    }

    public static initialize(zendeskUrl: string,
                             applicationId: string,
                             clientId: string): typeof ZendeskSdk {
        ZendeskConfig.INSTANCE.init(
            topmost().android.activity, zendeskUrl, applicationId, clientId,
        );

        return ZendeskSdk;
    }

    public static setUserLocale(locale: string): typeof ZendeskSdk {
        ZendeskConfig.INSTANCE.setDeviceLocale(new Locale(locale));

        return ZendeskSdk;
    }

    public static setCoppaEnabled(enable: boolean): typeof ZendeskSdk {
        ZendeskConfig.INSTANCE.setCoppaEnabled(enable);

        return ZendeskSdk;
    }

    public static setAnonymousIdentity(name: string,
                                       email: string): typeof ZendeskSdk {
        ZendeskConfig.INSTANCE.setIdentity(
            new AnonymousIdentity.Builder()
                .withNameIdentifier(name)
                .withEmailIdentifier(email)
                .build(),
        );

        return ZendeskSdk;
    }

    public static setJwtIdentity(jwtUserIdentifier: string): typeof ZendeskSdk {
        ZendeskConfig.INSTANCE.setIdentity(
            new JwtIdentity(jwtUserIdentifier),
        );

        return ZendeskSdk;
    }

    private static initHelpCenter(options: HelpCenterOptions,
                                  helpCenterContentModel?: any): SupportActivity.Builder {
        return new SupportActivity.Builder()
            .withCategoriesCollapsed(options.withCategoriesCollapsedForAndroid)
            .showContactUsButton(options.showContactUsButtonForAndroid)
            .showConversationsMenuButton(options.showConversationsMenuButtonForAndroid);
    }

    public static showHelpCenter(options: HelpCenterOptions = new HelpCenterOptions()): void {
        ZendeskSdk.initHelpCenter(options).show(topmost().android.activity);
    }

    public static showHelpCenterForCategoryIds(categoryIds: number[],
                                               options: HelpCenterOptions = new HelpCenterOptions()): void {
        ZendeskSdk.initHelpCenter(options).withArticlesForCategoryIds(categoryIds).show(topmost().android.activity);
    }

    public static showHelpCenterForLabelNames(labelNames: string[],
                                              options: HelpCenterOptions = new HelpCenterOptions()): void {
        ZendeskSdk.initHelpCenter(options).withLabelNames(labelNames).show(topmost().android.activity);
    }

    public static showHelpCenterForSectionIds(sectionIds: number[],
                                              options: HelpCenterOptions = new HelpCenterOptions()): void {
        ZendeskSdk.initHelpCenter(options).withArticlesForSectionIds(sectionIds).show(topmost().android.activity);
    }

    public static showArticle(articleId: string,
                              locale: string): void {
        ViewArticleActivity.startActivity(
            topmost().android.activity, new SimpleArticle(long(long(articleId)), ''),
        );
    }

    public static createRequest(requestSubject?: string,
                                additionalInfo?: string,
                                addDeviceInfo: boolean = true,
                                ...tags: string[]) {

        ContactZendeskActivity.startActivity(
            topmost().android.activity, new ZendeskFeedbackConfiguration(
                {
                    getRequestSubject(): string {
                        return !!requestSubject ? requestSubject : null;
                    },
                    getAdditionalInfo(): string {
                        const deviceInfo: string = addDeviceInfo ? '\n\n' + device.language + '-' + device.region
                                                                   + '\n' + device.manufacturer + ' ' + device.model
                                                                   + '\n' + device.os + ' ' + device.osVersion + '('
                                                                   + device.sdkVersion + ')' : '';

                        return !!additionalInfo || addDeviceInfo ? +(!!additionalInfo
                            ? '\n\n' + additionalInfo
                            : '') + deviceInfo : '';
                    },
                    getTags(): any {
                        return !!tags ? tags : null;
                    },
                },
            ),
        );
    }

    public static setIosTheme(theme: ZendeskIosThemeSimple): void { }
}
