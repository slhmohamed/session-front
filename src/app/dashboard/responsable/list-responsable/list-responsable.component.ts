import { Component, OnInit } from '@angular/core';
import { ResponsableService } from './../../../services/reponsable.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-responsable',
  templateUrl: './list-responsable.component.html',
  styleUrls: ['./list-responsable.component.scss']
})
export class ListResponsableComponent implements OnInit {

  responsable:any=[]
  constructor(private toast:ToastrService,private responsableService:ResponsableService) { }

  ngOnInit(): void {
    this.getAllResponsable()
  }
getAllResponsable(){
  this.responsableService.getAllResponsable().subscribe(res=>{
    console.log(res);
    
    this.responsable=res
  })
}
delete(id:any){
  this.responsableService.deleteResponsable(id).subscribe(res=>{
            this.toast.success("Responsable suprimé avec succe", 'Notificatoion')

     this.getAllResponsable()
  })

}
}
