import { Component } from '@angular/core';
import { WeatherApiService } from '../../services/weather-api/weather-api.service';
import { GeocodeApiService } from 'src/app/services/geocode-api/geocode-api.service';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';
import { Location } from 'src/app/models/location.model';
import { Router } from '@angular/router';
import { WeatherForecastWithLocationService } from 'src/app/services/weather-forecast-with-location/weather-forecast-with-location.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent {

  weatherForecast: WeatherForecast;
  location: Location;

  constructor(
    private weatherApiService: WeatherApiService, 
    private geocodeApiService: GeocodeApiService,
    private router: Router,
    private weatherForecastWithLocationService: WeatherForecastWithLocationService
    ) { }

  getWeatherUpdate(location: Location) {
    this.weatherApiService.getWeatherByPosition(location.position)
      .pipe(untilDestroyed(this))
      .subscribe((response) => {
        this.weatherForecast = <WeatherForecast>response;
        this.location = <Location>location;
        if (this.weatherForecast && this.location) {
          this.weatherForecastWithLocationService.addNewWeatherForecastWithLocation(this.weatherForecast, this.location);
          this.router.navigate(['location-details', this.location.id]);
        }
      });
  }

  searchLocation(locationName: string) {
    this.geocodeApiService.getLocation(locationName)
      .pipe(untilDestroyed(this))
      .subscribe((response) => {
        this.location = <Location>response.items[0];
        if (this.location) {
          this.getWeatherUpdate(this.location);
        }
      });
  }

}
