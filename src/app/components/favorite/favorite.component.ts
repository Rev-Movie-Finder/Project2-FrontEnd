import { Component, OnInit } from '@angular/core';
import { MovieService } from "src/app/services/movie.service";
import { FavoriteMovieModel, FavoriteMovy } from 'src/app/models/favoriteMovieModel';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.getFavoriteMovie();
  }

  favMovies: FavoriteMovieModel;
  userId: number = parseInt(localStorage.getItem("userId"));

  getFavoriteMovie() {
    this.movieService
      .getFavoriteMovie()
      .then(res => {
        console.log(res);
        this.favMovies = res;
      })
      .catch(e => console.log(e));
  }

  getMyMovie() {
    this.movieService
      .getFavoriteMovie()
      .then(res => {
        console.log(res);
        this.favMovies = res;
      })
      .catch(e => console.log(e));
  }
  

}
