import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from '../../../../shared/services/firebase-Service/firestore.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() estudiante: any;
  //idCurrentUser: string = ''

  isVisible: boolean= false;

  constructor(private _firebaseService: FirestoreService) { }

  ngOnInit(): void {
    console.log('ids: ', this.estudiante)
  }

  showSelect(info: boolean){
    this.isVisible = info;
  }

 onClick(estudiante: any){
   this._firebaseService.user = estudiante
   //this._firebaseService.getCurrentStudent$(estudiante.id)
   //console.log('estudiante: ', estudiante)
 }

}
