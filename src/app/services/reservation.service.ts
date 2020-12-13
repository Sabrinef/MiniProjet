import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  url = 'http://localhost:3000/reservations/';
  constructor(private http: HttpClient) { }
  getRes(){
    return this.http.get<Reservation[]>(this.url);
  }
  deleteRes(id){
    return this.http.delete(this.url + id);
  }
  postRes(User: Reservation){
    return this.http.post(this.url, User);
  }
  updateRes(User: Reservation){
    return this.http.put(this.url + User.id , User);
  }
  searchRes(id){
    return this.http.get<Reservation>(this.url + id);
  }
}
