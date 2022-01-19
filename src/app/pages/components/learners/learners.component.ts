import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceService } from 'src/app/./shared/services/auth-service.service';

@Component({
  selector: 'app-learners',
  templateUrl: './learners.component.html',
  styleUrls: ['./learners.component.scss']
})
export class LearnersComponent implements OnInit {

  constructor(private auth: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.auth.logOut()
    this.router.navigate(['login']);
  }

}
