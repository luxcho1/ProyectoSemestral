import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearConductorPageRoutingModule } from './crear-conductor-routing.module';

import { CrearConductorPage } from './crear-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearConductorPageRoutingModule
  ],
  declarations: [CrearConductorPage]
})
export class CrearConductorPageModule {}
