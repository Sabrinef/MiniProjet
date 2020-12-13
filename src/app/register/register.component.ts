import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { PanierService } from '../services/panier.service';
import { Panier } from '../models/panier';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  listusers: User[];
  RegisterForm:FormGroup;
  user:User;
  panier:Panier;
  constructor(private serviceUser: UserService, private router: Router, private panierservice:PanierService) { }

  ngOnInit(): void {
    this.user = new User();
    this.RegisterForm = new FormGroup({
      cin:new FormControl('',[Validators.required,Validators.pattern('[0-9]{8}')]),
      firstname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      username:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+.[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+')]),
      password:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9]+'),Validators.minLength(5)]),
     // image:new FormControl('',),
    
    });
  }

  get cin(){
    return this.RegisterForm.get('cin');
  }
  get firstname(){
    return this.RegisterForm.get('firstname');
  }
  get lastname(){
    return this.RegisterForm.get('lastname');
  }
  get username(){
    return this.RegisterForm.get('username');
  }
  get email(){
    return this.RegisterForm.get('email');
  }
  get password(){
    return this.RegisterForm.get('password');
  }
  submit(){
   console.log(this.RegisterForm.value);
   Object.assign(this.user,this.RegisterForm.value);
   console.log(this.user);
   this.serviceUser.postUser(this.user).subscribe(
    data=> {console.log(data); this.router.navigate(['/login']); },
    error=>console.error(error)
  );
  this.panier=new Panier();
  this.panier.user=this.user;
  this.panier.food=[];
  this.panierservice.postP(this.panier).subscribe(
    data=> {console.log(data);},
    error=>console.error(error)
  );
  }

}
