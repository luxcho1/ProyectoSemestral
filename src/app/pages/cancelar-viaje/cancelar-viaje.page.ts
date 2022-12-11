import { Component, Input, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { BasedatosService } from 'src/app/services/baseDatos/basedatos.service';
import { Simovilizacion } from 'src/app/services/baseDatos/simovilizacion';
import { CamaraService } from 'src/app/services/camara/camara.service';

@Component({
  selector: 'app-cancelar-viaje',
  templateUrl: './cancelar-viaje.page.html',
  styleUrls: ['./cancelar-viaje.page.scss'],
})
export class CancelarViajePage implements OnInit{

  
  
  constructor(private baseDatos: BasedatosService,
              private toastCtrl: ToastController,
              private modalCtrl: ModalController,
              private loadingCtrl:    LoadingController,
              private camaraServicio: CamaraService,
              private alertCtrl:      AlertController,) {
}

  @Input() id :string;
  conductor: Simovilizacion = null;
  
  ngOnInit(): void {
    this.obtenerConductor();
    console.log(this.conductor);
  }

obtenerConductor(){
  this.baseDatos.obtenerSimovilizacionById(this.id).subscribe(respuesta => {
        this.conductor = respuesta;
      });
    }

    

// async eliminarConductor(){
//   this.baseDatos.eliminarSimovilizacion(this.ultimoConductor);
//   this.modalCtrl.dismiss();
//   const toast = await this.toastCtrl.create({
//     message:'Conductor eliminado',
//     duration:1000,
//   })
//   toast.present();
// }

// async toastPresent(message:string){
//   const toast = await this.toastCtrl.create({
//     message:message,
//     duration:1000
//   });
//   toast.present();
// }


}
