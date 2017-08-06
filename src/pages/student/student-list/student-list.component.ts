import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import { Http } from '@angular/http'

import {StudentService, ParseDataSource} from "../student.service";

import {Parse} from "../../../cloud/parse";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectStudent:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  students:Array<any>=[];
  // Data Table
  dataSource:ParseDataSource | null;
  displayedColumns = ['name', 'sex', 'github', 'exam1', 'exam2', 'exam3'];
  // end of data table
  getUserClick(ev){
    this.selectStudent = ev
    console.log(ev);
  }

    search(type,value){
        let query = new Parse.Query("Student",this.http)
        query.equalTo(type,value)
        query.find().subscribe(data=>{
          this.students = data
        })
    }
  
  sortByAsccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.students.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.students.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  this.students.forEach((student,index)=>{
    student.tempIndex = Math.random();
  })
    this.sortByAsccending("tempIndex");
  }
  constructor(meta: Meta, title: Title,private http:Http, public studentServ:StudentService) {
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
    this.dataSource = this.studentServ.dataSource;    
  }

  refresh(){
    this.dataSource.refresh()
  }
  deleteChecked(){
    this.studentServ.deleteChecked()
  }
  ngOnInit() {
  }
}
