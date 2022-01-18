import { Component, OnInit } from '@angular/core';
import { AuthServiceService  } from 'src/app/./shared/services/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //constructor(private Auth:AngularFireModule) { }
  constructor(private auth:AuthServiceService ) { }

  ngOnInit(): void {
  }

  async login(user: string, pass: string) {
    try {
      await this.auth.login(user, pass);
    } catch (e:any) {
      alert(e.message);
    }
  }
}
