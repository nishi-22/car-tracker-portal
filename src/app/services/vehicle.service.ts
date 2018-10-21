import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }

  getVehicles():Observable<any> {

    return this.httpClient.get('https://car-tracker-api-219421.appspot.com/vehicles')
  }

}
