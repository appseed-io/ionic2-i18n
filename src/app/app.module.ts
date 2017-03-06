import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core/core-module';
import { Config } from '../config';

import { ComponentsModule } from '../pages/components/components.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { HomeModule } from '../pages/home/home.module';
import { SlideBoxModule } from '../pages/slide-box/slide-box.module';
import { WordpressModule } from '../pages/wordpress/wordpress.module';
import { I18nModule } from '../pages/i18n-capabilities/i18n-capabilities.module';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TranslateLoader, TranslateStaticLoader } from 'ng2-translate/src/translate.service';
import { Http } from '@angular/http';

export function createTranslateLoader(http: Http) {
	return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
	declarations: [
		MyApp
	],
	imports: [
		IonicModule.forRoot(MyApp),
		AgmCoreModule.forRoot(),
		TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (createTranslateLoader),
			deps: [Http]
		}),

		ComponentsModule,
		GoogleMapsModule,
		HomeModule,
		SlideBoxModule,
		WordpressModule,
		I18nModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp
	],
	providers: [
		Config
	]
})
export class AppModule {
}
