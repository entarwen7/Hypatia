import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsAPIService {
// path es URL del API
 private path = 'https://61ce31857067f600179c5dec.mockapi.io/menu'
 student$!: Observable<any>

 constructor(private http: HttpClient) { }

 getData(){
   return this.http.get(this.path)
 }

}
