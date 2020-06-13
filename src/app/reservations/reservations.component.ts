import { Component, OnInit } from '@angular/core';
import {CurrentUserService} from '../current-user.service';
import { ApiService } from '../api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  currentUser:any;
  venues=[];
  reservations=[];
  showReservations=true;
  constructor(private currentUserService:CurrentUserService,private apiService: ApiService,private _snackBar: MatSnackBar) {
    window.scroll(0,0);  
    this.currentUserService.currentMessage.subscribe(message => this.currentUser = message);
    console.log(this.currentUser);
   }

  ngOnInit(): void {
    this.currentUserService.currentMessage.subscribe(message => this.currentUser = message);
    console.log(this.currentUser.id);
    this.apiService.getReservationForSpecificUser(this.currentUser.id).subscribe((data: any[])=>{  
			console.log(data);  
      this.reservations = data;  
      if(this.reservations.length<=0)
      this.showReservations=false;
      else{
        this.showReservations=true;
      for(let r of this.reservations){
        this.apiService.getById(r.venueId).subscribe((data: any)=>{  
          console.log(data);  
          this.venues.push(data);
        })  
      }
    }
    })
    console.log(this.reservations.length);
  }
  deleteReservation(venueId: string){
      if(confirm("Are you sure to want to cancel this reservation?")) {
        console.log("Implement delete functionality here");
        this.apiService.getReservationForSpecificUser(this.currentUser.id).subscribe((data: any[])=>{  
          console.log(data);  
          this.reservations = data;  
          for(let r of this.reservations){
            if(r.venueId==venueId){
             this.apiService.deleteReservation(r.id).subscribe();
            }
           }
        })
        this.openSnackBar("Reservation was Cancelled!", "Close");
        setTimeout(function (){
  
          window.location.reload();
        
        }, 1000);
      }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
