import { findNode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  food:Food;
  listFood: Food[];
  p: number = 1;
  constructor(private serviceFood: FoodService) { }

  ngOnInit(): void {
    this.serviceFood.getFood().subscribe((data: Food[]) => this.listFood = data);
  }

  getAll(){
    this.serviceFood.getFood().subscribe((data: Food[]) => this.listFood = data);
   
  }
  getBreakfast(){
    this.serviceFood.getType("breakfast").subscribe((data: Food[]) => this.listFood = data);
  }
  getLunch(){
    this.serviceFood.getType("lunch").subscribe((data: Food[]) => this.listFood = data);
  }
  getDinner(){
    this.serviceFood.getType("dinner").subscribe((data: Food[]) => this.listFood = data);
    
  }
  getDessert(){
    this.serviceFood.getType("dessert").subscribe((data: Food[]) => this.listFood = data);
    
  }
}
