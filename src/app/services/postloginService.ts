import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { user2 } from '../user2';
import { user3 } from '../user3';

@Injectable({
  providedIn: 'root'
})
export class PostloginService {
  postUrl: string= "http://moviefinder.us-east-2.elasticbeanstalk.com/users/login";


  constructor(private http: HttpClient) { }


  verifyUser (user2: user2): Observable<user3> { 
    return this.http.post<user3>(this.postUrl, user2 );
  }

  

}
  // getusers(): Promise<user3[]> {
  //   return this.http.get<user3[]>(`http://moviefinder.us-east-2.elasticbeanstalk.com/users`).toPromise();
  // }



//   getusers() {
//     this.http.get('http://moviefinder.us-east-2.elasticbeanstalk.com/users').map(res => res.json()).subscribe(
//         data => {
//             this.users = data.users
//         });
// }

    // ngOnInit () {
    //   this.httpService.get(this.postUrl).subscribe(
    //     data => {
    //       this.users = data as string [];

    //       console.log (data);
    //       console.log (data[0].username);
    //     } );
    //   }




  // verifyUser (username: string, password: string): Observable<user3> { 
  //   this.getusers().then((res)=>{
  //     console.log("All users:");
  //     console.log(res);

  //     if(res != null){
  //       for(var i = 0; i < res.length; i++){
  //         if(res[i].username == username){
  //           console.log("Found the user [" + username + "]");
  //           if(res[i].password == password){
  //             console.log("User's password [" + password + "] matches");
  //             return res[i];
  //           }
  //         }
  //       }
  //     }

  //   }).catch((e)=>{
  //     console.log(e);
  //   })

  //   return null;
  // }
  
