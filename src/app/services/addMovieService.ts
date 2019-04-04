import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { user4 } from '../user4';

@Injectable({
  providedIn: 'root'
})
export class AddMovieService {
    postUrl: string = "http://movie-finder5.us-east-1.elasticbeanstalk.com/users";

  constructor(private http: HttpClient) { }

  updateUser (user: user4, userId: number): Observable<boolean> { 
    return this.http.post<boolean>((this.postUrl + "/" +userId+"/favorite/" ), user);
  }
  addToWishList (user: user4, userId: number): Observable<boolean> { 
    return this.http.post<boolean>((this.postUrl + "/" +userId+"/wish/" ), user);
  }
}
