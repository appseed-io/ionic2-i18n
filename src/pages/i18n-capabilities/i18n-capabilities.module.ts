import { NgModule } from '@angular/core';
import { IonicModule, Platform } from 'ionic-angular';
import { I18nPage } from './i18n.page';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TranslateService } from 'ng2-translate';
import { Globalization } from 'ionic-native';
import { defaultLanguage, availableLanguages, sysOptions } from './i18n.constants';

@NgModule({
	imports: [IonicModule, TranslateModule],
	declarations: [I18nPage],
	entryComponents: [I18nPage]
})
export class I18nModule {
	constructor(platform: Platform, translate: TranslateService) {
		platform.ready().then(() => {
				// this language will be used as a fallback when a translation isn't found in the current language
				translate.setDefaultLang(defaultLanguage);

				if ((<any>window).cordova) {
					Globalization.getPreferredLanguage().then(result => {
						var language = this.getSuitableLanguage(result.value);
						translate.use(language);
						sysOptions.systemLanguage = language;
					});
				} else {
					let browserLanguage = translate.getBrowserLang() || defaultLanguage;
					var language = this.getSuitableLanguage(browserLanguage);
					translate.use(language);
					sysOptions.systemLanguage = language;
				}
			}
		);
	}


	getSuitableLanguage(language) {
		language = language.substring(0, 2).toLowerCase();
		return availableLanguages.some(x => x.code == language) ? language : defaultLanguage;
	}
}
