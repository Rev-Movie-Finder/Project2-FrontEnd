import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {user} from '../user';

@Injectable({
  providedIn: 'root'
})
export class PostUserService {
    postUrl: string = "http://project2temp-env.yqpe8k324q.us-east-2.elasticbeanstalk.com/api/user";

  constructor(private http: HttpClient) { }

  addUser (user: user): Observable<user> { 
    return this.http.post<user>(this.postUrl, user);
  }
}
