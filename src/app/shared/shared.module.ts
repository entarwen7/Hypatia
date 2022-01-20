import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { LearnersModule } from '../pages/components/learners/learners.module';
import { FilterProyectPipe } from './pipes/filter-proyect.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FilterProyectPipe

  ],
  imports: [
    CommonModule,
    RouterModule,
    LearnersModule
  ],
  exports: [
    HeaderComponent,
    RouterModule,
    FilterProyectPipe
  ]
})
export class SharedModule { }
