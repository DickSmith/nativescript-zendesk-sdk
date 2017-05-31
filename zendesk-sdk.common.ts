import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

export class HelpCenterOptions {
    showConversationsMenuButtonForAndroid: boolean = true;
    showConversationsMenuButtonForIos: boolean = true;
    withCategoriesCollapsedForAndroid: boolean = false;
    showContactUsButtonForAndroid: boolean = false;
    showAsModalForIos: boolean = false;
}
