import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-setting-home',
  templateUrl: './setting-home.component.html'
})
export class SettingHomeComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
   dataSource: any

  @ViewChild(MatTable) table: MatTable<PeriodicElement>;

  constructor(){
  
  }




}
