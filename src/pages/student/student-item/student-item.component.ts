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
  @Input() user:any
  @Output() userClick = new EventEmitter<any>();
  constructor(private studentServ:StudentService) { 
  }
  onUserClick(){
    this.userClick.emit(this.user)
  }
  delete(){
    let id = this.user.id
    this.studentServ.students.forEach((item,index,array)=>{
      if(item.id == id){
        array.splice(index,1)
      }
    })
  }
  ngOnInit() {
  }
}
