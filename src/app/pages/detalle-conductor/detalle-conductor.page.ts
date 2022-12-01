import { Component, OnInit,Input } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { BasedatosService } from 'src/app/services/baseDatos/basedatos.service';
import { Conductor } from 'src/app/services/baseDatos/conductor';
import { Camera } from '@capacitor/camera';
import { CameraResultType, CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { CamaraService } from 'src/app/services/camara/camara.service';

@Component({
  selector: 'app-detalle-conductor',
  templateUrl: './detalle-conductor.page.html',
  styleUrls: ['./detalle-conductor.page.scss'],
})
export class DetalleConductorPage implements OnInit {

  constructor(private baseDatos: BasedatosService,
              private toastCtrl: ToastController,
              private modalCtrl: ModalController,
              private loadingCtrl:    LoadingController,
              private camaraServicio: CamaraService,
              private alertCtrl:      AlertController,) {
  }

  
  @Input() id :string;
  conductor: Conductor = null;
  profile:any=null;
  
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

  loadProfile(){
    this.camaraServicio.getUserProfile().subscribe(respuesta => {
      this.profile = respuesta
    });
  }

  async uploadAvatar(){
    const avatar = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera //Photos o Prompt
    });
      const result = await Promise.resolve(this.camaraServicio.obtenerAvatar(avatar));
      this.conductor.imagen = result;
      console.log(result);
    }

  async alertPresent(header:string,message:string){
    const alert = await this.alertCtrl.create({
      header:header,
      message:message,
      buttons:['OK']
    });
    await alert.present();
  }

  async toastPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000
    });
    toast.present();
  }
}
