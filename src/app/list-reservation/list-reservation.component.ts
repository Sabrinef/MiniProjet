import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {
listreservation:Reservation[];
password:string;
email:string;
type: string;
  constructor(private ReservationService: ReservationService,private loginservice: LoginService) { }

  ngOnInit(): void {
      this.ReservationService.getRes().subscribe((data: Reservation[]) => this.listreservation = data);

      this.email=this.loginservice.getUser().email ;
      this.password=this.loginservice.getUser().password;
  }
  delate(id){
    this.ReservationService.deleteRes(id).subscribe(
      () => this.listreservation = this.listreservation.filter(user => user.id != id)
    );
  }

  search(){
    if (this.type!=""){
      this.ReservationService.getRes().subscribe(
        () => this.listreservation = this.listreservation.filter(res=> {
          return res.date.toLocaleLowerCase().match(this.type.toLocaleLowerCase());
        })
      );
  }else{
    this.ReservationService.getRes().subscribe((data: Reservation[]) => this.listreservation = data);
  }
  }

}
