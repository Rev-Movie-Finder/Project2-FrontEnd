import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";

@Component({
  selector: "app-watchlist",
  templateUrl: "./watchlist.component.html",
  styleUrls: ["./watchlist.component.css"]
})
export class WatchlistComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getFavoriteMovie();
  }

  wishMovies: object[];

  getFavoriteMovie() {
    this.movieService
      .getFavoriteMovie()
      .then(res => {
        console.log(res);
        this.wishMovies = res.wishList;
      })
      .catch(e => console.log(e));
  }
}
