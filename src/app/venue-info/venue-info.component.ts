import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from "@angular/router";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-venue-info',
  templateUrl: './venue-info.component.html',
  styleUrls: ['./venue-info.component.css'],
  providers: [NgbCarouselConfig] 
})
export class VenueInfoComponent implements OnInit {
  venueName:string="venue_name_placeholder";
  venuePrice:string="$90";
  venueOwner:string="Owner Name"
  venueDescp:string;
  venueImg:string;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  model: NgbDateStruct;
  date: {year: number, month: number};
  currentVenue:string;
  constructor(config: NgbCarouselConfig,private calendar: NgbCalendar, private route: ActivatedRoute,private apiService: ApiService) {
    window.scroll(0,0);
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this.route.params.subscribe( params => {
      console.log(params);
    this.currentVenue=params.id; });
    //this.currentVenue= this.route.params.i;
   }

   ngOnInit() {
		this.apiService.getById(this.currentVenue).subscribe((data: any)=>{  
			console.log(data);  
      this.venueName = data.name;  
      this.venuePrice=data.price;
      this.venueOwner=data.businessOwner;
      this.venueDescp=data.description;
      this.venueImg=data.imageUrl;
		})  
	}
  selectToday() {
    this.model = this.calendar.getToday();
  }
 

}
