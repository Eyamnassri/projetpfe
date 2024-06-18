import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CachierchargeService {
urlApi="http://127.0.0.1:3000"
  constructor(private http:HttpClient) { 

  }
  creatCahierCharge(CahierCharge:any):Observable<[any]>{
    return this.http.post(this.urlApi+"/specifications/create-specification",CahierCharge) as Observable<any>
   }

   getCahierCharge():Observable<any>{
    return this.http.get(this.urlApi+"/specifications/list-specification") as Observable<any>
   }
  
  getCahierChargeById(id:number):Observable<any>{
   return this.http.get(this.urlApi+"/specifications/"+JSON.stringify(id)) as Observable<any>
  }
   PatchCahierCharge(id:number,specification:any ):Observable<[any]>{
    return this.http.patch<any>("http://127.0.0.1:3000/specifications/update-specification/"+JSON.stringify(id),specification) as Observable<any>
   }
   DeleteCahierChargeId(id:number){
    return this.http.delete(this.urlApi+"/specifications/"+ JSON.stringify(id))
   }
  }

