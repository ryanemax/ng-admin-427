import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import { Http } from '@angular/http'

import {ProductService} from "../product.service";

import {Parse} from "../../../cloud/parse"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectProduct:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  products:Array<any>=[];

  getUserClick(ev){
    this.selectProduct = ev
    console.log(ev);
  }
 
  sortByAsccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.products.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.products.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
      this.products.forEach((product,index)=>{
        product.tempIndex = Math.random();
       })
      this.sortByAsccending("tempIndex");
  }
  constructor(meta: Meta, title: Title,private http:Http, private productServ:ProductService) {

    let query = new Parse.Query("Product",http)
    query.find().subscribe(data=>{
      console.log(data)
      this.products = data
    })

    // this.productServ.getProducts().subscribe(data=>{
    //   console.log(data)
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
