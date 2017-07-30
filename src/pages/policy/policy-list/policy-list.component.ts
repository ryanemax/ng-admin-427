import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import { Http } from '@angular/http'

import {PolicyService} from "../policy.service";

import {Parse} from "../../../cloud/parse"

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.scss']
})

// export class PolicyListComponent implements OnInit {
//   constructor(){

//   }
//   ngOnInit(){

//   }
// }

export class PolicyListComponent implements OnInit {

  policies:Array<any>=[];
 
  constructor(meta: Meta, title: Title,private http:Http, public policyServ:PolicyService) {

    this.policyServ.getPolicies().subscribe(data=>{
      console.log('***----***');
      console.log(data);
      this.policies = data;
    });

    // let query = new Parse.Query("Policy",http)
    // query.limit(2);
    // query.find().subscribe(data=>{
    //   console.log(data)
    //   this.policies = data
    // })
 
    // Set SEO
    title.setTitle('My Home Page');

    meta.addTags([{
        name: 'author',
        content: 'eddic'
      },
      {
        name: 'keywords',
        content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description',
        content: 'This is my great description.'
      },
    ]);
    // end of SEO
  }

  ngOnInit() {}
}
