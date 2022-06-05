import { Component, OnInit } from '@angular/core';
import { ThemeService } from './../../../services/theme.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-theme',
  templateUrl: './list-theme.component.html',
  styleUrls: ['./list-theme.component.scss']
})
export class ListThemeComponent implements OnInit {
  theme:any=[]
  role: string | null;
  constructor(private toast:ToastrService ,private themeService:ThemeService) { }

  ngOnInit(): void {
    this.role=localStorage.getItem('role')
   this.getAlltheme()
  }

  getAlltheme(){
    this.themeService.getAllTheme().subscribe(res=>{
      this.theme=res
      console.log(res);
      
    })
  }

  delete(id:any){
    this.themeService.deleteTheme(id).subscribe(res=>{
      this.toast.success("Théme supprimé avec succe",'Notificatoion')
      this.getAlltheme()
    })
  }

}