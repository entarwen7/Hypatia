import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { SharedModule } from '../../../shared/shared.module';
import { ProyectsComponent } from './proyects/proyects.component';


@NgModule({
  declarations: [
    ReportComponent,
    ProyectsComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    NgCircleProgressModule.forRoot({
      "space": 5,
      "showBackground": false,
      "unitsFontSize": "30",
      "titleFontSize": "35",
      "responsive": true}),
    SharedModule
  ],

})
export class ReportModule { }
