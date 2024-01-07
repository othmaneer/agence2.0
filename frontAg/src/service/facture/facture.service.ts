import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/api-config';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private apiUrl = API_BASE_URL+'facture'

  constructor(private http :HttpClient) { }

  addFacture(FactureData: any): Observable<any> {
    const url = `${this.apiUrl}/ajouter`;
    console.log("Last facture Object")
    console.log(FactureData)
    return this.http.post(url, FactureData);
  }

  updateFacture(FactureData: any): Observable<any> {
    const url = `${this.apiUrl}/modifier`;
    console.log(FactureData)
    return this.http.put(url, FactureData);
  }

  deleteFacture(idFacture: number): Observable<any> {
    const url = `${this.apiUrl}/supprimer/${idFacture}`;
    return this.http.delete(url);
  }

  getAllFacture(): Observable<any> {
    const url = `${this.apiUrl}/all`;
    return this.http.get(url);
  }

  getAllFacturePage(pageNumber: number,sizePage:number): Observable<any> {

    
    const url = `${this.apiUrl}/all/${pageNumber}/${sizePage}`;
    console.log("url FACTURE: "+url);
    return this.http.get(url);
  }

}
