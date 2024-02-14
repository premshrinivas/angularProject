import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jQuery from 'jquery';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email:any;
  name:any;
  userImage:any;
  role:any;
  constructor(private router: Router,private service: AuthService) { }

  ngOnInit(): void {
  this.name=localStorage.getItem("name");
  this.email=localStorage.getItem("email");
  this.userImage="data:image/jpeg;base64,"+localStorage.getItem("userImage");
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

     myMethod(){
       const retirection="true";
       localStorage.setItem("retirection",retirection);
     }
    
}

