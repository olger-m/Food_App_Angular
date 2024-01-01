import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiLink
   = 'http://localhost:8080/api/v1/users';

  constructor(private http:HttpClient) { }




  getUser(id: number): Observable<any> {
    return this.http.get(`${this.apiLink
    }/${id}`);
  }
  getUserByEmail(email:string): Observable<any> {
    return this.http.get(`${this.apiLink
    }/${email}/get`);
  }

  createUser(employee: Object): Observable<Object> {
    return this.http.post(`${this.apiLink
    }`, employee);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.apiLink
    }/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiLink
    }/${id}`, { responseType: 'text' });
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.apiLink
    }`);
  }
}
