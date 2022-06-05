import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocieteService } from './../../../services/socite.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-societe',
  templateUrl: './add-societe.component.html',
  styleUrls: ['./add-societe.component.scss']
})
export class AddSocieteComponent implements OnInit {
  socitieForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private socitieService: SocieteService,
    private toast:ToastrService
  ) { }

  ngOnInit(): void {
    this.socitieForm = this.formBuilder.group({
      nom: ['', Validators.required],
      tel: ['', Validators.required],
      raison_socail: ['', Validators.required],
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.socitieForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.socitieForm.invalid) {
      return;
    }
    this.socitieService.addSocite(this.socitieForm.value).subscribe((res: any) => {
      this.toast.success("Socitie ajouté avec succe",'Notificatoion')

    })
  }
  onResetl() {
    this.submitted = false;
    this.socitieForm.reset();
  }

}
