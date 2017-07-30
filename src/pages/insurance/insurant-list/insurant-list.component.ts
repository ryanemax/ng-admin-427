import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import {InsuranceService} from "../insurance.service";

import { Http } from '@angular/http'

import {Parse} from "../../../cloud/parse"


@Component({
  selector: 'app-insurant-list',
  templateUrl: './insurant-list.component.html',
  styleUrls: ['./insurant-list.component.scss']
})
export class InsurantListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectInsurant:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  insurants:Array<any>=[];

  // searchText: string = "default";
  // selectInsurant:any={
  //   name:"未选择"
  // };
  // searchResult:Array<any>;
  // insurants:Array<any>=[];
  // deleteLast() {
  //   this.insurants.pop();
  // }
  // search(type="name",limit?:number){
  //   this.searchResult = this.insurants.filter(item=>{
  //     let result = String(item[type]).match(this.searchText)
  //     if(result){
  //       return true
  //     }else{
  //       return false
  //     }
  //   })
    
  //   if(limit){
  //     this.searchResult.splice(0,limit)
  //   }
  // }
  getInsurantClick(ev){
    this.selectInsurant = ev
    console.log(ev);
  }
  // saveNewInsurant() {
  //   this.insurants.push({
  //    'planId': 666,
  //    'planName':'New Plan',
  //    'name':'New Insurant',
  //    'sex':'M',
  //    'age':'20',
  //    'period':'2070年'
  //   });
  // }
  sortByAsccending(type="planId") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.insurants.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="planId") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.insurants.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
//  this.insurants.forEach((insurant,index)=>{
//     let j = Math.floor(Math.random() * index);
//      [this.insurants[index - 1], this.insurants[j]] = [this.insurants[j], this.insurants[index - 1]];
//   })
  }
  constructor(meta: Meta, title: Title,private http:Http, private insuranceServ:InsuranceService) {
    // this.insurants = this.insurantServ.getInsurances()
    let query = new Parse.Query("Insurance",http)
    query.find().subscribe(data=>{
      console.log(data)
      this.insurants = data
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

  testTempInsurants(){
    console.log(this.insurants.length);
    let tempInsurants:Array<any> = []
    this.insurants.forEach(item=>{
      tempInsurants.push(item)
    })
    tempInsurants.pop()
    tempInsurants.pop()
    tempInsurants.pop()
    tempInsurants.pop()
    tempInsurants.pop()
    console.log(tempInsurants.length);
  }

  ngOnInit() {}
}
