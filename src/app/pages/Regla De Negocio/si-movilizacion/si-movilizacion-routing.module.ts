import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiMovilizacionPage } from './si-movilizacion.page';

const routes: Routes = [
  {
    path: '',
    component: SiMovilizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiMovilizacionPageRoutingModule {}
