import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class SessionService { 

  API_URI = 'http://localhost:3000/api/session';
    constructor(private http: HttpClient) { }
 

    getAllSession( ){
  return this.http.get<any>(`${this.API_URI}/getAllSession`)
}
addSession(resource:any){
  return this.http.post(`${this.API_URI}/addSession`,resource);
}
deleteSession(id:any){
  return this.http.delete(`${this.API_URI}/deleteSession/${id}`); 
} 
participeSession(id:any,clientid:any){
  let obj={
    clientId:clientid
  }
 
  
  return this.http.put(`${this.API_URI}/participe/${id}`,obj); 
} 

getSession(id:any){

  return this.http.get(`${this.API_URI}/getSession/${id}`)
}
   
}