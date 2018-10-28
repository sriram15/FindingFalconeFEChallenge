import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', loadChildren: './home-page/home-page.module#HomePageModule' },
  { path: 'result', loadChildren: './result-page/result-page.module#ResultPageModule'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);