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
export class CustomerService{
    isLogined:boolean = false;
    users: Array < any > = [{
     'id': 1,
     'name':'chenlu',
     'sex':'M',
     'startDate':'170801',
     'endDate':'180801',
     'carNo': '辽BXXXXX',
     'fee': 3000
    },
    {
     'id': 2,
     'name':'f58xxy',
     'sex':'F',
     'startDate':'170801',
     'endDate':'180801',
     'carNo': '辽BXXXXX',
     'fee': 3000
    },
    {
     'id': 3,
     'name':'文化利',
     'sex':'M',
     'startDate':'170801',
     'endDate':'180801',
     'carNo': '辽BXXXXX',
     'fee': 3000
    }
  ];

    http:Http
    constructor(http:Http,private location:Location){
        this.http = http
    }

    getUsers(){
        //  // 1. 拼接HTTP请求所需的URL和Headers
        // let serverURL = "http://10.202.104.233:1337/parse"
        // let path = "/classes/"
        // let className = "Customer"
        // let url = serverURL+path+className

        // let headers:Headers = new Headers({
        //     "X-Parse-Application-Id":"dev",
        //     "X-Parse-Master-Key":"angulardev",
        //     // "X-Parse-Session-Token":"r:059bbbebdc201de090f16fe9716b43bf",
        //     "Content-Type":"application/json; charset=utf-8"
        // })

        // // 2. 发起HTTP GET查询请求
        // return this.http.get(url,{ headers:headers })
        // .map(data=>data.json())
        // .map(data=>data.results)  
    }
    delete(obj){
        this.deleteCustomerById(obj.objectId).subscribe(data=>{
            console.log(data);
            this.location.go("/customer")
        })
    }
    deleteCustomerById(objectId):Observable<any>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://10.202.104.233:1337/parse"
        let path = "/classes/"
        let className = "Customer"
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

    saveCustomer(body?):Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://10.202.104.233:1337/parse"
        let path = "/classes/"
        let className = "Customer"
        let url = serverURL+path+className

        let headers:Headers = new Headers({
            "X-Parse-Application-Id":"dev",
            "X-Parse-Master-Key":"angulardev",
            // "X-Parse-Session-Token":"r:059bbbebdc201de090f16fe9716b43bf",
            "Content-Type":"application/json; charset=utf-8"
        })

        // 2. 发起HTTP POST或PUT提交请求
        if(!body){
            body = {name:"pzw",fee:3000}
        }

        if(body.objectId){
            url += "/"+body.objectId
            // body.objectId = undefined
            return this.http.put(url,{
                name:body.name,
                // startDate:new Date(body.startDate),
                // endDate:new Date(body.endDate),
                fee:body.fee,
                carNo:body.carNo,
                sex:body.sex,
            },{ headers:headers })
            .map(data=> data.json())
        }else{
            return this.http.post(url,body,{ headers:headers })
            .map(data=> data.json())
        }

    }
    getCustomerById(objectId):Observable<any>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://10.202.104.233:1337/parse"
        let path = "/classes/"
        let className = "Customer"
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
    search(value){
        console.log(this.users);
        this.users.sort((a,b)=>{
        let result1 = String(a["name"]).match(value)
        let result2 = String(b["name"]).match(value)

        return Number(result2)-Number(result1);
    });
}
}

