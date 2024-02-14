import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import VanillaTilt from 'vanilla-tilt';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private service: AuthService,private router :Router) { }
  
  login:FormGroup=this.fb.group({

    email:['', Validators.required],
    password:['', Validators.required]

  })



  
  
  
  
  
  
  ngOnInit(): void {

    document.addEventListener("DOMContentLoaded", function (event) {
      // Your code to run since DOM is loaded and ready
      VanillaTilt.init(<HTMLInputElement><unknown>document.querySelectorAll(".card"), {
          max: 25,
          speed: 400,
          glare: false,
          "max-glare": 0.8
      });
      VanillaTilt.init(<HTMLInputElement><unknown>document.querySelectorAll(".card"));
  });
  }
  onSubmit(){
    if(this.login.valid){
      this.service.login(this.login.value).subscribe((data)=>{ 
        if(data.result=="success"){
          localStorage.setItem("name",data.responseObject.name);
          localStorage.setItem("email",data.responseObject.email);
          localStorage.setItem("role",data.responseObject.role);
          localStorage.setItem("userImage",data.responseObject.userImage);
          this.router.navigateByUrl("carousel3");

        }else{
          // alert(data.result)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong user',
            
          })

        }


      })

    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'empty fields',
        
      })

    }



    
  }

}
