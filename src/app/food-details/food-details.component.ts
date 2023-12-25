import { Component } from '@angular/core';
import { Food } from '../model/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent {

  id: number=0;
  food: Food = new Food();

  constructor(private route: ActivatedRoute,private router: Router,
    private foodService: FoodService) { }

  ngOnInit() {
    this.food = new Food();

    this.id = this.route.snapshot.params['id'];
    
    this.foodService.getFoodById(this.id)
      .subscribe(data => {
        console.log(data)
        this.food = data;
      }, error => console.log(error));
  }

  backtolist(){
    this.router.navigate(['food-list']);
  }
}
