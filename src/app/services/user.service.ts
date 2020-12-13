import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/users/';
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.url);
  }
  deleteUser(id){
    return this.http.delete(this.url + id);
  }
  postUser(User: User){
    return this.http.post("http://localhost:3000/users", User);
  }
  updateUser(User: User){
    return this.http.put(this.url + User.id , User);
  }
  searchUser(id){
    return this.http.get<User>(this.url + id);
  }
  search(email:string, password:string){
    return this.http.get<User>("http://localhost:3000/users?email="+email+"&&password="+password);
  }
  
}
