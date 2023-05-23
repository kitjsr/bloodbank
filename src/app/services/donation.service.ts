import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/donations';
@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
  getAllDonation(): Observable<any> {
    return this.http.get(`${baseUrl}/donation/`);
  }
  getAllDonationSingleDonar(email: string): Observable<any> {
    return this.http.get(`${baseUrl}/donation/findAllDonationsSingleUser/${email}`);
  }


  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  // findByName(name: any): Observable<any> {
  //   return this.http.get(`${baseUrl}?name=${name}`);
  // }
}





