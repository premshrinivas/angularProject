import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crudservice/crud.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private fb:FormBuilder,private crudService: CrudService,private router :Router) { }
 
  viewform:FormGroup=this.fb.group({

    name:['', Validators.required],
    toplace:['', Validators.required],
    phone:['', Validators.required],
    packagee:['', Validators.required],
    noperson:['', Validators.required],
    start:['', Validators.required],
    trips:['', Validators.required],
    end:['', Validators.required],
    povisit:['', Validators.required],
    tovehicle:['', Validators.required],
    email:['', Validators.required],

  
    
      })

  ngOnInit(): void {
    this.getclientdata();
  }
  getclientdata(){
var clientname = localStorage.getItem("clientname");
this.crudService.getclientdata(clientname).subscribe((data)=>{
this.viewform.controls['name'].setValue(data.responseObject.name);
this.viewform.controls['toplace'].setValue(data.responseObject.toplace);
this.viewform.controls['phone'].setValue(data.responseObject.phone);
this.viewform.controls['email'].setValue(data.responseObject.email);
this.viewform.controls['packagee'].setValue(data.responseObject.packagee);
this.viewform.controls['noperson'].setValue(data.responseObject.noperson);
this.viewform.controls['start'].setValue(data.responseObject.start);
this.viewform.controls['end'].setValue(data.responseObject.end);
this.viewform.controls['povisit'].setValue(data.responseObject.povisit);
this.viewform.controls['tovehicle'].setValue(data.responseObject.tovehicle);
this.viewform.controls['trips'].setValue(data.responseObject.trips);
})



  }
  getDateInRequiredFormat(d: Date){
   
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
      
      this.viewform.controls['start'].setValue(`${day}-${month}-${d.getFullYear()}`);
    }
  }

}
