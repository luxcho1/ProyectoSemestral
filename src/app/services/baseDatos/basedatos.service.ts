import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Conductor } from './conductor';
import { Simovilizacion } from './simovilizacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  constructor(private firestore:Firestore) {}

  obtenerSimovilizacion(): Observable<Simovilizacion[]>{
    const simovilizacionRef = collection(this.firestore, 'simovilizacion');
    return collectionData(simovilizacionRef, {idField:'id'}) as Observable<Simovilizacion[]>;
  }

  obtenerSimovilizacionById(id:string): Observable<Simovilizacion>{
      const simovilizacionDocRef = doc(this.firestore, `simovilizacion/${id}`);
      return docData(simovilizacionDocRef, { idField:'id' }) as Observable<Simovilizacion>;
  }

  agregarSimovilizacion(simovilizacion: Simovilizacion){
      const simovilizacionRef = collection(this.firestore, 'simovilizacion');
      return addDoc(simovilizacionRef, simovilizacion);
  }

  eliminarSimovilizacion(simovilizacion: Simovilizacion){
      const simovilizacionRef = doc(this.firestore,`simovilizacion/${simovilizacion.id}`);
      return deleteDoc(simovilizacionRef);
    }
  
  
  
  
  
  
  // getConductor(): Observable<Conductor[]>{
  //   const conductorRef = collection(this.firestore, 'conductor');
  //   return collectionData(conductorRef, {idField:'id'}) as Observable<Conductor[]>;
  // }

  // getConductorById(id:string): Observable<Conductor>{
  //   const conductorDocRef = doc(this.firestore, `conductor/${id}`);
  //   return docData(conductorDocRef, { idField:'id' }) as Observable<Conductor>;
  // }

  // addConductor(conductor: Conductor){
  //   const conductorRef = collection(this.firestore, 'conductor');
  //   return addDoc(conductorRef, conductor);
  // }

  // deleteConductor(conductor: Conductor){
  //   const conductoresRef = doc(this.firestore,`conductor/${conductor.id}`);
  //   return deleteDoc(conductoresRef);
  // }
}
