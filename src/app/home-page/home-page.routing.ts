import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomePageComponent } from './home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);