import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  constructor() { }

  ngOnInit(): void {
  }

}
