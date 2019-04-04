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
    this.getWatchList();
  }

  wishMovies: object[];

  getWatchList() {
    this.movieService
      .getWatchList()
      .then(res => {
        console.log(res);
        this.wishMovies = res.wishList;
      })
      .catch(e => console.log(e));
  }
}
