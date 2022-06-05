import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrls: ['./update-formateur.component.scss']
})
export class UpdateFormateurComponent implements OnInit {
  formateurForm: FormGroup;
  submitted = false;
  id: any;
 
  
     constructor(private route: ActivatedRoute, private toast:ToastrService,private formBuilder: FormBuilder,
      private formateurService:FormateurService) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');

      
      this.formateurForm = this.formBuilder.group({
        cin: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        tel: ['', Validators.required],
         email: ['', Validators.required],
        password: [''],
         
    
      });
      
    this.formateurService.getFormateur(this.id).subscribe((res: any) => {
      this.formateurForm.patchValue({
        'firstName': res.firstName,
        'lastName': res.lastName,
        'tel': res.tel,
        'email': res.email,
        'cin': res.cin,
        'password':''
      });



    })
    }
   
    onSubmit() {
       
      this.submitted = true;
      if (this.formateurForm.invalid) {
        return;
      }
      this.formateurService.updateFormateur(this.id,this.formateurForm.value).subscribe((res: any) => {
        this.toast.success("Formateur ajouté avec succe",'Notificatoion')

      })
    } 
  
  }
  