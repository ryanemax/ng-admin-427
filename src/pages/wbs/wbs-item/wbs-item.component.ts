import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { WbsService } from '..//wbs.service';

@Component({
  selector: 'app-wbs-item',
  templateUrl: './wbs-item.component.html',
  styleUrls: ['./wbs-item.component.scss']
})
export class WbsItemComponent implements OnInit {
  @Input() wbs:any
  @Output() wbsClick = new EventEmitter<any>();
  constructor(private wbsSur:WbsService) { 
  }
  onWbsClick(){
    this.wbsClick.emit(this.wbs)
  }
  check(){
    if(this.wbs.check&&this.wbs.check==true){
      this.wbs.check = false;
    }else{
      this.wbs.check = true
    }
  }
  isChecked(){
    if(this.wbs.check&&this.wbs.check==true){
      return true
    }else{
      return false
    }
  }
  ngOnInit() {
  }

}
