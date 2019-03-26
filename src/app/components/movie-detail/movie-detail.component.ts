import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovieDetail();
  }

  imgUrl: string = "https://image.tmdb.org/t/p/original";

  movies: MovieDetail[] = [];

  getMovieDetail() {
    this.movieService.getMovieDetail().subscribe(allPosts => {
      this.movies = allPosts;
      console.log(this.movies);
    });
  }

}
