import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthoService } from 'src/app/services/autho.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  constructor(private auth:AuthoService, private router:Router){}

  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }
}
