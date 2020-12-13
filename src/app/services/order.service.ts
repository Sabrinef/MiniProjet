import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url ="http://localhost:3000/order/";
  constructor(private http: HttpClient) { }

  getOrder(){
    return this.http.get<Order[]>(this.url);
  }
  deleteOrder(id){
    return this.http.delete(this.url + id);
  }
  postOrder(Order: Order){
    return this.http.post(this.url, Order);
  }

}
