import { Component, EventEmitter, Output } from '@angular/core';
import { SideNavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent {

  @Output() selecciono = new EventEmitter<boolean>();
  collapsed = false;

  constructor(private sideNavService: SideNavService){}

  clickMenu() { 
    this.sideNavService.toggle();
  }
}
