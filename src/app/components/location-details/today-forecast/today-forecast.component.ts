import { Component, Input } from '@angular/core';
import { Weather, CurrentWeather } from 'src/app/models/weather-forecast.model';
import { Location } from 'src/app/models/location.model';

@Component({
  selector: 'app-today-forecast',
  templateUrl: './today-forecast.component.html',
  styleUrls: ['./today-forecast.component.scss']
})
export class TodayForecastComponent {
  @Input() currentWeather: CurrentWeather;
  @Input() weather: Weather;
  @Input() location: Location;
  @Input() imageURL: string;

  constructor() { 
  }
}
