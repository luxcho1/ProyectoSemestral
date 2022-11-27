import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Conductor } from './conductor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  constructor(private firestore:Firestore) {}

  getConductor(): Observable<Conductor[]>{
    const conductorRef = collection(this.firestore, 'conductor');
    return collectionData(conductorRef, {idField:'id'}) as Observable<Conductor[]>;
  }

  getConductorById(id:string): Observable<Conductor>{
    const conductorDocRef = doc(this.firestore, `conductor/${id}`);
    return docData(conductorDocRef, { idField:'id' }) as Observable<Conductor>;
  }

  addConductor(conductor: Conductor){
    const conductorRef = collection(this.firestore, 'conductor');
    return addDoc(conductorRef, conductor);
  }

  updateConductor(conductor: Conductor){
    const conductoresRef = doc(this.firestore, `conductor/${conductor.id}`);
    return updateDoc(conductoresRef, 
      {
        nombre:        conductor.nombre,
        apellido:      conductor.apellido,
        genero:        conductor.genero,
        email:         conductor.email,
        edad:          conductor.edad,
        direccion:     conductor.direccion,
        comuna:        conductor.comuna,
        celula:        conductor.celula,
        patente:       conductor.patente,
        imagen:        conductor.imagen
      });
  }

  deleteConductor(conductor: Conductor){
    const conductoresRef = doc(this.firestore,`conductor/${conductor.id}`);
    return deleteDoc(conductoresRef);
  }
}
