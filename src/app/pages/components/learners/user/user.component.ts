import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/shared/services/firebase-Service/firestore.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() estudiante: any;
  @Input() bifurcation:any;

  isVisible: boolean= false;
  isVisibleDelete: boolean= false;
  targetvalue:any;

  constructor(private _firebaseService: FirestoreService) {
  }


  ngOnInit(): void {
  }

  showSelect(info: boolean){
    this.isVisible = info;
  }

  showSelectDelete(info: boolean){
    this.isVisibleDelete = info;
  }

  addProject(event:any, name: any){
    this.targetvalue = event.target.value;
    console.log("Emite este valor", this.targetvalue);
    this._firebaseService.addProject(this.targetvalue, name);
  }

  editLearner(estudiante: any, name: string){
    console.info("Emite este estudiante", estudiante);
    this._firebaseService.addUsers(estudiante, name);
  }

  onClick(estudiante: any){
    this._firebaseService.user = estudiante
    //this._firebaseService.getCurrentStudent$(estudiante.id)
    //console.log('estudiante: ', estudiante)
  }

}
