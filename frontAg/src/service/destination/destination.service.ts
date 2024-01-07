import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/api-config';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

 
  private apiUrl =API_BASE_URL+'destination'

  constructor(private http : HttpClient) { }

  
  addDestination(DestinationData: any): Observable<any> {
    const url = `${this.apiUrl}/ajouter`;
    console.log("Last destination Object")
    console.log(DestinationData)
    return this.http.post(url, DestinationData);
  }

  updateDestination(DestinationData: any): Observable<any> {
    const url = `${this.apiUrl}/modifier`;
    console.log(DestinationData)
    return this.http.put(url, DestinationData);
  }

  deleteDestination(idDestination: number): Observable<any> {
    const url = `${this.apiUrl}/supprimer/${idDestination}`;
    return this.http.delete(url);
  }

  getAllDestination(): Observable<any> {
    const url = `${this.apiUrl}/all`;
    return this.http.get(url);
  }

  getAllDestinationPage(pageNumber: number,sizePage:number): Observable<any> {      
    const url = `${this.apiUrl}/all/${pageNumber}/${sizePage}`;
    console.log("url: "+url);
    return this.http.get(url);
  }
}
