import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CardModule } from '../components/cms-card/cms-card.module';
import { SettingHomeComponent } from './setting-home.component';
@NgModule({
  declarations: [SettingHomeComponent],
  imports: [CommonModule, CardModule, MatButtonModule],
  exports: [SettingHomeComponent],
})
export class SettingHomeModule {}
