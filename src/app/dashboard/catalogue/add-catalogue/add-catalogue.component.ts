import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CatalogueService } from './../../../services/catalogue.service';
import { ThemeService } from './../../../services/theme.service';

@Component({
  selector: 'app-add-catalogue',
  templateUrl: './add-catalogue.component.html',
  styleUrls: ['./add-catalogue.component.scss']
})
export class AddCatalogueComponent implements OnInit {
  catalogueForm: FormGroup;
  selectedThemeIds: any = [];
  theme:any=[]
  submitted = false;
   
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private catalogueService: CatalogueService,
    private themeService:ThemeService,
    private toast:ToastrService,
  ) { }

  ngOnInit(): void {

    this.themeService.getAllTheme().subscribe(res=>{
      this.theme=res
    })
    this.catalogueForm = this.formBuilder.group({
slug       : ['', Validators.required],
description: ['', Validators.required],
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.catalogueForm.controls; }
  add(e: any) {
    console.log(e);

    this.selectedThemeIds = e

  }
  onSubmit() {
    this.submitted = true;
    if (this.catalogueForm.invalid) {
      return;
    }
    let ids: any = []
    this.selectedThemeIds.forEach((el: any) => {
      ids.push(el._id)
    });
    let resource={
      "titre":this.catalogueForm.value.slug,
      "description":this.catalogueForm.value.description,
        "theme":ids
    }
    this.catalogueService.addCatalogue(resource).subscribe((res: any) => {
      this.toast.success("Cataloge ajouté avec succe",'Notificatoion')

    })
  }
  onResetl() {
    this.submitted = false;
    this.catalogueForm.reset();
  }

}
