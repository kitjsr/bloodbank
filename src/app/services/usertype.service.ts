import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/usertype';
@Injectable({
  providedIn: 'root'
})
export class UsertypeService {

  constructor(private http: HttpClient) { }

  
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  
}






