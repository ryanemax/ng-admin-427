import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import {FunService} from "../fun.service";
import { Http } from '@angular/http'
import {Parse} from "../../../cloud/parse"

@Component({
  selector: 'app-fun-list',
  templateUrl: './fun-list.component.html',
  styleUrls: ['./fun-list.component.scss']
})


export class FunListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectFun:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  funs:Array<any>=[];

  getUserClick(ev){
    this.selectFun = ev
    console.log(ev);
  }
 
  sortByAsccending(type="index") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.funs.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="index") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.funs.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 this.funs.forEach((fun,index)=>{
     fun.tempIndex = Math.random();
  })
    this.sortByAsccending("tempIndex");
  }
  constructor(meta: Meta, title: Title, private http:Http, private funServ:FunService) {
    let query = new Parse.Query("Fun",http)
    query.find().subscribe(data=>{
      this.funs = data
    })
    // Set SEO
    title.setTitle('My Home Page');

    meta.addTags([{
        name: 'author',
        content: 'Hugh'
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
