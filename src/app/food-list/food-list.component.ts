import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { Observable } from "rxjs";
import { SearchService } from '../service/search.service';
import { FoodService } from '../service/food.service';
import { Food } from '../model/food';

@Component({
 selector: 'app-foof-list',
 templateUrl: './food-list.component.html',
 styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
input: string = " ";
listOfFoods!: Food[];
food :Food;;
   sortKey: string="null";
   sortOrder: string="null";
   @Input() searchEvent: any;
  listOfFoodsToDisplay: Food[];
 constructor(private route: ActivatedRoute,private router: Router,private foodService: FoodService,private search:SearchService) { }

 ngOnInit(): void {
  
  console.log(this.input)
  this.reloadData();

 }

  sort(key: string) {
    if (this.sortKey === key) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortOrder = 'asc';
    }
   this.listOfFoods.sort((a:any , b: any) => {
      const firstValue = typeof a[key] === 'string' ? a[key].toLowerCase() : a[key];
      const secondValue = typeof b[key] === 'string' ? b[key].toLowerCase() : b[key];
      if (firstValue < secondValue) {
        return this.sortOrder === 'asc' ? -1 : 1;
      } else if (a[key] > b[key]) {
        return this.sortOrder === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
      });
   }

 reloadData() {
  this.foodService.getFoods().subscribe(data=>{
    this.listOfFoods=data;
    this.search.currentMessage.subscribe(message=>
      {this.input=message
      if (message==="default message") {
    this.listOfFoodsToDisplay = this.listOfFoods;
 } else {
    this.listOfFoodsToDisplay = this.listOfFoods.filter(book =>
      book.name.toLowerCase().includes(message.toLowerCase())
    );}})});}

  onDelete(id: number) {
      this.foodService.deleteFood(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
}
  gotoList() {
    this.router.navigate(['/food-list']);
  }
  gotoCreate() {
    this.router.navigate(['/create']);
}

   foodDetails(id: number){
    this.router.navigate(['details', id]);
  }

 editFood(foodId: number) {
    this.router.navigate(['updateFood', foodId]);
    
}
onSearch(event: Event) {
 const searchForm = (event.target as HTMLInputElement).value;
 console.log(searchForm);
}
}
