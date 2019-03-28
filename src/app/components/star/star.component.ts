import { Component, OnInit } from '@angular/core';
import { MovieService } from "src/app/services/movie.service";
import { StarModel } from 'src/app/models/starModel';
import { StarMovieModel } from 'src/app/models/starMovieModel';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getStar();
    this.getStarMovie();
    // this.getStarShow();
  }

  imgUrl: string = "https://image.tmdb.org/t/p/original";

  stars: StarModel;
  starMovies: Object[] = [];
  starShows: Object[] = [];

  getStar() {
    this.movieService
      .getStar()
      .then(res => {
        this.stars = res;
      })
      .catch(e => console.log(e));
  }

  getStarMovie() {
    this.movieService
      .getStarMovie()
      .then(res => {
        this.starMovies = res.cast;
      })
      .catch(e => console.log(e));
  }

  getStarShow() {
    this.movieService
      .getStarShow()
      .then(res => {
        this.starShows = res.cast;
      })
      .catch(e => console.log(e));
  }
  
}
