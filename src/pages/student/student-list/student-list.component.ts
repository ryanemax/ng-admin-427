import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import { Http } from '@angular/http'

import {StudentService} from "../student.service";

import {Parse} from "../../../cloud/parse";

// DataTable
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
// End of DataTable

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

    let query = new Parse.Query("Student",http)
    query.find().subscribe(data=>{
      console.log(data)
      this.students = data
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

  // DataTable
  displayedColumns = ['name', 'sex', 'project', 'exam1', 'exam2', 'exam3'];
  parseDatabase = new ParseDatabase(this.http);
  dataSource: ParseDataSource | null;
  // end of DataTable
  refresh(){
       this.dataSource.refresh()
  }
  ngOnInit() {
    this.dataSource = new ParseDataSource(this.parseDatabase);
    
  //   Observable.fromEvent(this.filter.nativeElement, 'keyup')
  //       .debounceTime(300)
  //       .distinctUntilChanged()
  //       .subscribe(() => {
  //         console.log(this.filter.nativeElement.value)
  //         if (!this.dataSource) { return; }
  //         this.dataSource.searchText = this.filter.nativeElement.value;
  //         this.dataSource.searchColName = this.searchColName;
  //         this.dataSource.refresh()
  //       });
  // }
}
}

interface Student {
  objectId: string;
  createdId: Date;
  updatedId: Date;
  name: string;
  sex: string;
  project: string;
  exam1: number;
  exam2: number;
  exam3: number;
}


/** An example database that the data source uses to retrieve data for the table. */
export class ParseDatabase {
  
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);
  get data(): Student[] { return this.dataChange.value; }
  http:Http
  constructor(http:Http) {
    this.http = http
    this.refresh()

  }
  refresh(){
      this.getStudents().subscribe(data=>{
        this.dataChange.next(data);
      })
  }
  getStudents(){
    let query = new Parse.Query("Student",this.http);
    return query.find()
  }

  
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ParseDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ParseDataSource extends DataSource<any> {
  constructor(private _parseDatabase: ParseDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Student[]> {
    return this._parseDatabase.dataChange;
  }
  refresh(){
    this._parseDatabase.refresh()
  }
  disconnect() {}
}