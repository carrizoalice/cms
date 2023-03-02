import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { CmsCardComponent } from './cms-card.component';

@NgModule({
  declarations: [CmsCardComponent],
  imports: [ CommonModule, MatCardModule],
  exports: [CmsCardComponent]
})
export class CardModule {}