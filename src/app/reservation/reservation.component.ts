import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../models/food';
import { Reservation } from '../models/reservation'
import { User } from '../models/user';
import { FoodService } from '../services/food.service';
import { LoginService } from '../services/login.service';
import { ReservationService } from '../services/reservation.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
reservation:Reservation;
listusers: User[];
listfood: Food[];

constructor(private service: ActivatedRoute,private ReservationService: ReservationService, 
  private router: Router,private loginservice: LoginService,private serviceUser: UserService, private foodservice: FoodService) { }

  ngOnInit(): void {
    this.reservation = new Reservation();
    console.log(this.loginservice.getUser().password);
    this.serviceUser.getUsers().subscribe((data: User[]) => this.listusers = data);
    this.foodservice.getFood().subscribe((data: Food[]) => this.listfood = data);
    
  }
  save(){
    
    for (let i of this.listusers){
      if ((i.email === this.loginservice.getUser().email) && (i.password === this.loginservice.getUser().password)){
        this.reservation.user = i;
        this.ReservationService.postRes(this.reservation).subscribe(
         data=> {console.log(data); this.router.navigate(['/your_reservations']);},
         error=>console.error(error)
    );
        break;
      }
    }
    
  }


}
