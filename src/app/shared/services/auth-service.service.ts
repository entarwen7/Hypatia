import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {
  }

  verification() {
    return this.auth.authState.pipe(map(auth=>auth));
  }

  login(user: string, pass: string) {
    return this.auth.signInWithEmailAndPassword(user, pass);
  }



  roles(id: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.db.collection("userRoles").doc(id).set({
          userRoles: "Lider",
          userId: id,
          date: new Date()
        })
        resolve(result)
      }catch (error: any) {
        reject(error.message)
      }
    })
  }

  logOut() {
    return this.auth.signOut();
  }

}
