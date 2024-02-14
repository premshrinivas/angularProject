import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/auth/crud/crudservice/crud.service';

@Component({
  selector: 'app-clp',
  templateUrl: './clp.component.html',
  styleUrls: ['./clp.component.css']
})
export class ClpComponent implements OnInit {
  form!: FormGroup;
  formData: any; // Array to hold the form field data fetched from the database
  responseData: any;
  

  constructor(private httpclient: HttpClient, private fb: FormBuilder, private service: CrudService, private router: Router) { }

  ngOnInit() {
    this.buildForm();
    this.getFormControls();
    this. geteditdata();
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
    const formControls :any= {};

    for (const field of this.formData) {
      formControls[field.fields] = [null, Validators.required];
    }

    this.form = this.fb.group(formControls);
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
}
