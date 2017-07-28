import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {StudentService} from "../student.service";

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {
  @Input() student:any
  @Output() studentClick = new EventEmitter<any>();
  constructor(private studentServ:StudentService) { 
  }
  onStudentClick(){
    this.studentClick.emit(this.student)
  }
  check(){
    if(this.student.check&&this.student.check==true){
      this.student.check = false;
    }else{
      this.student.check = true
    }
  }
  isChecked(){
    if(this.student.check&&this.student.check==true){
      return true
    }else{
      return false
    }
  }
  ngOnInit() {
  }
}
