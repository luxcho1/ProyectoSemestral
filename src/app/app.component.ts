import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio Si Movilizacion', url: '/home', icon: 'car' },
    { title: 'Inicio No Movilizacion', url: '/home2', icon: 'man' },
    { title: 'Conversor De Monedas', url: '/coversor', icon: 'cash' },
    { title: 'Clima', url: '/clima-geolocalizacion', icon: 'cloudy-night' },
    { title: 'Sobre Nosotros', url: '/about', icon: 'people' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'exit' }
  ];
  constructor() { 
  }

  
}
