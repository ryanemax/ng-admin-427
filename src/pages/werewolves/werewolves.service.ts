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
// import {Parse} from "../../cloud/parse"
import { Parse } from '../../cloud/parse'
Parse.initialize("dev","http://host.qh-class.com:2337/parse")

@Injectable()
export class WerewolvesService{
    isLogined:boolean = false;
    werewolves: Array < any > = [{
       "role":"法官",
       "role_en":"moderator",
       "describe":"  website_moderator",
       "responsibility":"control the game",
       "victory":"not applicable",
       "number":1
    },
    {
       "role":"狼人",
       "role_en":"werewolves",
       "describe":"  website_werewolves",
       "responsibility":"  kill people at night",
       "victory":"others all out",
       "number":4
    },
    {
       "role":"村民",
       "role_en":"villagers",
       "describe":"  website_villagers",
       "responsibility":"  find the werewolves",
       "victory":"werewolves all out",
       "number":4
    },
    {
       "role":"守卫",
       "role_en":"savior",
       "describe":"  website_savior",
       "responsibility":"  guard people at night",
       "victory":"werewolves all out",
       "number":1
    },
    {
       "role":" 预言家",
       "role_en":"seer",
       "describe":"  website_seer",
       "responsibility":"  check people at night",
       "victory":"werewolves all out",
       "number":1
    },
    {
       "role":"女巫",
       "role_en":"witch",
       "describe":"  website_witch",
       "responsibility":"  save&kill others at night",
       "victory":"werewolves all out",
       "number":1
    },
    {
       "role":"长老",
       "role_en":"acient",
       "describe":"  website_acient",
       "responsibility":" have two extra lives",
       "victory":"werewolves all out",
       "number":1
    },
    {
       "role":"白痴",
       "role_en":"idiot",
       "describe":"  website_idiot",
       "responsibility":"can't be voted out",
       "victory":"werewolves all out",
       "number":1
    }
    ,
    {
       "role":"骑士",
       "role_en":"knight",
       "describe":"  website_knight",
       "responsibility":"check one person whether a werewolf",
       "victory":"werewolves all out",
       "number":1
    },
    
  ];

//     constructor(){

//     }

//     getStudents(){
//         return this.werewolvess;
//     }

// }
http:Http
    constructor(http:Http,private location:Location){
        this.http = http
    }
    delete(obj){
        this.deleteStudentById(obj.objectId).subscribe(data=>{
            console.log(data)
   
        })

        // this.students.forEach((item,index,array)=>{
        //     if(item.id == id){
        //         array.splice(index,1)
        //     }
        // })
    }
    search(type,value){
        this.werewolves.sort((a,b)=>{
        console.log(type);
        console.log(value);
        let result1 = String(a[type]).match(value)
        console.log(String(a[type]));
        let result2 = String(b[type]).match(value)
        console.log(String(b[type]));
        console.log(result2);
        console.log(Number(result2));

        return Number(result2)-Number(result1);
        });
    }
    deleteChecked(){
        let checkList = this.werewolves.filter(item=>item.check==true)
        checkList.forEach(item=>{
            this.delete(item)
        })
    }

    getwerewolf():Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        let path = "/classes/"
        let className = "Werewolf"
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
    deleteStudentById(objectId):Observable<any>{
            // 1. 拼接HTTP请求所需的URL和Headers
            let serverURL = "http://host.qh-class.com:2337/parse"
            let path = "/classes/"
            let className = "Werewolf"
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
    getWerewolvesById(objectId):Observable<any>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        let path = "/classes/"
        let className = "Werewolf"
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

    saveWerewolves(body?):Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://host.qh-class.com:2337/parse"
        let path = "/classes/"
        let className = "Werewolf"
        let url = serverURL+path+className

        let headers:Headers = new Headers({
            "X-Parse-Application-Id":"dev",
            "X-Parse-Master-Key":"angulardev",
            // "X-Parse-Session-Token":"r:059bbbebdc201de090f16fe9716b43bf",
            "Content-Type":"application/json; charset=utf-8"
        })

        // 2. 发起HTTP POST或PUT提交请求
        if(!body){
            body = {role:"闭眼玩家",responsibility:"find the werewolf",number:1}
        }

        if(body.objectId){
            url += "/"+body.objectId
            // body.objectId = undefined
            return this.http.put(url,{
                role:body.role,
                role_en:body.role_en,
                responsibility:body.responsibility,
                victory:body.victory,
                describe:body.describe,
                number:body.number,
            },{ headers:headers })
            .map(data=> data.json())
        }else{
            return this.http.post(url,body,{ headers:headers })
            .map(data=> data.json())
        }

    }

}

