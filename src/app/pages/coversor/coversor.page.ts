import { Component, OnInit } from '@angular/core';
import { MindicadorclService } from 'src/app/services/mindicadorcl.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coversor',
  templateUrl: './coversor.page.html',
  styleUrls: ['./coversor.page.scss'],
})
export class CoversorPage implements OnInit {

  pageTitle = 'Conversor';
  isNotHome = true;
  listadoDatos:any = [];

  

  constructor(private mindicadorclService:MindicadorclService) { }

  ngOnInit(): void {
    this.cargarDatosConvertidor()
  }

  cargarDatosConvertidor(){
    this.mindicadorclService.obtenerListadoConvertidor()
    .then(respuesta => {
      this.listadoDatos = [respuesta.uf,respuesta.dolar,respuesta.euro];
      console.log(this.listadoDatos);
    },
    (err) => {
      console.log(err);
    });
  }
  
}
