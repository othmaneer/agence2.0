import { Injectable } from '@angular/core';
import { API_BASE_URL } from 'src/api-config'; 
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl= API_BASE_URL+'client'

  constructor(private http: HttpClient) { }

  addClient(ClientData: any): Observable<any> {
    const url = `${this.apiUrl}/ajouter`;
    console.log(ClientData)
    return this.http.post(url, ClientData);
  }

  updateClient(ClientData: any): Observable<any> {
    const url = `${this.apiUrl}/modifier`;
    console.log(ClientData)
    return this.http.put(url, ClientData);
  }

  deleteClient(idCient: number): Observable<any> {
    const url = `${this.apiUrl}/supprimer/${idCient}`;
    return this.http.delete(url);
  }
  getAllClient(pageNumber: number,sizePage:number): Observable<any> {

    
    const url = `${this.apiUrl}/all/${pageNumber}/${sizePage}`;
    console.log("url: "+url);
    return this.http.get(url);
  }

  getAllClientList(): Observable<any> {

    
    const url = `${this.apiUrl}/all`;
    console.log("url: "+url);
    return this.http.get(url);
  }

  totalClient(){
    const url = `${this.apiUrl}/nb`;
    return this.http.get(url);
  }
}
