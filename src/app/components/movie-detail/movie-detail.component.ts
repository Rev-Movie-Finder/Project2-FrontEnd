import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MovieService } from "src/app/services/movie.service";
import { MoviesDetail, Genre } from "src/app/models/movieDetail";
import { TrailerModel } from 'src/app/models/TrailerModel';

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"]
})
export class MovieDetailComponent implements OnInit {
  constructor(private movieService: MovieService, private route: Router) {}

  ngOnInit() {
    this.getMovieDetail();
    // this.getCast();
    // this.getTrailer();
    this.getSimilarMovies();
  }

  imgUrl: string = "https://image.tmdb.org/t/p/original";
  videoUrl: string = "https://www.youtube.com/watch?v=";

  movies: MoviesDetail;
  genres: Genre[];
  casts: Object[] = [];
  trailers: Object[] = [];
  similarMovies: Object[] = [];

  getMovieDetail() {
    console.log("getMovieDetail called");
    this.movieService
      .getMovieDetail()
      .then(res => {
        this.movies = res;
        this.genres = res.genres;
      })
      .catch(e => console.log(e));
  }

  getCast() {
    this.movieService
      .getCast()
      .then(res => {
        this.casts = res.cast;
      })
      .catch(e => console.log(e));
  }

  redirectUrl(id: string) {
    localStorage.setItem("castId", id);
    this.route.navigateByUrl("star");
  }

  getTrailer() {
    this.movieService
      .getTrailer()
      .then(res => {
        console.log(res.results);
        this.trailers = res.results;
      })
      .catch(e => console.log(e));
  }

  getSimilarMovies() {
    this.movieService
      .getSimilarMovies()
      .then(res => {
        console.log(res.results);
        this.similarMovies = res.results;
      })
      .catch(e => console.log(e));
  }

  
}
