import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';

import { AgmCoreModule } from '@agm/core';

const appRoutes: Routes = [
  { path: 'vehicle-list', component: VehicleListComponent },
  { path: 'vehicle-detail/:vin', component: VehicleDetailComponent},
  { path: '', component: VehicleListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBUGp-lAiwytAAom2IkCtRxyalDnAesdb4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
