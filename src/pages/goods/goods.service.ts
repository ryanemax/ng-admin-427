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
export class GoodsService{
    // isLogined:boolean = false;
    goods: Array < any > = [{
      "index": 19,
      "prodtype": "家电",
      "prodname": "电吹风",
      "price": "189",
      "brand": "飞利浦",
      "zhishu": "5",
      "pinglun": 100,
      "monthcnt": 99
    },
    {
      "index": 7,
      "prodtype": "零食",
      "prodname": "薯片",
      "price": "4.9",
      "brand": "未知",
      "zhishu": 5,
      "pinglun": 20000,
      "monthcnt": 22266
    },
    {
      "index": 14,
      "prodtype": "日用品",
      "prodname": "纸抽",
      "price": "50",
      "brand": "清风",
      "zhishu": 4,
      "pinglun": 2222,
      "monthcnt": 66666
    },
    {
      "index": 3,
      "prodtype": "日用品",
      "prodname": "纸抽",
      "price": "50",
      "brand": "清风",
      "zhishu": 4,
      "pinglun": 2222,
      "monthcnt": 66666
    },
    {
      "index": 5,
      "prodtype": "日用品",
      "prodname": "纸抽",
      "price": "50",
      "brand": "清风",
      "zhishu": 4,
      "pinglun": 2222,
      "monthcnt": 66666
    },
    {
      "index": 6,
      "prodtype": "日用品",
      "prodname": "纸抽",
      "price": "50",
      "brand": "清风",
      "zhishu": 4,
      "pinglun": 2222,
      "monthcnt": 66666
    },
    {
      "index": 8,
      "prodtype": "日用品",
      "prodname": "纸抽",
      "price": "50",
      "brand": "清风",
      "zhishu": 4,
      "pinglun": 2222,
      "monthcnt": 66666
    }
  ];

    http:Http
    constructor(http:Http,private location:Location){
        this.http = http
    }
    delete(obj){
        this.deleteGoodById(obj.objectId).subscribe(data=>{
            console.log(data);
            this.location.go("/goods")
        })

        // this.goods.forEach((item,index,array)=>{
        //     if(item.id == id){
        //         array.splice(index,1)
        //     }
        // })
    }
    search(type,value){
        this.goods.sort((a,b)=>{
        let result1 = String(a[type]).match(value)
        let result2 = String(b[type]).match(value)

        return Number(result2)-Number(result1);
        });
    }
    deleteChecked(){
        let checkList = this.goods.filter(item=>item.check==true)
        checkList.forEach(item=>{
            this.delete(item)
        })
    }

    getgoods():Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        let path = "/classes/"
        let className = "Good"
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
    deleteGoodById(objectId):Observable<any>{
            // 1. 拼接HTTP请求所需的URL和Headers
            let serverURL = "http://host.qh-class.com:2337/parse"
            let path = "/classes/"
            let className = "Good"
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
    getGoodById(objectId):Observable<any>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        let path = "/classes/"
        let className = "Good"
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

    saveGood(body?):Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        let path = "/classes/"
        let className = "Good"
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
                index:body.index,
                prodtype:body.prodtype,
                prodname:body.prodname,
                price:body.price,
                brand:body.brand,
                zhishu:body.zhishu,
                pinglun:body.pinglun,
                monthcnt:body.monthcnt,
            },{ headers:headers })
            .map(data=> data.json())
        }else{
            return this.http.post(url,body,{ headers:headers })
            .map(data=> data.json())
        }

    }


}

