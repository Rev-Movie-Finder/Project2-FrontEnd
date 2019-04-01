import { Component, OnInit } from '@angular/core';
import { PostUserService } from 'src/app/services/postUserService';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})


export class RegistrationComponentComponent implements OnInit {

  constructor(private postuserService: PostUserService) { }
  ngOnInit() {
  }
  showMsg: boolean = false;
  showMsg2: boolean = false;

  options = ["male", "female", "other"];
  optionSelected: any;

  selectedGender: string ="";
  onOptionsSelected(event){
    this.selectedGender = event;
  }
  
  add(uname: string, pass: string, fname: string, lname: string,address: string,date: string): void {
    console.log(this.selectedGender);

    const momentDate = new Date(date); // Replace event.value with your date value
    let sqldate = (String) (momentDate.getFullYear());
    sqldate += "-"+ ((String)(momentDate.getMonth()));
    sqldate += "-"+ ((String)(momentDate.getDay()));
    let user = {username: uname,password: pass, avatar: address, firstName: fname,lastName:lname,email:uname, birthday: sqldate, gender : this.selectedGender}
    
    console.log(user);

    this.postuserService.addUser(user).subscribe((response) => {
      console.log('response from post is ', response);
      this.showMsg= true;
    }
    );
    this.showMsg2= true;

  } 
  
}
