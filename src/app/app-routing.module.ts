import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },  
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },

  {
    path: 'coversor',
    loadChildren: () => import('./pages/coversor/coversor.module').then( m => m.CoversorPageModule)
  },
  {
    path: 'page404',
    loadChildren: () => import('./pages/page404/page404.module').then( m => m.Page404PageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./pages/administrador/administrador.module').then( m => m.AdministradorPageModule)
  },
  {
    path: 'clima-geolocalizacion',
    loadChildren: () => import('./pages/clima-geolocalizacion/clima-geolocalizacion.module').then( m => m.ClimaGeolocalizacionPageModule)
  },
  {
    path: 'crear-conductor',
    loadChildren: () => import('./pages/crear-conductor/crear-conductor.module').then( m => m.CrearConductorPageModule)
  },
  {
    path: 'menu-seleccion',
    loadChildren: () => import('./pages/menu-seleccion/menu-seleccion.module').then( m => m.MenuSeleccionPageModule)
  },
  {
    path: 'detalle-conductor',
    loadChildren: () => import('./pages/detalle-conductor/detalle-conductor.module').then( m => m.DetalleConductorPageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./pages/home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'no-movilizacion',
    loadChildren: () => import('./pages/no-movilizacion/no-movilizacion.module').then( m => m.NoMovilizacionPageModule)
  },
  {
    path: 'si-movilizacion',
    loadChildren: () => import('./pages/si-movilizacion/si-movilizacion.module').then( m => m.SiMovilizacionPageModule)
  },
  {
    path: 'cancelar-viaje',
    loadChildren: () => import('./pages/cancelar-viaje/cancelar-viaje.module').then( m => m.CancelarViajePageModule)
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
