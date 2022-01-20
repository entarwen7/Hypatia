import { Component, OnInit } from '@angular/core';
// import { SidenavComponent } from '../../../pages/components/sidenav/sidenav.component';
import { Router } from '@angular/router';

import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean = false

  constructor(private auth: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.auth.verification().subscribe(auth=>{
      if(auth){
        this.isLogin = true
       }else{
         console.log('no hay usuario activo')
       }
    })
  }

  onClick(){
    this.isLogin = false
    this.auth.logOut()
    this.router.navigate(['login']);
  }

}
