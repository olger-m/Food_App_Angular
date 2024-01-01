import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

   private apiLink
   = 'http://localhost:8080/api/v1/orders';

  

  createOrder(order: Object): Observable<Object> {
    console.log("service")
    return this.http.post(`${this.apiLink
    }`, order);
  }

constructor(private http:HttpClient) { }
}
