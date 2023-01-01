import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthoService } from 'src/app/services/autho.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private auth:AuthoService, private router:Router){}

  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }
}
