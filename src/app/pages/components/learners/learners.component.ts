import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceService } from 'src/app/./shared/services/auth-service.service';
import { FirestoreService } from 'src/app/shared/services/firebase-Service/firestore.service';


@Component({
  selector: 'app-learners',
  templateUrl: './learners.component.html',
  styleUrls: ['./learners.component.scss']
})
export class LearnersComponent implements OnInit {
  showData: boolean = false;
  listProyects: any;

  constructor(private _firebaseService: FirestoreService, private auth: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getProyects();
    this.auth.verification().subscribe(auth => {
      if (!auth) {
        this.router.navigate(['login']);
      }
    })
  }

  showTable(isShow: any) {
    this.showData = isShow;
  }

  getProyects() {
    try {
      this._firebaseService.getProyects().subscribe(doc => {
        console.log(doc[0].payload.doc.id);
        this.listProyects = [];
        doc.forEach((element: any) => {
          this.listProyects.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        return this.listProyects;
      });
    } catch (error) {
    }
  }

}
