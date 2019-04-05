import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { MoviesDetail } from 'src/app/models/movieDetail';
import { wishMovy } from 'src/app/models/favoriteMovieModel';
import { Router } from '@angular/router';

interface wishMovieInfo
{
  id: number;
  imgPath: string;
  title: string;
}

@Component({
  selector: "app-watchlist",
  templateUrl: "./watchlist.component.html",
  styleUrls: ["./watchlist.component.css"]
})
export class WatchlistComponent implements OnInit {
  constructor(private movieService: MovieService, private route: Router) {}
  ngOnInit() {
    this.getFavoriteMovie()
  }

  imgUrl: string = "http://image.tmdb.org/t/p/w300";
  wishMoviesIds: wishMovy[];
  wishMovies: wishMovieInfo[] = [];
  movieDeet: MoviesDetail;
  
  buildMovieArray()
  {

    for(let i = 0; i < this.wishMoviesIds.length; ++i)
    {
      localStorage.setItem("movieId", ""+this.wishMoviesIds[i].id);

      this.movieService.getMovieDetail().then(res => {
        let tempy:wishMovieInfo ={
          id: res.id,
          imgPath: res.poster_path,
          title: res.title
        }; 
        
        this.wishMovies.push(tempy);
        
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
        this.wishMoviesIds = res.wishList;
      })
      .catch(e => console.log(e))
      .finally(() =>  this.buildMovieArray());
  }
}
