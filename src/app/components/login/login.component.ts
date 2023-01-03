import { Component } from '@angular/core';
import { AuthoService } from 'src/app/services/autho.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username:string;
  public password:string;

  constructor(private auth: AuthoService){
    this.username = '';
    this.password = '';
  }

  public btnLogin():void{
    this.auth.loginSimple(this.username, this.password)
  }
}
