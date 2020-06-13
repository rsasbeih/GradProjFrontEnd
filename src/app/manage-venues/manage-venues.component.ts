import { Component, OnInit } from '@angular/core';
import {CurrentUserService} from '../current-user.service';
import { ApiService } from '../api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-manage-venues',
  templateUrl: './manage-venues.component.html',
  styleUrls: ['./manage-venues.component.css']
})
export class ManageVenuesComponent implements OnInit {

  currentUser:any=null;
  venues=[];
  bovenues=[];
  reservations=[];
  constructor(private currentUserService:CurrentUserService,private apiService: ApiService,private _snackBar: MatSnackBar) {
    window.scroll(0,0);  
    this.currentUserService.currentMessage.subscribe(message => this.currentUser = message);
    console.log(this.currentUser);
   }

  ngOnInit(): void {
    window.scroll(0,0);
    this.currentUserService.currentMessage.subscribe(message => this.currentUser = message);
    console.log(this.currentUser);
    this.apiService.get().subscribe((data: any[])=>{  
			console.log(data);  
      this.venues = data;  
      ///this gets venues of business owner
      for(let v of this.venues){
        console.log(v.boid+" "+this.currentUser.id)
        if(v.boid==this.currentUser.id){
          this.bovenues.push(v);
        }
      }
      console.log(this.bovenues);
    })
    this.apiService.getReservations().subscribe((data: any[])=>{  
			console.log(data);  
      this.reservations = data;  
    })
    
    
  }
  delete(id: string) {
    if(confirm("Are you sure to want to delete this venue?")) {
      console.log("Implement delete functionality here");
      this.apiService.deleteVenue(id).subscribe();
      this.openSnackBar("Venue was Deleted!", "Close");
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
