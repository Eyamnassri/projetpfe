import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtatService {
  baseUrl="http://localhost:3000/etat";
  constructor(private http: HttpClient) { }

  create(createEtatDto: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create-etat`, createEtatDto);
  }

  findAll(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-liste-etat`);
  }

  findOne(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/etat/${id}`);
  }

  update(id: number, updateEtatDto: any): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/etat-update/${id}`, updateEtatDto);
  }

  remove(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/etat-delete/${id}`);
  }
}
