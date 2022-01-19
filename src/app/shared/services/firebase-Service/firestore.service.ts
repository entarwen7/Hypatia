import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firebase: AngularFirestore) { }

  getUsers(): Observable<any>{
    return this.firebase.collection('listado').snapshotChanges();
  }

  getLearners(): Observable<any>{
    return this.firebase.collection('usuarios').snapshotChanges();
  }

  getProyects(): Observable<any>{
    return this.firebase.collection('proyectos').snapshotChanges();
  }
}
