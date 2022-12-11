import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuSeleccionPage } from './menu-seleccion.page';

const routes: Routes = [
  {
    path: '',
    component: MenuSeleccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuSeleccionPageRoutingModule {}
