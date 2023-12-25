import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
 
    private apiLink
   = 'http://localhost:8080/api/v1/foods';

  

  constructor(private http:HttpClient) { }
    getFoods(): Observable<any> {
    return this.http.get(`${this.apiLink
    }`);
  }

  getFoodById(id:number):Observable<any>{
    return this.http.get(`${this.apiLink}/${id}`);
  }
   updateFood(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.apiLink}/${id}`, value);
  }
    deleteFood(id: number): Observable<any> {
    return this.http.delete(`${this.apiLink}/${id}`, { responseType: 'text' });
  }

getAllFoods():string[]{
return[
  '/assets/images/food1.jpg',
    '/assets/images/food2.jpg',
  '/assets/images/food3.jpg',
  '/assets/images/food4.jpg',
  '/assets/images/food5.jpg'

]
}


}
