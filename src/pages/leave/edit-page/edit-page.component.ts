import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { LeaveService } from '../leave.service';

// import { Compon}

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  id:string;
  leave:{
    name:string,
    gender:string,
    department:string,
    date:string
  };
  male:string;
  female:string;

  constructor(private route: ActivatedRoute, private location: Location, private leaveService: LeaveService) {
    this.leave = {
      name:'',
      gender:'',
      department:'',
      date:''
    };
    this.male = 'unchecked';
    this.female = 'unchecked';
  }

  back(){
    this.location.back();
  }

  save(){
    console.log(this.leave);
    let opt = '';
    if(this.id == 'new'){
      opt = 'new';
    }else{
      opt = 'update';
    }

    this.leaveService.SaveLeave(opt, this.leave).
                      then(data=>{
                        console.log(data);
                        this.location.back();
                      }).catch(err=>{
                        alert(err);
                      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.id = id;
      if(id == 'new'){
        
      }else{
        this.leaveService.getLeaveById(id).then(result => {
          this.leave = result;
          if(this.leave.gender=='M'){
            this.male = 'checked';
            console.log('male');
          }else{
            this.female = 'checked';
            console.log('female');
          }
          console.log('then: ');
          console.log(result);
        }).catch(err => {
          console.log(err);
        });
      }
    });
  }
}
