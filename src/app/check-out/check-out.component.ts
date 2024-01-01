import { Component } from '@angular/core';
import { RoleService } from '../service/role.service';
import { Router } from '@angular/router';
import { Order } from '../model/Order';
import { CartService } from '../service/cart.service';
import { Cart } from '../model/Cart';
import { CountriesService } from '../service/countries.service';
import { Observable } from 'rxjs';
import { Country } from '../model/Country';
import { OrderService } from '../service/order.service';
import { Food } from '../model/food';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {
food:Food

selectedCountry: string;

  cart: Cart;
  
  order: Order = new Order();
  submitted = false;
  country:Country= new Country;
countries: Country[]=[];
countryCities: any[]=[];

    constructor(private orderService:OrderService, private countrieservce:CountriesService, private router: Router,private cartService:CartService) { }
  ngOnInit() {
    this.cart=this.cartService.getCart();
    this.countrieservce.getAllCountries().subscribe(response =>{
      response.data.forEach((el: any)=>{this.country = new Country
        this.country.country=el.country
        this.country.cities=el.cities
        this.countries.push(this.country)
      })
    } )
    console.log(this.countries)
  }
 
countryChanged() {
 this.countrieservce.getAllCountries().subscribe(response => {
    let countryData = response.data.find((c: { country: string; }) => {
      return c.country === this.selectedCountry;
    });

    if (countryData) {
      this.countryCities = countryData.cities;
    }
 });
}

  save() {
    this.orderService.createOrder(this.order)
    
  }

  onSubmit() {
    alert("This form is not connected to the database. You will need to add this fields to the order model and map the cart items to the products array if you want to save the order")
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/order-list/1']);
  }
}
