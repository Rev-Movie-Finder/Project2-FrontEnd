import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private movieService: MovieService, private route: Router) {}

  ngOnInit() {
    this.getPopular();
  }

  movies: Object[] = [];
  imgUrl: string = "http://image.tmdb.org/t/p/w300";

  getPopular() {
    this.movieService
      .getPopular()
      .then(res => {
        const data = res;
        this.movies = data.results;
      })
      .catch(e => console.log(e));
  }

  redirectUrl(id: string) {
    localStorage.setItem("movieId", id);
    this.route.navigateByUrl("movies/movie-detail");
  }
}
