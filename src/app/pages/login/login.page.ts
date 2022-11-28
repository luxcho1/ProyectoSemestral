import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/autentificacion/login.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario(){
    this.credentials = this.formBuilder.group({
      email: ['' , [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email(){
    return this.credentials?.get('email');
  }

  get password(){
    return this.credentials?.get('password');
  }

  async login(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const user = await this.loginService.login(this.credentials.value.email,this.credentials.value.password);
    await loading.dismiss();

    if(user){
      this.router.navigateByUrl('/home',{replaceUrl:true});
    }
    else{
      this.alertPresent('Login failed','Please try again!');
    }
  }

  async register(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const user = await this.loginService.register(this.credentials.value.email,this.credentials.value.password);
    await loading.dismiss();

    if(user){
      this.router.navigateByUrl('/home',{replaceUrl:true});
    }
    else{
      this.alertPresent('Register failed','Please try again!');
    }
  }

  async alertPresent(header:string,message:string){
    const alert = await this.alertCtrl.create({
      header:header,
      message:message,
      buttons:['OK']
    });
    await alert.present();
  }

}




































  // ngOnInit(): void {
  //   this.cargarLoading('assets/icon/car.jpg');
  // }

  // cargarLoading(message: string){
  //   this.presentLoading(message);
  //   setTimeout(() => {
  //     this.loading.dismiss();
  //   },2000);
  // }

  // async presentLoading(message: string) {
  //   this.loading = await this.loadingCtrl.create({
  //   message: `<img src="assets/icon/car.jpg" class="img-align" />`,
  //   cssClass:`loading-wrapper img-align`
  //   });

  //   await this.loading.present();
  // }

 