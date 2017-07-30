import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {WerewolvesService} from "../werewolves.service";

@Component({
  selector: 'app-werewolves-item',
  templateUrl: './werewolves-item.component.html',
  styleUrls: ['./werewolves-item.component.scss']
})
export class WerewolvesItemComponent implements OnInit {
  @Input() werewolves:any
  @Output() werewolvesClick = new EventEmitter<any>();
  constructor(private werewolvesServ:WerewolvesService) { 
  }
  onStudentClick(){
    this.werewolvesClick.emit(this.werewolves)
  }
  check(){
     if(this.werewolves.check&&this.werewolves.check==true){
      this.werewolves.check = false;
     }else{
      this.werewolves.check = true
    }
    // this.werewolves.check = true;
  }
  isChecked(){
    if(this.werewolves.check&&this.werewolves.check==true){
      return true
    }else{
      return false
    }
  }
  // delete(){
  //   let id = this.werewolves.id
  //   this.werewolvesServ.werewolvess.forEach((item,index,array)=>{
  //     if(item.id == id){
  //       array.splice(index,1)
  //     }
  //   })
  // }
  ngOnInit() {
  }
}
