import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from '../../app-routing.module';
import { MenuTopComponent } from './menu-top.component';
import { MatMenuModule } from '@angular/material/menu';
import { CmsAvatarModule } from '@libs/ui';
@NgModule({
  declarations: [MenuTopComponent],
  imports: [
    CommonModule,
    MatIconModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    CmsAvatarModule
  ],
  exports: [MenuTopComponent],
})
export class MenuTopModule {}
