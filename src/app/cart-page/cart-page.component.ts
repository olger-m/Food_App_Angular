import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/Cart';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
convertToNumber(value: string): number {
 return parseInt(value, 10);
}


cart: Cart;
constructor(private cartService:CartService){

}



ngOnInit(): void {
 this.setCart()
}
setCart(){
  this.cart=this.cartService.getCart();
}

removeFromCart(){
  this.cartService.removeFromCart(1)
}

}
