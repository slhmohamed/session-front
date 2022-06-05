import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class CatalogueService { 

  API_URI = 'http://localhost:3000/api/cataloge';
    constructor(private http: HttpClient) { }
 

getAllCatalogue( ){
  return this.http.get<any>(`${this.API_URI}/getAllCatalogue`)
}
addCatalogue(resource:any){
  return this.http.post(`${this.API_URI}/addCataloge`,resource);
}
deleteCatalog(id:any){
  return this.http.delete(`${this.API_URI}/deleteCatalog/${id}`); 
}
   
}