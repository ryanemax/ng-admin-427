import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { AppstoreService } from '../appstore.service'

@Component({
  selector: 'app-appstore-edit',
  templateUrl: './appstore-edit.component.html',
  styleUrls: ['./appstore-edit.component.scss']
})
export class AppstoreEditComponent implements OnInit,OnDestroy {
  appstoreId:string="";
  appstore:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getAppstoreSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private appstoreServ:AppstoreService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.appstore.name = String(this.appstore.name)
    this.appstore.platform = String(this.appstore.platform)
    this.appstore.review = String(this.appstore.review)
    this.appstore.rating = String(this.appstore.rating)
    this.appstoreServ.saveAppstore(this.appstore).subscribe(data=>{
      console.log(data)
      this.location.back();
    })
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let id = params['id']
          if(id=="new"){
            let appstore = {name:""}
            this.isNew = true;
            this.appstore = appstore
          }else{
            this.appstoreServ.getAppstoreById(id).subscribe(appstore=>{
            console.log(appstore)
            // this.appstoreId = appstore.objectId;
            this.appstore = appstore
        })
      }

    })
  }
  ngOnDestroy(){
  }


}
