import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';


@Injectable({
  providedIn: 'root'
})
export class ClimaGeolocalizacionService {
  
  //83cb79e8cd6208a33dfbcad1d9dc7adc
  //https://api.openweathermap.org/data/2.5/weather?

  apiKey        = '83cb79e8cd6208a33dfbcad1d9dc7adc'
  lat: any;
  lon: any;
  weathertemp: any;
  cityname: any;
  weatherdetail: any;
  respuesta: any;

  constructor(private httpClient: HttpClient,private geolocation: Geolocation) { }
  getGeolocation(): Promise<any> {
    return new Promise((resolve,reject) =>{
      this.geolocation.getCurrentPosition().then((resp) => {
        this.lat = resp.coords.latitude
        this.lon = resp.coords.longitude
       }).catch((error) => {
         console.log('Error al obtener la ubicacion', error);
       });
       this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}&units=metric`).subscribe(results => {
        console.log(this.respuesta);
        resolve(results);
       },
       (err) => {
        reject(err);
       })

    })
    
  }
}



// ObtenerGeolocalizacion(){
//   this.geolocation.getCurrentPosition().then((resp) => {
//     this.lat = resp.coords.latitude
//     this.lon = resp.coords.longitude
//    }).catch((error) => {
//      console.log('Error al obtener la ubicacion', error);
//    });
//    this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}&units=metric`)
//     .subscribe(results => {
//     this.respuesta = results;
//     this.cityname = this.respuesta.name;
//     this.weathertemp = this.respuesta.main.temp;
//     this.weatherdetail = this.respuesta.weather[0].description;
//     console.log(this.respuesta);
//    })
// }









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
//