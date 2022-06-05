import { Component, OnInit } from '@angular/core';
import { ParticipantService } from 'src/app/services/participant.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liste-participant',
  templateUrl: './liste-participant.component.html',
  styleUrls: ['./liste-participant.component.scss']
})
export class ListeParticipantComponent implements OnInit {
participant:any=[]
  constructor(private toast:ToastrService,private participantService:ParticipantService) { }

  ngOnInit(): void {
    this.getAllParticipant()
  }
getAllParticipant(){
  this.participantService.getAllParticipant().subscribe(res=>{
    console.log(res)
    this.participant=res.data
  })
}
delete(id:any){
  this.participantService.deleteParticipant(id).subscribe(res=>{
    this.toast.success("Participant supprimé avec succe",'Notificatoion')
     this.getAllParticipant()
  })

}
}
