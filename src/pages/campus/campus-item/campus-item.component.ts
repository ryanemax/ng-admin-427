import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {CampusService} from "../campus.service"; 

@Component({
  selector: 'app-campus-item',
  templateUrl: './campus-item.component.html',
  styleUrls: ['./campus-item.component.scss']
})
export class CampusItemComponent implements OnInit {
  @Input() campus:any
  @Output() campusClick = new EventEmitter<any>();
  constructor(private campusServ:CampusService) { 
  }
  onCampusClick(){
    this.campusClick.emit(this.campus)
  }
  check(){
    this.campus.check = true;
  }
  isChecked(){
    if(this.campus.check&&this.campus.check==true){
      return true
    }else{
      return false
    }
  }
  // delete(){
  //   let id = this.campus.id
  //   this.campusServ.campuses.forEach((item,index,array)=>{
  //     if(item.id == id){
  //       array.splice(index,1)
  //     }
  //   })
  // }
  ngOnInit() {
  }
}
