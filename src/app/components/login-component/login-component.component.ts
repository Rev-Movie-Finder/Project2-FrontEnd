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

      if(response[0] != null){
        
        window.location.href='movies/nowplaying';
        localStorage.setItem("userId", JSON.stringify(response[0].id));
        localStorage.setItem("username", JSON.stringify(response[0].username));
        localStorage.setItem("userEmail", JSON.stringify(response[0].email));
        localStorage.setItem("userBirthday", JSON.stringify(response[0].birthday));
        localStorage.setItem("userFavMovies", JSON.stringify(response[0].favoriteMovies[0] ));
        //localStorage.setItem("userWishlist", JSON.stringify(response[0].wishList[0]));
      }else{
        this.showMsg= true;
      }
    });
  }
}
