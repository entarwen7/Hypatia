import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnersRoutingModule } from './learners-routing.module';
import { LearnersComponent } from './learners.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    LearnersComponent,
    SidenavComponent,
    ListUsersComponent,
    UserComponent
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
