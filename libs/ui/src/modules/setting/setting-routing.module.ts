import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingHomePageComponent } from '../../routes/setting-home-page/setting-home-page.component';

const SETTING_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: SettingHomePageComponent },
];

export const SettingRoutingModule: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(SETTING_ROUTES);
