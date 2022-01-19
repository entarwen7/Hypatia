import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { LearnersModule } from '../pages/components/learners/learners.module';



@NgModule({
  declarations: [
    HeaderComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    LearnersModule
  ],
  exports: [
    HeaderComponent,
    RouterModule
  ]
})
export class SharedModule { }
