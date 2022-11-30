import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Conversor De Monedas', url: '/coversor', icon: 'albums' },
    { title: 'Clima', url: '/clima-geolocalizacion', icon: 'cloudy-night' },
    { title: 'Base De Datos', url: '/crear-conductor', icon: 'reader' },
    { title: 'About', url: '/about', icon: 'body' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'exit' }
  ];
  constructor() { 
  }

  
}
