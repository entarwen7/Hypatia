import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { strict } from 'assert';
// import { stringify } from 'querystring';
// import { LoginComponent } from 'src/app/pages/components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private auth:AngularFireAuth) {}

  login(user: string, pass: string) {
    return this.auth.signInWithEmailAndPassword(user, pass);
   }
}
