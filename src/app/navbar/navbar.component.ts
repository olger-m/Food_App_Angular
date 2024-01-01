import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from '../service/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../model/cartitem';
import { CarditemComponent } from '../carditem/carditem.component';
import { Cart } from '../model/Cart';
import { CartService } from '../service/cart.service';

@Component({
 selector: 'navbar',
 templateUrl: './navbar.component.html',
 styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

cart: Cart;
cartquantity:Cart
 searchForm = new FormGroup({
    search: new FormControl('')
 });
@Input() input:any="";
@Output() searchEvent = new EventEmitter<string>();

onSubmit(inpu:string) {
   this.input=inpu
   this.search.changeMessage(inpu)
   this.gotoList()
 }
   gotoList() {
      this.router.navigate(['/search',this.input]);
   }
     gotoFoodList() {
      this.router.navigate(['/food-list']);
   }
   gotoCart() {
this.router.navigate(['/cart']);
}
gotoLogin() {
this.router.navigate(['/login']);
}

 ngOnInit(): void {
this.cart=this.cartService.getCart();
 }
 constructor(private search:SearchService,private router:Router,private route:ActivatedRoute,private cartService:CartService) {
}}