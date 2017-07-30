import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { PlayerService } from '../player.service'

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.scss']
})
export class PlayerEditComponent implements OnInit,OnDestroy {
  playerId:string="";
  player:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getPlayerSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private playerServ:PlayerService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.player.match = Number(this.player.match)
    this.player.goal  = Number(this.player.goal)
    this.player.title = Number(this.player.title)
    this.playerServ.savePlayer(this.player).subscribe(data=>{
      console.log(data)
      this.location.back();
      alert("保存成功。");
    })
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let id = params['id']
          if(id=="new"){
            let player = {name:""}
            this.isNew = true;
            this.player = player
          }else{
            this.playerServ.getPlayerById(id).subscribe(player=>{
            console.log(player)
            // this.playerId = player.objectId;
            this.player = player
        })
      }

    })
  }
  ngOnDestroy(){
  }

}
