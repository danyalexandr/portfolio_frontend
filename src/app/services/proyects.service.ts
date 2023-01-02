import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyects } from '../model/proyects';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
  private backendApi:string = 'https://portfolio-backend-danyalexandr.koyeb.app';

  constructor(private http:HttpClient) { }

  public lista():Observable<Proyects[]>{
    return this.http.get<Proyects[]>(this.backendApi + '/proyecto/lista');
  }

  public detail(id:number):Observable<Proyects>{
    return this.http.get<Proyects>(this.backendApi + `/proyecto/detail/${id}`);
  }

  public save(proyect:Proyects):Observable<any>{
    return this.http.post<any>(this.backendApi + '/proyecto/crear', proyect);
  }

  public update(id:number, proyect:Proyects):Observable<any>{
    return this.http.put<any>(this.backendApi + `/update/${id}`, proyect)
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.backendApi + ` /exp/borrar/${id}`);
  }
}
