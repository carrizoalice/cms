
import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SideNavService {
  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  // public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  sidenav$: BehaviorSubject<any> = new BehaviorSubject(null);

  sidenav: MatSidenav;
  constructor() {}

  createSidenav(sidenav: MatSidenav){
    this.sidenav = sidenav;
  }

  public toggle() {
    return this.sideNavToggleSubject.next(null);
    // return this.sidenav$.next(null);
  }
}


