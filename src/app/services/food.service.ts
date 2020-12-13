import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../models/food'
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url = 'http://localhost:3000/foods/';
  constructor(private http: HttpClient) { }

  getFood(){
    return this.http.get<Food[]>(this.url);
  }
  searchFood(id){
    return this.http.get<Food>(this.url + id);
  }
  getType(type:string){
    return this.http.get<Food[]>("http://localhost:3000/foods?category="+type);
  }
}
