import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import { Http } from '@angular/http'

import { PlayerService } from "../player.service";

import { Parse } from "../../../cloud/parse"

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectPlayer: any = {
    name: "未选择"
  };
  searchResult: Array<any>;
  players: Array<any> = [];

  getPlayerClick(ev) {
    this.selectPlayer = ev
    console.log(ev);
  }

  sortByAsccending(type = "match") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.players.sort((a, b) => {
      return a[type] - b[type];
    });
  }
  sortByDesccending(type = "match") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.players.sort((a, b) => {
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.players.forEach((player, index) => {
      player.tempIndex = Math.random();
    })
    this.sortByAsccending("tempIndex");
  }
  constructor(meta: Meta, title: Title, private http: Http, private playerServ: PlayerService) {

    let query = new Parse.Query("Player", http)
    query.limit(2);
    query.find().subscribe(data => {
      console.log(data)
      this.players = data
      })

      // Set SEO
      title.setTitle('My Home Page');

      meta.addTags([{
        name: 'author',
        content: 'eddic'
      },
      {
        name: 'keywords',
        content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description',
        content: 'This is my great description.'
      },
      ]);
      // end of SEO
    }

  ngOnInit() {}
}
