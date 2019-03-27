import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor(private movieService: MovieService, private route: Router) { }

  ngOnInit() {
    this.getTrending();
  }

  movies: Object[] = [];

  imgUrl: string = "http://image.tmdb.org/t/p/w300";

  getTrending() {
    this.movieService.getTrending()
    .then((res)=>{
      const data = res;
      this.movies = data.results;
    })
    .catch((e)=>console.log(e));
  }

  redirectUrl(id: string)
  {
      localStorage.setItem("movieId", id);
      this.route.navigateByUrl("movies/movie-detail");
  }

}
