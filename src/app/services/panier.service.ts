import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Panier } from '../models/panier';
import { User } from '../models/user';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  
  url = "http://localhost:3000/panier/";
  constructor(private http: HttpClient) { }
  getP(){
    return this.http.get<Panier[]>(this.url);
  }
  deleteP(id){
    return this.http.delete(this.url + id);
  }
  postP(Panier: Panier){
    return this.http.post(this.url, Panier);
  }
  updateP(Panier: Panier){
    return this.http.put(this.url + Panier.id , Panier);
  }
  searchP(id){
    return this.http.get<Panier>(this.url + id);
  }
  postfood(Food: Food, panier: Panier){
    panier.food.push(Food);
  }
  getPUser(email:string){
    return this.http.get<Panier>("http://localhost:3000/panier?user.email="+ email); 
  }
}
