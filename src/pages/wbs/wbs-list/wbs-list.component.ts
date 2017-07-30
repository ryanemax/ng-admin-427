import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { WbsService } from '..//wbs.service';

@Component({
  selector: 'app-wbs-list',
  templateUrl: './wbs-list.component.html',
  styleUrls: ['./wbs-list.component.scss']
})
export class WbsListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "id";
  selectEmployee:any={
    id:"未选择"
  };
  searchResult:Array<any>;
  wbs:Array<any>=[];
  deleteLast() {
    this.wbs.pop();
  }
  constructor(meta: Meta, title: Title, private wbsServ:WbsService) {
    this.wbs = this.wbsServ.getWbs()
    title.setTitle('My Home Page');

    meta.addTags([ 
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
