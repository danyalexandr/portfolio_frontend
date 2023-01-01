import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthoService } from 'src/app/services/autho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( private auth: AuthoService, private router:Router){}

  ngOnInit():void{

  }

  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }

  public btnLogout():void{
    this.auth.logout();
    this.router.navigate(["/home"]);
  }
}
