import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {GoodsService} from "../goods.service";

import { Http } from '@angular/http'

import {Parse} from "../../../cloud/parse"

@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.scss']
})
export class GoodListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectGood:Array<any>;

@Input() good:any

  @Output() goodClick = new EventEmitter<any>();

  goods:Array<any>=[];
  deleteLast() {
    this.goods.pop()
  }

getUserClick(ev){
    this.selectGood = ev
    console.log(ev);
  }
  
  onGoodClick(){
    this.goodClick.emit(this.good)
  }
  
  delete(good){
    let goodIndex = good.index;
    this.goodServ.goods.forEach((item,index,array)=>{
      if(item.index == goodIndex){
        array.splice(index,1)
      }
    })
  }
  sortByAsccending() {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.goods.sort(function (a, b) {
      if (a.index > b.index) {
        return 1;
      }
      if (a.index < b.index) {
        return -1;
      }
      // a 必须等于 b
      return 0;
    });
  }
  sortByDesccending() {
    this.goods.sort(function (a, b) {
      if (a.index < b.index) {
        return 1;
      }
      if (a.index > b.index) {
        return -1;
      }
      // a 必须等于 b
      return 0;
    });
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
  }
  sortByRadom() {
    this.goods.sort(function (a, b) {
      if (Math.random() > 0.5) {
        return 1;
      }
      if (Math.random() < 0.5) {
        return -1;
      }
      // a 必须等于 b
      return 0;
    });
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  }

  constructor(meta: Meta, title: Title, private http:Http, private goodServ:GoodsService) {

    let query = new Parse.Query("Good",http)
    query.find().subscribe(data=>{
      console.log(data)
      this.goods = data
    })

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
    ])
  }

  ngOnInit() {}

}
