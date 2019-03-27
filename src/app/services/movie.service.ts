import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MoviesDetail } from "../models/movieDetail";

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

  getPopular(): Promise<MoviesModel> {
    console.log("getting all current popular movie");
    return this.http
      .get<MoviesModel>(this.baseUrl + "movie/now_playing?" + this.apiKey)
      .toPromise();
  }

  getUpcoming(): Promise<MoviesModel> {
    console.log("getting all current popular movie");
    return this.http
      .get<MoviesModel>(this.baseUrl + "movie/upcoming?" + this.apiKey)
      .toPromise();
  }

  getTrending(): Promise<MoviesModel> {
    console.log("getting all current popular movie");
    return this.http
      .get<MoviesModel>(this.baseUrl + "movie/popular?" + this.apiKey)
      .toPromise();
  }

  getMovieSearch(url: string): Promise<MoviesModel> {
    console.log("searching for movie");
    return this.http.get<MoviesModel>(localStorage.getItem("searchUrl")).toPromise();
  }

  getMovieDetail(): Promise<MoviesDetail> {
    return this.http
      .get<MoviesDetail>(this.baseUrl + "movie/299537?" + this.apiKey)
      .toPromise();
  }

  getCast(): Promise<CastModel> {
    return this.http
      .get<CastModel>(this.baseUrl + "movie/299537/credits?" + this.apiKey)
      .toPromise();
  }
}
