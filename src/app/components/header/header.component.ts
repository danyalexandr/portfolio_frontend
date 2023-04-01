import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/model/persona';
import { AuthoService } from 'src/app/services/autho.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  

  constructor( private auth: AuthoService, private router:Router, private http:HttpClient,
              private storageService:StorageService ){}

  imagenes:any[] = [];
  foto:any = "";

  cargarImagen(event:any){
    let archivos = event.target.files
    let reader = new FileReader();
    let nombre:string = "";

  reader.readAsDataURL(archivos[0]);
  reader.onloadend = () => {
    console.log(reader.result);
    this.imagenes.push(reader.result);
    this.storageService.subirImagen(nombre + "_" + Date.now(), reader.result)
    .then(urlImage => {console.log(urlImage);
    this.foto = urlImage;
    });
    

  }
}

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
