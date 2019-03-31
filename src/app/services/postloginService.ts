import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { user2 } from '../user2';

@Injectable({
  providedIn: 'root'
})
export class PostloginService {
    postUrl: string = "http://project2temp-env.yqpe8k324q.us-east-2.elasticbeanstalk.com/api/verify";

  constructor(private http: HttpClient) { }

  verifyUser (user2: user2): Observable<user2> { 
    return this.http.post<user2>(this.postUrl, user2);
  }
}
