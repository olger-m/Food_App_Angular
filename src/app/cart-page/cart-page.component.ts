import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/Cart';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {


cart: Cart;
constructor(private router:Router, private cartService:CartService){

}



ngOnInit(): void {
 this.setCart()
}
setCart(){
  this.cart=this.cartService.getCart();
}

removeFromCart(id:number){
  this.cartService.removeFromCart(id)
}
gotocheckout() {
this.router.navigate(['/checkout']);
}

}
