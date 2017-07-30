import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { CommodityService } from '../commodity.service';

@Component({
  selector: 'app-commodity-edit',
  templateUrl: './commodity-edit.component.html',
  styleUrls: ['./commodity-edit.component.scss']
})

export class CommodityEditComponent implements OnInit {
  commodityId: string = "";
  commodity: any={
    name: "",
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getCommoditySubscribe: any;

  constructor(private route: ActivatedRoute,
  private commodityServ: CommodityService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.commodity.price = Number(this.commodity.price);
    this.commodity.commodityId = Number(this.commodity.commodityId);
    this.commodityServ.saveCommodity(this.commodity).subscribe(data=>{
      console.log(data);
      this.location.back();
    })
    this.commodityServ.saveCommodity(this.commodity).subscribe(data=>{
      console.log(data)
      this.location.back();
    })
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let id = params['id'];
          if(id=="new"){
            let commodity = {name:""}
            this.isNew = true;
            this.commodity = commodity;
          }else{
            this.commodityServ.getCommodityById(id).subscribe(commodity=>{
            console.log(commodity);
            // this.commodityId = commodity.objectId;
            this.commodity = commodity;
        })
      }
    })
  }
}
