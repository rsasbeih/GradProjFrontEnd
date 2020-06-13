import { Component, OnInit,Inject, OnChanges } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import {Router} from '@angular/router';
import {CurrentUserService} from '../current-user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  name: string="";
  user:any;
  isLoggedIn=false;
  constructor(public dialog: MatDialog,private router: Router,private currentUserService:CurrentUserService) {}
  ngOnInit() {
    this.currentUserService.currentMessage.subscribe(message => this.user = message)
    if(name==""){
      this.name="Hello, "+this.user.username;
    }
  }
  openDialog(): void {
    if(!this.isLoggedIn){
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      data: {name: this.name}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
      console.log(result);
      this.name="Hello, "+result;
     // console.log(this.user);
     this.isLoggedIn=true;
    }
    });
  }
  else{
    if(this.user.userType=="customer"){
      console.log("customer");
      this.router.navigateByUrl('/profile');
    }
    else if(this.user.userType=="bo"){
      console.log("bo");
      this.router.navigateByUrl('/boprofile');
    }
    //this.router.navigateByUrl('/profile');
  }
}
 
  logout(){
    this.isLoggedIn=false;
    this.currentUserService.changeMessage(null);
    this.name="";
    this.router.navigateByUrl('/');
  }

}
