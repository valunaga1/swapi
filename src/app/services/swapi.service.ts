import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) { }

  getListFlims(){
  return this.http.get(environment.apiUrl+'/films/');
  }

  getFlim(id:string){
    return this.http.get(environment.apiUrl+`/films/`+id);
  }

  getPersonajes(){
    return this.http.get(environment.apiUrl+`/people/`);
    }
    getPage(id:number){
      return this.http.get(environment.apiUrl+`/people/?page=`+id);
      }
}
