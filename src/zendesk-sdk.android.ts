import { device } from 'tns-core-modules/platform';
import { topmost } from 'tns-core-modules/ui/frame';
import { AnonUserIdentity, HelpCenterOptions, InitConfig, IosThemeSimple, RequestConfig } from './zendesk-sdk';
import ArrayList = java.util.ArrayList;
import List = java.util.List;
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

    private static _zendeskRequestConfiguration: ZendeskFeedbackConfiguration;

    public static initialize(config: InitConfig): typeof ZendeskSdk {

        ZendeskConfig.INSTANCE.init(
            topmost().android.activity, config.zendeskUrl, config.applicationId, config.clientId,
        );

        if ( config.userLocale ) {
            ZendeskSdk.setUserLocale(config.userLocale);
        }

        if ( config.identity === null ) {
            ZendeskSdk.setAnonymousIdentity();
        } else if ( typeof config.identity === 'object' ) {
            ZendeskSdk.setAnonymousIdentity(config.identity);
        } else if ( typeof config.identity === 'string' ) {
            ZendeskSdk.setJwtIdentity(config.identity);
        }

        return ZendeskSdk;
    }

    public static setUserLocale(locale: string): typeof ZendeskSdk {

        ZendeskConfig.INSTANCE.setDeviceLocale(new Locale(locale));

        return ZendeskSdk;
    }

    public static setAnonymousIdentity(anonUserIdentity: AnonUserIdentity = {}): typeof ZendeskSdk {

        const anonymousIdentityBuilder: AnonymousIdentity.Builder = new AnonymousIdentity.Builder();

        if ( anonUserIdentity.name ) { anonymousIdentityBuilder.withNameIdentifier(anonUserIdentity.name); }

        if ( anonUserIdentity.email ) { anonymousIdentityBuilder.withEmailIdentifier(anonUserIdentity.email); }

        ZendeskConfig.INSTANCE.setIdentity(anonymousIdentityBuilder.build());

        return ZendeskSdk;
    }

    public static setJwtIdentity(jwtUserIdentifier: string): typeof ZendeskSdk {

        ZendeskConfig.INSTANCE.setIdentity(
            new JwtIdentity(jwtUserIdentifier),
        );

        return ZendeskSdk;
    }

    public static configureRequests(config: RequestConfig): typeof ZendeskSdk {

        config.addDeviceInfo = config.addDeviceInfo != null ? config.addDeviceInfo : true;
        let tagsArrayList: ArrayList<string> = null;
        if ( config.tags ) {
            tagsArrayList = new ArrayList(config.tags.length);
            config.tags.forEach((value: string) => {
                tagsArrayList.add(value);
            });
        }

        ZendeskSdk._zendeskRequestConfiguration = new ZendeskFeedbackConfiguration(
            {
                getRequestSubject(): string {
                    return !!config.requestSubject ? config.requestSubject : null;
                },
                getAdditionalInfo(): string {
                    const deviceInfo: string = config.addDeviceInfo ? '\n\n' + device.language + '-' + device.region
                                                                      + '\n' + device.manufacturer + ' ' + device.model
                                                                      + '\n' + device.os + ' ' + device.osVersion + '('
                                                                      + device.sdkVersion + ')' : '';

                    return !!config.additionalInfo || config.addDeviceInfo
                        ? (!!config.additionalInfo
                            ? '\n\n' + config.additionalInfo
                            : ''
                          ) + deviceInfo
                        : '';
                },
                getTags(): List<string> {
                    return tagsArrayList;
                },
            },
        );

        return ZendeskSdk;
    }

    public static showHelpCenter(options: HelpCenterOptions = {}): void {

        ZendeskSdk._initHelpCenter(options).show(topmost().android.activity);
    }

    public static showHelpCenterForCategoryIds(categoryIds: Array<number>,
                                               options: HelpCenterOptions = {}): void {

        ZendeskSdk._initHelpCenter(options).withArticlesForCategoryIds(categoryIds).show(topmost().android.activity);
    }

    public static showHelpCenterForLabelNames(labelNames: Array<string>,
                                              options: HelpCenterOptions = {}): void {

        ZendeskSdk._initHelpCenter(options).withLabelNames(labelNames).show(topmost().android.activity);
    }

    public static showHelpCenterForSectionIds(sectionIds: Array<number>,
                                              options: HelpCenterOptions = {}): void {

        ZendeskSdk._initHelpCenter(options).withArticlesForSectionIds(sectionIds).show(topmost().android.activity);
    }

    public static showArticle(articleId: string): void {

        ViewArticleActivity.startActivity(
            topmost().android.activity, new SimpleArticle(long(long(articleId)), ''),
        );
    }

    public static createRequest() {

        ContactZendeskActivity.startActivity(topmost().android.activity, ZendeskSdk._zendeskRequestConfiguration);
    }

    public static setIosTheme(theme: IosThemeSimple): void { }

    private static _initHelpCenter(options: HelpCenterOptions): SupportActivity.Builder {

        const supportActivityBuilder: SupportActivity.Builder = new SupportActivity.Builder()
            .withCategoriesCollapsed(
                options.categoriesCollapsedAndroid != null
                    ? options.categoriesCollapsedAndroid
                    : false)
            .showConversationsMenuButton(
                options.conversationsMenuAndroid != null
                    ? options.conversationsMenuAndroid
                    : true);
        if ( ZendeskSdk._zendeskRequestConfiguration ) {
            supportActivityBuilder.withContactConfiguration(ZendeskSdk._zendeskRequestConfiguration);
        }

        return supportActivityBuilder;
    }

    private constructor() { }
}
