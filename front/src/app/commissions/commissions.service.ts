import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommissionsService {
  urlApi="http://127.0.0.1:3000"
  constructor(private http:HttpClient) { 
    
}
creatCommissions(Commissions:any):Observable<[any]>{
  return this.http.post(this.urlApi+"/commisions/create-commission",Commissions) as Observable<any>
 }

 getCommissions():Observable<any>{
  return this.http.get(this.urlApi+"/commisions/commission-list") as Observable<any>
 }

getCommissionsById(id:number):Observable<any>{
 return this.http.get(this.urlApi+"/commisions/commission/"+ JSON.stringify(id)) as Observable<any>
}
 PatchCommissions(id:number,Commissions:any):Observable<[any]>{
  return this.http.patch<any>("http://127.0.0.1:3000/commisions/update-commission/"+ JSON.stringify(id),Commissions) as Observable<any>
 }
 DeleteCommissionsId(id:number){
  return this.http.delete(this.urlApi+"/commisions/delete-commission/"+ JSON.stringify(id))
 }
}
