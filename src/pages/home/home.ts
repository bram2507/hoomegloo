import { Component } from '@angular/core';
import { NavController, ViewController, Img, TapClick } from 'ionic-angular';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';
import { ClassMethod } from '@angular/compiler/src/output/output_ast';
import { elementStart } from '@angular/core/src/render3/instructions';
import { style } from '@angular/core/src/animation/dsl';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  passwordType: string = 'password';
  passwordIcon: any;
  flag: boolean = true;
  mflag: boolean = true;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) { }

   // -- Show and hide the password when eye icon is clicked -- //
   tooglePassword(eye_closed:any){ 
      let img: HTMLImageElement;
      img= eye_closed;
      img.src="../assets/imgs/ionicons-svg-md-eye-off.svg";

      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      
      if (this.flag == true){
        img.src="../assets/imgs/ionicons-svg-md-eye.svg"; this.flag = false; 
      } else {
        img.src="../assets/imgs/ionicons-svg-md-eye-off.svg"; this.flag = true;
      }
   }

   // -- Slide left and right hamburger Menu  hamburger icon is clicked-- //
   hamburgerMenu(menu:any){


      
      if (this.mflag == true){
        document.getElementById("nav").style.transform="translateX(0%)";
        this.mflag = false; 
        document.getElementById("spn").style.boxShadow="none";
        
        
      } else {
        document.getElementById("nav").style.transform="translateX(-120%)";
        this.mflag = true;
        
        document.getElementById("spn").style.boxShadow="0.08em 0.08em #999";
      }
   }

 
}
