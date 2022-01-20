import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/shared/services/firebase-Service/firestore.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  @Input() proyects: any = [];

  listUsers: any;
  listProyects: any;
  proyectsXUser: any;
  allProjects: any;
  bifurcation: any;
  idProyect: string | undefined;
  selectProyect: string = "";
  newProyect: string = "";
  linkUser: string = "";

  constructor(private _firebaseService: FirestoreService) { }

  ngOnInit(): void {
    this.getListUsers();
    this._firebaseService.getAddProject().subscribe(data => {
      console.log("Seleccione: ",data); //retorna datos del proyecto
      this.selectProyect = data;
      setTimeout(() => {
        this.editProyect(data); 
      }, 10);
    });

    this._firebaseService.getAddUsers().subscribe(data => {
      console.log("Aqui deberia mostrar los usuarios ",data);
      this.newProyect = this.selectProyect;
      this.linkUser = data.id;
      setTimeout(() => {
        this.editUser(data.id);
      }, 10);
    })
  }

  getListUsers() {
    this._firebaseService.getLearners().subscribe(doc => {

      this.listUsers = [];

      doc.forEach((element: any) => {
        this.proyectsXUser = [];

        element.payload.doc.data().proyecto.forEach((e: any) => {
          const intersection = this.proyects.filter((ele: any) => ele.id === e);
          this.bifurcation = this.proyects.filter((ele: any) => ele.id !== e.id);
          this.proyectsXUser.push(intersection);
        });

        this.listUsers.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
          proyecto: this.proyectsXUser
        });

      });
    })
  }

  updateUser(user: any){
    this._firebaseService.addUsers(user);
  }

  editProyect(id: string){
    console.log("id a actualizar", id)
    this._firebaseService.saveProyect(id, this.linkUser)
    .then(() => {

    })
  }

  editUser(id: string){
    console.log("id usuario a actualizar",id);
    this._firebaseService.editUser(id, this.selectProyect)
    .then(() => {

    })
  }
}



