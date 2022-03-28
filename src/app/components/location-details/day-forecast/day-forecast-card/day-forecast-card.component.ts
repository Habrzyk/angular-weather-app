import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-forecast-card',
  templateUrl: './day-forecast-card.component.html',
  styleUrls: ['./day-forecast-card.component.scss']
})
export class DayForecastCardComponent {
  @Input() hourlyForecast;
  @Input() hourIndex;

  constructor() { }
}
