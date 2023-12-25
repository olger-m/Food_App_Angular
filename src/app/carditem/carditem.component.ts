import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../model/food';
import { FoodService } from '../service/food.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.css']
})
export class CarditemComponent implements OnInit {

isfavorite:boolean=false
Favorite() {
this.isfavorite=!this.isfavorite
}



@Input() food: Food;
  constructor(private route: ActivatedRoute,private router: Router,private foodService: FoodService,private cartService:CartService) { }
  ngOnInit(): void {
  }

  gotoFoodPage() {
this.router.navigate(['/food-page',this.food.id]);
}
addtoCart(food:Food) {
  this.cartService.addToCart(food)
}

}