import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {EmployeeService} from "../employee-info.service";

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-info-item.component.html',
  styleUrls: ['./employee-info-item.component.scss']
})
export class EmployeeInfoItemComponent implements OnInit {
  @Input() employee:any
  @Output() employeeClick = new EventEmitter<any>();
  constructor(public employeeServ:EmployeeService) { 
  }
  onStudentClick(){
    this.employeeClick.emit(this.employee)
  }
  check(){
    if(this.employee.check&&this.employee.check==true){
      this.employee.check = false;
    }else{
      this.employee.check = true
    }
  }
  isChecked(){
    if(this.employee.check&&this.employee.check==true){
      return true
    }else{
      return false
    }
  }
  ngOnInit() {
  }
}
