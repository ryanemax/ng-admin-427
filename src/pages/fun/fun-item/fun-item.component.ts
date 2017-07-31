import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {FunService} from "../fun.service";

@Component({
  selector: 'app-fun-item',
  templateUrl: './fun-item.component.html',
  styleUrls: ['./fun-item.component.scss']
})
export class FunItemComponent implements OnInit {
  @Input() fun:any
  @Output() funClick = new EventEmitter<any>();
  constructor(private funServ:FunService) { 
  }
  onUserClick(){
    this.funClick.emit(this.fun)
  }
  check(){
     if(this.fun.check&&this.fun.check==true){
      this.fun.check = false;
    }else{
      this.fun.check = true
    }
  }
  isChecked(){
    if(this.fun.check&&this.fun.check==true){
      return true
    }else{
      return false
    }
  }
  ngOnInit() {
  }
}
