import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuSeleccionPageRoutingModule } from './menu-seleccion-routing.module';

import { MenuSeleccionPage } from './menu-seleccion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuSeleccionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MenuSeleccionPage]
})
export class MenuSeleccionPageModule {}
