import { Component, ViewChild} from '@angular/core';
import { NavController, ViewController, AlertController, Content } from 'ionic-angular';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';


import { timer } from 'rxjs/observable/timer';
import { SubscribePage } from '../subscribe/subscribe';
import { App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html' 
})


export class HomePage {

  passwordType: string = 'password';
  passwordIcon: any;

  flag: boolean = true;
  mflag: boolean = true;

  inputPassword: string="";
  inputEmail: string="";
 
  group   : FormGroup;
  myGroup : FormGroup; 
  form    : FormBuilder;

  nav  : NavController; 
  alert: AlertController;
  fp   : boolean = false;

  clickE : boolean = true;
  clickP : boolean = true;

  flagPss : Boolean = true; 
  flagEm  : Boolean = true;

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, 
                                             public formBuilder: FormBuilder, 
                                             public app: App,
                                             public alertCtrl: AlertController
                                             ) { 
     this.ngOnInit();
     this.nav = navCtrl;
     this.alert = alertCtrl;
  }

   goTopAction(){
     this.content.scrollToTop();
   }

   ngOnInit(){
    this.group = new FormGroup({
      UserName : new FormControl('',[Validators.required, Validators.email]),
      Password : new FormControl('',[Validators.required, Validators.min(6), Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/)])
    })
    
  
   }
   
   susbcribe(){
     this.nav.push(SubscribePage);
   }

   presentAlertCorrectLogin() {

    // primero preguntar a la base de datos si existe el usuario 
    // que hemos introducido
    
    document.getElementById("cLog").style.display="block";
    
    timer(2500).subscribe(() => document.getElementById("cLog").style.display="none");
   }

   presentAlertErrorLogin() {
 
    document.getElementById("iLog").style.display="block";
    
    timer(2500).subscribe(() => document.getElementById("iLog").style.display="none");
   }

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
          document.getElementById("nav").style.transform="translateX(0%)"; this.mflag = false; 
          document.getElementById("spn").style.boxShadow="none";
      } else {
          document.getElementById("nav").style.transform="translateX(-120%)";  this.mflag = true; 
          document.getElementById("spn").style.boxShadow="0.08em 0.08em #999";
      }
   }
   
   // -- Load the data base looking for email and password -- // 
   logInValidation(){
        
        if (this.group.get('Password').value == "") this.flagPss= false; 
    
        else  this.flagPss = true;
        
        if (this.flagEm && this.flagPss){
          
          document.getElementById("accessTo").style.display="inline-block";
          
          timer(3000).subscribe(() => 
          document.getElementById("accessTo").style.display="none");
          
          // Si existe entonces bien pasa a siguiente pagina sino clear
          timer(3010).subscribe(() => this.presentAlertCorrectLogin());
        
        } else { 
              document.getElementById("accessTo").style.display="inline-block";

              timer(3000).subscribe(() => 
              document.getElementById("accessTo").style.display="none");

              timer(3010).subscribe(() => this.presentAlertErrorLogin());
              
              this.inputEmail="";
              this.inputPassword = "";
    
              this.clickE  = false;
              this.clickP  = false;
    
              this.flagPss = false; 
              this.flagEm  = false; 
            }

      
   }

  
   errEmail( ){
      if (this.clickP == true){
        
        document.getElementById("input1").style.border="solid 1.5px #70DA92";
        
        document.getElementById("input1").addEventListener("mouseleave", 
        function modify( ){ 
                  document.getElementById("input1").style.border="0";
        });

      } else { document.getElementById("input1").style.border="0"; }   
    
    
      if (!this.inputEmail.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)){
          
          document.getElementById("input1").style.border="solid 1.5px #F52847";
         
          this.clickP = false; 
          this.flagEm = false;
          let err = document.getElementById("errE");

          if (err != null){
            err.style.display='inline-block';
          }

          timer(50).subscribe(() => this.errEmail());

      } else { 
            document.getElementById("input1").style.border="solid 1.5px #70DA92";
            
            this.clickP = true;
            this.flagEm = true;
            let err = document.getElementById("errE");

            if (err != null){
              err.style.display='none';
            }
        }
   }
 
   errPassword( ){
      
      if (this.clickE == true){
        document.getElementById("input2").style.border="solid 1.5px #70DA92";
        document.getElementById("input2").addEventListener("mouseleave", 
        function modify( ){ 
                  document.getElementById("input2").style.border="0";
        });

      } else { document.getElementById("input2").style.border="0"; }   

      if (this.group.get('Password').value==''){
          document.getElementById("input2").style.border="solid 1.5px #F52847";
          this.clickE=false; 
          timer(100).subscribe(() => this.errPassword());

      } else { document.getElementById("input2").style.border="solid 1.5px #70DA92"; 
               this.clickE == true;
        }
   }
  
}

