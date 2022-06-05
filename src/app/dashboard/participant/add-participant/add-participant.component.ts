import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ParticipantService } from 'src/app/services/participant.service';
import { SocieteService } from './../../../services/socite.service';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.scss']
})
export class AddParticipantComponent implements OnInit {
socitie:any=[]
participantForm: FormGroup;
submitted = false;
  constructor(private toast:ToastrService,private societeService:SocieteService,private formBuilder: FormBuilder,
    private router: Router,private participantService:ParticipantService) { }

  ngOnInit(): void {
    this.societeService.getAllSociete().subscribe(res=>{
      console.log(res);
      
      this.socitie=res
      console.log(this.socitie);
      
    })
    this.participantForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      tel: ['', Validators.required],
      raison_social: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      adresse: ['', Validators.required],
      socite: ['', Validators.required],
      
  
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.participantForm.controls; }
  onSubmit() {
    console.log(this.participantForm.value);
    
    this.submitted = true;
    if (this.participantForm.invalid) {
      return;
    }
    this.participantService.addParticipant(this.participantForm.value).subscribe((res: any) => {
      this.toast.success("Participant ajouté avec succe",'Notificatoion')
    },(err)=>{
      this.toast.error("Email déja utilse",'Notificatoion')
    })
  }
  onResetl() {
    this.submitted = false;
    this.participantForm.reset();
  }

}
