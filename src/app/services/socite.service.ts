import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class SocieteService { 

  API_URI = 'http://localhost:3000/api/societe';
    constructor(private http: HttpClient) { }
 

getAllSociete( ){
  return this.http.get<any>(`${this.API_URI}/getAllSociete`)
}
addSocite(resource:any){
  return this.http.post(`${this.API_URI}/addSocitie`,resource);
}

deleteSociete(id:any){
  return this.http.delete(`${this.API_URI}/deleteSociete/${id}`); 
}
 
getSocitie(id:any){
  return this.http.get(`${this.API_URI}/getSocitie/${id}`); 

}

updateSocitie(id:any,resource:any){
  return this.http.put(`${this.API_URI}/updateSociete/${id}`,resource); 

}
   
}