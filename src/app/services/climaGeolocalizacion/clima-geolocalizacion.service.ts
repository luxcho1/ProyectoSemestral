import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';


@Injectable({
  providedIn: 'root'
})
export class ClimaGeolocalizacionService {
  
  //83cb79e8cd6208a33dfbcad1d9dc7adc
  //https://api.openweathermap.org/data/2.5/weather?

  urlEndPoint: string   = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=83cb79e8cd6208a33dfbcad1d9dc7adc'
  apiKey: string        = '83cb79e8cd6208a33dfbcad1d9dc7adc'
 


  constructor(private httpClient: HttpClient,private geolocation: Geolocation) { }

//'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=83cb79e8cd6208a33dfbcad1d9dc7adc'
  //https://api.openweathermap.org/data/2.5/weather?lat={ -33.4931768 }&lon={ -70.6097705 }&appid=83cb79e8cd6208a33dfbcad1d9dc7adc
  
  obtenerGeolocalizacion(){   
    let lat
    let lon

    this.geolocation.getCurrentPosition().then((resp) => {
      lat = resp.coords.latitude;
      lon = resp.coords.longitude;
      console.log(lat,lon)
      return this.httpClient.get(`${this.urlEndPoint}lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
  });
}


}

// return new Promise((resolve,reject) =>{
//   this.httpClient.get(`${this.urlEndPoint}lat=${lat}&lon=${lon}&appid=${this.apiKey}`)
//     .subscribe(respuesta => {
//     resolve(respuesta);
//   },
//     (err) => {
//       reject(err);
//     })
//   }),

//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}


// (`${this.url}lat=${this.lat}&lon=${this.lon}&appid=83cb79e8cd6208a33dfbcad1d9dc7adc`)
// obtenerDatosClima(lat,lon){
//   let params = new HttpParams()
//   .set('lat',lat)
//   .set('lon',lon)
//   .set('units','imperial') 
//   .set('appid',this.apiKey)
//   // https://api.openweathermap.org/data/2.5/weather? lat=44.34&lon=10.99&appid= 83cb79e8cd6208a33dfbcad1d9dc7adc

//   // https://api.openweathermap.org/data/2.5/weather? lat={lat}&lon={lon}&appid= {API key}


//   return this.httpClient.get(`${this.url}lat=${lat}&lon=${lon}&appid=${this.apiKey}`)
//}