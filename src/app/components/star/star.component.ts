import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MovieService } from "src/app/services/movie.service";
import { StarModel } from 'src/app/models/starModel';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  constructor(private movieService: MovieService, private route: Router) {}

  ngOnInit() {
    this.getStar();
    this.getStarMovie();
  }

  imgUrl: string = "https://image.tmdb.org/t/p/original";
  stars: StarModel;
  starMovies: Object[] = [];

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

  redirectUrl(id: string) {
    localStorage.setItem("movieId", id);
    this.route.navigateByUrl("movies/movie-detail");
  } 
}
