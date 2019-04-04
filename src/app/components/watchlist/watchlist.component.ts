import { Component, OnInit } from '@angular/core';
import { MovieService } from "src/app/services/movie.service";
import { FavoriteMovieModel } from 'src/app/models/favoriteMovieModel';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  constructor(
    private movieService: MovieService
  ) {} 

  

  ngOnInit() {
    this.getWatchList();
  }

  favMovies: FavoriteMovieModel;
  userId: number = parseInt(localStorage.getItem("userId"));
  

  getWatchList() {
    this.movieService
      .getWatchList()
      .then(res => {
        console.log(res);
        this.favMovies = res;
      })
      .catch(e => console.log(e));
  }

}
