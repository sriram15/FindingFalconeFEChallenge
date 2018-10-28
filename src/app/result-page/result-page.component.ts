import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { FindResult } from '../models/api_model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  finalResult: FindResult;
  timeTaken: number;

  constructor(private stateService: StateService, private router:Router) { }

  ngOnInit() {
    this.finalResult = this.stateService.getFinalResult();
    this.timeTaken = this.stateService.getTimeTaken();
  }

  playAgain() {
    this.stateService.reset();
    
    this.router.navigate(['/home']);
  }
}
