import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardAndSoftSkills } from '../model/hard-and-soft-skills';

@Injectable({
  providedIn: 'root'
})
export class HardAndSoftSkillsService {

  private backendApi:string = 'https://portfolio-backend-danyalexandr.koyeb.app';

  constructor(private http:HttpClient) { }

  public lista():Observable<HardAndSoftSkills[]>{
    return this.http.get<HardAndSoftSkills[]>(this.backendApi + '/skills/lista');
  }

  public detail(id:number):Observable<HardAndSoftSkills>{
    return this.http.get<HardAndSoftSkills>(this.backendApi + ` /skills/detail/${id}`);
  }

  public save(skill:HardAndSoftSkills):Observable<any>{
    return this.http.post(this.backendApi + '/skills/crear', skill);
  }

  public update(id:number, skill:HardAndSoftSkills):Observable<any>{
    return this.http.put<any>(this.backendApi + `/update/${id}`, skill);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete(this.backendApi + `/skills/borrar/${id}`);
  }
}
