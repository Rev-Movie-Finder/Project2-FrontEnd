import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"]
})
export class FavoriteComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getFavoriteMovie();
  }

  favMovies: object[];

  getFavoriteMovie() {
    this.movieService
      .getFavoriteMovie()
      .then(res => {
        console.log(res);
        this.favMovies = res.favoriteMovies;
      })
      .catch(e => console.log(e));
  }

  // getMyMovie() {
  //   this.movieService
  //     .getFavoriteMovie()
  //     .then(res => {
  //       console.log(res);
  //       this.favMovies = res;
  //     })
  //     .catch(e => console.log(e));
  // }
}
