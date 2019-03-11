import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  nav : NavController;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nav = navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  BackPage() { this.nav.popTo(HomePage); }

}
