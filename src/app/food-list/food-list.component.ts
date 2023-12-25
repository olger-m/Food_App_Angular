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
listOfBooks!: Food[];
food :Food;
// id:number;
clickedAddBook: boolean=false;
   sortKey: string="null";
   sortOrder: string="null";
   @Input() searchEvent: any;
  listOfBooksToDisplay: Food[];
 constructor(private route: ActivatedRoute,private router: Router,private foodService: FoodService,private search:SearchService) { }

filterBooks(input: string): void {
 if (!input) {
    this.listOfBooksToDisplay = this.listOfBooks;
 } else {
    this.listOfBooksToDisplay = this.listOfBooks.filter(book =>
      book.name.toLowerCase().includes(input.toLowerCase())
    );
 }
}


 ngOnInit(): void {
  
  console.log(this.input)
  this.reloadData();

  // this.applyFilter()
 }

  sort(key: string) {
    if (this.sortKey === key) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortOrder = 'asc';
    }
   this.listOfBooks.sort((a:any , b: any) => {
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
    this.listOfBooks=data;
    this.search.currentMessage.subscribe(message=>
      {this.input=message
      if (message==="default message") {
    this.listOfBooksToDisplay = this.listOfBooks;
 } else {
    this.listOfBooksToDisplay = this.listOfBooks.filter(book =>
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
    this.router.navigate(['/book-list']);
  }

   foodDetails(id: number){
    this.router.navigate(['details', id]);
  }

//  onSubmit(formData: String): void {
//     this.foodService.addbookv1(formData).subscribe()
//  }
 showAddBook(): void {
  this.clickedAddBook=!this.clickedAddBook
 }

 editBook(bookId: number) {
    this.router.navigate(['updateFood', bookId]);
    
}
onSearch(event: Event) {
 const searchForm = (event.target as HTMLInputElement).value;
 console.log(searchForm);
}
// aBook(formData: string) {
// this.foodService.addbookv1(formData)
// }
}
