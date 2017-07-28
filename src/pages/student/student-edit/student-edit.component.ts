import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  studentId:string="";
  constructor(private route: ActivatedRoute,) {
    console.log(this.route.paramMap)
  }

  ngOnInit() {
      this.route.paramMap
    .switchMap((params: ParamMap) => 
        this.studentId = params.get('sid')
      )
    
  }

}
