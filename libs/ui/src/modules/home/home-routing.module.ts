import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../../routes/home-page/home-page.component';

const HOME_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
];

export const HomeRoutingModule: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(HOME_ROUTES);
