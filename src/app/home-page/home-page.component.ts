import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { SearchUnit } from '../models/search-unit';
import { ApiService } from '../services/api.service';
import { TokenResult, FindPayload, FindResult } from '../models/api_model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private selectedSearchUnits: SearchUnit[];
  private timeTaken : number = 0;
  private allSelected : boolean = false;
  private initComplete = false;

  constructor(private stateService: StateService, private apiService: ApiService, private router: Router, private errorService: ErrorService) { }

  ngOnInit() {
    this.stateService.initWebService().then(res => {
      this.initComplete = true;
    })

    this.selectedSearchUnits = this.stateService.getSelectedUnits()
    this.stateService.selectedUnitChanged.subscribe((res) => {
      this.timeTaken = this.stateService.getTimeTaken();
      this.allSelected = this.stateService.getAllSelected();
    });
  }

  findFalcone() {
    this.apiService.getToken().pipe(
      map(res => <TokenResult>res),
    ).subscribe(res => {
      var token = res.token;
      var body: FindPayload = {
        token: token,
        planet_names: this.stateService.getPlanetAsArray(),
        vehicle_names: this.stateService.getVehicleAsArray()
      }
      this.apiService.findFalcone(body).pipe(
        map(res => <FindResult>res)
      ).subscribe(finalRes => {
        if(!finalRes.error) {
          this.stateService.setFinalResult(finalRes);
          this.router.navigate(['/result']);
        } else {
          this.errorService.showError("Token is not initialized");
        }

      }, (err) => {
        this.errorService.showError("Failed to get result");
      })
    }, (err) => this.errorService.showError("Failed to get Token"))
  }

}
