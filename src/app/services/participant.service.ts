import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ParticipantService { 

  API_URI = 'http://localhost:3000/api/participant';
    constructor(private http: HttpClient) { }
 

    getAllParticipant( ){
  return this.http.get<any>(`${this.API_URI}/getAllParticipant`)
}
addParticipant(resource:any){
  return this.http.post(`${this.API_URI}/addParticipant`,resource);
}
deleteParticipant(id:any){
  return this.http.delete(`${this.API_URI}/deleteParticipant/${id}`); 
}

updateParticipant(id:any,resource:any){
  return this.http.put(`${this.API_URI}/updateParticipant/${id}`,resource); 
}
getParticipant(id:any){
  return this.http.get(`${this.API_URI}/getParticipant/${id}`); 
}
 
   
}