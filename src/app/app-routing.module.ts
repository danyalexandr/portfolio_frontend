import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEducationComponent } from './components/education/add-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { AddExperienceComponent } from './components/experience/add-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { AddHardAndSoftSkillComponent } from './components/hard-and-soft-skills/add-hard-and-soft-skill.component';
import { EditHardAndSoftSkillComponent } from './components/hard-and-soft-skills/edit-hard-and-soft-skill.component';
import { EditHeaderComponent } from './components/header/edit-header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddProyectComponent } from './components/proyects/add-proyect.component';
import { EditProyectComponent } from './components/proyects/edit-proyect.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'addExperience', component:AddExperienceComponent},
  {path: 'addEducation', component:AddEducationComponent},
  {path: 'addSkills', component:AddHardAndSoftSkillComponent},
  {path: 'addProyect', component:AddProyectComponent},
  {path: 'editExp', component:EditExperienceComponent},
  {path: 'editEducation', component:EditEducationComponent},
  {path: 'editSkills', component:EditHardAndSoftSkillComponent},
  {path: 'editProyect', component:EditProyectComponent},
  {path: 'editHeader', component:EditHeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
