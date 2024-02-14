import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';


@Component({
  selector: 'app-inward',
  templateUrl: './inward.component.html',
  styleUrls: ['./inward.component.css']
})
export class InwardComponent implements OnInit {

  constructor(private fb:FormBuilder,private service: AuthService,private router :Router) { }

  ngOnInit(): void {
  }

}
