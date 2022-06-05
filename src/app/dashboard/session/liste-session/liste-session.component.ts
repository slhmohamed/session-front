import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SessionService } from './../../../services/session.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-liste-session',
  templateUrl: './liste-session.component.html',
  styleUrls: ['./liste-session.component.scss']
})
export class ListeSessionComponent implements OnInit {
session:any=[]
p: number = 1;
  role: string | null;
  constructor(private sessionService:SessionService) { }

  ngOnInit(): void {
    this. role=localStorage.getItem('role')
      
     
    this.getAllSession()
    
  }
  getAllSession(){
    this.sessionService.getAllSession().subscribe(res=>{
      console.log(res);
      this.session=res
      
    })
  }
  particpe(item:any){
 let user=localStorage.getItem('user')
 if(user){
 let clientId=JSON.parse(user).id
 console.log(clientId);
 
 this.sessionService.participeSession(item._id,clientId).subscribe(res=>{
  Swal.fire({
    icon: 'success',
    title: 'Merci...',
    text: 'Vous avez bien participé',
 
  })
 },(err)=>{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Vous Déja participé',
 
  })
 })
}
    
  }

}
