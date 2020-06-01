import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reserve-venue',
  templateUrl: './reserve-venue.component.html',
  styleUrls: ['./reserve-venue.component.css']
})
export class ReserveVenueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  numOfPeople = new FormControl('', [Validators.required]);
  timeOfReservation  = new FormControl('', [Validators.required]);
  datePicker = new FormControl('', [Validators.required]);
  phone= new FormControl('', [Validators.required]);
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
}
