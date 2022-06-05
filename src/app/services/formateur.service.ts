import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class FormateurService { 

  API_URI = 'http://localhost:3000/api/formateur';
    constructor(private http: HttpClient) { }
 

    getAllFormateur( ){
  return this.http.get<any>(`${this.API_URI}/getAllFormateur`)
}
addFormateur(resource:any){
  return this.http.post(`${this.API_URI}/addFormateur`,resource);
}
deleteFormateur(id:any){
  return this.http.delete(`${this.API_URI}/deleteFormateur/${id}`); 
}

updateFormateur(id:any,resource:any){
  return this.http.put(`${this.API_URI}/updateFormateur/${id}`,resource); 
}
getFormateur(id:any){
  return this.http.get(`${this.API_URI}/getFormateur/${id}`); 
}
   
}