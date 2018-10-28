import { Component, OnInit, Input } from '@angular/core';
import { Planet } from 'src/app/models/planet';
import { SearchUnit } from 'src/app/models/search-unit';
import { Subscription } from 'rxjs';
import { StateService } from 'src/app/services/state.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'planet-select',
  templateUrl: './planet-select.component.html',
  styleUrls: ['./planet-select.component.css']
})
export class PlanetSelectComponent implements OnInit {

  @Input() id;
  planetOptions: any[];
  selectedPlanet = { value: '' };
  private selectedUnitSubscription: Subscription;

  constructor(private stateService: StateService, private errorService: ErrorService) {
  }

  ngOnInit() {
    //Init
    this.recalculateState();

    this.selectedUnitSubscription = this.stateService.selectedUnitChanged.subscribe((id) => {
      this.recalculateState();
    })
  }

  recalculateState() {
    var searchUnits = this.stateService.getSelectedUnits();

    // Reset Selected Planet on reset
    if(searchUnits[this.id] && searchUnits[this.id].selectedPlanet) {
      this.selectedPlanet.value = '';
    }

    if (searchUnits[this.id] && searchUnits[this.id].selectedPlanet != null) {
      this.selectedPlanet.value = searchUnits[this.id].selectedPlanet.name;
    }
    this.stateService.getAllPlanets().subscribe(planets => {
      this.planetOptions = planets;
      // Add disabled flag to all options
      this.planetOptions = this.planetOptions.map((arr) => {
        arr.disabled = false;
        return arr;
      });

      //Go throught the selected serach units and find the things to disable
      for (var i = 0; i < searchUnits.length; i++) {
        if (searchUnits[i].selectedPlanet != null) {
          this.planetOptions = this.planetOptions.map((arr) => {
            if (searchUnits[i].selectedPlanet.name == arr.name) {
              arr.disabled = true;
            }
            return arr;
          });
        }
      }
    }, (err) => this.errorService.showError("Unable to fetch Planets!"));

  }

  setPlanetSelection(selectedPlanet: Planet) {
    this.stateService.setSelectedPlanet(this.id, selectedPlanet);
  }

  valueSelected(event) {
    if (event.value != null) {
      var selectedPlanet = this.stateService.getPlanetByValue(event.value);
      this.setPlanetSelection(selectedPlanet);
    } else {
      this.setPlanetSelection(null)
    }
  }

  ngOnDestroy() {
    this.selectedUnitSubscription.unsubscribe();
  }
}
