import { TestBed } from '@angular/core/testing';

import { WeatherForecastWithLocationService } from './weather-forecast-with-location.service';

describe('WeatherForecastWithLocationService', () => {
  let service: WeatherForecastWithLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherForecastWithLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
