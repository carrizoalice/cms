import { BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Nav } from '@cms/model';
import { ScreenService } from '@libs/ui';
import { navData } from './nav-data';
import { SideNavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() collapsed = false;
  // @ViewChild('sidenav') public sidenav: MatSidenav;
  navData: Nav[];

  isMd: boolean;

  constructor(
    private sideNavService: SideNavService,
    private screenService: ScreenService
  ) {
    this.navData = navData;
  }
  ngOnInit(): void {

    // this.sideNavService.sidenav$.subscribe(() => {
    //   this.sidenav.toggle();
    // });     
    
    // this.sideNavService.createSidenav(this.sidenav);

    this.screenService.isBelowMd().subscribe((isBelowMd: BreakpointState) => {
      this.isMd = isBelowMd.matches;
     
    });
  }

  clickMenu() { 
    this.sideNavService.toggle();
  }


}
