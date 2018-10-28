import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private stateService: StateService, private router: Router) { }

  ngOnInit() {
  }

  reset() {
    this.stateService.reset();
    if(this.router.url != '/home') {
      this.router.navigate(['/home']);
    }
  }
}
