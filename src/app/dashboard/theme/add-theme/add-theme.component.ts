import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocieteService } from 'src/app/services/socite.service';
import { ThemeService } from './../../../services/theme.service';
import { CatalogueService } from './../../../services/catalogue.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.scss']
})
export class AddThemeComponent implements OnInit {
  themeForm: FormGroup;
  catalogs: any = []

  selectedCtalogIds: any = [];

  add(e: any) {
    console.log(e);

    this.selectedCtalogIds = e

  }
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private themeService: ThemeService,
    private catalogService: CatalogueService,
    private toast:ToastrService
  ) { }

  ngOnInit(): void {
    this.catalogService.getAllCatalogue().subscribe(res => {
      this.catalogs = res
      console.log(this.catalogs);

    })
    this.themeForm = this.formBuilder.group({
      slug: ['', Validators.required],
      description: ['', Validators.required],
    });
  }



  // convenience getter for easy access to form fields
  get f() { return this.themeForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.themeForm.invalid) {
      return;
    }
    let ids: any = []
    this.selectedCtalogIds.forEach((el: any) => {
      ids.push(el._id)
    });
    let resource = {
      "titre": this.themeForm.value.slug,
      "description": this.themeForm.value.description,
      "cataloge": ids
    }
    this.themeService.addTheme(resource).subscribe((res: any) => {
      this.toast.success("Théme ajouté avec succe",'Notificatoion')
 

    })
  }
  onResetl() {
 
    this.themeForm.reset();
  }



}
