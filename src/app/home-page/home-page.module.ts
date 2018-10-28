import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule, MatSelectModule, MatOptionModule, MatRippleModule, MatIconModule } from '@angular/material';

import { PlanetSelectComponent } from '../components/planet-select/planet-select.component';
import { VehicleSelectComponent } from '../components/vehicle-select/vehicle-select.component';
import { HomePageComponent } from './home-page.component';
import { routing } from './home-page.routing';
import { SearchUnitComponent } from '../components/search-unit/search-unit.component';


@NgModule({
  imports: [
    CommonModule,
    routing,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatRippleModule,
    MatIconModule,
  ],
  declarations: [
    PlanetSelectComponent,
    VehicleSelectComponent,
    SearchUnitComponent,
    HomePageComponent
  ]
})
export class HomePageModule { }
