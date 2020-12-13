import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //providers: [AuthService]
})
export class LoginComponent implements OnInit {
  listusers: User[];
  LoginForm:FormGroup;
  user:User;
  model: any = {};
  constructor(private toastr:ToastrService ,private loginservice: LoginService,private serviceUser: UserService, private router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.LoginForm = new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
    
    });
    this.serviceUser.getUsers().subscribe((data: User[]) => this.listusers = data);
  
  }
  get email(){
    return this.LoginForm.get('email');
  }
  get password(){
    return this.LoginForm.get('password');
  }



login() {

  for (let i of this.listusers){
    if ((i.email === this.LoginForm.value.email ) && (i.password === this.LoginForm.value.password)){
      this.model = { email: this.LoginForm.value.email , password: this.LoginForm.value.password };
      this.loginservice.login(this.model);
      console.log(this.loginservice.getUser().email);
      this.toastr.success('Welcome '+i.username , 'Now you are connected !');
      break;
    }
  }
    
}

show(){
  this.toastr.success('messages' , 'title');
}

}
