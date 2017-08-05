import {Component,OnInit} from '@angular/core';
import {Meta,Title} from '@angular/platform-browser';

import { Http } from '@angular/http'

import {AppstoreService} from "../appstore.service";

import {Parse} from "../../../cloud/parse"

@Component({
  selector: 'app-appstore-list',
  templateUrl: './appstore-list.component.html',
  styleUrls: ['./appstore-list.component.scss']
})
export class AppstoreListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectAppstore:any={
    name:"Unselected"
  };
  searchResult:Array<any>;
  appstores:Array<any>=[];

  getUserClick(ev){
    this.selectAppstore = ev
    console.log(ev);
  }
 
  sortByAsccending(type="rating") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.appstores.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="rating") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.appstores.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  this.appstores.forEach((appstore,index)=>{
    appstore.tempIndex = Math.random();
  })
    this.sortByAsccending("tempIndex");
  }
  constructor(meta: Meta, title: Title,private http:Http, private appstoreServ:AppstoreService) {

    let query = new Parse.Query("Appstore",http)
    query.find().subscribe(data=>{
      console.log(data)
      this.appstores = data
    })

    this.appstoreServ.getAppstores().subscribe(data=>{
      console.log("data:")
      console.log(data)
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
