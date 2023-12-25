import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Food } from '../model/food';
import { FoodService } from '../service/food.service';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
input: string = " ";
food:Food;
  foods :[]
  foodstosisplay:Food[]
constructor(private route: ActivatedRoute,private router: Router,private foodService: FoodService,private search:SearchService) { }
  ngOnInit(): void {
  this.foodService.getFoods().subscribe(data=>{
    this.foods=data;
    this.search.currentMessage.subscribe(message=>
      {this.input=message
      if (message==="default message") {
    this.foodstosisplay = this.foods;
 } else {
    this.foodstosisplay = this.foods.filter((food: { name: string; }) =>
      food.name.toLowerCase().includes(message.toLowerCase())
    );}})});

  }
    
        
        
}

