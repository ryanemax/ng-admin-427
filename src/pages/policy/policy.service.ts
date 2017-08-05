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
export class PolicyService{
//         policies: Array < any > = [{
//         'policyNo': 10001,
//         'policyOwner': 'chenlu',
//         'insuredPerson': 'chenlu',
//         'product': 'EGS',
//         'insuredCost': 3000,
//         'insuredSumValue': 200000,
//         'effectiveDate': '2016-01-01',
//         'policyState': 'inforce'
//     },
//     {
//         'policyNo': 10002,
//         'policyOwner': 'xiaowang',
//         'insuredPerson': 'chenlu',
//         'product': 'CCL',
//         'insuredCost': 1500,
//         'insuredSumValue': 230000,
//         'effectiveDate': '2015-01-01',
//         'policyState': 'inforce'
//     },
//     {
//         'policyNo': 10003,
//         'policyOwner': 'xiaohong',
//         'insuredPerson': 'xiaohong',
//         'product': 'CP',
//         'insuredCost': 3000,
//         'insuredSumValue': 200000,
//         'effectiveDate': '2016-01-01',
//         'policyState': 'inforce'
//     },
//     {
//         'policyNo': 10004,
//         'policyOwner': 'mike',
//         'insuredPerson': 'mike',
//         'product': 'EGS2',
//         'insuredCost': 5000,
//         'insuredSumValue': 690000,
//         'effectiveDate': '2016-01-01',
//         'policyState': 'inforce'
//     },
//     {
//         'policyNo': 10005,
//         'policyOwner': 'xiaoming',
//         'insuredPerson': 'xiaoming',
//         'product': 'DL',
//         'insuredCost': 1000,
//         'insuredSumValue': 160000,
//         'effectiveDate': '2016-01-01',
//         'policyState': 'inforce'
//     },
//     {
//         'policyNo': 10006,
//         'policyOwner': 'harry',
//         'insuredPerson': 'harry',
//         'product': 'CCL3',
//         'insuredCost': 3000,
//         'insuredSumValue': 800000,
//         'effectiveDate': '2016-01-01',
//         'policyState': 'inforce'
//     },
//     {
//         'policyNo': 10007,
//         'policyOwner': 'zhaochun',
//         'insuredPerson': 'zhaochun',
//         'product': 'PL',
//         'insuredCost': 300,
//         'insuredSumValue': 29000,
//         'effectiveDate': '2016-01-01',
//         'policyState': 'inforce'
//     },
//     {
//         'policyNo': 10008,
//         'policyOwner': 'xiaolan',
//         'insuredPerson': 'xiaolan',
//         'product': 'PWIH',
//         'insuredCost': 6000,
//         'insuredSumValue': 2900000,
//         'effectiveDate': '2016-01-01',
//         'policyState': 'inforce'
//     }
//     ,
//     {
//         'policyNo': 10009,
//         'policyOwner': 'han',
//         'insuredPerson': 'han',
//         'product': 'P8WB',
//         'insuredCost': 230,
//         'insuredSumValue': 18000,
//         'effectiveDate': '2016-01-01',
//         'policyState': 'inforce'
//     },
//     {
//         'policyNo': 10010,
//         'policyOwner': 'chunhua',
//         'insuredPerson': 'xiaohua',
//         'product': 'EGS2',
//         'insuredCost': 3000,
//         'insuredSumValue': 2000000,
//         'effectiveDate': '2016-01-01',
//         'policyState': 'inforce'
//     },
//     {
//         'policyNo': 10011,
//         'policyOwner': 'chenhong',
//         'insuredPerson': 'chenlu',
//         'product': 'CCL',
//         'insuredCost': 3000,
//         'insuredSumValue': 200000,
//         'effectiveDate': '2016-01-01',
//         'policyState': 'inforce'
//     },
//     {
//         'policyNo': 10012,
//         'policyOwner': 'chenping',
//         'insuredPerson': 'chenping',
//         'product': 'CP',
//         'insuredCost': 300,
//         'insuredSumValue': 60000,
//         'effectiveDate': '2016-01-01',
//         'policyState': 'inforce'
//     }
//   ];

    http:Http;
    constructor(http:Http,private location:Location){
        this.http = http;
    }
    delete(obj){
        this.deletePolicyById(obj.objectId).subscribe(data=>{
            console.log(data);
            this.location.go("/policy")
        })
    }
    // search(type,value){
    //     this.policies.sort((a,b)=>{
    //     let result1 = String(a[type]).match(value)
    //     let result2 = String(b[type]).match(value)

    //     return Number(result2)-Number(result1);
    //     });
    // }

    getPolicies():Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://localhost:1337/parse"
        let path = "/classes/"
        let className = "policy"
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
    deletePolicyById(objectId):Observable<any>{
            // 1. 拼接HTTP请求所需的URL和Headers
            let serverURL = "http://localhost:1337/parse"
            let path = "/classes/"
            let className = "policy"
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
    getPolicyById(objectId):Observable<any>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://localhost:1337/parse"
        let path = "/classes/"
        let className = "policy"
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

    savePolicy(body?):Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://localhost:1337/parse"
        let path = "/classes/"
        let className = "policy"
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
            return this.http.put(url,{
                policyNo:body.policyNo,
                policyOwner:body.policyOwner,
                insuredPerson:body.insuredPerson,
                product:body.product,
                insuredCost:body.insuredCost,
                insuredSumValue:body.insuredSumValue,
                effectiveDate:body.effectiveDate,
                policyState:body.policyState
            },{ headers:headers })
            .map(data=> data.json())
        }else{
            return this.http.post(url,body,{ headers:headers })
            .map(data=> data.json())
        }

    }

}

