import { Component, OnInit } from '@angular/core';
import { UpdateUserService } from 'src/app/services/updateUserService';
import { user3 } from 'src/app/user3';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private updateUserService: UpdateUserService) { }
  ngOnInit() {
  }
  user3: user3 = {
    id : parseInt(localStorage.getItem("userId")),
    email: JSON.parse(localStorage.getItem("userEmail")),
    username: JSON.parse(localStorage.getItem("username")),
    password: "",
    birthday: JSON.parse(localStorage.getItem("userBirthday")),
    favoriteMovies:JSON.parse(localStorage.getItem("userFavMovies")),
    wishList: []
  };

  showMsg: boolean = false;
  showMsg2: boolean = false;
  
  
  update(username: string, password: string, email: string,date: string): void {
    if(username == "" || username == undefined || username == null || password == ""){
      return;
    }
   
    const momentDate = new Date(date); // Replace event.value with your date value
    let sqldate = (String) (momentDate.getFullYear());
    sqldate += "-"+ ((String)(momentDate.getMonth()));
    sqldate += "-"+ ((String)(momentDate.getDay()));
    let user = {id: this.user3.id , username: username,password: password,email:email,birthday: sqldate}
   
    console.log(user);

    this.updateUserService.updateUser(user, user.id).subscribe((response) => {
      console.log('response from post is ', response);
      if (response == true){
      this.showMsg= true;
      this.showMsg2= false;
      }
      else{
        this.showMsg2= true;
        this.showMsg= false;

      }
    }
    );

  } 
}