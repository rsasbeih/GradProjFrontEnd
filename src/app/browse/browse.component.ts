import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CurrentUserService } from '../current-user.service';
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
  constructor(private apiService: ApiService,private data: CurrentUserService) { }
	ngOnInit() {
    window.scroll(0,0);
		this.apiService.get().subscribe((data: any[])=>{  
			console.log(data);  
      this.venues = data;  
      
    })  
    this.data.currentMessage.subscribe(message => this.currentUser = message);
	}
  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }
}
