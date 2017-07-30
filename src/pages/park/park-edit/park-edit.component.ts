import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ParkService } from '../park.service'

@Component({
  selector: 'app-park-edit',
  templateUrl: './park-edit.component.html',
  styleUrls: ['./park-edit.component.scss']
})
export class ParkEditComponent implements OnInit,OnDestroy {
  parkId:string="";
  park:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getParkSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private parkServ:ParkService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.park.index = Number(this.park.index)
    this.park.time = Number(this.park.time)
    this.park.price = Number(this.park.price)
    this.park.telphone = Number(this.park.telphone)
    this.parkServ.savePark(this.park).subscribe(data=>{
      console.log(data)
    })
    this.location.back();  
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let id = params['id']
          if(id=="new"){
            let park = {name:""}
            this.isNew = true;
            this.park = park
          }else{
            this.parkServ.getParkById(id).subscribe(park=>{
            console.log(park)
            this.park = park
        })
      }

    })
  }
  ngOnDestroy(){
  }

}
