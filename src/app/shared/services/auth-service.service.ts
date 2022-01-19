import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Roles } from '../models/collectionRoles';
// import { strict } from 'assert';
// import { stringify } from 'querystring';
// import { LoginComponent } from 'src/app/pages/components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  id!: string;
  constructor(private auth:AngularFireAuth, private db:AngularFirestore) {
    auth.authState.subscribe((user: any)=>{
      this.id= user.uid
    })
  }

  login(user: string, pass: string) {
    return this.auth.signInWithEmailAndPassword(user, pass);
   }
  // este es el servicio para crear coleccion 
   roles(){
    return this.db.collection("userRoles").doc(this.id).set({
     userRoles: "Lider" ,
     userId: this.id
    });
    }
 
}

