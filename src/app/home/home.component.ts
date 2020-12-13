import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id:number;
  constructor(private service: ActivatedRoute,private loginservice: LoginService) { }

  ngOnInit(): void {
   // console.log(this.loginservice.getUser().password);
  }

}
