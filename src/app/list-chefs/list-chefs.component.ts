import { Component, OnInit } from '@angular/core';
import { Chef } from '../models/chef';
import { ChefService } from '../services/chef.service';

@Component({
  selector: 'app-list-chefs',
  templateUrl: './list-chefs.component.html',
  styleUrls: ['./list-chefs.component.css']
})
export class ListChefsComponent implements OnInit {

  chef: Chef;
  listChef: Chef[];
  constructor(private serviceChef: ChefService) { }

  ngOnInit(): void {
    this.serviceChef.getChefs().subscribe((data: Chef[]) => this.listChef = data);
  }

}
