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
    id : parseInt(window.localStorage.getItem("id")),
    email: JSON.parse(window.localStorage.getItem("email")),
    username: JSON.parse(window.localStorage.getItem("username")),
    password: "",
    birthday: JSON.parse(window.localStorage.getItem("birthday")),
    favoriteMovies:JSON.parse(window.localStorage.getItem("favMovies")),
     wishList: []

  };

}
