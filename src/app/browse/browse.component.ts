import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  venues=['Apple', 'Orange', 'Banana'];
  startDate = new Date(1990, 0, 1);
  children = false;
  food = false;
  wifi = false;
  constructor() { }

  ngOnInit(): void {
  }

}
