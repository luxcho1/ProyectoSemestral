import { Component, OnInit } from '@angular/core';
import { ClimaGeolocalizacionService } from 'src/app/services/climaGeolocalizacion/clima-geolocalizacion.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';



@Component({
  selector: 'app-clima-geolocalizacion',
  templateUrl: './clima-geolocalizacion.page.html',
  styleUrls: ['./clima-geolocalizacion.page.scss'],
})
export class ClimaGeolocalizacionPage implements OnInit {

 
  weathertemp: any;
  cityname: any;
  weatherdetail: any;
  respuesta: any;
  pageTitle = 'Geolocalizacion y Clima';
  isNotHome = true;


  constructor(private geolocation: Geolocation,
              private climaService:ClimaGeolocalizacionService) {}
              
  ngOnInit() {
  }


  obtenerClima(){
    this.climaService.getGeolocation().then(results => {
      this.respuesta = results;
      this.cityname = this.respuesta.name;
      this.weathertemp = this.respuesta.main.temp;
      this.weatherdetail = this.respuesta.weather[0].description;
    })
  }
}


  
