import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from '../models/food';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  @Input() food: Food;
  @Output() notification = new EventEmitter <Food> ();
  constructor() { }

  ngOnInit(): void {
  }
  sendNotif(){
    this.notification.emit(this.food);
}

}
