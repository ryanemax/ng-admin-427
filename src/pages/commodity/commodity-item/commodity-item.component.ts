import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {CommodityService} from '../commodity.service';

@Component({
  selector: 'app-commodity-item',
  templateUrl: './commodity-item.component.html',
  styleUrls: ['./commodity-item.component.scss']
})

export class CommodityItemComponent implements OnInit {
  @Input() commodity:any
  @Output() CommodityClick = new EventEmitter<any>();
  constructor(private commodityServ:CommodityService) { 
  }
  onStudentClick(){
    this.CommodityClick.emit(this.commodity);
  }
  check(){
    if(this.commodity.check&&this.commodity.check==true){
      this.commodity.check = false;
    }else{
      this.commodity.check = true
    }
  }
  delete(obj){
    this.commodityServ.deleteCommodityById(obj.objectId).subscribe(data=>{
      console.log(data);
    })
  }
  isChecked(){
    if(this.commodity.check&&this.commodity.check==true){
      return true
    }else{
      return false
    }
  }

  ngOnInit() {
  }
}
