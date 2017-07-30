import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {AppstoreService} from "../appstore.service";

@Component({
  selector: 'app-appstore-item',
  templateUrl: './appstore-item.component.html',
  styleUrls: ['./appstore-item.component.scss']
})
export class AppstoreItemComponent implements OnInit {
  @Input() appstore:any
  @Output() appstoreClick = new EventEmitter<any>();
  constructor(private appstoreServ:AppstoreService) { 
  }
  onAppstoreClick(){
    this.appstoreClick.emit(this.appstore)
  }
  check(){
    if(this.appstore.check&&this.appstore.check==true){
      this.appstore.check = false;
    }else{
      this.appstore.check = true
    }
  }
  isChecked(){
    if(this.appstore.check&&this.appstore.check==true){
      return true
    }else{
      return false
    }
  }
  ngOnInit() {
  }
}
