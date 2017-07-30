import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WbsService } from '../wbs.service'

@Component({
  selector: 'app-wbs-edit',
  templateUrl: './wbs-edit.component.html',
  styleUrls: ['./wbs-edit.component.scss']
})
export class WbsEditComponent implements OnInit, OnDestroy {

  isNew:boolean = false;
  wbs:any;
  constructor(private route: ActivatedRoute,
  private wbsServ:WbsService,
  private location: Location) {
  }

  save(){
    this.wbsServ.saveWbs(this.wbs).subscribe(data=>{
      console.log(data)
      this.location.back();
    })
    // this.studentServ.saveStudent(this.student).subscribe(data=>{
    //   console.log(data)
    //   this.location.back();        
    // })
  }

  back(){
    this.location.back();
  }

  ngOnInit() {
        this.route.params.subscribe(params=>{
          console.log(params['id'])
          let id = params['id']
          if(id=="new"){
            let wbs = {id:""}
            this.isNew = true;
            this.wbs = wbs
          }else{
        //     this.wbsServ.getStudentById(id).subscribe(student=>{
        //     console.log(student)
        //     // this.studentId = student.objectId;
        //     this.student = student
        // }
        // )
      }

    })
  }
  ngOnDestroy(){
  }
}
