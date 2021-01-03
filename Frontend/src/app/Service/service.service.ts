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

}
