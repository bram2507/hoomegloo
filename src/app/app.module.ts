import { NgModule, ErrorHandler,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage }       from '../pages/home/home';
import { TabsPage }       from '../pages/tabs/tabs';
import { SplashPage }     from '../pages/splash/splash';
import { SubscribePage}   from '../pages/subscribe/subscribe'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SplashPage,
    SubscribePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SplashPage,
    SubscribePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SubscribePage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
