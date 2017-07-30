import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import {ParkService} from '../park.service';
import { Http } from '@angular/http';
import {Parse} from "../../../cloud/parse";

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.component.html',
  styleUrls: ['./park-list.component.scss']
})

export class ParkListComponent implements OnInit {
  parks:Array<any> = [];

  // deleteLast(){
  //   this.parks.pop()
  // }

  sortByAsccending(){
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.parks.sort(function (a, b) {
      if (a.index > b.index) {
        return 1;
      }
      if (a.index < b.index) {
        return -1;
      }
      return 0;
    });
  }
  sortByDesccending(){
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.parks.sort(function (a, b) {
      if (a.index > b.index) {
        return -1;
      }
      if (a.index < b.index) {
        return 1;
      }
      return 0;
    });
  }
  sortByRadom(){
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.parks.sort(function (a, b) {
      if (5 > Math.random() * 10) {
        return -1;
      }
      if (5 < Math.random() * 10) {
        return 1;
      }
      return 0;
    });
  }
  testButton(){
    alert("是不是傻！");  
    alert("逗你玩呢！");  
    alert("来打我呀！"); 
  }
//  delete(park){
//     let parkIndex = park.index;
//     this.parkServ.park.forEach((item,index,array)=>{
//       if(item.index == parkIndex){
//         array.splice(index,1)
//       }
//     })
//   }

  constructor(meta: Meta, title: Title, private http:Http, private parkServ:ParkService) {
    
    let query = new Parse.Query("Park",http)
    query.find().subscribe(data=>{
      console.log(data)
      this.parks = data
    })
    title.setTitle('Park List Page');

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
    ]);
  }

  ngOnInit() {
  }

}
