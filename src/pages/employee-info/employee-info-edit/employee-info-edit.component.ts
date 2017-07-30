import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee-info.service'

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-info-edit.component.html',
  styleUrls: ['./employee-info-edit.component.scss']
})
export class EmployeeInfoEditComponent implements OnInit,OnDestroy {
  employeeId:string="";
  employee:any={
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getEmployeeSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private employeeServ:EmployeeService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    // this.employee.exam1 = Number(this.employee.exam1)
    // this.employee.exam2 = Number(this.employee.exam2)
    // this.employee.exam3 = Number(this.employee.exam3)
    this.employeeServ.saveEmployee(this.employee).subscribe(data=>{
      console.log(data)
      this.location.back();
    })
    // this.employeeServ.saveEmployee(this.employee).subscribe(data=>{
    //   console.log(data)
    //   this.location.back();        
    // })
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let id = params['id']
          if(id=="new"){
            let employee = {name:""}
            this.isNew = true;
            this.employee = employee
          }else{
            this.employeeServ.getEmployeeById(id).subscribe(employee=>{
            console.log(employee)
            // this.employeeId = employee.objectId;
            this.employee = employee
        })
      }

    })
  }
  ngOnDestroy(){
  }


}
