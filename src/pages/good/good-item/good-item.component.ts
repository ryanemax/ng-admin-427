import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {GoodService} from "../good.service";

@Component({
  selector: 'app-good-item',
  templateUrl: './good-item.component.html',
  styleUrls: ['./good-item.component.scss']
})
export class GoodItemComponent implements OnInit {
  @Input() good:any
  @Output() goodClick = new EventEmitter<any>();
  constructor() { 
  }
  onUserClick(){
    this.goodClick.emit(this.good)
  }

  check(){
    if(this.good.check&&this.good.check==true){
      this.good.check = false;
    }else{
      this.good.check = true
    }
  }
  isChecked(){
    if(this.good.check&&this.good.check==true){
      return true
    }else{
      return false
    }
  }

  ngOnInit() {
  }
}
