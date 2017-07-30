import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ActivityService } from '../activity.service'

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss']
})
export class ActivityEditComponent implements OnInit,OnDestroy {
  activityId:string="";
  activity:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getActivitySubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private activityServ:ActivityService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.activity.time = Number(this.activity.time)
    this.activity.population = Number(this.activity.population)
    this.activity.organizer = Number(this.activity.organizer)
    this.activityServ.saveActivity(this.activity).subscribe(data=>{
      console.log(data)
      this.location.back();
    })
    this.activityServ.saveActivity(this.activity).subscribe(data=>{
      console.log(data)
      this.location.back();        
    })
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let id = params['id']
          if(id=="new"){
            let activity = {name:""}
            this.isNew = true;
            this.activity = activity
          }else{
            this.activityServ.getActivityById(id).subscribe(activity=>{
            console.log(activity)
            // this.activityId = activity.objectId;
            this.activity = activity
        })
      }

    })
  }
  ngOnDestroy(){
  }


}
