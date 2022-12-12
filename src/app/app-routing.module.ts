import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },  
  {
    path: 'home',
    loadChildren: () => import('./pages/home/Home Si Movilizacion/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/Side Menu/about/about.module').then( m => m.AboutPageModule)
  },

  {
    path: 'coversor',
    loadChildren: () => import('./pages/Side Menu/coversor/coversor.module').then( m => m.CoversorPageModule)
  },
  {
    path: 'page404',
    loadChildren: () => import('./pages/page404/page404.module').then( m => m.Page404PageModule)
  },
  {
    path: 'clima-geolocalizacion',
    loadChildren: () => import('./pages/Side Menu/clima-geolocalizacion/clima-geolocalizacion.module').then( m => m.ClimaGeolocalizacionPageModule)
  },
  {
    path: 'crear-conductor',
    loadChildren: () => import('./pages/Side Menu/crear-conductor (Eliminar)/crear-conductor.module').then( m => m.CrearConductorPageModule)
  },
  {
    path: 'menu-seleccion',
    loadChildren: () => import('./pages/login/menu-seleccion/menu-seleccion.module').then( m => m.MenuSeleccionPageModule)
  },
  {
    path: 'detalle-conductor',
    loadChildren: () => import('./pages/Regla De Negocio/detalle-conductor/detalle-conductor.module').then( m => m.DetalleConductorPageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./pages/home/Home No Movilizacion/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'no-movilizacion',
    loadChildren: () => import('./pages/Regla De Negocio/no-movilizacion/no-movilizacion.module').then( m => m.NoMovilizacionPageModule)
  },
  {
    path: 'si-movilizacion',
    loadChildren: () => import('./pages/Regla De Negocio/si-movilizacion/si-movilizacion.module').then( m => m.SiMovilizacionPageModule)
  },
  {
    path: '**',
    redirectTo: 'page404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
