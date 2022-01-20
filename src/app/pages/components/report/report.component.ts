import { Component, OnInit } from '@angular/core';
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
  proyects: any
  dateFilterToPipe: any = ''


  constructor(private auth: AuthServiceService,
              private router: Router,
              private _firebaseService: FirestoreService) {  }



  ngOnInit(): void {
    this._firebaseService.proyectos.subscribe((res: any) => {
      this.proyects = res
    })

    //this.proyects.subscribe((res: any) => console.log('poy: ', res))
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
