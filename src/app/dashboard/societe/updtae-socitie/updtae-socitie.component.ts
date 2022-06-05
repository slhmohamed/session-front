import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocieteService } from 'src/app/services/socite.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updtae-socitie',
  templateUrl: './updtae-socitie.component.html',
  styleUrls: ['./updtae-socitie.component.scss']
})
export class UpdtaeSocitieComponent implements OnInit {
  socitieForm: FormGroup;
  submitted = false;
  id: string | null;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private socitieService: SocieteService,private route: ActivatedRoute,
    private toast:ToastrService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.socitieForm = this.formBuilder.group({
      nom: ['', Validators.required],
      tel: ['', Validators.required],
      raison_socail: ['', Validators.required],
    });

    
    this.socitieService.getSocitie(this.id).subscribe((res: any) => {
      this.socitieForm.patchValue({
        'nom': res.nom,
        'tel': res.tel,
        'raison_socail': res.raison_socail
         
      });



    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.socitieForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.socitieForm.invalid) {
      return;
    }
    this.socitieService.updateSocitie(this.id,this.socitieForm.value).subscribe((res: any) => {
      this.toast.success("Responsable modifié avec succe", 'Notificatoion')
    })
  } 

}
