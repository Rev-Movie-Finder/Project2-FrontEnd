import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchInput: string = localStorage.getItem("searchInput");
  searchUrl: string;
  movies: Object[] = [];

  imgUrl: string = "http://image.tmdb.org/t/p/w300";

  constructor(private movieservice:MovieService, private route: Router) {
     }

  ngOnInit() {
    this.setUrl();
  }

  getMovieSearch()
  {
    this.movieservice.getMovieSearch()
    .then((res)=>{
      const data = res;
      console.log(data.results);
      this.movies = data.results;
    })
    .catch((e)=>console.log(e));
  }

  setUrl()
  {
      this.searchUrl = this.movieservice.getBaseUrl() + "search/movie?" + this.movieservice.getApiKey() + "&language=en-US&query=" + localStorage.getItem("searchInput");
      localStorage.setItem("searchUrl", this.searchUrl);
      this.getMovieSearch();
  }

  redirectUrl(id: string)
  {
      localStorage.setItem("movieId", id);
      this.route.navigateByUrl("movies/movie-detail");
  }
}
