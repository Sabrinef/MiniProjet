import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {


  food:Food;
  listFood: Food[];
  PriceMax: number;
  constructor(private serviceFood: FoodService) { }

  ngOnInit(): void {
    this.serviceFood.getFood().subscribe((data: Food[]) => this.listFood = data);
  }

  

}
