import { TestBed } from '@angular/core/testing';

import { GeocodeApiService } from './geocode-api.service';

describe('GeocodeService', () => {
  let service: GeocodeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeocodeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
