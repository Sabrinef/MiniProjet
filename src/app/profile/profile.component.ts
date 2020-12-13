import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  listusers: User[];
  user:User;
  constructor(private loginservice: LoginService,private serviceUser: UserService) { }

  ngOnInit(): void {
    this.serviceUser.search(this.loginservice.getUser().email,this.loginservice.getUser().password).subscribe(data =>
      {
        this.user = data[0];
        console.log(this.user);
      } );
    }
}
