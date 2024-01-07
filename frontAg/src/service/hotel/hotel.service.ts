import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/api-config';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
private apiUrl= API_BASE_URL+'hotel'
  constructor(private http: HttpClient) { }

  addHotel(HotelData: any): Observable<any> {
    const url = `${this.apiUrl}/ajouter`;
    console.log("Last hotel Object")
    console.log(HotelData)
    return this.http.post(url, HotelData);
  }

  updateHotel(HotelData: any): Observable<any> {
    const url = `${this.apiUrl}/modifier`;
    console.log(HotelData)
    return this.http.put(url, HotelData);
  }

  deleteHotel(idHotel: number): Observable<any> {
    const url = `${this.apiUrl}/supprimer/${idHotel}`;
    return this.http.delete(url);
  }


  getAllHotel(pageNumber: number,sizePage:number): Observable<any> {

    
    const url = `${this.apiUrl}/all/${pageNumber}/${sizePage}`;
    console.log("url: "+url);
    return this.http.get(url);
  }


  getAllHotelList(): Observable<any> {

    
    const url = `${this.apiUrl}/all`;
    console.log("url: "+url);
    return this.http.get(url);
  }
}
