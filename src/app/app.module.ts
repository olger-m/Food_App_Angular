import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FoodListComponent } from './food-list/food-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { CardComponent } from './card/card.component';
import { CarditemComponent } from './carditem/carditem.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartService } from './service/cart.service';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { Cart } from './model/Cart';
import { UpdateFoodComponent } from './update-food/update-food.component';

@NgModule({
 declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    CardComponent,
    CarditemComponent,
    HomeComponent,
    CartPageComponent,
    FoodPageComponent,
    FoodListComponent,
    FoodDetailsComponent,
    UpdateFoodComponent,
  ],
 imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
 ],
 providers: [
   CartService,
   CarditemComponent,
   Cart
 ],
 bootstrap: [AppComponent]
})
export class AppModule { }