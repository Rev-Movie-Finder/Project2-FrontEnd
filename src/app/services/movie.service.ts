import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MoviesDetail } from "../models/movieDetail";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  baseUrl: string = `https://api.themoviedb.org/3/movie/`;
  apiKey: string = `?api_key=5d0c0be0b57a0b544ed4f305ebcdfee8`;

  nowPlayingUrl: string = `${this.baseUrl}now_playing${this.apiKey}`;
  upcomingUrl: string = `${this.baseUrl}upcoming${this.apiKey}`;
  trendingUrl: string = `${this.baseUrl}popular${this.apiKey}`;
  movieDetailUrl: string = `${this.baseUrl}299537${this.apiKey}`;
  castUrl: string = `https://api.themoviedb.org/3/movie/299537/credits?api_key=5d0c0be0b57a0b544ed4f305ebcdfee8`;

  constructor(private http: HttpClient) {}

  getPopular(): Promise<MoviesModel> {
    return this.http.get<MoviesModel>(this.nowPlayingUrl).toPromise();
  }

  getUpcoming(): Promise<MoviesModel> {
    return this.http.get<MoviesModel>(this.upcomingUrl).toPromise();
  }

  getTrending(): Promise<MoviesModel> {
    return this.http.get<MoviesModel>(this.trendingUrl).toPromise();
  }

  getMovieDetail(): Promise<MoviesDetail> {
    return this.http.get<MoviesDetail>(this.movieDetailUrl).toPromise();
  }

  getCast(): Promise<CastModel> {
    return this.http.get<CastModel>(this.castUrl).toPromise();
  }
}
