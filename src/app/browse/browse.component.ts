import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
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
 
  constructor(private apiService: ApiService) { }
	ngOnInit() {
		this.apiService.get().subscribe((data: any[])=>{  
			console.log(data);  
			this.venues = data;  
		})  
	}

}
