import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsAPIService {
// path es URL del API
 private path = 'http://169.57.99.145:32439/api/registroavancecurso/get-avances/:61d612f42654423aa446c3f3/:61ae50571fd2a664908d71b4/:2022-1-3'
 student$!: Observable<any>

 constructor(private http: HttpClient) { }

 getData(){
   return this.http.get(this.path)
 }

}
