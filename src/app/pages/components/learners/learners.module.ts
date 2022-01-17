import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnersRoutingModule } from './learners-routing.module';
import { LearnersComponent } from './learners.component';


@NgModule({
  declarations: [
    LearnersComponent
  ],
  imports: [
    CommonModule,
    LearnersRoutingModule
  ]
})
export class LearnersModule { }
