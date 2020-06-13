import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventType:string=null;
  location:string=null;
  constructor( private router: Router) { 
  }

  ngOnInit(): void {
  }
  goToBrowseVenues(){
   // if(this.eventType!=null&&this.eventType!=null)
   // this.router.navigateByUrl("/browse/"+this.eventType+"/"+this.location);
     if(this.eventType!=null)
    this.router.navigateByUrl("/browse/"+this.eventType);
    else if(this.location!=null)
    this.router.navigateByUrl("/browse/"+this.location);
    else
    this.router.navigateByUrl("/browse");
  }

}
