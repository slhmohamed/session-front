import { Component, OnInit } from '@angular/core';
import { SocieteService } from './../../../services/socite.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liste-societe',
  templateUrl: './liste-societe.component.html',
  styleUrls: ['./liste-societe.component.scss']
})
export class ListeSocieteComponent implements OnInit {
socitie:any=[]
  constructor(private toast:ToastrService,private socitieService:SocieteService) { }

  ngOnInit(): void {
    this.getAllSocitie()
  }

  getAllSocitie(){
    this.socitieService.getAllSociete().subscribe(res=>{
      this.socitie=res
      console.log(res);
      
    })
  }

  delete(id:any){
    this.socitieService.deleteSociete(id).subscribe(res=>{
      this.toast.success("Socitie supprimé avec succe",'Notificatoion')
      this.getAllSocitie()
    })
  
  }

}
