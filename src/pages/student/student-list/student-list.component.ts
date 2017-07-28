import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import {StudentService} from "../student.service";
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

  getUserClick(ev){
    this.selectStudent = ev
    console.log(ev);
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
  constructor(meta: Meta, title: Title, private studentServ:StudentService) {
    this.students = this.studentServ.getStudents()
 
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
