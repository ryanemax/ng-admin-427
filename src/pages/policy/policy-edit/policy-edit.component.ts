import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { PolicyService } from '../policy.service'

@Component({
  selector: 'app-policy-edit',
  templateUrl: './policy-edit.component.html',
  styleUrls: ['./policy-edit.component.scss']
})
export class PolicyEditComponent implements OnInit,OnDestroy {
  policy:any={policyNo:""};
  isNew:boolean = false;

  // Subscribe Declaration
  getPolicySubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private policyServ:PolicyService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.policy.policyNo = Number(this.policy.policyNo)
    this.policy.policyOwner = Number(this.policy.policyOwner)
    this.policy.insuredPerson = Number(this.policy.insuredPerson)
    this.policy.product = Number(this.policy.product)
    this.policy.insuredCost = Number(this.policy.insuredCost)
    this.policy.insuredSumValue = Number(this.policy.insuredSumValue)
    this.policy.effectiveDate = Number(this.policy.effectiveDate)
    this.policy.policyState = Number(this.policy.policyState)
    this.policyServ.savePolicy(this.policy).subscribe(data=>{
      console.log(data)
      this.location.back();
    })
    this.policyServ.savePolicy(this.policy).subscribe(data=>{
      console.log(data)
      this.location.back();        
    })
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let id = params['id']
          if(id=="new"){
            let policy = {policyNo:""}
            this.isNew = true;
            this.policy = policy
          }else{
            this.policyServ.getPolicyById(id).subscribe(policy=>{
            console.log(policy)
            this.policy = policy
        })
      }

    })
  }
  ngOnDestroy(){
  }


}
