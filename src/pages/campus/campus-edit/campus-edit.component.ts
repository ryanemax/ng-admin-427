import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { CampusService } from '../campus.service'

@Component({
  selector: 'app-campus-edit',
  templateUrl: './campus-edit.component.html',
  styleUrls: ['./campus-edit.component.scss']
})
export class CampusEditComponent implements OnInit,OnDestroy {
  campusId:string="";
  campus:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getCampusSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private campusServ:CampusService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    console.log("aaa1")
    console.log(this)
    this.campus.avgtotal = Number(this.campus.avgtotal)
    this.campus.randomindex = Number(this.campus.randomindex)
    this.campus.index = Number(this.campus.index)
    this.campus.campusId = Number(this.campus.campusId)
    this.campusServ.saveCampus(this.campus).subscribe(data=>{
      console.log(data)
      this.location.back();
      this.location.back();
    })
    // this.campusServ.saveCampus(this.campus).subscribe(data=>{
    //   console.log(data)
    //   this.location.back();        
    // })
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let id = params['id']
          if(id=="new"){
            let campus = {name:""}
            this.isNew = true;
            this.campus = campus
          }else{
            this.campusServ.getCampusById(id).subscribe(campus=>{
              console.log("aaaa1")
            console.log(campus)
            // this.campusId = campus.objectId;
            this.campus = campus
        })
      }

    })
  }
  ngOnDestroy(){
  }


}
