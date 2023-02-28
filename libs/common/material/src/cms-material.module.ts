import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentLayoutModule } from './layout/content-layout/content-layout.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContentLayoutModule
  ],
  exports: [
    // BhaConfirmModule,
    // BhaFiltroModule,
  ],
  providers: [
    // BhaUiService,
    // BhaFiltroService
  ]
})
export class CmsMaterialModule { }
