import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransferdataService {

  constructor(
    private router:Router
  ) { }

  private data: string;

  setData(data: string){
    console.log("Data set to: " + data);
    this.data = data;
  }

  getData(){
    return this.data;
  }

  clearData(){
    this.data = undefined;
  }
  
}
