import { HttpClient } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 



  constructor(private http: HttpClient) {}

  ngOnInit() {
   
  }
  bgvariable:boolean=false;
  headervariable:boolean=false;
  
  @HostListener('document:scroll')

  onScroll(){
  if (document.body.scrollTop> 60 || document.documentElement.scrollTop > 60) {
    this.bgvariable= true;
    this.headervariable= true;
  }else{
    this.bgvariable= false;
    this.headervariable= false;

  }
  }

}
