import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../models/Comment';
import { Food } from '../models/food';
import { FoodService } from '../services/food.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  @Output() notification = new EventEmitter <number> ();
  id:number;
  food:Food;
  email:string;
  test:boolean;
  constructor(private serviceFood: FoodService,private service: ActivatedRoute, private loginservice: LoginService) { }

  ngOnInit(): void {
    this.id = this.service.snapshot.params.id;
    this.serviceFood.searchFood(this.id).subscribe((data: Food) => this.food = data);
    this.email=this.loginservice.getUser().email;
   this.test=false;
    
  }
  
  sendNotif(){
    this.notification.emit(this.comment.id);
}


}
