import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnersComponent } from './learners.component';

const routes: Routes = [
  { path: '',
  component: LearnersComponent,
  children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'login', component: LearnersComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnersRoutingModule { }
