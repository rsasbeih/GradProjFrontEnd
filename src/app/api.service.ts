import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_VENUE_URL = "http://localhost:3000/venues";
  private SERVER_RESERVATION_URL="http://localhost:3000/reservations"
  private SERVER_USER_URL="http://localhost:3000/users"
  private SERVER_BO_URL="http://localhost:3000/businessOwners"
  constructor(private httpClient: HttpClient) { }

  public get(){  
    return this.httpClient.get(this.SERVER_VENUE_URL);  
  }
  public getById(id: String){
    return this.httpClient.get(this.SERVER_VENUE_URL+"/"+id);
  }
  public getCustomerById(id: String){
    return this.httpClient.get(this.SERVER_USER_URL+"/"+id);
  }
  public getBOById(id: String){
    return this.httpClient.get(this.SERVER_BO_URL+"/"+id);
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
  public getReservationForSpecificVenue(id: String){
    return this.httpClient.get(this.SERVER_RESERVATION_URL+"?venueId="+id)
  }
  public getSpecificVenue(type:String){
    return this.httpClient.get(this.SERVER_VENUE_URL+"?type="+type);
  }
  public loginBO(){
    return this.httpClient.get(this.SERVER_BO_URL);
  }
  public registerBO(data:any){
    return this.httpClient.post(this.SERVER_BO_URL,data);
  }
  public deleteVenue(id: String){
    return this.httpClient.delete(this.SERVER_VENUE_URL+"/"+id);
  }
  public deleteReservation(id: String){
    return this.httpClient.delete(this.SERVER_RESERVATION_URL+"/"+id);
  }
  public addVenue(data:any){
    return this.httpClient.post(this.SERVER_VENUE_URL,data);
  }
  public updateWatchList(id: String, data:any){
    return this.httpClient.put(this.SERVER_USER_URL+"/"+id,data);
  }
}
