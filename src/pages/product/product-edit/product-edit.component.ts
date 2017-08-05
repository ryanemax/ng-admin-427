import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit,OnDestroy {
  productId:string="";
  product:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getProductSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private productServ:ProductService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.product.price = Number(this.product.price)
    this.product.sumnum = Number(this.product.sumnum)
    this.product.sumacc = Number(this.product.sumacc)
    this.productServ.saveProduct(this.product).subscribe(data=>{
      console.log(data)
      this.location.back();
    })
  //  this.productServ.saveProduct(this.product).subscribe(data=>{
  //    console.log(data)
  //    this.location.back();        
  //  })
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let id = params['id']
          if(id=="new"){
            let product = {name:""}
            this.isNew = true;
            this.product = product
          }else{
            this.productServ.getProductById(id).subscribe(product=>{
            console.log(product)
            // this.productId = product.objectId;
            this.product = product
        })
      }

    })
  }
  ngOnDestroy(){
  }


}
