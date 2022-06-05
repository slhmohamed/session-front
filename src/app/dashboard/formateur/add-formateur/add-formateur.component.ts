import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormateurService } from 'src/app/services/formateur.service';
 
@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.scss']
})
export class AddFormateurComponent implements OnInit {
 
  formateurForm: FormGroup;
  submitted = false;
    constructor( private toast:ToastrService,private formBuilder: FormBuilder,private formateurService:FormateurService) { }
  
    ngOnInit(): void {
      
      this.formateurForm = this.formBuilder.group({
        cin: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        tel: ['', Validators.required],
         email: ['', Validators.required],
        password: ['', Validators.required],
         
    
      });
    }
  
    // convenience getter for easy access to form fields
    get f() { return this.formateurForm.controls; }
    onSubmit() {
      console.log(this.formateurForm.value);
      
      this.submitted = true;
      if (this.formateurForm.invalid) {
        return;
      }
      this.formateurService.addFormateur(this.formateurForm.value).subscribe((res: any) => {
        this.toast.success("Formateur ajouté avec succe",'Notificatoion')

      })
    }
    onResetl() {
      this.submitted = false;
      this.formateurForm.reset();
    }
  
  }
  