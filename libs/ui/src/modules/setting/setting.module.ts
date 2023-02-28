import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SettingHomeModule } from '../../domains/setting/setting-home.module';
import { SettingHomePageComponent } from '../../routes/setting-home-page/setting-home-page.component';
import { SettingRoutingModule } from './setting-routing.module';

@NgModule({
  declarations: [SettingHomePageComponent],
  imports: [CommonModule, SettingRoutingModule, SettingHomeModule],
  exports: [],
  providers: [SettingHomePageComponent],
})
export class SettingModule {}
