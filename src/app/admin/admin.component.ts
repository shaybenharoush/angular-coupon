import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  showElement = false;
  showElement1 = false;
  showElement2 = false;
  showElement3 = false;
  showElement4 = false;
  
  constructor() {
  }
   
  myFunction(){
    this.showElement = !this.showElement;
    console.log(this.showElement);
  }
  myFunction1(){
    this.showElement1 = !this.showElement1;
    console.log(this.showElement);
  }
  myFunction2(){
    this.showElement2 = !this.showElement2;
    console.log(this.showElement);
  }
  myFunction3(){
    this.showElement3 = !this.showElement3;
    console.log(this.showElement);

  }
  myFunction4(){
    this.showElement4 = !this.showElement4;
    console.log(this.showElement);

  }
  ngOnInit() {
  }

}
