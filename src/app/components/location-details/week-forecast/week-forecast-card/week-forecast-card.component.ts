import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-forecast-card',
  templateUrl: './week-forecast-card.component.html',
  styleUrls: ['./week-forecast-card.component.scss']
})
export class WeekForecastCardComponent implements OnInit {
  @Input() dailyForecast;
  @Input() dailyIndex;

  constructor() { }

  ngOnInit(): void {
  }

}
