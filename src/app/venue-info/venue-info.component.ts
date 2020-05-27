import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

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
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(config: NgbCarouselConfig,private calendar: NgbCalendar) {
    window.scroll(0,0);
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
   }

  ngOnInit(): void {
  }
  selectToday() {
    this.model = this.calendar.getToday();
  }

}
