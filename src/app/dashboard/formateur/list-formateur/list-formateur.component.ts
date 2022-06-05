import { Component, OnInit } from '@angular/core';
import { ParticipantService } from 'src/app/services/participant.service';
import { FormateurService } from 'src/app/services/formateur.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-formateur',
  templateUrl: './list-formateur.component.html',
  styleUrls: ['./list-formateur.component.scss']
})
export class ListFormateurComponent implements OnInit {

  formateur:any=[]
  role: string | null;
  constructor(private toast:ToastrService, private formateurService:FormateurService) { }

  ngOnInit(): void {
    this.role=localStorage.getItem('role')
    this.getAllFormateur()
  }
getAllFormateur(){
  this.formateurService.getAllFormateur().subscribe(res=>{
    console.log(res);
    
    this.formateur=res
  })
}
delete(id:any){
  this.formateurService.deleteFormateur(id).subscribe(res=>{
    this.toast.success("Formateur supprimé avec succe",'Notificatoion')
    this.getAllFormateur()
  })

}
}
