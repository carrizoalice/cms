import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CmsAvatarComponent } from './cms-avatar.component';

@NgModule({
  declarations: [CmsAvatarComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [CmsAvatarComponent],
})
export class CmsAvatarModule {}
