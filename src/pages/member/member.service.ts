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
export class MemberService{
    isLogined:boolean = false;
    users: Array < any > = [];
    http:Http
    constructor(http:Http,private location:Location){
        this.http = http
    }
    delete(obj){
        this.deleteMembertById(obj.objectId).subscribe(data=>{
            console.log(data);
            this.location.go("/member")
        })

    }
    getUsers():Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        // let serverURL = "http://host.qh-class.com:2337/parse"
        let serverURL = "http://localhost:1337/parse"
        
        let path = "/classes/"
        let className = "Member"
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

    deleteMembertById(objectId):Observable<any>{
            // 1. 拼接HTTP请求所需的URL和Headers
            let serverURL = "http://localhost:1337/parse"
            let path = "/classes/"
            let className = "Member"
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

    getMemberById(objectId):Observable<any>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://localhost:1337/parse"
        let path = "/classes/"
        let className = "Member"
        let url = serverURL+path+className+"/"+objectId
        console.log(url)
        let headers:Headers = new Headers({
            "X-Parse-Application-Id":"dev",
            "X-Parse-Master-Key":"angulardev",
            // "X-Parse-Session-Token":"r:059bbbebdc201de090f16fe9716b43bf",
            "Content-Type":"application/json; charset=utf-8"
        })
        console.log(headers)
        // 2. 发起HTTP GET查询请求
        return this.http.get(url,{ headers:headers })
        .map(data=>data.json())
    }

    saveMember(body?):Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://localhost:1337/parse"
        let path = "/classes/"
        let className = "Member"
        let url = serverURL+path+className

        let headers:Headers = new Headers({
            "X-Parse-Application-Id":"dev",
            "X-Parse-Master-Key":"angulardev",
            // "X-Parse-Session-Token":"r:059bbbebdc201de090f16fe9716b43bf",
            "Content-Type":"application/json; charset=utf-8"
        })

        // 2. 发起HTTP POST或PUT提交请求
        if(!body){
            body = {name:"空数据",skill:"js",age:20}
        }

        if(body.objectId){
            url += "/"+body.objectId
            // body.objectId = undefined
            return this.http.put(url,{
                name:body.name,
                //  name:body.name,
                // exam1:body.exam1,
                // exam2:body.exam2,
                // exam3:body.exam3,
                // project:body.project,
                // sex:body.sex,
            },{ headers:headers })
            .map(data=> data.json())
        }else{
            console.log(headers)
            return this.http.post(url,body,{ headers:headers })
            .map(data=> data.json())
        }

    }

}

