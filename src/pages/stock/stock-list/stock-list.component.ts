import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import {StockService} from "../stock.service";
import { Http } from '@angular/http'
import {Parse} from "../../../cloud/parse"

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})


export class StockListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectStock:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  stocks:Array<any>=[];

  getUserClick(ev){
    this.selectStock = ev
    console.log(ev);
  }
 
  sortByAsccending(type="index") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.stocks.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="index") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.stocks.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 this.stocks.forEach((stock,index)=>{
     stock.tempIndex = Math.random();
  })
    this.sortByAsccending("tempIndex");
  }
  constructor(meta: Meta, title: Title, private http:Http, private stockServ:StockService) {
    let query = new Parse.Query("Stock",http)
    query.find().subscribe(data=>{
      this.stocks = data
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
