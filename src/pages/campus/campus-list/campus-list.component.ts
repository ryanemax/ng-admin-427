import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import { Http } from '@angular/http'

import {CampusService} from "../campus.service";

import {Parse} from "../../../cloud/parse"

@Component({
  selector: 'app-campus-list',
  templateUrl: './campus-list.component.html',
  styleUrls: ['./campus-list.component.scss']
})
export class CampusListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectCampus:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  campuses:Array<any>=[];

  getUserClick(ev){
    this.selectCampus = ev
    console.log(ev);
  }
 
  sortByAsccending(type="index") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.campuses.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="index") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.campuses.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  this.campuses.forEach((campus,index)=>{
    campus.randomindex = Math.random();
  })
    this.sortByAsccending("randomindex");
  }
  searchCampus(value) {
    console.log("search");
    console.log(value);
    console.log(this.campuses);
    if(value){
      this.searchResult = this.campuses.filter(item=>{
        if(String(item.name).match(value)){
          return true;
        }else{
          return false;
        }
      })
      // this.campuses.forEach(item=>{
      //   if(String(item.name).match(value)){
      //     this.searchResult.push(item);
      //     console.log(this.searchResult);
      //   }
      // })
    }else{
      this.searchResult.splice(0,this.searchResult.length);
      console.log(this.searchResult);
    }
  }
  constructor(meta: Meta, title: Title,private http:Http, private campusServ:CampusService) {

    let query = new Parse.Query("Campus",http)
    query.find().subscribe(data=>{
      console.log(data)
      this.campuses = data
    })

    // this.campusServ.getCampuses().subscribe(data=>{
    //   console.log(data)
    // })
    
 
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
