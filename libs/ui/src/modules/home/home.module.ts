import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent, HomePrincipalModule } from '@libs/ui';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomeRoutingModule, HomePrincipalModule],
  exports: [],
  providers: [HomePageComponent],
})
export class HomeModule {}
