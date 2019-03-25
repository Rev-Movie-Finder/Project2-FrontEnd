import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=5d0c0be0b57a0b544ed4f305ebcdfee8&language=en-US&page=1`;

  constructor(private http: HttpClient) { }

  getPopular(): Promise<MoviesModel>{
    console.log("getting all current popular movie");
    return this.http.get<MoviesModel>(this.url)
      .toPromise();
  }

  getUpcoming(): Promise<MoviesModel>{
    console.log("getting all current popular movie");
    return this.http.get<MoviesModel>(this.url)
      .toPromise();
  }

}
