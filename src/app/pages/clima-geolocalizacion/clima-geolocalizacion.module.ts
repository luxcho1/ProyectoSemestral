import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClimaGeolocalizacionPageRoutingModule } from './clima-geolocalizacion-routing.module';

import { ClimaGeolocalizacionPage } from './clima-geolocalizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClimaGeolocalizacionPageRoutingModule,
  ],
  declarations: [ClimaGeolocalizacionPage]
})
export class ClimaGeolocalizacionPageModule {}
