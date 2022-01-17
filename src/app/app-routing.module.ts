import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./pages/components/login/login.module').then(m => m.LoginModule) },
{ path: 'learners', loadChildren: () => import('./pages/components/learners/learners.module').then(m => m.LearnersModule) },
{ path: 'report', loadChildren: () => import('./pages/components/report/report.module').then(m => m.ReportModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
