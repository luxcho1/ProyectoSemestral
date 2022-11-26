import { Component, OnInit } from '@angular/core';
import { ClimaGeolocalizacionService } from 'src/app/services/climaGeolocalizacion/clima-geolocalizacion.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';



@Component({
  selector: 'app-clima-geolocalizacion',
  templateUrl: './clima-geolocalizacion.page.html',
  styleUrls: ['./clima-geolocalizacion.page.scss'],
})
export class ClimaGeolocalizacionPage implements OnInit {

 
  lat;
  lon;
  weather;
  constructor(private geolocation: Geolocation,
              private climaService:ClimaGeolocalizacionService) {}
              
  ngOnInit() {
    // this.obtenerGeolocalizacionClima();
  }

  // obtenerGeolocalizacionClima(){
  //   this.climaService.obtenerGeolocalizacion(this.lat,this.lon).subscribe(data => {
  //     this.weather = data;
  //   });
  // };  
  
  // obtenerClima(){
  //   this.climaService.obtenerDatosClima(this.lat,this.lon).subscribe(data => {
  //     this.weather = data;
  //   });
  
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