import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {  Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private project$ = new Subject<any>();
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

  addProject(project:any){
    this.project$.next(project);
  }

  getAddProject():Observable<any>{
    return this.project$.asObservable();
  }
  saveProyect(id:any,data:any): Promise<any>{
   return this.firebase.collection('usuarios').doc(id).update(data)
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
