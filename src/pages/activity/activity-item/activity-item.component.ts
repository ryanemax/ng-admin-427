import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {ActivityService} from "../activity.service";

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss']
})
export class ActivityItemComponent implements OnInit {
  @Input() activity:any
  @Output() activityClick = new EventEmitter<any>();
  constructor(public activityServ:ActivityService) { 
  }
  onActivityClick(){
    this.activityClick.emit(this.activity)
  }
  check(){
    if(this.activity.check&&this.activity.check==true){
      this.activity.check = false;
    }else{
      this.activity.check = true
    }
  }
  isChecked(){
    if(this.activity.check&&this.activity.check==true){
      return true
    }else{
      return false
    }
  }
  ngOnInit() {
  }
}
