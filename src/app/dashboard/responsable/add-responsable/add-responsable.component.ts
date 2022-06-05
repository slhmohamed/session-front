import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormateurService } from 'src/app/services/formateur.service';
import { ResponsableService } from 'src/app/services/reponsable.service';

@Component({
  selector: 'app-add-responsable',
  templateUrl: './add-responsable.component.html',
  styleUrls: ['./add-responsable.component.scss']
})
export class AddResponsableComponent implements OnInit {

  responsableForm: FormGroup;
  submitted = false;
    constructor(private toast:ToastrService, private formBuilder: FormBuilder,private responsableService:ResponsableService) { }
  
    ngOnInit(): void {
      
      this.responsableForm = this.formBuilder.group({
        cin: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        tel: ['', Validators.required],
         email: ['', Validators.required],
        password: ['', Validators.required],
         
    
      });
    }
  
    // convenience getter for easy access to form fields
    get f() { return this.responsableForm.controls; }
    onSubmit() {
      console.log(this.responsableForm.value);
      
      this.submitted = true;
      if (this.responsableForm.invalid) {
        return;
      }
      this.responsableService.addResponsable(this.responsableForm.value).subscribe((res: any) => {
        if(res){
        this.toast.success("Responsable ajouté avec succe",'Notificatoion')
      }
      },(err)=>{
        this.toast.error("Email déja utilse",'Notificatoion')
      })
    }
    onResetl() {
      this.submitted = false;
      this.responsableForm.reset();
    }
  
  }
  