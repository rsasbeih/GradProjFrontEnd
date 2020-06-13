import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import {CurrentUserService} from '../current-user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-venue',
  templateUrl: './add-venue.component.html',
  styleUrls: ['./add-venue.component.css']
})
export class AddVenueComponent implements OnInit {

  currentUser:any;
  currentVenue:any;
  constructor(private apiService: ApiService,private currentUserService:CurrentUserService,private router: Router) { }

 ngOnInit() {
    this.currentUserService.currentMessage.subscribe(message => this.currentUser = message);
    this.currentUserService.currentVenue.subscribe(currentVenue => this.currentVenue = currentVenue);
 //   console.log(this.currentUser);
    console.log(this.currentVenue);
  }
  location = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  eventType = new FormControl('', [Validators.required]);
  numOfPeople = new FormControl('', [Validators.required]);
  image  = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);
  description= new FormControl('', [Validators.required]);
  locationValue:string;
  nameValue:string;
  eventTypeValue:string;
  numOfPeopleValue;
  priceValue;
  descriptionValue;
  imageValue;
  getLocationErrorMessage() {
    if (this.location.hasError('required')) {
      return 'You must enter a value';
    }

  }
  getNameErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
  }
  getEventTypeErrorMessage() {
    if (this.eventType.hasError('required')) {
      return 'You must enter a value';
    }
  }
  getNumOfPeopleMessage(){
    if (this.numOfPeople.hasError('required')) {
      return 'You must enter a value';
    }
  }
  getImageMessage(){
    if (this.image.hasError('required')) {
      return 'You must enter a value';
    }
  }
  getPriceMessage(){
    if (this.price.hasError('required')) {
      return 'You must enter a value';
    }
  }
  getDescriptionErrorMessage(){
    if (this.description.hasError('required')) {
      return 'You must enter a value';
    }
  }
  url:any;
 // imageShow:any;
  onSelectFile(event:any) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
    // if(event.target.files.length > 0) 
    // {
    //   console.log(event.target.files[0].name);
    //   this.url="../assets/"+event.target.files[0].name;
    // }
}
  addVenue(){
    this.apiService.addVenue(
      {
        "id": '_' + Math.random().toString(36).substr(2, 9),
        "businessOwner": this.currentUser.username,
        "boid": this.currentUser.id,
        "name": this.nameValue,
        "type": this.eventTypeValue,
        "location": this.locationValue,
        "NumberOfPeople": this.numOfPeopleValue,
        "description":this.descriptionValue,
        "price": this.priceValue,
        "imageUrl":[this.url]
    }
    ).subscribe((data: any[])=>{  
      {}
    })
    this.router.navigateByUrl('/thank_you');  
  }


}
