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

@Injectable()
export class AppstoreService{
    isLogined:boolean = false;
    // appstores: Array < any >=[];
    appstores:any= {};
    // http:Http
    // constructor(http:Http,private location:Location){
    //     this.http = http
    //     console.log("this.http:"+this.http);
    // }
    constructor(private http:Http,private location:Location){
    }
    delete(obj){
        this.deleteAppstoreById(obj.objectId).subscribe(data=>{
            console.log(data);
            this.location.go("/appstore")
        })

        // this.appstores.forEach((item,index,array)=>{
        //     if(item.id == id){
        //         array.splice(index,1)
        //     }
        // })
    }
    search(type,value){
        this.appstores.sort((a,b)=>{
        let result1 = String(a[type]).match(value)
        let result2 = String(b[type]).match(value)

        return Number(result2)-Number(result1);
        });
    }
    deleteChecked(){
        console.log("this:");
        console.log(this);
        let checkList = this.appstores.filter(item=>item.check==true)
        console.log("checkList:");
        console.log(checkList);
        console.log("appstores:");
        console.log(this.appstores);
        checkList.forEach(item=>{
            this.delete(item)
        })
    }

    getAppstores():Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        // let serverURL = "http://localhost:1337/parse"
        let path = "/classes/"
        let className = "Appstore"
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
    deleteAppstoreById(objectId):Observable<any>{
            // 1. 拼接HTTP请求所需的URL和Headers
            let serverURL = "http://host.qh-class.com:2337/parse"
            // let serverURL = "http://localhost:1337/parse"
            let path = "/classes/"
            let className = "Appstore"
            let url = serverURL+path+className+"/"+objectId
            console.log('url:' + url);
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
    getAppstoreById(objectId):Observable<any>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        // let serverURL = "http://localhost:1337/parse"
        let path = "/classes/"
        let className = "Appstore"
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

    saveAppstore(body?):Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        // let serverURL = "http://localhost:1337/parse"
        let path = "/classes/"
        let className = "Appstore"
        let url = serverURL+path+className

        let headers:Headers = new Headers({
            "X-Parse-Application-Id":"dev",
            "X-Parse-Master-Key":"angulardev",
            // "X-Parse-Session-Token":"r:059bbbebdc201de090f16fe9716b43bf",
            "Content-Type":"application/json; charset=utf-8"
        })

        // 2. 发起HTTP POST或PUT提交请求
        console.log("*****************************log\n"+body);
        if(!body){
            body = {name:"MyAppstore",platform:"Android",review:"23333",rating:"5"}
        }

        if(body.objectId){
            url += "/"+body.objectId
            // body.objectId = undefined
            return this.http.put(url,{
                // check:body.check,
                name:body.name,
                platform:body.platform,
                review:body.review,
                rating:body.rating
            },{ headers:headers })
            .map(data=> data.json())
        }else{
            return this.http.post(url,body,{ headers:headers })
            .map(data=> data.json())
        }

    }

}

