import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { VehicleService } from "../../services/vehicle.service";

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  markers;
  vin: string;
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(private activatedRoute: ActivatedRoute,
               private vehicleService: VehicleService) {
    this.activatedRoute.params.subscribe(params => {
      this.vin = params['vin'];
    });
  }

  ngOnInit() {
    this.vehicleService.getVehiclePositions(this.vin).subscribe((vehiclePositions) => {
      this.markers = vehiclePositions;
      console.log(vehiclePositions);
    });
  }

}
