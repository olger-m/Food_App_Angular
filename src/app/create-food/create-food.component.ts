import { Component } from '@angular/core';
import { Food } from '../model/food';
import { RoleService } from '../service/role.service';
import { FoodService } from '../service/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})
export class CreateFoodComponent {

  food: Food = new Food();
  roles: any=[];
  submitted = false;

  constructor(private roleService: RoleService,private foodService:FoodService,
    private router: Router) { }

  ngOnInit() {

  }

  newFood(): void {
    this.submitted = false;
    this.food = new Food();
  }

  save() {
this.foodService.createFood(this.food).subscribe(data => {
      console.log(data)
      this.newFood()
      this.gotoList();
    }, 
    error => console.log(error));
    
  }
  resetform(){
this.food.name="";
        this.food.price=null;
        this.food.description="";
        this.food.cookTime="";
        this.food.imageUrl=""
        this.gotoCreate()
}
  gotoCreate() {
    this.submitted=false
    this.router.navigate(['/create']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/food-list/1']);
  }
}
