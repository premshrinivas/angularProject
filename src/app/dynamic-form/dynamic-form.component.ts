import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import Swal from 'sweetalert2';
import { CrudService } from '../auth/crud/crudservice/crud.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  dats: any;
  dynamicFormArray: any;
  submitted: boolean = false;
  formData: any;
  form!: FormGroup;
  responseData: any;

  myForm: FormGroup = this.fb.group({

  });
  constructor(private httpclient: HttpClient, private fb: FormBuilder, private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
    this.callfunction(); 
  }
  callfunction() {
    if (localStorage.getItem("retirection") === "true") {
      this.getFormControls();
      const retirection="false";
      localStorage.setItem("retirection",retirection);
    } else {
      this.getFormControls();
      this.geteditdata();
    }
  }
  buildForm() {
    this.form = this.fb.group({});
  }
  getFormControls() {
    var pageCode = "Client";
    this.service.getPageField(pageCode).subscribe(data => {
      this.formData = data;
      this.createFormControls();
    });
  }
  createFormControls() {
    const formControls: any = {};

    for (const field of this.formData) {
      // if (field.need === true) {
      formControls[field.fields] = [null, Validators.required];
      // }
    }

    this.form = this.fb.group(formControls);
  }



  onSav() {
    console.log("clicked")
    this.submitted = true;
    if (this.form.valid) {
      this.submitted = false;
      this.service.savePage(this.form.value).subscribe((data: { result: string | undefined; }) => {

        if (data.result == "success") {
          this.form.reset();
          Swal.fire(
            'Travel Booked!',
            data.result,
            'success'

          )
          this.router.navigateByUrl("grid");

        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.result,
            footer: '<a href="">Why do I have this issue?</a>'
          })


        }



      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'form is invalid',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    console.log(this.myForm)
  }

  geteditdata() {
    var clientname = localStorage.getItem("clientname");
    this.service.geteditdata(clientname).subscribe(
      (data) => {
        this.responseData = data.responseObject;
        this.bindResponseDataToForm();
      },
      error => {
        console.error('Failed to fetch response data');
        // Handle error response
      }
    );
  }
  bindResponseDataToForm() {
    for (const field of this.formData) {
      const fieldName = field.fields;
      if (this.responseData.hasOwnProperty(fieldName)) {
        this.form.get(fieldName)!.setValue(this.responseData[fieldName]);
      }
    }
  }

  refreshPage() {
    window.location.reload();
  }
}
