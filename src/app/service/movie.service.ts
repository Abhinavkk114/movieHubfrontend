import { Injectable, reflectComponentType } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { 

  }

  register(data:any){
    return this.http.post('http://127.0.0.1:8000/api/register/',data)

  }

  authenticate(data:any){
    return this.http.post('http://127.0.0.1:8000/api/token/',data)
  }



}
