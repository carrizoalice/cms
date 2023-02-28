import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from '../../app-routing.module';
import { MenuTopComponent } from './menu-top.component';

@NgModule({
  declarations: [MenuTopComponent],
  imports: [
    CommonModule,
    MatIconModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  exports: [MenuTopComponent],
})
export class MenuTopModule {}
