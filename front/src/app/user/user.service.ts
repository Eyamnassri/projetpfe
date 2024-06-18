import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 urlAPI='http://localhost:3000/'
  constructor(private http: HttpClient) { }
  login(user:Login): Observable<any> {
    return this.http.post<Login>(this.urlAPI+'user/login',user)
}
addUser(user:User):Observable<User>
{
  return this.http.post<any>(this.urlAPI+'user/register',user) as Observable<User>
}

getUserAll():Observable<any>{
  return this.http.get(this.urlAPI+"user") as Observable<any>
 }

getUserById(id:number):Observable<any>{
 return this.http.get(this.urlAPI+"user/"+ JSON.stringify(id)) as Observable<any>
}
 PatchUser(id:number,User:any):Observable<[any]>{
  return this.http.patch<any>("http://127.0.0.1:3000/user/"+ JSON.stringify(id),User) as Observable<any>
 }
 DeleteUserId(id:number){
  return this.http.delete(this.urlAPI+"user/"+ JSON.stringify(id))
 }
}

