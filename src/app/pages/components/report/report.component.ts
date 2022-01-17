import { Component, OnInit } from '@angular/core';
import { StudentsAPIService } from 'src/app/shared/services/students-api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  students! : any;

  constructor(private serviceApi:StudentsAPIService) { }

  ngOnInit(): void {
    this.students = this.serviceApi.getData()
  }

}
