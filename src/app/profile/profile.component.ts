import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {CurrentUserService} from '../current-user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isCustomer=true;
  isBO=false;
  currentUser:any;
  constructor(private apiService: ApiService,private currentUserService:CurrentUserService) { 
    window.scroll(0,0);
    this.currentUserService.currentMessage.subscribe(message => this.currentUser = message);
  }

  ngOnInit(): void {
    if(this.currentUser.userType=="customer"){
      console.log("customer");
      this.isCustomer=true;
      this.isBO=false;
    }
    else if(this.currentUser.userType=="bo"){
      console.log("bo");
      this.isCustomer=false;
      this.isBO=true;
    }
  }

}
