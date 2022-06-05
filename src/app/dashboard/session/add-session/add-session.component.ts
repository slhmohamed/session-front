import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormateurService } from 'src/app/services/formateur.service';
import { SessionService } from 'src/app/services/session.service';
import { ThemeService } from 'src/app/services/theme.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent implements OnInit {
  sessionForm: FormGroup;
  submitted = false;
  theme:any=[]
  formateur:any=[]

  constructor(private toast:ToastrService,private formBuilder: FormBuilder,private formateurService:FormateurService,private themeService:ThemeService,private sessionService:SessionService,) { }

  ngOnInit(): void {
    this.themeService.getAllTheme( ).subscribe((res: any) => {
      this.theme=res
    })
    this.formateurService.getAllFormateur().subscribe(res=>{
      this.formateur=res
    })
 
    this.sessionForm = this.formBuilder.group({
      'titre':"" ,
      'date_debut': "",
      'date_fin':"",
      'formateur': "",
      'theme': "",
      'sondage':  this.formBuilder.array([]),
       
  
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.sessionForm.controls; }
  onSubmit() {
   
    
  
    console.log(this.sessionForm.value);
    
   let resource={
    "titre":this.sessionForm.value.titre  ,
    "date_debut": this.sessionForm.value.date_debut ,
    "date_fin": this.sessionForm.value.date_fin,
    "theme": this.sessionForm.value.theme ,
     "formateur":this.sessionForm.value.formateur, 
     "listeParticpants": [ ],
     "sondage":this.sessionForm.value.sondage


   }
   const submitData = this.sessionForm.getRawValue();
   console.log(submitData);
   
   this.sessionService.addSession(submitData).subscribe(res=>{
    this.toast.success("Session ajouté avec succe",'Notificatoion')

   })
  }
  onResetl() {
    this.submitted = false;
    this.sessionForm.reset();
  }
  
  addSondageItem() {
    let items = this.sessionForm.get('sondage') as FormArray;
 
    
    items.push(this.formBuilder.group({ titre: '',reponse1:'',reponse2:'',select:false }));
  }
  getSondageControls() {
    return (this.sessionForm.get('sondage') as FormArray).controls;
  }
  deleteSondageItem(item:any) {
    if (this.getSondageControls().length > 0)
      this.getSondageControls().splice(item, 1)
  }
  p_trackByFn(index:any, item:any) {
    return index;
  }

}
