import { Component, OnInit } from '@angular/core';
import { MindicadorclService } from 'src/app/services/mindicador/mindicadorcl.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coversor',
  templateUrl: './coversor.page.html',
  styleUrls: ['./coversor.page.scss'],
})
export class CoversorPage implements OnInit {

  pageTitle = 'Conversor';
  isNotHome = true;
  resultados: any;
  

  dolar: any;
  euro: any;
  uf: any;
  resultado: number;
  valor: number;
  tipoMoneda: string;
  resultadoTotal: any;

  

  constructor(private mindicadorclService:MindicadorclService) { }

  ngOnInit(): void {
    this.cargarDatosConvertidor()
  }

  cargarDatosConvertidor(){
    this.mindicadorclService.obtenerListadoConvertidor()
    .then(respuesta => {
      this.resultados = respuesta;
      this.dolar = this.resultados.dolar.valor;
      this.euro = this.resultados.euro.valor;
      this.uf = this.resultados.uf.valor;
      console.log(this.resultados); 
    },
    (err) => {
      console.log(err);
    });
  }

  obtenerValorMoneda(tipoMoneda){
    if(tipoMoneda == "dolares"){
      this.resultado = this.valor / this.dolar
      this.resultadoTotal = this.resultado.toFixed(2)
    }
    else if(tipoMoneda == "euros"){
      this.resultado = Math.round(this.valor / this.euro)
      this.resultadoTotal = this.resultado.toFixed(2)
    }
    else if(tipoMoneda == "ufs"){
      this.resultado = Math.round(this.valor / this.uf)
      this.resultadoTotal = this.resultado.toFixed(2)
    }
  }
}



// cargarValorMonedas(){
//   this.mindicadorService.obtenerValorPesos()
//   .then(results => {
//     this.results = results;
//     this.valorMonedaDolar = this.results.dolar.valor;
//     this.valorMonedaEuro = this.results.euro.valor;
//     this.valorMonedaUF = this.results.uf.valor;
//     console.log(this.results); 
//   },
//   (err) => {
//     console.log(err);
//   });
// }

// obtenerValorMoneda(moneda){
//   if(moneda == "dolares"){
//     this.resultado = this.valor / this.valorMonedaDolar
//     this.resultado1 = this.resultado.toFixed(2)
//   }
//   else if(moneda == "euros"){
//     this.resultado = Math.round(this.valor / this.valorMonedaEuro)
//     this.resultado1 = this.resultado.toFixed(2)
//   }
//   else if(moneda == "ufs"){
//     this.resultado = Math.round(this.valor / this.valorMonedaUF)
//     this.resultado1 = this.resultado.toFixed(2)
//   }
//   else {
//     this.presentAlert();
//   }
// }
