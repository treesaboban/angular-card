import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseUrl='https://jsonplaceholder.typicode.com/posts'
  getAllData()
  {
    return this.http.get(this.baseUrl)
  }
}
