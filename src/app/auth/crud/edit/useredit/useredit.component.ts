import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/usergrid/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  profilePictureBase64: string = "";
  userImage:any;
  role: any;
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

      onuseredit(){


    this.useredit.controls['userImage'].setValue(this.profilePictureBase64);
    if (this.useredit.valid) {
      this.userservice.getusereditdata(this.useredit.value).subscribe((data) => {
        if (data.result == "success") {
          Swal.fire(
            'User edited',
            data.result,
            'success'

          )
          this.router.navigateByUrl("usergrid");
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
        text: 'empty fields',

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
