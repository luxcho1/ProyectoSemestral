import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MindicadorclService {

  urlEndPoint: string = 'https://mindicador.cl/api';

  constructor(private httpClient: HttpClient) {}

  obtenerListadoConvertidor(): Promise<any> {
    return new Promise((resolve,reject) =>{
      this.httpClient.get(`${this.urlEndPoint}`)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      })
    })
  }
  }
