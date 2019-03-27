import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferdataService } from 'src/app/services/transferdata.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchInput: string;
  searchUrl: string;
  movies: Object[] = [];

  imgUrl: string = "http://image.tmdb.org/t/p/w300";

  constructor(private transferService:TransferdataService, private movieservice:MovieService,
    private router:Router) {
     }

  ngOnInit() {
    console.log("Init called");
    if(!localStorage.getItem("searchInput"))
    {
      this.searchInput = this.transferService.getData().trim();
      localStorage.setItem("searchInput", this.searchInput);
    }
    else
    {
      if (!this.transferService.getData())
        this.searchInput = localStorage.getItem("searchInput");
      else
      {
        this.searchInput = this.transferService.getData();
        localStorage.setItem("searchInput", this.searchInput);
      }
    }
    this.setUrl();
  }

  getMovieSearch(url: string)
  {
    this.movieservice.getMovieSearch(url)
    .then((res)=>{
      const data = res;
      console.log(data.results);
      this.movies = data.results;
    })
    .catch((e)=>console.log(e));
  }

  setUrl()
  {
    if(this.searchInput)
    {
      console.log("Search recieved the data from transfer service");
      this.searchUrl = this.movieservice.getBaseUrl() + "search/movie?" + this.movieservice.getApiKey() + "&language=en-US&query=" + this.searchInput;
      console.log("The url is: " + this.searchUrl);
      this.getMovieSearch(this.searchUrl);
    }
  }
}
