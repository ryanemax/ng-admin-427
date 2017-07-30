import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { StockService } from '../stock.service'

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.scss']
})
export class StockEditComponent implements OnInit,OnDestroy {
  stockId:string="";
  stock:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getStockSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private stockServ:StockService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.stock.price = Number(this.stock.price)
    this.stockServ.saveStock(this.stock).subscribe(data=>{
      console.log(data)
    })
     this.location.back();
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let id = params['sid']
          if(id=="new"){
            let stock = {name:""}
            this.isNew = true;
            this.stock = stock
          }else{
            this.isNew = false;
            this.stockServ.getStockById(id).subscribe(stock=>{
            console.log(stock)
            this.stock = stock
        })
      }

    })
  }
  ngOnDestroy(){
  }

}
