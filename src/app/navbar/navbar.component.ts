import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuItems: Object[] = []
  logo: String = 'BuyMe'

  constructor() {
    this.menuItems = [
      {
        path: '/Log',
        title: 'LogOut'
      }, 
      {
        path: '/home',
        title: 'home'
      }, {
        path: '/about',
        title: 'about'
      },
      {
        path: '/new-list',
        title: 'new-list'
      },
      {
        path: '/list coupon',
        title: ''

      }];
  }

  ngOnInit() {
  }

}
