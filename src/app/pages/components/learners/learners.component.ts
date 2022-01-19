import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/shared/services/firebase-Service/firestore.service';

@Component({
  selector: 'app-learners',
  templateUrl: './learners.component.html',
  styleUrls: ['./learners.component.scss']
})
export class LearnersComponent implements OnInit {
  showData: boolean = false;
  listProyects: any;

  constructor(private _firebaseService: FirestoreService) { }

  ngOnInit(): void {
    this.getProyects();
  }

  showTable(isShow: any){
    this.showData = isShow;
  }

  async getProyects() {
    try {      
      await this._firebaseService.getProyects().subscribe(doc => {
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
