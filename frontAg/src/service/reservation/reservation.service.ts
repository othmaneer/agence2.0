import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/api-config';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl= API_BASE_URL+'reservation'
  constructor(private http : HttpClient) { }

  addReservation(ReservationData: any): Observable<any> {
    const url = `${this.apiUrl}/ajouter`;
    console.log("Last Reservation Object")
    console.log(ReservationData)
    return this.http.post(url, ReservationData);
  }

  updateReservation(ReservationData: any): Observable<any> {
    const url = `${this.apiUrl}/modifier`;
    console.log(ReservationData)
    return this.http.put(url, ReservationData);
  }

  deleteReservation(idReservation: number): Observable<any> {
    const url = `${this.apiUrl}/supprimer/${idReservation}`;
    return this.http.delete(url);
  }

  getAllReservation(): Observable<any> {
    const url = `${this.apiUrl}/all`;
    return this.http.get(url);
  }
  getAllReservationPage(pageNumber: number,sizePage:number): Observable<any> {      
    const url = `${this.apiUrl}/all/${pageNumber}/${sizePage}`;
    console.log("url: "+url);
    return this.http.get(url);
  }
}
