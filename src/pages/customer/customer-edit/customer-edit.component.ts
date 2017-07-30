import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { CustomerService } from '../customer.service'

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit,OnDestroy {
  customerId:string="";
  customer:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getUserSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private customerServ:CustomerService,
  private location: Location) {
  }
  back(){
      this.location.back();
      this.location.go("customer","");
  }
  save(){
    // this.customer.startDate = new Date(this.customer.startDate.replace(/-/g, "/"))
    // this.customer.endDate = new Date(this.customer.endDate.replace(/-/g, "/"))
    this.customer.fee = Number(this.customer.fee)
    console.log("666",this.customer)
    // this.customer.startDate = this.customer.startDate
    // this.customer.endDate = this.customer.endDate
    console.log("777",this.customer)
    this.customerServ.saveCustomer(this.customer).subscribe(data=>{
      console.log(data)
    })
    this.location.go("customer","");
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let id = params['sid']
          if(id=="new"){
            let customer = {name:""}
            this.isNew = true;
            this.customer = customer
          }else{
            this.customerServ.getCustomerById(id).subscribe(cust=>{
            console.log(cust)
            this.customer = cust
            })
          }
        })
  }
  ngOnDestroy(){
    // this.getUserSubscribe.unsubscribe();
  }

  getcustomer(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let customer = {name:""}
        this.isNew = true;
        resolve(customer)
      }
      let customer = this.customerServ.users.find(item=>item.objectId == id)
      if(customer){
        resolve(customer)
      }else{
        reject("customer not found")
      }
    })
    return p
}

}
