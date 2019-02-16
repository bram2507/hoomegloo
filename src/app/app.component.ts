import { Component } from '@angular/core';
import { Platform,  ModalController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { SplashPage } from '../pages/splash/splash';

import { HomePage } from '../pages/home/home';

import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SplashPage; // -- Change to SplashPage to see splash screen first -- //
  
  showSplash = true; // <-- show animation


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //splashScreen.hide();  //-- Uncomment to hide the splash screen: intial config--//
      
      let splash = modalCtrl.create(SplashPage); //-- Uncomment to show the splash screen --//
      splash.present();                          //-- Uncomment to show the splash screen --// 
       
       timer(6000).subscribe(() => this.rootPage = HomePage) // <-- hide animation after 3s
      
    });
  }
  
  
  
}
