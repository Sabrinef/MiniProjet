import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { Panier } from '../models/panier';
import { LoginService } from '../services/login.service';
import { OrderService } from '../services/order.service';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  paniers:Panier[];
  password:string;
  email:string;
  panier:Panier;
  quantity:number;
  num:number;
  order:Order;
  total:number;
  constructor(private panierservice:PanierService,private loginservice: LoginService, private router: Router,private orderService: OrderService) { }

  ngOnInit(): void {
    this.panierservice.getP().subscribe((data: Panier[]) => this.paniers = data);
    this.email=this.loginservice.getUser().email ;
    this.password=this.loginservice.getUser().password;
    this.order = new Order();
    this.total=1;
  }
  
  supp(id){
    let n=0;
    this.panierservice.getP().subscribe(data =>
      {
        this.paniers = data;
        for (let i of this.paniers){
          if ((i.user.email === this.loginservice.getUser().email) && (i.user.password === this.loginservice.getUser().password)){  
            for (let j of i.food){
              if (j.id==id){
                console.log(i.food);
                i.food.splice(n,n+1);
                console.log(i.food);
              }
              n++;
            }
          }
          this.panierservice.updateP(i).subscribe(
            data=> {console.log(data); this.router.navigate(['/your_panier']); },
            error=>console.error(error)
          );
        }
      } );
  }

  confirm(){
    this.panierservice.getP().subscribe(data =>
      {
        this.paniers = data;
        for (let i of this.paniers){
          if ((i.user.email === this.loginservice.getUser().email) && (i.user.password === this.loginservice.getUser().password)){  
          this.order.user=i.user;
          this.order.food=i.food;
          this.order.price=0;
          for(let j of i.food){
            this.order.price=this.order.price+j.price;    
          }
          }
        }
         // console.log(this.order.price);
       this.orderService.postOrder(this.order).subscribe( 
         data=> {console.log(data);  this.router.navigate(['/your_panier']); },
         error=>console.error(error)
    );

    for (let i of this.paniers){
      if ((i.user.email === this.loginservice.getUser().email) && (i.user.password === this.loginservice.getUser().password)){  
        i.food=[];
      }
      this.panierservice.updateP(i).subscribe(
        data=> {console.log(data); this.router.navigate(['/your_panier']); },
        error=>console.error(error)
      );
    }
  });
  }

}
