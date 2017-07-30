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
// 加及初始化 数据接口封装库
import { Parse } from '../../cloud/parse'
// Parse.initialize("dev","http://host.qh-class.com:2337/parse")
Parse.initialize("dev","http://localhost:1337/parse")

@Injectable()
export class CampusService{
    isLogined:boolean = false;
    campuses: Array < any > = [
    {"randomindex":1,
    "index":10,
    "campusId":1,
    "name":"80中",
      "address":"中山区",
      "avgtotal":605.5,
      "rate":"56%"},
    {"randomindex":1,
    "index":16,
    "campusId":2,
    "name":"育文中学",
      "address":"甘井子",
      "avgtotal":588,
      "rate":"46%"},
    {"randomindex":1,
    "index":1,
    "campusId":3,
    "name":"理工附中",
      "address":"沙河口区",
      "avgtotal":615,
      "rate":"82%"}
  ];
    http:Http
    constructor(http:Http,private location:Location){
        this.http = http
    }
    delete(obj){
        this.deleteCampusById(obj.objectId).subscribe(data=>{
            console.log(data);
            this.location.go("/campus")
            // this.location.go("/student")
        })

        // this.Campuses.forEach((item,index,array)=>{
        //     if(item.id == id){
        //         array.splice(index,1)
        //     }
        // })
    }
    search(value){
        let query = new Parse.Query("Campus",this.http)
        query.equalTo("name",value)
    }
    deleteChecked(){
        let checkList = this.campuses.filter(item=>item.check==true)
        checkList.forEach(item=>{
            this.delete(item)
        })
    }
const 
    getCampuses():Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://localhost:1337/parse"
        let path = "/classes/"
        let className = "campus"
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
    deleteCampusById(objectId):Observable<any>{
            // 1. 拼接HTTP请求所需的URL和Headers
            let serverURL = "http://localhost:1337/parse"
            let path = "/classes/"
            let className = "Campus"
            let url = serverURL+path+className+"/"+objectId
            console.log("bbbb1")
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
    getCampusById(objectId):Observable<any>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://localhost:1337/parse"
        let path = "/classes/"
        let className = "Campus"
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

    saveCampus(body?):Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://localhost:1337/parse"
        let path = "/classes/"
        let className = "Campus"
        let url = serverURL+path+className

        let headers:Headers = new Headers({
            "X-Parse-Application-Id":"dev",
            "X-Parse-Master-Key":"angulardev",
            // "X-Parse-Session-Token":"r:059bbbebdc201de090f16fe9716b43bf",
            "Content-Type":"application/json; charset=utf-8"
        })

        // 2. 发起HTTP POST或PUT提交请求
        if(!body){
            body = {name:"某中学",campusId:99,avgtotal:555}
        }

        if(body.objectId){
            url += "/"+body.objectId
            // body.objectId = undefined
            return this.http.put(url,{
              randomindex:body.randomindex,
              index:body.index,
              campusId:body.campusId,
              name:body.name,
              address:body.address,
              avgtotal:body.avgtotal,
              rate:body.rate
            },{ headers:headers })
            .map(data=> data.json())
        }else{
            return this.http.post(url,body,{ headers:headers })
            .map(data=> data.json())
        }

    }

}
