import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {PlayerService} from "../player.service";

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.scss']
})
export class PlayerItemComponent implements OnInit {
  @Input() player:any
  @Output() playerClick = new EventEmitter<any>();
  constructor(private playerServ:PlayerService) { 
  }
  onPlayerClick(){
    this.playerClick.emit(this.player)
  }
  check(){
    this.player.check = true;
  }
  isChecked(){
    if(this.player.check&&this.player.check==true){
      return true
    }else{
      return false
    }
  }
  ngOnInit() {
  }
}
