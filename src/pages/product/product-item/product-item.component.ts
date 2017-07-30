import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product:any
  @Output() productClick = new EventEmitter<any>();
  constructor(private productServ:ProductService) { 
  }
  onProductClick(){
    this.productClick.emit(this.product)
  }
  check(){
    if(this.product.check&&this.product.check==true){
      this.product.check = false;
    }else{
      this.product.check = true
    }
  }
  isChecked(){
    if(this.product.check&&this.product.check==true){
      return true
    }else{
      return false
    }
  }
  ngOnInit() {
  }
}
