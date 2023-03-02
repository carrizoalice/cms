import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebStylesComponent } from './web-styles.component';

describe('WebStylesComponent', () => {
  let component: WebStylesComponent;
  let fixture: ComponentFixture<WebStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebStylesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
