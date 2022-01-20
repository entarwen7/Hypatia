import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/shared/services/firebase-Service/firestore.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  @Input() proyects:any = [];

  listUsers: any;
  listProyects: any;
  proyectsXUser: any;
  allProjects:any;
  bifurcation:any;
  
  constructor(private _firebaseService: FirestoreService) { }
  
  ngOnInit(): void {
    this.getListUsers();
    // this.getProjetc();
    this._firebaseService.getAddProject().subscribe(data=> console.log("ver data",data));
  }
  
  getListUsers(){
    this._firebaseService.getLearners().subscribe(doc => {
      
      this.listUsers = [];
      
      doc.forEach((element: any) => {
        this.proyectsXUser = [];
      
        element.payload.doc.data().proyecto.forEach((e: any) => {
          e.get().then((data: any)=> console.log("snapshot",data.data()));
          const intersection = this.proyects.filter((ele: any) =>  ele.id === e.id);
          this.bifurcation= this.proyects.filter((ele: any) =>  ele.id !== e.id);
          console.log("bifurcation",this.bifurcation)
          this.proyectsXUser.push(
            intersection.map((i:any) => i.nombre)

            );
          });
          
          this.listUsers.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data(),
            proyecto: this.proyectsXUser
          });   
        });
      })
    }


    
    
}
