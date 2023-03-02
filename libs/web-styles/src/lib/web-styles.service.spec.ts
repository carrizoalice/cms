import { TestBed } from '@angular/core/testing';

import { WebStylesService } from './web-styles.service';

describe('WebStylesService', () => {
  let service: WebStylesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebStylesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
