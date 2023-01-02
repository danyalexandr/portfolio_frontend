import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private backendApi = 'https://portfolio-backend-danyalexandr.koyeb.app';

  constructor(private http:HttpClient) { }

  public lista():Observable<Experience[]>{
    return this.http.get<Experience[]>(this.backendApi + 'exp/lista');
  }

  public detail(id:number):Observable<Experience>{
    return this.http.get<Experience>(this.backendApi + `/exp/detail/${id}`);
  }

  public save(experience:Experience):Observable<any>{
    return this.http.post<any>(this.backendApi + '/exp/crear', experience);
  }

  public update(id:number, experience:Experience):Observable<any>{
    return this.http.put<any>(this.backendApi + `/exp/update/${id}`, experience);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.backendApi + `/exp/borrar/${id}`);
  }
}
