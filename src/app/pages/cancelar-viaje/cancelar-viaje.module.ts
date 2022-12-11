import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelarViajePageRoutingModule } from './cancelar-viaje-routing.module';

import { CancelarViajePage } from './cancelar-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelarViajePageRoutingModule
  ],
  declarations: [CancelarViajePage]
})
export class CancelarViajePageModule {}
