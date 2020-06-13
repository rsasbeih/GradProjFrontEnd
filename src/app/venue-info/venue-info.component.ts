import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from "@angular/router";
import { ApiService } from '../api.service';
import {CurrentUserService} from '../current-user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
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
  currentVenueObj:any;
  currentUser:any=null;
  constructor(config: NgbCarouselConfig,private calendar: NgbCalendar, private route: ActivatedRoute,private apiService: ApiService,private currentUserService:CurrentUserService,public dialog: MatDialog,private router: Router,private _snackBar: MatSnackBar) {
    window.scroll(0,0);
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this.route.params.subscribe( params => {
      console.log(params);
    this.currentVenue=params.id;
  this.currentVenueObj=params; });
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
    this.currentUserService.currentMessage.subscribe(message => this.currentUser = message)
	}
  selectToday() {
    this.model = this.calendar.getToday();
  }
  goToReservePage(){
    // if(this.currentUser==null){
    //   this.openDialog();
    // }
    // else{
      if(this.currentUser==null){
    alert("Please log in or register to reserve this venue.");
      }
  else{
    this.currentUserService.changeVenue(this.currentVenueObj);
    this.router.navigateByUrl('/reserve_venue');
  }
 // }
  }
  openDialog(): void {

    const dialogRef = this.dialog.open(LoginDialogComponent, {
      // data: {name: this.currentUser.username}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
      console.log(result);
   //   this.name="Hello, "+result;
     // console.log(this.user);
  //   this.isLoggedIn=true;
    }
    });
}
addToWatchList(){
  if(this.currentUser==null){
    alert("Please log in or register to be able watch this venue.");
      }
  else{
   // this.currentUserService.changeVenue(this.currentVenueObj);
   // this.router.navigateByUrl('/reserve_venue');
   this.currentUser.watchlist.push(this.currentVenueObj.id);
   this.apiService.updateWatchList(this.currentUser.id,this.currentUser).subscribe();
   this.openSnackBar("Venue was added to your watchlist!", "Close");
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
