import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { VehicleService } from "../../services/vehicle.service";
import {single, multi} from './data';
import {MatSelectChange} from "@angular/material";

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  markers = [];
  chartData: any [];

  vin: string;

  selectedVehicleSignal;
  selectedTimeRange;

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  yAxisLabel = '';
  xAxisLabel = 'Time Stamp';
  showYAxisLabel = true;


  colorScheme = {
    domain: ['#A10A28', '#C7B42C', '#AAAAAA']
  };

  readingsFields = [{
      value: "fuelVolume",
      viewValue: "Fuel Volume"
    },{
      value: "engineRpm",
      viewValue: "Engine Rpm"
    },{
      value: "engineHp",
      viewValue: "Engine HP"
    },{
      value: "speed",
      viewValue: "Speed"
  }];

  timeRange = [{
      value: 15,
      viewValue: "15 Minutes"
    },{
      value: 30,
      viewValue: "30 Minutes"
    },{
      value: 45,
      viewValue: "45 Minutes"
    },{
      value: 60,
      viewValue: "1 Hour"
    },{
      value: 75,
      viewValue: "1 Hour 15 Minutes"
    },{
      value: 90,
      viewValue: "1 Hour 30 Minutes"
    },{
      value: 105,
      viewValue: "1 Hour 45 Minutes"
    },{
      value: 120,
      viewValue: "2 Hours"
  }];
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
    });
  }

  getReadings(){
    this.vehicleService.getVehicleReadings(this.vin,
      this.selectedVehicleSignal,
      this.selectedTimeRange).subscribe(data => {
        this.yAxisLabel = this.readingsFields.filter((field) =>
          field.value === this.selectedVehicleSignal)[0].viewValue;
        this.chartData = [{
          name: this.selectedVehicleSignal,
          series: data
        }]
    });
  }

  onSignalSelect(event: MatSelectChange){
    this.selectedVehicleSignal = event.value;
    this.selectedTimeRange = "";
  }

  onTimeRangeSelect(event: MatSelectChange){
    this.selectedTimeRange = event.value;
    this.getReadings();
  }

}
