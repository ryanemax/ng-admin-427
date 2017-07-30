import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import { Http } from '@angular/http'

import {Parse} from "../../../cloud/parse"

import {GoodService} from "../good.service";
@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.scss']
})
export class GoodListComponent implements OnInit {
  searchText: string = "default";
  searchType: string = "name";
  selectGood:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  goods:Array<any>=[];
  deleteLast() {
    this.goods.pop();
  }
  search(type="name",limit?:number){
    this.searchResult = this.goods.filter(item=>{
      let result = String(item[type]).match(this.searchText)
      if(result){
        return true
      }else{
        return false
      }
    })
    
    if(limit){
      this.searchResult.splice(0,limit)
    }
  }
  getGoodClick(ev){
    this.selectGood = ev
    console.log(ev);
  }

  sortByAsccending(type="index") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.goods.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="index") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.goods.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 this.goods.forEach((good,index)=>{
    let j = Math.floor(Math.random() * index);
     [this.goods[index - 1], this.goods[j]] = [this.goods[j], this.goods[index - 1]];
  })
  }
  constructor(meta: Meta, title: Title,private http:Http, private goodServ:GoodService) {

    let query = new Parse.Query("Good",http)
    query.find().subscribe(data=>{
      console.log(data)
      this.goods = data
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
