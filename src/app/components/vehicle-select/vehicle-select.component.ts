import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { StateService } from 'src/app/services/state.service';
import { Vehicle, VehicleDisplay } from 'src/app/models/vehicle';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'vehicle-select',
  templateUrl: './vehicle-select.component.html',
  styleUrls: ['./vehicle-select.component.css']
})
export class VehicleSelectComponent implements OnInit {

  @Input() id;
  allVehicleOptions: VehicleDisplay[] = [];
  selectedVehicle: Vehicle;
  private selectedUnitSubscription: Subscription;

  constructor(private stateService: StateService, private errorService: ErrorService) { }

  ngOnInit() {
    this.recalculateState();

    this.selectedUnitSubscription = this.stateService.selectedUnitChanged.subscribe((id) => {
      this.recalculateState();
    });
  }

  recalculateState() {
    var selectedUnit = this.stateService.getSelectedUnitById(this.id);

    // Reset Selected Vehicle on reset
    if(!selectedUnit) {
      this.selectedVehicle = null;
    }

    if (selectedUnit) {
      this.selectedVehicle = selectedUnit.selectedVehicle;
      var selectedPlanet = selectedUnit.selectedPlanet;


      if (selectedPlanet) {
        // Get the vehicles only if the selected planet exist
        this.stateService.getAllvehicles().subscribe((vehicles) => {
          for (var i = 0; i < vehicles.length; i++) {
            this.allVehicleOptions[i] = new VehicleDisplay();
            this.allVehicleOptions[i].vehicle = vehicles[i];
            // Disable options where the vehicle cannot travel to that planet
            if (selectedPlanet.distance > vehicles[i].max_distance) {
              this.allVehicleOptions[i].disabled = true;
            } else {
              this.allVehicleOptions[i].disabled = false;
            }
            //TODO: Do the logic for finding the number
            this.allVehicleOptions[i].available = this.stateService.getAvailableNumByVehicle(vehicles[i]);
          }
        }, (err) => this.errorService.showError("Unable to get Vehicles!"));
      }
    }

  }

  onVehicleSelected(vehicleDisplay: VehicleDisplay) {
    if (!vehicleDisplay.disabled && vehicleDisplay.available > 0) {
      this.stateService.setSelectedVehicle(this.id, vehicleDisplay.vehicle);
    }

  }
}
