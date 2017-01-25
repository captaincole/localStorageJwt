import { NgModule, ErrorHandler } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { AuthHttp, AuthConfig } from 'angular2-jwt';

let local = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'JWT',
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => local.get('id_token')),
  }), http);
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
