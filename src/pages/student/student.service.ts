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

import { Parse } from '../../cloud/parse';

@Injectable()
export class StudentService{
    isLogined:boolean = false;
    students: Array < any > = [{
      'id': 1,
     'name':'chenlu',
     'sex':'M',
     'project':'chenlu28/chenlu-exam',
     'desc':'insurace,保险',
     'exam1': 55, // 10 10 5 5 20 5
     'exam2': 0,
     'exam3': 0
    },
    {
     'id': 2,
     'name':'f58xxy',
     'sex':'F',
     'project':'f58xxy/ng-admin',
     decs: '生命保险系统',
     'exam1': 85, // 10 10 5 20 20 20 原始数据加分：修改了函数变量命名
     'exam2': 0,
     'exam3': 0
    },
    {
     'id': 19,
     'name':'文化利',
     'sex':'M',
     'project':'whl1979/wenhuali-admin',
     desc:'大连市中学排名',
     'exam1': 80, // 10 10 5 20 20 15
     'exam2': 0,
     'exam3': 0
    },
    {
     'id': 3,
     'name':'kalezhang',
     'sex':'M',
     'project':'kalezhang/ng-admin',
     'exam1': 75, // 5 10 5 15 20 20 未修改README.md
     'exam2': 0,
     'exam3': 0
    },
    {
     'id': 4,
     'name':'JansenGao',
     'sex':'M',
     'project':'JansenGao/angular',
     'exam1': 50, // 5 5 5 15 15 15 未修改readme，版本提交非项目根目录
     'exam2': 0,
     'exam3': 0
    },
    {
     'id': 5,
     'name':'ChengJiqiang',
     'sex':'M',
     'project':'ChengJiqiang/ChengJiQiang-ng-app',
     desc:'汽车品牌一览',
     'exam1': 75, // 10 10 5 15 15 20
     'exam2': 0,
     'exam3': 0
    },
    {
     'id': 6,
     'name':'Serenashan',
     'sex':'M',
     'project':'Serenashan/serena-admin',
     desc: '淘淘杂货铺',
     'exam1': 75, // 10 10 10 15 20 10
     'exam2': 0,
     'exam3': 0
    },
    {
     'id': 7,
     'name':'gudeyi',
     'sex':'M',
     'project':'gudeyi/admin',
     'exam1': 40, // 5 10 5 5 10 5 未修改readme
     'exam2': 0,
     'exam3': 0
    }
    ,
    {
     'id': 8,
     'name':'willwangyue',
     'sex':'M',
     'project':'willwangyue/will-ng-admin',
     desc: '狼人杀',
     'exam1': 85, // 10 10 5 20 20 20
     'exam2': 0,
     'exam3': 0
    },
    {
     'id': 9,
     'name':'郭兆青',
     'desc':'游戏管理系统',
     'sex':'M',
     'project':'PotStove/GuoZhaoqing-ng-app',
     'exam1': 75, // 10 10 5 15 20 15
     'exam2': 0,
     'exam3': 0
    },
    {
     'id': 10,
     'name':'willwangyue',
     'sex':'M',
     'project':'willwangyue/will-ng-admin',
     'exam1': 85, // 10 10 5 20 20 20
     'exam2': 0,
     'exam3': 0
    },
    {
     'id': 11,
     'name':'willwangyue',
     'sex':'M',
     'project':'willwangyue/will-ng-admin',
     'exam1': 85, // 10 10 5 20 20 20
     'exam2': 0,
     'exam3': 0
    }
  ];
    constructor(private http:Http,private location:Location){
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

