import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoMovilizacionPageRoutingModule } from './no-movilizacion-routing.module';

import { NoMovilizacionPage } from './no-movilizacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoMovilizacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NoMovilizacionPage]
})
export class NoMovilizacionPageModule {}
