import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../../routes/home-page/home-page.component';
import { SettingHomePageComponent } from '../../routes/setting-home-page/setting-home-page.component';

const HOME_ROUTES: Routes = [
  // { path: '', component: HomeComponent },
  // {
  //   path: '',
  //   component: SettingHomeComponent,
  //   children: [{ path: '', component: SettingHomePageComponent }],
  // },
  { path: '', pathMatch: 'full', component: HomePageComponent },
];

export const HomeRoutingModule: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(HOME_ROUTES);
