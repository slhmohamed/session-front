import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './component/login/login.component';
import { AddCatalogueComponent } from './dashboard/catalogue/add-catalogue/add-catalogue.component';
import { ListCatalogueComponent } from './dashboard/catalogue/list-catalogue/list-catalogue.component';
import { AddFormateurComponent } from './dashboard/formateur/add-formateur/add-formateur.component';
import { ListFormateurComponent } from './dashboard/formateur/list-formateur/list-formateur.component';
import { UpdateFormateurComponent } from './dashboard/formateur/update-formateur/update-formateur.component';
import { AddParticipantComponent } from './dashboard/participant/add-participant/add-participant.component';
import { ListeParticipantComponent } from './dashboard/participant/liste-participant/liste-participant.component';
import { UpdateParticipantComponent } from './dashboard/participant/update-participant/update-participant.component';
import { AddResponsableComponent } from './dashboard/responsable/add-responsable/add-responsable.component';
import { ListResponsableComponent } from './dashboard/responsable/list-responsable/list-responsable.component';
import { UpdateResponsableComponent } from './dashboard/responsable/update-responsable/update-responsable.component';
import { AddSessionComponent } from './dashboard/session/add-session/add-session.component';
import { DetailsSessionComponent } from './dashboard/session/details-session/details-session.component';
import { ListeSessionComponent } from './dashboard/session/liste-session/liste-session.component';
import { AddSocieteComponent } from './dashboard/societe/add-societe/add-societe.component';
import { ListeSocieteComponent } from './dashboard/societe/liste-societe/liste-societe.component';
import { UpdtaeSocitieComponent } from './dashboard/societe/updtae-socitie/updtae-socitie.component';
import { AddThemeComponent } from './dashboard/theme/add-theme/add-theme.component';
import { ListThemeComponent } from './dashboard/theme/list-theme/list-theme.component';
 import { UserGuard } from './services/user.guard';


const routes: Routes = [
   
 {
   path:'',component:LoginComponent
 },
  //participant
  {path: "dashboard/liste-participant", component: ListeParticipantComponent},
  {path: "dashboard/ajout-participant", component: AddParticipantComponent},
  {path: "dashboard/edit-participant/:id", component: UpdateParticipantComponent},
  //socitie
  {path: "dashboard/ajout-societe", component: AddSocieteComponent},
  {path: "dashboard/liste-societie", component: ListeSocieteComponent},
  {path: "dashboard/edit-societie/:id", component: UpdtaeSocitieComponent},

//formateur
  {path: "dashboard/liste-formateur", component: ListFormateurComponent},
  {path: "dashboard/ajout-formateur", component: AddFormateurComponent},
  {path: "dashboard/edit-formateur/:id", component: UpdateFormateurComponent},

//responsable
  {path: "dashboard/ajout-responsable", component: AddResponsableComponent},
  {path: "dashboard/liste-responsable", component: ListResponsableComponent},
  {path: "dashboard/edit-responsable/:id", component: UpdateResponsableComponent},

  
//theme
{path: "dashboard/ajout-theme", component: AddThemeComponent},
{path: "dashboard/liste-theme", component: ListThemeComponent},

//cataloge
{path: "dashboard/ajout-cataloge", component: AddCatalogueComponent},
{path: "dashboard/liste-cataloge", component: ListCatalogueComponent},

//session
{path: "dashboard/ajout-session", component: AddSessionComponent},
{path: "dashboard/liste-session", component: ListeSessionComponent},
{path: "dashboard/details-session/:id", component: DetailsSessionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
