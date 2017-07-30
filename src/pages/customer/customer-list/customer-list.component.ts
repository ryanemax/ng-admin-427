import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import { Http } from '@angular/http';

import {Parse} from "../../../cloud/parse";
import {customerService} from "../customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class customerListComponent implements OnInit {
  searchText: string = "default";
  selectUser:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  users:Array<any>=[];
  deleteLast() {
    this.users.pop();
  }
  search(type="name",limit?:number){
    this.searchResult = this.users.filter(item=>{
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
  getUserClick(ev){
    this.selectUser = ev
    console.log(ev);
  }
  saveNewUser() {
    this.users.push({
     'id': 666,
     'name':'New User',
     'sex':'M',
     'startDate':'2017/08/01',
     'endDate':'2018/08/01',
     'fee': 3000, // 10 10 5 5 20 5
     'carNo': '辽BXXXXX'
    });
  }
  sortByAsccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.users.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.users.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 this.users.forEach((user,id)=>{
    let j = Math.floor(Math.random() * id);
     [this.users[id - 1], this.users[j]] = [this.users[j], this.users[id - 1]];
  })
  }
  constructor(meta: Meta, title: Title, private http:Http, private userServ:customerService) {
    //this.users = this.userServ.getUsers()
    let query = new Parse.Query("Customer",http)
    query.find().subscribe(data=>{
      console.log(data)
      this.users = data
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

  testTempUsers(){
    console.log(this.users.length);
    let tempUsers:Array<any> = []
    this.users.forEach(item=>{
      tempUsers.push(item)
    })
    tempUsers.pop()
    tempUsers.pop()
    tempUsers.pop()
    tempUsers.pop()
    tempUsers.pop()
    console.log(tempUsers.length);
  }

  ngOnInit() {}
}
