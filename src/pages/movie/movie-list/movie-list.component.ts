import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import {MovieService} from '../movie.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  searchText: '';
  searchType: 'name';
  selectMovie: any = {
    name: '未选择'
  };
  searchResult: Array<any>;
  movies: Array<any> = [];

  getUserClick(ev) {
    this.selectMovie = ev;
    console.log(ev);
  }

  sortByAsccending(type= 'id') {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.movies.sort((a, b) => {
      return a[type] - b[type];
    });
  }

  sortByDesccending(type= 'id') {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.movies.sort((a, b) => {
      return b[type] - a[type];
    });
  }

  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  this.movies.forEach((movie, index) => {
    movie.tempIndex = Math.random();
  });
    this.sortByAsccending('tempIndex');
  }
  constructor(meta: Meta, title: Title, private movieServ: MovieService) {
    this.movies = this.movieServ.getMovies();

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
