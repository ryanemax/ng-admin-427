import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http"

import { Location } from '@angular/common';


import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

// DataTable
import {DataSource} from '@angular/cdk';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/from';
// End of DataTable

import { Parse } from '../../cloud/parse';

@Injectable()
export class StudentService{
    isLogined:boolean = false;
    // DataTable
    parseDatabase = new ParseDatabase(this.http);
    dataSource: ParseDataSource | null;
    // end of DataTable
    students: Array<any> = [];
    constructor(private http:Http,private location:Location){
        this.dataSource = new ParseDataSource(this.parseDatabase);
        this.dataSource.connect().subscribe(data=>{
            this.students = data
        })
    }
    delete(obj){
        this.deleteStudentById(obj.objectId).subscribe(data=>{
            console.log(data);
            this.location.go("/student")
        })

        
    }
    deleteInArray(obj){
        let id = obj.id
        this.students.forEach((item,index,array)=>{
            if(item.id == id){
                array.splice(index,1)
            }
        })
    }
    search(type,value){
        let query = new Parse.Query("Student",this.http)
        query.equalTo(type,value)
    }
    searchInArray(type,value){
        this.students.sort((a,b)=>{
        let result1 = String(a[type]).match(value)
        let result2 = String(b[type]).match(value)

        return Number(result2)-Number(result1);
        });
    }
    deleteChecked(){
        let checkList = this.students.filter(item=>item.check==true)
        checkList.forEach(item=>{
            this.delete(item)
        })
    }

    getStudents():Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        let path = "/classes/"
        let className = "Student"
        let url = serverURL+path+className

        let headers:Headers = new Headers({
            "X-Parse-Application-Id":"dev",
            "X-Parse-Master-Key":"angulardev",
            // "X-Parse-Session-Token":"r:059bbbebdc201de090f16fe9716b43bf",
            "Content-Type":"application/json; charset=utf-8"
        })

        // 2. 发起HTTP GET查询请求
        return this.http.get(url,{ headers:headers })
        .map(data=>data.json())
        .map(data=>data.results)        
    }
    deleteStudentById(objectId):Observable<any>{
            // 1. 拼接HTTP请求所需的URL和Headers
            let serverURL = "http://host.qh-class.com:2337/parse"
            let path = "/classes/"
            let className = "Student"
            let url = serverURL+path+className+"/"+objectId

            let headers:Headers = new Headers({
                "X-Parse-Application-Id":"dev",
                "X-Parse-Master-Key":"angulardev",
                // "X-Parse-Session-Token":"r:059bbbebdc201de090f16fe9716b43bf",
                "Content-Type":"application/json; charset=utf-8"
            })

            // 2. 发起HTTP DELETE查询请求
            return this.http.delete(url,{ headers:headers })
            .map(data=>data.json())
        }
    getStudentById(objectId):Observable<any>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        let path = "/classes/"
        let className = "Student"
        let url = serverURL+path+className+"/"+objectId

        let headers:Headers = new Headers({
            "X-Parse-Application-Id":"dev",
            "X-Parse-Master-Key":"angulardev",
            // "X-Parse-Session-Token":"r:059bbbebdc201de090f16fe9716b43bf",
            "Content-Type":"application/json; charset=utf-8"
        })

        // 2. 发起HTTP GET查询请求
        return this.http.get(url,{ headers:headers })
        .map(data=>data.json())
    }

    saveStudent(body?):Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        let path = "/classes/"
        let className = "Student"
        let url = serverURL+path+className

        let headers:Headers = new Headers({
            "X-Parse-Application-Id":"dev",
            "X-Parse-Master-Key":"angulardev",
            // "X-Parse-Session-Token":"r:059bbbebdc201de090f16fe9716b43bf",
            "Content-Type":"application/json; charset=utf-8"
        })

        // 2. 发起HTTP POST或PUT提交请求
        if(!body){
            body = {name:"666777",project:"ryanemax/ng-admin",exam1:66}
        }

        if(body.objectId){
            url += "/"+body.objectId
            // body.objectId = undefined
            return this.http.put(url,{
                name:body.name,
                exam1:body.exam1,
                exam2:body.exam2,
                exam3:body.exam3,
                project:body.project,
                sex:body.sex,
            },{ headers:headers })
            .map(data=> data.json())
        }else{
            return this.http.post(url,body,{ headers:headers })
            .map(data=> data.json())
        }

    }

}

export interface Student {
  objectId: string;
  createdId: Date;
  updatedId: Date;
  name: string;
  sex: string;
  github: string;
  exam1: number;
  exam2: number;
  exam3: number;
}

import { StudentData } from './student.data'
/** An example database that the data source uses to retrieve data for the table. */
export class ParseDatabase {
  
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);
  get data(): Student[] { return this.dataChange.value; }
  http:Http;
  mockData:any = StudentData
  sourceType:string = "mock" // 设置数据源方式，mock本地本地模拟数据，parse微服务接口数据
  searchType:string
  searchText:string
  constructor(http:Http) {
    this.http = http
    this.refresh()

  }
  refresh(){
      this.getStudents().subscribe(data=>{
          console.log(data)
          this.dataChange.next(data);
      })
  }
  getStudents():Observable<Student[]>{
      console.log(this.searchType,this.searchText)
      
    if(this.sourceType=="parse"){
        let query = new Parse.Query("Student",this.http);
        // Parse数据 搜索方法 [todo 需要使用contains替换]
        if(this.searchType&&this.searchText){
            query.equalTo(this.searchType,this.searchText)
        }
        return query.find()
    }else{
        let students = this.mockData.students
        // 模拟数据 搜索方法
        if(this.searchType&&this.searchText){
                students = students.filter(item=>{
                    let result = String(item[this.searchType]).match(this.searchText)
                    if(result){
                        return true
                    }else{
                        return false
                    }
                })
        }
        return Observable.from([students])
    }
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
    this._parseDatabase.searchType = undefined
    this._parseDatabase.searchText = undefined
    this._parseDatabase.refresh()
  }
  search(type,value){
    this._parseDatabase.searchType = type
    this._parseDatabase.searchText = value
    this._parseDatabase.refresh()
  }
  disconnect() {}
}