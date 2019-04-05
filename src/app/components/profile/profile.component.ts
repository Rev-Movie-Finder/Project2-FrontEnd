import { Component, OnInit } from "@angular/core";
import { UpdateUserService } from "src/app/services/updateUserService";
import { user3 } from "src/app/user3";
import { MovieService } from 'src/app/services/movie.service';
import { UserModel4 } from 'src/app/models/userModel4';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(private updateUserService: UpdateUserService, private movieService: MovieService) {}
  ngOnInit() {
    this.getFavoriteMovie();
  }
  user3: user3 = {
    id: parseInt(localStorage.getItem("userId")),
    email: JSON.parse(localStorage.getItem("userEmail")),
    username: JSON.parse(localStorage.getItem("username")),
    password: "",
    birthday: JSON.parse(localStorage.getItem("userBirthday")),
    favoriteMovies: JSON.parse(localStorage.getItem("userFavMovies")),
    wishList: []
  };

  user: UserModel4

  getFavoriteMovie() {
    this.movieService
      .getFavoriteMovie()
      .then(res => {
        console.log(res);
        this.user = res;
      })
      .catch(e => console.log(e));
  }

  showMsg: boolean = false;
  showMsg2: boolean = false;

  update(
    username: string,
    password: string,
    email: string,
    date: string
  ): void {
    if (
      username == "" ||
      username == undefined ||
      username == null ||
      password == ""
    ) {
      return;
    }

    const momentDate = new Date(date); // Replace event.value with your date value
    let sqldate = String(momentDate.getFullYear());
    sqldate += "-" + String(momentDate.getMonth());
    sqldate += "-" + String(momentDate.getDay());
    let user = {
      id: this.user3.id,
      username: username,
      password: password,
      email: email,
      birthday: sqldate
    };

    console.log(user);

    this.updateUserService.updateUser(user, user.id).subscribe(response => {
      console.log("response from post is ", response);
      if (response == true) {
        this.showMsg = true;
        this.showMsg2 = false;
        window.location.reload();
      } else {
        this.showMsg2 = true;
        this.showMsg = false;
      }
    });
  }
}
