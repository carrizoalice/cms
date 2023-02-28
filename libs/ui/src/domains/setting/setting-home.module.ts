import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingHomeComponent } from './setting-home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [SettingHomeComponent],
  imports: [CommonModule],
  exports: [SettingHomeComponent],
})
export class SettingHomeModule {}
