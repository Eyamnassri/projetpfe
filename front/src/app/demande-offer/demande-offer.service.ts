import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppelOffreService {
  private apiUrl = 'http://localhost:3000/appel-offer';  // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  createAppelOffre(dto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-appel-offer`, dto);
  }

  getAllAppelOffre(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/list-appel-offer`);
  }

  getAppelOffreById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/appel-offer/${id}`);
  }

  updateAppelOffre(id: number, dto: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/update-offer/${id}`, dto);
  }

  deleteAppelOffre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete-offer/${id}`);
  }
}
