import { Component, OnInit } from '@angular/core';
import {Vehicle} from "./Vehicle";
import {VehicleService} from "../../services/vehicle.service";
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  dataSource;
  columnNames = [{
    id: "vin",
    value: "VIN"
  }, {
    id: "make",
    value: "Make"
  }, {
    id: "model",
    value: "Model"
  }, {
    id: "year",
    value: "Year"
  }, {
    id: "redlineRpm",
    value: "Redline Rpm"
  }, {
    id: "maxFuelVolume",
    value: "Max Fuel Volume"
  },{
    id: "lastServiceDate",
    value: "Last Service Date"
  }];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.vehicleService.getVehicles()
      .subscribe(vehicles => {
        this.dataSource = new MatTableDataSource<Vehicle>(vehicles);
      });

  }


}
