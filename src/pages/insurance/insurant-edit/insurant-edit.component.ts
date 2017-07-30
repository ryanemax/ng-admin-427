import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { InsuranceService } from '../insurance.service'

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-insurant-edit',
  templateUrl: './insurant-edit.component.html',
  styleUrls: ['./insurant-edit.component.scss']
})
export class InsurantEditComponent implements OnInit,OnDestroy {
  insurantId:string="";
  insurant:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getInsurantSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private insuranceServ:InsuranceService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    // this.insurant.exam1 = Number(this.insurant.exam1)
    // this.insurant.exam2 = Number(this.insurant.exam2)
    this.insurant.age = Number(this.insurant.age)
    this.insuranceServ.saveInsurance(this.insurant).subscribe(data=>{
      // this.location.back();
      this.location.go("/insurant")
    })
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let id = params['id']
          if(id=="new"){
            let insurant = {name:""}
            this.isNew = true;
            this.insurant = insurant
          }else{
            this.insuranceServ.getInsuranceById(id).subscribe(insurant=>{
            // console.log(insurant)

            this.insurant = insurant
        })
      }

    })
  }
  ngOnDestroy(){
  }


}
