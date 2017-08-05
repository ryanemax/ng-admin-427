import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit,OnDestroy {
  movieId:string="";
  movie:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getMovieSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private movieServ:MovieService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.movie.exam1 = Number(this.movie.exam1)
    this.movie.exam2 = Number(this.movie.exam2)
    this.movie.exam3 = Number(this.movie.exam3)
    this.movieServ.saveMovie(this.movie).subscribe(data=>{
      console.log(data)
      this.location.back();
    })
    this.movieServ.saveMovie(this.movie).subscribe(data=>{
      console.log(data)
      this.location.back();        
    })
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let id = params['id']
          if(id=="new"){
            let movie = {name:""}
            this.isNew = true;
            this.movie = movie
          }else{
            this.movieServ.getMovieById(id).subscribe(movie=>{
            console.log(movie)
            // this.movieId = movie.objectId;
            this.movie = movie
        })
      }

    })
  }
  ngOnDestroy(){
  }


}
