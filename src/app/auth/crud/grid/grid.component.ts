import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CrudService } from '../crudservice/crud.service';


declare var $: any;

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
  gridlist: any;
  role: any;
  username: any;
  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    // this.getalldata();
   this.getdressdata();
    this.role = localStorage.getItem("role");

  }
  onview(input: any) {
    localStorage.setItem("clientname", input)
    this.router.navigateByUrl("dynamic");

  }
  onedit(input: any) {

    localStorage.setItem("clientname", input)
    this.router.navigateByUrl("dynamic");

  }
  ondelete(input: any) {


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

        this.crudService.deletecliendData(input).subscribe((data) => {
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

  getalldata() {

    $('#gridtable').DataTable().clear().destroy();
    this.crudService.getalldata().subscribe((response) => {
      $(document).ready(function () {
        $('#gridtable').DataTable({
          "pagingtype": "numbers",
          "lengthchange": true,
          "dom": 'rt<"bottom"lip><"clear">'
        });



      });

      this.gridlist = response.responseData;

    })


  }
  getdressdata() {

    $('#gridtable').DataTable().clear().destroy();
    this.crudService.getdressData().subscribe((response) => {
      $(document).ready(function () {
        $('#gridtable').DataTable({
          "pagingtype": "numbers",
          "lengthchange": true,
          "dom": 'rt<"bottom"lip><"clear">'
        });



      });

      this.gridlist = response.responseData;

    })


  }

}



