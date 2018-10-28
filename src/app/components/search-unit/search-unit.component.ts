import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { StateService } from 'src/app/services/state.service';
import { Planet } from 'src/app/models/planet';
import { Vehicle } from 'src/app/models/vehicle';
import { SearchUnit } from 'src/app/models/search-unit';

@Component({
  selector: 'search-unit',
  templateUrl: './search-unit.component.html',
  styleUrls: ['./search-unit.component.css']
})
export class SearchUnitComponent implements OnInit {

  @Input() id;
  selectedUnitSubscription: Subscription;
  searchUnit : SearchUnit;
  constructor(private stateService: StateService) { }

  ngOnInit() {

    this.searchUnit = this.stateService.getSelectedUnitById(this.id);

    this.selectedUnitSubscription = this.stateService.selectedUnitChanged.subscribe((id) => {
      // Update the search unit component
      if(this.id != id){
        this.searchUnit = this.stateService.getSelectedUnitById(this.id);
      }
    })
  }

}
