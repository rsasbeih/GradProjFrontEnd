import { Component } from '@angular/core';
import {CurrentUserService} from '../app/current-user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:any;
  currentVenue:any;
  constructor(private data: CurrentUserService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.data.currentVenue.subscribe(currentVenue=>this.currentVenue=currentVenue);
  }
}
