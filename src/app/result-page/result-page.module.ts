import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultPageComponent } from './result-page.component';
import { routing } from './result-page.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ResultPageComponent]
})
export class ResultPageModule { }
