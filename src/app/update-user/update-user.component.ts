import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  listusers: User[];
  RegisterForm:FormGroup;
  user:User;
  id:number;
  constructor(private service: ActivatedRoute,private serviceUser: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.id = this.service.snapshot.params.id;
    this.serviceUser.searchUser(this.id).subscribe((data: User) => this.user = data);

    this.RegisterForm = new FormGroup({
      firstname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      username:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+.[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+')]),
     // image:new FormControl('',),
    
    });
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

  submit(){
   console.log(this.RegisterForm.value);
   Object.assign(this.user,this.RegisterForm.value);
   console.log(this.user);
   this.serviceUser.updateUser(this.user).subscribe(
    data=> {console.log(data); this.router.navigate(['/your_profile']); },
    error=>console.error(error)
  );
  }

}
