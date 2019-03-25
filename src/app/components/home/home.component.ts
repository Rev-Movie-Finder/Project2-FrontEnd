import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPopular();
    this.route.params.subscribe(param=>{
      console.log();
      
    })
  }

  movies: Object[] = [];

  imgUrl: string = "http://image.tmdb.org/t/p/w300";

  getPopular() {
    this.movieService.getPopular()
    .then((res)=>{
      const data = res;
      console.log(data.results);
      this.movies = data.results;
    })
    .catch((e)=>console.log(e));
  }


}
