import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  carTrackerAPI: string = "https://car-tracker-api-219421.appspot.com";
  //carTrackerAPI: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {
  }

  getVehicles():Observable<any> {
    return this.httpClient.get(`${this.carTrackerAPI}/vehicles`)
  }

  getVehiclePositions(vin: string): Observable<any> {
    return this.httpClient.get(`${this.carTrackerAPI}/readings/vehicle/position/${vin}`);
  }

  getVehicleReadings(vin: string, field: string, timeRange: number){
    return this.httpClient.get(`${this.carTrackerAPI}/readings/${vin}/${field}/${timeRange}`);
  }
}
