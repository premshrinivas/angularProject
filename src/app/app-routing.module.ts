import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/component/login/login.component';
import { SignupComponent } from './auth/component/signup/signup.component';
import { RegisterComponent } from './auth/crud/register/register.component';
import { HeaderComponent } from './auth/component/header/header.component';
import { GridComponent } from './auth/crud/grid/grid.component';
import { Carousel1Component } from './auth/crud/carousel1/carousel1.component';
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

const routes: Routes = [{path: "",pathMatch: "full",redirectTo: "/login" },
{path: "login", component:LoginComponent },
{path: "home", component:HomeComponent },
{path: "signup", component:SignupComponent},
{path: "register", component:RegisterComponent},
{path: "header", component:HeaderComponent},
{path: "grid", component:GridComponent},
{path: "carousel1", component:Carousel1Component},
{path: "carousel2", component:Carousel2Component},
{path: "view", component:ViewComponent},
{path: "edit", component:EditComponent},
{path: "carousel3", component:Carousel3Component},
{path: "useredit", component:UsereditComponent},
{path: "usergrid", component:UsergridComponent},
{path: "userview", component:UserviewComponent},
{path: "navbar", component:NavbarComponent},
{path: "bill", component:BillComponent},
{path: "inward", component:InwardComponent},
{path:"dynamic",component:DynamicFormComponent},
{path:"clp",component:ClpComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
  
})
export class AppRoutingModule { }
