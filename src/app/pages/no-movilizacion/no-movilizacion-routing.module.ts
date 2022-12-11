import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoMovilizacionPage } from './no-movilizacion.page';

const routes: Routes = [
  {
    path: '',
    component: NoMovilizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoMovilizacionPageRoutingModule {}
