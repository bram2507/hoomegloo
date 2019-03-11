import { Component, ViewChild } from '@angular/core';
import { ViewController, NavController, NavParams, AlertController, Content } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { timer } from 'rxjs/observable/timer';


/**
 * Generated class for the SubscribePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-subscribe',
  templateUrl: 'subscribe.html',

})

//#region SubcribePage Class  
export class SubscribePage {

  //#region Atributes
  passwordType: String = 'password';
  passwordType1: String = 'password';
  passwordIcon: any;

  nav: NavController;
  alert: AlertController;
  group: FormGroup;
  showOpt: Boolean = true;
  userProfile: Profile;

  inputName: string = null;
  inputEmail: string = null;
  inputPassword: string = null;
  inputcpassword: string = null;
  inputOcupation: string = null;
  inputAge: number = null;
  inputCountry: any = null;

  flag: boolean = true;
  clickE: boolean = false;
  clickP: boolean = false;
  clickCP: boolean = false;
  clickN: boolean = false;
  clickO: boolean = false;
  pss: boolean = true;

  @ViewChild(Content) content: Content;
  //#endregion Atributes

  //#region Constructor
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController
  ) {
    this.nav = navCtrl;
    this.alert = alertCtrl;
    this.ngOnInit();
    this.userProfile = new Profile();
    this.inputCountry = null;
  }
  //#endregion 

  //#region Methods

  goTopAction() {
    this.content.scrollToTop();
  }

  ngOnInit() {
    this.group = new FormGroup({
      Name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      Email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]),
      Password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)]),
      CPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      Age: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      Gender: new FormControl('', [Validators.required]),
      Ocupation: new FormControl('', [Validators.required]),

    })
  }

  presentAlertTermns() {
    let alert = this.alert.create({
      title: 'Terminos y Condiciones',
      subTitle: 'Deberá aceptar los terminos y condiciones para crear el perfil.',
      buttons: ['De acuerdo']
    });
    alert.present();
  }

  presentAlertPasswords() {
    let alert = this.alert.create({
      title: 'Confirmar Contraseña',
      subTitle: 'Los campos Contraseña y Confirmar Contraseña no coiciden. ',
      buttons: ['De acuerdo']
    });
    alert.present();
  }

  presentAlertObligatory() {
    let alert = this.alert.create({
      title: 'Campos Obligatorios',
      subTitle: 'Deberá rellenar los campos obligatorios que incian con *',
      buttons: ['De acuerdo']
    });
    alert.present();
  }

  presentAlertNewUser() {
    // let alert = this.alert.create({
    //   title: 'Perfil',
    //   message: 'Tu cuenta se ha creado correctamente',
    //   buttons: ['De acuerdo']
    // });
    // alert.present();
    // enviar los datos a la base de datos relacional en SQL 

    document.getElementById("CLog").style.display = "block";

    timer(3000).subscribe(() => document.getElementById("CLog").style.display = "none");

  }

  presentPerfil() {

    document.getElementById("accesTo").style.display = "inline-block";

    timer(2000).subscribe(() => document.getElementById("accesTo").style.display = "none");

    timer(2010).subscribe(() => this.presentAlertNewUser());

    this.userProfile.setName(null);
    this.userProfile.setOcupation(null);
    this.userProfile.setPassword(null);
    this.userProfile.setAge(null);
    this.userProfile.setCountry(null);
    this.userProfile.setEmail(null);

    timer(5000).subscribe(() => this.BackPage());

  }

  clickF() {
    var g = document.getElementsByClassName("textArea");

    g[0].innerHTML = "<center>Femenino</center>";

    this.userProfile.setGender("Femenino");

    this.hideShow();


  }

  clickM() {
    var g = document.getElementsByClassName("textArea");

    g[0].innerHTML = "<center>Masculino</center>";

    this.userProfile.setGender("Masculino");

    this.hideShow();


  }

  BackPage() { this.nav.popTo(HomePage); }

  inputForm(e) {

    const f: String = "Form";
    var x = e;
    let n: number = 7;

    if (x == "Gender") {

      document.getElementById(f + x).style.borderRadius = "5px 5px 0px 0xp;"

      document.getElementById(f + x).style.borderTop = "solid 1.5px #70DA92";

      document.getElementById(f + x).style.borderLeft = "solid 1.5px #70DA92";

      document.getElementById(f + x).style.borderRight = "solid 1.5px #70DA92";

      document.getElementById(f + x).style.borderBottom = "solid 1.5px #70DA92";

      document.getElementById(f + x).addEventListener("mouseleave",
        function myF() {
          document.getElementById(f + x).style.border = "0";
        }, false);

    } else {
      document.getElementById(f + x).style.border = "solid 1.5px #70DA92";

      document.getElementById(f + x).addEventListener("mouseleave",

        function myF() {
          document.getElementById(f + x).style.border = "0";
        }, false);
    }

    if (x.match("Name")) {


      if (this.group.get('Name').hasError('required') && this.group.get('Name').value == "") {

        this.clickN = false;

        document.getElementById("FormName").style.border = "solid 1.5px #F52847";

        document.getElementById("Form").style.height = "5" + (++n) + "%";

        let err = document.getElementById("errN");

        if (err != null) { err.style.display = 'inline-block'; }

        timer(1000).subscribe(() => this.inputForm("Name"));

      } else {
        this.clickN = true;

        document.getElementById("FormName").style.border = "solid 1.5px #70DA92";

        document.getElementById("Form").style.height = "5" + (--n) + "%";

        let err = document.getElementById("errN");

        if (err != null) { err.style.display = 'none'; }

      }
    }

    if (x.match("Email")) {
      if (this.group.get('Email').hasError('email') ||
        this.group.get('Email').hasError('pattern')) {

        this.clickE = false;

        document.getElementById("FormEmail").style.border = "solid 1.5px #F52847";

        document.getElementById("Form").style.height = "5" + (++n) + "%";

        let err = document.getElementById("errE");

        if (err != null) { err.style.display = 'inline-block'; }

        timer(1000).subscribe(() => this.inputForm("Email"));

      } else {
        this.clickE = true;

        document.getElementById("FormEmail").style.border = "solid 1.5px #70DA92";

        document.getElementById("Form").style.height = "5" + (--n) + "%";

        let err = document.getElementById("errE");

        if (err != null) { err.style.display = 'none'; }

      }
    }

    if (x.match("Password")) {

      if (this.group.get('Password').hasError('required') || this.group.get('Password').hasError('pattern')) {

        this.clickP = false;

        document.getElementById("FormPassword").style.border = "solid 1.5px #F52847";

        document.getElementById("Form").style.height = "5" + (++n) + "%";

        let err = document.getElementById("errP");

        if (err != null) { err.style.display = 'inline-block'; }

        timer(1000).subscribe(() => this.inputForm("Password"));

      } else {
        this.clickP = true;

        document.getElementById("FormPassword").style.border = "solid 1.5px #70DA92";

        let err = document.getElementById("errP");

        document.getElementById("Form").style.height = "5" + (--n) + "%";

        if (err != null) { err.style.display = 'none'; }
      }

    }

    if (x.match("CPassword")) {

      if (this.group.get('CPassword').hasError('required')) {

        this.clickCP = false;

        document.getElementById("FormCPassword").style.border = "solid 1.5px #F52847";

        document.getElementById("Form").style.height = "5" + (++n) + "%";

        let err = document.getElementById("errCP");

        if (err != null) { err.style.display = 'inline-block'; }

        timer(1000).subscribe(() => this.inputForm("CPassword"));

      } else {
        this.clickCP = true;

        document.getElementById("FormCPassword").style.border = "solid 1.5px #70DA92";

        let err = document.getElementById("errCP");

        document.getElementById("Form").style.height = "5" + (--n) + "%";

        if (err != null) { err.style.display = 'none'; }
      }
    }

  }

  tooglePassword(eye_closed: any) {
    let img: HTMLImageElement;
    img = eye_closed;
    img.src = "../assets/imgs/ionicons-svg-md-eye-off.svg";

    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';

    if (this.flag == true) {
      img.src = "../assets/imgs/ionicons-svg-md-eye.svg"; this.flag = false;
    } else {
      img.src = "../assets/imgs/ionicons-svg-md-eye-off.svg"; this.flag = true;
    }
  }

  confirmProfile() {

    //Enviar los datos a la base de datos para crear perfil 
    // U otra funcion 
    this.userProfile.setName(this.inputName);
    this.userProfile.setEmail(this.inputEmail);
    this.userProfile.setPassword(this.inputPassword);
    this.userProfile.setCountry(this.inputCountry);
    this.userProfile.setAge(this.inputAge);
    this.userProfile.setOcupation(this.inputOcupation);

    let element = <HTMLInputElement>document.getElementById("cbx");

    if (element.checked == false) this.presentAlertTermns();

    else if (this.clickCP && this.clickE && this.clickP) {

      this.inputPassword === this.inputcpassword ? this.presentPerfil() : this.presentAlertPasswords();

    } else { this.presentAlertObligatory(); }

  }


  hideShow() {
    var gndr;

    if (this.showOpt) {
      gndr = HTMLCollection;

      gndr = document.getElementsByClassName("arrowDown");

      gndr[0].style = "border: solid 1.5px #333";

      document.getElementById("Options").style.display = "block";

      document.getElementById("sp1").style.backgroundColor = "#333";

      document.getElementById("sp2").style.backgroundColor = "#333";

      this.showOpt = false;
    } else {

      gndr = document.getElementsByClassName("arrowDown");

      gndr[0].style = "none";

      document.getElementById("Options").style.display = "block";

      document.getElementById("sp1").style.backgroundColor = "none";

      document.getElementById("sp2").style.backgroundColor = "none";

      document.getElementById("Options").style.display = "none";

      this.showOpt = true;
    }
  }
  //#endregion Methods

}
//#endregion

//#region Profile Class
export class Profile {

  //#region Atributes
  private name: String;
  private email: String;
  private password: String;
  private ocupation: String;
  private country: String;
  private gender: String;
  private age: number;
  //#endregion  

  //#region Constructors
  constructor() {

  }
  //#endregion

  //#region Getter and Setter 
  getName() { return this.name; }

  getEmail() { return this.email; }

  getPassword() { return this.password; }

  getOcupation() { return this.ocupation; }

  getCountry() { return this.country; }

  getGender() { return this.gender; }

  getAge() { return this.age; }

  setEmail(email: String) { this.email = email; }

  setName(name: String) { this.name = name; }

  setPassword(password: String) { this.password = password; }

  setOcupation(ocupation: String) { this.ocupation = ocupation; }

  setCountry(country: String) { this.country = country; }

  setGender(gender: String) { this.gender = gender; }

  setAge(age: number) { this.age = age; }
  //#endregion

}
//#endregion