import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
   public splash : SplashScreen;
  constructor(public navCtrl: NavController, public navParams: NavParams
                                           , public viewCtrl: ViewController
                                           , public splashScreen: SplashScreen) {
             this.ionViewDidEnter();         
  }
  
  // -- Comment to hide splash screen  -- // 
  ionViewDidEnter() {
    
    this.splashScreen.hide();  //coment to show splash 
    setTimeout(() => {
      this.viewCtrl.dismiss();
    },4500); // change to 

  
  }

  // -- Comment to hide splash screen  -- // 
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

}
