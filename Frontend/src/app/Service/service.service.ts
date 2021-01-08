import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Graduates } from '../Model/Graduates';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private http:HttpClient) { }

  Url = "http://localhost:8080/";

  getGraduates(){
    return this.http.get<Graduates[]>(this.Url+'graduates')
  }

  createGraduates(graduates:Graduates){
    return this.http.post<Graduates>(this.Url+'addGraduates', graduates);
  }

  getGraduatesById(id:number){
    return this.http.get<Graduates>(this.Url+"graduatesById/"+id)
  }

  updateGraduates(graduates: Graduates){
    return this.http.put<Graduates>(this.Url+"update", graduates)
  }

  deleteGraduates(graduates: Graduates){
    return this.http.delete(this.Url+"delete/"+ graduates.id, {responseType: 'text'})
  }

  getGraduatesByYear(year: number){
    return this.http.get<Graduates[]>(this.Url+"graduates/"+year)
  }
}
