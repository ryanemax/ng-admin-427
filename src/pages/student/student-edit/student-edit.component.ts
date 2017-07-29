import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from '../student.service'

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit,OnDestroy {
  studentId:string="";
  student:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getStudentSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private studentServ:StudentService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.student.exam1 = Number(this.student.exam1)
    this.student.exam2 = Number(this.student.exam2)
    this.student.exam3 = Number(this.student.exam3)
    this.studentServ.saveStudent(this.student).subscribe(data=>{
      console.log(data)
      this.location.back();
    })
    this.studentServ.saveStudent(this.student).subscribe(data=>{
      console.log(data)
      this.location.back();        
    })
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let id = params['id']
          if(id=="new"){
            let student = {name:""}
            this.isNew = true;
            this.student = student
          }else{
            this.studentServ.getStudentById(id).subscribe(student=>{
            console.log(student)
            // this.studentId = student.objectId;
            this.student = student
        })
      }

    })
  }
  ngOnDestroy(){
  }


}
