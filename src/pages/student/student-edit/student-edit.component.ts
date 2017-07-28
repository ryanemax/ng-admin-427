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
    if(this.isNew){
      this.studentServ.students.push(this.student)
    }
    this.location.back();
  }
  ngOnInit() {
    this.getStudentSubscribe = this.route.params.subscribe(params=>{
      this.getStudent(params['sid']).then(student=>{
      console.log(student)
      this.studentId = student.id;
      this.student = student
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getStudentSubscribe.unsubscribe();
  }

  getStudent(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let student = {name:""}
        this.isNew = true;
        resolve(student)
      }
      let student = this.studentServ.students.find(item=>item.id == id)
      if(student){
        resolve(student)
      }else{
        reject("student not found")
      }
    })
    return p
}

}
