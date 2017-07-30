import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit, OnDestroy {
  movieId: '';
  movie: any = {
    name: ''
  };
    isNew:boolean = false;

  // Subscribe Declaration
  getMovieSubscribe: any;

  constructor(private route: ActivatedRoute,
  private movieServ: MovieService,
  private location: Location) {
  }
  back() {
    this.location.back();
  }
  save() {
    if (this.isNew) {
      this.movieServ.movies.push(this.movie);
    }
    this.location.back();
  }
  ngOnInit() {
    this.getMovieSubscribe = this.route.params.subscribe(params => {
      this.getMovie(params['sid']).then(movie => {
      console.log(movie);
      this.movieId = movie.id;
      this.movie = movie;
    }).catch(err => {
      console.log(err);
    });
    });
  }
  ngOnDestroy() {
    this.getMovieSubscribe.unsubscribe();
  }

  getMovie(id: any): Promise<any> {

    let p = new Promise((resolve, reject) => {
      if (id == 'new' ) {
        let movie = {name: ''};
        this.isNew = true;
        resolve(movie);
      }
      let movie = this.movieServ.movies.find(item => item.id == id);
      if (movie) {
        resolve(movie);
      } else {
        reject('movie not found');
      }
    });
    return p;
}

}
