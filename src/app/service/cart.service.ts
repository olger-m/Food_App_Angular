import { Injectable } from '@angular/core';
import { Cart } from '../model/Cart';
import { Food } from '../model/food';
import { CartItem } from '../model/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart= new Cart()

 addToCart(food:Food){
  let exist = this.cart.items.find((e)=> e.food.id == food.id)
  console.log(exist)
  if (exist){
    exist.quantity+=1
  }else{
this.cart.items.push(new CartItem(food));
  }


 
 console.log(this.cart)
}
  changeQuantity(id: number, arg1: number) {
    const item = this.cart.items.find((value) => value.food.id === id);
    if(item)return;
    item.quantity=arg1
  }

  removeFromCart(foodId:number):void
{
  this.cart.items = this.cart.items.filter((value)=> value.food.id !== foodId);
}

getCart():Cart{
  return this.cart;
}
  constructor() { }
}
