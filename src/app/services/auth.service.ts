import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
  
@Injectable({
  providedIn: 'root'
})
export class AuthService { 

    API_URI = 'http://localhost:3000/api/auth';
    constructor(private http: HttpClient) { }
  
   
    login(user: any): any {
      return this.http.post<any>(`${this.API_URI}/signin`,user)
      .pipe(map(user => {
             localStorage.setItem('user', JSON.stringify(user));
             return user;
           }));
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