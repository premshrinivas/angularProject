import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel3',
  templateUrl: './carousel3.component.html',
  styleUrls: ['./carousel3.component.css']
})
export class Carousel3Component implements OnInit {
  email:any;
  name:any;
  username:any;
  role:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.name=localStorage.getItem("name");
  this.email=localStorage.getItem("email");
  this.username="data:image/jpeg;base64,"+localStorage.getItem("username");
  this.role=localStorage.getItem("role");
  }
  onedit(){
    var userid=String(localStorage.getItem("email"));
   
    localStorage.setItem("userid",userid);
    this.router.navigateByUrl("useredit");
   
     }
   
     onlogout(){
       localStorage.clear();
       this.router.navigateByUrl("login")
     }
}
