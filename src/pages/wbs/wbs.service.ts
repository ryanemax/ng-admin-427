import { Injectable } from "@angular/core";
import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers } from "@angular/http"
import { Location } from '@angular/common';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

@Injectable()
export class WbsService{
    //isLogined:boolean = false;
    wbs: Array < any > = [{
      'id': '1225544',
     'name':'Allen',
     'taskId':'M0001',
     'startDay':'2017/5/6',
     'endDay':'2017/05/10',
     'startDayAc': '2017/5/6', 
      'endDayAc':'2017/05/10',
     'percent': '100%'
    },
    {
      'id': '1225545',
     'name':'Stone',
     'taskId':'M0002',
     'startDay':'2017/5/7',
     'endDay':'2017/05/12',
     'startDay1': '2017/5/6', 
      'endDay1':'2017/05/10',
     'percent': '100%'
    },
    {
      'id': '1225546',
     'name':'Kevin',
     'taskId':'M0003',
     'startDay':'2017/5/7',
     'endDay':'2017/05/12',
     'startDay1': '2017/5/6', 
      'endDay1':'2017/05/10',
     'percent': '100%'
    }
  ];

    http:Http
    constructor(http:Http,private location:Location){
        this.http = http
    }
    search(type,value){
        this.wbs.sort((a,b)=>{
        let result1 = String(a[type]).match(value)
        let result2 = String(b[type]).match(value)

        return Number(result2)-Number(result1);
        });
    }

    saveWbs(body?):Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        let path = "/classes/"
        let className = "Wbs"
        let url = serverURL+path+className

        let headers:Headers = new Headers({
            "X-Parse-Application-Id":"dev",
            "X-Parse-Master-Key":"angulardev",
            // "X-Parse-Session-Token":"r:059bbbebdc201de090f16fe9716b43bf",
            "Content-Type":"application/json; charset=utf-8"
        })

        // 2. 发起HTTP POST或PUT提交请求
        // if(!body){
        //     body = {name:"666777",project:"ryanemax/ng-admin",exam1:66}
        // }

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
            console.log("insert")
            return this.http.post(url,body,{ headers:headers })
            .map(data=> data.json())
        }

    }

    getWbs(){
        return this.wbs;
    }

}

