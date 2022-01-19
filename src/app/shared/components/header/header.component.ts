import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../../pages/components/sidenav/sidenav.component';
import { Router } from '@angular/router';

import { AuthServiceService } from 'src/app/./shared/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.auth.logOut()
    this.router.navigate(['login']);
  }

}
