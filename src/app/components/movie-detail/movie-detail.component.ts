import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { MoviesDetail, Genre } from "src/app/models/movieDetail";
// import { Cast } from 'src/app/models/castModels';

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"]
})
export class MovieDetailComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getMovieDetail();
    this.getCast();
  }

  imgUrl: string = "https://image.tmdb.org/t/p/original";

  movies: MoviesDetail;
  genres: Genre[];
  casts: Object[] = [];

  getMovieDetail() {
    console.log("getMovieDetail called");
    this.movieService
      .getMovieDetail()
      .then(res => {
        this.movies = res;
        this.genres = res.genres;
        console.log(res);
      })
      .catch(e => console.log(e));
  }

  getCast() {
    this.movieService
      .getCast()
      .then(res => {
        // console.log(res.cast);
        this.casts = res.cast;
      })
      .catch(e => console.log(e));
  }
  
}
