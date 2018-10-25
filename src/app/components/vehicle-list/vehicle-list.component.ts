import {Component, OnInit, ViewChild} from '@angular/core';
import {Vehicle} from "./Vehicle";
import {VehicleService} from "../../services/vehicle.service";
import {MatSort, MatTableDataSource} from '@angular/material';
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
      id: "highAlerts",
      value: "No. of Alerts"
    }, {
      id: "lastServiceDate",
      value: "Last Service Date"
    }];
  vehicles;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private vehicleService: VehicleService,
              private router: Router) { }

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.vehicleService.getVehicles()
      .subscribe(vehicles => {
        this.vehicles = vehicles;
        this.dataSource = new MatTableDataSource<Vehicle>(vehicles);
        this.dataSource.sort = this.sort;
      });

  }

  goToVehicleDetailPage(vehicleIndex, row){
    this.router.navigate(['./vehicle-detail', row.vin]);
  }


}
