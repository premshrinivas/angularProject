import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../auth/crud/crudservice/crud.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  email:any;
  name:any;
  username:any;
  role:any;
  constructor(private fb:FormBuilder,private service: CrudService,private router :Router) { }


  bill:FormGroup=this.fb.group({
  
    
      })

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
