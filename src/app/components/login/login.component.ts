import { Component } from '@angular/core';
import { AuthoService } from 'src/app/services/autho.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginTxtEmail:string;
  public loginTxtPwd:string;

  constructor(private auth: AuthoService){
    this.loginTxtEmail = '';
    this.loginTxtPwd = '';
  }

  public btnLogin():void{
    this.auth.loginSimple(this.loginTxtEmail, this.loginTxtPwd)
  }
}
