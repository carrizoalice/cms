import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { CmsCardComponent } from './cms-card.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CmsCardComponent],
  imports: [ CommonModule, MatCardModule, MatButtonModule],
  exports: [CmsCardComponent]
})
export class CardModule {}