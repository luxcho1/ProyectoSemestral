import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { BasedatosService } from 'src/app/services/baseDatos/basedatos.service';
import { CamaraService } from 'src/app/services/camara/camara.service';
import { Conductor } from 'src/app/services/baseDatos/conductor';
import { Camera } from '@capacitor/camera';
import { CameraResultType, CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { Simovilizacion } from 'src/app/services/baseDatos/simovilizacion';



@Component({
  selector: 'app-si-movilizacion',
  templateUrl: './si-movilizacion.page.html',
  styleUrls: ['./si-movilizacion.page.scss'],
})
export class SiMovilizacionPage{

  pageTitle = 'Viaje de retorno';
  isNotHome = true;
  ultimoConductor : any


  @Input() id :string;
  simovilizacion: Simovilizacion = {
    id :'',
    nombre: '',
    apellido: '',
    inicio: '',
    destino: '',
    valor: 0,
    imagen:'',
  };
  constructor(  private baseDatos:      BasedatosService, 
                private modalCtrl:      ModalController, 
                private alertCtrl:      AlertController,
                private toastCtrl:      ToastController,
                private loadingCtrl:    LoadingController,
                private router:         Router,
                private camaraServicio: CamaraService,
    ) {
// this.getConductores();
}


  async addUsuario(){
    this.baseDatos.agregarSimovilizacion(this.simovilizacion);
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message:'Usuario Creado',
      duration:1000,
    });
    toast.present();
    this.router.navigateByUrl('/home',{replaceUrl:true});
  }



  async agregarConductores(){
      const alert = await this.alertCtrl.create({
        header:'Programar Viaje',
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
              this.alertaViaje()
              console.log(this.ultimoConductor)
              this.navigate()
            }
          }
        ]
      });
      alert.present();
      
  }

  
  async alertaViaje() {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      message: 'Viaje Programado Correctamente',
      buttons: ['OK'],
    });

    await alert.present();
  }

  navigate(){
    this.router.navigate(['/home'])
  }

  async uploadAvatar(){
    const avatar = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera //Photos o Prompt
    });
      const result = await Promise.resolve(this.camaraServicio.Getavatar(avatar));
      this.simovilizacion.imagen = result;
      console.log(result);
    }


    

  async toastPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000,
    });
    await toast.present();
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
