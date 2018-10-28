import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ResultPageComponent } from './result-page.component';

export const routes: Routes = [
  { path: '', component: ResultPageComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);