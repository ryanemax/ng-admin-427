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

import { Parse } from '../../cloud/parse';

@Injectable()
export class MovieService{
    isLogined:boolean = false;
    movies: Array < any > = [{
      'id': 1,
     'name':'chenlu',
     'category':'M',
     'adirnew':'test',
     'performer':'insurace,保险',
     'country': '55', // 10 10 5 5 20 5
     'year': '0'
    }
  ];
    constructor(private http:Http,private location:Location){
    }
    delete(obj){
        this.deleteMovieById(obj.objectId).subscribe(data=>{
            console.log(data);
            this.location.go("/movie")
        })

        
    }
    deleteInArray(obj){
        let id = obj.id
        this.movies.forEach((item,index,array)=>{
            if(item.id == id){
                array.splice(index,1)
            }
        })
    }
    search(type,value){
        let query = new Parse.Query("movielist",this.http)
        query.equalTo(type,value)
    }
    searchInArray(type,value){
        this.movies.sort((a,b)=>{
        let result1 = String(a[type]).match(value)
        let result2 = String(b[type]).match(value)

        return Number(result2)-Number(result1);
        });
    }
    deleteChecked(){
        let checkList = this.movies.filter(item=>item.check==true)
        checkList.forEach(item=>{
            this.delete(item)
        })
    }

    getMovies():Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://localhost:1337/parse"
        let path = "/classes/"
        let className = "movielist"
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
    deleteMovieById(objectId):Observable<any>{
            // 1. 拼接HTTP请求所需的URL和Headers
            let serverURL = "http://localhost:1337/parse"
            let path = "/classes/"
            let className = "movielist"
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
    getMovieById(objectId):Observable<any>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://localhost:1337/parse"
        let path = "/classes/"
        let className = "movielist"
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

    saveMovie(body?):Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://localhost:1337/parse"
        let path = "/classes/"
        let className = "movielist"
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
                name:body.name,
                exam1:body.exam1,
                exam2:body.exam2,
                exam3:body.exam3,
                project:body.project,
                sex:body.sex,
            },{ headers:headers })
            .map(data=> data.json())
        }else{
            return this.http.post(url,body,{ headers:headers })
            .map(data=> data.json())
        }

    }

}

