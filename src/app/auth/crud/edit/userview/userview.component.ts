import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/usergrid/user.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  userImage:any;
  role:any;
  constructor(private fb: FormBuilder, private userservice: UserService, private router: Router) { }

  useredit: FormGroup = this.fb.group({

    email: ['', Validators.required],
    password: ['', Validators.required],
    phone: ['', Validators.required],
    name: ['', Validators.required],
    role: ['', Validators.required],
    userImage: ['']

  })
  ngOnInit(): void {
    this.getuserdata();
    this.role=localStorage.getItem("role");
  }
  getuserdata(){
    var userid = localStorage.getItem("userid");
    this.userservice.getuserdata(userid).subscribe((data)=>{
    this.useredit.controls['email'].setValue(data.responseObject.email);
    this.useredit.controls['password'].setValue(data.responseObject.password);
    this.useredit.controls['phone'].setValue(data.responseObject.phone);
    this.useredit.controls['name'].setValue(data.responseObject.name);
    this.useredit.controls['role'].setValue(data.responseObject.role);
    this.userImage ="data:image/jpeg;base64,"+data.responseObject.userImage;
    })
    
    
    
      }

}
