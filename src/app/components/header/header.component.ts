import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/model/persona';
import { AuthoService } from 'src/app/services/autho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  

  constructor( private auth: AuthoService, private router:Router, private http:HttpClient ){}

  ngOnInit():void{
    this.obtenerDatos();
  }
  public obtenerDatos():Observable<Persona[]>{
    return this.http.get<Persona[]>('')
  }

  public get isLogin():boolean{
    return this.auth.isUserLogin();
  }

  public btnLogout():void{
    this.auth.logout();
    this.router.navigate(["/home"]);
  }
}
