import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { BasedatosService } from 'src/app/services/baseDatos/basedatos.service';
import { Conductor } from 'src/app/services/baseDatos/conductor';

@Component({
  selector: 'app-crear-conductor',
  templateUrl: './crear-conductor.page.html',
  styleUrls: ['./crear-conductor.page.scss'],
})
export class CrearConductorPage{

  @Input() id :string;
  conductor: Conductor = null;
  pageTitle: string = '';
  
  conductores : Conductor[] = [];
  
  constructor(  private baseDatos:BasedatosService, 
                private modalCtrl:ModalController, 
                private alertCtrl:AlertController,
    private toastCtrl:ToastController) {
    this.getConductores();
  }

  getConductores(){
    this.baseDatos.getConductor().subscribe(respuesta => {
      console.log(respuesta);
      this.conductores = respuesta;
    });
  }

}
