import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CurrentUserService } from '../current-user.service';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  venues=[];
  startDate = new Date(1990, 0, 1);
  children = false;
  food = false;
  wifi = false;
  price = false;
  rating = false;
  closest = false;
  currentUser="user0";
  type:string;
  location:string;
  constructor(private apiService: ApiService,private data: CurrentUserService,private route: ActivatedRoute) { 

    this.route.params.subscribe( params => {
    console.log(params);
    this.type=params.type;
    //this.location=params.location;
    // this.currentVenueObj=params; 
  });
  }
	ngOnInit() {
    window.scroll(0,0);
    // if(this.type!=null&&this.location!=null){
    //   this.apiService.getSpecificVenueLocationAndType(this.location,this.type).subscribe((data: any[])=>{  
    //     console.log(data);  
    //     this.venues = data;  
        
    //   }) 
    // }
     if(this.type!=null){
    this.apiService.getSpecificVenue(this.type).subscribe((data: any[])=>{  
			console.log(data);  
      this.venues = data;  
      
    }) 
   }
  //  else if(this.location!=null){
  //   this.apiService.getSpecificVenueLocation(this.location).subscribe((data: any[])=>{  
	// 		console.log(data);  
  //     this.venues = data;  
      
  //   }) 
  //  }
    else{
		this.apiService.get().subscribe((data: any[])=>{  
			console.log(data);  
      this.venues = data;  
      
    })  }
    this.data.currentMessage.subscribe(message => this.currentUser = message);
	}
  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }
  addToWatchList(){
    if(this.currentUser==null){
      alert("Please log in or register to be able watch this venue.");
        }
    else{
     // this.currentUserService.changeVenue(this.currentVenueObj);
     // this.router.navigateByUrl('/reserve_venue');
    }
  }
}
