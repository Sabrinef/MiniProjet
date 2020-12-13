import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chef } from '../models/chef';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  url = 'http://localhost:3000/chefs/';

  constructor(private http: HttpClient) { }

  getChefs(){
    return this.http.get<Chef[]>(this.url);
  }
}
