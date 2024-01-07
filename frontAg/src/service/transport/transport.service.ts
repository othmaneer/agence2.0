import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/api-config';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  private apiUrl =API_BASE_URL+'transport'

  constructor(private http : HttpClient) { }

  addTransport(TransportData: any): Observable<any> {
    const url = `${this.apiUrl}/ajouter`;
    console.log("Last transport Object")
    console.log(TransportData)
    return this.http.post(url, TransportData);
  }

  updateTransport(TransportData: any): Observable<any> {
    const url = `${this.apiUrl}/modifier`;
    console.log(TransportData)
    return this.http.put(url, TransportData);
  }

  deleteTransport(idTransport: number): Observable<any> {
    const url = `${this.apiUrl}/supprimer/${idTransport}`;
    return this.http.delete(url);
  }

  getAllTransport(): Observable<any> {
    const url = `${this.apiUrl}/all`;
    return this.http.get(url);
  }

  getAllTransportPage(pageNumber: number,sizePage:number): Observable<any> {      
    const url = `${this.apiUrl}/all/${pageNumber}/${sizePage}`;
    console.log("url: "+url);
    return this.http.get(url);
  }
}
