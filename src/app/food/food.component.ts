import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from '../models/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  @Input() food: Food;
  @Input() priceMaxInput: number;
  @Output() notification = new EventEmitter <Food> ();

  constructor() { }

  ngOnInit(): void {
  }
  
  sendNotif(){
    this.notification.emit(this.food);
}
getcolor(food: Food){
  if (food.type == 1){
    return 'red';
  }
}

}
