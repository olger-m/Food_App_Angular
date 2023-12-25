import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../service/food.service';
import { Observable } from 'rxjs';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

food:Food;
constructor(private route :ActivatedRoute,private foodService:FoodService,private cartService:CartService, private router:Router){

}
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
    if(params['id']){
      this.foodService.getFoodById(params['id']).subscribe(data=>this.food=data)
    }
  })

  }
  addToCart(food:Food){
    this.route.params.subscribe(params=>{
    if(params['id']){
      this.foodService.getFoodById(params['id']).subscribe(data=>this.cartService.addToCart(data)
      )
    }
  })
    this.router.navigateByUrl('cart-page')
  }






}
