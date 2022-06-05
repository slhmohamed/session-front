import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResponsableService } from 'src/app/services/reponsable.service';
import { ParticipantService } from 'src/app/services/participant.service';
import { SocieteService } from 'src/app/services/socite.service';

@Component({
  selector: 'app-update-participant',
  templateUrl: './update-participant.component.html',
  styleUrls: ['./update-participant.component.scss']
})
export class UpdateParticipantComponent implements OnInit {
  socitie:any=[]
  participantForm: FormGroup;
  submitted = false;
  id: any;
  constructor(private route: ActivatedRoute, private toast: ToastrService, private formBuilder: FormBuilder,
     private participantService: ParticipantService,private socitieService: SocieteService) { }

  ngOnInit(): void {

this.getAllSocitie()
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.participantForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      tel: ['', Validators.required],
      raison_social: ['', Validators.required],
      email: ['', Validators.required],
      password: [''],
      adresse: ['', Validators.required],
      socite: ['', Validators.required],
      
  
    });
    this.participantService.getParticipant(this.id).subscribe((res: any) => {
      this.participantForm.patchValue({
        'firstName': res.firstName,
        'lastName': res.lastName,
        'tel': res.tel,
        'email': res.email,
        'raison_social':res.raison_social,
        'cin': res.cin,
        'password':'',
         'adresse':res.adresse,
      'socite':res.socite
      });



    })
  }
  getAllSocitie(){
    this.socitieService.getAllSociete().subscribe(res=>{
      this.socitie=res
      console.log(res);
      
    })
  }
  onSubmit() {
    console.log(this.participantForm.value);

    if (this.participantForm.invalid) {
      return;
    }
    console.log(this.participantForm.value);
    
    this.participantService.updateParticipant(this.id, this.participantForm.value).subscribe((res: any) => {
      if (res) {
        this.toast.success("Particpant modifié avec succe", 'Notificatoion')
      }
    })
  }
 

}
