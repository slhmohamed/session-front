import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class ThemeService { 

  API_URI = 'http://localhost:3000/api/theme';
    constructor(private http: HttpClient) { }
 

getAllTheme( ){
  return this.http.get<any>(`${this.API_URI}/getAllTheme`)
}
addTheme(resource:any){
  return this.http.post(`${this.API_URI}/addTheme`,resource);
}

deleteTheme(id:any){
  return this.http.delete(`${this.API_URI}/deleteTheme/`+id);
}
   
}