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
    this.student.check = true;
  }
  isChecked(){
    if(this.student.check&&this.student.check==true){
      return true
    }else{
      return false
    }
  }
  delete(){
    let id = this.student.id
    this.studentServ.students.forEach((item,index,array)=>{
      if(item.id == id){
        array.splice(index,1)
      }
    })
  }
  ngOnInit() {
  }
}
