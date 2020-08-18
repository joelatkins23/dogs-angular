import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DogapisService {

  constructor(private http: HttpClient) { }
  getAll() {

    return this.http.get("https://dog.ceo/api/breeds/list/all");
  }
  getimg(childname, name){
    const url=(childname) ? 'https://dog.ceo/api/breed/'+name+'/'+childname+'/images/random': 'https://dog.ceo/api/breed/'+name+'/images/random';
    return this.http.get(url);
  }
}
