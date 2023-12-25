import { Component } from '@angular/core';
import { Food } from '../model/food';
import { FoodService } from '../service/food.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent {
  id: number;
  food: Food;
  bookId: number = 0;
  constructor(private foodService:FoodService, private route: ActivatedRoute,private router:Router) {
    this.route.params.subscribe(params =>{
      this.bookId = params['id'];
    });
   }

  ngOnInit(): void {
    this.food = new Food();

    this.id = this.route.snapshot.params['id'];
    
    this.foodService.getFoodById(this.id)
      .subscribe(data => {
        console.log(data)
        this.food=data
      }, error => console.log(error));
  }

  editFood(){
       this.foodService.updateFood(this.id, this.food)
      .subscribe(data => {
        console.log(data);
        this.food = new Food();
        this.gotoList();
      }, error => console.log(error));
  }
  onSubmit() {
    this.editFood()
}
 gotoList() {
    this.router.navigate(['/food-list']);
  }
}