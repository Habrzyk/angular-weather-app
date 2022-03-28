import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherForecastRoutingModule } from './weather-forecast-routing.module';
import { WeatherForecastComponent } from './weather-forecast.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { LocationDetailsComponent } from '../../components/location-details/location-details.component';
import { LocationListComponent } from '../../components/location-list/location-list.component';
import { DetailedForecastComponent } from '../../components/location-details/detailed-forecast/detailed-forecast.component';
import { WeekForecastComponent } from '../../components/location-details/week-forecast/week-forecast.component';
import { WeekForecastCardComponent } from '../../components/location-details/week-forecast/week-forecast-card/week-forecast-card.component';
import { DayForecastComponent } from '../../components/location-details/day-forecast/day-forecast.component';
import { DayForecastCardComponent } from '../../components/location-details/day-forecast/day-forecast-card/day-forecast-card.component';
import { TodayForecastComponent } from '../../components/location-details/today-forecast/today-forecast.component';
import { NoPageFoundComponent } from 'src/app/components/no-page-found/no-page-found.component';

@NgModule({
  declarations: [
    WeatherForecastComponent,
    WelcomeComponent,
    SearchBarComponent,
    LocationDetailsComponent,
    LocationListComponent,
    NoPageFoundComponent,
    TodayForecastComponent,
    WeekForecastCardComponent,
    WeekForecastComponent,
    DayForecastComponent,
    DayForecastCardComponent,
    DetailedForecastComponent
  ],
  imports: [
    CommonModule,
    WeatherForecastRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    WeatherForecastComponent
  ]
})
export class WeatherForecastModule { }
