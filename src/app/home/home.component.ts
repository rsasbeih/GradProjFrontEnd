import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventType:string="Wedding";
  location:string="Ramallah";
  constructor( private router: Router) { 
  }

  ngOnInit(): void {
  }
  goToBrowseVenues(){
    this.router.navigateByUrl("/browse")
  }

}
