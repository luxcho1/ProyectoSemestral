import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoMovilizacionPageRoutingModule } from './no-movilizacion-routing.module';

import { NoMovilizacionPage } from './no-movilizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoMovilizacionPageRoutingModule
  ],
  declarations: [NoMovilizacionPage]
})
export class NoMovilizacionPageModule {}
