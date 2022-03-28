import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detailed-forecast',
  templateUrl: './detailed-forecast.component.html',
  styleUrls: ['./detailed-forecast.component.scss']
})
export class DetailedForecastComponent {
  @Input() weatherForecast;

  constructor() { }
}
