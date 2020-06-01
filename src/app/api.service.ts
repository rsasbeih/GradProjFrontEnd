import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_VENUE_URL = "http://localhost:3000/venues";
  private SERVER_RESERVATION_URL="http://localhost:3000/reservations"

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
}
