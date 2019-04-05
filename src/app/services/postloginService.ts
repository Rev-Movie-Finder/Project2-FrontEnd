import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { user2 } from '../user2';
import { user3 } from '../user3';

@Injectable({
  providedIn: 'root'
})
export class PostloginService {
  postUrl: string= "http://movie-finder5.us-east-1.elasticbeanstalk.com/users/login";

  constructor(private http: HttpClient) { }

  verifyUser (user2: user2): Observable<user3> { 
    return this.http.post<user3>(this.postUrl, user2 );
  }
}

