import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { map } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs';
import * as firestore from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private project$ = new Subject<any>();
  private users$ = new Subject<any>();

  user: any;
  listado: any;
  paths: any;
  proyectos: any

  constructor(private firebase: AngularFirestore) {
    this.getListado()
    this.getPaths()
    this.getProyects2()
   }

  getLearners(): Observable<any> {
    return this.firebase.collection('usuarios').snapshotChanges();
  }

  getProyects(): Observable<any> {
    return this.firebase.collection('proyectos').snapshotChanges();
  }

  addProject(project:any, metodo: any){
    this.project$.next([project,metodo]);
  }

  getAddProject():Observable<any>{
    return this.project$.asObservable();
  }

  addUsers(users:any, metodo: any){
    this.users$.next([users,metodo]); // toma user
  }

  getAddUsers():Observable<any>{
    return this.users$.asObservable(); //emite usuario
  }

  saveProyect(id:any,data:any): Promise<any>{
    /* console.log("Este es el id que voy a actualizar", id, "esta es la data que voy a actualizar", data); */
    return this.firebase.collection('proyectos').doc(id)
      .update({estudiantes: firestore.arrayUnion(data)});
  }

  editUser(id:any, user:any): Promise<any>{
    console.log("USUARIOS EDITAR Este es el id que voy a actualizar", id, "esta es la data que voy a actualizar", user);
    return this.firebase.collection('usuarios').doc(id)
      .update({proyecto: firestore.arrayUnion(user)});
  }

  deleteProyect(id:any,data:any): Promise<any>{
    console.log("PROYECTOS Este es el id que voy a actualizar", id, "esta es la data que voy a actualizar", data, firestore.arrayRemove(data));
    return this.firebase.collection('proyectos').doc(id)
      .update({estudiantes: firestore.arrayRemove(data)});
  }

  deleteUser(id:any, user:any): Promise<any>{
    console.log("USUARIOS Este es el id que voy a actualizar", id, "esta es la data que voy a actualizar", user);
    return this.firebase.collection('usuarios').doc(id)
      .update({proyecto: firestore.arrayRemove(user)});
  }

  private getProyects2(): void {
    this.proyectos = this.firebase.collection('proyectos').snapshotChanges().pipe(
      map(actions => actions.map(el => el.payload.doc.data() as any)),
    )
  }

  private getListado(): void {
    this.listado = this.firebase.collection('listado').snapshotChanges().pipe(
      map(actions => actions.map(el => el.payload.doc.data() as any)),
    )
  }

  private getPaths(): void {
    this.paths = this.firebase.collection('paths').snapshotChanges().pipe(
      map(actions => actions.map(el => el.payload.doc.data() as any)),
    )
  }

  getCurrentStudent$(): Observable<any>{
    return this.listado.pipe(map((data: any) => data.filter((el: any) => el.usuario.id_usuario === this.user.id)));
  }

  //no sirvio
  getCurrentProyect$(): Observable<any>{
    return this.proyectos.pipe(map((data: any) => data.filter((el: any) => el.estudiantes.filter((element: any)=> element === this.user.id))));
  }
}
