import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnersRoutingModule } from './learners-routing.module';
import { LearnersComponent } from './learners.component';
import { SidenavComponent } from '../sidenav/sidenav.component';


@NgModule({
  declarations: [
    LearnersComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    LearnersRoutingModule,
    
  ],
  exports:[
    SidenavComponent
  ]
})
export class LearnersModule { }
