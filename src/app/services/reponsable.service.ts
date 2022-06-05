import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ResponsableService { 

  API_URI = 'http://localhost:3000/api/responsable';
    constructor(private http: HttpClient) { }
 

    getAllResponsable( ){
  return this.http.get<any>(`${this.API_URI}/getAllResponsable`)
}
addResponsable(resource:any){
  return this.http.post(`${this.API_URI}/addResponsable`,resource);
}
deleteResponsable(id:any){
  return this.http.delete(`${this.API_URI}/deleteResponsable/${id}`); 
}
updateResponsable(id:any,resource:any){
  return this.http.put(`${this.API_URI}/updateResponsable/${id}`,resource); 
}
getResponsable(id:any){
  return this.http.get(`${this.API_URI}/getResponsable/${id}`);   
}
}