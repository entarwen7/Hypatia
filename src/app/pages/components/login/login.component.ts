import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/./shared/services/auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  setRoles: any;

  constructor(private auth: AuthServiceService, private fb: FormBuilder, private router: Router) {
  }
  loginForm!: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;

  ngOnInit(): void {
    this.initForm();
  }

  async login(user: string, pass: string) {
    try {
      await this.auth.login(user, pass);
    } catch (e: any) {
      alert(e.message);
    }
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(this.isEmail)]],
      pass: ["", [Validators.required]],

    })
  }
  get email() { return this.loginForm.get('email') };
  get pass() { return this.loginForm.get('pass') };

  roles(id: string) {
    this.auth.roles(id)
      .then((res: any) => {
        console.log("respuesta rol", res);
      })
      .catch((err) => {
        console.log("Algo anda mal", err);
      })
  }

  onSubmit() {

    this.login(this.loginForm.value.email, this.loginForm.value.pass);
    this.auth.verification().subscribe(auth=>{
      if(auth){
        this.roles(auth.uid)
        console.log(auth.uid)
        this.router.navigate(['learners']);
       }else{
         console.log('no hay usuario activo')
       }
    })
    /*
    console.log('userid:', this.auth.id)

    if (this.auth.id !== null) {
      this.roles()
      this.router.navigate(['learners']);
    }
    */
  }
}
