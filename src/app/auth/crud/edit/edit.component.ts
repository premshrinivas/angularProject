import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CrudService } from '../crudservice/crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private fb:FormBuilder,private crudservice: CrudService,private router :Router) { }
  submitted: boolean =false;
  edit:FormGroup=this.fb.group({

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
this.geteditdata();
  }
  geteditdata(){
    this.submitted =true;
    var clientname = localStorage.getItem("clientname");
    this.crudservice.geteditdata(clientname).subscribe((data)=>{
    this.edit.controls['name'].setValue(data.responseObject.name);
    this.edit.controls['toplace'].setValue(data.responseObject.toplace);
    this.edit.controls['phone'].setValue(data.responseObject.phone);
    this.edit.controls['email'].setValue(data.responseObject.email);
    this.edit.controls['packagee'].setValue(data.responseObject.packagee);
    this.edit.controls['noperson'].setValue(data.responseObject.noperson);
    this.edit.controls['start'].setValue(data.responseObject.start);
    this.edit.controls['end'].setValue(data.responseObject.end);
    this.edit.controls['povisit'].setValue(data.responseObject.povisit);
    this.edit.controls['tovehicle'].setValue(data.responseObject.tovehicle);
    this.edit.controls['trips'].setValue(data.responseObject.trips);
    
    })
    
    
    
      }
      onedit(){
        if(this.edit.valid){
          this.crudservice.edit(this.edit.value).subscribe((data)=>{ 
            if(data.result=="success"){
              Swal.fire(
                'Travel edited!',
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
            this.edit.controls['start'].setValue(`${day}-${month}-${d.getFullYear()}`);
          }else{
            this.edit.controls['end'].setValue(`${day}-${month}-${d.getFullYear()}`);
          }
          
         
        }
      }

}
