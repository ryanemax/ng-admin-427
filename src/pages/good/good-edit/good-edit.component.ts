import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { GoodService } from '../good.service'

@Component({
  selector: 'app-good-edit',
  templateUrl: './good-edit.component.html',
  styleUrls: ['./good-edit.component.scss']
})
export class GoodEditComponent implements OnInit {
  goodId:string="1";

  good:any={
    name:""
  };
    // Subscribe Declaration
  isNew:boolean = false;
  getGoodSubscribe:any;

  constructor(private route: ActivatedRoute,private goodServ:GoodService, private location: Location) {
    console.log(this.route.paramMap)
  }

  back(){
    this.location.back();
  }
  save(){
    this.goodServ.saveGood(this.good).subscribe(data=>{
      console.log(data)
      this.location.back();
    })
    this.goodServ.saveGood(this.good).subscribe(data=>{
      console.log(data)
      this.location.back();        
    })
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let id = params['id']
          if(id=="new"){
            let good = {name:""}
            this.isNew = true;
            this.good = good
          }else{
            this.goodServ.getGoodById(id).subscribe(good=>{
            console.log(good)
            // this.goodId = good.objectId;
            this.good = good
        })
      }

    })
  }

  // ngOnDestroy(){
  //   this.getGoodSubscribe.unsubscribe();
  // }

  getGood(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let good = {name:""}
        this.isNew = true;
        resolve(good)
      }
      let good = this.goodServ.goods.find(item=>item.id == id)
      if(good){
        resolve(good)
      }else{
        reject("good not found")
      }
    })
    return p
}
}
