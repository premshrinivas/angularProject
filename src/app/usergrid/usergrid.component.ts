import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CrudService } from '../auth/crud/crudservice/crud.service';
import { UserService } from './user.service';


declare var $:any;
@Component({
  selector: 'app-usergrid',
  templateUrl: './usergrid.component.html',
  styleUrls: ['./usergrid.component.css']
})
export class UsergridComponent implements OnInit {
  userlist: any;
  role: any;
  username:any;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.getalluserdata();
    this.role=localStorage.getItem("role");
  

  }
  onuseredit(input:any){
    localStorage.setItem("userid",input)
    this.router.navigateByUrl("useredit");


  }
  onuserview(input:any){
    localStorage.setItem("userid",input)
    this.router.navigateByUrl("userview");


  }
  
  ondelete(input:any){
    
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.userService.deleteUserData(input).subscribe((data)=>{
          // this.router.navigateByUrl("user-grid");
          Swal.fire(
            'Deleted!',
            data.result,
            'success'
          )
         this.ngOnInit();

        })
       
      }
    })


  }
  getalluserdata(){
console.log('start');

    $('#usertable').DataTable().clear().destroy();
    this.userService.getalluserdata().subscribe((response)=>{
      console.log(response);
      
    $(document).ready(function(){
    $('#usertable').DataTable({
      // "pagingtype":"numbers",
      // "lengthchange":true,
      // "dom":'rt<"bottom"lip><"clear">'
    });
    
    
    
    });
    
    this.userlist=response.responseData;
    
    })
    
    
      }
    
}
