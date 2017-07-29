import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Location } from '@angular/common';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CommodityService {
    isLogined: boolean = false;
     commodities: Array<any> = [
    { "id":19,
      "commodityId":19,
      "name":"皮鞋",
      "price":"300"},
      {"id":7,
      "commodityId":7,
      "name":"包",
      "price":"100"},
      {"id":14,
      "commodityId":14,
      "name":"衣服",
      "price":"200"}
  ];
   constructor(private http:Http,private location:Location){
    }
    delete(obj){
        this.deleteCommodityById(obj.objectId).subscribe(data=>{
            console.log(data);
            this.location.go("/commodity")
        })

        // this.commoditys.forEach((item,index,array)=>{
        //     if(item.id == id){
        //         array.splice(index,1)
        //     }
        // })
    }
    search(type,value){
        this.commodities.sort((a,b)=>{
        let result1 = String(a[type]).match(value);
        let result2 = String(b[type]).match(value);

        return Number(result2)-Number(result1);
        });
    }
    deleteChecked(){
        let checkList = this.commodities.filter(item=>item.check==true)
        checkList.forEach(item=>{
            this.delete(item);
        })
    }

    getCommodities():Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse";
        let path = "/classes/";
        let className = "commodity";
        let url = serverURL+path+className;

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
    deleteCommodityById(objectId):Observable<any>{
        console.log("psn is here" + objectId);
            // 1. 拼接HTTP请求所需的URL和Headers
            let serverURL = "http://host.qh-class.com:2337/parse"
            let path = "/classes/"
            let className = "commodity"
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
    getCommodityById(objectId):Observable<any>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        let path = "/classes/"
        let className = "commodity"
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

    saveCommodity(body?):Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        let path = "/classes/"
        let className = "commodity"
        let url = serverURL+path+className

        let headers:Headers = new Headers({
            "X-Parse-Application-Id":"dev",
            "X-Parse-Master-Key":"angulardev",
            // "X-Parse-Session-Token":"r:059bbbebdc201de090f16fe9716b43bf",
            "Content-Type":"application/json; charset=utf-8"
        })

        // 2. 发起HTTP POST或PUT提交请求
        if(!body){
            body = {name:"shose",price:66, commodityId:7}
        }

        if(body.objectId){
            url += "/"+body.objectId
            // body.objectId = undefined
            return this.http.put(url,{
                name:body.name,
                price:body.price,
                commodityId:body.commodityId,
            },{ headers:headers })
            .map(data=> data.json())
        }else{
            return this.http.post(url,body,{ headers:headers })
            .map(data=> data.json())
        }

    }

}