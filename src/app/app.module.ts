import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/component/login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './auth/component/signup/signup.component';
import { RegisterComponent } from './auth/crud/register/register.component';
import { HeaderComponent } from './auth/component/header/header.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './auth/crud/grid/grid.component';
import { Carousel1Component } from './auth/crud/carousel1/carousel1.component';
import { Carousel1Directive } from './carousel1.directive';
import { Carousel2Component } from './auth/crud/carousel2/carousel2.component';
import { ViewComponent } from './auth/crud/view/view.component';
import { EditComponent } from './auth/crud/edit/edit.component';
import { FooterComponent } from './auth/component/footer/footer.component';
import { Carousel3Component } from './auth/crud/carousel3/carousel3.component';
import { UsergridComponent } from './usergrid/usergrid.component';
import { UsereditComponent } from './auth/crud/edit/useredit/useredit.component';
import { UserviewComponent } from './auth/crud/edit/userview/userview.component';
import { NavbarComponent } from './auth/component/navbar/navbar.component';
import { BillComponent } from './bill/bill.component';
import { InwardComponent } from './home/inward/inward.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ClpComponent } from './dynamic-form/clp/clp.component';
import { CountryComponent } from './auth/crud/view/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    RegisterComponent,
    HeaderComponent,
    GridComponent,
    Carousel1Component,
    Carousel1Directive,
    Carousel2Component,
    ViewComponent,
    EditComponent,
    FooterComponent,
    Carousel3Component,
    UsergridComponent,
    UsereditComponent,
    UserviewComponent,
    NavbarComponent,
    BillComponent,
    InwardComponent,
    DynamicFormComponent,
    ClpComponent,
    CountryComponent,
   
 
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot() ,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
