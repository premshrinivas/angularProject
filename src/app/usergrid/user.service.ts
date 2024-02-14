import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getalluserdata(): Observable<any> {
    const headers = {
      "Content-type": "application/json"
    };
    return this.http.post<any>("http://localhost:8081/getalluserdata", {},{ headers });
  }
  getuserdata(input:any): Observable<any> {
    const headers = {
      "Content-type": "application/json"
    };
    return this.http.post<any>("http://localhost:8081/getuserdata?userid="+input, {},{ headers });
  }
  getusereditdata(input:any): Observable<any> {
    const headers = {
      "Content-type": "application/json"
    };
    return this.http.post<any>("http://localhost:8081/useredit", input, { headers });
  }
  deleteUserData(input:any): Observable<any> {
    const headers = {
      "Content-type": "application/json"
    };
    return this.http.post<any>("http://localhost:8081/getdeleteuserdata?userid="+input, {},{ headers });
  }
  
}
