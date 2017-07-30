import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {MemberService} from "../member.service";

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrls: ['./member-item.component.scss']
})
export class MemberItemComponent implements OnInit {
  @Input() user:any
  @Output() userClick = new EventEmitter<any>();
  constructor() { 
  }
  onUserClick(){
    this.userClick.emit(this.user)
  }
  ngOnInit() {
  }
}
