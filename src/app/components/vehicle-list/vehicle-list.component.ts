import { Component, OnInit } from '@angular/core';
import {Vehicle} from "./Vehicle";
import {VehicleService} from "../../services/vehicle.service";
import { MatTableDataSource} from '@angular/material';
import {Router} from "@angular/router";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  dataSource;
  displayedColumns;
  columnNames = [
    {
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
  vehicles;

  constructor(private vehicleService: VehicleService,
              private router: Router) { }

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.vehicleService.getVehicles()
      .subscribe(vehicles => {
        this.vehicles = vehicles;
        this.dataSource = new MatTableDataSource<Vehicle>(vehicles);
      });

  }

  goToVehicleDetailPage(vehicleIndex, row){
    this.router.navigate(['./vehicle-detail', row.vin]);
  }


}
