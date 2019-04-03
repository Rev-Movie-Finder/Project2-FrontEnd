import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MovieService } from "src/app/services/movie.service";
import { MoviesDetail, Genre } from "src/app/models/movieDetail";
import { DomSanitizer } from "@angular/platform-browser";
import { toUnicode } from 'punycode';
import { interceptingHandler } from '@angular/common/http/src/module';
import { ReleaseDateModel } from 'src/app/models/releaseDateModel';

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"]
})
export class MovieDetailComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private movieService: MovieService,
    private route: Router
  ) {}

  ngOnInit() {
    this.getMovieDetail();
    this.getReleaseDate();
    this.getCast();
    this.getTrailer();
    this.currentlyOpen = 1;
  }

  watchStyle: string = "btn btn-primary";
  isWatch: boolean = false;
  watchBtnText: string = "Watchlist";
  favoriteStyle: string = "btn btn-danger";
  isFavorite: boolean = false;
  favoriteBtnText: string = "Favorite";
  currentlyOpen: number;
  imgUrl: string = "https://image.tmdb.org/t/p/original";
  key: string = "";
  movies: MoviesDetail;
  dates: Object[] = [];
  genres: Genre[];
  casts: Object[] = [];
  trailers: Object[] = [];
  similarMovies: Object[] = [];

  favoriteClicked()
  {
    if(this.isFavorite)
    {
      this.favoriteStyle = "btn btn-danger";
      this.isFavorite = false;
      this.favoriteBtnText = "Favorite";
    }
    else
    {
      this.favoriteStyle = "btn btn-outline-danger";
      this.isFavorite = true;
      this.favoriteBtnText = "Added to Favorites " + String.fromCharCode(10003);
    }
  }

  watchClicked()
  {
    if(this.isWatch)
    {
      this.watchStyle = "btn btn-primary";
      this.isWatch = false;
      this.watchBtnText = "Watchlist";
    }
    else
    {
      this.watchStyle = "btn btn-outline-primary";
      this.isWatch = true;
      this.watchBtnText = "Added to Watchlist " + String.fromCharCode(10003);
    }
  }

  getMovieDetail() {
    this.movieService
      .getMovieDetail()
      .then(res => {
        this.movies = res;
        this.genres = res.genres;
      })
      .catch(e => console.log(e));
  }

  getReleaseDate() {
    this.movieService
      .getReleaseDate()
      .then(res => {
        this.dates = res.results;
      })
      .catch(e => console.log(e));
  }

  getCast() {
    this.currentlyOpen = 1;
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
    this.currentlyOpen = 2;
    this.movieService
      .getTrailer()
      .then(res => {
        this.key = res.results[0].key;
      })
      .catch(e => console.log(e));
  }

  getSimilarMovies() {
    this.currentlyOpen = 3;
    this.movieService
      .getSimilarMovies()
      .then(res => {
        this.similarMovies = res.results;
      })
      .catch(e => console.log(e));
  }

  redirectUrl2(id: string) {
    localStorage.setItem("movieId", id);
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.route.navigate(["movies/movie-detail"]));
  }

  getVideoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/" + this.key
    );
  }
}
