import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { HardAndSoftSkillsComponent } from './components/hard-and-soft-skills/hard-and-soft-skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { AddProyectComponent } from './components/proyects/add-proyect.component';
import { EditProyectComponent } from './components/proyects/edit-proyect.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { AddEducationComponent } from './components/education/add-education.component';
import { AddExperienceComponent } from './components/experience/add-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { EditHardAndSoftSkillComponent } from './components/hard-and-soft-skills/edit-hard-and-soft-skill.component';
import { AddHardAndSoftSkillComponent } from './components/hard-and-soft-skills/add-hard-and-soft-skill.component';
import { EditHeaderComponent } from './components/header/edit-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ExperienceComponent,
    EducationComponent,
    HardAndSoftSkillsComponent,
    ProyectsComponent,
    AddProyectComponent,
    EditProyectComponent,
    EditEducationComponent,
    AddEducationComponent,
    AddExperienceComponent,
    EditExperienceComponent,
    EditHardAndSoftSkillComponent,
    AddHardAndSoftSkillComponent,
    EditHeaderComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
