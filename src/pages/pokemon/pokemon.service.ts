import { Injectable } from '@angular/core';
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
export class PokemonService {

  attributesList: Array<any> = [
    '水','普通','火','飞','虫','草'
    ,'钢','格斗','地','毒','电','岩石','冰','龙','恶','超能','鬼'
  ]

  http:Http 
     constructor(http:Http,private location:Location){ 
         this.http = http 
     } 
    //  delete(obj){ 
    //      this.deleteStudentById(obj.objectId).subscribe(data=>{ 
    //          console.log(data); 
    //          this.location.go("/student") 
    //      }) 
 
 
    //      // this.students.forEach((item,index,array)=>{ 
    //      //     if(item.id == id){ 
    //      //         array.splice(index,) 
    //      //     } 
    //      // }) 
    //  } 
    //  search(type,value){ 
    //      this.students.sort((a,b)=>{ 
    //      let result = String(a[type]).match(value) 
    //      let result = String(b[type]).match(value) 
 
 
    //      return Number(result)-Number(result); 
    //      }); 
    //  } 
    //  deleteChecked(){ 
    //      let checkList = this.students.filter(item=>item.check==true) 
    //      checkList.forEach(item=>{ 
    //          this.delete(item) 
    //      }) 
    //  } 
 
 
     getPokemonsbyUrl():Observable<any[]>{ 
         // . 拼接HTTP请求所需的URL和Headers 
         let serverURL = "http://localhost:1337/parse" 
         let path = "/classes/" 
         let className = "Pokemon" 
         let url = serverURL+path+className 
 
 
         let headers:Headers = new Headers({ 
             "X-Parse-Application-Id":"dev", 
             "X-Parse-Master-Key":"angulardev", 
             // "X-Parse-Session-Token":"r:bbbebdcdeffebbf", 
             "Content-Type":"application/json; charset=utf-" 
         }) 

         // . 发起HTTP GET查询请求 
         return this.http.get(url,{ headers:headers }) 
         .map(data=>data.json()) 
         .map(data=>data.results)       
     }

     getPokemonAttributesListbyUrl():Observable<any[]>{ 
         // . 拼接HTTP请求所需的URL和Headers 
         let serverURL = "http://localhost:1337/parse" 
         let path = "/classes/" 
         let className = "PokemonAttributesList" 
         let url = serverURL+path+className 
 
 
         let headers:Headers = new Headers({ 
             "X-Parse-Application-Id":"dev", 
             "X-Parse-Master-Key":"angulardev", 
             // "X-Parse-Session-Token":"r:bbbebdcdeffebbf", 
             "Content-Type":"application/json; charset=utf-" 
         }) 

         // . 发起HTTP GET查询请求 
         return this.http.get(url,{ headers:headers }) 
         .map(data=>data.json()) 
         .map(data=>data.results)       
     }

     getPokemonbyIndex(objectId):Observable<any>{
       // . 拼接HTTP请求所需的URL和Headers 
         let serverURL = "http://localhost:1337/parse" 
         let path = "/classes/" 
         let className = "Pokemon/" 
        let url = serverURL+path+className+objectId

        let headers:Headers = new Headers({ 
             "X-Parse-Application-Id":"dev", 
             "X-Parse-Master-Key":"angulardev", 
             // "X-Parse-Session-Token":"r:bbbebdcdeffebbf", 
             "Content-Type":"application/json; charset=utf-" 
         }) 
 
 
         // . 发起HTTP GET查询请求 
         return this.http.get(url,{ headers:headers }) 
         .map(data=>data.json()) 
     }
     deletePokemonById(objectId):Observable<any>{ 
             // . 拼接HTTP请求所需的URL和Headers 
             let serverURL = "http://localhost:1337/parse" 
             let path = "/classes/" 
             let className = "Pokemon" 
             let url = serverURL+path+className+"/"+objectId 
 
 
             let headers:Headers = new Headers({ 
                 "X-Parse-Application-Id":"dev", 
                 "X-Parse-Master-Key":"angulardev", 
                 // "X-Parse-Session-Token":"r:bbbebdcdeffebbf", 
                 "Content-Type":"application/json; charset=utf-" 
             }) 
 
 
             // . 发起HTTP DELETE查询请求 
             return this.http.delete(url,{ headers:headers }) 
             .map(data=>data.json()) 
         } 
 
 
     savePokemon(body?):Observable<any[]>{ 
         // . 拼接HTTP请求所需的URL和Headers 
         let serverURL = "http://localhost:1337/parse" 
         let path = "/classes/" 
         let className = "Pokemon" 
         let url = serverURL+path+className 
 
 
         let headers:Headers = new Headers({ 
             "X-Parse-Application-Id":"dev", 
             "X-Parse-Master-Key":"angulardev", 
             // "X-Parse-Session-Token":"r:bbbebdcdeffebbf", 
             "Content-Type":"application/json; charset=utf-" 
         }) 
 
 
         // . 发起HTTP POST或PUT提交请求 
         if(!body){ 
             body = {
                  "name": null,
                  "attributes": null
                } 
         } 
 
 
         if(body.objectId){ 
             url += "/"+body.objectId 
             // body.objectId = undefined 

             return this.http.put(url,{ 
                 name:body.name, 
                 attributes:body.attributes, 
             },{ headers:headers }) 
             .map(data=> data.json()) 
         }else{ 
             return this.http.post(url,body,{ headers:headers }) 
             .map(data=> data.json()) 
         } 
 
 
     } 


  getPokemons() {
    
  }

}
