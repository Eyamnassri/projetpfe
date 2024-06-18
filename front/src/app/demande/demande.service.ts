import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  urlApi="http://127.0.01:3000"

  constructor(private http:HttpClient) {

   }
   


   creatDemandes(demande:any):Observable<[any]>{
    return this.http.post("http://127.0.0.1:3000/demande/create-demande",demande) as Observable<any>
   }

   getALLDemandes():Observable<any>{
    return this.http.get(this.urlApi+"/demande/list-demande") as Observable<any>
   }
  
  getDemandeById(id:number):Observable<any>{
   return this.http.get(this.urlApi+"/demande/"+ JSON.stringify(id)) as Observable<any>
  }
   PatchDemandes(demande:any, id:number):Observable<[any]>{
    return this.http.patch(this.urlApi+"/demande/"+ JSON.stringify(id),demande) as Observable<any>
   }
   DeleteDemandeId(id:number){
    return this.http.delete(this.urlApi+"/demande/"+ JSON.stringify(id))
   }
   getEtatByDemande(id:number) :Observable<any>{
    return this.http.delete(this.urlApi+"/etat/etat-demande-id/"+ JSON.stringify(id))  as Observable<any>
   }
// }
// /demande/create-demande, POST} route +1ms
// [Nest] 3904  - 18/04/2024 17:45:40     LOG [RouterExplorer] Mapped {/demande/list-demande, GET} route +0ms
// [Nest] 3904  - 18/04/2024 17:45:40     LOG [RouterExplorer] Mapped {/demande/:id, GET} route +1ms
// [Nest] 3904  - 18/04/2024 17:45:40     LOG [RouterExplorer] Mapped {/demande/:id, PATCH} route +0ms
// [Nest] 3904  - 18/04/2024 17:45:40     LOG [RouterExplorer] Mapped {/demande/:id, DELETE} route +1ms
}