import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: any;
  @Output() movieClick = new EventEmitter<any>();
  constructor(private movieServ: MovieService) {
  }
  onMovieClick() {
    this.movieClick.emit(this.movie);
  }
  check() {
    if (this.movie.check && this.movie.check == true) {
      this.movie.check = false;
    }else{
      this.movie.check = true;
    }
  }
  isChecked() {
    if (this.movie.check && this.movie.check == true) {
      return true;
    } else {
      return false;
    }
  }
  ngOnInit() {
  }
}
