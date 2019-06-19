import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  slideItems: String[] = [
    '../../assets/images/slider/1.jpg',
    '../../assets/images/slider/2.jpg',
    '../../assets/images/slider/3.jpg',
    '../../assets/images/slider/4.jpg',
    '../../assets/images/slider/5.jpg'
  ]

  constructor() {

  }
  
  ngOnInit() {
  }

}


