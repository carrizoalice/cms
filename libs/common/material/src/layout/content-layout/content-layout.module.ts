import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContentLayoutComponent } from "./content-layout.component";

@NgModule({
    declarations: [ContentLayoutComponent],
    imports: [
      CommonModule,
    ],
    exports:[ContentLayoutComponent]
  })
  export class ContentLayoutModule { }