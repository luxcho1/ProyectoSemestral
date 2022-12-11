import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';  

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page {

  public appPages2 = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Conversor De Monedas', url: '/coversor', icon: 'albums' },
    { title: 'Clima', url: '/clima-geolocalizacion', icon: 'cloudy-night' },
    { title: 'Base De Datos', url: '/crear-conductor', icon: 'reader' },
    { title: 'About', url: '/about', icon: 'body' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'exit' }
  ];
  
  constructor() { }
}
