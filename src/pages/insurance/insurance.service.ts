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
export class InsuranceService{
    isLogined:boolean = false;
    insurants: Array < any > = [{
      'planId': 1,
      'planName':'意外保险',
     'name':'chenlu',
     'sex':'M',
     'age': 30,
     'period':'2071年'
    },
    {
     'planId': 2,
      'planName':'意外保险',
     'name':'kalezhang',
     'sex':'M',
     'age': 20,
     'period':'2071年'
    },
    {
     'planId': 3,
      'planName':'意外保险',
     'name':'kalezhang',
     'sex':'M',
     'age': 20,
     'period':'2071年'
    },
    {
     'planId': 4,
      'planName':'意外保险',
     'name':'kalezhang',
     'sex':'M',
     'age': 20,
     'period':'2071年'
    },
    {
     'planId': 5,
     'planName':'意外保险',
     'name':'kalezhang',
     'sex':'M',
     'age': 20,
     'period':'2071年'
    }
  ];

    // constructor(){

    // }

    // getInsurants(){
    //     return this.insurants;
    // }

    // search(type,value){
    //     this.insurants.sort((a,b)=>{
    //     let result1 = String(a[type]).match(value)
    //     let result2 = String(b[type]).match(value)

    //     return Number(result2)-Number(result1);
    //     });
    // }

      http:Http
    constructor(http:Http,private location:Location){
        this.http = http
    }
    delete(obj){
        this.deleteInsuranceById(obj.objectId).subscribe(data=>{
            console.log(data);
            this.location.go("/student")
        })

        // this.students.forEach((item,index,array)=>{
        //     if(item.id == id){
        //         array.splice(index,1)
        //     }
        // })
    }
    search(type,value){
        this.insurants.sort((a,b)=>{
        let result1 = String(a[type]).match(value)
        let result2 = String(b[type]).match(value)

        return Number(result2)-Number(result1);
        });
    }
    deleteChecked(){
        let checkList = this.insurants.filter(item=>item.check==true)
        checkList.forEach(item=>{
            this.delete(item)
        })
    }

    getInsurances():Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        // let serverURL = "http://host.qh-class.com:2337/parse"
        let serverURL = "http://localhost:1337/parse"        
        let path = "/classes/"
        let className = "Insurance"
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
    deleteInsuranceById(objectId):Observable<any>{
            // 1. 拼接HTTP请求所需的URL和Headers
            // let serverURL = "http://host.qh-class.com:2337/parse"
            let serverURL = "http://localhost:1337/parse"
            
            let path = "/classes/"
            let className = "Insurance"
            let url = serverURL+path+className+"/"+objectId
            console.log(url)
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
    getInsuranceById(objectId):Observable<any>{
        // 1. 拼接HTTP请求所需的URL和Headers
        // let serverURL = "http://host.qh-class.com:2337/parse"
        let serverURL = "http://localhost:1337/parse"
        
        let path = "/classes/"
        let className = "Insurance"
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

    saveInsurance(body?):Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        // let serverURL = "http://host.qh-class.com:2337/parse"
        let serverURL = "http://localhost:1337/parse"
        
        let path = "/classes/"
        let className = "Insurance"
        let url = serverURL+path+className

        let headers:Headers = new Headers({
            "X-Parse-Application-Id":"dev",
            "X-Parse-Master-Key":"angulardev",
            // "X-Parse-Session-Token":"r:059bbbebdc201de090f16fe9716b43bf",
            "Content-Type":"application/json; charset=utf-8"
        })

        // 2. 发起HTTP POST或PUT提交请求
        if(!body){
            body = {planName:"意外保险",name:"李阳",sex:"男",age:"20",period:"2050年"}
        }

        if(body.objectId){
            url += "/"+body.objectId
            // body.objectId = undefined
            return this.http.put(url,{
                planName:body.planName,
                name:body.name,
                sex:body.sex,
                age:body.age,
                period:body.period,
            },{ headers:headers })
            .map(data=> data.json())
        }else{
            return this.http.post(url,body,{ headers:headers })
            .map(data=> data.json())
        }

    }

}

