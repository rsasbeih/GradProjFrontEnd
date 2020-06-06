import { Component, OnInit } from '@angular/core';
import {CurrentUserService} from '../current-user.service';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-manage-venues',
  templateUrl: './manage-venues.component.html',
  styleUrls: ['./manage-venues.component.css']
})
export class ManageVenuesComponent implements OnInit {

  currentUser:any=null;
  venues=[];
  reservations=[];
  constructor(private currentUserService:CurrentUserService,private apiService: ApiService) {
    window.scroll(0,0);  
    this.currentUserService.currentMessage.subscribe(message => this.currentUser = message);
    console.log(this.currentUser);
   }

  ngOnInit(): void {
    this.currentUserService.currentMessage.subscribe(message => this.currentUser = message);
    console.log(this.currentUser);
    this.apiService.get().subscribe((data: any[])=>{  
			console.log(data);  
      this.venues = data;  
    })
    this.apiService.getReservations().subscribe((data: any[])=>{  
			console.log(data);  
      this.reservations = data;  
    })
    
    
  }

}
