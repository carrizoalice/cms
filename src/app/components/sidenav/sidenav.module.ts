import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from '../../app-routing.module';
import { SidenavComponent } from './sidenav.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, MatIconModule, AppRoutingModule, MatSidenavModule,MatFormFieldModule , MatSelectModule],
  exports: [SidenavComponent],
})
export class SidenavModule {}
