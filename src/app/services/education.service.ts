import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private backendApi = 'https://portfolio-backend-danyalexandr.koyeb.app';

  constructor(private http:HttpClient) { }

  public lista():Observable<Education[]>{
    return this.http.get<Education[]>(this.backendApi + '/educacion/lista');
  }

  public detail(id:number):Observable<Education>{
    return this.http.get<Education>(this.backendApi + `/educacion/detail/${id}`);
  }

  public save(educacion:Education):Observable<any>{
    return this.http.post<any>(this.backendApi + '/educacion/crear', educacion);
  }

  public update(id:number, educacion:Education):Observable<any>{
    return this.http.put<any>(this.backendApi + ` /educacion/update/${id}`, educacion);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.backendApi + `/educacion/borrar/${id}`);
  }
}
