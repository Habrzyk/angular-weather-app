import { Component, OnInit } from '@angular/core';
import { WeatherForecastWithLocationService } from 'src/app/services/weather-forecast-with-location/weather-forecast-with-location.service';
import { WeatherForecastWithLocation } from 'src/app/models/weather-forecast-with-location.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  weatherForecastWithLocationList: WeatherForecastWithLocation[];
  
  constructor(private weatherForecastWithLocationService: WeatherForecastWithLocationService) { }

  ngOnInit(): void {
    this.weatherForecastWithLocationService.weatherForecastWithLocationListObs
      .pipe(untilDestroyed(this))
      .subscribe((list: []) => (this.weatherForecastWithLocationList = list));
  }

  onDelete(id: string) {
    this.weatherForecastWithLocationService.removeWeatherForecastWithLocationFromList(id);
  }
}
