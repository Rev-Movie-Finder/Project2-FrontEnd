import { Component, OnInit } from '@angular/core';
import { TransferdataService } from 'src/app/services/transferdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private transferService:TransferdataService,
    private router:Router) { }

  inputValue: string;

  ngOnInit() {
  }

  generateUrl()
  {
    if(this.inputValue)
    {
      //this.inputValue = this.inputValue.replace(" ", "%" + " ".charCodeAt(0).toString(16));
      this.transferService.setData(this.inputValue);
      console.log("Sending " +  this.transferService.getData() + " to /search");
      this.inputValue = "";
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(["/search"]));
    }
  }
}
