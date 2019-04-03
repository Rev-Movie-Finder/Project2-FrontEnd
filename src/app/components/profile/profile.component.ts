import { Component, OnInit } from '@angular/core';
import { user3 } from 'src/app/user3';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    user3: user3 = {
    id : parseInt(localStorage.getItem("userId")),
    email: JSON.parse(localStorage.getItem("userEmail")),
    username: JSON.parse(localStorage.getItem("username")),
    password: "",
    birthday: JSON.parse(localStorage.getItem("userBirthday")),
    favoriteMovies:JSON.parse(localStorage.getItem("userFavMovies")),
    wishList: JSON.parse(localStorage.getItem("userWishlist"))
  };

}
