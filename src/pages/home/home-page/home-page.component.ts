import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import {UserService} from "../user.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  searchText: string = "default";
  selectUser:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  users:Array<any>=[];
  deleteLast() {
    this.users.pop();
  }
  search(type="name"){
    this.searchResult = this.users.filter(item=>{
      let result = String(item[type]).match(this.searchText)
      if(result){
        return true
      }else{
        return false
      }
    })
  }
  getUserClick(ev){
    this.selectUser = ev
    console.log(ev);
  }
  saveNewUser() {
    this.users.push({
     'index': 666,
     'name':'New User',
     'sex':'M',
     'name_en':'new_user',
     'github':'new_user',
     'exam1': 76,
     'exam2': 76,
     'exam3': 76
    });
  }
  sortByAsccending(type="index") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.users.sort(function(a,b){
return a[type] - b[type];
});
  }
  sortByDesccending(type="index") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.users.sort(function(a,b){
return b[type] - a[type];
});
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    
    for (let i = this.users.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [this.users[i - 1], this.users[j]] = [this.users[j], this.users[i - 1]];
    }

  }
  constructor(meta: Meta, title: Title, private userServ:UserService) {
    this.users = this.userServ.getUsers()

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
