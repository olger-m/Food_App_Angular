import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
private messageSource = new BehaviorSubject('default message');
 currentMessage = this.messageSource.asObservable();

 constructor() { }

 changeMessage(message: string) {
  console.log(message)
    this.messageSource.next(message);
 }
}
