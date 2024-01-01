import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
private apiLink
   = 'http://localhost:8080/api/v1/role';

  constructor(private http:HttpClient) { }


}
