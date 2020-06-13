import { Component, OnInit } from '@angular/core';
import {CurrentUserService} from '../current-user.service';
import { ApiService } from '../api.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  currentUser:any=null;
  venues=[];
  reservations=[];
  showVenues=false;
  constructor(private currentUserService:CurrentUserService,private apiService: ApiService,private router: Router,private _snackBar: MatSnackBar) {
    window.scroll(0,0);  
    this.currentUserService.currentMessage.subscribe(message => this.currentUser = message);
    console.log(this.currentUser);
   }

  ngOnInit(): void {
    this.currentUserService.currentMessage.subscribe(message => this.currentUser = message);
    console.log(this.currentUser);
    // this.apiService.get().subscribe((data: any[])=>{  
		// 	console.log(data);  
    //   this.venues = data;  
    // })
    for(var i=0; i<this.currentUser.watchlist.length;i++){
      if(this.currentUser.watchlist.length<=0){
      this.showVenues=false;
      break;
    }
      console.log(this.currentUser.watchlist[i]);
      this.apiService.getById(this.currentUser.watchlist[i]).subscribe((data: any)=>{  
      //  console.log(data);  
        this.venues.push(data);  
        this.showVenues=true;
      })
    }  
    this.apiService.getReservations().subscribe((data: any[])=>{  
			console.log(data);  
      this.reservations = data;  
    })
    
    
  }
  removeFromWatchList(id:string){
    if(confirm("Are you sure to want to remove this venue from your watchlist?")) {
      console.log("Implement delete functionality here");
      // this.apiService.deleteVenue(id).subscribe();
      // this.openSnackBar("Venue was Deleted!", "Close");
      // this.router.navigateByUrl("/profile");
     // this.currentUser.watchlist.slice(id);
      var index= this.currentUser.watchlist.indexOf(id);
      this.currentUser.watchlist.splice(index);
      this.apiService.updateWatchList(this.currentUser.id,this.currentUser).subscribe();
      this.openSnackBar("Venue was removed to your watchlist!", "Close");
     // console.log(this.currentUser);
     this.router.navigateByUrl("/profile");
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  
}
