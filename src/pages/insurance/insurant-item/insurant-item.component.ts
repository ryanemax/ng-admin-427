import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {InsuranceService} from "../insurance.service";

@Component({
  selector: 'app-insurant-item',
  templateUrl: './insurant-item.component.html',
  styleUrls: ['./insurant-item.component.scss']
})
export class InsurantItemComponent implements OnInit {

    @Input() insurant:any
  @Output() insurantClick = new EventEmitter<any>();
  constructor(private insuranceServ:InsuranceService) { 
  }
  onUserClick(){
    this.insurantClick.emit(this.insurant)
  }
  check(){
     if(this.insurant.check&&this.insurant.check==true){
      this.insurant.check = false;
    }else{
      this.insurant.check = true
    }
  }
  isChecked(){
    if(this.insurant.check&&this.insurant.check==true){
      return true
    }else{
      return false
    }
  }

  delete(){
    // let id = this.insurant.id
    // this.insuranceServ.insurants.forEach((item,index,array)=>{
    //   if(item.id == id){
    //     array.splice(index,1)
    //   }
    // })
      this.insuranceServ.deleteInsuranceById(this.insurant.objectId).subscribe(data=>{
        // this.location.go("/insurant");
        this.insurant = data
      })

  }
  ngOnInit() {
  }

}


