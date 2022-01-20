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

  constructor(private _firebaseService: FirestoreService) { }

  ngOnInit(): void {
    this.dateFilterToPipe = this._firebaseService.user.id
    console.log('compmnete nuevo:', this.item)
  }

}
