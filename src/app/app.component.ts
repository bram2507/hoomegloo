

import { Component } from '@angular/core';
import { Platform,  ModalController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SplashPage } from '../pages/splash/splash';

import { HomePage } from '../pages/home/home';

import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SplashPage;//HomePage; // -- Change to SplashPage to see splash screen first -- //
  
  showSplash = true; // <-- show animation


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
                                                        modalCtrl: ModalController) {
    
    
     platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
       //statusBar.styleDefault();
       //splashScreen.hide();  //-- Uncomment to hide the splash screen: intial config--//
       // let splash = modalCtrl.create(SplashPage); //-- Uncomment to show the splash screen --//
       // //                          //-- Uncomment to show the splash screen --// 
       // setTimeout(() => {
       //   splash.present();
       // }, 1000); // change to 
     
        timer(5000).subscribe(() => this.rootPage = HomePage) }); // <-- hide animation after 3s 
  }
  

}

