import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Parse } from '../../cloud/parse';

@Injectable()
export class LeaveService{
    constructor(private http:Http, private location:Location){};

    getLeaves():Promise<Array<any>>{
        let p = new Promise<Array<any>>((resolve,reject)=>{
            let query = new Parse.Query('Leave', this.http);
            let leaves:Array<any>
            query.find().subscribe(data => {
                console.log(data[0]);
                leaves = data;
                resolve(leaves);
                // return data;
            }, err=>{
                console.log(err);
                reject(leaves);
            });
            // console.log(leaves[0]);
        });
        return p;
    }

    getLeaveById(objectId:string):Promise<any>{
        let p = new Promise<any>((resolve, reject)=>{
            let serverURL = "http://host.qh-class.com:2337/parse";
            let path = "/classes/";
            let className = "Leave";
            let url = serverURL+path+className+"/"+objectId;
            console.log(objectId);
            console.log(url);

            let headers:Headers = new Headers({
                "X-Parse-Application-Id":"dev",
                "X-Parse-Master-Key":"angulardev",
                "Content-Type":"application/json; charset=utf-8"
            })

            this.http.get(url,{ headers:headers }).
                      map(data=>data.json()).
                      subscribe(data=>{
                        console.log(data);
                        resolve(data);
                      }, err=>{
                        reject(err);
                      });
        });

        return p;
    }


    SaveLeave(option:string,leave:any):Promise<any>{
        let p = new Promise((resolve, reject) => {
            let serverURL = "http://host.qh-class.com:2337/parse";
            let path = "/classes/";
            let className = "Leave";
            let url = serverURL+path+className;
            // console.log(url);

            let headers:Headers = new Headers({
                "X-Parse-Application-Id":"dev",
                "X-Parse-Master-Key":"angulardev",
                "Content-Type":"application/json; charset=utf-8"
            });

            let body = {
                'name':leave.name,
                'gender':leave.gender,
                'department':leave.department,
                'date':leave.date
            }
            // console.log(body);

            // 使用Observable
            if(option == 'new'){// insert调用post
                this.http.post(url, body, {headers:headers}).
                        map(data=>data.json).
                        subscribe(data=>{
                            resolve(data);
                        },err=>{
                            reject(err);
                        });
            }else{ // update调用put
                url = url + '/' + leave.objectId;
                this.http.put(url, body, {headers: headers}).
                        map(data=>data.json).
                        subscribe(data=>{
                            // console.log(data);
                            resolve(data);
                        },err=>{
                            // console.log(err);
                            reject(err);
                        });
            }
        });
        return p;
    }

    deleteLeave(objectId:string):Promise<any>{
        let p = new Promise((resolve, reject)=>{
            let serverURL = "http://host.qh-class.com:2337/parse";
            let path = "/classes/";
            let className = "Leave";
            let url = serverURL+path+className+'/'+objectId;
            // console.log(url);

            let headers:Headers = new Headers({
                "X-Parse-Application-Id":"dev",
                "X-Parse-Master-Key":"angulardev",
                "Content-Type":"application/json; charset=utf-8"
            });

            this.http.delete(url, {headers:headers}).
                    map(data=>data.json()).
                    subscribe(data=>{
                        resolve(data);
                    },err=>{
                        reject(err);
                    });
        });
        return p;
    }

    // saveLeave(){
    //    let query = new Parse.Query();
    // }
}
