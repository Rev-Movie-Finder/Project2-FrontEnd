import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MoviesDetail } from "../models/movieDetail";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private baseUrl: string = "https://api.themoviedb.org/3/";
  private apiKey: string = "api_key=5d0c0be0b57a0b544ed4f305ebcdfee8";

  constructor(private http: HttpClient) { }

  getBaseUrl()
  {
    return this.baseUrl;
  }

  getApiKey()
  {
    return this.apiKey;
  }

  getPopular(): Promise<MoviesModel>{
    console.log("getting all current popular movie");
    return this.http.get<MoviesModel>(`${this.baseUrl}movie/now_playing?${this.apiKey}&page=${localStorage.getItem("pageIndex")}`)
      .toPromise();
  }

  getUpcoming(): Promise<MoviesModel>{
    console.log("getting all current popular movie");
    return this.http.get<MoviesModel>(`${this.baseUrl}movie/upcoming?${this.apiKey}&page=${localStorage.getItem("pageIndex")}`)
      .toPromise();
  }
  
  getTrending(): Promise<MoviesModel>{
    console.log("getting all current popular movie");
    return this.http.get<MoviesModel>(`${this.baseUrl}movie/popular?${this.apiKey}&page=${localStorage.getItem("pageIndex")}`)
      .toPromise();
  }

  getMovieSearch() : Promise<MoviesModel>{
    console.log("searching for movie");
    return this.http.get<MoviesModel>(`${localStorage.getItem("searchUrl")}&page=${localStorage.getItem("pageIndex")}`).toPromise();
  }

  getMovieDetail(): Promise<MoviesDetail> {
    return this.http.get<MoviesDetail>(this.baseUrl + "movie/" + localStorage.getItem("movieId") + "?" + this.apiKey).toPromise();
  }

  getCast(): Promise<CastModel> {
    return this.http.get<CastModel>(this.baseUrl + "movie/" + localStorage.getItem("movieId") + "/credits?" + this.apiKey).toPromise();
  }

  getTrailer(): Promise<TrailerModel> {
    return this.http
      .get<TrailerModel>(this.movieUrl + "299537/videos?" + this.apiKey)
      .toPromise();
  }

  getSimilarMovies(): Promise<SimilarMovies> {
    return this.http
      .get<SimilarMovies>(this.movieUrl + "299537/similar?" + this.apiKey)
      .toPromise();
  }

  getStar(): Promise<StarModel> {
    return this.http
      .get<StarModel>(this.starUrl + "60073?" + this.apiKey)
      .toPromise();
  }

  getStarMovie(): Promise<StarMovieModel> {
    return this.http
      .get<StarMovieModel>(this.starUrl + "60073/movie_credits?" + this.apiKey)
      .toPromise();
  }

  getStarShow(): Promise<StarShowModel> {
    return this.http
      .get<StarShowModel>(this.starUrl + "60073/tv_credits?" + this.apiKey)
      .toPromise();
  }
}
