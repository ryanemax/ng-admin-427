import { Component, OnInit } from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Parse } from '../../../cloud/parse';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave-page',
  templateUrl: './leave-page.component.html',
  styleUrls: ['./leave-page.component.scss']
})
export class LeavePageComponent implements OnInit {
  leaves:Array<any>;

  constructor(meta: Meta, title: Title, private http:Http, 
              private leaveService: LeaveService) { 
    title.setTitle('员工休假列表');
    // let query = new Parse.Query('Leave', http);
    // query.find().subscribe(data => {
    //   console.log(data[0]);
    //   // this.leaves = data;
    // });
    this.loadData();
    // console.log(this.leaves[0]);
  }

  ngOnInit() {
  }

  loadData(){
    this.leaveService.getLeaves().then(result=>{
      this.leaves = result;
      console.log('then');
    }).catch(err => {
      console.log('error');
    });
  }

  deleteLeave(objectId:string){
    // alert('delete ' + objectId);
    this.leaveService.deleteLeave(objectId).
                      then(data=>{
                        console.log(data);
                        this.loadData();
                      }).catch(err=>{
                        // console.log(err);
                        alert(err);
                      });
  }

}
