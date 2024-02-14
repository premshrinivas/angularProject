import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import VanillaTilt from 'vanilla-tilt';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  profilePictureBase64: any;

  constructor(private fb: FormBuilder, private service: AuthService, private router: Router) { }

  signup: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    phone: ['', Validators.required],
    userImage: ['', Validators.required]

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
  onSignup() {

    this.signup.controls['userImage'].setValue(this.profilePictureBase64);
    if (this.signup.valid) {
      this.service.signupapi(this.signup.value).subscribe((data) => {
        if (data.result == "success") {
          Swal.fire(
            'User created',
            data.result,
            'success'

          )
          this.router.navigateByUrl("login");

        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.result,

          })

        }


      })

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'chinnu',

      })

    }
  }

  handleFileSelect(evt: any) {
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this.reader.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  reader(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.profilePictureBase64 = btoa(binaryString);
  }
}







