import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { LoginComponent } from './login/login.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CreateFoodComponent } from './create-food/create-food.component';


const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'food-list/:id', component: FoodListComponent },
{ path: 'food-list', component: FoodListComponent },
{ path: 'create', component: CreateFoodComponent },
{ path: 'search/:id/food-page/:id',redirectTo:'food-page/:id' },
{ path: 'home/food-page/:id',redirectTo:'food-page/:id' },
{ path: 'food-page/:id', component: FoodPageComponent },
{ path: 'details/:id', component: FoodDetailsComponent },
{ path: 'cart', component:CartPageComponent },
{ path: 'login', component:LoginComponent },
{ path: 'checkout', component:CheckOutComponent },
{ path: 'updateFood/:id', component:UpdateFoodComponent },
{path:'',component:HomeComponent},
{path:'search/:name',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CollapseModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
