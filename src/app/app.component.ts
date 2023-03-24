import { BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Usuario } from '@cms/model';
import { ScreenService } from '@libs/ui';
import { environment } from 'libs/admin/src/environment/environment';
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



    // this.sidenavService.sideNavToggleSubject.subscribe(()=> {
    //   this.sidenav.toggle();
    // });

    this.screenService.isBelowMd().subscribe((isBelowMd: BreakpointState) => {
      this.isBelowMd = isBelowMd.matches;

      if (this.isBelowMd){
        this.sidenav.toggle(false);
      }
    });

    this.getApplicationUrl('Auth');
  }

  selecciono(col: any){
    console.log('col', col)
    this.collapsed = col;
  }

  getApplicationUrl(rol: string):string{
    console.log('redirect', rol)
    switch(rol){
      case 'Admin':
        return environment.ADMIN_URL;
      case 'Auth':
        return environment.AUTHENTICATION_URL;
      default:
        return environment.AUTHENTICATION_URL;

    }
  }

}
