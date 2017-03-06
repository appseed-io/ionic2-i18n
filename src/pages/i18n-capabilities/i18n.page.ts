import { Component } from '@angular/core';
import { availableLanguages, sysOptions } from './i18n.constants';
import { TranslateService } from 'ng2-translate';

@Component({
	templateUrl: 'i18n.html'
})
export class I18nPage {
	languages = availableLanguages;
	selectedLanguage = sysOptions.systemLanguage;

	param = { value: 'world' };

	private translate: TranslateService;

	constructor(translate: TranslateService) {
		this.translate = translate;

	}

	applyLanguage() {
		this.translate.use(this.selectedLanguage);
	}
}
