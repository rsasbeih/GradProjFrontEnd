import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_VENUE_URL = "http://localhost:3000/venues";
  private SERVER_RESERVATION_URL="http://localhost:3000/reservations"
  private SERVER_USER_URL="http://localhost:3000/users"
  constructor(private httpClient: HttpClient) { }

  public get(){  
    return this.httpClient.get(this.SERVER_VENUE_URL);  
  }
  public getById(id: String){
    return this.httpClient.get(this.SERVER_VENUE_URL+"/"+id);
  }
  public post(data:any){
    return this.httpClient.post(this.SERVER_RESERVATION_URL,data);
  }
  public getReservations(){  
    return this.httpClient.get(this.SERVER_RESERVATION_URL);
  }
  public login(){
    return this.httpClient.get(this.SERVER_USER_URL);
  }
  public register(data:any){
    return this.httpClient.post(this.SERVER_USER_URL,data);
  }
  public getReservationForSpecificUser(id: String){
    return this.httpClient.get(this.SERVER_RESERVATION_URL+"?customerId="+id)
  }
  public getSpecificVenue(type:String){
    return this.httpClient.get(this.SERVER_VENUE_URL+"?type="+type);
  }
}
