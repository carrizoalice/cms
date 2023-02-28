import { BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Usuario } from '@cms/model';
import { ScreenService } from '@libs/ui';
import { SideNavService } from './components/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cms';
  usuario: Usuario;
  collapsed: boolean;

  showFiller= false;

  @ViewChild('sidenav') public sidenav: MatSidenav;

  isBelowMd: boolean;

  constructor(private sidenavService: SideNavService, private screenService: ScreenService){

  }
  ngOnInit(): void {
    this.usuario = {
      nombre: 'Alice',
      apellido: 'Carris',
    }

    this.sidenavService.sideNavToggleSubject.subscribe(()=> {
      this.sidenav.toggle();
    });

    this.screenService.isBelowMd().subscribe((isBelowMd: BreakpointState) => {
      this.isBelowMd = isBelowMd.matches;

      if (this.isBelowMd){
        this.sidenav.toggle(false);
      }
    });
  }

  selecciono(col: any){
    console.log('col', col)
    this.collapsed = col;
  }

}
