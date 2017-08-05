import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import { Http } from '@angular/http'

import {EmployeeService} from "../employee-info.service";

import {Parse} from "../../../cloud/parse"

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-info-list.component.html',
  styleUrls: ['./employee-info-list.component.scss']
})
export class EmployeeInfoListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectEmployee:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  employees:Array<any>=[];

  getUserClick(ev){
    this.selectEmployee = ev
    console.log(ev);
  }
 
  sortByAsccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.employees.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.employees.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  this.employees.forEach((employee,index)=>{
    employee.tempIndex = Math.random();
  })
    this.sortByAsccending("tempIndex");
  }
  constructor(meta: Meta, title: Title,private http:Http, public employeeServ:EmployeeService) {

    let query = new Parse.Query("Employees",http)
    //query.limit(2);
    query.find().subscribe(data=>{
      console.log(data)
      this.employees = data
      this.employeeServ.employees = this.employees;
      // console.log(this.employees);
    })

    // this.employeeServ.getEmployees().subscribe(data=>{
    //   console.log(data)
    // })
    
 
    // Set SEO
    title.setTitle('My Home Page');

    meta.addTags([{
        name: 'author',
        content: 'Lawrence'
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
