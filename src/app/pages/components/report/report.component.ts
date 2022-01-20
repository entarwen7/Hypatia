import { Component, OnInit } from '@angular/core';
import { StudentsAPIService } from 'src/app/shared/services/students-api.service';
import { Router } from '@angular/router';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { AuthServiceService } from 'src/app/./shared/services/auth-service.service';
import { FirestoreService } from 'src/app/shared/services/firebase-Service/firestore.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  students! : any;
  learners$ = this._firebaseService.getCurrentStudent$()
  path$ = this._firebaseService.paths
  user = this._firebaseService.user
  proyects = this._firebaseService.proyectos
  dateFilterToPipe: any = ''

  constructor(private serviceApi:StudentsAPIService,
              private auth: AuthServiceService,
              private router: Router,
              private _firebaseService: FirestoreService) {  }



  ngOnInit(): void {
    this.learners$.subscribe((res: any) => console.log('user: ', res.proyecto))

    this.proyects.subscribe((res: any) => console.log('poy: ', res))
    //console.log('id proy: ', this.proyects)
    //console.log('id user: ', this.learners$)
    this.auth.verification().subscribe(auth=>{
      if(!auth){
        this.router.navigate(['login']);
       }
    })
    this.students = this._firebaseService.user
  }

  public downloadPDF() {
    // Extraemos el
    const pdfData : any = document.getElementById('pdf');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(pdfData, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_studentName.pdf`);
    });
  }

  onClick(){
    this.downloadPDF()
  }

}
