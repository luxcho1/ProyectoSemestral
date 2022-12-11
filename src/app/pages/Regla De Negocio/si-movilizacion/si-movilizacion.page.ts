import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { BasedatosService } from 'src/app/services/baseDatos/basedatos.service';


@Component({
  selector: 'app-si-movilizacion',
  templateUrl: './si-movilizacion.page.html',
  styleUrls: ['./si-movilizacion.page.scss'],
})
export class SiMovilizacionPage{

  pageTitle = 'Viaje de retorno';
  isNotHome = true;
  ultimoConductor : any
  constructor(  private baseDatos:      BasedatosService, 
                private modalCtrl:      ModalController, 
                private alertCtrl:      AlertController,
                private toastCtrl:      ToastController,
                private loadingCtrl:    LoadingController,
                private router:         Router,
    ) {
// this.getConductores();
}



  async agregarConductores(){
      const alert = await this.alertCtrl.create({
        header:'Iniciar viaje',
        inputs:[
          {
            name:'nombre',
            type:'text',
            placeholder:'Nombre',
          },
          {
            name:'apellido',
            type:'text',
            placeholder:'Apellido',
          },
          {
            name:'inicio',
            type:'text',
            placeholder:'Inicio de viaje',
          },
          {
            name:'destino',
            type:'text',
            placeholder:'Destino de viaje',
          },
          {
            name:'valor',
            type:'number',
            placeholder:'Valor por persona',
          },
          {
            name:'imagen',
            type:'url',
            placeholder:'link imagen',
          }
         ],
        buttons:[
          {
            text:'Cancelar',
            role:'cancel'
          },
          {
            text:'Guardar',
            role:'confirm',
            handler:(data) => {
              this.baseDatos.agregarSimovilizacion(data);
              this.ultimoConductor = data
              this.toastPresent('Viaje iniciado correctamente ');
              console.log(this.ultimoConductor)
              this.navigate()
            }
          }
        ]
      });
      alert.present();
      
  }

  navigate(){
    this.router.navigate(['/home'])
  }
  async toastPresent(message:string){
      const toast = await this.toastCtrl.create({
        message:message,
        duration:1000
      });
      toast.present();
    }
}
