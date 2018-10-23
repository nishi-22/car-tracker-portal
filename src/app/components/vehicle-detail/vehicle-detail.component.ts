import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { VehicleService } from "../../services/vehicle.service";
import {single, multi} from './data';

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

  markers = [];
  vin: string;
  lat: number = 51.678418;
  lng: number = 7.809007;

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time Stamp';
  showYAxisLabel = true;
  yAxisLabel = 'Fuel Volume';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor(private activatedRoute: ActivatedRoute,
               private vehicleService: VehicleService) {
    Object.assign(this, {single, multi})
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
