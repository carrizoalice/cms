import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CardModule } from '../components/cms-card/cms-card.module';
import { SettingHomeComponent } from './setting-home.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [SettingHomeComponent],
  imports: [
    CommonModule,
    CardModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [SettingHomeComponent],
})
export class SettingHomeModule {}
