import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthoService } from 'src/app/services/autho.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  constructor(private auth:AuthoService, private router:Router){}

  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }
}
