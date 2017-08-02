import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import { Http } from '@angular/http'

import {MovieService} from "../movie.service";

import {Parse} from "../../../cloud/parse";

// DataTable
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
// End of DataTable

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectMovie:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  movies:Array<any>=[];

  getUserClick(ev){
    this.selectMovie = ev
    console.log(ev);
  }

    search(type,value){
        let query = new Parse.Query("movielist",this.http)
        query.equalTo(type,value)
        query.find().subscribe(data=>{
          this.movies = data
        })
    }
  
  sortByAsccending(type="year") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.movies.sort((a,b)=>{
      return a[type] - b[type];
    });
    console.log(this.movies);
  }
  sortByDesccending(type="year") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.movies.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  this.movies.forEach((movie,index)=>{
    movie.tempIndex = Math.random();
  })
    this.sortByAsccending("year");
  }
  constructor(meta: Meta, title: Title,private http:Http, public movieServ:MovieService) {

    let query = new Parse.Query("movielist",http)
    query.find().subscribe(data=>{
      console.log(data)
      this.movies = data
    })

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

  // DataTable
  displayedColumns = ['name', 'category', 'adirnew', 'performer', 'country', 'year'];
  parseDatabase = new ParseDatabase(this.http);
  dataSource: ParseDataSource | null;
  // end of DataTable
  refresh(){
    console.log("test");  
       this.dataSource.refresh();
  }
  ngOnInit() {
    this.dataSource = new ParseDataSource(this.parseDatabase);
    
}
}

interface Movie {
  objectId: string;
  createdId: Date;
  updatedId: Date;
  name: string;
  category: string;
  adirnew: string;
  performer: string;
  country: string;
  year: string;
}


/** An example database that the data source uses to retrieve data for the table. */
export class ParseDatabase {
  
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  get data(): Movie[] { return this.dataChange.value; }
  http:Http
  constructor(http:Http) {
    this.http = http
    this.refresh()

  }
  refresh(){
      this.getMovies().subscribe(data=>{
        this.dataChange.next(data);
      })
  }
  getMovies(){
    let query = new Parse.Query("movielist",this.http);
    return query.find()
  }

  
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ParseDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ParseDataSource extends DataSource<any> {
  constructor(private _parseDatabase: ParseDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Movie[]> {
    return this._parseDatabase.dataChange;
  }
  refresh(){
    this._parseDatabase.refresh()
  }
  disconnect() {}
}
