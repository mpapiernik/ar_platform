import { Component, OnInit } from '@angular/core';


@Component({

  selector: 'sa-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  role: string;
  constructor() {
  }

  ngOnInit() {
    if (localStorage.getItem('role')) {
      this.role = localStorage.getItem('role');
    } else {
      localStorage.setItem('role', 'frontend');
      this.role = 'frontend';
    }
  }

}
