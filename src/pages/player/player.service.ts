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
Parse.initialize("dev","http://host.qh-class.com:2337/parse")

@Injectable()
export class PlayerService{
    isLogined:boolean = false;
    players: Array < any > = [
     {"id":1,
      "name":"C.罗纳尔多",
      "nationality":"葡萄牙",
      "match":140,
      "goal":105,
      "club":"曼联/皇马",
      "title":4},
     {"id":2,
      "name":"梅西",
      "nationality":"阿根廷",
      "match":115,
      "goal":94,
      "club":"巴塞罗那",
      "title":4},
      {"id":3,
      "name":"劳尔.冈萨雷斯",
      "nationality":"西班牙",
      "match":142,
      "goal":71,   
      "club":"皇家马德里",
      "title":3},
      {"id":4,
      "name":"范尼斯特鲁伊",
      "nationality":"荷兰",
      "match":73,
      "goal":56,
      "club":"曼联/皇马",
      "title":0},
      {"id":5,
      "name":"亨利",
      "nationality":"法国",
      "match":112,
      "goal":50,
      "club":"阿森纳/巴萨",
      "title":2}
    ];
    constructor(private http:Http,private location:Location){
    }
    delete(obj){
        this.deletePlayerById(obj.objectId).subscribe(data=>{
            console.log(data);
            this.location.go("/player")
        })

        // this.students.forEach((item,index,array)=>{
        //     if(item.id == id){
        //         array.splice(index,1)
        //     }
        // })
    }
    search(type,value){
        this.players.sort((a,b)=>{
        let result1 = String(a[type]).match(value)
        let result2 = String(b[type]).match(value)

        return Number(result2)-Number(result1);
        });
    }
    deleteChecked(){
        let checkList = this.players.filter(item=>item.check==true)
        checkList.forEach(item=>{
            this.delete(item)
        })
    }

    getPlayers():Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        let path = "/classes/"
        let className = "Player"
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
    deletePlayerById(objectId):Observable<any>{
            // 1. 拼接HTTP请求所需的URL和Headers
            let serverURL = "http://host.qh-class.com:2337/parse"
            let path = "/classes/"
            let className = "Player"
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
    getPlayerById(objectId):Observable<any>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        let path = "/classes/"
        let className = "Player"
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

    savePlayer(body?):Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        let path = "/classes/"
        let className = "Player"
        let url = serverURL+path+className

        let headers:Headers = new Headers({
            "X-Parse-Application-Id":"dev",
            "X-Parse-Master-Key":"angulardev",
            // "X-Parse-Session-Token":"r:059bbbebdc201de090f16fe9716b43bf",
            "Content-Type":"application/json; charset=utf-8"
        })

        // 2. 发起HTTP POST或PUT提交请求
        if(!body){
            body = {name:"武磊",nationality:"中国",match:10}
        }

        if(body.objectId){
            url += "/"+body.objectId
            // body.objectId = undefined
            return this.http.put(url,{
                name:body.name,
                nationality:body.nationality,
                match:body.match,
                goal:body.goal,
                club:body.club,
                title:body.title,               
            },{ headers:headers })
            .map(data=> data.json())
        }else{
            return this.http.post(url,body,{ headers:headers })
            .map(data=> data.json())
        }

    }

}

