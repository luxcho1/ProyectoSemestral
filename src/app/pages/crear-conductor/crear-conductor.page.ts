import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { BasedatosService } from 'src/app/services/baseDatos/basedatos.service';
import { Conductor } from 'src/app/services/baseDatos/conductor';
import { DetalleConductorPage } from '../detalle-conductor/detalle-conductor.page';

@Component({
  selector: 'app-crear-conductor',
  templateUrl: './crear-conductor.page.html',
  styleUrls: ['./crear-conductor.page.scss'],
})
export class CrearConductorPage{

 
  pageTitle = 'Base De Datos';
  isNotHome = true;
  
  conductores : Conductor[] = [];

  
  constructor(  private baseDatos:      BasedatosService, 
                private modalCtrl:      ModalController, 
                private alertCtrl:      AlertController,
                private toastCtrl:      ToastController,
                private loadingCtrl:    LoadingController,
                private router:         Router,
                ) {
    // this.getConductores();
  }

  // getConductores(){
  //   this.baseDatos.getConductor().subscribe(respuesta => {
  //     console.log(respuesta);
  //     this.conductores = respuesta;
  //   });
  // }
  // async alertPresent(header:string,message:string){
  //   const alert = await this.alertCtrl.create({
  //     header:header,
  //     message:message,
  //     buttons:['OK']
  //   });
  //   await alert.present();
  // }

  // async addConductores(){
  //   const alert = await this.alertCtrl.create({
  //     header:'Agregar Conductor',
  //     inputs:[
  //       {
  //         name:'nombre',
  //         type:'text',
  //         placeholder:'Nombre',
  //       },
  //       {
  //         name:'apellido',
  //         type:'text',
  //         placeholder:'Apellido',
  //       },
  //       {
  //         name:'genero',
  //         type:'text',
  //         placeholder:'Genero',
  //       },
  //       {
  //         name:'email',
  //         type:'email',
  //         placeholder:'correo@correo.com',
  //       },
  //       {
  //         name:'edad',
  //         type:'number',
  //         placeholder:'Edad',
  //       },
  //       {
  //         name:'direccion',
  //         type:'text',
  //         placeholder:'Direccion',
  //       },
  //       {
  //         name:'comuna',
  //         type:'text',
  //         placeholder:'Comuna',
  //       },
  //       {
  //         name:'celula',
  //         type:'number',
  //         placeholder:'Celula',
  //       },
  //       {
  //         name:'patente',
  //         type:'text',
  //         placeholder:'Patente',
  //       },
  //       {
  //         name:'imagen',
  //         type:'url',
  //         placeholder:'link imagen',
  //       }
  //      ],
  //     buttons:[
  //       {
  //         text:'Cancelar',
  //         role:'cancel'
  //       },
  //       {
  //         text:'Guardar',
  //         role:'confirm',
  //         handler:(data) => {
  //           this.baseDatos.addConductor(data);
  //           this.toastPresent('Conductor agregado correctamente');
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }

  // async toastPresent(message:string){
  //   const toast = await this.toastCtrl.create({
  //     message:message,
  //     duration:1000
  //   });
  //   toast.present();
  // }

  // async obtenerDetalleConductor(conductor){
  //   const modal = await this.modalCtrl.create({
  //     component: DetalleConductorPage,
  //     componentProps: {id: conductor.id },
  //     breakpoints: [0,0.5,0.8,1],
  //     initialBreakpoint:1
  //   });
  //   modal.present();
  // }

}
