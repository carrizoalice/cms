import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePrincipalModule } from '../../domains/home/home-principal.module';
import { HomePageComponent } from '../../routes/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomeRoutingModule, HomePrincipalModule],
  exports: [HomePageComponent],
  providers: [],
})
export class HomeModule {}
