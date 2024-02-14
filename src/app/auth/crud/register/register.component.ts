import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/auth/crud/crudservice/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  submitted: boolean =false;
  

  constructor(private fb:FormBuilder,private service: CrudService,private router :Router) { }
  savea:FormGroup=this.fb.group({

    name:['', Validators.required],
    toplace:['', Validators.required],
    phone:['', Validators.required],
    email:['', Validators.required],
    packagee:['', Validators.required],
    noperson:['', Validators.required],
    start:['', Validators.required],
    end:['', Validators.required],
    povisit:['', Validators.required],
    tovehicle:['', Validators.required],
    trips:['', Validators.required],
  
    
      })




  ngOnInit(): void {
  }
  get start() {
    return this.savea.get('start')!;
  }
  get end() {
    return this.savea.get('end')!;
  }
  get name() {
    return this.savea.get('name')!;
  }
  get toplace() {
    return this.savea.get('toplace')!;
  }
  get phone() {
    return this.savea.get('phone')!;
  }
  get packagee() {
    return this.savea.get('packagee')!;
  }
  get noperson() {
    return this.savea.get('noperson')!;
  }
  get povisit() {
    return this.savea.get('povisit')!;
  }
  get tovehicle() {
    return this.savea.get('tovehicle')!;
  }
  get trips() {
    return this.savea.get('trips')!;
  }
  get email() {
    return this.savea.get('email')!;
  }
  
  getDateInRequiredFormat(d: Date,type:any){
   
    if (d instanceof Date) {
      let month: string | number = d.getMonth() + 1;
      if (month < 10) {
        month = '0' + month;
      }
      let day: string | number = d.getDate();
      if (day < 10) {
        day = '0' + day;
      }

     
      console.log(`${day}-${month}-${d.getFullYear()}`);
      if(type == 'startDate'){
        this.savea.controls['start'].setValue(`${day}-${month}-${d.getFullYear()}`);
      }else{
        this.savea.controls['end'].setValue(`${day}-${month}-${d.getFullYear()}`);
      }
      
      
      // this.savea.controls['start'].setValue(`${day}-${month}-${d.getFullYear()}`);
    }
  }
  
 onSave(){
  this.submitted =true;
    if(this.savea.valid){
      this.service.savea(this.savea.value).subscribe((data)=>{ 
        if(data.result=="success"){
          this.savea.reset();
          Swal.fire(
            'Travel Booked!',
            data.result,
            'success'
   
             )
             this.router.navigateByUrl("grid");

        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.result,
            footer: '<a href="">Why do I have this issue?</a>'
          })


        }


      })

    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'form is invalid',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }

  }

}
