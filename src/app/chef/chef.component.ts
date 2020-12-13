import { Component, Input, OnInit } from '@angular/core';
import { Chef } from '../models/chef';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
  
  @Input() chef: Chef;
  constructor() { }

  ngOnInit(): void {
  }

}
