import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';
import { Food } from '../model/food';
import { Observable, filter } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private foodservice:FoodService,private router:ActivatedRoute,private search:SearchService){}
foods:Food[]
 ngOnInit(): void {
  this.foodservice.getFoods().subscribe(data => {
 this.foods = data;})
    this.router.params.subscribe(params => {
      if (params['name']) {
        this.foodservice.getFoods().subscribe(foods => {
          this.foods = foods.filter((food: { name: string; }) => food.name.toLowerCase().includes(params['name'].toLowerCase()));
        });
      } else {
        this.foodservice.getFoods().subscribe(response => this.foods = response);
      }
    });
 }
}
