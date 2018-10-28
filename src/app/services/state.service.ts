import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';
import { Vehicle } from '../models/vehicle';
import { SearchUnit } from '../models/search-unit';
import { ReplaySubject, Observable, of, forkJoin } from 'rxjs';
import { ApiService } from './api.service';
import { map, tap } from 'rxjs/operators';
import { FindResult } from '../models/api_model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private maxSelectionUnits: number = 4;
  private allPlanets: Planet[] = null;
  private allVehicles: Vehicle[] = null;
  private selectedUnits: SearchUnit[] = null;
  private availableVehicle: Map<Vehicle, number> = new Map<Vehicle, number>();
  private timeTaken: number = 0;
  private allSelected : boolean = false;
  private finalResult : FindResult 

  public selectedUnitChanged: ReplaySubject<any> = new ReplaySubject();

  constructor(private apiService: ApiService) {

    this.selectedUnits = [];
    for (var i = 0; i < this.maxSelectionUnits; i++) {
      this.selectedUnits[i] = new SearchUnit();
      this.selectedUnits[i].selectedPlanet = null;
      this.selectedUnits[i].selectedVehicle = null;
    }
  }

  
  initWebService (): Promise<any> {
    var planetsObs = this.apiService.getPlanets().pipe(
      map(res => <Planet[]>res),
      tap(res => this.allPlanets = res)
    );

    var vehiclesObs = this.apiService.getVehicles().pipe(
      map(res => <Vehicle[]>res),
      tap(res => this.allVehicles = res)
    ).pipe(
      tap(res => this.initAvailableVehicleMap())
    )
    return forkJoin(planetsObs, vehiclesObs).toPromise();
  }

  getAllSelected() : boolean {
    return this.allSelected;
  }

  getTimeTaken(): number {
    return this.timeTaken;
  }

  getSelectedUnits(): SearchUnit[] {
    return this.selectedUnits;
  }

  getSelectedUnitById(id): SearchUnit {
    if (id < this.maxSelectionUnits) {
      return this.selectedUnits[id];
    }
    return null;
  }

  getAvailableNumByVehicle(vehicle: Vehicle): number {
    return this.availableVehicle.get(vehicle);
  }

  getAllPlanets(): Observable<Planet[]> {
    if (this.allPlanets) {
      return of(this.allPlanets);
    } 
    return of([]);
  }

  getPlanetByValue(planetName): Planet {
    if (this.allPlanets != null) {
      var res = this.allPlanets.find((planet) => {
        if (planet.name === planetName) return true;
      });
      return res;
    }
    return null;
  }

  getAllvehicles(): Observable<Vehicle[]> {
    if (this.allVehicles) {
      return of(this.allVehicles);
    }
    return of([]);
  }

  getPlanetAsArray(): string[] {
    var planetArr = [];
    for(var unit of this.selectedUnits) {
      if(unit.selectedPlanet) {
        planetArr.push(unit.selectedPlanet.name);
      }
    }
    return planetArr;
  }
  
  getVehicleAsArray(): string[] {
    var vehicleArr = [];
    for(var unit of this.selectedUnits) {
      if(unit.selectedVehicle) {
        vehicleArr.push(unit.selectedVehicle.name);
      }
    }
    return vehicleArr;
  }

  getFinalResult() : FindResult {
    return this.finalResult;
  }

  setFinalResult(result: FindResult ) {
    this.finalResult = result;
  }
  
  setSelectedPlanet(id: number, newSelectedPlanet: Planet) {
    if (id < this.selectedUnits.length) {
      var searchUnit = this.getSelectedUnitById(id);
      searchUnit.selectedPlanet = newSelectedPlanet;
      searchUnit.selectedVehicle = null;


      this.selectedUnits[id] = searchUnit;
      this.calculateTimeTaken();
      this.allSelected = this.checkIfAllSelected();
      this.resetVehicleAvailability();
      this.selectedUnitChanged.next(id);
    }
  }

  setSelectedVehicle(id: number, newSelectedVehicle: Vehicle) {

    if (id < this.selectedUnits.length) {

      var searchUnit = this.getSelectedUnitById(id);
      searchUnit.selectedVehicle = newSelectedVehicle;

      this.selectedUnits[id] = searchUnit;
      
      this.calculateTimeTaken();
      this.allSelected = this.checkIfAllSelected();

      this.resetVehicleAvailability();
      this.selectedUnitChanged.next(id);

    }
  }

  checkIfAllSelected(): boolean {
    for(var unit of this.selectedUnits) {
      if(unit.selectedPlanet == null || unit.selectedVehicle == null) {
        return false;
      }
    }
    return true;
  }

  initAvailableVehicleMap() {
    if (this.allVehicles) {
      this.allVehicles.forEach(vehicle => {
        this.availableVehicle.set(vehicle, vehicle.total_no);
      });
    }
  }

  calculateTimeTaken() {
    this.timeTaken = 0;
    if (this.selectedUnits) {
      this.selectedUnits.forEach(unit => {
        if (unit.selectedPlanet != null && unit.selectedVehicle != null) {
          this.timeTaken += unit.selectedPlanet.distance / unit.selectedVehicle.speed
        }
      });
    }
  }

  resetVehicleAvailability() {

    //resetVehicleMap
    this.initAvailableVehicleMap();

    for (var i = 0; i < this.selectedUnits.length; i++) {
      var unit = this.selectedUnits[i];
      if (unit.selectedVehicle != null) {
        this.availableVehicle.set(unit.selectedVehicle, this.getAvailableNumByVehicle(unit.selectedVehicle) - 1);
      }
    }
  }


  reset() {

    for (var i = 0; i < this.maxSelectionUnits; i++) {
      this.selectedUnits[i] = new SearchUnit();
      this.selectedUnits[i].selectedPlanet = null;
      this.selectedUnits[i].selectedVehicle = null;
      
      this.allSelected = this.checkIfAllSelected();
      this.calculateTimeTaken();

      this.selectedUnitChanged.next(i);
    }

  }
}
