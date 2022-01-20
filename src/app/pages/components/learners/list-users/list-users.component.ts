import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/shared/services/firebase-Service/firestore.service';

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

  constructor(private _firebaseService: FirestoreService) { }

  ngOnInit(): void {
    //this._firebaseService.proyectos = this.proyects.estudiantes
    this.getListUsers();
  }

  getListUsers(){
    this._firebaseService.getLearners().subscribe(doc => {

      this.listUsers = [];

      doc.forEach((element: any) => {
        this.proyectsXUser = [];
        element.payload.doc.data().proyecto.forEach((e: any) => {
          e.get().then((data: any)=> console.log("snapshot",data.data()));
          const intersection = this.proyects.filter((ele: any) =>  ele.id === e.id);
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
