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
  newProyect: string = "Holi";
  linkUser: string = "";
  constructor(private _firebaseService: FirestoreService) { }

  ngOnInit(): void {
    this.getListUsers();
    this._firebaseService.getAddProject().subscribe(data => {
      
      const asociateUser = this.proyects.filter((e: any) =>  e.id === data[0]);
      console.log("este es el PROYECTO",this.newProyect, "   -----  ", data,asociateUser, 'asociado\n ');
      this.newProyect = asociateUser[0].id;
      console.log(asociateUser[0].id);
      this.selectProyect = data[0];
      setTimeout(() => {
        if (data[1] == 'update') {
          this.editProyect(this.selectProyect); 
        } else {
          this.deleteProyect(this.selectProyect); 
        }
      }, 10);
    });

    this._firebaseService.getAddUsers().subscribe(data => {
      console.log('\n\nAqui deberia mostrar los usuarios ',data[0].id);
      this.linkUser = data[0].id;
      const asociateProyect = this.proyects.filter((e: any) =>  e.nombre === data[0])
      console.log("USUARIO ASOCIADOOOO",this.linkUser)
      setTimeout(() => {
        if (data[1] == 'update') {
          this.editUser(this.linkUser);
        } else {
          this.deleteUser(this.linkUser);
        }
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

  /* updateUser(user: any){
    this._firebaseService.addUsers(user);
  }
 */
  editProyect(id: string){
    console.log("id a actualizar", id)
    this._firebaseService.saveProyect(id, this.linkUser)
    .then(() => {

    })
  }

  editUser(id: string){
    console.log("id usuario a actualizar",id);
    this._firebaseService.editUser(id, this.newProyect)
    .then(() => {

    })
  }

  deleteProyect(id: string){
    console.log("id a actualizar", id)
    this._firebaseService.deleteProyect(id, this.linkUser)
    .then(() => {

    })
  }

  deleteUser(id: string){
    console.log("id usuario a actualizar",id);
    this._firebaseService.deleteUser(id, this.newProyect)
    .then(() => {

    })
  }

}



