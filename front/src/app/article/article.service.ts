import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor( private http:HttpClient) { 

  }
  getALLArticle():Observable<[any]>{
    return this.http.get('http://127.0.0.1:3000/article/list-articlee') as Observable<any>
  }
createArtilce(artilce:any):Observable<any>{
  return this.http.post<any>('http://127.0.0.1:3000/article/create-article',artilce) as Observable<any>
}
updateArtilce(artilce:any, id:number):Observable<any>{
  return this.http.patch<any>('http://127.0.0.1:3000/article/'+JSON.stringify(id),artilce) as Observable<any>
}
DeleteArticle(id:number):Observable<any>{

  return this.http.delete('http://127.0.0.1:3000/article/'+JSON.stringify(id)) as Observable<any>
}
}
