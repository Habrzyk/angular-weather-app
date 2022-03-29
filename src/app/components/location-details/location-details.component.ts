import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrentWeather, DailyWeather, HourlyWeather, Weather } from 'src/app/models/weather-forecast.model';
import { Location } from 'src/app/models/location.model';
import { WeatherForecastWithLocationService } from 'src/app/services/weather-forecast-with-location/weather-forecast-with-location.service';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent {

  weatherForecast: WeatherForecast;
  weather: Weather;
  currentWeather: CurrentWeather;
  weekForecast: DailyWeather[];
  dayForecast: HourlyWeather[];
  location: Location;
  imageURL: string;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private weatherForecastWithLocationService: WeatherForecastWithLocationService
  ) {
    route.params
      .pipe(untilDestroyed(this))
      .subscribe(val => {
        this.getLocationDetails();
      });
  }

  getLocationDetails() {
    this.id = this.route.snapshot.paramMap.get('id');
    let weatherForecastWithLocation = this.weatherForecastWithLocationService.getWeatherForecastWithLocation(this.id);
    this.weatherForecast = weatherForecastWithLocation.weatherForecast;
    this.location = weatherForecastWithLocation.location;
    this.currentWeather = this.weatherForecast.current;
    this.weekForecast = this.weatherForecast.daily;
    this.dayForecast = this.weatherForecast.hourly;
    this.weather = this.currentWeather.weather[0];
    this.imageURL = `../../../assets/svg/${this.weather.icon}.svg`;
  }
}
