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
  idProyect:string | undefined;
  selectProyect:string | undefined
  constructor(private _firebaseService: FirestoreService) { }
  
  ngOnInit(): void {
    this.getListUsers();
    this._firebaseService.getAddProject().subscribe(data=> {
    this.selectProyect = data;
    this.updateProyect(this.selectProyect);
    });
  }
  
  getListUsers(){
    this._firebaseService.getLearners().subscribe(doc => {
      
      this.listUsers = [];
      
      doc.forEach((element: any) => {
        this.proyectsXUser = [];
      
        element.payload.doc.data().proyecto.forEach((e: any) => {
          console.log("eeeee",e);
          const intersection = this.proyects.filter((ele: any) =>  ele.id === e);
          console.log(intersection);
          this.bifurcation= this.proyects.filter((ele: any) =>  ele.id !== e.id);
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
    updateProyect(id:any){
      this.listUsers.forEach((el:any) => {
        el.proyecto.map((e:any)=>{
          if (e[0] !== id) {
            el.push(this.selectProyect);
            console.log("ggggggggggggg",el);
          }else{
          this.getListUsers();
          } 
        })
     });
    this._firebaseService.saveProyect(id ,this.listUsers).then((res)=>{
      console.log("elll", res);
    })
    .catch((err)=>{
      console.log("algo anda mal",err);
      
    })
     }

    }

    

