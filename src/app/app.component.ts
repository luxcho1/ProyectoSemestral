import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'mail' },
    { title: 'About', url: '/about', icon: 'body' },
    { title: 'Coversor', url: '/coversor', icon: 'albums' },
    { title: 'Clima', url: '/clima-geolocalizacion', icon: 'cloudy-night' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'exit' }
  ];
  constructor() { 
  }

  
}
