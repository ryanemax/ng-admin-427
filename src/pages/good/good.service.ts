import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Location } from '@angular/common';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

@Injectable()
export class GoodService{
    isLogined:boolean = false;
    goods:Array<any> = [
    {"index":16,
    "name":"南瓜",
    "spec":"kg",
      "price":"￥2.00",
      "num":10,
      "Place":"东京",
      "timelimit":"1个月",
      "P_date":"2017-06-31",
      "Radomid":0},
      {"index":7,
      "name":"西瓜",
      "spec":"kg",
      "price":"￥3.00",
      "num":10,
      "Place":"北京",
      "timelimit":"2个月",
      "P_date":"2017-05-31",
      "Radomid":0},
      {"index":14,
      "name":"黄瓜",
      "spec":"kg",
      "price":"￥4.00",
      "num":10,
      "Place":"南京",
      "timelimit":"3个月",
      "P_date":"2017-02-31",
      "Radomid":0},
  ];
    http:Http
    constructor(http:Http,private location:Location){
        this.http = http
    }
    delete(obj){
        this.deleteGoodById(obj.objectId).subscribe(data=>{
            console.log(data);
            this.location.go("/good")
        })

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

    getGoods():Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://localhost:1337/parse"
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
            let serverURL = "http://localhost:1337/parse"
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
        let serverURL = "http://localhost:1337/parse"
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
        let serverURL = "http://localhost:1337/parse"
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
            body = {name:"tomato",spec:"kg",price:66}
        }

        if(body.objectId){
            url += "/"+body.objectId
            return this.http.put(url,{
                name:body.name,
                spec:body.spec,
                price:body.price,
                num:body.num,
                Place:body.Place,
                timelimit:body.timelimit,
                P_date:body.P_date,
            },{ headers:headers })
            .map(data=> data.json())
        }else{
            return this.http.post(url,body,{ headers:headers })
            .map(data=> data.json())
        }

    }

}

