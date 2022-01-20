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
  targetvalue:any;

  constructor(private _firebaseService: FirestoreService) { 
  }
  

  ngOnInit(): void {
    console.log("user bifur", this.bifurcation)
  }

  showSelect(info: boolean){
    this.isVisible = info;
  }
  
  addProject(event:any){
    this.targetvalue = event.target.value;
    console.log("select", this.targetvalue);
    this._firebaseService.addProject(this.targetvalue);
  }
    
}
