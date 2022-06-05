import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResponsableService } from 'src/app/services/reponsable.service';

@Component({
  selector: 'app-update-responsable',
  templateUrl: './update-responsable.component.html',
  styleUrls: ['./update-responsable.component.scss']
})
export class UpdateResponsableComponent implements OnInit {

  responsableForm: FormGroup;
  submitted = false;
  id: any;
  constructor(private route: ActivatedRoute, private toast: ToastrService, private formBuilder: FormBuilder, private responsableService: ResponsableService) { }

  ngOnInit(): void {


    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);


    this.responsableForm = this.formBuilder.group({
      cin: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      tel: ['', Validators.required], 
      email: ['', Validators.required],
      password: [],


    });
    this.responsableService.getResponsable(this.id).subscribe((res: any) => {
      this.responsableForm.patchValue({
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
    console.log(this.responsableForm.value);


    if (this.responsableForm.invalid) {
      return;
    }
    console.log(this.responsableForm.value);
    
    this.responsableService.updateResponsable(this.id, this.responsableForm.value).subscribe((res: any) => {
      if (res) {
        this.toast.success("Responsable modifié avec succe", 'Notificatoion')
      }
    })
  }
 

}
