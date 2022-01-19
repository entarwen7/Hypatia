import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  id!: string;
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {
  }

  verification() {
    return this.auth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('user is logged in', res.uid);
      } else {
        console.log('user not logged in');
      }
    });
  }

  login(user: string, pass: string) {
    return this.auth.signInWithEmailAndPassword(user, pass);
  }

  // este es el servicio para crear coleccion
  roles() {
    return this.db.collection("userRoles").doc().set({
      userRoles: "Lider",
      //userId: this.id
    });
  }

  logOut() {
    return this.auth.signOut();
  }

}
