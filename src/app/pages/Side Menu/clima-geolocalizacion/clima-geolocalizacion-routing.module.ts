import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClimaGeolocalizacionPage } from './clima-geolocalizacion.page';

const routes: Routes = [
  {
    path: '',
    component: ClimaGeolocalizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClimaGeolocalizacionPageRoutingModule {}
