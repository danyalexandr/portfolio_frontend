import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthoService } from 'src/app/services/autho.service';

@Component({
  selector: 'app-hard-and-soft-skills',
  templateUrl: './hard-and-soft-skills.component.html',
  styleUrls: ['./hard-and-soft-skills.component.css']
})
export class HardAndSoftSkillsComponent {

  constructor(private auth:AuthoService, private router:Router){}
  
  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }
}
