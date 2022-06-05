import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UserService { 

  API_URI = 'http://localhost:3003/api/user';
    constructor(private http: HttpClient) { }
  
    signup(data:any): Observable<any> {
      return this.http.post<any>(`${this.API_URI}/register`,data)
    }
    login(user: any): Observable<any> {
      return this.http.post<any>(`${this.API_URI}/login`,user)
      .pipe(map(user => {
             localStorage.setItem('user', JSON.stringify(user));
             return user;
           }));
}

getFreelancer(id:any){
  return this.http.get<any>(`${this.API_URI}/getSingleFreelancer/`+id)
}
updateUser(id:any,resource:any){
  return this.http.put(`${this.API_URI}/updateUser/${id}`,resource);
}
  //isLogn:user logeed in or not
  public isLoggedIn(){
    let token=localStorage.getItem('user')
    if(token==undefined||token==''||token==null){
      return false;
    }
    else{
      return true;
    }
  }
 
}