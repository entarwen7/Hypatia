import { Component, OnInit } from '@angular/core';
import { StudentsAPIService } from 'src/app/shared/services/students-api.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; // Todavía no lo usamos

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  students! : any;

  constructor(private serviceApi:StudentsAPIService) {
    this.downloadPDF()
  }

  ngOnInit(): void {
    this.students = this.serviceApi.getData()
  }

  public downloadPDF(): void {
    const doc = new jsPDF();

    doc.text('Hello world!', 10, 10);
    doc.save('hello-world.pdf');
  }

}
