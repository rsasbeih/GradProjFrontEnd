import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import {CurrentUserService} from '../current-user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-reserve-venue',
  templateUrl: './reserve-venue.component.html',
  styleUrls: ['./reserve-venue.component.css']
})
export class ReserveVenueComponent implements OnInit {

  currentUser:any;
  currentVenue:any;
  constructor(private apiService: ApiService,private currentUserService:CurrentUserService,private router: Router) { }

 ngOnInit() {
    this.currentUserService.currentMessage.subscribe(message => this.currentUser = message);
    this.currentUserService.currentVenue.subscribe(currentVenue => this.currentVenue = currentVenue);
 //   console.log(this.currentUser);
    console.log(this.currentVenue);
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  numOfPeople = new FormControl('', [Validators.required]);
  timeOfReservation  = new FormControl('', [Validators.required]);
  datePicker = new FormControl('', [Validators.required]);
  phone= new FormControl('', [Validators.required]);
  emailValue:string;
  firstNameValue:string;
  lastNameValue:string;
  numOfPeopleValue;
  datePickerValue;
  phoneValue;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getFirstNameErrorMessage() {
    if (this.firstName.hasError('required')) {
      return 'You must enter a value';
    }
  }
  getLastNameErrorMessage() {
    if (this.lastName.hasError('required')) {
      return 'You must enter a value';
    }
  }
  getNumOfPeopleMessage(){
    if (this.numOfPeople.hasError('required')) {
      return 'You must enter a value';
    }
  }
  getTimeOfReservationMessage(){
    if (this.timeOfReservation.hasError('required')) {
      return 'You must enter a value';
    }
  }
  getDatePickerMessage(){
    if (this.datePicker.hasError('required')) {
      return 'You must enter a value';
    }
  }
  getPhoneMessage(){
    if (this.phone.hasError('required')) {
      return 'You must enter a value';
    }
  }
  addReservation(){
    this.apiService.post(
      {
        "id": '_' + Math.random().toString(36).substr(2, 9),
        "venueId": this.currentVenue.id,
        "reservationDate": this.datePickerValue,
        "customerName": this.firstNameValue+" "+this.lastNameValue,
        "customerEmail": this.emailValue,
        "customerPhone": this.phoneValue,
        "noOfPeople": this.numOfPeopleValue,
        "customerId":this.currentUser.id
    }
    ).subscribe((data: any[])=>{  
      {}
    })
    this.router.navigateByUrl('/thank_you');  
  }
}
// "id": Math.random().toString(36).substr(2, 9),
//         "venueId": this.venueId,
//         "reservationDate": this.datePicker,
//         "customerName": this.firstName+" "+this.lastName,
//         "customerEmail": this.email,
//         "customerPhone": this.phone,
//         "noOfPeople": this.numOfPeople