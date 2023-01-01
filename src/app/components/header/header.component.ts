import { Component } from '@angular/core';
import { AuthoService } from 'src/app/services/autho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( private auth: AuthoService){}

  ngOnInit():void{

  }

  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }

  public btnLogout():void{
    this.auth.logout();
  }
}
