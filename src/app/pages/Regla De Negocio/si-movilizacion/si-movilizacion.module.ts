import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiMovilizacionPageRoutingModule } from './si-movilizacion-routing.module';

import { SiMovilizacionPage } from './si-movilizacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiMovilizacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SiMovilizacionPage]
})
export class SiMovilizacionPageModule {}
