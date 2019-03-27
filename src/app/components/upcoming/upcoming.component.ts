import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  constructor(private movieService: MovieService, private route: Router) { }

  ngOnInit() {
    this.getUpcoming();
  }

  movies: object[] = [];

  imgUrl: string = "http://image.tmdb.org/t/p/w300";

  getUpcoming() {
    this.movieService.getUpcoming()
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
