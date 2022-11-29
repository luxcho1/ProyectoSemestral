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


  listadoClima:any = [];
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


  



// geolocalizacion
// this.geolocation.getCurrentPosition().then((resp) => {
//   this.lat = resp.coords.latitude
//   this.lon = resp.coords.longitude
//   console.log(this.lat,this.lon)

//  }).catch((error) => {
//    console.log('Error getting location', error);
//  });
 
//  let watch = this.geolocation.watchPosition();
//  watch.subscribe((data) => {
//  })