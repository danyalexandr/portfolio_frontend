import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthoService {

  private strUrlApi:string = '../../assets/data/user.json';
  private backendApi = 'https://portfolio-backend-danyalexandr.koyeb.app';

  constructor(private http: HttpClient, private router:Router) {
    
   }

   public loginSimple(username:string, password:string):void{
    this.http.get(this.strUrlApi).subscribe(
    (response:any) => { 
      if(response.token != null){
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      }
    }
    );
   }

   public logout():void{
    localStorage.removeItem('token');
    this.router.navigate(["/"]);
   }

   public isUserLogin():boolean{
    return (localStorage.getItem('token') !=null);
   }
}
