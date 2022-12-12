import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { BasedatosService } from 'src/app/services/baseDatos/basedatos.service';
import { Simovilizacion } from 'src/app/services/baseDatos/simovilizacion';
import { DetalleConductorPage } from '../detalle-conductor/detalle-conductor.page';

@Component({
  selector: 'app-no-movilizacion',
  templateUrl: './no-movilizacion.page.html',
  styleUrls: ['./no-movilizacion.page.scss'],
})
export class NoMovilizacionPage{

  simovilizacion : Simovilizacion[] = [];
  pageTitle = 'Coordinar Viaje';
  isNotHome = true;
  constructor(  private baseDatos:      BasedatosService, 
                private modalCtrl:      ModalController, 
                private alertCtrl:      AlertController,
                private toastCtrl:      ToastController,
                private loadingCtrl:    LoadingController,
                private router:         Router,
    ) {
this.obtenerSimovilizacion();
}

obtenerSimovilizacion(){
    this.baseDatos.obtenerSimovilizacion().subscribe(respuesta => {
      console.log(respuesta);
      this.simovilizacion = respuesta;
    });
  }

  async obtenerDetalleConductor(sinmovilizacion){
      const modal = await this.modalCtrl.create({
        component: DetalleConductorPage,
        componentProps: {id: sinmovilizacion.id },
        breakpoints: [0,0.5,0.8,1],
        initialBreakpoint:1
      });
      modal.present();
    }

    

}
