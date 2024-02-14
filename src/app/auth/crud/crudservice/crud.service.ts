import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }
  savea(input:any): Observable<any> {
    const headers = {
      "Content-type": "application/json"
    };
    return this.http.post<any>("http://localhost:8081/savea", input, { headers });
  }
  getalldata(): Observable<any> {
    const headers = {
      "Content-type": "application/json"
    };
    return this.http.post<any>("http://localhost:8081/getalldata", {},{ headers });
  }
  getclientdata(input:any): Observable<any> {
    const headers = {
      "Content-type": "application/json"
    };
    return this.http.post<any>("http://localhost:8081/getclienddatabyname?clientname="+input, {},{ headers });
  }
  geteditdata(input:any): Observable<any> {
    const headers = {
      "Content-type": "application/json"
    };
    return this.http.post<any>("http://localhost:8081/geteditbyname?clientname="+input, {},{ headers });
  }
  edit(input:any): Observable<any> {
    const headers = {
      "Content-type": "application/json"
    };
    return this.http.post<any>("http://localhost:8081/edit", input, { headers });
  }
  deletecliendData(input:any): Observable<any> {
    const headers = {
      "Content-type": "application/json"
    };
    return this.http.post<any>("http://localhost:8081/deletecliendData?clientname="+input, {},{ headers });
  }

  getPageField(input:any): Observable<any> {
    const headers = {
      "Content-type": "application/json"
    };
    return this.http.post<any>("http://localhost:8081/formPageField?pageCode="+input, {},{ headers });
  }
  
  savePage(input:any): Observable<any> {
    const headers = {
      "Content-type": "application/json"
    };
    return this.http.post<any>("http://localhost:8081/Dysavea", input, { headers });
  }

  getdressData(): Observable<any> {
    const headers = {
      "Content-type": "application/json"
    };
    return this.http.post<any>("http://localhost:8081/product", {},{ headers });
  }
}
