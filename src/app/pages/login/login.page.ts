import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Modelo
  user: any = {
    username : '',
    password : ''
  }

  field : string = '';
  loading : HTMLIonLoadingElement;

  constructor(private toastCtrl: ToastController, 
              private route : Router,
              private loadingCtrl: LoadingController) { 
  }

  ngOnInit(): void {
    this.cargarLoading('assets/icon/car.jpg');
  }

  cargarLoading(message: string){
    this.presentLoading(message);
    setTimeout(() => {
      this.loading.dismiss();
    },2000);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
    message: `<img src="assets/icon/car.jpg" class="img-align" />`,
    cssClass:`loading-wrapper img-align`
    });

    await this.loading.present();
  }

  ingresar(){
    if(this.validateModel(this.user)){
      this.presentToast('Bienvenido!!!');
    }
    else{
      this.presentToast("Falta: " + this.field);
    }
  }

  validateModel (model: any){
    for(var[key,value] of Object.entries(model)){
      if (value == ''){
        this.field = key;
        return false;
      }
    }
    if (value == 'admin'){
      this.field = 'Bienvenido admin';
      this.route.navigate(['/administrador']);
      return true;
    }
    else{
      this.field = 'Bienvenido Usuario';
      this.route.navigate(['/usuario']);
      return true;
    }

  }

  async presentToast(message: string, duration?: number){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration?duration:2000
    });
    toast.present();
  }
}
