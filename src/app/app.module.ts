import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
   import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AddFormateurComponent } from './dashboard/formateur/add-formateur/add-formateur.component';
import { ListFormateurComponent } from './dashboard/formateur/list-formateur/list-formateur.component';
import { HeaderNavComponent } from './dashboard/header-nav/header-nav.component';
import { AddParticipantComponent } from './dashboard/participant/add-participant/add-participant.component';
import { ListeParticipantComponent } from './dashboard/participant/liste-participant/liste-participant.component';
import { UpdateParticipantComponent } from './dashboard/participant/update-participant/update-participant.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { AddSocieteComponent } from './dashboard/societe/add-societe/add-societe.component';
import { ListeSocieteComponent } from './dashboard/societe/liste-societe/liste-societe.component';
import { AddResponsableComponent } from './dashboard/responsable/add-responsable/add-responsable.component';
import { ListResponsableComponent } from './dashboard/responsable/list-responsable/list-responsable.component';
import { AddThemeComponent } from './dashboard/theme/add-theme/add-theme.component';
import { ListThemeComponent } from './dashboard/theme/list-theme/list-theme.component';
import { AddCatalogueComponent } from './dashboard/catalogue/add-catalogue/add-catalogue.component';
import { ListCatalogueComponent } from './dashboard/catalogue/list-catalogue/list-catalogue.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddSessionComponent } from './dashboard/session/add-session/add-session.component';
import { ListeSessionComponent } from './dashboard/session/liste-session/liste-session.component';
import { UpdateResponsableComponent } from './dashboard/responsable/update-responsable/update-responsable.component';
import { UpdtaeSocitieComponent } from './dashboard/societe/updtae-socitie/updtae-socitie.component';
import { UpdateFormateurComponent } from './dashboard/formateur/update-formateur/update-formateur.component';
import { DetailsSessionComponent } from './dashboard/session/details-session/details-session.component';
 @NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderNavComponent,
      ListeParticipantComponent,
      AddParticipantComponent,
      UpdateParticipantComponent,
      ListeSocieteComponent,
      AddSocieteComponent,
      AddFormateurComponent,
      ListFormateurComponent,
      NavbarComponent,
      AddResponsableComponent,
      ListResponsableComponent,
      AddThemeComponent,
      ListThemeComponent,
      AddCatalogueComponent,
      ListCatalogueComponent,
      AddSessionComponent,
      ListeSessionComponent,
      UpdateResponsableComponent,
      UpdtaeSocitieComponent,
      UpdateFormateurComponent,
      DetailsSessionComponent
    

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(), // ToastrModule added
    NgSelectModule,
    NgxPaginationModule,


  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[NavbarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
