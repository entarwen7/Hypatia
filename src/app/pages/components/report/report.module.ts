import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    NgCircleProgressModule.forRoot({
      "space": 5,
      "showBackground": false,
      "unitsFontSize": "30",
      "titleFontSize": "35",
      "responsive": true})
    ]
})
export class ReportModule { }
