import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../models/reservation';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { ReservationService } from '../services/reservation.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {
  reservation:Reservation;
  listusers: User[];
  id:number;
  constructor(private service: ActivatedRoute,private ReservationService: ReservationService, private router: Router,private loginservice: LoginService,private serviceUser: UserService) { }

  ngOnInit(): void {
    this.reservation = new Reservation();
    this.id = this.service.snapshot.params.id;
    this.serviceUser.getUsers().subscribe((data: User[]) => this.listusers = data);
    this.ReservationService.searchRes(this.id).subscribe((data: Reservation) => this.reservation = data);
  }
  save(){
    for (let i of this.listusers){
      if ((i.email === this.loginservice.getUser().email) && (i.password === this.loginservice.getUser().password)){
        this.reservation.user = i;
      this.ReservationService.updateRes(this.reservation).subscribe(
      data=> {console.log(data); this.router.navigate(['/your_reservations']); },
      error=>console.error(error)
    );
    break;
      }
    }
  }

}
