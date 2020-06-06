import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();
  private currentVenueSource=new BehaviorSubject(null);
  currentVenue=this.currentVenueSource.asObservable();

  constructor() { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }
  changeVenue(currentVenue:any){
    this.currentVenueSource.next(currentVenue);
  }

}
