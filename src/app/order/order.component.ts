import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { LoginService } from '../services/login.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders:Order[];
  email:String;
  password:String;
  order:Order;
  constructor(private orderService: OrderService,private loginservice: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.orderService.getOrder().subscribe((data: Order[]) => this.orders = data);
    this.email=this.loginservice.getUser().email ;
    this.password=this.loginservice.getUser().password;
    
  }

}
