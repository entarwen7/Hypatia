import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LearnersComponent } from '../pages/components/learners/learners.component';
import { LearnersModule } from '../pages/components/learners/learners.module';



@NgModule({
  declarations: [
    HeaderComponent

  ],
  imports: [
    CommonModule,
    LearnersModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
