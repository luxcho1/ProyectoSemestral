import { Component, OnInit,Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { BasedatosService } from 'src/app/services/baseDatos/basedatos.service';
import { Conductor } from 'src/app/services/baseDatos/conductor';

@Component({
  selector: 'app-detalle-conductor',
  templateUrl: './detalle-conductor.page.html',
  styleUrls: ['./detalle-conductor.page.scss'],
})
export class DetalleConductorPage implements OnInit {

  constructor(private baseDatos: BasedatosService,
              private toastCtrl: ToastController,
              private modalCtrl: ModalController) {
  }

  
  @Input() id :string;
  conductor: Conductor = null;
  
  ngOnInit() {
    this.getConductor();
    console.log(this.conductor);
  }

  getConductor(){
    this.baseDatos.getConductorById(this.id).subscribe(respuesta => {
      this.conductor = respuesta;
    });
  }

  async updateUsuario(){
    this.baseDatos.updateConductor(this.conductor);
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message:'Conductor actualizado',
      duration:1000,
    });
    toast.present();
  }

  async deleteUsuario(){
    this.baseDatos.deleteConductor(this.conductor);
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message:'Conductor eliminado',
      duration:1000,
    })
    toast.present();
  }

}
