import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { FavoriteMovy } from 'src/app/models/favoriteMovieModel';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { MoviesDetail } from 'src/app/models/movieDetail';

interface FavMovieInfo
{
  id: number;
  imgPath: string;
  title: string;
}

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"]
})

export class FavoriteComponent implements OnInit {
  constructor(private movieService: MovieService, private route: Router, private http: HttpClient) {}

  ngOnInit() {
    this.getFavoriteMovie();
  }

  imgUrl: string = "http://image.tmdb.org/t/p/w300";
  favMoviesIds: FavoriteMovy[];
  favMovies: FavMovieInfo[] = [];
  temp: FavMovieInfo = {id: 0, imgPath: "", title: ""};
  movieDeet: MoviesDetail;
  
  buildMovieArray()
  {
    for(let i = 0; i < this.favMoviesIds.length; ++i)
    {
      localStorage.setItem("movieId", ""+this.favMoviesIds[i].id);
      this.movieService.getMovieDetail().then(res => {
        this.temp.id = res.id;
        this.temp.imgPath = res.poster_path;
        this.temp.title = res.title;
        console.log(this.temp);
        this.favMovies.push(this.temp);
      }).catch(e => console.log(e));
    }
  }

  redirectUrl(id: string) {
    localStorage.setItem("movieId", id);
    this.route.navigateByUrl("movies/movie-detail");
  }

  getFavoriteMovie() {
    this.movieService
      .getFavoriteMovie()
      .then(res => {
        this.favMoviesIds = res.favoriteMovies;
      })
      .catch(e => console.log(e))
      .finally(() =>  this.buildMovieArray());
  }
}
