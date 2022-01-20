import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import * as firestore from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private project$ = new Subject<any>();
  private users$ = new Subject<any>();

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

  addProject(project:any){
    this.project$.next(project);
  }

  getAddProject():Observable<any>{
    return this.project$.asObservable();
  }

  addUsers(users:any){
    this.users$.next(users); // toma user
  }

  getAddUsers():Observable<any>{
    return this.users$.asObservable(); //emite usuario
  }

  saveProyect(id:any,data:any): Promise<any>{
    console.log("Este es el id que voy a actualizar", id, "esta es la data que voy a actualizar", data);
    return this.firebase.collection('proyectos').doc(id)
      .update({estudiantes: firestore.arrayUnion(data)});
  }

  editUser(id:any, user:any): Promise<any>{
    return this.firebase.collection('usuarios').doc(id)
      .update({proyecto: firestore.arrayUnion(user)});
  }
}
