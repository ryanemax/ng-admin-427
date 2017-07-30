import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FunService } from '../fun.service'

@Component({
  selector: 'app-fun-edit',
  templateUrl: './fun-edit.component.html',
  styleUrls: ['./fun-edit.component.scss']
})
export class FunEditComponent implements OnInit,OnDestroy {
  funId:string="";
  fun:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getFunSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private funServ:FunService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){

    this.funServ.saveFun(this.fun).subscribe(data=>{
      console.log(data)
    })
     this.location.back();
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let id = params['sid']
          if(id=="new"){
            let fun = {name:""}
            this.isNew = true;
            this.fun = fun
          }else{
            this.isNew = false;
            this.funServ.getFunById(id).subscribe(fun=>{
            console.log(fun)
            this.fun = fun
        })
      }

    })
  }
  ngOnDestroy(){
  }

}
