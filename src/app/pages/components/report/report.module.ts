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
      "radius": 60,
      "space": 5,
      "outerStrokeWidth": 5,
      "outerStrokeColor": "#76C2AF",
      "innerStrokeColor": "#ffffff",
      "innerStrokeWidth": 6,
      "imageSrc": "assets/img/user.svg",
      "imageHeight": 105,
      "imageWidth": 105,
      "showImage": true,
      "showBackground": false})
    ]
})
export class ReportModule { }
