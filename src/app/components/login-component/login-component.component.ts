import { Component, OnInit } from "@angular/core";
import { PostloginService } from "src/app/services/postloginService";

@Component({
  selector: "app-login-component",
  templateUrl: "./login-component.component.html",
  styleUrls: ["./login-component.component.css"]
})
export class LoginComponentComponent implements OnInit {
  constructor(private postloginService: PostloginService) {}

  ngOnInit() {}
  showMsg: boolean = false;

  tryLogin(uname: string, pass: string): void {
    let user2 = { username: uname, password: pass };

    this.postloginService.verifyUser(user2).subscribe(response => {
      console.log("response from post is ", response);
      console.log(response);

      if (response[0] != null) {
        window.location.href = "movies/nowplaying";

        window.localStorage.setItem("id", JSON.stringify(response[0].id));
        window.localStorage.setItem(
          "username",
          JSON.stringify(response[0].username)
        );
        window.localStorage.setItem("email", JSON.stringify(response[0].email));
        window.localStorage.setItem(
          "birthday",
          JSON.stringify(response[0].birthday)
        );
        window.localStorage.setItem(
          "favMovies",
          JSON.stringify(response[0].favoriteMovies)
        );
        console.log(window.localStorage.getItem("favMovies"));
        window.localStorage.setItem(
          "wishlist",
          JSON.stringify(response[0].wishList[0])
        );
        console.log(window.localStorage.getItem("wishlist"));
        
      } else {
        this.showMsg = true;
      }
    });
  }
}
// tryLogin(uname: string, pass: string, ): void {

//   let user2 = {username: uname,password: pass}
//   this.postloginService.verifyUser(user2.username, user2.password).subscribe((res)=>{
//     let user3 = res;
//     if(user3 == null){
//       console.log("Login Failed using:");
//       console.log("username: " + user2.username + "\nPassword: " + user2.password);
//     } else {
//       console.log("Login Successful! Logged in with user:\n" + user3);
//     }
// });
// }
// }
