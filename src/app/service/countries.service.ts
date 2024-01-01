import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
private apiLink
   = 'https://countriesnow.space/api/v0.1/countries';
   constructor(private http:HttpClient) { }
    
   
   getAllCountries(): Observable<any> {
    return this.http.get(`${this.apiLink
    }`);
  }
}
