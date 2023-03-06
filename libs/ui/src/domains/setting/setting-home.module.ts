import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CardModule } from '../components/cms-card/cms-card.module';
import { SettingHomeComponent } from './setting-home.component';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [SettingHomeComponent],
  imports: [CommonModule, CardModule, MatButtonModule, MatTableModule],
  exports: [SettingHomeComponent],
})
export class SettingHomeModule {}
