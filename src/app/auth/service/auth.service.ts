import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient) { }

  
  login(input:any): Observable<any> {
    const headers = {
      "Content-type": "application/json"
    };
    return this.http.post<any>("http://localhost:8081/login", input, { headers });
  }
  
  signupapi(input:any): Observable<any> {
    const headers = {
      "Content-type": "application/json"
    };
    return this.http.post<any>("http://localhost:8081/signup", input, { headers });
  }


}


