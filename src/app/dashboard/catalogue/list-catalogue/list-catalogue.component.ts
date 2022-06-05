import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
 import { CatalogueService } from './../../../services/catalogue.service';

@Component({
  selector: 'app-list-catalogue',
  templateUrl: './list-catalogue.component.html',
  styleUrls: ['./list-catalogue.component.scss']
})
export class ListCatalogueComponent implements OnInit {
  cataloge:any=[]
  role: string | null;
  constructor(private toast:ToastrService,private catalogeService:CatalogueService) { }

  ngOnInit(): void {
    this.role=localStorage.getItem('role')
    this.getAllCataloge()
  }
  getAllCataloge(){
    this.catalogeService.getAllCatalogue().subscribe(res=>{
      this.cataloge=res
      console.log(res);
      
    })
  }

  delete(id:any){
    this.catalogeService.deleteCatalog(id).subscribe(res=>{
      this.getAllCataloge()
      this.toast.success("Cataloge supprimé avec succe",'Notificatoion')
    })
  }

}