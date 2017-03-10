import { Component } from '@angular/core';
import { availableLanguages, sysOptions } from './i18n-demo.constants';
import { TranslateService } from 'ng2-translate';

@Component({
	templateUrl: 'i18n-demo.html'
})
export class I18nDemoPage {
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
