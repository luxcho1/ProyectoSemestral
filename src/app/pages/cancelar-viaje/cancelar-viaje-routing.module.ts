import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelarViajePage } from './cancelar-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: CancelarViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelarViajePageRoutingModule {}
