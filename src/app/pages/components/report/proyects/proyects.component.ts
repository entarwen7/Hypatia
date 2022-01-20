import { Component, OnInit, Input } from '@angular/core';

import { FirestoreService } from 'src/app/shared/services/firebase-Service/firestore.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  @Input() item!:any;
  dateFilterToPipe!: any
  proyectos: any[] = []

  constructor(private _firebaseService: FirestoreService) { }

  ngOnInit(): void {
    for(let el of this.item.estudiantes){
      if(el === this._firebaseService.user.id){
          this.proyectos.push(this.item.nombre)
        }
    }
  }

}
