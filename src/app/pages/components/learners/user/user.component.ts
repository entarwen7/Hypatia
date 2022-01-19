import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() estudiante: any;

  isVisible: boolean= false;

  constructor() { }

  ngOnInit(): void {
  }

  showSelect(info: boolean){
    this.isVisible = info;
  }

}
