import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CardModule } from '../components/cms-card/cms-card.module';
import { HomeComponent } from './home.component';
import { MatChipsModule } from '@angular/material/chips';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CardModule,
    MatButtonModule,
    MatTableModule,
    MatChipsModule,
  ],
  exports: [HomeComponent],
})
export class HomePrincipalModule {}
