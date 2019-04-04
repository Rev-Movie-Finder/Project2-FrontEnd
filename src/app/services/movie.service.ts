import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MoviesDetail } from "../models/movieDetail";
import { TrailerModel } from "../models/TrailerModel";
import { SimilarMovies } from "../models/similarMovieModel";
import { StarModel } from "../models/starModel";
import { StarMovieModel } from "../models/starMovieModel";
import { FavoriteMovieModel } from '../models/favoriteMovieModel';
import { ReleaseDateModel } from '../models/releaseDateModel';

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private baseUrl: string = "https://api.themoviedb.org/3/";
  private apiKey: string = "api_key=5d0c0be0b57a0b544ed4f305ebcdfee8";

  constructor(private http: HttpClient) {}

  getBaseUrl() {
    return this.baseUrl;
  }

  getApiKey() {
    return this.apiKey;
  }

  getNowPlaying(): Promise<MoviesModel> {
    return this.http
      .get<MoviesModel>(
        `${this.baseUrl}movie/now_playing?${
          this.apiKey
        }&page=${localStorage.getItem("pageIndex")}&region=US`
      )
      .toPromise();
  }

  getUpcoming(): Promise<MoviesModel> {
    return this.http
      .get<MoviesModel>(
        `${this.baseUrl}movie/upcoming?${
          this.apiKey
        }&page=${localStorage.getItem("pageIndex")}&region=US`
      )
      .toPromise();
  }

  getPopular(): Promise<MoviesModel> {
    return this.http
      .get<MoviesModel>(
        `${this.baseUrl}movie/popular?${
          this.apiKey
        }&page=${localStorage.getItem("pageIndex")}&region=US`
      )
      .toPromise();
  }

  getMovieSearch(): Promise<MoviesModel> {
    return this.http
      .get<MoviesModel>(
        `${localStorage.getItem("searchUrl")}&page=${localStorage.getItem(
          "pageIndex"
        )}`
      )
      .toPromise();
  }

  getMovieDetail(): Promise<MoviesDetail> {
    return this.http
      .get<MoviesDetail>(
        `${this.baseUrl}movie/${localStorage.getItem("movieId")}?${this.apiKey}`
      )
      .toPromise();
  }

  getReleaseDate(): Promise<ReleaseDateModel> {
    return this.http
      .get<ReleaseDateModel>(
        `${this.baseUrl}movie/${localStorage.getItem("movieId")}/release_dates?${this.apiKey}`
      )
      .toPromise();
  }

  getCast(): Promise<CastModel> {
    return this.http
      .get<CastModel>(
        `${this.baseUrl}movie/${localStorage.getItem("movieId")}/credits?${
          this.apiKey
        }`
      )
      .toPromise();
  }

  getTrailer(): Promise<TrailerModel> {
    return this.http
      .get<TrailerModel>(
        `${this.baseUrl}movie/${localStorage.getItem("movieId")}/videos?${
          this.apiKey
        }`
      )
      .toPromise();
  }

  getSimilarMovies(): Promise<SimilarMovies> {
    return this.http
      .get<SimilarMovies>(
        `${this.baseUrl}movie/${localStorage.getItem("movieId")}/similar?${
          this.apiKey
        }`
      )
      .toPromise();
  }

  getStar(): Promise<StarModel> {
    return this.http
      .get<StarModel>(
        `${this.baseUrl}person/${localStorage.getItem("castId")}?${this.apiKey}`
      )
      .toPromise();
  }

  getStarMovie(): Promise<StarMovieModel> {
    return this.http
      .get<StarMovieModel>(
        `${this.baseUrl}person/${localStorage.getItem(
          "castId"
        )}/movie_credits?${this.apiKey}`
      )
      .toPromise();
  }

  getFavoriteMovie(): Promise<FavoriteMovieModel> {
    return this.http
      .get<FavoriteMovieModel>(
        `http://movie-finder5.us-east-1.elasticbeanstalk.com/users`
      )
      .toPromise();
  }

  getWatchList(): Promise<FavoriteMovieModel> {
    return this.http
      .get<FavoriteMovieModel>(
        `http://movie-finder5.us-east-1.elasticbeanstalk.com/users`
      )
      .toPromise();
  }

  getMyMovie(): Promise<MoviesModel> {
    return this.http
      .get<MoviesModel>(
        `${this.baseUrl}movie/${localStorage.getItem("movieId")}?${this.apiKey}`
      )
      .toPromise();
  }

}
