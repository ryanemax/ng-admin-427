import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-park-item',
  templateUrl: './park-item.component.html',
  styleUrls: ['./park-item.component.scss']
})
export class ParkItemComponent implements OnInit {
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
