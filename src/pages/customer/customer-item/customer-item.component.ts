import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {customerService} from "../customer.service";

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss']
})
export class customerItemComponent implements OnInit {
  @Input() user:any
  @Output() userClick = new EventEmitter<any>();
  constructor(private customerServ:customerService) { 
  }
  onUserClick(){
    this.userClick.emit(this.user)
  }
  check(){
    this.user.check = true;
  }
  isChecked(){
    if(this.user.check&&this.user.check==true){
      return true
    }else{
      return false
    }
  }
  delete(){
    let id = this.user.objectId
    this.customerServ.users.forEach((item,index,array)=>{
      if(item.objectId == id){
        array.splice(index,1)
      }
    })
  }
  ngOnInit() {
  }
}
